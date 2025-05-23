<template>
  <FSCol
    gap="8px"
  >
    <slot
      v-if="!$props.hideHeader"
      name="label"
    >
      <FSRow
        :wrap="false"
      >
        <FSSpan
          v-if="$props.label"
          class="fs-edit-image-label"
          font="text-overline"
          :style="style"
        >
          {{ $props.label }}
        </FSSpan>
        <FSSpan
          v-if="$props.label && $props.required"
          class="fs-edit-image-label"
          style="margin-left: -8px;"
          font="text-overline"
          :ellipsis="false"
          :style="style"
        >
          *
        </FSSpan>
      </FSRow>
    </slot>
    <FSCard
      v-if="['standard'].includes($props.variant)"
      padding="12px"
      width="100%"
    >
      <FSRow
        align="center-left"
        :wrap="false"
      >
        <FSRow
          class="fs-edit-image-standard-row"
          gap="24px"
          :wrap="false"
        >
          <FSImageUI
            v-if="$props.source || $props.modelValue"
            :aspectRatio="$props.aspectRatio"
            :height="$props.height"
            :width="$props.width"
            :source="$props.source"
            :imageB64="$props.modelValue"
            v-bind="$attrs"
          />
          <FSCard
            v-else
            borderStyle="dashed"
            :aspectRatio="$props.aspectRatio"
            :height="$props.height"
            :width="$props.width"
          />
          <FSCol
            class="fs-edit-image-standard-label-wrapper"
            align="center-left"
            height="fill"
            width="hug"
            gap="10px"
          >
            <FSText
              v-if="fileSelected && fileSelected.fileName"
              font="text-body"
              :lineClamp="2"
            >
              {{ fileSelected.fileName }}
            </FSText>
            <FSCol
              gap="0px"
            >
              <FSText
                class="fs-edit-image-overline"
                font="text-overline"
                :style="style"
              >
                {{ $tr('edit-image.format', 'PNG or JPG format') }}
              </FSText>
              <FSText
                class="fs-edit-image-overline"
                font="text-overline"
                :style="style"
              >
                {{ $tr('edit-image.max-size', '10 MB Maximum') }}
              </FSText>
            </FSCol>
          </FSCol>
        </FSRow>
        <FSRow
          align="center-right"
          :width="isExtraSmall ? '40px' : 'hug'"
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
    </FSCard>
    <FSRow
      v-else-if="$props.source || $props.modelValue"
      :width="$props.width"
      class="fs-edit-image-full"
    >
      <FSImageUI
        :aspectRatio="$props.aspectRatio"
        :height="$props.height"
        :width="$props.width"
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
      :width="$props.width"
      @click="() => invisibleButtonRef.input.click()"
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
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue, watch } from "vue";

import { useBreakpoints, useColors } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum, type FileImage } from "@dative-gpi/foundation-shared-components/models";
import { useFiles } from "@dative-gpi/foundation-shared-services/composables";

import FSButtonRemoveMini from "./buttons/FSButtonRemoveMini.vue";
import FSButtonFileMini from "./buttons/FSButtonFileMini.vue";
import FSClickable from "./FSClickable.vue";
import FSImageUI from "./FSImageUI.vue";
import FSCard from "./FSCard.vue";
import FSText from "./FSText.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSEditImageUI",
  components: {
    FSButtonRemoveMini,
    FSButtonFileMini,
    FSClickable,
    FSImageUI,
    FSCard,
    FSText,
    FSCol,
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
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    variant: {
      type: String as PropType<"standard" | "full">,
      required: false,
      default: "standard"
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
    const { isExtraSmall } = useBreakpoints();
    const { getColors } = useColors();
    const { readFile } = useFiles();

    const fileSelected = ref<FileImage>({ fileName: "", fileContent: null });
    const invisibleButtonRef = ref<HTMLFormElement | null>(null);

    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const style = computed((): StyleValue => ({
      "--fs-edit-image-overline-text-color": lights.dark,
      "--fs-edit-image-color"              : darks.base,
      "--fs-edit-image-error-color"        : errors.base
    }));

    const onUpload = async (payload: File) => {
      const content = (await readFile(payload)) as string;
      fileSelected.value.fileName = payload.name;
      fileSelected.value.fileContent = content;
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
      fileSelected.value.fileName = "";
      fileSelected.value.fileContent = null;
      if (props.modelValue) {
        emit("update:modelValue", null);
        emit("update", { source: props.source, modelValue: null });
      }
      else {
        emit("update:source", null);
        emit("update", { source: null, modelValue: props.modelValue });
      }
    };

    watch(() => props.modelValue, () => {
      if (!props.modelValue) {
        fileSelected.value.fileName = "";
        fileSelected.value.fileContent = null;
      }
    });

    return {
      invisibleButtonRef,
      fileSelected,
      isExtraSmall,
      style,
      onUpload,
      onRemove
    };
  }
});
</script>