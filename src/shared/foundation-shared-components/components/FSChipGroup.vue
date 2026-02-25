<template>
  <FSWrapGroup
    v-if="$props.variant === 'wrap' && $props.items"
    v-bind="$attrs"
  >
    <template
      v-for="(item, index) in $props.items.slice(0, $props.maxItems ?? $props.items.length)"
      :key="index"
    >
      <slot
        name="item.chip"
        v-bind="{ index, item }"
      >
        <FSChip
          :variant="$props.chipVariant"
          :color="$props.color"
          :label="item.label ?? item"
        />
      </slot>
    </template>
    <FSMenu
      v-if="$props.maxItems && $props.items.length > $props.maxItems"
      location="bottom end"
      v-model="menuOpen"
    >
      <template
        #activator="{ props: activatorProps }"
      >
        <FSChip
          v-bind="activatorProps"
          variant="full"
          :label="`+${$props.items.length - $props.maxItems}`"
          :color="menuActivatorColor"
          :clickable="true"
        />
      </template>
      <FSCard
        padding="16px 24px"
      >
        <template
          #top-right
        >
          <FSButton
            icon="mdi-close"
            variant="icon"
            iconSize="18px"
            :color="ColorEnum.Dark"
            @click="menuOpen = false"
          />
        </template>
        <FSCol
          gap="12px"
        >
          <template
            v-for="(item, index) in $props.items"
            :key="index"
          >
            <slot
              name="item.chip"
              v-bind="{ index, item }"
            >
              <FSChip
                :variant="$props.chipVariant"
                :color="$props.color"
                :label="item.label ?? item"
              />
            </slot>
          </template>
        </FSCol>
      </FSCard>
    </FSMenu>
    <slot />
  </FSWrapGroup>
  <FSSlideGroup
    v-else-if="$props.variant === 'slide'"
    v-bind="$attrs"
  >
    <template
      v-for="(item, index) in $props.items"
      :key="index"
    >
      <slot
        name="item.chip"
        v-bind="{ index, item }"
      >
        <FSChip
          :variant="$props.chipVariant"
          :color="$props.color"
          :label="item.label ?? item"
        />
      </slot>
    </template>
    <slot />
  </FSSlideGroup>
</template>
  
  <script lang="ts">
import { defineComponent, ref, type PropType, computed } from "vue";
  
import { type CardVariant, CardVariants, type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
  
import FSSlideGroup from "./FSSlideGroup.vue";
import FSWrapGroup from "./FSWrapGroup.vue";
import FSButton from "./FSButton.vue";
import FSChip from "./FSChip.vue";
import FSCard from "./FSCard.vue";
import FSMenu from "./FSMenu.vue";
import FSCol from "./FSCol.vue";
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
    FSCol
  },
  props: {
    items: {
      type: Array as PropType<any[] | string[]>,
      required: false,
      default: () => []
    },
    variant: {
      type: String as PropType<"wrap" | "slide">,
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
    },
    maxItems: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    }
  },
  setup(props) {
    const { getColors } = useColors();
    const menuOpen = ref(false);

    const menuActivatorColor = computed((): string => {
      return getColors(props.color).dark;
    });

    return {
      menuActivatorColor,
      ColorEnum,
      menuOpen
    };
  }
});
  </script>