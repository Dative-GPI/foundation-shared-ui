import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import FSSimpleDashboardsList from "@dative-gpi/foundation-core-components/components/lists/dashboards/FSSimpleDashboardsList.vue";
import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSSimpleDashboardsList> = {
  title: "Foundation/Core/Lists/Simple Lists/SimpleDashboardsList",
  component: FSSimpleDashboardsList,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSimpleList], FSSimpleDashboardsList),
    ...addComponentEmits(FSSimpleDashboardsList)
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSimpleDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSSimpleDashboardsList
        v-bind="args"
      />
    `,
  }),
  args: {
    tileProps: (item: any) => ({
      onClick: () => action("clicked item")(item),
    }),
  },
};
