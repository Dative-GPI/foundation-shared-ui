<template>
  <FSTile
    :width="['296px','336px']"
    :height="['132px', '116px']"
    :padding="['16px', '12px']"
    borderRadius="8px"
    v-bind="$attrs"
  >
    <FSRow
      align="center-left"
      gap="16px"
      :wrap="false"
    >
      <FSCol
        align="center-left"
        :gap="['12px', '8px']"
      >
        <FSSpan
          font="text-overline"
          :lineClamp="4"
        >
          {{ $props.label }}
        </FSSpan>
        <FSRow
          align="center-left"
          :gap="['12px', '8px']"
        >
          <FSIcon
            :color="ColorEnum.Primary"
            :size="['18px', '16px']"
          >
            {{ chartIcon(type) }}
          </FSIcon>
          <FSChip
            v-if="$props.scope === ApplicationScope.OrganisationType"
            :color="ColorEnum.Light"
            :label="$tr('ui.chart-origin.organisation-type', 'Shared')"
          />
        </FSRow>
      </FSCol>
      <FSCol
        align="center-right"
        width="hug"
      >
        <FSImage
          v-if="$props.imageId"
          :imageId="$props.imageId"
          :height="['84px', '72px']"
          :width="['84px', '72px']"  
        />
        <FSIconCard
          v-else-if="$props.icon"
          :size="['84px', '72px']"
          :icon="$props.icon"
        />
      </FSCol>
    </FSRow>
  </FSTile>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { ApplicationScope, ChartType } from "@dative-gpi/foundation-shared-domain/enums";

import { chartIcon } from "@dative-gpi/foundation-shared-components/tools";

import FSImage from "../FSImage.vue";
import FSTile from "./FSTile.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";
import FSIconCard from '../FSIconCard.vue';
import FSChip from '../FSChip.vue';


export default defineComponent({
  name: "FSChartTileUI",
  components: {
    FSImage,
    FSTile,
    FSRow,
    FSCol,
    FSSpan,
    FSChip,
    FSIconCard
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    imageId: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    icon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    type: {
      type: Number as PropType<ChartType>,
      required: false,
      default: ChartType.None
    },
    scope: {
      type: Number as PropType<ApplicationScope>,
      required: false,
      default: ApplicationScope.None
    },
  },
  setup() {
    return {
      ColorEnum,
      ApplicationScope,
      chartIcon
    };
  }
});
</script>