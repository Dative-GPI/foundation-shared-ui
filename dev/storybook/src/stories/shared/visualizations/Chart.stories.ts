import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSChart from '@dative-gpi/foundation-shared-visualization/components/FSChart.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import ChartWithTooltip from './ChartWithTooltip.vue';
import { LegendPositions } from '@dative-gpi/foundation-shared-visualization/models';

const meta = {
  title: 'Shared/Visualizations/Chart',
  component: FSChart,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSCol], FSChart),
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
    template: `<FSChart v-bind="args" />`
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
    template: `<FSChart v-bind="args" />`
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
    template: `<FSChart v-bind="args" />`
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
    template: `<FSChart v-bind="args" />`
  })
};

export const WithLegend: Story = {
  args: {
    legendPosition: LegendPositions.Right,
    option: {
      tooltip: { trigger: 'item' },
      series: [{
        type: 'pie',
        radius: ['40%', '70%'],
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
    components: { FSChart, FSCol, FSRow, FSText },
    setup() {
      const legendItems = [
        { color: '#5470c6', label: 'Search Engine', value: '1 048' },
        { color: '#91cc75', label: 'Direct', value: '735'   },
        { color: '#fac858', label: 'Email', value: '580'   },
        { color: '#ee6666', label: 'Union Ads', value: '484'   },
        { color: '#73c0de', label: 'Video Ads', value: '300'   }
      ];
      return { args, legendItems };
    },
    template: `
      <FSChart v-bind="args">
        <template #legend>
          <FSCol align="center-center" gap="12px">
            <FSRow
              v-for="item in legendItems"
              :key="item.label"
              align="center-left"
              gap="8px"
              width="hug"
            >
              <div :style="{ width: '12px', height: '12px', borderRadius: '50%', background: item.color, flexShrink: '0' }" />
              <FSCol gap="0" width="hug">
                <FSText font="text-overline">{{ item.label }}</FSText>
                <FSText font="text-body-2">{{ item.value }}</FSText>
              </FSCol>
            </FSRow>
          </FSCol>
        </template>
      </FSChart>`
  })
};

export const WithTooltip: Story = {
  args: {
    option: {}
  },
  render: () => ({
    components: { ChartWithTooltip },
    template: `<FSCol height="fill"><ChartWithTooltip /></FSCol>`
  })
};
