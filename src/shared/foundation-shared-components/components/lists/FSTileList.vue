<template>
  <FSCol
    gap="12px"
  >
    <FSSearchField
      v-if="$props.searchable"
      :hideHeader="true"
      :modelValue="actualSearch"
      @update:modelValue="onSearch"
    />
    <FSFadeOut
      v-if="$props.direction == 'column'"
      :maxHeight="$props.maxHeight"
      :maskHeight="0"
    >
      <FSCol>
        <template
          v-if="$props.loading"
        >
          <FSLoader
            v-for="i in 4"
            :key="i"
            width="100%"
            height="50px"
          />
        </template>
        <template
          v-else
        >
          <template
            v-for="(item, index) in filteredItems"
            :key="index"
          >
            <slot
              name="item.tile"
              v-bind="{ index, item, direction: $props.direction, toggleSelect }"
            >
              <FSSimpleTileUI
                :key="index"
                :id="item.id"
                :label="item.label"
                :code="item.code"
                :icon="item.icon"
                :imageId="item.imageId"
                :selectable="$props.selectable"
                width="fill"
                v-bind="$props.tileProps ? $props.tileProps(item) : undefined"
                :modelValue="isSelected(item.id)"
                @update:modelValue="toggleSelect(item)"
              />
            </slot>
          </template>
        </template>
      </FSCol>
    </FSFadeOut>
    <FSSlideGroup
      v-else
    >
      <template
        v-if="$props.loading"
      >
        <FSLoader
          v-for="i in 4"
          :key="i"
          width="100%"
          height="50px"
        />
      </template>
      <template
        v-else
      >
        <template
          v-for="(item, index) in filteredItems"
          :key="index"
        >
          <slot
            name="item.tile"
            v-bind="{ index, item, direction: $props.direction, toggleSelect }"
          >
            <FSSimpleTileUI
              :key="index"
              :id="item.id"
              :label="item.label"
              :code="item.code"
              :icon="item.icon"
              :imageId="item.imageId"
              :selectable="$props.selectable"
              v-bind="$props.tileProps ? $props.tileProps(item) : undefined"
              width="348px"
              :modelValue="isSelected(item.id)"
              @update:modelValue="toggleSelect(item)"
            />
          </slot>
        </template>
      </template>
    </FSSlideGroup>
  </FSCol>
</template>

<script lang="ts">
import { computed } from "vue";
import { defineComponent, type PropType, ref, watch } from "vue";

import { filterItems } from "../../utils";

import FSCol from "../FSCol.vue";
import FSLoader from '../FSLoader.vue';
import FSFadeOut from "../FSFadeOut.vue";
import FSSlideGroup from "../FSSlideGroup.vue"
import FSSearchField from "../fields/FSSearchField.vue";
import FSSimpleTileUI from "../tiles/FSSimpleTileUI.vue";

export default defineComponent({
  name: "FSTileList",
  components: {
    FSCol,
    FSFadeOut,
    FSLoader,
    FSSlideGroup,
    FSSearchField,
    FSSimpleTileUI
  },
  props: {
    items: {
      type: Array as PropType<{id: string, label?: string, icon?: string, imageId?: string | null, [index: string]: any}[]>,
      required: true
    },
    tileProps: {
      type: Function as PropType<(item: any) => Record<string, any>>,
      required: false
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    search: {
      type: String,
      required: false,
      default: ""
    },
    noFilter: {
      type: Boolean,
      required: false,
      default: false
    },
    maxHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    direction: {
      type: String as PropType<"column" | "slided">,
      required: false,
      default: "column"
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    selectable: {
      type: Boolean,
      required: false,
      default: false
    },
    singleSelect: {
      type: Boolean,
      required: false,
      default: false
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:search","update:modelValue"],
  setup(props, { emit }) {
    const actualSearch = ref<string | null>(props.search);
    const filteredItems = computed(() => {
      if(!actualSearch.value) {
        return props.items;
      }
      return filterItems(props.items, actualSearch.value);
    });

    const onSearch = (value: string) => {
      if(props.noFilter) {
        emit("update:search", value);
      } else {
        actualSearch.value = value;
      }
    }

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const toggleSelect = (item: any): void => {
      let values = props.modelValue.slice();
      const index = values.indexOf(item[props.itemValue]);
      if (index > -1) {
        values.splice(index, 1);
      }
      else {
        if (props.singleSelect) {
          values = [item[props.itemValue]];
        }
        else {
          values.push(item[props.itemValue]);
        }
      }
      emit("update:modelValue", values);
    };

    watch(() => props.search, (value) => {
      actualSearch.value = value;
    });

    return {
      actualSearch,
      filteredItems,
      onSearch,
      isSelected,
      toggleSelect
    }
  }
});
</script>