import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSSubgroupingsChipList from "@dative-gpi/foundation-core-components/components/lists/subgroupings/FSSubgroupingsChipList.vue";
import FSChipGroup from '@dative-gpi/foundation-shared-components/components/FSChipGroup.vue';

import { SubgroupingInfos } from "@dative-gpi/foundation-core-domain/models";

const meta: Meta<typeof FSSubgroupingsChipList> = {
    title: 'Foundation/Core/Lists/SubgroupingsChipList',
    subcomponents: { FSChipGroup },
    component: FSSubgroupingsChipList,
    tags: ['autodocs'],
    argTypes: {
        ...addSubcomponentsArgTypes([FSChipGroup], FSSubgroupingsChipList),
        ...addComponentEmits(FSSubgroupingsChipList)
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

const SUBGROUPINGS = [
    new SubgroupingInfos({
        id: "subgrouping1",
        label: "Bâtiment",
        code: "batiment",
        groupingColor: "#FF9800",
        groupingIcon: "mdi-flash",
        groupingId: "grouping1",
        groupingLabel: "Usage énergétique",
        icon: "mdi-office-building",
    }),
    new SubgroupingInfos({
        id: "subgrouping2",
        label: "Usage énergétique",
        code: "usage-energetique",
        groupingColor: "#FF9800",
        groupingIcon: "mdi-office-building",
        groupingId: "grouping1",
        groupingLabel: "Bâtiment",
        icon: "mdi-flash",
    }),
    new SubgroupingInfos({
        id: "subgrouping3",
        label: "Remontées mécaniques",
        code: "remontees-mecaniques",
        groupingColor: "#4CAF50",
        groupingIcon: "mdi-snowflake",
        groupingId: "grouping2",
        groupingLabel: "Station de ski",
        icon: "mdi-gondola",
    }),
    new SubgroupingInfos({
        id: "subgrouping4",
        label: "Parking",
        code: "parking",
        groupingColor: "#2196F3",
        groupingIcon: "mdi-car",
        groupingId: "grouping3",
        groupingLabel: "Transport",
        icon: "mdi-parking",
    }),
];

export const Multiple: Story = {
    render: (args) => ({
        components: { FSSubgroupingsChipList },
        setup() {
            return { args };
        },
        template: `
            <FSSubgroupingsChipList
                :subgroupings="args.subgroupings"
            />
    `,
    }),
    args: {
        subgroupings: SUBGROUPINGS,
    },
};

export const Single: Story = {
    render: (args) => ({
        components: { FSSubgroupingsChipList },
        setup() {
            return { args };
        },
        template: `
            <FSSubgroupingsChipList
                :subgroupings="args.subgroupings"
            />
    `,
    }),
    args: {
        subgroupings: [SUBGROUPINGS[0]],
    },
};
