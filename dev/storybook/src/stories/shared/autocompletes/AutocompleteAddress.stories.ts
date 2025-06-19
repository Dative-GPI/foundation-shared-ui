import type { Meta, StoryObj } from '@storybook/vue3';

import FSAutocompleteAddress from "@dative-gpi/foundation-shared-components/components/autocompletes/FSAutoCompleteAddress.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import { Address } from '@dative-gpi/foundation-shared-domain/models';
import { useAddress } from '@dative-gpi/foundation-shared-components/composables';
import { ref } from 'vue';

const meta = {
  title: 'Foundation/Shared/Autocompletes/AutocompleteAddress',
  component: FSAutocompleteAddress,
  tags: ['autodocs'],
  argTypes: {
    "onUpdate:modelValue": { action: "update:modelValue" }
  },
} satisfies Meta<typeof FSAutocompleteAddress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: new Address({
      placeId: "ChIJg7vu-43P9EcRRNrbyDxFMDY",
      placeLabel: 'Dative, Rue de Norvège, Colombier-Saugnieu, France',
      formattedAddress: ' 100 Rue de Norvège, 69125 Colombier-Saugnieu',
      locality: 'Colombier-Saugnieu',
      country: 'France',
      latitude: 45.711741,
      longitude: 5.071675
    })
  },
  render: (args, { argTypes }) => ({
    components: { FSAutocompleteAddress, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`
  })
}

export const VariationEmpty: Story = {
  args: {
    modelValue: null
  },
  render: (args) => ({
    components: { FSAutocompleteAddress, FSCol },
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
      />
    </FSCol>`
  })
}

export const ReverseSearch: Story = {
  args: {
    modelValue: null
  },
  render: (args) => ({
    components: { FSAutocompleteAddress, FSCol },
    setup() {
      const { reverseSearch } = useAddress();

      const reverseSearchResult = ref<Address | null>(null);

      const onUpdateModelValue = async (value: Address | null) => {
        if (value) {
          const address = await reverseSearch(value.latitude, value.longitude);
          reverseSearchResult.value = address;
        }
      };

      return { args, reverseSearchResult, onUpdateModelValue };
    },
    template: `
    <FSCol>
      <FSAutocompleteAddress
        v-model="args.modelValue"
        @update:modelValue="onUpdateModelValue"
      />
      <div v-if="reverseSearchResult">
        <p>Reverse Search Result:</p>
        <pre>{{ reverseSearchResult }}</pre>
      </div>
    </FSCol>`
  })
}