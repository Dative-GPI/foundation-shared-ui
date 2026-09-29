<template>
  <FSCol
    gap="12px"
    :height="$props.height"
  >
    <FSRow
      height="fill"
      style="min-height: 0;"
    >
      <FSFadeOut
        height="100%"
      >
        <FSCol
          gap="24px"
        >
          <FSRow
            gap="24px"
            height="fill"
            :style="{ minHeight: configurationMinHeight + 'px' }"
          >
            <FSCol
              gap="24px"
              height="100%"
              style="min-height: 0;"
            >
              <FSRow
                v-if="displayAiConfiguration"
                gap="16px"
              >
                <slot
                  name="header"
                >
                  <FSRow>
                    <FSCard
                      :color="configurationWindow == 0 ? ColorEnum.Primary : ColorEnum.Light"
                      padding="16px 24px"
                      width="100%"
                      :variant="CardVariants.Standard"
                      @click="() => { configurationWindow = 0; }"
                    >
                      <FSCol>
                        <FSIcon
                          :color="ColorEnum.Primary"
                          size="33px"
                          icon="mdi-pencil-ruler-outline"
                        />
                        <FSSpan
                          font="text-button"
                        >
                          {{ $tr('ui.dialog.builder-form.manual', 'Manual configuration') }}
                        </FSSpan>
                      </FSCol>
                    </FSCard>
                  </FSRow>
                  <FSRow>
                    <FSCard
                      :color="configurationWindow == 1 ? ColorEnum.Primary : ColorEnum.Light"
                      padding="16px 24px"
                      width="100%"
                      :variant="CardVariants.Standard"
                      @click="() => { configurationWindow = 1; }"
                    >
                      <FSCol>
                        <FSIcon
                          :color="ColorEnum.Primary"
                          icon="mdi-creation-outline"
                          size="33px"
                        />
                        <FSSpan
                          font="text-button"
                        >
                          {{ $tr('ui.dialog.builder-form.ai', 'AI configuration') }}
                        </FSSpan>
                      </FSCol>
                    </FSCard>
                  </FSRow>
                </slot>
              </FSRow>
              <FSRow
                height="fill"
                style="min-height: 0;"
              >
                <FSWindow
                  :modelValue="configurationWindow"
                  height="100%"
                  width="100%"
                >
                  <FSCol
                    :value="0"
                    height="100%"
                  >
                    <slot
                      name="manualConfiguration"
                    >
                      <FSMultiForm
                        ref="multiFormRef"
                        :value="0"
                        :steps="$props.steps"
                        mode="tabs"
                        @submit="$emit('click:submitButton')"
                        @cancel="$emit('click:cancelButton')"
                        v-model:step="currentStep"
                        height="100%"
                        maxHeight="100%"
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
                      </FSMultiForm>
                    </slot>
                  </FSCol>

                  <slot
                    v-if="displayAiConfiguration"
                    name="aiConfiguration"
                    :value="1"
                  >
                    AI Not deployed yet
                  </slot>
                </FSWindow>
              </FSRow>
            </FSCol>
            <FSDivider
              v-if="$props.showVerticalDivider"
              :vertical="true"
            />
            <FSCol
              height="100%"
              style="min-height: 0;"
            >
              <slot
                name="preview"
              />
            </FSCol>
          </FSRow>
          <FSCol>
            <slot
              name="append"
            />
          </FSCol>
        </FSCol>
      </FSFadeOut>
    </FSRow>
    <FSDivider />
    <FSRow>
      <slot
        name="left-footer"
      />
      <FSRow
        class="fs-dialog-actions"
        align="top-right"
        :wrap="false"
      >
        <FSRow
          v-if="configurationWindow === 0"
          align="top-right"
          :wrap="false"
        >
          <FSButton
            :color="ColorEnum.Light"
            :label="previousButtonLabel"
            @click="multiFormRef?.previous()"
          />
          <FSButton
            :color="ColorEnum.Primary"
            :variant="currentStep === $props.steps ? 'full' : 'standard'"
            :label="nextButtonLabel"
            @click="multiFormRef?.submit()"
          />
        </FSRow>
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, ref, type PropType } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { CardVariants, ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSWindow from "./FSWindow.vue";
import FSCard from "./FSCard.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";
import FSMultiForm from "./FSMultiForm.vue";
import FSButton from "./FSButton.vue";
import FSDivider from './FSDivider.vue';

export default defineComponent({
  name: "FSDialogBuilderFormBody",
  components: {
    FSMultiForm,
    FSDivider,
    FSWindow,
    FSButton,
    FSCard,
    FSSpan,
    FSIcon,
    FSCol,
    FSRow,
  },
  props: {
    height: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "70dvh"
    },
    steps: {
      type: Number,
      required: true
    },
    displayAiConfiguration: {
      type: Boolean,
      required: false,
      default: true
    },
    showVerticalDivider: {
      type: Boolean,
      required: false,
      default: false
    },
    configurationMinHeight: {
      type: Number,
      required: false,
      default: 0
    }
  },
  emits: ["click:cancelButton", "click:submitButton"],
  setup(props) {
    const { $tr } = useTranslationsProvider();

    const multiFormRef = ref<InstanceType<typeof FSMultiForm> | null>(null);
    const configurationWindow = ref(0);
    const currentStep = ref(1);

    const previousButtonLabel = computed(() => {
      return currentStep.value == 1
        ? $tr("ui.common.cancel", "Cancel")
        : $tr("ui.common.back", "Back");
    });

    const nextButtonLabel = computed(() => {
      return currentStep.value == props.steps
        ? $tr("ui.common.validate", "Validate")
        : $tr("ui.common.next", "Next");
    });

    return {
      ColorEnum,
      CardVariants,
      configurationWindow,
      multiFormRef,
      currentStep,
      previousButtonLabel,
      nextButtonLabel
    };
  }
});
</script>