import { ref, watch } from 'vue';
import type { Meta, StoryObj } from '@storybook/vue3';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';
import FSEntityField from "@dative-gpi/foundation-core-components/components/entities/FSEntityField.vue";
import { addComponentEmits } from '@/utils/properties';

const meta = {
  title: 'Foundation/Core/EntityField',
  component: FSEntityField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSEntityField)
  }
} satisfies Meta<typeof FSEntityField>;

export default meta;
type Story = StoryObj<typeof meta>;

const BaseStory: Story = {
  args: {
    label: "Entity selection",
    modelValue: [],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
  render: (args) => ({
    components: { FSEntityField },
    setup() {
      return { args };
    },
    template: `
      <FSEntityField
        v-bind="args" 
        v-model="args.modelValue" 
        v-model:entityType="args.entityType"
      />`
  })
}

export const Empty: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}


export const AllTypes: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [],
  },
}


export const One: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection with single select",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
    singleSelect: true
  },
}


export const Five: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}


export const TenNoList: Story = {
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
  },
}