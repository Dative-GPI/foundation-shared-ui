import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from '@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue';
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseAlertsList from "@dative-gpi/foundation-core-components/components/lists/alerts/FSBaseAlertsList.vue";

const meta: Meta<typeof FSBaseAlertsList> = {
  title: 'Foundation/Core/Lists/Base Lists/BaseAlertsList',
  component: FSBaseAlertsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseAlertsList),
    ...addComponentEmits(FSBaseAlertsList),
    tableCode: {
      control: 'select',
      options: ['alerts1'],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSBaseAlertsList },
    setup() {
      return { args };
    },
    template: `
      <FSBaseAlertsList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    tableCode: 'alerts1',
    notAcknowledged: false,
    hidePending: false,
    modelValue: [],
    allowAcknowledge: true,
  },
};
