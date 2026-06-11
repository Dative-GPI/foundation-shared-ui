import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSChart from '@dative-gpi/foundation-shared-components/components/FSChart.vue';

const meta = {
  title: 'Foundation/Shared/Chart',
  component: FSChart,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([], FSChart),
    ...addComponentEmits(FSChart),
  }
} satisfies Meta<typeof FSChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    option: {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar'
        }
      ]
    }
  },
  render: (args) => ({
    components: { FSChart },
    setup() {
      return { args };
    },
    template: `<div style="width: 600px; height: 400px;"><FSChart v-bind="args" /></div>`
  })
};

export const LineChart: Story = {
  args: {
    option: {
      title: { text: 'Line Chart' },
      xAxis: { type: 'category', data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
      yAxis: { type: 'value' },
      series: [{ data: [820, 932, 901, 934, 1290, 1330], type: 'line', smooth: true }]
    }
  },
  render: (args) => ({
    components: { FSChart },
    setup() {
      return { args };
    },
    template: `<div style="width: 600px; height: 400px;"><FSChart v-bind="args" /></div>`
  })
};

export const PieChart: Story = {
  args: {
    option: {
      title: { text: 'Pie Chart', left: 'center' },
      tooltip: { trigger: 'item' },
      series: [{
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' }
        ]
      }]
    }
  },
  render: (args) => ({
    components: { FSChart },
    setup() {
      return { args };
    },
    template: `<div style="width: 600px; height: 400px;"><FSChart v-bind="args" /></div>`
  })
};

export const MultiSeries: Story = {
  args: {
    option: {
      title: { text: 'Multi-Series' },
      tooltip: { trigger: 'axis' },
      legend: { data: ['Email', 'Union Ads'] },
      xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
      yAxis: { type: 'value' },
      series: [
        { name: 'Email', type: 'line', data: [120, 132, 101, 134, 90, 230, 210] },
        { name: 'Union Ads', type: 'line', data: [220, 182, 191, 234, 290, 330, 310] }
      ]
    }
  },
  render: (args) => ({
    components: { FSChart },
    setup() {
      return { args };
    },
    template: `<div style="width: 600px; height: 400px;"><FSChart v-bind="args" /></div>`
  })
};
