import type { Meta, StoryObj } from '@storybook/vue3';

import FSStatusRichCard from "@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusRichCard.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";

const meta = {
  title: 'Foundation/Shared/StatusRichCard',
  component: FSStatusRichCard,
  tags: ['autodocs'],
  argTypes: {
  }
} satisfies Meta<typeof FSStatusRichCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label that should clamp after two lines',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: '',
      value: '70',
      unit: '°C',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156,
    },
    title: undefined,
    titleClamp: 2,
    fillBackground: false
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusRichCard, FSChip, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusRichCard
        v-bind="args"
      />`
  })
}

export const Footer: Story = {
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: '',
      value: '70',
      unit: '°C',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156,
    },
    title: undefined,
    titleClamp: 1,
    color: "#50CC50",
    fillBackground: true
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusRichCard, FSChip, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #footer="{ color }"
        >
          <FSChip
            :color="color"
            label="Target: 69°C"
          />
        </template>
      </FSStatusRichCard>`
  })
}

export const Corner: Story = {
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      showDefault: false
    },
    statusGroup: {
      label: 'Too hot',
      value: '',
      unit: '',
      icon: 'mdi-thermometer',
      color: '#E01515',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156,
    },
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusRichCard, FSChip, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusRichCard
        v-bind="args"
      >
        <template
          #corner="{ color }"
        >
          <FSIcon
            :color="color"
          >
            mdi-information-outline
          </FSIcon>
        </template>
      </FSStatusRichCard>`
  })
}

export const Clickable: Story = {
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      iconDefault: 'mdi-information-outline',
      colorDefault: '#00ff00',
      showDefault: true
    },
    statusGroup: undefined,
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusRichCard, FSChip, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusRichCard
        v-bind="args"
        @click
      />`
  })
}

export const OtherClickable: Story = {
  args: {
    modelStatus: {
      id: '1',
      label: 'Status label',
      index: 1,
      iconDefault: 'mdi-information-outline',
      colorDefault: '#00ff00',
      showDefault: true
    },
    statusGroup: {
      label: 'Too cold',
      value: '',
      unit: '',
      icon: 'mdi-thermometer',
      color: '#0088BB',
      sourceTimestamp: 1726547886000,
      enqueuedTimestamp: 1726547952000,
      processedTimestamp: 1726547958156,
    },
    title: undefined,
    titleClamp: 2,
    color: undefined,
    fillBackground: true
  },
  render: (args, { argTypes }) => ({
    components: { FSStatusRichCard, FSChip, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
      <FSStatusRichCard
        v-bind="args"
        @click
      />`
  })
}