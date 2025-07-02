<template>
  <FSBaseField
    :required="$props.required"
    :label="$props.label"
    :width="$props.width"
    :maxWidth="null"
    :hideHeader="$props.hideHeader"
  >
    <FSRow
      v-if="$props.source || $props.modelValue"
      :height="$props.height"
      class="fs-edit-image-full"
    >
      <FSImageUI
        :aspectRatio="$props.aspectRatio"
        width="100%"
        height="100%"
        :source="$props.source"
        :imageB64="$props.modelValue"
        v-bind="$attrs"
      />
      <FSRow
        class="fs-edit-image-full-toolbar"
        padding="4px"
      >
        <FSButtonFileMini
          accept=".jpg,.jpeg,.png"
          :readFile="false"
          @update:metadata="onUpload"
        />
        <FSButtonRemoveMini
          @click="onRemove"
        />
      </FSRow>
    </FSRow>
    <FSClickable
      v-else
      borderStyle="dashed"
      variant="background"
      :height="$props.height"
      width="100%"
      @click="() => invisibleButtonRef?.input.click()"
    >
      <FSRow
        align="center-center"
        :wrap="false"
      >
        <FSIcon>
          mdi-plus-box-outline
        </FSIcon>
        <FSText
          font="text-body"
          :lineClamp="2"
        >
          {{ $tr('edit-image.add-image', 'Add an image.') }}
        </FSText>
        <FSButtonFileMini
          class="fs-edit-image-hidden-button"
          ref="invisibleButtonRef"
          accept=".jpg,.jpeg,.png"
          :readFile="false"
          @update:metadata="onUpload"
        />
      </FSRow>
    </FSClickable>
  </FSBaseField>
  <FSCropImageDialog

  />
</template>

<script lang="ts">
import { defineComponent, type PropType, ref } from "vue";

import { useFiles } from "@dative-gpi/foundation-shared-services/composables";

import FSCropImageDialog from '@dative-gpi/foundation-shared-components/components/fields/editImage/FSCropImageDialog.vue';
import FSBaseField from '@dative-gpi/foundation-shared-components/components/fields/FSBaseField.vue';
import FSButtonRemoveMini from "../../buttons/FSButtonRemoveMini.vue";
import FSButtonFileMini from "../../buttons/FSButtonFileMini.vue";
import FSClickable from "../../FSClickable.vue";
import FSImageUI from "../../FSImageUI.vue";
import FSText from "../../FSText.vue";
import FSRow from "../../FSRow.vue";

export default defineComponent({
  name: "FSFullEditImageUI",
  components: {
    FSButtonRemoveMini,
    FSCropImageDialog,
    FSButtonFileMini,
    FSBaseField,
    FSClickable,
    FSImageUI,
    FSText,
    FSRow
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: null
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    source: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    aspectRatio: {
      type: Number as PropType<number | null>,
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
    }
  },
  emits: ["update", "update:modelValue", "update:source"],
  setup(props, { emit }) {
    const { readFile } = useFiles();

    const invisibleButtonRef = ref<HTMLFormElement | null>(null);

    const onUpload = async (payload: File) => {
      const content = (await readFile(payload)) as string;
      const newModelValue = content.substring(content.indexOf(',') + 1);
      if (props.source) {
        emit("update:modelValue", newModelValue);
        emit("update:source", null);
        emit("update", { source: null, modelValue: newModelValue });
      } 
      else {
        emit("update:modelValue", newModelValue);
        emit("update", { source: props.source, modelValue: newModelValue });
      }
    };

    const onRemove = () => {
      if (props.modelValue) {
        emit("update:modelValue", null);
        emit("update", { source: props.source, modelValue: null });
      }
      else {
        emit("update:source", null);
        emit("update", { source: null, modelValue: props.modelValue });
      }
    };

    return {
      invisibleButtonRef,
      onUpload,
      onRemove
    };
  }
});
</script>