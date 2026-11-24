<template>
  <FSMenu
    v-model="menu"
  >
    <template
      #activator="{ props: activatorProps }"
    >
      <FSProgressCircle
        v-bind="activatorProps"
        padding="4px"
        :modelValue="usageRate"
        :startColor="ColorEnum.Primary"
        :endColor="ColorEnum.Primary"
        :showValue="false"
        thickness="2.5px"
        size="18px"
        style="cursor: pointer;"
      />
    </template>
    <FSCard
      width="320px"
      padding="16px"
    >
      <FSCol
        gap="12px"
      >
        <FSRow>
          <FSRow>
            <FSText
              font="text-button"
            >
              {{ $tr('ui.chatbot.usage', "AI Credits") }}
            </FSText>
          </FSRow>
          <FSRow
            width="hug"
          >
            <FSText
              font="text-overline"
            >
              {{ epochToMonthYearOnlyFormat($props.periodStart ?? Date.now()) }}
            </FSText>
          </FSRow>
        </FSRow>
        <FSProgressBar
          :modelValue="usageRate"
          :startColor="ColorEnum.Primary"
          :endColor="ColorEnum.Primary"
        />
        <FSText
          v-if="$props.usageAmount !== undefined && $props.totalAuthorizedAmount"
          font="text-body"
        >
          {{ $tr('ui.chatbot.usage-amount', "{0}€ used out of {1}€ this month", $props.usageAmount, $props.totalAuthorizedAmount) }}
        </FSText>
        <FSButton
          width="100%"
          :label="$tr('ui.chatbot.ask-for-authorization', 'Ask for more credits')"
          @click="$emit('click:ask-for-authorization')"
        />
      </FSCol>
    </FSCard>
  </FSMenu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCol from "../FSCol.vue";
import FSRow from "../FSRow.vue";
import FSCard from "../FSCard.vue";
import FSMenu from "../FSMenu.vue";
import FSText from "../FSText.vue";
import FSButton from "../FSButton.vue";
import FSProgressBar from "../FSProgressBar.vue";
import FSProgressCircle from "../FSProgressCircle.vue";

export default defineComponent({
  name: "FSChatbotUsageMenu",
  components: {
    FSCol,
    FSRow,
    FSCard,
    FSMenu,
    FSText,
    FSButton,
    FSProgressBar,
    FSProgressCircle
  },
  props: {
    usageAmount: {
      type: Number,
      required: true,
      default: 0
    },
    totalAuthorizedAmount: {
      type: Number,
      required: true,
      default: 0
    },
    periodStart: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    }
  },
  emits: ["click:ask-for-authorization"],
  setup(props) {
    const { epochToMonthYearOnlyFormat } = useDateFormat();

    const menu = ref(false);

    const usageRate = computed(() => props.totalAuthorizedAmount ? props.usageAmount / props.totalAuthorizedAmount : 0);

    return {
      menu,
      usageRate,
      ColorEnum,
      epochToMonthYearOnlyFormat
    };
  }
});
</script>
