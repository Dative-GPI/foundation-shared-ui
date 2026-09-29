<template>
  <FSCol
    gap="24px"
  >
    <FSMultiForm
      ref="multiFormRef"
      :steps="$props.steps"
      :variant="$props.variant"
      :mode="$props.mode"
      :tabsColor="$props.tabsColor"
      :maxHeight="maxHeight"
      :disabled="$props.disabled || $props.load"
      @submit="$emit('click:submitButton')"
      @cancel="$emit('click:cancelButton')"
      v-model:step="currentStep"
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
          @click="onPrevious"
        />
        <FSButton
          v-if="$props.showSubmitButton || currentStep < $props.steps"
          :prependIcon="$props.submitButtonPrependIcon"
          :appendIcon="$props.submitButtonAppendIcon"
          :color="$props.submitButtonColor"
          :variant="nextButtonVariant"
          :disabled="$props.disabled"
          :label="nextButtonLabel"
          :load="$props.load"
          @click="onSubmit"
        />
      </FSRow>
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum, type DialogMultiFormMode, DialogMultiFormModes, type DialogMultiFormVariant, DialogMultiFormVariants } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSMultiForm from "./FSMultiForm.vue";
import FSButton from "./FSButton.vue";
import FSCol from "./FSCol.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogMultiFormBody",
  components: {
    FSMultiForm,
    FSButton,
    FSCol,
    FSRow
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
      type: String as PropType<DialogMultiFormVariant>,
      required: false,
      default: DialogMultiFormVariants.Submit
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
      type: String as PropType<DialogMultiFormMode>,
      required: false,
      default: DialogMultiFormModes.Pagination
    },
    tabsColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
  },
  emits: ["click:cancelButton", "click:submitButton"],
  setup(props) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const multiFormRef = ref<InstanceType<typeof FSMultiForm> | null>(null);
    const currentStep = ref(1);

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
      multiFormRef.value?.previous();
    };

    const onSubmit = () => {
      multiFormRef.value?.submit();
    };

    return {
      previousButtonLabel,
      nextButtonVariant,
      nextButtonLabel,
      multiFormRef,
      currentStep,
      maxHeight,
      onPrevious,
      onSubmit
    };
  }
});
</script>