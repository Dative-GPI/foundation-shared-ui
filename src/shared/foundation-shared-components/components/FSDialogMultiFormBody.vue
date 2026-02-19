<template>
  <FSCol
    gap="24px"
  >
    <FSPagination
      v-if="$props.mode === 'pagination'"
      width="calc(100% - 16px)"
      :pages="$props.steps"
      :modelValue="currentStep - 1"
    />
    <FSTabs
      v-else-if="$props.mode === 'tabs'"
      :tab="currentStep - 1"
      :color="$props.tabsColor"
      @update:tab="(val) => currentStep = val + 1"
    >
      <FSTab
        v-for="(step, index) in $props.steps"
        :key="index"
      >
        <slot
          :name="`tab-${index + 1}`"
        >
          <FSRow>
            <FSIcon
              v-if="tabIconSlots[`tab-${index + 1}-icon`]"
            >
              <slot
                :name="`tab-${index + 1}-icon`"
              />
            </FSIcon>
            <FSSpan
              :font="index + 1 === currentStep ? 'text-button' : 'text-body'"
            >
              <slot
                :name="`tab-${index + 1}-label`"
              >
                {{ $tr('ui.tabs.step.default', 'Step {0}', step) }}
              </slot>
            </FSSpan>
          </FSRow>
        </slot>
      </FSTab>
    </FSTabs>
    <FSWindow
      width="100%"
      :modelValue="currentStep - 1"
    >
      <FSForm
        v-for="(step, index) in $props.steps"
        :variant="$props.variant"
        :key="index"
        @submit="onSubmit"
        v-model="valid"
      >
        <FSCol
          gap="24px"
        >
          <FSFadeOut
            :maxHeight="maxHeight"
          >
            <slot
              :name="`step-${step}`"
            />
          </FSFadeOut>
          <FSRow>
            <slot
              name="left-footer"
            />
            <FSRow
              class="fs-dialog-actions"
              align="top-right"
              :wrap="false"
            >
              <FSButton
                v-if="$props.showCancelButton || currentStep > 1"
                :prependIcon="$props.cancelButtonPrependIcon"
                :appendIcon="$props.cancelButtonAppendIcon"
                :variant="$props.cancelButtonVariant"
                :color="$props.cancelButtonColor"
                :label="previousButtonLabel"
                @click="onPrevious()"
              />
              <FSButton
                v-if="$props.showSubmitButton || currentStep < $props.steps"
                type="submit"
                :prependIcon="$props.submitButtonPrependIcon"
                :appendIcon="$props.submitButtonAppendIcon"
                :color="$props.submitButtonColor"
                :variant="nextButtonVariant"
                :disabled="$props.disabled"
                :label="nextButtonLabel"
                :load="$props.load"
              />
            </FSRow>
          </FSRow>
        </FSCol>
      </FSForm>
    </FSWindow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSPagination from "./FSPagination.vue";
import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSForm from "./FSForm.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";
import FSSpan from "./FSSpan.vue";
import FSTabs from "./FSTabs.vue";
import FSTab from "./FSTab.vue";
import FSIcon from "./FSIcon.vue";
import FSWindow from "./FSWindow.vue";

export default defineComponent({
  name: "FSDialogMultiFormBody",
  components: {
    FSPagination,
    FSFadeOut,
    FSButton,
    FSForm,
    FSCol,
    FSRow,
    FSSpan,
    FSTabs,
    FSTab,
    FSIcon,
    FSWindow
  },
  props: {
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    width: {
      type: [Array, String, Number] as PropType<"hug" | "fill" | string[] | number[] | string | number | null>,
      required: false,
      default: "auto"
    },
    variant: {
      type: String as PropType<"standard" | "submit">,
      required: false,
      default: "submit"
    },
    steps: {
      type: Number,
      required: true
    },
    showCancelButton: {
      type: Boolean,
      required: false,
      default: true
    },
    cancelButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    cancelButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    cancelButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    showSubmitButton: {
      type: Boolean,
      required: false,
      default: true
    },
    submitButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    submitButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "full"
    },
    submitButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    mode: {
      type: String as PropType<"pagination" | "tabs" | "none">,
      required: false,
      default: "pagination"
    },
    tabsColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
  },
  emits: ["click:cancelButton", "click:submitButton"],
  setup(props, { emit, slots }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const currentStep = ref(1);
    const valid = ref(false);
    const valids = ref(Array.from({ length: props.steps }, () => false));

    const hasSlot = (name: string) => !!slots[name];

    const tabIconSlots = computed(() => {
      const result:  Record<string, boolean> = {};
      for (let i = 1; i <= props.steps; i++) {
        result[`tab-${i}-icon`] = hasSlot(`tab-${i}-icon`);
      }
      return result;
    });

    const maxHeight = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 16 : 20) + 8 : 0) // Subtitle
        + (props.steps > 1 ? 24 + 4 : 0)                             // Pagination
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100vh - 42px - ${other}px)`;
    });

    const previousButtonLabel = computed(() => {
      return currentStep.value == 1
        ? props.cancelButtonLabel ?? $tr("ui.common.cancel", "Cancel")
        : $tr("ui.common.back", "Back");
    });

    const nextButtonLabel = computed(() => {
      return currentStep.value == props.steps
        ? props.submitButtonLabel ?? $tr("ui.common.validate", "Validate")
        : $tr("ui.common.next", "Next");
    });

    const nextButtonVariant = computed(() => {
      return currentStep.value == props.steps
        ? props.submitButtonVariant ?? "full" : "standard";
    });

    const onPrevious = () => {
      if (currentStep.value > 1) {
        currentStep.value--;
      }
      else {
        emit("click:cancelButton");
      }
    };

    const onSubmit = () => {
      if (valid.value) {
        switch (currentStep.value) {
          case props.steps:
            emit("click:submitButton");
            break;
          default:
            currentStep.value++;
            break;
        }
      }
    };

    return {
      previousButtonLabel,
      nextButtonVariant,
      nextButtonLabel,
      currentStep,
      ColorEnum,
      maxHeight,
      valids,
      valid,
      tabIconSlots,
      onPrevious,
      onSubmit
    };
  }
});
</script>