<template>
  <FSCol
    gap="24px"
  >
    <FSCol>
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
        @update:tab="(val) => goToStep(val + 1)"
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
    </FSCol>
    <FSCol
      height="fill"
      style="min-height: 0;"
    >
      <FSWindow
        width="100%"
        height="100%"
        :modelValue="currentStep - 1"
      >
        <FSForm
          v-for="(step, index) in $props.steps"
          :variant="$props.variant"
          :key="index"
          :ref="(el) => setFormRef(el, index)"
          @submit="onSubmit"
          height="100%"
        >
          <FSFadeOut
            :maxHeight="$props.maxHeight"
          >
            <slot
              :name="`step-${step}`"
            />
          </FSFadeOut>
        </FSForm>
      </FSWindow>
    </FSCol>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { type ColorBase, ColorEnum, type DialogMultiFormMode, DialogMultiFormModes, type DialogMultiFormVariant, DialogMultiFormVariants } from "@dative-gpi/foundation-shared-components/models";

import FSPagination from "./FSPagination.vue";
import FSFadeOut from "./FSFadeOut.vue";
import FSWindow from "./FSWindow.vue";
import FSForm from "./FSForm.vue";
import FSTabs from "./FSTabs.vue";
import FSIcon from "./FSIcon.vue";
import FSSpan from "./FSSpan.vue";
import FSTab from "./FSTab.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSMultiForm",
  components: {
    FSPagination,
    FSFadeOut,
    FSWindow,
    FSForm,
    FSTabs,
    FSIcon,
    FSSpan,
    FSTab,
    FSCol,
    FSRow
  },
  props: {
    step: {
      type: Number,
      required: false,
      default: 1
    },
    steps: {
      type: Number,
      required: true
    },
    variant: {
      type: String as PropType<DialogMultiFormVariant>,
      required: false,
      default: DialogMultiFormVariants.Submit
    },
    mode: {
      type: String as PropType<DialogMultiFormMode>,
      required: false,
      default: DialogMultiFormModes.Pagination
    },
    tabsColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    maxHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:step", "submit", "cancel"],
  setup(props, { emit, expose, slots }) {
    const currentStep = ref(props.step);

    const formRefs: (InstanceType<typeof FSForm> | null)[] = [];

    const tabIconSlots = computed(() => {
      const result: Record<string, boolean> = {};
      for (let i = 1; i <= props.steps; i++) {
        result[`tab-${i}-icon`] = !!slots[`tab-${i}-icon`];
      }
      return result;
    });

    const setFormRef = (el: any, index: number) => {
      formRefs[index] = el;
    };

    const goToStep = (step: number) => {
      if (step < 1 || step > props.steps || step === currentStep.value) {
        return;
      }
      currentStep.value = step;
      emit("update:step", step);
    };

    const onSubmit = (valid: boolean) => {
      if (!valid || props.disabled) {
        return;
      }
      if (currentStep.value < props.steps) {
        goToStep(currentStep.value + 1);
      }
      else {
        emit("submit");
      }
    };

    // Validates the current step, then goes to the next one or emits "submit" on the last step
    const submit = async () => {
      onSubmit(await validate());
    };

    // Goes back to the previous step, or emits "cancel" on the first step
    const previous = () => {
      if (currentStep.value > 1) {
        goToStep(currentStep.value - 1);
      }
      else {
        emit("cancel");
      }
    };

    const validate = async (): Promise<boolean> => {
      const form = formRefs[currentStep.value - 1];
      if (!form) {
        return false;
      }
      const result = await form.validate();
      return !!(result?.valid ?? true);
    };

    const reset = () => {
      formRefs.forEach(form => form?.reset());
      goToStep(1);
    };

    const resetValidation = () => {
      formRefs.forEach(form => form?.resetValidation());
    };

    watch(() => props.step, (step) => {
      currentStep.value = step;
    });

    expose({
      currentStep,
      goToStep,
      previous,
      submit,
      validate,
      reset,
      resetValidation
    });

    return {
      tabIconSlots,
      currentStep,
      setFormRef,
      goToStep,
      onSubmit
    };
  }
});
</script>
