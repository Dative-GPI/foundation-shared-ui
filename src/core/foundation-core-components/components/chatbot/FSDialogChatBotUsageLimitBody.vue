<template>
  <FSCol
    gap="24px"
    padding="8px 0 0 0"
  >
    <template
      v-if="chatBudget"
    >  
      <FSCard
        width="100%"
        padding="16px 24px"
      >
        <FSRow
          gap="12px"
          align="center-left"
        >
          <FSIcon
            icon="mdi-information-outline"
          />
          <FSCol
            gap="2px"
          >
            <FSSpan
              font="text-overline"
            >
              {{ $tr('ui.chatbot.usage-month', "You used {0}€ of AI credits this month", chatBudget.consumed) }}
            </FSSpan>
            <FSSpan
              font="text-overline"
            >
              {{ $tr('ui.chatbot.usage-limit-reset', "Your AI credits limit resets date : {0}", periodEndDate) }}
            </FSSpan>
          </FSCol>
        </FSRow>
      </FSCard>
      <FSText>
        {{ $tr('ui.chatbot.usage-ask-description', "You can contact the platform administrators to get more AI credits and keep using the platform's AI chatbots.") }}
      </FSText>
      <FSCol>
        <FSText
          font="text-overline"
        >
          {{ $tr('ui.chatbot.usage-rate', "Usage rate") }}
        </FSText>
        <FSProgressBar
          :modelValue="usageRate"
          :startColor="ColorEnum.Primary"
          :endColor="ColorEnum.Primary"
        />
        <FSText
          font="text-body"
        >
          {{ $tr('ui.chatbot.usage-budget-month', "{0}€ used out of {1}€ this month", chatBudget.consumed, chatBudget.monthlyLimit) }}
        </FSText>
      </FSCol>
    </template>
    <FSRow
      align="bottom-right"
    >
      <FSButton
        @click="$emit('click:cancel')"
        :label="$tr('ui.common.cancel', 'Cancel')"
      />
      <FSButton
        :label="$tr('ui.chatbot.ask-for-authorization', 'Ask for more credits')"
        variant="full"
        :color="ColorEnum.Primary"
        @click="$emit('click:ask-for-authorization')"
      />
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from 'vue';

import { useDateFormat } from '@dative-gpi/foundation-shared-services/composables';
import { useCurrentChatBudget } from '@dative-gpi/foundation-core-services/composables';

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSProgressBar from '@dative-gpi/foundation-shared-components/components/FSProgressBar.vue';

export default defineComponent({
  name: "FSDialogChatBotUsageLimitBody",
  components: {
    FSCol,
    FSRow,
    FSCard,
    FSText,
    FSSpan,
    FSIcon,
    FSButton,
    FSProgressBar
  },
  props: {
  },
  emits: ['click:cancel', 'click:ask-for-authorization'],
  setup() {
    const { fetch: fetchChatBudget, entity: chatBudget } = useCurrentChatBudget();
    const { epochToShortDateFormat } = useDateFormat();
    
    const periodEndDate = computed(() => epochToShortDateFormat(chatBudget?.value?.periodEnd));

    const usageRate = computed(() => {
      if (!chatBudget?.value?.monthlyLimit) {
        return 0;
      }
      return chatBudget.value.consumed / chatBudget.value.monthlyLimit;
    });

    onMounted(() => {
      fetchChatBudget();
    });

    return {
      ColorEnum,
      usageRate,
      chatBudget,
      periodEndDate
    };
  }
});
</script>
