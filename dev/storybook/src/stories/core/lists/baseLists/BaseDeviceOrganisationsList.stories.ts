import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseDeviceOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/deviceOrganisations/FSBaseDeviceOrganisationsList.vue";

const meta: Meta<typeof FSBaseDeviceOrganisationsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseDeviceOrganisationsList',
  component: FSBaseDeviceOrganisationsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDeviceOrganisationsList),
    ...addComponentEmits(FSBaseDeviceOrganisationsList),
    tableCode: {
      control: 'select',
      options: ['devices1', 'devices2'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    tableCode: 'devices1'
  },
  render: (args) => ({
    components: { FSBaseDeviceOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDeviceOrganisationsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};