<template>
  <FSBaseField
    class="fs-color-field"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :disabled="$props.disabled"
    :required="$props.required"
    :label="$props.label"
    :width="$props.width"
    :style="style"
    :modelValue="innerColor"
    v-bind="$attrs"
  >
    <FSCard
      :id="activatorId"
      padding="8px"
      width="100%"
      :class="{ 'fs-color-field-disabled': $props.disabled }"
    >
      <FSRow
        align="center-center"
      >
        <FSIcon
          icon="mdi-circle-half"
          size="20px"
          :color="innerColor"
        />
        <FSText
          font="text-overline"
        >
          {{ innerColor }}
        </FSText>
      </FSRow>
    </FSCard>
  </FSBaseField>
  <FSMenu
    origin="top left"
    min-width="300px"
    :activator="`#${activatorId}`"
    :closeOnContentClick="false"
    :modelValue="menu && !$props.disabled"
    @update:modelValue="menu = $event"
  >
    <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        width="fill"
      >
        <v-color-picker
          v-if="!$props.onlyBaseColors"
          class="fs-color-field-picker"
          mode="hexa"
          :modes="allowOpacity ? ['hexa', 'rgba'] : ['hex', 'rgb']"
          :elevation="0"
          :modelValue="fullColor"
          @update:modelValue="onSubmit"
        />
        <v-color-picker
          v-else
          class="fs-color-field-picker"
          swatches-max-height="400px"
          show-swatches
          hide-sliders
          hide-canvas
          hide-inputs
          :swatches="getBasePaletteColors()"
          :elevation="0"
          :modelValue="fullColor"
          @update:modelValue="onSubmit"
        />
      </FSCol>
    </FSCard>
  </FSMenu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref, type StyleValue, watch } from "vue";

import { getPercentageFromHex, getHexFromPercentage } from "@dative-gpi/foundation-shared-components/utils";
import { useColors, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSBaseField from "./FSBaseField.vue";
import FSCard from "../FSCard.vue";
import FSIcon from "../FSIcon.vue";
import FSText from "../FSText.vue";
import FSMenu from "../FSMenu.vue";
import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSColorField",
  components: {
    FSBaseField,
    FSMenu,
    FSText,
    FSCard,
    FSIcon,
    FSCol,
    FSRow
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
      type: String as PropType<string | null>,
      required: false,
      default: "#000000"
    },
    opacityValue: {
      type: Number,
      required: false,
      default: 1
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
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    allowOpacity: {
      type: Boolean,
      required: false,
      default: true
    },
    onlyBaseColors: {
      type: Boolean,
      required: false,
      default: false
    },
    width: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null>,
      required: false,
      default: "fill"
    }
  },
  emits: ["update", "update:modelValue", "update:opacity"],
  setup(props, { emit }) {
    const { getColors, getBasePaletteColors } = useColors();
    const { slots } = useSlots();
    const activatorId = `activator-${Math.random().toString(36).substring(7)}`;

    delete slots.description;

    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const menu = ref(false);

    const innerColor = ref("#000000");
    const innerOpacity = ref("00");
    const fullColor = ref("#00000000");

    const style = computed((): StyleValue => {
      if (props.disabled) {
        return {
          "--fs-color-field-cursor"             : "default",
          "--fs-color-field-border-color"       : lights.base,
          "--fs-color-field-color"              : lights.dark,
          "--fs-color-field-colorvalue"         : fullColor.value,
        };
      }
      return {
        "--fs-color-field-cursor"             : "pointer",
        "--fs-color-field-border-color"       : lights.dark,
        "--fs-color-field-color"              : darks.base,
        "--fs-color-field-colorvalue"         : fullColor.value,
      };
    });

    const onSubmit = (value: string) => {
      innerColor.value = value.substring(0, 7);
      innerOpacity.value = value.length === 9 ? value.substring(7, 9) : "FF";
      fullColor.value = innerColor.value + innerOpacity.value;
      emit("update:modelValue", innerColor.value);
      emit("update:opacity", getPercentageFromHex(innerOpacity.value));
      emit("update", { modelValue: innerColor.value, opacity: getPercentageFromHex(innerOpacity.value) });
    };

    const reset = (): void => {
      if (props.modelValue) {
        innerColor.value = getColors(props.modelValue)['base'];
        innerOpacity.value = getHexFromPercentage(props.opacityValue);
        fullColor.value = innerColor.value + innerOpacity.value;
      }
      else {
        innerColor.value = "#000000";
        innerOpacity.value = "00";
        fullColor.value = "#00000000";
      }
    };

    watch(() => props.modelValue, () => {
      reset();
    }, { immediate: true });

    return {
      getPercentageFromHex,
      getBasePaletteColors,
      innerOpacity,
      activatorId,
      innerColor,
      fullColor,
      ColorEnum,
      onSubmit,
      style,
      menu
    };
  }
});
</script>