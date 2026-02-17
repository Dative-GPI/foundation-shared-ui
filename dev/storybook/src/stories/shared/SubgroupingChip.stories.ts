import type { Meta, StoryObj } from '@storybook/vue3';

import FSSubgroupingChip from "@dative-gpi/foundation-shared-components/components/FSSubgroupingChip.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta = {
  title: 'Foundation/Shared/SubgroupingChip',
  component: FSSubgroupingChip,
  tags: ['autodocs'],
} satisfies Meta<typeof FSSubgroupingChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupingIcon: "mdi-flash",
    groupingLabel: "Usage énergétique",
    groupingColor: "#FF9800",
    icon: "mdi-gondola",
    label: "Remontées mécaniques"
  },
  render: (args) => ({
    components: { FSSubgroupingChip },
    setup() {
      return { args }
    },
    template: `
    <div style="display: flex; gap: 10px;">
      <FSSubgroupingChip
        v-bind="args"
      />
      <FSSubgroupingChip
        v-bind="args"
      />
    </div>
    `
  })
}

export const Variations: Story = {
  args: {
    groupingIcon: "mdi-flash",
    groupingLabel: "Usage énergétique",
    groupingColor: "#FF9800",
    icon: "mdi-gondola",
    label: "Remontées mécaniques"
  },
  render: () => ({
    components: { FSSubgroupingChip, FSText },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> Different colors </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSSubgroupingChip
          groupingIcon="mdi-flash"
          groupingLabel="Usage énergétique"
          groupingColor="#FF9800"
          icon="mdi-gondola"
          label="Remontées mécaniques"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-folder-outline"
          groupingLabel="Grouping 1"
          groupingColor="#FF0000"
          icon="mdi-account-outline"
          label="Subgrouping 1"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-folder-outline"
          groupingLabel="Grouping 1"
          groupingColor="#00FF00"
          icon="mdi-account-outline"
          label="Subgrouping 2"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-cog-outline"
          groupingLabel="Configuration"
          groupingColor="primary"
          icon="mdi-tune"
          label="Paramètres avancés"
        />
      </div>
    </div>`
  })
}
