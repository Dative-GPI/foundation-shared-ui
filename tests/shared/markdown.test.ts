import { type MarkdownEdit, insertMarkdown, insertMarkdownLink, markdownLinePrefixes, renderMarkdown, toggleMarkdownLinePrefix, toggleMarkdownWrap } from '../../src/shared/foundation-shared-components/utils/markdown';

const apply = (value: string, edit: MarkdownEdit) => {
  const result = value.slice(0, edit.from) + edit.text + value.slice(edit.to);
  return { value: result, selection: result.slice(edit.selectionStart, edit.selectionEnd) };
};

describe('renderMarkdown security', () => {
  test('should escape raw HTML', () => {
    const html = renderMarkdown('<script>alert(1)</script><img src=x onerror="alert(1)">');
    expect(html).not.toContain('<script');
    expect(html).not.toContain('<img');
    expect(html).toContain('&lt;script&gt;');
  });

  test('should reject javascript, vbscript and data links', () => {
    for (const url of ['javascript:alert(1)', 'JaVaScRiPt:alert(1)', 'vbscript:msgbox(1)', 'data:text/html;base64,PHNjcmlwdD4=']) {
      expect(renderMarkdown(`[click](${url})`)).not.toContain('href');
    }
  });

  test('should not render images', () => {
    expect(renderMarkdown('![pixel](https://tracker.example/pixel.png)')).not.toContain('<img');
  });

  test('should open links in a new tab without opener', () => {
    const html = renderMarkdown('[site](https://example.com)');
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('rel="noopener noreferrer nofollow"');
  });

  test('should escape attribute injection in URLs', () => {
    expect(renderMarkdown('[a](https://example.com/"onmouseover="alert(1))')).not.toContain('"onmouseover');
  });
});

describe('renderMarkdown variables', () => {
  test('should replace known variables and keep unknown ones', () => {
    expect(renderMarkdown('Hello {{name}}, {{ unknown }}', { name: 'John' })).toBe('<p>Hello John, {{ unknown }}</p>\n');
  });

  test('should escape variable values and not parse them as markdown', () => {
    expect(renderMarkdown('{{name}}', { name: '<b>**John**</b>' })).toBe('<p>&lt;b&gt;**John**&lt;/b&gt;</p>\n');
  });

  test('should not replace variables in code', () => {
    expect(renderMarkdown('`{{name}}`', { name: 'John' })).toContain('<code>{{name}}</code>');
  });

  test('should replace variables inside formatted text', () => {
    expect(renderMarkdown('**{{name}}**', { name: 'John' })).toBe('<p><strong>John</strong></p>\n');
  });
});

describe('toggleMarkdownWrap', () => {
  test('should wrap the selection', () => {
    expect(apply('hello world', toggleMarkdownWrap('hello world', 6, 11, '**'))).toEqual({ value: 'hello **world**', selection: 'world' });
  });

  test('should keep whitespaces outside of markers', () => {
    expect(apply('hello world', toggleMarkdownWrap('hello world', 5, 11, '**')).value).toBe('hello **world**');
  });

  test('should unwrap when markers surround the selection', () => {
    expect(apply('hello **world**', toggleMarkdownWrap('hello **world**', 8, 13, '**'))).toEqual({ value: 'hello world', selection: 'world' });
  });

  test('should unwrap when the selection includes markers', () => {
    expect(apply('hello **world**', toggleMarkdownWrap('hello **world**', 6, 15, '**')).value).toBe('hello world');
  });

  test('should insert a selected placeholder without selection', () => {
    expect(apply('hello ', toggleMarkdownWrap('hello ', 6, 6, '_', 'text'))).toEqual({ value: 'hello _text_', selection: 'text' });
  });
});

describe('toggleMarkdownLinePrefix', () => {
  test('should add a heading on the current line', () => {
    expect(apply('a\nbc\nd', toggleMarkdownLinePrefix('a\nbc\nd', 3, 3, markdownLinePrefixes.h2)).value).toBe('a\n## bc\nd');
  });

  test('should replace another heading level', () => {
    expect(apply('# title', toggleMarkdownLinePrefix('# title', 0, 0, markdownLinePrefixes.h2)).value).toBe('## title');
  });

  test('should remove the same heading level', () => {
    expect(apply('## title', toggleMarkdownLinePrefix('## title', 0, 0, markdownLinePrefixes.h2)).value).toBe('title');
  });

  test('should number every selected line', () => {
    expect(apply('a\nb\nc', toggleMarkdownLinePrefix('a\nb\nc', 0, 5, markdownLinePrefixes.numberedList)).value).toBe('1. a\n2. b\n3. c');
  });

  test('should switch bullet list to numbered list', () => {
    expect(apply('- a\n- b', toggleMarkdownLinePrefix('- a\n- b', 0, 7, markdownLinePrefixes.numberedList)).value).toBe('1. a\n2. b');
  });

  test('should ignore the next line when the selection ends with a line break', () => {
    expect(apply('a\nb', toggleMarkdownLinePrefix('a\nb', 0, 2, markdownLinePrefixes.quote)).value).toBe('> a\nb');
  });
});

describe('insertions', () => {
  test('should wrap the selection in a link and select the URL', () => {
    expect(apply('see docs', insertMarkdownLink('see docs', 4, 8))).toEqual({ value: 'see [docs](https://)', selection: 'https://' });
  });

  test('should insert a variable in place of the selection', () => {
    expect(apply('Hello you', insertMarkdown('Hello you', 6, 9, '{{name}}')).value).toBe('Hello {{name}}');
  });
});
