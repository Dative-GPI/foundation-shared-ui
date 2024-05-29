<template>
  <FSBaseField
    :label="$props.label"
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :editable="$props.editable"
    :messages="messages"
  >
    <FSLoader
      v-if="$props.loading"
      width="100%"
      :height="['40px', '36px']"
    />
    <template
      v-else
    >
      <FSToggleSet
        v-if="$props.toggleSet"
        variant="slide"
        :values="$props.items"
        :multiple="$props.multiple"
        :rules="$props.rules"
        :modelValue="$props.modelValue"
        @update:modelValue="onUpdate"
        v-bind="$attrs"
      >
        <template
          v-for="(_, name) in toggleSetSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="`toggle-set-${name}`"
            v-bind="slotData"
          />
        </template>
      </FSToggleSet>
      <v-autocomplete
        v-else
        class="fs-autocomplete-field"
        variant="outlined"
        :menuIcon="null"
        :style="style"
        :listProps="listStyle"
        :class="classes"
        :hideDetails="true"
        :items="$props.items"
        :autoSelectFirst="true"
        :multiple="$props.multiple"
        :itemTitle="$props.itemTitle"
        :itemValue="$props.itemValue"
        :readonly="!$props.editable"
        :loading="$props.loading"
        :clearable="$props.clearable && $props.editable && !!$props.modelValue"
        :returnObject="$props.returnObject"
        :rules="$props.rules"
        :validateOn="validateOn"
        :modelValue="$props.modelValue"
        @update:modelValue="onUpdate"
        @blur="blurred = true"
        v-model:search="innerSearch"
        v-bind="$attrs"
      >
        <template
          #item="{ props, item }"
        >
          <v-list-item
            v-bind="{ ...props, title: '' }"
          >
            <FSRow
              align="center-left"
              :wrap="false"
            >
              <FSCheckbox
                v-if="$props.multiple"
                :modelValue="$props.modelValue?.includes(item.raw[$props.itemValue])"
                @click="props.onClick"
              />
              <FSSpan>
                {{ item.raw[$props.itemTitle] }}
              </FSSpan>
            </FSRow>
          </v-list-item>
        </template>
        <template
          v-for="(_, name) in autocompleteSlots"
          v-slot:[name]="slotData"
        >
          <slot
            :name="`autocomplete-${name}`"
            v-bind="slotData"
          />
        </template>
        <template
          #clear
        >
          <slot
            name="clear"
          >
            <FSButton
              v-if="$props.clearable && $props.editable && !!$props.modelValue"
              icon="mdi-close"
              variant="icon"
              :color="ColorEnum.Dark"
              @click="$emit('update:modelValue', null)"
            />
          </slot>
        </template>
        <template
          #append-inner
        >
          <slot
            name="append-inner"
          >
            <FSButton
              icon="mdi-chevron-down"
              variant="icon"
              :editable="$props.editable"
              :color="ColorEnum.Dark"
            />
          </slot>
        </template>
        <template
          #no-data
        >
          <FSRow
            padding="17px"
          >
            <FSSpan>
              {{ $tr("ui.common.no-data", "No data") }}
            </FSSpan>
          </FSRow>
        </template>
      </v-autocomplete>
    </template>
  </FSBaseField>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";

import { useColors, useRules, useSlots } from "@dative-gpi/foundation-shared-components/composables";
import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";

import FSToggleSet from "../FSToggleSet.vue";
import FSBaseField from "./FSBaseField.vue";
import FSCheckbox from "../FSCheckbox.vue";
import FSButton from "../FSButton.vue";
import FSLoader from "../FSLoader.vue";
import FSSpan from "../FSSpan.vue";
import FSRow from "../FSRow.vue";

export default defineComponent({
  name: "FSAutocompleteField",
  components: {
    FSToggleSet,
    FSBaseField,
    FSCheckbox,
    FSButton,
    FSLoader,
    FSSpan,
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
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    modelValue: {
      type: [Array, String] as PropType<string[] | string | null>,
      required: false,
      default: null
    },
    multiple: {
      type: Boolean,
      required: false,
      default: false
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    returnObject: {
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
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    clearable: {
      type: Boolean,
      required: false,
      default: true
    },
    editable: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    toggleSet: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:modelValue", "update:search"],
  setup: (props, { emit }) => {
    const { validateOn, blurred, getMessages } = useRules();
    const { getColors } = useColors();
    const { slots } = useSlots();

    delete slots.label;
    delete slots.description;

    const backgrounds = getColors(ColorEnum.Background);
    const errors = getColors(ColorEnum.Error);
    const lights = getColors(ColorEnum.Light);
    const darks = getColors(ColorEnum.Dark);

    const innerSearch = ref("");

    const style = computed((): { [key: string]: string | undefined } => {
      if (!props.editable) {
        return {
          "--fs-autocomplete-field-cursor":              "default",
          "--fs-autocomplete-field-border-color":        lights.base,
          "--fs-autocomplete-field-color":               lights.dark,
          "--fs-autocomplete-field-active-border-color": lights.base
        };
      }
      return {
        "--fs-autocomplete-field-cursor":              "text",
        "--fs-autocomplete-field-background-color":    backgrounds.base,
        "--fs-autocomplete-field-border-color":        lights.dark,
        "--fs-autocomplete-field-color":               darks.base,
        "--fs-autocomplete-field-active-border-color": darks.dark,
        "--fs-autocomplete-field-error-color":         errors.base,
        "--fs-autocomplete-field-error-border-color":  errors.base
      };
    });

    const autocompleteSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("autocomplete-")).reduce((acc, key) => {
        acc[key.substring("autocomplete-".length)] = slots[key];
        return acc;
      }, {});
    });

    const toggleSetSlots = computed((): any => {
      return Object.keys(slots).filter(k => k.startsWith("toggle-set-")).reduce((acc, key) => {
        acc[key.substring("toggle-set-".length)] = slots[key];
        return acc;
      }, {});
    });

    const listStyle = computed((): any => {
      return {
        style: style.value
      };
    });

    const classes = computed((): string[] => {
      const classNames = ["fs-autocomplete-field"];
      if (props.multiple) {
        classNames.push("fs-autocomplete-multiple-field");
      }
      return classNames;
    });

    const messages = computed((): string[] => props.messages ?? getMessages(props.modelValue, props.rules));

    const onUpdate = (value: string[] | string) => {
      emit('update:modelValue', value);
    };

    watch(innerSearch, () => {
      emit("update:search", innerSearch.value);
    });

    return {
      autocompleteSlots,
      toggleSetSlots,
      innerSearch,
      validateOn,
      ColorEnum,
      listStyle,
      messages,
      blurred,
      classes,
      slots,
      style,
      onUpdate
    };
  }
});
</script>