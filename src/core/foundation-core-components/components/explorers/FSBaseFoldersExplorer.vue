<template>
  <FSDataTable
    defaultMode="iterator"
    :items="items"
    :item-to="$props.itemTo"
    :loading="fetchingFolders || fetchingDashboardOrganisations || fetchingDashboardShallows"
    :tableCode="$props.tableCode"
    :headersOptions="headersOptions"
    :modelValue="selecteds"
    :selectable="$props.selectable"
    @update:modelValue="onSelect"
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
        :value="item.locked"
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
      #item.dashboardType="{ item }"
    >
      <FSChip
        v-if="item.type === FoldersListType.Dashboard"
        :color="dashboardTypeColor(item.dashboardType)"
        :label="dashboardTypeLabel(item.dashboardType)"
      />
      <FSChip
        v-else-if="item.type === FoldersListType.Folder"
        :color="ColorEnum.Light"
        :label="$tr('ui.common.folder', 'Folder')"
      />
    </template>
    <template
      #item.tile="{ item, toggleSelect }"
    >
      <FSFolderTileUI
        v-if="item.type == FoldersListType.Folder"
        :bottomColor="item.colors"
        v-bind="item"
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
      />
      <FSDashboardOrganisationTileUI
        v-if="item.type == FoldersListType.Dashboard && item.dashboardType == DashboardType.Organisation"
        :bottomColor="item.colors"
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
        v-bind="item"
      />
      <FSDashboardShallowTileUI
        v-if="item.type == FoldersListType.Dashboard && item.dashboardType == DashboardType.Shallow"
        :bottomColor="item.colors"
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        :to="$props.itemTo && $props.itemTo(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import _ from "lodash";
import type { RouteLocation } from "vue-router";
import { computed, defineComponent, onMounted, type PropType, ref, watch } from "vue";

import { useOrganisation } from "@dative-gpi/foundation-shared-services/composables";
import { useDashboardOrganisations, useFolders, useDashboardShallows, useAppOrganisationId, useCurrentUserOrganisation } from "@dative-gpi/foundation-core-services/composables";

import { DashboardType } from "@dative-gpi/foundation-shared-domain/enums";
import { dashboardTypeColor, dashboardTypeLabel, FoldersListType, type FoldersListItem } from "@dative-gpi/foundation-core-components/utils";
import type { FolderFilters, DashboardOrganisationFilters, DashboardShallowFilters, DashboardInfos } from "@dative-gpi/foundation-core-domain/models";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSChip from '@dative-gpi/foundation-shared-components/components/FSChip.vue';
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSFolderTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSFolderTileUI.vue";
import FSDashboardShallowTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardShallowTileUI.vue";
import FSDashboardOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDashboardOrganisationTileUI.vue";

import FSDataTable from "../lists/FSDataTable.vue";
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';
import { useTranslations } from '@dative-gpi/bones-ui';

export default defineComponent({
  name: "FSBaseFoldersExplorer",
  components: {
    FSDashboardOrganisationTileUI,
    FSDashboardShallowTileUI,
    FSFolderTileUI,
    FSDataTable,
    FSIconCheck,
    FSTagGroup,
    FSImage,
    FSChip,
    FSIcon
  },
  props: {
    foldersFilters: {
      type: Object as PropType<FolderFilters>,
      default: undefined,
      required: false
    },
    dashboardOrganisationsFilters: {
      type: Object as PropType<DashboardOrganisationFilters>,
      default: undefined,
      required: false
    },
    dashboardShallowsFilters: {
      type: Object as PropType<DashboardShallowFilters>,
      default: undefined,
      required: false
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    itemTo: {
      type: Function as PropType<(item: DashboardInfos) => Partial<RouteLocation>>,
      required: false
    },
    tableCode: {
      type: String,
      required: true
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update", "update:modelValue", "update:type", "update:dashboard-type"],
  setup(props, { emit }) {
    const { $tr } = useTranslations();
    const { fetch: fetchUserOrganisation, entity: userOrganisation } = useCurrentUserOrganisation();
    const { entity: organisation, get: getOrganisation } = useOrganisation();
    const { organisationId } = useAppOrganisationId();

    const { entities: dashboardOrganisations, fetching: fetchingDashboardOrganisations, getMany: getManyDashboardOrganisations } = useDashboardOrganisations();
    const { entities: dashboardShallows, fetching: fetchingDashboardShallows, getMany: getManyDashboardShallows } = useDashboardShallows();
    const { entities: folders, fetching: fetchingFolders, getMany: getManyFolders } = useFolders();

    const selecteds = ref<string[]>([]);

    const mainUserDashboardId = computed(() => {
      return userOrganisation.value?.mainDashboardId;
    });

    const mainOrganisationDashboardId = computed(() => {
      return organisation.value?.mainDashboardId;
    });

    const items = computed((): FoldersListItem[] => {
      return [
        ...folders.value.map(g => ({
          ...g,
          type: FoldersListType.Folder,
          dashboardType: DashboardType.None
        })) as FoldersListItem[],
        ..._.sortBy([
          ...dashboardOrganisations.value.map(d => ({
            ...d,
            type: FoldersListType.Dashboard,
            dashboardType: DashboardType.Organisation
          })) as FoldersListItem[],
          ...dashboardShallows.value.map(d => ({
            ...d,
            type: FoldersListType.Dashboard,
            dashboardType: DashboardType.Shallow
          })) as FoldersListItem[]
        ], d => d.label)
      ]
    });

    const headersOptions = computed(() => ({
      dashboardType: {
        fixedFilters: [
          {
            value: DashboardType.Organisation,
            text: dashboardTypeLabel(DashboardType.Organisation)
          },
          {
            value: DashboardType.Shallow,
            text: dashboardTypeLabel(DashboardType.Shallow)
          },
          {
            value: DashboardType.OrganisationType,
            text: dashboardTypeLabel(DashboardType.OrganisationType)
          },
          {
            value: 10,
            text: $tr("ui.common.folder", "Folder")
          },
        ],
        methodFilter: (value: number, dashboardType: DashboardType) => {
          if(dashboardType !== DashboardType.None) {
            return value === dashboardType;
          } else {
            return value === 10;
          }
        }
      }
    }));

    const onSelect = (values: string[]) => {
      selecteds.value = values;
      const selectedItems = items.value.filter(i => selecteds.value!.includes(i.id));
      const newDashboardType = selectedItems.map(i => i.dashboardType);
      const newModelValue = selectedItems.map(i => i.id);
      const newType = selectedItems.map(i => i.type);
      emit("update:dashboard-type", newDashboardType);
      emit("update:modelValue", newModelValue);
      emit("update:type", newType);
      emit("update", { dashboardType: newDashboardType, modelValue: newModelValue, type: newType });
    };

    const isSelected = (id: string) => {
      return selecteds.value?.includes(id);
    };

    onMounted(() => {
      fetchUserOrganisation();
    })

    watch(() => organisationId.value, () => {
      if (organisationId.value) {
        getOrganisation(organisationId.value);
      }
    }, { immediate: true });

    watch(() => props.foldersFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyFolders(props.foldersFilters, f => f.parentId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.dashboardOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardOrganisations(props.dashboardOrganisationsFilters, f => f.folderId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.dashboardShallowsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDashboardShallows(props.dashboardShallowsFilters, f => f.folderId == props.foldersFilters?.parentId);
      }
    }, { immediate: true });

    watch(() => props.modelValue, (next) => {
      selecteds.value = next;
    }, { immediate: true });

    return {
      fetchingDashboardOrganisations,
      fetchingDashboardShallows,
      fetchingFolders,
      mainOrganisationDashboardId,
      mainUserDashboardId,
      headersOptions,
      ColorEnum,
      selecteds,
      items,
      onSelect,
      isSelected,
      FoldersListType,
      DashboardType,
      dashboardTypeColor,
      dashboardTypeLabel
    };
  }
});
</script>
