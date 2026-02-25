import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { SUBGROUPINGS } from '@/mocks/subgroupings.mock';

import FSSubgroupingChip from "@dative-gpi/foundation-shared-components/components/FSSubgroupingChip.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSChip from '@dative-gpi/foundation-shared-components/components/FSChip.vue';

const meta = {
  title: 'Foundation/Shared/SubgroupingChip',
  component: FSSubgroupingChip,
  subcomponents: { FSChip },
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSChip], FSSubgroupingChip),
    ...addComponentEmits(FSSubgroupingChip)
  },
} satisfies Meta<typeof FSSubgroupingChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    groupingIcon: SUBGROUPINGS[1].groupingIcon,
    groupingLabel: SUBGROUPINGS[1].groupingLabel,
    groupingColor: SUBGROUPINGS[1].groupingColor,
    icon: SUBGROUPINGS[1].icon,
    label: SUBGROUPINGS[1].label
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
    </div>
    `
  })
}
