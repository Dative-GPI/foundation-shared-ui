<template>
  <FSChipGroup
    v-if="$props.subgroupings && $props.subgroupings.length > 0"
    :variant="$props.variant"
  >
    <FSSubgroupingChip
      v-for="(item, index) in $props.subgroupings"  
      :key="index"
      :groupingLabel="item.groupingLabel"
      :groupingIcon="item.groupingIcon"
      :groupingColor="item.groupingColor"
      :label="item.label"
      :icon="item.icon"
      :to="$props.itemTo ? $props.itemTo(item) : null"
    />
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
  name: "FSSubgroupingsChipList",
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
    variant: {
      type: String as PropType<"wrap" | "slide" | "menu">,
      required: false,
      default: "menu"
    }
  }
});
</script>