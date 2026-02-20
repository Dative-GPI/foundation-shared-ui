import type { Meta, StoryObj } from '@storybook/vue3';

import FSSubgroupingChip from "@dative-gpi/foundation-shared-components/components/FSSubgroupingChip.vue";
import FSChipGroup from "@dative-gpi/foundation-shared-components/components/FSChipGroup.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";

const meta = {
  title: 'Foundation/Shared/ChipGroup',
  component: FSChipGroup,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSChipGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSChipGroup, FSText, FSSpan, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
     <FSChipGroup
      :labels="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
      variant="slide"
     />
    <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
     <FSChipGroup
      :labels="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
     />
    </div>`
  })
}

export const Menu: Story = {
  render: () => ({
    components: { FSChipGroup, FSSubgroupingChip, FSText },
    template: `
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <FSText font="text-h3"> Menu with slots (multiple) </FSText>
      <FSChipGroup variant="menu">
        <FSSubgroupingChip
          groupingIcon="mdi-flash"
          groupingLabel="Usage énergétique"
          groupingColor="#FF9800"
          icon="mdi-office-building"
          label="Bâtiment"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-office-building"
          groupingLabel="Bâtiment"
          icon="mdi-flash"
          label="Usage énergétique"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-flash"
          groupingLabel="Usage énergétique"
          groupingColor="#FF9800"
          icon="mdi-office-building"
          label="Bâtiment"
        />
        <FSSubgroupingChip
          groupingIcon="mdi-office-building"
          groupingLabel="Bâtiment"
          icon="mdi-flash"
          label="Usage énergétique"
        />
      </FSChipGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Menu with slots (single) </FSText>
      <FSChipGroup variant="menu">
        <FSSubgroupingChip
          groupingIcon="mdi-flash"
          groupingLabel="Usage énergétique"
          groupingColor="#FF9800"
          icon="mdi-office-building"
          label="Bâtiment"
        />
      </FSChipGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Menu with labels (multiple) </FSText>
      <FSChipGroup
        variant="menu"
        :labels="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Menu with labels (single) </FSText>
      <FSChipGroup
        variant="menu"
        :labels="['Bâtiment']"
      />
    </div>`
  })
}