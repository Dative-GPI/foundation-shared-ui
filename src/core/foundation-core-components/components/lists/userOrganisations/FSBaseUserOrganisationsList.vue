<template>
  <FSDataTable
    :items="userOrganisations"
    :itemTo="$props.itemTo"
    :loading="fetchingUserOrganisations"
    :selectable="$props.selectable"
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
      #item.allowEmails="{ item }"
    >
      <FSIconCheck
        :value="item.allowEmails"
      />
    </template>
    <template
      #item.allowSms="{ item }"
    >
      <FSIconCheck
        :value="item.allowSms"
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
      #item.validity="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ userValidityLabel(item.validity) }}
      </FSSpan>
    </template>
    <template
      #item.userType="{ item }"
    >
      <FSSpan
        font="text-overline"
      >
        {{ userTypeLabel(item.userType) }}
      </FSSpan>
    </template>
    <template
      #item.tile="{ index, item, toggleSelect }"
    >
      <FSUserOrganisationTileUI
        :key="index"
        :to="$props.itemTo && $props.itemTo(item)"
        :selectable="$props.selectable"
        :modelValue="isSelected(item.id)"
        @update:modelValue="toggleSelect(item)"
        v-bind="item"
      />
    </template>
  </FSDataTable>
</template>

<script lang="ts">
import { defineComponent, type PropType, watch } from "vue";
import { type RouteLocation } from "vue-router";
import _ from "lodash";

import type { UserOrganisationFilters, UserOrganisationInfos } from "@dative-gpi/foundation-core-domain/models";
import { userTypeLabel, userValidityLabel } from "@dative-gpi/foundation-core-components/utils";
import { useUserOrganisations } from "@dative-gpi/foundation-core-services/composables";

import FSDataTable from "../FSDataTable.vue";

import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";
import FSTagGroup from "@dative-gpi/foundation-shared-components/components/FSTagGroup.vue";
import FSIconCheck from "@dative-gpi/foundation-shared-components/components/FSIconCheck.vue";
import FSUserOrganisationTileUI from "@dative-gpi/foundation-shared-components/components/tiles/FSUserOrganisationTileUI.vue";

export default defineComponent({
  name: "FSBaseUserOrganisationsList",
  components: {
    FSDataTable,
    FSImage,
    FSUserOrganisationTileUI,
    FSSpan,
    FSTagGroup,
    FSIconCheck

  },
  props: {
    tableCode: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    userOrganisationsFilters: {
      type: Object as PropType<UserOrganisationFilters | null>,
      required: false,
      default: null
    },
    itemTo: {
      type: Function as PropType<(item: UserOrganisationInfos) => Partial<RouteLocation>>,
      required: false
    },
    selectable: {
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
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchUserOrganisations, entities: userOrganisations, fetching: fetchingUserOrganisations } = useUserOrganisations();

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    watch(() => props.userOrganisationsFilters, (next, previous) => {
      if ((!next && !previous) || !_.isEqual(next, previous)) {
        fetchUserOrganisations(props.userOrganisationsFilters ?? undefined);
      }
    }, { immediate: true });

    return {
      fetchingUserOrganisations,
      userOrganisations,
      userValidityLabel,
      userTypeLabel,
      isSelected
    };
  }
});
</script>