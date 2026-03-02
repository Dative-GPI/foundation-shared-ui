import type { Meta, StoryObj } from '@storybook/vue3';

import FSUserOrganisationsChipGroup from "@dative-gpi/foundation-core-components/components/lists/userOrganisations/FSUserOrganisationsChipGroup.vue";

const meta: Meta<typeof FSUserOrganisationsChipGroup> = {
    title: 'Foundation/Core/Lists/FSUserOrganisationsChipGroup',
    component: FSUserOrganisationsChipGroup,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof meta>;

export const userOrganisations: Story = {
    render: (args) => ({
        components: { FSUserOrganisationsChipGroup },
        setup() {
            return { args };
        },
        template: `
      <FSUserOrganisationsChipGroup
        :userOrganisationIds="args.userOrganisationIds"
      />
    `,
    }),
    args: {
        userOrganisationIds: ["1", "2"],
    },
};
