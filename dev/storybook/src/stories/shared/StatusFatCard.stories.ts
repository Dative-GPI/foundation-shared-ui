import type { Meta, StoryObj } from '@storybook/vue3';

import FSStatusFatCard from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusFatCard.vue";
import type { FSDeviceStatusGroup, FSModelStatus } from '@dative-gpi/foundation-shared-components/models';

const meta = {
  title: 'Foundation/Shared/StatusFatCard',
  component: FSStatusFatCard,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FSStatusFatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const modelStatus: FSModelStatus = {
  id: 'testId',
  label: 'testLabel',
  index: 1,
  showDefault: false
}

const statusGroup: FSDeviceStatusGroup = {
  label: 'testLabelValue',
  value: '70',
  unit: '°C',
  icon: 'mdi-thermometer',
  color: '#E01515',
  sourceTimestamp: 1726547886000,
  enqueuedTimestamp: 1726547952000,
  processedTimestamp: 1726547958156,
}

export const Default: Story = {
  args: {
    modelStatus: modelStatus,
    statusGroup: statusGroup,
    title: "Status",
    background: true
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusFatCard },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusFatCard 
        :modelStatus="args.modelStatus" 
        :statusGroup="args.statusGroup" 
        :title="args.title"
        :background="args.background"
      />`
  })
}
