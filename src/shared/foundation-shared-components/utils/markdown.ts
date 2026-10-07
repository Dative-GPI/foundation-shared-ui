import MarkdownIt, { type StateCore } from "markdown-it";

export const markdownVariableRegex = /\{\{\s*([\w.-]+)\s*\}\}/g;

// Security: `html: false` escapes any raw HTML typed by the user, and markdown-it's
// default `validateLink` rejects `javascript:`, `vbscript:`, `file:` and `data:` URLs.
// The output of `renderMarkdown` is therefore safe to bind with `v-html`.
const markdownIt = new MarkdownIt("default", {
  html: false,
  linkify: true,
  breaks: true,
  typographer: false
});

// Images would let any user make viewers' browsers load arbitrary external resources
markdownIt.disable("image");

markdownIt.renderer.rules.link_open = (tokens, index, options, _env, self) => {
  tokens[index].attrSet("target", "_blank");
  tokens[index].attrSet("rel", "noopener noreferrer nofollow");
  return self.renderToken(tokens, index, options);
};

// Replaces `{{code}}` in text nodes only (not in code spans or links URLs).
// Values end up in text tokens, so they are HTML-escaped by the renderer and never parsed as markdown.
markdownIt.core.ruler.after("text_join", "variables", (state: StateCore): void => {
  const variables = state.env?.variables as { [code: string]: string } | undefined;
  if (!variables) {
    return;
  }
  for (const blockToken of state.tokens) {
    if (blockToken.type !== "inline" || !blockToken.children) {
      continue;
    }
    for (const token of blockToken.children) {
      if (token.type === "text") {
        token.content = token.content.replace(markdownVariableRegex, (match, code: string) => variables[code] ?? match);
      }
    }
  }
});

export const renderMarkdown = (source: string | null | undefined, variables?: { [code: string]: string }): string => {
  if (!source) {
    return "";
  }
  return markdownIt.render(source, { variables });
};

/**
 * Splits a text into [leading whitespaces, content, trailing whitespaces].
 */
export const splitWhitespaces = (text: string): [string, string, string] => {
  const core = text.trim();
  if (!core) {
    return [text, "", ""];
  }
  const leading = text.length - text.trimStart().length;
  return [text.slice(0, leading), core, text.slice(leading + core.length)];
};

/**
 * Describes a text replacement to apply on a textarea, with the selection to restore afterwards.
 * Selection indexes are relative to the value after replacement.
 */
export interface MarkdownEdit {
  from: number;
  to: number;
  text: string;
  selectionStart: number;
  selectionEnd: number;
}

export const insertMarkdown = (value: string, start: number, end: number, text: string): MarkdownEdit => ({
  from: start,
  to: end,
  text,
  selectionStart: start + text.length,
  selectionEnd: start + text.length
});

/**
 * Toggles an inline marker (`**`, `_`, `~~`, `` ` ``) around the selection.
 * Surrounding whitespaces are kept outside of the markers, as CommonMark would not parse `** bold**`.
 */
export const toggleMarkdownWrap = (value: string, start: number, end: number, marker: string, placeholder: string = ""): MarkdownEdit => {
  const selected = value.slice(start, end);
  const length = marker.length;

  if (value.slice(start - length, start) === marker && value.slice(end, end + length) === marker) {
    return {
      from: start - length,
      to: end + length,
      text: selected,
      selectionStart: start - length,
      selectionEnd: end - length
    };
  }
  if (selected.length >= 2 * length && selected.startsWith(marker) && selected.endsWith(marker)) {
    const inner = selected.slice(length, -length);
    return {
      from: start,
      to: end,
      text: inner,
      selectionStart: start,
      selectionEnd: start + inner.length
    };
  }

  const [leading, core, trailing] = splitWhitespaces(selected);
  const content = core || placeholder;
  const contentStart = start + leading.length + length;
  return {
    from: start,
    to: end,
    text: `${leading}${marker}${content}${marker}${trailing}`,
    selectionStart: contentStart,
    selectionEnd: contentStart + content.length
  };
};

/**
 * Wraps the selection in a link, and selects the URL so the user can directly type or paste it.
 */
export const insertMarkdownLink = (value: string, start: number, end: number, placeholder: string = "", url: string = "https://"): MarkdownEdit => {
  const [leading, core, trailing] = splitWhitespaces(value.slice(start, end));
  const label = core || placeholder;
  const urlStart = start + leading.length + label.length + 3;
  return {
    from: start,
    to: end,
    text: `${leading}[${label}](${url})${trailing}`,
    selectionStart: urlStart,
    selectionEnd: urlStart + url.length
  };
};

export interface MarkdownLinePrefix {
  /** Prefix to add at the beginning of each line */
  prefix: (index: number) => string;
  /** Matches lines already formatted with this exact prefix */
  match: RegExp;
  /** Matches every prefix of the same family, removed before applying the new one (e.g. h1 → h2) */
  family: RegExp;
}

export const markdownLinePrefixes = {
  h1: { prefix: () => "# ", match: /^#\s+/, family: /^#{1,6}\s+/ },
  h2: { prefix: () => "## ", match: /^##\s+/, family: /^#{1,6}\s+/ },
  h3: { prefix: () => "### ", match: /^###\s+/, family: /^#{1,6}\s+/ },
  bulletList: { prefix: () => "- ", match: /^[-*+]\s+/, family: /^([-*+]|\d+[.)])\s+/ },
  numberedList: { prefix: (index: number) => `${index + 1}. `, match: /^\d+[.)]\s+/, family: /^([-*+]|\d+[.)])\s+/ },
  quote: { prefix: () => "> ", match: /^>\s?/, family: /^>\s?/ }
} satisfies { [key: string]: MarkdownLinePrefix };

/**
 * Toggles a block prefix (heading, list, quote) on every line touched by the selection.
 */
export const toggleMarkdownLinePrefix = (value: string, start: number, end: number, linePrefix: MarkdownLinePrefix): MarkdownEdit => {
  // A selection ending right after a line break (e.g. triple click) should not include the next line
  const lastIndex = end > start && value[end - 1] === "\n" ? end - 1 : end;
  const from = value.lastIndexOf("\n", start - 1) + 1;
  const lineEnd = value.indexOf("\n", lastIndex);
  const to = lineEnd === -1 ? value.length : lineEnd;

  const lines = value.slice(from, to).split("\n");
  const remove = lines.every((line) => linePrefix.match.test(line));
  const text = lines
    .map((line, index) => remove ? line.replace(linePrefix.match, "") : `${linePrefix.prefix(index)}${line.replace(linePrefix.family, "")}`)
    .join("\n");

  return {
    from,
    to,
    text,
    selectionStart: start === end ? from + text.length : from,
    selectionEnd: from + text.length
  };
};

/**
 * Applies an edit to a textarea through `execCommand` so that the change stays in the native undo stack (Ctrl+Z),
 * falls back on `setRangeText` otherwise. Both fire an `input` event, so `v-model` stays in sync.
 */
export const applyMarkdownEdit = (textarea: HTMLTextAreaElement, edit: MarkdownEdit): void => {
  textarea.focus();
  textarea.setSelectionRange(edit.from, edit.to);
  const applied = document.execCommand?.(edit.text ? "insertText" : "delete", false, edit.text);
  if (!applied) {
    textarea.setRangeText(edit.text, edit.from, edit.to);
    textarea.dispatchEvent(new Event("input", { bubbles: true }));
  }
  textarea.setSelectionRange(edit.selectionStart, edit.selectionEnd);
};
