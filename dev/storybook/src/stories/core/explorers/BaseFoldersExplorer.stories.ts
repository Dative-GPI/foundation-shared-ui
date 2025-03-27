import type { Meta, StoryObj } from "@storybook/vue3";

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSDataTable from "@dative-gpi/foundation-core-components/components/lists/FSDataTable.vue";
import FSDataTableUI from '@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue';
import FSBaseFoldersExplorer from "@dative-gpi/foundation-core-components/components/explorers/FSBaseFoldersExplorer.vue";

const meta: Meta<typeof FSBaseFoldersExplorer> = {
  title: "Foundation/Core/Explorers/BaseFoldersExplorer",
  component: FSBaseFoldersExplorer,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSDataTable, FSDataTableUI], FSBaseFoldersExplorer),
    ...addComponentEmits(FSBaseFoldersExplorer),
    tableCode: {
      control: "select",
      options: ["foldersExplorer1"],
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    tableCode: "foldersExplorer1"
  },
  render: (args) => ({
    components: { FSBaseFoldersExplorer },
    setup() {
      return { args };
    },
    template: `
      <FSBaseFoldersExplorer
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
};
