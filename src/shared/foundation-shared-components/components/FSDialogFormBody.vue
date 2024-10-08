<template>
  <template
    v-if="!$props.validation"
  >
    <FSForm
      ref="formRef"
      :variant="$props.variant"
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
            name="body"
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
              :prependIcon="$props.cancelButtonPrependIcon"
              :appendIcon="$props.cancelButtonAppendIcon"
              :variant="$props.cancelButtonVariant"
              :color="$props.cancelButtonColor"
              :label="cancelLabel"
              @click="() => $emit('click:cancelButton', false)"
            />
            <FSButton
              type="submit"
              :prependIcon="$props.submitButtonPrependIcon"
              :appendIcon="$props.submitButtonAppendIcon"
              :variant="$props.submitButtonVariant"
              :color="$props.submitButtonColor"
              :editable="$props.editable"
              :label="submitLabel"
              :load="$props.load"
            />
          </FSRow>
        </FSRow>
      </FSCol>
    </FSForm>
  </template>
  <template
    v-else
  >
    <FSCol
      gap="24px"
    >
      <FSFadeOut
        :maxHeight="maxHeight"
      >
        <slot
          name="validation"
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
            :prependIcon="$props.validateButtonPrependIcon"
            :appendIcon="$props.validateButtonAppendIcon"
            :variant="$props.validateButtonVariant"
            :color="$props.validateButtonColor"
            :label="validateLabel"
            @click="onValidate"
          />
        </FSRow>
      </FSRow>
    </FSCol>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useBreakpoints } from "@dative-gpi/foundation-shared-components/composables";

import FSFadeOut from "./FSFadeOut.vue";
import FSButton from "./FSButton.vue";
import FSForm from "./FSForm.vue";
import FSRow from "./FSRow.vue";

export default defineComponent({
  name: "FSDialogFormBody",
  components: {
    FSFadeOut,
    FSButton,
    FSForm,
    FSRow
  },
  props: {
    variant: {
      type: String as PropType<"standard" | "submit">,
      required: false,
      default: "submit"
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false
    },
    subtitle: {
      type: String as PropType<string | null>,
      required: false,
      default: null
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
    validateButtonPrependIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonLabel: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonAppendIcon: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    validateButtonVariant: {
      type: String as PropType<"standard" | "full" | "icon">,
      required: false,
      default: "standard"
    },
    validateButtonColor: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Light
    },
    validation: {
      type: Boolean,
      required: false,
      default: false
    },
    load: {
      type: Boolean,
      required: false,
      default: false
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  emits: ["click:cancelButton", "click:submitButton", "click:validateButton"],
  setup(props, { emit }) {
    const { isMobileSized } = useBreakpoints();
    const { $tr } = useTranslationsProvider();

    const formRef = ref<HTMLElement | null>(null);
    const valid = ref(false);

    const maxHeight = computed(() => {
      const other = 24 + 24                                          // Paddings
        + (isMobileSized.value ? 24 : 32) + 24                       // Title
        + (props.subtitle ? (isMobileSized.value ? 14 : 16) + 8 : 0) // Subtitle
        + (isMobileSized.value ? 36 : 40) + 24;                      // Footer
      return `calc(100vh - 40px - ${other}px)`;
    });

    const cancelLabel = computed(() => {
      return props.cancelButtonLabel ?? $tr("ui.button.cancel", "Cancel");
    });

    const submitLabel = computed(() => {
      return props.submitButtonLabel ??  $tr("ui.button.submit", "Submit");
    });

    const validateLabel = computed(() => {
      return props.validateButtonLabel ??  $tr("ui.button.validate", "Done");
    });

    const onSubmit = () => {
      if (valid.value) {
        emit("click:submitButton");
      }
    };

    const onValidate = () => {
      emit("click:validateButton");
    };

    return {
      validateLabel,
      cancelLabel,
      submitLabel,
      ColorEnum,
      maxHeight,
      formRef,
      valid,
      onValidate,
      onSubmit
    };
  }
});
</script>