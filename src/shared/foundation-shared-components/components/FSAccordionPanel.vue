<template>
  <v-expansion-panel
    class="fs-accordion-panel"
    :collapseIcon="$props.collapseIcon"
    :expandIcon="$props.expandIcon"
    :disabled="false"
    :elevation="0"
    :style="style"
    :hideActions="$props.actionPosition === 'start'"
    v-bind="$attrs"
  >
    <v-expansion-panel-title>
      <template
        v-slot:default="{ expanded, collapseIcon, expandIcon }"
      >
        <FSRow
          gap="4px"
        >
          <FSCol
            v-if="$props.actionPosition === 'start'"
            width="hug"
            align="center-center"
          >
            <FSIcon
              size="22.5px"
              :icon="expanded ? collapseIcon : expandIcon"
            />
          </FSCol>
          <slot
            name="title"
          >
            <FSRow>
              <FSIcon
                v-if="$props.prependIcon"
              >
                {{ $props.prependIcon }}
              </FSIcon>
              <FSSpan
                class="fs-accordion-panel-title"
                :lineClamp="$props.lineClampTitle"
              >
                {{ $props.title }}
              </FSSpan>
            </FSRow>
          </slot>
        </FSRow>
      </template>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <slot
        name="content"
      >
        <FSText
          v-if="$props.variant === 'standard'"
          :lineClamp="$props.lineClampContent"
        >
          {{ $props.content }}
        </FSText>
        <FSRichTextField
          v-else-if="$props.variant === 'rich-text'"
          variant="readonly"
          :modelValue="$props.content"
        />
      </slot>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, type StyleValue } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { sizeToVar } from "@dative-gpi/foundation-shared-components/utils";

import FSRichTextField from "./fields/FSRichTextField.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSText from "./FSText.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSAccordionPanel",
  components: {
    FSRichTextField,
    FSIcon,
    FSSpan,
    FSText,
    FSRow
  },
  props: {
    prependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    content: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    paddingTitle: {
      type: [String, Number],
      required: false,
      default: "16px"
    },
    paddingContent: {
      type: [String, Number],
      required: false,
      default: "16px"
    },
    lineClampTitle: {
      type: Number,
      required: false,
      default: 2
    },
    lineClampContent: {
      type: Number,
      required: false,
      default: 5
    },
    divider: {
      type: Boolean,
      required: false,
      default: true
    },
    expandIcon: {
      type: String,
      required: false,
      default: ""
    },
    collapseIcon: {
      type: String,
      required: false,
      default: ""
    },
    variant: {
      type: String as PropType<"standard" | "rich-text">,
      required: false,
      default: "standard"
    },
    actionPosition: {
      type: String as () => "start" | "end",
      default: "end"
    }
  },
  setup(props) {
    const { getColors } = useColors();

    const backgrounds = getColors(ColorEnum.Background);
    const lights = getColors(ColorEnum.Light);

    const style = computed((): StyleValue => ({
      "--fs-accordion-panel-padding-title"   : sizeToVar(props.paddingTitle),
      "--fs-accordion-panel-padding-content" : sizeToVar(props.paddingContent),
      "--fs-accordion-panel-divider-size"    : props.divider ? "1px" : "0",
      "--fs-accordion-panel-divider-color"   : lights.dark,
      "--fs-accordion-panel-background-color": backgrounds.base
    }));

    return {
      style
    };
  }
});
</script>