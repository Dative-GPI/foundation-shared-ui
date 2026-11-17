<template>
  <FSChatBotUI
    :title="$props.title"
    :subtitle="$props.subtitle"
    :placeholder="$props.placeholder"
    :modelValue="$props.modelValue"
    :disableSubmit="outOfCredits"
    @submit="$emit('submit', $event)"
    @update:model-value="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #append-inner
    >
      <FSChatbotUsageMenu
        :usageAmount="chatBudget?.consumed ?? 0"
        :totalAuthorizedAmount="chatBudget?.monthlyLimit ?? 0"
        :periodStart="chatBudget?.periodStart"
        @click:ask-for-authorization="$emit('click:ask-for-authorization')"
      />
      <FSButton
        v-if="outOfCredits"
        :color="ColorEnum.Primary"
        :label="$tr('ui.chatbot.ask-for-authorization', 'Ask for more credits')"
        @click="() => budgetDialog = true"
      />
      <slot
        name="append-inner"
        v-bind="{ dialog: budgetDialog }"
      >
        <FSDialog
          v-model="budgetDialog"
          width="648"
          :title="$tr('ui.chatbot.usage', 'AI Credits')"
        >
          <template
            #body
          >
            <FSDialogChatBotUsageLimitBody
              @click:cancel="budgetDialog = false"
              @click:ask-for-authorization="$emit('click:ask-for-authorization')"
            />
          </template>
        </FSDialog>
      </slot>
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
import { computed, defineComponent, onMounted, ref } from "vue";

import { useCurrentChatBudget } from "@dative-gpi/foundation-core-services/composables";

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

import FSDialog from '@dative-gpi/foundation-shared-components/components/FSDialog.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import FSChatBotUI from "@dative-gpi/foundation-shared-components/components/chatbot/FSChatBotUI.vue";
import FSChatbotUsageMenu from "@dative-gpi/foundation-shared-components/components/chatbot/FSChatbotUsageMenu.vue";
import FSDialogChatBotUsageLimitBody from './FSDialogChatBotUsageLimitBody.vue';

export default defineComponent({
  name: "FSChatBot",
  components: {
    FSButton,
    FSDialog,
    FSChatBotUI,
    FSChatbotUsageMenu,
    FSDialogChatBotUsageLimitBody
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
    const { fetch: fetchChatBudget, entity: chatBudget } = useCurrentChatBudget();
    const budgetDialog = ref(false);

    const outOfCredits = computed(() => !!chatBudget.value && chatBudget.value.remaining <= 0);

    onMounted(() => {
      fetchChatBudget();
    });

    return {
      ColorEnum,
      chatBudget,
      budgetDialog,
      outOfCredits
    };
  }
});
</script>
