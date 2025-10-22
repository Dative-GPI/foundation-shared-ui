import type { Meta, StoryObj } from '@storybook/vue3';

import FSWidgetTemplateCardUI from "@dative-gpi/foundation-shared-components/components/FSWidgetTemplateCardUI.vue";

const meta = {
  title: 'Foundation/Shared/WidgetTemplateCard',
  component: FSWidgetTemplateCardUI,
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: 'text',
      description: 'The icon to display in the widget card',
    },
    label: {
      control: 'text',
      description: 'The text label to display in the widget card',
    },
  },
  args: {
    icon: 'mdi-chart-bar',
    label: 'Widget Template',
  },
} satisfies Meta<typeof FSWidgetTemplateCardUI>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'mdi-chart-bar',
    label: 'Statistics',
  },
  render: (args) => ({
    components: { FSWidgetTemplateCardUI },
    setup() {
      return { args };
    },
    template: `<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`,
  })
};

export const WithoutIcon: Story = {
  args: {
    icon: undefined,
    label: 'No Icon Widget',
  },
  render: (args) => ({
    components: { FSWidgetTemplateCardUI },
    setup() {
      return { args };
    },
    template: `<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`,
  })
};

export const LongText: Story = {
  args: {
    icon: 'mdi-information',
    label: 'This is a widget with a very long description text to show how it handles overflow',
  },
  render: (args) => ({
    components: { FSWidgetTemplateCardUI },
    setup() {
      return { args };
    },
    template: `<div style="width: 300px; height: 200px">
      <FSWidgetTemplateCardUI v-bind="args" />
    </div>`,
  })
};