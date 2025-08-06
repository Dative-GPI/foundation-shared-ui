<template>
  <FSCol
    v-if="fetching"
  >
    <FSLoader 
      variant="field"
    />
    <FSLoader 
      variant="field"
    />
  </FSCol>
  <FSCol
    v-if="legalInformation"
  >
    <FSRow
      align="center-left"
      gap="4px"
    >
      <FSCheckbox
        :label="$tr('ui.registration.i-have-read-and-understand', 'I have read and understand the')"
        :rules="[ToggleRules.required()]"
        :modelValue="$props.generalConditions"
        @update:modelValue="$emit('update:generalConditions', $event)"
      />
      <FSButton
        variant="icon"
        :label="$tr('ui.registration.general-conditions-of-use', 'general conditions of use')"
        :color="ColorEnum.Primary"
        @click="downloadFile(legalInformation.generalConditionsId)"
      />
    </FSRow>
    <FSRow
      align="center-left"
      gap="4px"
    >
      <FSCheckbox
        :label="$tr('ui.registration.i-have-read-and-understand', 'I have read and understand the')"
        :rules="[ToggleRules.required()]"
        :modelValue="$props.privacyPolicy"
        @update:modelValue="$emit('update:privacyPolicy', $event)"
      />
      <FSButton
        variant="icon"
        :label="$tr('ui.registration.privacy-policy', 'privacy policy')"
        :color="ColorEnum.Primary"
        @click="downloadFile(legalInformation.privacyPolicyId)"
      />
    </FSRow>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSCheckbox from "@dative-gpi/foundation-shared-components/components/FSCheckbox.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSLoader from "@dative-gpi/foundation-shared-components/components/FSLoader.vue";

import { useCurrentLegalInformation, useFiles } from "@dative-gpi/foundation-shared-services/composables";
import { ColorEnum, TextRules, ToggleRules } from "@dative-gpi/foundation-shared-components/models";

export default defineComponent({
  name: "FSPoliciesValidationField",
  components: {
    FSCol,
    FSRow,
    FSCheckbox,
    FSButton,
    FSLoader
  },
  props: {
    generalConditions: {
      type: Boolean,
      required: false
    },
    privacyPolicy: {
      type: Boolean,
      required: false
    }
  },
  emits: ["update:generalConditions", "update:privacyPolicy"],
  setup() {
    const { fetch: getLegalInformation, entity: legalInformation, fetching } = useCurrentLegalInformation();
    const { downloadFile } = useFiles();

    onMounted(() => {
      getLegalInformation();
    });

    return {
      legalInformation,
      ToggleRules,
      ColorEnum,
      TextRules,
      fetching,
      downloadFile,
    };
  }
});
</script>