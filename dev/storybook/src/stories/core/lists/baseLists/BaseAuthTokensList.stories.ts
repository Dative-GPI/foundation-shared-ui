import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseAuthTokensList from "@dative-gpi/foundation-core-components/components/lists/authTokens/FSBaseAuthTokensList.vue";

const meta: Meta<typeof FSBaseAuthTokensList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseAuthTokensList',
  component: FSBaseAuthTokensList,
  subcomponents: { FSDataTable },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseAuthTokensList),
    ...addComponentEmits(FSBaseAuthTokensList),
    tableCode: {
      control: 'select',
      options: ['authTokens1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseAuthTokensList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseAuthTokensList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'authTokens1',
    'onClick:row': null
  },
};
