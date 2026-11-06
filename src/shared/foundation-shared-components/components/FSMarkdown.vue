<template>
  <div
    class="fs-markdown"
    :style="style"
    v-html="html"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import MarkdownIt from "markdown-it";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSMarkdown",
  props: {
    content: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variableValues: {
      type: Object as PropType<{ [code: string]: any }>,
      required: false,
      default: () => ({})
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    },
    linkColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    showImages: {
      type: Boolean,
      required: false,
      default: false
    },
    clickableUrls: {
      type: Boolean,
      required: false,
      default: true
    },
    keepLineBreaks: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {
    const { fontStyles } = useBreakpoints();
    const { getColors } = useColors();

    const lights = getColors(ColorEnum.Light);

    const style = computed((): StyleValue => ({
      "--fs-markdown-color"       : getColors(props.color).base,
      "--fs-markdown-link-color"  : getColors(props.linkColor).dark,
      "--fs-markdown-border-color": lights.dark,
      "--fs-markdown-code-color"  : lights.base,
      ...fontStyles.value
    }));

    const markdownIt = computed(() => {
      // Raw HTML is always escaped and markdown-it rejects unsafe links (javascript:, data:...), so the output can be bound with v-html
      const instance = new MarkdownIt({ html: false, linkify: props.clickableUrls, breaks: props.keepLineBreaks });
      if (!props.showImages) {
        instance.disable("image");
      }

      instance.renderer.rules.link_open = (tokens, index, options, _env, self) => {
        tokens[index].attrSet("target", "_blank");
        tokens[index].attrSet("rel", "noopener noreferrer nofollow");
        return self.renderToken(tokens, index, options);
      };

      // Replaces {{code}} in text only, not in code or URLs. Values are escaped by the renderer like any other text
      instance.core.ruler.after("text_join", "variables", (state) => {
        for (const token of state.tokens.flatMap((block) => block.children ?? [])) {
          if (token.type === "text") {
            token.content = token.content.replace(/\{\{\s*([\w.-]+)\s*\}\}/g, (match, code) => props.variableValues[code] ?? match);
          }
        }
      });

      return instance;
    });

    const html = computed((): string => {
      return props.content ? markdownIt.value.render(props.content) : "";
    });

    return {
      style,
      html
    };
  }
});
</script>
