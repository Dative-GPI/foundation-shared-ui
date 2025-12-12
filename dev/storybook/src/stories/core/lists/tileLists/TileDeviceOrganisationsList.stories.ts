import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileDeviceOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/deviceOrganisations/FSTileDeviceOrganisationsList.vue";

const meta: Meta<typeof FSTileDeviceOrganisationsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileDeviceOrganisationsList',
  component: FSTileDeviceOrganisationsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileDeviceOrganisationsList),
    ...addComponentEmits(FSTileDeviceOrganisationsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSTileDeviceOrganisationsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileDeviceOrganisationsList
         v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    deviceOrganisationFilters: {},
    modelValue: [],
  }
};
