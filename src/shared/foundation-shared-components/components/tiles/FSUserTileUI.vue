<template>
  <FSTile
    :width="$props.width"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSRow
      :wrap="false"
      gap="24px"
      height="fill"
      align="center-left"
    >
      <FSCol
        :width="infoWidth"
      >
        <FSSpan
          font="text-button"
        >
          {{ `${$props.firstName} ${$props.lastName}` }}
        </FSSpan>
        <FSSpan
          font="text-overline"
        >
          {{ $props.email }}
        </FSSpan>
        <FSSpan
          font="text-overline"
        >
          {{ $props.phoneNumber }}
        </FSSpan>
      </FSCol>
      <FSImage
        v-if="$props.imageId"
        :imageId="$props.imageId"
        :width="imageSize"
      />
    </FSRow>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSUserTileUI",
  components: {
    FSImage,
    FSSpan,
    FSTile,
    FSCol,
    FSRow
  },
  props: {
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: false,
      default: null 
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const imageSize = computed((): number => {
      if (!props.imageId) {
        return 0;
      }
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      if (!props.imageId) {
        return "100%";
      }
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      imageSize,
      infoWidth
    };
  }
});
</script>