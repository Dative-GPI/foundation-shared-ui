<template>
  <FSMenu
    :location="$props.location"
    :closeOnContentClick="true"
    :contained="false"
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
          :icon="$props.icon"
          :iconSize="$props.iconSize"
          :color="$props.buttonColor"
          :variant="$props.buttonVariant"
        />
      </slot>
    </template>
    <FSCard
      :maxWidth="$props.maxWidth"
      :width="$props.width"
      padding="2px"
      :border="false"
      :elevation="true"
      align="center-center"
    >
      <slot
        name="content"
      >
        <FSCol
          gap="0px"
        >
          <FSFadeOut
            :scrollOutside="false"
            maxHeight="80dvh"
          >
            <FSClickable
              v-for="(item, index) in $props.items"
              width="100%"
              padding="8px"
              height="40px"
              :key="index"
              :border="false"
              @click="onClickItem(item)"
            >
              <slot
                name="item"
                v-bind="{ item, index }"
              >
                <FSRow
                  align="center-left"
                >
                  <FSIcon
                    v-if="item.icon"
                    :icon="item.icon"
                  />
                  <FSText
                    font="text-body"
                  >
                    {{ item.label }}
                  </FSText>
                </FSRow>
              </slot>
            </FSClickable>
          </FSFadeOut>
        </FSCol>
      </slot>
    </FSCard>
  </FSMenu>
</template>

<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";

import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import { ColorEnum, type ColorBase } from '@dative-gpi/foundation-shared-components/models';

import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSMenu from '@dative-gpi/foundation-shared-components/components/FSMenu.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSClickable from '@dative-gpi/foundation-shared-components/components/FSClickable.vue';

export default defineComponent({
  name: "FSInformationsMenu",
  components: {
    FSMenu,
    FSCard,
    FSRow,
    FSText,
    FSButton,
    FSCol,
    FSIcon,
    FSClickable
  },
  props: {
    items: {
      type: Array as PropType<{label: string, icon?: string, onClick: () => void, closeOnContentClick?: boolean}[]>,
      default: () => []
    },
    location: {
      type: String,
      default: "bottom"
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: null
    },
    maxWidth: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      default: "90dvw"
    },
    icon: {
      type: String,
      default: "mdi-dots-horizontal"
    },
    iconSize: {
      type: String,
      default: "18px"
    },
    buttonColor: {
      type: String as PropType<ColorBase>,
      default: ColorEnum.Light
    },
    buttonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "icon"
    },
  },
  emits: ["update:modelValue"],
  setup() {
    const modelValue = ref(false);

    const { getColors } = useColors();

    const lightColors = getColors(ColorEnum.Light);

    const onClickItem = (item: { onClick: () => void, closeOnContentClick?: boolean }) => {
      item.onClick();
      if (item.closeOnContentClick !== false) {
        modelValue.value = false;
      }
    };

    return {
      ColorEnum,
      modelValue,
      lightColors,
      onClickItem
    };
  }
});
</script>