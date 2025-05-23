<template>
  <FSMenu
    :location="$props.location"
    :closeOnContentClick="false"
    minWidth="0"
    v-model="modelValue"
    v-bind="$attrs"
  >
    <template
      #activator="{ props }"
    >
      <slot
        name="activator"
        v-bind="props"
      >
        <FSButton
          v-bind="props"
          :color="$props.iconColor"
          :iconSize="$props.iconSize"
          variant="icon"
          icon="mdi-information-outline"
        />
      </slot>
    </template>
    <slot
      name="menuContent"
    >
      <FSCard
        :maxWidth="$props.maxWidth"
        :width="$props.width"
        :padding="$props.padding"
        :elevation="true"
        align="center"
      >
        <slot
          name="cardContent"
        >
          <FSRow
            align="center-center"
          >
            <FSText
              font="text-body"
              :lineClamp="$props.lineClamp"
            >
              {{ $props.content }}
            </FSText>
          </FSRow>
        </slot>
        <template
          v-if="$props.showCloseButton"
          #top-right
        >
          <FSButton
            variant="icon"
            icon="mdi-close"
            iconSize="18px"
            :color="lightColors.dark"
            @click="modelValue = false"
          />
        </template>
      </FSCard>
    </slot>
  </FSMenu>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSMenu from '@dative-gpi/foundation-shared-components/components/FSMenu.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';

export default defineComponent({
  name: "FSInformationsMenu",
  components: {
    FSMenu,
    FSCard,
    FSRow,
    FSText,
    FSButton
  },
  props: {
    content: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    location: {
      type: String,
      default: "top"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    maxWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: "16px 8px"
    },
    iconSize: {
      type: String,
      default: "18px"
    },
    iconColor: {
      type: String as PropType<ColorBase>,
      default: ColorEnum.Primary
    },
    showCloseButton: {
      type: Boolean,
      default: true
    },
    lineClamp: {
      type: Number,
      default: 4
    }
  },
  emits: ["update:modelValue"],
  setup() {
    const modelValue = ref(false);

    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);

    return {
      ColorEnum,
      modelValue,
      lightColors
    };
  }
});
</script>