<template>
  <FSAutocompleteField
    itemTitle="label"
    :label="$props.label ?? $tr('ui.common.user', 'User')"
    :toggleSet="!$props.toggleSetDisabled && toggleSet"
    :multiple="$props.multiple"
    :placeholder="placeholder"
    :items="serviceAccountOrganisations"
    :loading="loading"
    :modelValue="$props.modelValue"
    @update:modelValue="onUpdate"
    v-bind="$attrs"
  >
    <template
      #item-prepend="{ item }"
    >
      <FSImage
        v-if="item.imageId"
        height="26px"
        width="26px"
        :imageId="item.imageId"
        :thumbnail="true"
      />
    </template>
    <template
      #toggle-set-item="props"
    >
      <FSButton
        :padding="props.item.imageId ? ['6px 16px', '4px 12px'] : undefined"
        :variant="props.getVariant(props.item)"
        :color="props.getColor(props.item)"
        :class="props.getClass(props.item)"
        :label="props.item.label"
        @click="props.toggle(props.item)"
      >
        <template
          v-if="props.item.imageId"
          #prepend
        >
          <FSImage
            height="26px"
            width="26px"
            :imageId="props.item.imageId"
            :thumbnail="true"
          />
        </template>
      </FSButton>
    </template>
  </FSAutocompleteField>
</template>
  
  <script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
  
import type { ServiceAccountOrganisationFilters, ServiceAccountOrganisationInfos} from "@dative-gpi/foundation-core-domain/models";
import { useServiceAccountOrganisations } from "@dative-gpi/foundation-core-services/composables";

import { useAutocomplete } from "@dative-gpi/foundation-shared-components/composables";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui";

import FSAutocompleteField from "@dative-gpi/foundation-shared-components/components/fields/FSAutocompleteField.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSImage from "@dative-gpi/foundation-shared-components/components/FSImage.vue";

export default defineComponent({
  name: "FSAutocompleteServiceAccountOrganisation",
  components: {
    FSAutocompleteField,
    FSButton,
    FSImage
  },
  props: {
    serviceAccountOrganisationFilters: {
      type: Object as PropType<ServiceAccountOrganisationFilters>,
      required: false,
      default: null
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
    toggleSetDisabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const { getMany: getServiceAccountOrganisations, fetching: fetchingServiceAccountOrganisations, entities: serviceAccountOrganisations } = useServiceAccountOrganisations();
    const { $tr } = useTranslationsProvider();
  
    const loading = computed((): boolean => {
      return init.value && fetchingServiceAccountOrganisations.value;
    });
  
    const placeholder = computed((): string | null => {
      if (props.multiple && props.modelValue) {
        return $tr("autocomplete.service-account.placeholder", "{0} service account(s) selected", props.modelValue.length);
      }
      return null;
    });
      
    const fetch = (search: string | null) => {
      return getServiceAccountOrganisations({ ...props.serviceAccountOrganisationFilters, search: search ?? undefined });
    };
  
    const { toggleSet, init, onUpdate } = useAutocomplete(
      serviceAccountOrganisations,
      [() => props.serviceAccountOrganisationFilters],
      emit,
      fetch,
      null,
      (item: ServiceAccountOrganisationInfos) => item.id,
      (item: ServiceAccountOrganisationInfos) => item.label
    );
  
    return {
      serviceAccountOrganisations,
      placeholder,
      toggleSet,
      loading,
      onUpdate
    };
  }
});
  </script>