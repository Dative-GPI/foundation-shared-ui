<template>
  <FSWrapGroup
    v-if="$props.variant === 'wrap'"
    v-bind="$attrs"
  >
    <FSChip
      v-for="(label, index) in $props.labels"
      :key="index"
      :variant="$props.chipVariant"
      :color="$props.color"
      :label="label"
    />
    <slot />
  </FSWrapGroup>
  <FSSlideGroup
    v-else-if="$props.variant === 'slide'"
    v-bind="$attrs"
  >
    <FSChip
      v-for="(label, index) in $props.labels"
      :key="index"
      :variant="$props.chipVariant"
      :color="$props.color"
      :label="label"
    />
    <slot />
  </FSSlideGroup>
  <FSRow
    v-else-if="$props.variant === 'menu'"
    align="center-left"
    width="hug"
    :wrap="false"
    v-bind="$attrs"
  >
    <component
      v-if="hasSlots"
      :is="slotElements[0]"
    />
    <FSChip
      v-else
      :variant="$props.chipVariant"
      :color="$props.color"
      :label="menuLabels[0]"
    />
    <FSMenu
      v-if="slotElements.length > 1 || menuLabels.length > 1"
      location="bottom end"
      v-model="menuOpen"
    >
      <template
        #activator="{ props: activatorProps }"
      >
        <FSChip
          v-bind="activatorProps"
          variant="full"
          :label="`+${hasSlots ? (slotElements.length - 1) : (menuLabels.length - 1)}`"
          :color="menuActivatorColor"
          :clickable="true"
        />
      </template>
      <FSCard
        padding="16px 24px"
      >
        <FSButton
          style="position: absolute;top:3px;right:3px;"
          icon="mdi-close"
          variant="icon"
          iconSize="18px"
          :color="ColorEnum.Dark"
          @click="menuOpen = false"
        />
        <FSCol
          v-if="hasSlots"
          gap="12px"
        >
          <component
            v-for="(element, index) in slotElements.slice(1)"
            :key="index"
            :is="element"
          />
        </FSCol>
        <FSCol
          v-else
          gap="12px"
        >
          <FSChip
            v-for="(label, index) in menuLabels"
            :key="index"
            :variant="$props.chipVariant"
            :color="$props.color"
            :label="label"
          />
        </FSCol>
      </FSCard>
    </FSMenu>
  </FSRow>
</template>
  
  <script lang="ts">
import { defineComponent, ref, type PropType, useSlots, computed, type VNode } from "vue";
  
import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  
import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";
import FSButton from "./FSButton.vue";
import FSChip from "./FSChip.vue";
import FSCard from "./FSCard.vue";
import FSMenu from "./FSMenu.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";
import { useColors } from "../composables";
  
export default defineComponent({
  name: "FSChipGroup",
  components: {
    FSSlideGroup,
    FSWrapGroup,
    FSButton,
    FSChip,
    FSCard,
    FSMenu,
    FSCol,
    FSRow
  },
  props: {
    labels: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"wrap" | "slide" | "menu">,
      required: false,
      default: "wrap"
    },
    chipVariant: {
      type: String as PropType<CardVariant>,
      required: false,
      default: CardVariants.Full
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    }
  },
  setup(props) {
    const slots = useSlots();
    const { getColors } = useColors();
    const menuOpen = ref(false);

    const slotElements = computed((): VNode[] => {
      const defaultSlot = slots.default?.();
      if (!defaultSlot) {
        return [];
      }
      return defaultSlot.flatMap(node => {
        if (node.type === Symbol.for('v-fgt')) {
          return (node.children as VNode[]) ?? [];
        }
        return [node];
      }).filter(node => typeof node.type !== 'symbol');
    });

    const hasSlots = computed((): boolean => {
      return slotElements.value.length > 0;
    });

    const menuLabels = computed((): string[] => {
      return props.labels ?? [];
    });

    const menuActivatorColor = computed((): string => {
      return getColors(props.color).dark;
    });

    return {
      menuActivatorColor,
      slotElements,
      menuLabels,
      ColorEnum,
      hasSlots,
      menuOpen
    };
  }
});
  </script>