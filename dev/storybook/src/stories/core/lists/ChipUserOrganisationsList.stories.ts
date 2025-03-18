import type { Meta, StoryObj } from '@storybook/vue3';

import FSChipUserOrganisationsList from "@dative-gpi/foundation-core-components/components/lists/userOrganisations/FSChipUserOrganisationsList.vue";

const meta: Meta<typeof FSChipUserOrganisationsList> = {
    title: 'Foundation/Core/Lists/FSChipUserOrganisationsList',
    component: FSChipUserOrganisationsList,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const userOrganisations: Story = {
    render: (args) => ({
        components: { FSChipUserOrganisationsList },
        setup() {
            return { args };
        },
        template: `
      <FSChipUserOrganisationsList
        :userOrganisationIds="args.userOrganisationIds"
      />
    `,
    }),
    args: {
        userOrganisationIds: ["1", "2"],
    },
};
