<template>
  <FSRow
    width="hug"
    gap="4px"
  >
    <FSCard
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('click:backward')"
    >
      <FSIcon
        size="18px"
        icon="mdi-skip-backward"
      />
    </FSCard>
    <FSCard
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('update:modelValue', !$props.modelValue)"
    >
      <FSIcon
        size="18px"
        :icon="$props.modelValue ? 'mdi-pause' : 'mdi-play'"
      />
    </FSCard>
    <FSCard
      variant="full"
      :color="ColorEnum.Light"
      borderRadius="50%"
      padding="2px"
      @click="$emit('click:forward')"
    >
      <FSIcon
        size="18px"
        icon="mdi-skip-forward"
      />
    </FSCard>
  </FSRow>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

export default defineComponent({
  name: "FSPlayButtons",
  components: {
    FSCard,
    FSIcon
  },
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    }
  },
  emits: ['update:modelValue', 'click:backward', 'click:forward'],
  setup() {
    return {
      ColorEnum
    };
  },
});
</script>