import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileUserOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/userOrganisations/FSTileUserOrganisationsList.vue";

const meta: Meta<typeof FSTileUserOrganisationsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileUserOrganisationsList',
  component: FSTileUserOrganisationsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileUserOrganisationsList),
    ...addComponentEmits(FSTileUserOrganisationsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTileUserOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileUserOrganisationsList
      v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args:{
    modelValue: [],
    userOrganisationFilters: {}
  }
};
