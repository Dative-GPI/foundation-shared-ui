<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDataCategories"
    :items="dataCategories"
    :tableCode="$props.tableCode"
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
      #item.tile="{ item }"
    >
      <FSClickable
        padding="12px"
        height="60px"
        width="233px"
        :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Dark"
        @click="$emit('update:modelValue', [item.id])"
        v-bind="$attrs"
      >
        <template
          #default
        >
          <FSRow
            align="center-center"
            :wrap="false"
          >
            <FSSpan
              :lineClamp="1"
            >
              {{ item.label }}
            </FSSpan>
            <v-spacer/>
            <FSIcon
              :color="item.correlated ? ColorEnum.Primary : ColorEnum.Light"
              :icon="item.correlated ? 'mdi-link' : 'mdi-link-off'"
              variant="dark"
            />
          </FSRow>
        </template>
      </FSClickable>
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, watch } from "vue";
import _ from "lodash";

import type { DataCategoryFilters, DataCategoryInfos } from "@dative-gpi/foundation-core-domain/models";
import { useDataCategories } from "@dative-gpi/foundation-core-services/composables";
import {ColorEnum} from "@dative-gpi/foundation-shared-components/models";

import FSDataTable from "../FSDataTable.vue";

import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSClickable from "@dative-gpi/foundation-shared-components/components/FSClickable.vue";

export default defineComponent({
  name: "FSBaseDataCategoriesList",
  components: {
    FSClickable,
    FSDataTable,
    FSIcon,
    FSSpan,
    FSRow
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    dataCategoryFilters: {
      type: Object as PropType<DataCategoryFilters>,
      required: false,
      default: null
    },
    correlatedOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { entities, getMany: getManyDataCategories, fetching: fetchingDataCategories } = useDataCategories();

    const dataCategories = computed((): DataCategoryInfos[] => {
      if (props.correlatedOnly) {
        return entities.value.filter((dc) => dc.correlated);
      }
      return entities.value;
    });

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };
  
    watch(() => props.dataCategoryFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDataCategories(props.dataCategoryFilters);
      }
    }, { immediate: true });

    return {
      fetchingDataCategories,
      dataCategories,
      ColorEnum,
      isSelected
    };
  }
});
</script>