<template>
  <FSTile
    :activeColor="ColorEnum.Primary"
    :modelValue="$props.modelValue"
    :width="$props.width"
    :height="$props.height"
    padding="16px 24px"
    v-bind="$attrs"
  >
    <FSRow
      :wrap="false"
    >
      <FSCol
        gap="16px"
        width="fill"
      >
        <FSSpan
          font="text-button"
        >
          {{ $props.label }}
        </FSSpan>
        <FSRow
          :wrap="false"
          align="center-left"
        >
          <FSIcon>
            mdi-view-dashboard-outline
          </FSIcon>
          <FSSpan
            font="text-overline"
          >
            {{ $tr('ui.dashboards.dynamic', '{0} dashboard(s)', $props.dashboardsCount) }}
          </FSSpan>
        </FSRow>
        <FSRow
          :wrap="false"
          align="center-left"
        >
          <FSIconCheck
            variant="fill"
            :value="automaticTransition"
          />
          <FSSpan
            font="text-overline"
            v-if="automaticTransition"
          >
            {{$tr('ui.playlist.transition-delay.dynamic', 'Transition : {0}', getTimeBestString($props.delay ?? 0))}}
          </FSSpan>
          <FSSpan
            font="text-overline"
            v-else
          >
            {{ $tr('ui.playlist.automatic-transition', 'Automatic transition') }}
          </FSSpan>
        </FSRow>
        <FSRow
          :wrap="false"
          align="center-left"
        >
          <FSIconCheck
            variant="fill"
            :value="$props.looped"
          />
          <FSSpan
            font="text-overline"
          >
            {{ $tr('entity.playlist.looped', 'Looped') }}
          </FSSpan>
        </FSRow>
      </FSCol>
      <slot
        name="actions"
      />
    </FSRow>
  </FSTile>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import { getTimeBestString } from "@dative-gpi/foundation-shared-components/utils";

import FSIconCheck from "../FSIconCheck.vue";
import FSTile from "../tiles/FSTile.vue";
import FSIcon from "../FSIcon.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSPlaylistTileUI",
  components: {
    FSIconCheck,
    FSIcon,
    FSTile,
    FSSpan,
    FSRow,
    FSCol
  },
  inheritAttrs: false,
  props: {
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => [352, 336]
    },
    height: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: () => 'hug'
    },
    label: {
      type: String as PropType<string>,
      required: true
    },
    dashboardsCount: {
      type: Number,
      required: true
    },
    delay: {
      type: Number ,
      required: false
    },
    looped: {
      type: Boolean,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {

    const automaticTransition = computed((): boolean => {
      return props.delay ? props.delay > 0 : false;
    });

    return {
      getTimeBestString,
      automaticTransition,
      ColorEnum
    };
  }
});
</script>