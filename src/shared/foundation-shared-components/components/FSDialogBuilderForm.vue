<template>
  <FSDialog
    :subtitle="$props.subtitle"
    :title="$props.title"
    :width="$props.width"
    :height="$props.height"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
  >
    <template
      #body
    >
      <FSDialogBuilderFormBody
        :subtitle="$props.subtitle"
        :steps="$props.manualSteps"
        @click:submitButton="$emit('click:submitButton')"
        @click:cancelButton="$emit('update:modelValue', false)"
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
      </FSDialogBuilderFormBody>
    </template>
  </FSDialog>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent } from "vue";

import FSDialogBuilderFormBody from "./FSDialogBuilderFormBody.vue";
import FSDialog from "./FSDialog.vue";

export default defineComponent({
  name: "FSDialogBuilderForm",
  components: {
    FSDialogBuilderFormBody,
    FSDialog  
  },
  props: {
    title: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "1500px"
    },
    height: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "100%"
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    manualSteps: {
      type: Number,
      required: true
    },
  },
  emits: ["update:modelValue", "click:submitButton"],
  setup() {

    return {
    };
  }
});
</script>