import type { Meta, StoryObj } from "@storybook/vue3";

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseDevicesExplorer from "@dative-gpi/foundation-core-components/components/explorers/FSBaseDevicesExplorer.vue";

const meta: Meta<typeof FSBaseDevicesExplorer> = {
  title: "Foundation/Core/Explorers/BaseDevicesExplorer",
  component: FSBaseDevicesExplorer,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseDevicesExplorer),
    ...addComponentEmits(FSBaseDevicesExplorer),
    tableCode: {
      control: "select",
      options: ["devicesExplorer1"],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    tableCode: "devicesExplorer1"
  },
  render: (args) => ({
    components: { FSBaseDevicesExplorer },
    setup() {
      return { args };
    },
    template: `
      <FSBaseDevicesExplorer
        v-model:modelValue="args.modelValue"
      />
    `,
  }),
};
