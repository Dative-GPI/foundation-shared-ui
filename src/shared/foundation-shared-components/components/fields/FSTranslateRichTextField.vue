<template>
  <FSCol
    v-if="$props.translationsExpanded"
  >
    <FSCol
      gap="16px"
    >
      <FSRichTextField
        :disabled="true"
        :label="$tr('ui.common.default-value', 'Default value')"
        :modelValue="$props.modelValue"
        v-bind="$attrs"
      />
      <FSRichTextField
        v-for="(language, index) in languages"
        :disabled="$props.disabled"
        :key="index"
        :modelValue="getTranslation(language.code)"
        @update:modelValue="setTranslation(language.code, $event)"
        v-bind="$attrs"
      >
        <template
          #label
        >
          <FSRow
            :wrap="false"
            align="center-left"
          >
            <FSSpan
              class="fs-translate-field-label"
              font="text-overline"
            >
              {{ $tr('translate-rich-text-field.translate-in', 'Translate in {0}', language.label) }}
            </FSSpan>
            <FSIcon>
              {{ language.icon }}
            </FSIcon>
          </FSRow>
        </template>
      </FSRichTextField>
    </FSCol>
    <FSRow
      :wrap="false"
    >
      <FSButtonCancelLabel
        prependIcon="mdi-cancel"
        width="100%"
        @click="onCancelTranslations"
      />
      <FSButton
        v-if="!$props.disabled"
        prependIcon="mdi-check"
        color="primary"
        width="100%"
        :label="$tr('translate-rich-text-field.validate', 'Validate translations')"
        @click="onSubmitTranslations"
      />
    </FSRow>
  </FSCol>
  <FSRichTextField
    v-else
    :disabled="$props.disabled"
    :modelValue="$props.modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    v-bind="$attrs"
  >
    <template
      #append-inner
    >
      <FSButton
        prependIcon="mdi-translate"
        color="primary"
        width="100%"
        :label="$tr('translate-rich-text-field.manage-translations', 'Manage translations')"
        @click="() => $emit('update:translationsExpanded', true)"
      />
    </template>
  </FSRichTextField>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from 'vue';

import { useAppLanguages } from "@dative-gpi/foundation-shared-services/composables";

import { emptyLexicalState } from '../../utils';

import FSButtonCancelLabel from '../buttons/FSButtonCancelLabel.vue';
import FSRichTextField from './FSRichTextField.vue';
import FSButton from '../FSButton.vue';
import FSIcon from '../FSIcon.vue';
import FSSpan from '../FSSpan.vue';
import FSCol from '../FSCol.vue';
import FSRow from '../FSRow.vue';

export default defineComponent({
  name: 'FSTranslateRichTextField',
  components: {
    FSButtonCancelLabel,
    FSRichTextField,
    FSButton,
    FSIcon,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    translationsExpanded: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    modelValue: {
      type: [Object, String] as PropType<{ [key: string]: any } | string | null>,
      required: false,
      default: null
    },
    translations: {
      type: Array as PropType<{
        languageCode: string;
        [key: string]: string | object | null;
      }[]>,
      required: false,
      default: () => []
    },
    property: {
      type: String as PropType<string>,
      required: false,
      default: "label"
    }
  },
  emits: ['update:translationsExpanded', 'update:modelValue', 'update:translations'],
  setup(props, { emit }) {
    const { languages } = useAppLanguages();

    const innerTranslations = ref<{
      languageCode: string;
      [key: string]: string | object | null;
    }[]>([]);

    const getTranslation = (languageCode: string): string | object => {
      if (!innerTranslations.value) {
        return emptyLexicalState;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (!translation || !translation[props.property]) {
        return emptyLexicalState;
      }
      return translation[props.property]!;
    };

    const setTranslation = (languageCode: string, value: string): void => {
      if (!innerTranslations.value) {
        innerTranslations.value = [{
          languageCode,
          [props.property]: value
        }]
        return;
      }
      const translation = innerTranslations.value.find((t) => t.languageCode === languageCode);
      if (translation) {
        translation[props.property] = value;
      }
      else {
        innerTranslations.value.push({
          languageCode,
          [props.property]: value
        });
      }
    };

    const onSubmitTranslations = (): void => {
      if (!props.disabled) {
        emit("update:translations", innerTranslations.value);
      }
      emit('update:translationsExpanded', false);
    };

    const onCancelTranslations  = (): void => {
      emit('update:translationsExpanded', false);
    };

    watch(() => props.translations, (newTranslations) => {
      innerTranslations.value = newTranslations.map((translation) => {
        if(typeof translation[props.property] === 'string'){
          return translation;
        }
        return {
          ...translation,
          [props.property]: JSON.stringify(translation[props.property])
        }
      });
    }, { immediate: true, deep: true });

    return {
      languages,
      onCancelTranslations,
      onSubmitTranslations,
      getTranslation,
      setTranslation
    };
  }
});
</script>