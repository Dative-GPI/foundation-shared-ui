<template>
  <FSTile 
    :activeColor="$props.activeColor"
    :bottomColor="$props.bottomColor"
    :width="$props.width"
    :modelValue="$props.modelValue"
    v-bind="$attrs"
  >
    <FSCol
      align="center-center"
      width="fill"
    >
      <FSRow
        align="center-left"
        gap="24px"
        :height="imageSize"
        :wrap="false"
      >
        <FSCol
          gap="12px"
          :width="infoWidth"
        >
          <FSCol
            gap="4px"
          >
            <FSSpan
              font="text-button"
              :lineClamp="2"
            >
              {{ $props.label }}
            </FSSpan>
            <FSSpan
              font="text-overline"
              variant="soft"
            >
              {{ $props.code }}
            </FSSpan>
          </FSCol>
          <slot
            name="append-info"
            v-bind="$attrs"
          />
        </FSCol>
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :height="imageSize"
          :width="imageSize"
        />
        <FSIconCard
          v-else-if="$props.icon"
          :backgroundVariant="$props.iconBackgroundVariant"
          :backgroundColor="$props.iconBackgroundColor"
          :iconColor="$props.iconColor"
          :border="$props.iconBorder"
          :icon="$props.icon"
          :size="imageSize"
        />
      </FSRow>
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSIconCard from "../FSIconCard.vue";
import FSImage from "../FSImage.vue";
import FSSpan from "../FSSpan.vue";
import FSTile from "./FSTile.vue";
import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSSimpleTileUI",
  components: {
    FSIconCard,
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
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    code: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    iconBackgroundVariant: {
      type: String as PropType<"background" | "standard" | "full" | "gradient">,
      required: false
    },
    iconBackgroundColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false
    },
    iconBorder: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      required: false
    },
    activeColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    bottomColor: {
      type: [Array, String] as PropType<ColorBase | ColorBase[]>,
      required: false,
      default: ColorEnum.Light
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const { isMobileSized } = useBreakpoints();

    const iconBackgroundColor = computed((): ColorBase | ColorBase[] => {
      return props.iconBackgroundColor ? props.bottomColor : ColorEnum.Background;
    });

    const imageSize = computed((): number => {
      return isMobileSized.value ? 90 : 100;
    });

    const infoWidth = computed((): string => {
      return `calc(100% - ${imageSize.value}px - 24px)`;
    });

    return {
      iconBackgroundColor,
      ColorEnum,
      imageSize,
      infoWidth
    };
  }
});
</script>