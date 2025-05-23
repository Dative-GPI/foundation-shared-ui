<template>
  <FSCol>
    <FSRow
      v-if="!readonly"
    >
      <slot
        name="label"
      >
        <FSRow
          :wrap="false"
        >
          <FSSpan
            v-if="$props.label"
            class="fs-rich-text-field-label"
            font="text-overline"
            :style="style"
          >
            {{ $props.label }}
          </FSSpan>
          <FSSpan
            v-if="$props.label && $props.required"
            class="fs-rich-text-field-label"
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
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.undo"
          :style="style"
          @click="editor.dispatchCommand(UNDO_COMMAND, undefined)"
        >
          mdi-undo-variant
        </FSIcon>
        <v-divider
          vertical
        />
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h1')"
        >
          mdi-format-header-1
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h2')"
        >
          mdi-format-header-2
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatText('h3')"
        >
          mdi-format-header-3
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="formatParagraph()"
        >
          mdi-format-paragraph
        </FSIcon>
        <v-divider
          vertical
        />
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.bold"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')"
        >
          mdi-format-bold
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.italic"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')"
        >
          mdi-format-italic
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.underline"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')"
        >
          mdi-format-underline
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.strikethrough"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')"
        >
          mdi-format-strikethrough
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :color="toolbarColors.link"
          :style="style"
          @click="openLink"
        >
          mdi-link
        </FSIcon>
        <FSMenu
          v-if="$props.variableReferences && $props.variableReferences.length > 0"
          :closeOnContentClick="false"
          v-model="menuVariable"
        >
          <template
            v-slot:activator="{ props }"
          >
            <FSIcon
              v-bind="props"
              class="fs-rich-text-field-icon"
              :color="toolbarColors.variable"
              :style="style"
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
              @update:modelValue="insertVariable($event)"
            />
          </FSCard>
        </FSMenu>
        <v-divider
          vertical
        />
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'left')"
        >
          mdi-format-align-left
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'center')"
        >
          mdi-format-align-center
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'right')"
        >
          mdi-format-align-right
        </FSIcon>
        <FSIcon
          class="fs-rich-text-field-icon"
          :style="style"
          @click="editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, 'justify')"
        >
          mdi-format-align-justify
        </FSIcon>
      </FSRow>
    </FSRow>
    <FSText
      v-if="readonly && !$props.modelValue && $props.emptyLabel"
      variant="soft"
    >
      {{ $props.emptyLabel }}
    </FSText>
    <div
      :class="classes"
      :style="style"
    >
      <div
        class="fs-rich-text-field-content"
        :data-variable-values="variableValues"
        :contenteditable="!readonly && !$props.disabled && !loading"
        :data-readonly="$props.variant === 'readonly'"
        :id="id"
      />
      <slot
        name="append-inner"
        v-bind="{ props: $props }"
      />
    </div>

    <FSTextField
      v-if="isLink && !readonly && !$props.disabled"
      :hideHeader="true"
      @keypress.enter.stop="toggleLink"
      v-model="linkUrl"
    />
    <slot
      name="description"
    >
      <FSSpan
        v-if="!readonly && $props.description"
        class="fs-rich-text-field-description"
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
import { computed, defineComponent, onMounted, type PropType, ref, type StyleValue, watch } from "vue";

import { $createParagraphNode, $getSelection, $isElementNode, $isRangeSelection, $isNodeSelection, $setSelection, CAN_UNDO_COMMAND, createEditor, type ElementNode, FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, ParagraphNode, UNDO_COMMAND } from "lexical";
import { $createHeadingNode, HeadingNode, type HeadingTagType, registerRichText } from "@lexical/rich-text";
import { createEmptyHistoryState, registerHistory } from "@lexical/history";
import { $createLinkNode, $isLinkNode, LinkNode } from "@lexical/link";
import { $wrapNodes } from "@lexical/selection";

import { emptyLexicalState, getAncestor, getSelectedNode } from "@dative-gpi/foundation-shared-components/utils";
import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { $createVariableNode, $isVariableNode, VariableNode } from "../../models/variableNode";
import { type RichTextVariable } from "../../models/richTextVariable";

import FSAutoCompleteField from "./FSAutocompleteField.vue";
import FSTextField from "./FSTextField.vue";
import FSIcon from "../FSIcon.vue";
import FSCard from "../FSCard.vue";
import FSText from "../FSText.vue";
import FSMenu from '../FSMenu.vue';
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSRichTextField",
  components: {
    FSAutoCompleteField,
    FSTextField,
    FSText,
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
      type: [Object, String] as PropType<{ [key: string]: any } | string | null>,
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
    const { fontStyles, isMobileSized } = useBreakpoints();
    const { getColors } = useColors();

    const linkColors = computed(() => getColors(props.linkColor));
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const loading = ref(true);
    const canUndo = ref(false);
    const isLink = ref(false);
    const isBold = ref(false);
    const isItalic = ref(false);
    const isUnderline = ref(false);
    const isStrikethrough = ref(false);
    const isVariable = ref(false);
    const menuVariable = ref(false);

    const id = `${Math.random()}-editor`;

    const linkUrl = ref("https://");

    const config = {
      namespace: "MyEditor",
      theme: {
        paragraph: 'text-body',
        heading: {
          h1: 'text-h1',
          h2: 'text-h2',
          h3: 'text-h3'
        },
        link: 'editor-link',
        text: {
          bold: 'editor-text-bold',
          italic: 'editor-text-italic',
          underline: 'editor-text-underline',
          strikethrough: 'editor-text-strikethrough',
          underlineStrikethrough: 'editor-text-underline-strikethrough'
        }
      },
      nodes: [
        HeadingNode,
        LinkNode,
        ParagraphNode,
        VariableNode
      ],
      onError: console.error
    }

    const isEmpty = computed((): boolean => {
      return editor.getEditorState().isEmpty();
    });

    const editor = createEditor(config);

    onMounted((): void => {
      const contentEditableElement = document.getElementById(id);
      editor.setRootElement(contentEditableElement);
      registerRichText(editor);
      registerHistory(editor, createEmptyHistoryState(), 250);

      updateEditorState();
      loading.value = false;
    });

    const readonly = computed((): boolean => {
      return ["readonly"].includes(props.variant);
    });

    const style = computed((): StyleValue => {
      let minHeight: string | undefined = "auto";
      if (!readonly.value) {
        const base = isMobileSized.value ? 30 : 42;
        const row = isMobileSized.value ? 16 : 20;
        if (props.rows > 1) {
          minHeight = `${base + (props.rows - 1) * row}px`;
        }
        else {
          minHeight = `${base}px`;
        }
      }
      switch (props.variant) {
        case "standard": {
          if (props.disabled) {
            return {
              "--fs-rich-text-field-undo-cursor"        : "default",
              "--fs-rich-text-field-icon-cursor"        : "default",
              "--fs-rich-text-field-border-color"       : lights.base,
              "--fs-rich-text-field-color"              : lights.dark,
              "--fs-rich-text-field-active-border-color": lights.base,
              "--fs-rich-text-field-link-color"         : linkColors.value.light,
              "--fs-rich-text-field-min-height"         : minHeight,
              "--fs-rich-text-field-padding"            : isMobileSized.value ? "6px 16px" : "10px 12px",
              ...fontStyles.value
            };
          }
          else {
            return {
              "--fs-rich-text-field-undo-cursor"             : canUndo.value ? "pointer" : "default",
              "--fs-rich-text-field-icon-cursor"             : "pointer",
              "--fs-rich-text-field-border-color"            : lights.dark,
              "--fs-rich-text-field-color"                   : darks.base,
              "--fs-rich-text-field-active-border-color"     : darks.dark,
              "--fs-rich-text-field-link-color"              : linkColors.value.dark,
              "--fs-rich-text-field-min-height"              : minHeight,
              "--fs-rich-text-field-variable-backgroundcolor": getColors(ColorEnum.Primary).light,
              "--fs-rich-text-field-variable-color"          : getColors(ColorEnum.Primary).lightContrast!,
              "--fs-rich-text-field-padding"                 : isMobileSized.value ? "6px 16px" : "10px 12px",
              ...fontStyles.value
            };
          }
        }
        case "readonly": return {
          "--fs-rich-text-field-border-color"       : "transparent",
          "--fs-rich-text-field-color"              : darks.base,
          "--fs-rich-text-field-active-border-color": "transparent",
          "--fs-rich-text-field-link-color"         : linkColors.value.dark,
          "--fs-rich-text-field-min-height"         : minHeight,
          "--fs-rich-text-field-padding"            : "0",
          ...fontStyles.value
        }
      }
    });

    const classes = computed((): string[] => {
      const innerClasses = ["fs-rich-text-field"];
      if (!readonly.value) {
        innerClasses.push("fs-rich-text-field-readonly");
      }
      return innerClasses;
    });

    const toolbarColors = computed((): { [code: string]: string } => {
      if (!props.disabled) {
        return {
          undo: canUndo.value ? darks.base : lights.base,
          bold: isBold.value ? darks.base : lights.base,
          italic: isItalic.value ? darks.base : lights.base,
          underline: isUnderline.value ? darks.base : lights.base,
          strikethrough: isStrikethrough.value ? darks.base : lights.base,
          link: isLink.value ? darks.base : lights.base,
          variable: isVariable.value ? darks.base : lights.base
        };
      }
      else {
        return {
          undo: lights.base,
          bold: lights.base,
          italic: lights.base,
          underline: lights.base,
          strikethrough: lights.base,
          link: lights.base
        };
      }
    });

    const variableValues = computed(() => {
      return JSON.stringify(props.variableValues)
    });

    const updateToolbar = (): void => {
      const selection = $getSelection();
      isVariable.value = false;
      if ($isRangeSelection(selection)) {
        isBold.value = selection.hasFormat("bold");
        isItalic.value = selection.hasFormat("italic");
        isUnderline.value = selection.hasFormat("underline");
        isStrikethrough.value = selection.hasFormat("strikethrough");
        isLink.value = $isLinkNode(getSelectedNode(selection)) || $isLinkNode(getSelectedNode(selection).getParent());
      }
      else if($isNodeSelection(selection)){
        if($isVariableNode(selection?.getNodes()[0])){
          isVariable.value = true;
        }
      }
    };

    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
        if(loading.value) {
          return;
        }
        const editorModelValue = JSON.stringify(editorState.toJSON());
        if(editorModelValue === emptyLexicalState && props.modelValue !== null) {
          emit("update:modelValue", null);
          return;
        }
        if(editorModelValue !== emptyLexicalState && editorModelValue !== props.modelValue) {
          emit("update:modelValue", editorModelValue);
        }
      });
    });

    editor.registerCommand(CAN_UNDO_COMMAND, (payload) => {
      canUndo.value = payload;
      return false;
    }, 1);

    const formatText = (type: HeadingTagType) => {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createHeadingNode(type));
        }
      });
    };

    const formatParagraph = (): void => {
      editor.update(() => {
        const selection = $getSelection();

        if ($isRangeSelection(selection)) {
          $wrapNodes(selection, () => $createParagraphNode());
        }
      });
    };

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

    const openLink = (): void => {
      if (!isLink.value) {
        isLink.value = true;
      }
      else {
        editor.update(() => {
          const selection = $getSelection();

          if ($isRangeSelection(selection)) {
            toggleLink();
          }
        });
      }
    };

    const toggleLink = (): void => {
      editor.update(() => {
        const target = "_blank";
        const title = "";
        const rel = "noreferrer";
        const selection = $getSelection();
        $setSelection(null);

        if (selection != null) {
          const nodes = selection.extract();

          if (linkUrl.value === null) {
            // Remove LinkNodes
            nodes.forEach((node) => {
              const parent = node.getParent();
              if ($isLinkNode(parent)) {
                const children = parent.getChildren();
                for (let i = 0; i < children.length; i++) {
                  parent.insertBefore(children[i]);
                }
                parent.remove();
              }
            });
          }
          else {
            if (nodes.length === 1) {
              const firstNode = nodes[0];
              const linkNode = getAncestor(firstNode, $isLinkNode);
              if (linkNode !== null) {
                linkNode.setURL(linkUrl.value);
                if (target !== undefined) {
                  linkNode.setTarget(target);
                }
                if (rel !== null) {
                  linkNode.setRel(rel);
                }
                if (title !== undefined) {
                  linkNode.setTitle(title);
                }
                return;
              }
            }
            let prevParent: ElementNode | LinkNode | null = null;
            let linkNode: LinkNode | null = null;
            nodes.forEach((node) => {
              const parent = node.getParent();
              if (parent === linkNode || parent === null || ($isElementNode(node) && !node.isInline())) {
                return;
              }
              if ($isLinkNode(parent)) {
                linkNode = parent;
                parent.setURL(linkUrl.value);
                if (target !== undefined) {
                  parent.setTarget(target);
                }
                if (rel !== null) {
                  linkNode.setRel(rel);
                }
                if (title !== undefined) {
                  linkNode.setTitle(title);
                }
                return;
              }
              if (!parent.is(prevParent)) {
                prevParent = parent;
                linkNode = $createLinkNode(linkUrl.value, { rel, target, title });

                if ($isLinkNode(parent)) {
                  if (node.getPreviousSibling() === null) {
                    parent.insertBefore(linkNode);
                  }
                  else {
                    parent.insertAfter(linkNode);
                  }
                }
                else {
                  node.insertBefore(linkNode);
                }
              }
              if ($isLinkNode(node)) {
                if (node.is(linkNode)) {
                  return;
                }
                if (linkNode !== null) {
                  const children = node.getChildren();

                  for (let i = 0; i < children.length; i++) {
                    linkNode.append(children[i]);
                  }
                }
                node.remove();
                return;
              }
              if (linkNode !== null) {
                linkNode.append(node);
              }
            });
          }
        }
      });
      isLink.value = false;
    }

    const updateEditorState = () => {     
      if (JSON.stringify(editor.getEditorState().toJSON()) === props.modelValue) {
        return;
      }
      if (props.modelValue != null) {
        if (typeof props.modelValue === "string" && props.modelValue !== "") {
          editor.setEditorState(editor.parseEditorState(props.modelValue!));
          return;
        }
        if (typeof props.modelValue === "object") {
          editor.setEditorState(editor.parseEditorState(JSON.stringify(props.modelValue)));
          return;
        }
      }
      editor.setEditorState(editor.parseEditorState(emptyLexicalState));
    }

    watch(() => props.modelValue, () => {
      updateEditorState();
    });

    return {
      FORMAT_ELEMENT_COMMAND,
      FORMAT_TEXT_COMMAND,
      variableValues,
      toolbarColors,
      menuVariable,
      UNDO_COMMAND,
      ColorEnum,
      readonly,
      linkUrl,
      classes,
      loading,
      isEmpty,
      editor,
      isLink,
      style,
      id,
      formatParagraph,
      insertVariable,
      formatText,
      toggleLink,
      openLink
    };
  }
});
</script>