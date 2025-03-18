<template>
  <FSSearchField
    :modelValue="$props.modelValue"
    :appendInnerIcon="$props.closable ? $props.appendInnerIcon : null"
    :clearable="false"
    @click:appendInner="onCloseClicked"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSSearchField>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import FSSearchField from "./FSSearchField.vue";

export default defineComponent({
  name: "FSSearchCloseField",
  components: {
    FSSearchField
  },
  props: {
    closable: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    unfocusOnClose: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    clearOnClose: {
      type: Boolean as PropType<boolean>,
      required: false,
      default: true
    },
    modelValue: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    appendInnerIcon: {
      type: String as PropType<string | undefined>,
      required: false,
      default: 'mdi-close'
    }
  },
  emits: ["update:modelValue", "close"],
  setup(props, { emit }) {
    const onCloseClicked = ($event: MouseEvent) => {
      if(!props.closable) {
        return;
      }

      if (props.unfocusOnClose) {
        $event.preventDefault();
        $event.stopPropagation();
        (document.activeElement  as HTMLElement)?.blur();
      }
      if (props.clearOnClose) {
        emit('update:modelValue', null);
      }

      emit('close');
    };

    return {
      onCloseClicked
    };
  }
});
</script>