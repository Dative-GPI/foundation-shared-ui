<template>
  <FSChatBotUI
    :title="$props.title"
    :subtitle="$props.subtitle"
    :placeholder="$props.placeholder"
    :modelValue="$props.modelValue"
    @submit="$emit('submit', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #append-inner
    >
      <FSMenu
        v-model="usageMenu"
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
                  {{ actualMonthYear }}
                </FSText>
              </FSRow>
            </FSRow>
            <FSProgressBar
              :modelValue="usageRate"
              :startColor="ColorEnum.Primary"
              :endColor="ColorEnum.Primary"
              :showValue="false"
            />
            <FSText
              font="text-body"
            >
              {{ $tr('ui.chatbot.usage-amount', "{0}€ used out of {1}€ this month", usageAmout, totalAuthorizedAmount) }}
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
    <template
      v-for="(_, name) in $slots"
      v-slot:[name]="slotData"
    >
      <slot
        :name="name"
        v-bind="slotData"
      />
    </template>
  </FSChatBotUI>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSMenu from '@dative-gpi/foundation-shared-components/components/FSMenu.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSProgressBar from '@dative-gpi/foundation-shared-components/components/FSProgressBar.vue';
import FSChatBotUI from "@dative-gpi/foundation-shared-components/components/chatbot/FSChatBotUI.vue";
import FSProgressCircle from '@dative-gpi/foundation-shared-components/components/FSProgressCircle.vue';

export default defineComponent({
  name: "FSChatBot",
  components: {
    FSRow,
    FSCol,
    FSCard,
    FSMenu,
    FSText,
    FSButton,
    FSChatBotUI,
    FSProgressBar,
    FSProgressCircle,
  },
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: false
    }
  },
  emits: ["click:ask-for-authorization", "submit", "update:modelValue"],
  setup() {
    const { epochToMonthYearOnlyFormat } = useDateFormat();

    const usageAmout = ref(0);
    const usageRate = ref(0.8);
    const usageMenu = ref(false);
    const totalAuthorizedAmount = ref(50);
    const actualMonthYear = ref(epochToMonthYearOnlyFormat(Date.now()));

    return {
      usageRate,
      usageMenu,
      usageAmout,
      totalAuthorizedAmount,
      ColorEnum,
      actualMonthYear
    };
  }
});
</script>
