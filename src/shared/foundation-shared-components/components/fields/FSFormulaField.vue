<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :messages="messages"
  >
    <template
      v-if="$slots.label"
      v-slot:label="slotData"
    >
      <slot
        name="label"
        v-bind="slotData"
      />
    </template>
    <template
      v-if="$slots.description"
      v-slot:description="slotData"
    >
      <slot
        name="description"
        v-bind="slotData"
      />
    </template>
    
    <div
      :class="classes"
      :style="style"
    >
      <div
        class="fs-formula-field-content"
        :data-variable-values="variableValues"
        :contenteditable="!$props.disabled && !loading"
        :id="id"
      />
      <FSButton
        v-if="$props.clearable && !$props.disabled && hasValue"
        icon="mdi-close"
        variant="icon"
        :color="ColorEnum.Dark"
        class="fs-formula-field-clear"
        @click="clear"
      />
      <FSMenu
        v-if="$props.variableReferences && $props.variableReferences.length > 0 && !$props.disabled"
        :closeOnContentClick="false"
        v-model="menuVariable"
      >
        <template
          v-slot:activator="{ props }"
        >
          <FSButton
            v-bind="props"
            icon="mdi-variable"
            variant="icon"
            :color="ColorEnum.Dark"
            class="fs-formula-field-variable"
          />
        </template>
        <FSCard
          padding="12"
          width="300px"
          :elevation="true"
        >
          <FSAutocompleteField
            itemTitle="label"
            itemValue="code"
            :placeholder="$tr('formula-field.variable-placeholder', 'Choose a variable...')"
            :items="$props.variableReferences"
            @update:modelValue="insertVariable($event)"
          />
        </FSCard>
      </FSMenu>
    </div>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, type StyleValue, watch } from "vue";

import { $createParagraphNode, $getSelection, $isRangeSelection, createEditor, ParagraphNode } from "lexical";
import { $createTextNode, TextNode } from "lexical";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { registerPlainText } from "@lexical/plain-text";

import { emptyLexicalState } from "@dative-gpi/foundation-shared-components/utils";
import { useBreakpoints, useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { $createVariableNode, $isVariableNode, VariableNode } from "../../models/variableNode";
import { type RichTextVariable } from "../../models/richTextVariable";

import FSAutocompleteField from "./FSAutocompleteField.vue";
import FSBaseField from "./FSBaseField.vue";
import FSButton from "../FSButton.vue";
import FSCard from "../FSCard.vue";
import FSMenu from "../FSMenu.vue";

export default defineComponent({
  name: "FSFormulaField",
  components: {
    FSAutocompleteField,
    FSBaseField,
    FSButton,
    FSCard,
    FSMenu
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
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    variableReferences: {
      type: Array as PropType<Array<RichTextVariable>>,
      default: () => []
    },
    variableValues: {
      type: Object as PropType<{ [key: string]: any }>,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { fontStyles, isMobileSized } = useBreakpoints();
    const { validateOn, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const loading = ref(true);
    const menuVariable = ref(false);

    const id = `fs-formula-field-${Math.random().toString(36).substr(2, 9)}`;

    const config = {
      namespace: "FormulaEditor",
      theme: {
        paragraph: "fs-formula-field-paragraph",
        text: {
          base: "fs-formula-field-text"
        }
      },
      nodes: [
        ParagraphNode,
        TextNode,
        VariableNode
      ],
      onError: console.error
    };

    const editor = createEditor(config);

    onMounted((): void => {
      const contentEditableElement = document.getElementById(id);
      editor.setRootElement(contentEditableElement);
      registerPlainText(editor);
      registerHistory(editor, createEmptyHistoryState(), 250);

      updateEditorState();
      loading.value = false;
    });

    const hasValue = computed((): boolean => {
      return !!props.modelValue && props.modelValue.trim() !== "";
    });

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-formula-field-cursor"             : "default",
          "--fs-formula-field-border-color"       : lights.base,
          "--fs-formula-field-color"              : lights.dark,
          "--fs-formula-field-active-border-color": lights.base,
          "--fs-formula-field-variable-background": lights.light,
          "--fs-formula-field-variable-color"     : lights.dark,
          "--fs-base-field-input-height"          : isMobileSized.value ? "34px" : "38px",
          ...fontStyles.value
        };
      }
      return {
        "--fs-formula-field-cursor"             : "text",
        "--fs-formula-field-border-color"       : lights.dark,
        "--fs-formula-field-color"              : darks.base,
        "--fs-formula-field-active-border-color": darks.dark,
        "--fs-formula-field-error-border-color" : errors.base,
        "--fs-formula-field-variable-background": getColors(ColorEnum.Primary).light,
        "--fs-formula-field-variable-color"     : getColors(ColorEnum.Primary).lightContrast!,
        "--fs-base-field-input-height"          : isMobileSized.value ? "34px" : "38px",
        ...fontStyles.value
      };
    });

    const classes = computed((): string[] => {
      const classes = ["fs-formula-field"];
      if (props.disabled) {
        classes.push("fs-formula-field--disabled");
      }
      return classes;
    });

    const variableValues = computed(() => {
      return JSON.stringify(props.variableValues);
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    // Convert Lexical editor state to plain string with variables as {code}
    const lexicalToPlainString = (): string => {
      let result = "";
      editor.getEditorState().read(() => {
        const root = editor.getEditorState()._nodeMap.get("root");
        if (root) {
          root.getChildren().forEach(child => {
            if (child.getType() === "paragraph") {
              child.getChildren().forEach(textChild => {
                if ($isVariableNode(textChild)) {
                  result += `{${textChild.__code}}`;
                } else if (textChild.getType() === "text") {
                  result += textChild.getTextContent();
                }
              });
            }
          });
        }
      });
      return result;
    };

    // Convert plain string with {code} variables back to Lexical state
    const plainStringToLexical = (value: string | null): void => {
      if (!value) {
        editor.setEditorState(editor.parseEditorState(emptyLexicalState));
        return;
      }

      editor.update(() => {
        const root = editor.getEditorState()._nodeMap.get("root");
        if (root) {
          root.clear();
          const paragraph = $createParagraphNode();
          
          // Parse the string and create nodes
          const parts = value.split(/(\{[^}]+\})/);
          
          parts.forEach(part => {
            if (part.startsWith("{") && part.endsWith("}")) {
              // This is a variable
              const code = part.slice(1, -1);
              const variable = props.variableReferences.find(v => v.code === code);
              if (variable) {
                const variableNode = $createVariableNode(code, variable.defaultValue);
                paragraph.append(variableNode);
              } else {
                // Variable not found in references, treat as plain text
                const textNode = $createTextNode(part);
                paragraph.append(textNode);
              }
            } else if (part) {
              // This is plain text
              const textNode = $createTextNode(part);
              paragraph.append(textNode);
            }
          });
          
          root.append(paragraph);
        }
      });
    };

    const updateEditorState = () => {
      if (loading.value) {
        return;
      }
      plainStringToLexical(props.modelValue);
    };

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        if (loading.value) {
          return;
        }
        const plainString = lexicalToPlainString();
        if (plainString !== props.modelValue) {
          emit("update:modelValue", plainString || null);
        }
      });
    });

    const insertVariable = (code: string) => {
      const variable = props.variableReferences.find((v) => v.code === code);
      if (!variable) {
        return;
      }
      menuVariable.value = false;
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const variableNode = $createVariableNode(code, variable.defaultValue);
          selection.insertNodes([variableNode]);
        }
      });
    };

    const clear = () => {
      emit("update:modelValue", null);
      editor.setEditorState(editor.parseEditorState(emptyLexicalState));
    };

    watch(() => props.modelValue, () => {
      updateEditorState();
    });

    return {
      validateOn,
      ColorEnum,
      variableValues,
      menuVariable,
      messages,
      classes,
      loading,
      hasValue,
      slots,
      style,
      id,
      insertVariable,
      clear
    };
  }
});
</script>

<style lang="scss" scoped>
.fs-formula-field {
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid var(--fs-formula-field-border-color);
  border-radius: 4px;
  min-height: var(--fs-base-field-input-height);
  background-color: transparent;
  cursor: var(--fs-formula-field-cursor);
  
  &:focus-within {
    border-color: var(--fs-formula-field-active-border-color);
    outline: none;
  }
  
  &--disabled {
    background-color: rgba(0, 0, 0, 0.04);
  }
}

.fs-formula-field-content {
  flex: 1;
  padding: 8px 12px;
  outline: none;
  color: var(--fs-formula-field-color);
  font-family: inherit;
  font-size: inherit;
  line-height: 1.5;
  white-space: nowrap;
  overflow: hidden;
  
  &:empty::before {
    content: attr(placeholder);
    color: rgba(0, 0, 0, 0.38);
    pointer-events: none;
  }
}

.fs-formula-field-clear,
.fs-formula-field-variable {
  margin-right: 8px;
}

:deep(.fs-richtextfield-node-variable) {
  .fs-rich-text-field-node-variable-code {
    background-color: var(--fs-formula-field-variable-background);
    color: var(--fs-formula-field-variable-color);
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 0.875em;
    white-space: nowrap;
    user-select: none;
  }
}

:deep(.fs-formula-field-paragraph) {
  margin: 0;
}

:deep(.fs-formula-field-text) {
  font-family: inherit;
}
</style>