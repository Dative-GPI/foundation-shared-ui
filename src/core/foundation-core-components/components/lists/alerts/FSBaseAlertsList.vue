<template>
  <FSDataTable
    rowGap="6px"
    :rowColor="criticityColor"
    :itemTo="$props.itemTo"
    :items="alertsOrdered"
    :loading="fetchingAlerts"
    :headersOptions="headersOptions"
    :tableCode="$props.tableCode"
    :modelValue="$props.modelValue"
    :selectable="$props.selectable"
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
      #item.criticity="{ item }"
    >
      <FSRow
        :wrap="false" 
        align="center-left"
        gap="2px"
      >
        <FSIcon
          :color="AlertTools.criticityColor(item.criticity)"
        >
          {{ AlertTools.criticityIcon(item.criticity) }}
        </FSIcon>
        <FSSpan>
          {{ AlertTools.criticityLabel(item.criticity) }}
        </FSSpan>
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
      #item.tags="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :showRemove="false"
        :tags="item.tags"
      />
    </template>
    <template
      #item.groupByValues="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :tags="item.groupByValues.map((gbv: any) => `${gbv.label}: ${gbv.value}`)"
        :showRemove="false"
      />
    </template>
    <template
      #item.deviceOrganisationImageId="{ item }"
    >
      <FSImage
        v-if="item.deviceOrganisationImageId != null"
        width="32px"
        height="32px"
        :imageId="item.deviceOrganisationImageId"
        :thumbnail="true"
      />
    </template>
    <template
      #item.acknowledged="{ item }"
    >
      <FSSpan
        v-if="item.acknowledged"
        font="text-overline"
      >
        {{ $tr('entity.alert.acknowledged', 'Acknowledged') }}
      </FSSpan>
      <FSButtonAcknowledgeAlert
        v-else-if="!item.acknowledged && $props.allowAcknowledge"
        :alertId="item.id"
      />
      <FSSpan
        v-else
        font="text-overline"
      >
        {{ $tr('ui.alert.not-acknowledged', 'Not acknowledged') }}
      </FSSpan>
    </template>
    <template
      #item.acknowledgingUserImageId="{ item }"
    >
      <FSImage
        v-if="item.acknowledged && item.acknowledgingUserImageId != null"
        width="32px"
        height="32px"
        :imageId="item.acknowledgingUserImageId"
        :thumbnail="true"
      />
    </template>
    <template
      #item.acknowledgingTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.acknowledgingTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.history="{ item }"
    >
      <FSTagGroup
        variant="slide"
        :tags="item.history.map((h: any) => AlertTools.statusLabel(h.status))"
        :showRemove="false"
      />
    </template>
    <template
      #item.initialState="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ AlertTools.statusLabel(item.initialState.status) }}
      </FSSpan>
    </template>
    <template
      #item.triggerActualTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.triggerProcessedTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.lastState="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ AlertTools.statusLabel(item.lastState.status) }}
      </FSSpan>
    </template>
    <template
      #item.currentActualTimestamp="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ epochToShortTimeFormat(item.currentActualTimestamp) }}
      </FSSpan>
    </template>
    <template
      #item.currentStatus="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ AlertTools.statusLabel(item.currentStatus) }}
      </FSSpan>
    </template>
    <template
      #item.tile="{ index, item, toggleSelect }"
    >
      <FSAlertTileUI
        :key="index"
        variant="standard"
        :label="item.label"
        :deviceOrganisationLabel="item.deviceOrganisationLabel"
        :icon="item.icon"
        :selectable="$props.selectable"
        :triggerProcessedTimestamp="item.triggerProcessedTimestamp"
        :to="$props.itemTo && $props.itemTo(item)"
        :modelValue="isSelected(item.id)"
        :color="alertColorByCriticity(item.criticity)"
        @update:modelValue="toggleSelect(item)"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import type { PropType} from "vue";
import type { RouteLocation } from "vue-router";
import { computed, defineComponent, watch } from "vue";
import _ from "lodash";

import { useTranslations } from "@dative-gpi/bones-ui";

import type { AlertFilters, AlertInfos } from "@dative-gpi/foundation-core-domain/models";
import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";
import { getEnumEntries } from "@dative-gpi/foundation-shared-domain/tools";
import { useAlerts } from "@dative-gpi/foundation-core-services/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { Criticity } from "@dative-gpi/foundation-shared-domain/enums";
import { AlertStatus } from "@dative-gpi/foundation-shared-domain/enums";

import { AlertTools } from "@dative-gpi/foundation-shared-components/tools";

import FSDataTable from "../FSDataTable.vue";
import FSButtonAcknowledgeAlert from "./FSButtonAcknowledgeAlert.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSAlertTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSAlertTileUI.vue";


export default defineComponent({
  name: "FSBaseAlertsList",
  components: {
    FSButtonAcknowledgeAlert,
    FSAlertTileUI,
    FSDataTable,
    FSTagGroup,
    FSImage,
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
    alertFilters: {
      type: Object as PropType<AlertFilters>,
      required: false,
      default: null
    },
    notAcknowledged:{
      type: Boolean,
      required: false,
    },
    hidePending:{
      type: Boolean,
      required: false,
    },
    modelValue: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    allowAcknowledge: {
      type: Boolean,
      required: false,
      default: false
    },
    itemTo: {
      type: Function as PropType<(item: AlertInfos) => Partial<RouteLocation>>,
      required: false
    },
    selectable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { $tr } = useTranslations();
    const { getMany: getManyAlerts, entities: alerts, fetching : fetchingAlerts } = useAlerts();
    const { epochToShortTimeFormat } = useDateFormat();


    const criticityColor = (row: any) => {
      return AlertTools.criticityColor(row.criticity);
    };

    const alertColorByCriticity = (criticity: Criticity | number) => {
      return AlertTools.criticityColor(criticity);
    };

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const alertsOrdered = computed(() => {
      const als = [...alerts.value]
      return  als.sort((a: AlertInfos, b: AlertInfos) => {
        return (a.acknowledged === b.acknowledged) ?
          +b.currentActualTimestamp! - +a.currentActualTimestamp! : a.acknowledged ? 1 : -1
      }); 
    });

    const headersOptions = computed(() => ({
      currentStatus: {
        fixedFilters: getEnumEntries(AlertStatus).map(e => ({
          value: e.value,
          text: AlertTools.statusLabel(e.value)
        })),
        methodFilter: (value: AlertStatus, item: AlertStatus) => value == item
      },
      criticity: {
        fixedFilters: getEnumEntries(Criticity).map(e => ({
          value: e.value,
          text: AlertTools.criticityLabel(e.value)
        })),
        methodFilter: (value: Criticity, item: Criticity) => value == item
      },
      acknowledged: {
        fixedFilters: [
          { value: true, text: $tr('entity.alert.acknowledged', 'Acknowledged') },
          { value: false, text: $tr('ui.alert.not-acknowledged', 'Not acknowledged') }
        ],
        methodFilter: (value: boolean, item: boolean) => value === item
      },
    }));

    watch([() => props.alertFilters, () => props.notAcknowledged, () => props.hidePending], (next, previous) => {
      if (!_.isEqual(next, previous)) {
        getManyAlerts({
          ...props.alertFilters,
          acknowledged: props.notAcknowledged ? false : undefined,
          statuses: props.hidePending ? [AlertStatus.Unresolved, AlertStatus.Triggered, AlertStatus.Resolved, AlertStatus.Abandoned] : undefined
        });
      }
    }, { immediate: true });


    return {
      fetchingAlerts,
      headersOptions,
      alertsOrdered,
      AlertTools,
      ColorEnum,
      epochToShortTimeFormat,
      alertColorByCriticity,
      criticityColor,
      isSelected
    };
  }
});
</script>