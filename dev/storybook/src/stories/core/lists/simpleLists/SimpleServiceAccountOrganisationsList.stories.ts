import type { Meta, StoryObj } from "@storybook/vue3";
import { action } from "@storybook/addon-actions";

import FSSimpleServiceAccountOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/serviceAccountOrganisations/FSSimpleServiceAccountOrganisationsList.vue";
import FSSimpleList from "@dative-gpi/foundation-shared-components/components/lists/FSSimpleList.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

const meta: Meta<typeof FSSimpleServiceAccountOrganisationsList> = {
  title: "Foundation/Core/Lists/Simple Lists/SimpleServiceAccountOrganisationsList",
  component: FSSimpleServiceAccountOrganisationsList,
  tags: ["autodocs"],
  argTypes: {
    ...addSubcomponentsArgTypes([FSSimpleList], FSSimpleServiceAccountOrganisationsList),
    ...addComponentEmits(FSSimpleServiceAccountOrganisationsList)
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSSimpleServiceAccountOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSSimpleServiceAccountOrganisationsList
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
