import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSTranslateField from '@dative-gpi/foundation-shared-components/components/fields/FSTranslateField.vue';
import FSBaseTitleConfiguration from '@dative-gpi/foundation-core-components/components/configurations/FSBaseTitleConfiguration.vue';

const meta: Meta<typeof FSBaseTitleConfiguration> = {
  title: 'Core/Components/Configurations/BaseTitleConfiguration',
  component: FSBaseTitleConfiguration,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSTranslateField], FSBaseTitleConfiguration),
    ...addComponentEmits(FSBaseTitleConfiguration),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSBaseTitleConfiguration },
    setup() {
      return { args };
    },
    template: `
      <FSBaseTitleConfiguration
        v-model:title="args.title"
        v-model:subtitle="args.subtitle"
        v-model:translations="args.translations"
        v-bind="args"
      />
    `,
  }),
};

export const Default: Story = {
  ...BaseStory,
  args: {
    title: 'My widget',
    subtitle: 'A short description',
    translations: [],
  },
};

export const WithoutSubtitle: Story = {
  ...BaseStory,
  args: {
    title: 'My widget',
    translations: [],
    showSubtitle: false,
  },
};
