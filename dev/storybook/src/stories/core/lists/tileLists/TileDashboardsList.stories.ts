import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTileList from '@dative-gpi/foundation-shared-components/components/lists/FSTileList.vue';
import FSTileDashboardsList from "@dative-gpi/foundation-core-components/components/lists/dashboards/FSTileDashboardsList.vue";

const meta: Meta<typeof FSTileDashboardsList> = {
  title: 'Foundation/Core/Lists/Tile Lists/TileDashboardsList',
  component: FSTileDashboardsList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTileList], FSTileDashboardsList),
    ...addComponentEmits(FSTileDashboardsList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: [],
    selectable: false,
    singleSelect: false,
    dashboardOrganisationFilters: {},
    dashboardOrganisationTypeFilters: {},
    dashboardShallowFilters: {}
  },
  render: (args) => ({
    components: { FSTileDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileDashboardsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};

export const Selectable: Story = {
  args: {
    modelValue: [],
    selectable: true,
    singleSelect: false,
    dashboardOrganisationFilters: {},
    dashboardOrganisationTypeFilters: {},
    dashboardShallowFilters: {}
  },
  render: (args) => ({
    components: { FSTileDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileDashboardsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};

export const SingleSelect: Story = {
  args: {
    modelValue: [],
    selectable: true,
    singleSelect: true,
    dashboardOrganisationFilters: {},
    dashboardOrganisationTypeFilters: {},
    dashboardShallowFilters: {}
  },
  render: (args) => ({
    components: { FSTileDashboardsList },
    setup() {
      return { args };
    },
    template: `
      <FSTileDashboardsList
        v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `,
  })
};