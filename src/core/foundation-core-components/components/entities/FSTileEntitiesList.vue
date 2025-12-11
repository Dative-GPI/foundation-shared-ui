<template>
  <component 
    :is="component"
    v-bind="componentProps"
  />
</template>

<script lang="ts">
import { computed, defineAsyncComponent, defineComponent, type PropType, type Component } from "vue";
import { EntityType } from "../../../../shared/foundation-shared-domain/enums";


export default defineComponent({
  name: "FSTileEntitiesList",
  props: {
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    filters: {
      type: Object,
      required: false,
      default: null
    }
  },
  setup(props, { attrs }) {
    const component = computed<Component | null>(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return defineAsyncComponent(() => import("../lists/deviceOrganisations/FSTileDeviceOrganisationsList.vue"));
        case EntityType.Dashboard:
          return defineAsyncComponent(() => import("../lists/dashboards/FSTileDashboardsList.vue"));
        case EntityType.Folder:
          return defineAsyncComponent(() => import("../lists/folders/FSTileFoldersList.vue"));
        case EntityType.User:
          return defineAsyncComponent(() => import("../lists/userOrganisations/FSTileUserOrganisationsList.vue"));
        case EntityType.Group:
          return defineAsyncComponent(() => import("../lists/groups/FSTileGroupsList.vue"));
        case EntityType.Location:
          return defineAsyncComponent(() => import("../lists/locations/FSTileLocationsList.vue"));
        case EntityType.Model:
          return defineAsyncComponent(() => import("../lists/models/FSTileModelsList.vue"));
        default:
          return null;
      };
    });

    const componentProps = computed(() => {
      switch(props.entityType) {
        case EntityType.Device:
          return {
            ...attrs,
            deviceOrganisationFilters : props.filters
          };
        case EntityType.Dashboard:
          return {
            ...attrs,
            dashboardOrganisationFilters : props.filters,
            dashboardOrganisationTypeFilters : props.filters,
            dashboardShallowFilters : props.filters
          };
        case EntityType.Folder:
          return {
            ...attrs,
            folderFilters : props.filters
          };
        case EntityType.User:
          return {
            ...attrs,
            userOrganisationFilters : props.filters
          };
        case EntityType.Group:
          return {
            ...attrs,
            groupFilters : props.filters
          };
        case EntityType.Location:
          return {
            ...attrs,
            locationFilters : props.filters
          };
        case EntityType.Model:
          return {
            ...attrs,
            modelFilters : props.filters
          };
        default:
          return null;
      }
    });

    return {
      component,
      componentProps
    };
  },
});
</script>