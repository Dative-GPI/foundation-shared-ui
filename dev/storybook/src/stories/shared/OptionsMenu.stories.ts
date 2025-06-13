import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { VMenu } from 'vuetify/components';
import FSMenu from '@dative-gpi/foundation-shared-components/components/FSMenu.vue';
import FSOptionsMenu from '@dative-gpi/foundation-shared-components/components/FSOptionsMenu.vue';

const meta: Meta<typeof FSOptionsMenu> = {
  title: 'Foundation/Shared/Menu/OptionsMenu',
  component: FSOptionsMenu,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSMenu, VMenu], FSOptionsMenu),
    ...addComponentEmits(FSOptionsMenu),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { FSOptionsMenu },
    setup() {
      return { args };
    },
    template: `
    <FSOptionsMenu
      v-bind="args"
    />`
  }),
  args: {
    items: [
      { label: 'Display alert', icon: 'mdi-alert', onClick: () => alert('Alert triggered!') },
      { label: 'Display notification', icon: 'mdi-bell', onClick: () => alert('Notification triggered!') },
      { label: 'Display print', icon: 'mdi-printer', onClick: () => alert('Print triggered!') }
    ]
  },
};

export const Button: Story = {
  render: (args) => ({
    components: { FSOptionsMenu },
    setup() {
      return { args };
    },
    template: `
    <FSOptionsMenu
      v-bind="args"
    />`
  }),
  args: {
    buttonVariant: 'standard',
    icon: "mdi-dots-vertical",
    items: [
      { label: 'Display alert', icon: 'mdi-alert', onClick: () => alert('Alert triggered!') },
      { label: 'Display notification with a longer longer name and longer and longer and longer and longer', onClick: () => alert('Notification triggered!') },
      { label: 'Display print', onClick: () => alert('Print triggered!') }
    ]
  },
};

export const ItemsFadeOut: Story = {
  render: (args) => ({
    components: { FSOptionsMenu },
    setup() {
      return { args };
    },
    template: `
    <FSOptionsMenu
      v-bind="args"
    />`
  }),
  args: {
    buttonVariant: 'standard',
    icon: "mdi-dots-vertical",
    items: Array.from({ length: 80 }, (_, i) => ({
      label: `Item ${i + 1}`,
      icon: 'mdi-check',
      onClick: () => alert(`Item ${i + 1} clicked!`),
      closeOnContentClick: false
    })),
  },
};

