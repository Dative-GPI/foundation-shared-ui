<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDashboardExplorerElements"
    :singleSelect="$props.singleSelect"
    :items="dashboardExplorerElements"
    :selectable="$props.selectable"
    :tableCode="$props.tableCode"
    :itemTo="$props.itemTo"
    :noSearch="$props.recursiveSearch"
    :headersOptions="headersOptions"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-model:search="search"
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
      #header.imageId-title
    >
      <FSIcon>
        mdi-panorama-variant-outline
      </FSIcon>
    </template>
    <template
      #item.imageId="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="32px"
        width="32px"
        :imageId="item.imageId"
        :thumbnail="true"
      />
    </template>
    <template
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :showRemove="false"
        :tags="item.tags"
      />
    </template>
    <template
      #item.type="{ item }"
    >
      <FSDashboardExplorerElementChip
        :type="item.type"
      />
    </template>
    <template
      #item.icon="{ item }"
    >
      <FSIcon>
        {{ item.icon }}
      </FSIcon>
    </template>
    <template
      #item.main="{ item }"
    >
      <FSIcon
        v-if="item.id === mainOrganisationDashboardId"
      >
        mdi-account-group-outline
      </FSIcon>
      <FSIcon
        v-if="item.id === mainUserDashboardId"
      >
        mdi-home
      </FSIcon>
    </template>
    <template
      #item.locked="{ item }"
    >
      <FSIconCheck
        v-if="item.locked != null"
        :value="item.locked"
      />
    </template>
    <template
      #item.tile="{ index, item, toggleSelect }"
    >
      <FSFolderTileUI
        v-if="item.type === DashboardExplorerElementType.Folder"
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :imageId="item.imageId"
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :bottomColor="item.colors"
        :recursiveFoldersIds="item.recursiveFoldersIds"
        :recursiveDashboardOrganisationsIds="item.recursiveDashboardOrganisationsIds"
        :recursiveDashboardShallowsIds="item.recursiveDashboardShallowsIds"
        :modelValue="isSelected(item.id)"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
      <FSDashboardOrganisationTileUI
        v-if="item.type === DashboardExplorerElementType.DashboardOrganisation"
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :bottomColor="item.colors"
        :imageId="item.imageId"
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :modelValue="isSelected(item.id)"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
      <FSDashboardShallowTileUI
        v-if="item.type === DashboardExplorerElementType.DashboardShallow"
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :bottomColor="item.colors"
        :imageId="item.imageId"
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :modelValue="isSelected(item.id)"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
      <FSDashboardOrganisationTypeTileUI
        v-if="item.type === DashboardExplorerElementType.DashboardOrganisationType"
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :bottomColor="item.colors"
        :imageId="item.imageId"
        :icon="item.icon"
        :label="item.label"
        :code="item.code"
        :modelValue="isSelected(item.id)"
        :selectable="$props.selectable"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>
  
<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, ref, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";
  
import { DashboardExplorerElementType } from "@dative-gpi/foundation-shared-domain/enums";
import { useDashboardExplorerElements, useAppOrganisationId, useCurrentUserOrganisation } from "@dative-gpi/foundation-core-services/composables";
import { type DashboardExplorerElementInfos, type DashboardExplorerElementFilters } from "@dative-gpi/foundation-core-domain/models";
import { dashboardExplorerElementTypeLabel } from "@dative-gpi/foundation-core-components/utils";
import { useDebounce } from "@dative-gpi/foundation-shared-components/composables";
import { useOrganisation } from "@dative-gpi/foundation-shared-services/composables";

import FSDashboardOrganisationTypeTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTypeTileUI.vue";
import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

import FSDashboardExplorerElementChip from "./FSDashboardExplorerElementChip.vue";
import FSDataTable from "../lists/FSDataTable.vue";

export default defineComponent({
  name: "FSBaseDashboardsExplorer",
  components: {
    FSDashboardExplorerElementChip,
    FSDashboardOrganisationTypeTileUI,
    FSDashboardOrganisationTileUI,
    FSDashboardShallowTileUI,
    FSFolderTileUI,
    FSDataTable,
    FSIconCheck,
    FSTagGroup,
    FSImage,
    FSIcon
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    recursiveSearch: {
      type: Boolean,
      required: false,
      default: true
    },
    parentId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    root: {
      type: Boolean,
      required: false,
      default: true
    },
    allowedTypes: {
      type: Array as PropType<DashboardExplorerElementType[]>,
      required: false,
      default: () => [
        DashboardExplorerElementType.Folder,
        DashboardExplorerElementType.DashboardOrganisation,
        DashboardExplorerElementType.DashboardShallow,
        DashboardExplorerElementType.DashboardOrganisationType
      ]
    },
    itemTo: {
      type: Function as PropType<(item: DashboardExplorerElementInfos) => Partial<RouteLocation>>,
      required: false
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
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    dashboardExplorerElementsFilters: {
      type: Object as PropType<DashboardExplorerElementFilters>,
      required: false,
      default: () => ({})
    }
  },
  emits: ["update:modelValue", "update:types"],
  setup(props, { emit }) {
    const { entities, fetching: fetchingDashboardExplorerElements, getMany: getManyDashboardExplorerElements } = useDashboardExplorerElements();
    const { fetch: fetchUserOrganisation, entity: userOrganisation } = useCurrentUserOrganisation();
    const { entity: organisation, get: getOrganisation } = useOrganisation();
    const { organisationId } = useAppOrganisationId();
    const { debounce } = useDebounce();

    const search = ref("");

    const mainUserDashboardId = computed(() => userOrganisation.value?.mainDashboardId);
    const mainOrganisationDashboardId = computed(() => organisation.value?.mainDashboardId);

    const dashboardExplorerElements = computed((): DashboardExplorerElementInfos[] => {
      return entities.value
        .filter(e => props.allowedTypes.includes(e.type))
        .slice()
        .sort((a, b) => a.type - b.type);
    });

    const headersOptions = computed(() => ({
      type: {
        fixedFilters: props.allowedTypes.map(t => ({
          value: t,
          text: dashboardExplorerElementTypeLabel(t)
        })),
        methodFilter: (value: DashboardExplorerElementType, type: DashboardExplorerElementType) => {
          return value === type;
        }
      }
    }));

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const onUpdate = (value: string[]): void => {
      const types = value.map(id => entities.value.find(dee => dee.id === id)?.type);
      emit("update:types", types);

      emit("update:modelValue", value);
    }

    const fetch = () => {
      if (props.recursiveSearch && search.value) {
        getManyDashboardExplorerElements({
          ancestorId: props.parentId,
          search: search.value,
          types: props.allowedTypes,
          ...props.dashboardExplorerElementsFilters
        });
      }
      else {
        getManyDashboardExplorerElements({
          parentId: props.parentId,
          root: props.root,
          types: props.allowedTypes,
          ...props.dashboardExplorerElementsFilters
        });
      }
    }

    // Delay to wait before fetching after a search change
    const debounceFetch = (): void => debounce(fetch, 1000);

    onMounted(() => {
      fetchUserOrganisation();
    });

    watch(() => organisationId.value, () => {
      if (organisationId.value) {
        getOrganisation(organisationId.value);
      }
    }, { immediate: true });

    watch([() => props.parentId, () => props.root, () => props.allowedTypes, () => props.dashboardExplorerElementsFilters], (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetch();
      }
    }, { immediate: true });

    watch(search, (next, previous) => {
      if (props.recursiveSearch && next !== previous) {
        debounceFetch();
      }
    });

    return {
      fetchingDashboardExplorerElements,
      DashboardExplorerElementType,
      dashboardExplorerElements,
      mainOrganisationDashboardId,
      mainUserDashboardId,
      headersOptions,
      search,
      isSelected,
      onUpdate
    };
  }
});
</script>
