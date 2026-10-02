<template>
  <div
    class="fs-markdown"
    :style="style"
    v-html="html"
  />
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { renderMarkdown } from "@dative-gpi/foundation-shared-components/utils";

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

    // Safe to bind with v-html: renderMarkdown escapes raw HTML and rejects unsafe URLs
    const html = computed((): string => {
      const variables = Object.fromEntries(Object.entries(props.variableValues)
        .filter(([, value]) => value != null)
        .map(([code, value]) => [code, String(value)]));
      return renderMarkdown(props.content, variables);
    });

    return {
      style,
      html
    };
  }
});
</script>
