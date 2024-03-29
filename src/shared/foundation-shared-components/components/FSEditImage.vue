<template>
  <FSRow
    width="fill"
    gap="24px"
  >
    <FSCard
      class="fs-edit-image"
      :borderRadius="$props.borderRadius"
      :padding="$props.padding"
    >
      <FSImage
        :borderRadius="$props.borderRadius"
        :aspectRatio="$props.aspectRatio"
        :height="$props.height"
        :imageB64="realSource"
        :width="$props.width"
      />
    </FSCard>
    <FSCol
      height="fill"
      align="bottom-left"
    >
      <FSText
        v-if="fileSelected"
        font="text-body"
      >
        {{ fileSelected.fileName }}
      </FSText>
      <FSRow>
        <FSButtonFileIcon
          accept="image/*"
          :readFile="false"
          @update:modelValue="onUpload"
        />
        <FSButtonRemoveIcon
          @click="onRemove"
        />
      </FSRow>
    </FSCol>
  </FSRow>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";

import { useFiles } from "@dative-gpi/foundation-shared-components/composables";
import { FileImage } from "@dative-gpi/foundation-shared-components/models";

import FSButtonRemoveIcon from "./buttons/FSButtonRemoveIcon.vue";
import FSButtonFileIcon from "./buttons/FSButtonFileIcon.vue";
import FSImage from "./FSImage.vue";
import FSCard from "./FSCard.vue";
import FSText from "./FSText.vue";

export default defineComponent({
  name: "FSEditImage",
  components: {
    FSButtonRemoveIcon,
    FSButtonFileIcon,
    FSImage,
    FSCard,
    FSText
  },
  props: {
    padding: {
      type: [String, Number],
      required: false,
      default: "8px"
    },
    width: {
      type: [String, Number],
      required: false,
      default: null
    },
    height: {
      type: [String, Number],
      required: false,
      default: null
    },
    aspectRatio: {
      type: String,
      required: false,
      default: null
    },
    borderRadius: {
      type: [String, Number],
      required: false,
      default: "4px"
    },
    modelValue: {
      type: String as PropType<string>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { read } = useFiles();

    const fileSelected = ref<FileImage>({ fileName: "", fileContent: null });

    const realSource = computed(() => {
      return fileSelected.value && fileSelected.value.fileName ? fileSelected.value.fileContent : props.modelValue;
    });

    const onUpload = (payload: File) => {
      read(payload, (content: string) => {
        fileSelected.value.fileName = payload.name;
        fileSelected.value.fileContent = content;
        emit("update:modelValue", content);
      });
    };

    const onRemove = () => {
      fileSelected.value.fileName = "";
      fileSelected.value.fileContent = null;
      emit("update:modelValue", null);
    };

    return {
      fileSelected,
      realSource,
      onUpload,
      onRemove
    };
  }
});
</script>