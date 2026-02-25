<template>
  <FSChipGroup
    v-if="$props.subgroupings && $props.subgroupings.length > 0"
    :items="$props.subgroupings"
    :maxItems="$props.maxItems"
  >
    <template
      #item.chip="{ item }"
    >
      <FSSubgroupingChip
        :groupingLabel="item.groupingLabel"
        :groupingIcon="item.groupingIcon"
        :groupingColor="item.groupingColor"
        :label="item.label"
        :icon="item.icon"
        :to="$props.itemTo ? $props.itemTo(item) : null"
      />
    </template>
  </FSChipGroup>
</template>

<script lang="ts">
import type { PropType} from "vue";
import { defineComponent } from "vue";
import { type RouteLocation } from "vue-router";

import type { SubgroupingInfos } from "@dative-gpi/foundation-core-domain/models";

import FSSubgroupingChip from "@dative-gpi/foundation-shared-components/components/FSSubgroupingChip.vue";
import FSChipGroup from "@dative-gpi/foundation-shared-components/components/FSChipGroup.vue";

export default defineComponent({
  name: "FSSubgroupingsChipGroup",
  components: {
    FSSubgroupingChip,
    FSChipGroup
  },
  props: {
    subgroupings: {
      type: Array as PropType<SubgroupingInfos[]>,
      required: true
    },
    itemTo: {
      type: Function as PropType<(item: SubgroupingInfos) => Partial<RouteLocation>>,
      required: false
    },
    maxItems: {
      type: Number as PropType<number | null>,
      required: false,
      default: 1
    }
  }
});
</script>