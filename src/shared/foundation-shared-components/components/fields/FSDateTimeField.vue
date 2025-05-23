<template>
  <FSCol>
    <template
      v-if="isExtraSmall"
    >
      <FSTextField
        class="fs-date-field"
        :label="$props.label"
        :description="$props.description"
        :color="$props.color"
        :hideHeader="$props.hideHeader"
        :required="$props.required"
        :disabled="$props.disabled"
        :readonly="true"
        :rules="$props.rules"
        :messages="messages"
        :validateOn="validateOn"
        :validationValue="$props.modelValue"
        :modelValue="epochToLongTimeFormat($props.modelValue)"
        @update:modelValue="onClear"
        @click="openMobileOverlay"
      >
        <template
          #prepend-inner
        >
          <slot
            name="prepend-inner"
          >
            <FSButton
              variant="icon"
              icon="mdi-calendar"
              :disabled="$props.disabled"
              :color="ColorEnum.Dark"
              @click="openMobileOverlay"
            />
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
      </FSTextField>
      <FSDialogMenu
        v-model="dialog"
      >
        <template
          #body
        >
          <FSWindow
            :modelValue="tabs"
          >
            <FSCol
              width="hug"
              :value="0"
            >
              <FSCalendar
                :color="$props.color"
                v-model="innerDate"
              />
              <FSButton
                width="100%"
                :color="$props.color"
                :label="$tr('ui.common.validate', 'Validate')"
                @click="tabs++"
              />
            </FSCol>
            <FSCol
              width="hug"
              :value="1"
            >
              <FSClock
                :color="$props.color"
                v-model="innerTime"
              />
              <FSButton
                width="100%"
                :color="$props.color"
                :label="$tr('ui.common.validate', 'Validate')"
                @click="onSubmit"
              />
            </FSCol>
          </FSWindow>
        </template>
      </FSDialogMenu>
    </template>
    <template
      v-else
    >
      <FSMenu
        min-width="300px"
        :closeOnContentClick="false"
        :modelValue="menu && !$props.disabled"
        @update:modelValue="menu = $event"
      >
        <template
          #activator="{ props }"
        >
          <FSTextField
            class="fs-date-field"
            :label="$props.label"
            :description="$props.description"
            :color="$props.color"
            :hideHeader="$props.hideHeader"
            :required="$props.required"
            :disabled="$props.disabled"
            :readonly="true"
            :rules="$props.rules"
            :messages="messages"
            :validateOn="validateOn"
            :validationValue="$props.modelValue"
            :modelValue="epochToLongTimeFormat($props.modelValue)"
            @update:modelValue="onClear"
            v-bind="props"
          >
            <template
              #prepend-inner
            >
              <slot
                name="prepend-inner"
              >
                <FSButton
                  variant="icon"
                  icon="mdi-calendar"
                  :disabled="$props.disabled"
                  :color="ColorEnum.Dark"
                />
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
          </FSTextField>
        </template>
        <FSWindow
          :modelValue="tabs"
        >
          <FSCard
            padding="8px"
            :elevation="true"
            :border="false"
            :value="0"
          >
            <FSCol
              width="fill"
            >
              <FSCalendar
                :color="$props.color"
                v-model="innerDate"
              />
              <FSButton
                width="100%"
                :color="$props.color"
                :label="$tr('ui.common.validate', 'Validate')"
                @click="tabs++"
              />
            </FSCol>
          </FSCard>
          <FSCard
            padding="8px"
            :elevation="true"
            :border="false"
            :value="1"
          >
            <FSCol
              width="hug"
            >
              <FSClock
                :color="$props.color"
                v-model="innerTime"
              />
              <FSButton
                width="100%"
                :color="$props.color"
                :label="$tr('ui.common.validate', 'Validate')"
                @click="onSubmit"
              />
            </FSCol>
          </FSCard>
        </FSWindow>
      </FSMenu>
    </template>
  </FSCol>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, watch } from "vue";

import { useBreakpoints, useRules } from "@dative-gpi/foundation-shared-components/composables";
import { type ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useAppTimeZone, useDateFormat } from "@dative-gpi/foundation-shared-services/composables";

import FSDialogMenu from "../FSDialogMenu.vue";
import FSTextField from "./FSTextField.vue";
import FSCalendar from "../FSCalendar.vue";
import FSWindow from "../FSWindow.vue";
import FSButton from "../FSButton.vue";
import FSClock from "../FSClock.vue";
import FSCard from "../FSCard.vue";
import FSMenu from '../FSMenu.vue';
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSDateTimeField",
  components: {
    FSDialogMenu,
    FSTextField,
    FSCalendar,
    FSWindow,
    FSButton,
    FSClock,
    FSCard,
    FSMenu,
    FSCol
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    modelValue: {
      type: Number as PropType<number | null>,
      required: false,
      default: null
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getUserOffset } = useAppTimeZone();
    const { epochToLongTimeFormat } = useDateFormat();
    const { validateOn, getMessages } = useRules();
    const { isExtraSmall } = useBreakpoints();

    const dialog = ref(false);
    const menu = ref(false);
    const tabs = ref(0);

    const innerDate = ref<number | null>(null);
    const innerTime = ref(0);

    const messages = computed((): string[] => getMessages(props.modelValue, props.rules));

    const openMobileOverlay = () => {
      if (props.disabled) {
        return;
      }
      dialog.value = true;
    };

    const onClear = (): void => {
      emit("update:modelValue", null);
      innerDate.value = null;
      innerTime.value = 0;
    };

    const onSubmit = (): void => {
      emit("update:modelValue", (innerDate.value ?? 0) + innerTime.value);
      dialog.value = false;
      menu.value = false;
    };

    const reset = (): void => {
      if (props.modelValue) {
        // FSClock just gives two numbers without consideration for the time zone
        // We must adjust the time to the user's time zone
        innerTime.value = Math.floor((props.modelValue + getUserOffset(props.modelValue)) % (24 * 60 * 60 * 1000));
        innerDate.value = props.modelValue - innerTime.value;
      }
      else {
        innerDate.value = null;
        innerTime.value = 0;
      }
    };

    watch(() => props.modelValue, () => {
      reset();
    }, { immediate: true });

    watch([menu, dialog], (): void => {
      if (!menu.value && !dialog.value) {
        setTimeout(() => tabs.value = 0, 290);
      }
    });

    return {
      isExtraSmall,
      validateOn,
      ColorEnum,
      innerDate,
      innerTime,
      messages,
      dialog,
      menu,
      tabs,
      epochToLongTimeFormat,
      openMobileOverlay,
      onSubmit,
      onClear
    };
  }
});
</script>