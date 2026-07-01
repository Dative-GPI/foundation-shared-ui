import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';

import FSEntityField from '@dative-gpi/foundation-core-components/components/entities/FSEntityField.vue';
import FSSelectEntitiesField from '@dative-gpi/foundation-core-components/components/entities/FSSelectEntitiesField.vue';

const meta: Meta<typeof FSSelectEntitiesField> = {
  title: 'Core/Components/Entities/SelectEntitiesField',
  component: FSSelectEntitiesField,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSEntityField], FSSelectEntitiesField),
    ...addComponentEmits(FSSelectEntitiesField),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesField },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesField
        v-model:entityType="args.entityType"
        v-model:entitiesIds="args.entitiesIds"
        v-bind="args"
      />
    `,
  }),
};

export const Default: Story = {
  ...BaseStory,
  args: {
    label: 'Entities settings',
    entityType: EntityType.Device,
    entitiesIds: [],
  },
};

export const WithSelection: Story = {
  ...BaseStory,
  args: {
    label: 'Entities settings',
    entityType: EntityType.Device,
    entitiesIds: ['1', '2', '3'],
  },
};

export const SingleEntity: Story = {
  ...BaseStory,
  args: {
    label: 'Single entity',
    entityType: EntityType.Device,
    entitiesIds: ['1'],
    singleEntity: true,
  },
};

export const Groups: Story = {
  ...BaseStory,
  args: {
    label: 'Entities settings',
    entityType: EntityType.Group,
    entitiesIds: [],
  },
};
