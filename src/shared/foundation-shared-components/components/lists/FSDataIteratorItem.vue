<template>
  <FSTile
    :width="$props.width"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <FSCol
      height="fill"
      align="center-left"
    >
      <slot
        name="item.top"
        v-bind="{ item: $props.item }"
      />
      <FSRow
        v-for="(header, index) in $props.headers"
        align="center-left"
        :wrap="false"
        :key="index"
      >
        <slot
          :name="`header.${header.value}`"
          v-bind="{ header }"
        >
          <FSRow
            align="center-left"
          >
            <FSText
              font="text-button"
            >
              {{ header.text }}
            </FSText>
          </FSRow>
        </slot>
        <slot
          :name="`item.${header.value}`"
          v-bind="{ item: $props.item }"
        >
          <FSRow
            align="center-left"
          >
            <FSText
              v-if="header.value"
            >
              {{ $props.item[header.value] }}
            </FSText>
          </FSRow>
        </slot>
      </FSRow>
      <slot
        name="item.bottom"
        v-bind="{ item: $props.item }"
      />
    </FSCol>
  </FSTile>
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type FSDataTableColumn } from "@dative-gpi/foundation-shared-components/models";

import FSRow from "../FSRow.vue";
import FSText from "../FSText.vue";
import FSTile from '../tiles/FSTile.vue';

export default defineComponent({
  name: "FSDataIteratorItem",
  components: {
    FSTile,
    FSText,
    FSRow
  },
  props: {
    headers: {
      type: Array as PropType<FSDataTableColumn[]>,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
  },
  emits: [
    "update:modelValue"
  ],
  setup() {
    return {
    };
  }
});
</script>