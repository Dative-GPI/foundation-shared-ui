<template>
  <FSCol
    :gap="24"
  >
    <FSCol
      v-for="(properties, category) in categories"
      :key="category"
      :gap="16"
    >
      <FSRow>
        <FSText
          font="text-h3"
        >
          {{ category }}
        </FSText>
      </FSRow>
      <FSMetaField
        v-for="(property, index) in properties"
        :customProperty="property"
        :disabled="disabled"
        :key="index"
        :modelValue="modelValue[property.code]"
        @update:modelValue="(event) => $emit('update:modelValue', { ...modelValue, [property.code]: event})"
      />
    </FSCol>
  </FSCol>
</template>

  <script lang="ts">
import { defineComponent, type PropType } from "vue";

import { type CustomPropertyInfos } from "@dative-gpi/foundation-core-domain/models";

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

import FSMetaField from "./FSMetaField.vue";

export default defineComponent({
  name: "FSMetaFormContent",
  components: {
    FSMetaField,
    FSText
  },
  props: {
    customProperties: {
      type: [Object] as PropType<CustomPropertyInfos[]>,
      required: true
    },
    modelValue: {
      type: Object as PropType<{ [key: string]: string }>,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const categories = props.customProperties.reduce((acc, curr) => {
      if (acc[curr.categoryLabel] === undefined) {
        acc[curr.categoryLabel] = [];
      }
      acc[curr.categoryLabel].push(curr);
      return acc;
    }, {} as { [key: string]: CustomPropertyInfos[] });

    return {
      categories
    };
  }
});
</script>
