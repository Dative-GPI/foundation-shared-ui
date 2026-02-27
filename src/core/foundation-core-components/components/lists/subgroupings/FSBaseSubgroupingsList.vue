<template>
  <FSDataTable
    :loading="fetchingSubgroupings"
    :items="subgroupings"
    :itemTo="$props.itemTo"
    :tableCode="$props.tableCode"
    :selectable="$props.selectable"
    :showSearch="$props.showSearch"
    :singleSelect="$props.singleSelect"
    :groupBy="groupBy"
    :modelValue="$props.modelValue"
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
    <template
      #group-header="{ item }"
    >
      <FSRow
        height="54px"
        align="center-left"
      >
        <FSCard
          padding="16px 16px 16px 56px"
          height="100%"
          width="100%"
          :borderRadius="0"
          :variant="CardVariants.Full"
          :color="getColors(ColorEnum.Light).base"
        >
          <FSGroupingChip
            :label="getGroupingLabel(item.value)"
            :iconColor="getGroupingColor(item.value)"
            :icon="getGroupingIcon(item.value)"
          />
        </FSCard>
      </FSRow>
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSSubgroupingTileUI
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        :singleSelect="$props.singleSelect"
        :deviceOrganisationsCount="item.deviceOrganisationsCount"
        :groupingLabel="item.groupingLabel"
        :groupingIcon="item.groupingIcon"
        :groupingColor="item.groupingColor"
        :label="item.label"
        :icon="item.icon"
        :to="$props.itemTo && $props.itemTo(item)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";

import type { SubgroupingFilters, SubgroupingInfos } from "@dative-gpi/foundation-core-domain/models";
import { useSubgroupings } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";

import FSSubgroupingTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSSubgroupingTileUI.vue";
import FSGroupingChip from "@dative-gpi/foundation-shared-components/components/FSGroupingChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";

import { ColorEnum, CardVariants } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

export default defineComponent({
  name: "FSBaseSubgroupingsList",
  components: {
    FSSubgroupingTileUI,
    FSGroupingChip,
    FSDataTable,
    FSIcon,
    FSCard,
    FSRow
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: SubgroupingInfos) => Partial<RouteLocation>>,
      required: false
    },
    subgroupingFilters: {
      type: Object as PropType<SubgroupingFilters>,
      required: false,
      default: null
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    showSearch: {
      type: Boolean,
      required: false,
      default: true
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    }
  },
  inheritAttrs: false,
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchSubgroupings, fetching: fetchingSubgroupings, entities: subgroupings } = useSubgroupings();
    const { getColors } = useColors();

    const groupBy = computed(() => ({
      key: "groupingId",
      order: "asc" as const
    }));

    const groupingMap = computed(() => {
      return _.chain(subgroupings.value)
        .keyBy('groupingId')
        .mapValues(s => ({
          label: s.groupingLabel,
          color: s.groupingColor,
          icon: s.groupingIcon
        }))
        .value();
    });

    const getGroupingLabel = (groupingId: string): string => {
      return groupingMap.value[groupingId].label;
    };

    const getGroupingColor = (groupingId: string): string => {
      return groupingMap.value[groupingId].color;
    };

    const getGroupingIcon = (groupingId: string): string => {
      return groupingMap.value[groupingId].icon;
    };

    const isSelected = (id: string) => {
      return props.modelValue.includes(id);
    };

    watch(() => props.subgroupingFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchSubgroupings(props.subgroupingFilters);
      }
    }, { immediate: true });

    return {
      fetchingSubgroupings,
      getGroupingLabel,
      getGroupingColor,
      getGroupingIcon,
      subgroupings,
      CardVariants,
      isSelected,
      getColors,
      ColorEnum,
      groupBy,
    };
  }
});
</script>
