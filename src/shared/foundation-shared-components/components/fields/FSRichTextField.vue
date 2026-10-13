<template>
  <component
    :is="markdown ? 'FSMarkdownField' : 'FSStructuredTextField'"
    v-bind="fieldProps"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="{ ...slotData }"
      />
    </template>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { emptyLexicalState, isLexicalState } from "@dative-gpi/foundation-shared-components/utils";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { type RichTextVariable } from "../../models/richTextVariable";

import FSStructuredTextField from "./FSStructuredTextField.vue";
import FSMarkdownField from "./FSMarkdownField.vue";

export default defineComponent({
  name: "FSRichTextField",
  components: {
    FSStructuredTextField,
    FSMarkdownField
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    emptyLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: [Object, String] as PropType<{ [key: string]: any } | string | null>,
      required: false,
      default: null
    },
    // Format used to write an empty value, an existing value is always edited in its own format
    format: {
      type: String as PropType<"lexical" | "markdown">,
      required: false,
      default: "lexical"
    },
    linkColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rows: {
      type: Number,
      required: false,
      default: 5
    },
    variant: {
      type: String as PropType<"standard" | "readonly">,
      required: false,
      default: "standard"
    },
    variableReferences: {
      type: Array as PropType<Array<RichTextVariable>>,
      default: () => []
    },
    variableValues: {
      type: Object as PropType<{ [key: string]: any }>,
      required: false,
      default: () => ({})
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  inheritAttrs: false,
  setup(props) {
    const empty = computed((): boolean => {
      return !props.modelValue || props.modelValue === emptyLexicalState;
    });

    const markdown = computed((): boolean => {
      return empty.value ? props.format === "markdown" : !isLexicalState(props.modelValue);
    });

    // Every prop but the format is handed to the field, an empty Lexical state being an empty markdown
    const fieldProps = computed((): { [key: string]: any } => {
      const fieldProps: { [key: string]: any } = { ...props };
      delete fieldProps.format;
      if (markdown.value && empty.value) {
        fieldProps.modelValue = null;
      }
      return fieldProps;
    });

    return {
      fieldProps,
      markdown
    };
  }
});
</script>
