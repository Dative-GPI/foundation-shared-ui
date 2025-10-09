import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';

import FSWidgetStandardOptions from "@dative-gpi/foundation-shared-components/components/FSWidgetStandardOptions.vue";

const meta = {
  title: 'Foundation/Shared/WidgetStandardOptions',
  component: FSWidgetStandardOptions,
  tags: ['autodocs'],
  argTypes: {
    widgetWidth: {
      control: 'number',
      description: 'Width of the widget',
    },
    widgetHeight: {
      control: 'number',
      description: 'Height of the widget',
    },
    hideBorders: {
      control: 'boolean',
      description: 'Whether to hide widget borders',
    },
    'onUpdate:widgetWidth': {
      action: 'widgetWidth changed',
    },
    'onUpdate:widgetHeight': {
      action: 'widgetHeight changed',
    },
    'onUpdate:hideBorders': {
      action: 'hideBorders changed',
    },
  },
  args: {
    widgetWidth: 300,
    widgetHeight: 200,
    hideBorders: false,
  },
} satisfies Meta<typeof FSWidgetStandardOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    widgetWidth: 300,
    widgetHeight: 200,
    hideBorders: false,
  },
  render: (args) => ({
    components: { FSWidgetStandardOptions },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);

      return { 
        widgetWidth,
        widgetHeight,
        hideBorders,
      };
    },
    template: `
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Widget Configuration Options</h3>
        <FSWidgetStandardOptions 
          v-model:widgetWidth="widgetWidth"
          v-model:widgetHeight="widgetHeight"
          v-model:hideBorders="hideBorders"
        />
        <div style="margin-top: 20px; padding: 10px; background: white; border-radius: 4px;">
          <h4>Current Values:</h4>
          <p>Width: {{ widgetWidth }}px</p>
          <p>Height: {{ widgetHeight }}px</p>
          <p>Hide Borders: {{ hideBorders }}</p>
        </div>
      </div>
    `,
  })
};

export const Interactive: Story = {
  args: {
    widgetWidth: 400,
    widgetHeight: 300,
    hideBorders: false,
  },
  render: (args) => ({
    components: { FSWidgetStandardOptions },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);

      return { 
        widgetWidth,
        widgetHeight,
        hideBorders,
      };
    },
    template: `
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h3>Widget Options</h3>
          <FSWidgetStandardOptions 
            v-model:widgetWidth="widgetWidth"
            v-model:widgetHeight="widgetHeight"
            v-model:hideBorders="hideBorders"
          />
        </div>
        <div style="flex: 1;">
          <h3>Widget Preview</h3>
          <div 
            :style="{
              width: widgetWidth + 'px',
              height: widgetHeight + 'px',
              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
              border: hideBorders ? 'none' : '2px solid #2196f3',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1976d2',
              maxWidth: '100%',
              maxHeight: '400px'
            }"
          >
            Widget Preview<br>
            {{ widgetWidth }}x{{ widgetHeight }}
          </div>
        </div>
      </div>
    `,
  })
};