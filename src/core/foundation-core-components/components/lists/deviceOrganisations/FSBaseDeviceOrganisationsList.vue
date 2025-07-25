<template>
  <FSDataTable
    defaultMode="iterator"
    :loading="fetchingDeviceOrganisations"
    :singleSelect="$props.singleSelect"
    :headersOptions="headersOptions"
    :selectable="$props.selectable"
    :tableCode="$props.tableCode"
    :items="deviceOrganisations"
    :itemTo="$props.itemTo"
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
      #header.imageId-title
    >
      <FSIcon>
        mdi-panorama-variant-outline
      </FSIcon>
    </template>
    <template
      #header.connectivity-title
    >
      <FSIcon>
        mdi-wifi
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
      #item.connectivity="{ item }"
    >
      <FSCol>
        <FSConnectivity
          v-if="item.connectivity.status != ConnectivityStatus.None"
          :deviceConnectivity="item.connectivity"
        />
      </FSCol>
    </template>
    <template
      #item.unrestricted="{ item }"
    >
      <FSIconCheck
        :value="item.unrestricted"
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
      #item.worstAlert="{ item }"
    >
      <FSWorstAlert
        v-if="item.worstAlert"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
      />
      <div
        v-else
      />
    </template>
    <template
      #item.alerts="{ item }"
    >
      <FSWorstAlert
        v-if="item.worstAlert"
        :deviceWorstAlert="item.worstAlert"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
      />
      <div
        v-else
      />
    </template>
    <template
      #item.status="{ item }"
    >
      <FSStatusesCarousel
        :modelStatuses="item.modelStatuses"
        :deviceStatuses="item.status.statuses"
      />
    </template>
    <template
      #item.actions="{ item }"
    >
      <slot
        name="actions"
        v-bind="{ item }"
      >
      </slot>
    </template>
    <template
      v-for="(property, index) in customProperties"
      #[`item.meta.${property.code}`]="{ item }"
      :key="index"
    >
      <FSMetaValue
        :customProperty="property"
        :meta="item.meta"
      />
    </template>
    <template
      v-for="(property, index) in customProperties"
      #[`filter.meta.${property.code}`]="{ filter }"
      :key="index"
    >
      <FSMetaValue
        v-if="filter.text !== '—'"
        variant="colorless"
        :customProperty="property"
        :meta="{ [property.code]: filter.text }"
      />
    </template>
    <template
      #item.tile="{ index, item, toggleSelect }"
    >
      <FSDeviceOrganisationTileUI
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :selectable="$props.selectable"
        :deviceConnectivity="item.connectivity"
        :deviceStatuses="item.status.statuses"
        :deviceWorstAlert="item.worstAlert"
        :singleSelect="$props.singleSelect"
        :deviceAlerts="item.alerts"
        :alertTo="$props.alertTo"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>
  
<script lang="ts">
import { computed, defineComponent, onMounted, type PropType, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";
  
import { ConnectivityStatus, Criticity, PropertyEntity } from "@dative-gpi/foundation-shared-domain/enums";
import { alphanumericSort, connectivityLabel } from "@dative-gpi/foundation-shared-components/utils";
import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import type { DeviceConnectivityDetails, DeviceOrganisationAlert, DeviceOrganisationFilters, DeviceOrganisationInfos, DeviceStatusDetails} from "@dative-gpi/foundation-core-domain/models";
import { useCustomProperties, useDeviceOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSMetaValue from "../../customProperties/FSMetaValue.vue";
import FSDataTable from "../FSDataTable.vue";

import FSDeviceOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSDeviceOrganisationTileUI.vue";
import FSStatusesCarousel from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue";
import FSConnectivity from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSConnectivity.vue";
import FSWorstAlert from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSWorstAlert.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSBaseDeviceOrganisationsList",
  components: {
    FSDeviceOrganisationTileUI,
    FSStatusesCarousel,
    FSConnectivity,
    FSWorstAlert,
    FSDataTable,
    FSIconCheck,
    FSMetaValue,
    FSTagGroup,
    FSImage
  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    deviceOrganisationFilters: {
      type: Object as PropType<DeviceOrganisationFilters>,
      required: false,
      default: null
    },
    connectedOnly: {
      type: Boolean,
      required: false,
      default: false
    },
    itemTo: {
      type: Function as PropType<(item: DeviceOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    alertTo: {
      type: Function,
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
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { fetching: fecthingCustomProperties, entities: customProperties, getMany: getManyCustomProperties } = useCustomProperties();
    const { entities, fetching: fetchingDeviceOrganisations, getMany: getManyDeviceOrganisations } = useDeviceOrganisations();
    const { $tr } = useTranslationsProvider();
  
    const deviceOrganisations = computed((): DeviceOrganisationInfos[] => {
      if (props.connectedOnly) {
        return entities.value.filter(d => d.connectivity != null && d.connectivity.status != ConnectivityStatus.None);
      }
      return entities.value;
    });

    const headersOptions = computed(() => ({
      status: {
        fixedFilters: [{
          value: true,
          text: $tr("ui.device-organisation.has-statuses", "Has statuses")
        }, {
          value: false,
          text: $tr("ui.device-organisation.has-no-statuses", "Has no statuses")
        }],
        methodFilter: (value: boolean, item: DeviceStatusDetails) => {
          return value ? item.statuses.length > 0 : item.statuses.length === 0;
        },
        sort: (a: DeviceStatusDetails, b: DeviceStatusDetails) => a.statuses.length - b.statuses.length
      },
      connectivity: {
        fixedFilters: [{
          value: ConnectivityStatus.None,
          text: "—"
        }, {
          value: ConnectivityStatus.Offline,
          text: connectivityLabel(ConnectivityStatus.Offline)
        }, {
          value: ConnectivityStatus.AlmostOffline,
          text: connectivityLabel(ConnectivityStatus.AlmostOffline)
        }, {
          value: ConnectivityStatus.PartiallyConnected,
          text: connectivityLabel(ConnectivityStatus.PartiallyConnected)
        }, {
          value: ConnectivityStatus.Connected,
          text: connectivityLabel(ConnectivityStatus.Connected)
        }],
        methodFilter: (value: ConnectivityStatus, item: DeviceConnectivityDetails) => {
          switch(value) {
            case ConnectivityStatus.None:
              return !item.status;
            default:
              return item.status == value;
          }
        },
        sort: (a: DeviceConnectivityDetails, b: DeviceConnectivityDetails) => alphanumericSort(a?.status, b?.status)
      },
      alerts: {
        fixedFilters: [{
          value: true,
          text: $tr("ui.device-organisation.has-alerts", "Has alerts")
        }, {
          value: false,
          text: $tr("ui.device-organisation.has-no-alerts", "Has no alerts")
        }],
        methodFilter: (value: boolean, item: DeviceOrganisationAlert[]) => {
          return value ? item.length > 0 : item.length === 0;
        },
        sort: (a: DeviceOrganisationAlert[], b: DeviceOrganisationAlert[]) => a.length - b.length
      },
      worstAlert: {
        fixedFilters: [{
          value: Criticity.None,
          text: "—"
        }, {
          value: Criticity.Information,
          text: AlertTools.criticityLabel(Criticity.Information)
        }, {
          value: Criticity.Warning,
          text: AlertTools.criticityLabel(Criticity.Warning)
        }, {
          value: Criticity.Error,
          text: AlertTools.criticityLabel(Criticity.Error)
        }],
        methodFilter: (value: Criticity, item: DeviceOrganisationAlert | null) => {
          switch(value) {
            case Criticity.None:
              return !item;
            default:
              return item != null && item.criticity === value;
          }
        },
        sort: (a: DeviceOrganisationAlert, b: DeviceOrganisationAlert) => alphanumericSort(a?.criticity, b?.criticity)
      },
      ...customProperties.value.reduce((acc, cp) => ({
        ...acc,
        [`meta.${cp.code}`]: {
          fixedFilters: cp.useOnlyAllowedValues ? [{
            value: (null as string | null),
            text: "—"
          }].concat(Object.keys(cp.allowedValues).map(av => ({
            value: av,
            text: av
          }))): undefined,
          methodFilterRaw: (value: any, item: DeviceOrganisationInfos) => {
            if (cp.useOnlyAllowedValues) {
              return (!Object.keys(cp.allowedValues).includes(item.meta[cp.code])) && !value || item.meta[cp.code] == value
            }
            return item.meta[cp.code] == value
          },
          sort: (a: string, b: string) => alphanumericSort(a, b)
        }
      }), {})
    }));
  
    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };
  
    onMounted((): void => {
      getManyCustomProperties({ 
        entities: [PropertyEntity.Device, PropertyEntity.DeviceOrganisation]
      });
    });
  
    watch(() => props.deviceOrganisationFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        getManyDeviceOrganisations(props.deviceOrganisationFilters);
      }
    }, { immediate: true });
  
    return {
      fetchingDeviceOrganisations,
      fecthingCustomProperties,
      deviceOrganisations,
      ConnectivityStatus,
      customProperties,
      headersOptions,
      isSelected
    };
  }
});
</script>
  