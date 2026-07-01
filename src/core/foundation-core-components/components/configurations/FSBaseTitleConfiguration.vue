<template>
  <FSTranslateField
    property="title"
    :label="$tr('ui.common.title', 'Title')"
    :modelValue="$props.title"
    :maxWidth="null"
    :translations="$props.translations"
    @update:modelValue="$emit('update:title', $event)"
    @update:translations="$emit('update:translations', $event)"
  />
  <FSTranslateField
    v-if="$props.showSubtitle"
    property="subtitle"
    :maxWidth="null"
    :label="$tr('ui.widget.subtitle', 'Subtitle')"
    :modelValue="$props.subtitle"
    @update:modelValue="$emit('update:subtitle', $event)"
    @update:translations="$emit('update:translations', $event)"
  />
</template>

<script lang="ts">
import { defineComponent, type PropType } from "vue";

import type { Translation } from "@dative-gpi/foundation-shared-components/models";
import FSTranslateField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateField.vue";
  
export default defineComponent({
  name: "FSBaseTitleConfiguration",
  components: {
    FSTranslateField
  },
  props: {
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    },
    translations: {
      type: Array as PropType<Translation[]>,
      required: false
    },
    showSubtitle: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:title", "update:subtitle", "update:translations"]
});
</script>