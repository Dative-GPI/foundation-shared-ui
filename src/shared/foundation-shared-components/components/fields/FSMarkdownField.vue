<template>
  <FSCol>
    <FSRow
      v-if="!readonly"
      align="bottom-left"
      :wrap="false"
    >
      <slot
        name="label"
      >
        <FSRow
          :wrap="false"
        >
          <FSSpan
            v-if="$props.label"
            class="fs-markdown-field-label"
            font="text-overline"
            :style="style"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan
            v-if="$props.label && $props.required"
            class="fs-markdown-field-label"
            style="margin-left: -8px;"
            font="text-overline"
            :ellipsis="false"
            :style="style"
          >
            *
          </FSSpan>
        </FSRow>
      </slot>
      <FSRow
        v-if="!$props.disabled"
        align="center-right"
        :wrap="false"
      >
        <template
          v-if="!preview"
        >
          <template
            v-for="(group, index) in tools"
            :key="index"
          >
            <FSIcon
              v-for="tool in group"
              :key="tool.icon"
              class="fs-markdown-field-icon"
              :color="ColorEnum.Dark"
              @mousedown.prevent
              @click="tool.action"
            >
              {{ tool.icon }}
            </FSIcon>
            <v-divider
              vertical
            />
          </template>
          <FSMenu
            v-if="$props.variableReferences && $props.variableReferences.length > 0"
            :closeOnContentClick="false"
            v-model="menuVariable"
          >
            <template
              #activator="{ props }"
            >
              <FSIcon
                v-bind="props"
                class="fs-markdown-field-icon"
                :color="ColorEnum.Dark"
                @mousedown.prevent
              >
                mdi-variable
              </FSIcon>
            </template>
            <FSCard
              padding="12"
              width="300px"
              :elevation="true"
            >
              <FSAutoCompleteField
                itemTitle="label"
                itemValue="code"
                :placeholder="$tr('rich-text-field.variable-placeholder', 'Choose a variable...')"
                :items="$props.variableReferences"
                @update:modelValue="insertVariable"
              />
            </FSCard>
          </FSMenu>
          <v-divider
            v-if="$props.variableReferences && $props.variableReferences.length > 0"
            vertical
          />
        </template>
        <FSIcon
          class="fs-markdown-field-icon"
          :color="preview ? ColorEnum.Primary : ColorEnum.Dark"
          @click="preview = !preview"
        >
          {{ preview ? "mdi-eye-off-outline" : "mdi-eye-outline" }}
        </FSIcon>
      </FSRow>
    </FSRow>
    <template
      v-if="readonly"
    >
      <FSText
        v-if="!$props.modelValue && $props.emptyLabel"
        variant="soft"
      >
        {{ $props.emptyLabel }}
      </FSText>
      <FSMarkdown
        v-else
        :content="$props.modelValue"
        :variableValues="variables"
        :linkColor="$props.linkColor"
      />
    </template>
    <FSMarkdown
      v-else-if="preview"
      class="fs-markdown-field-preview"
      :content="$props.modelValue"
      :variableValues="variables"
      :linkColor="$props.linkColor"
      :style="style"
    />
    <FSTextArea
      v-else
      ref="textAreaRef"
      :hideHeader="true"
      :clearable="false"
      :maxWidth="null"
      :rows="$props.rows"
      :disabled="$props.disabled"
      :modelValue="$props.modelValue"
      @update:modelValue="onUpdate"
    />
    <slot
      name="append-inner"
      v-bind="{ props: $props }"
    />
    <slot
      name="description"
    >
      <FSSpan
        v-if="!readonly && $props.description"
        class="fs-markdown-field-description"
        font="text-overline"
        :lineClamp="2"
        :style="style"
      >
        {{ $props.description }}
      </FSSpan>
    </slot>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { type RichTextVariable } from "../../models/richTextVariable";

import FSAutoCompleteField from "./FSAutocompleteField.vue";
import FSTextArea from "./FSTextArea.vue";
import FSMarkdown from "../FSMarkdown.vue";
import FSIcon from "../FSIcon.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSSpan from "../FSSpan.vue";
import FSMenu from "../FSMenu.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSMarkdownField",
  components: {
    FSAutoCompleteField,
    FSTextArea,
    FSMarkdown,
    FSText,
    FSSpan,
    FSIcon,
    FSCard,
    FSMenu,
    FSCol,
    FSRow
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
      type: String as PropType<string | null>,
      required: false,
      default: null
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
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();
    const { fontStyles } = useBreakpoints();
    const { getColors } = useColors();

    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const textAreaRef = ref<InstanceType<typeof FSTextArea> | null>(null);
    const menuVariable = ref(false);
    const preview = ref(false);

    const readonly = computed((): boolean => props.variant === "readonly");

    const variables = computed((): { [code: string]: any } => ({
      ...Object.fromEntries(props.variableReferences.map((variable) => [variable.code, variable.defaultValue])),
      ...props.variableValues
    }));

    const style = computed((): StyleValue => ({
      "--fs-markdown-field-color"       : props.disabled ? lights.dark : darks.base,
      "--fs-markdown-field-border-color": lights.dark,
      ...fontStyles.value
    }));

    const onUpdate = (value: string | null): void => {
      emit("update:modelValue", value || null);
    };

    // Replaces the selected text, execCommand keeps the change in the native undo stack (Ctrl+Z)
    const replaceSelection = (transform: (selected: string) => string, wholeLines: boolean = false): void => {
      const textarea: HTMLTextAreaElement | null = textAreaRef.value?.$el.querySelector("textarea") ?? null;
      if (!textarea) {
        return;
      }
      textarea.focus();
      if (wholeLines) {
        textarea.setSelectionRange(textarea.value.lastIndexOf("\n", textarea.selectionStart - 1) + 1, textarea.selectionEnd);
      }
      const selected = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd);
      document.execCommand("insertText", false, transform(selected));
    };

    const wrap = (before: string, after: string = before) => () => {
      replaceSelection((selected) => `${before}${selected || $tr("rich-text-field.text-placeholder", "text")}${after}`);
    };

    const prefix = (linePrefix: string) => () => {
      replaceSelection((selected) => selected.split("\n").map((line) => `${linePrefix}${line}`).join("\n"), true);
    };

    const tools: { icon: string, action: () => void }[][] = [
      [
        { icon: "mdi-format-header-1", action: prefix("# ") },
        { icon: "mdi-format-header-2", action: prefix("## ") },
        { icon: "mdi-format-header-3", action: prefix("### ") }
      ],
      [
        { icon: "mdi-format-bold", action: wrap("**") },
        { icon: "mdi-format-italic", action: wrap("_") },
        { icon: "mdi-format-strikethrough", action: wrap("~~") },
        { icon: "mdi-code-tags", action: wrap("`") },
        { icon: "mdi-link", action: wrap("[", "](https://)") }
      ],
      [
        { icon: "mdi-format-list-bulleted", action: prefix("- ") },
        { icon: "mdi-format-list-numbered", action: prefix("1. ") },
        { icon: "mdi-format-quote-close", action: prefix("> ") }
      ]
    ];

    const insertVariable = (code: string | null): void => {
      menuVariable.value = false;
      if (code) {
        replaceSelection(() => `{{${code}}}`);
      }
    };

    return {
      menuVariable,
      textAreaRef,
      ColorEnum,
      variables,
      readonly,
      preview,
      style,
      tools,
      insertVariable,
      onUpdate
    };
  }
});
</script>
