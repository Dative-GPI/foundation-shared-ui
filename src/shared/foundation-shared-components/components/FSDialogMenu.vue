<template>
  <v-dialog
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <FSCard
      :padding="$props.padding"
      :gap="$props.gap"
      :color="$props.color"
      :class="classes"
    >
      <FSCol>
        <slot
          name="body"
        />
      </FSCol>
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
    </FSCard>
  </v-dialog>
</template>
  
<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSCard from "./FSCard.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSDialogMenu",
  components: {
    FSCard,
    FSCol
  },
  props: {
    classes: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    padding: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "8px"
    },
    gap: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "24px"
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Dark
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { isExtraSmall } = useBreakpoints();

    const classes = computed((): string[] => {
      const classNames = ["fs-dialog-menu"];
      if (props.classes) {
        if (Array.isArray(props.classes)) {
          classNames.push(...props.classes);
        }
        else {
          classNames.push(props.classes);
        }
      }
      return classNames;
    });

    return {
      isExtraSmall,
      ColorEnum,
      classes
    };
  }
});
</script>