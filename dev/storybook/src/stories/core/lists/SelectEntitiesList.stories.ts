import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import { EntityType } from '@dative-gpi/foundation-shared-domain/enums';

import FSBaseEntitiesList from '@dative-gpi/foundation-core-components/components/entities/FSBaseEntitiesList.vue';
import FSSelectEntitiesList from "@dative-gpi/foundation-core-components/components/entities/FSSelectEntitiesList.vue";
import FSDialogSelectEntities from '@dative-gpi/foundation-core-components/components/entities/FSDialogSelectEntities.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';

const meta: Meta<typeof FSSelectEntitiesList> = {
  title: 'Foundation/Core/Lists/SelectEntitiesList',
  component: FSSelectEntitiesList,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSBaseEntitiesList], FSSelectEntitiesList),
    ...addComponentEmits(FSSelectEntitiesList),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const DeviceOrganisations: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSSelectEntitiesList>
    `,
  }),
  args: {
    modelValue: ["1"],
    entityType: EntityType.Device,
    showRemove: true,
  },
};

export const Groups: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Group,
  },
};

export const Dashboards: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Dashboard,
  },
};

export const DashboardsSingleSelect: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        v-model="args.modelValue"
        v-bind="args"
      />
    `,
  }),
  args: {
    modelValue: [],
    entityType: EntityType.Dashboard,
    singleSelect: true,
    showRemove: true,
  },
};

export const Dialog: Story = {
  render: (args) => ({
    components: { FSDialogSelectEntities, FSButton },
    setup() {
      const dialogOpen = ref(false);
      return { args, dialogOpen };
    },
    template: `
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      >
        <template #base-list-toolbar>
          <FSButton label="Non affecté" />
        </template>
      </FSDialogSelectEntities>
    `,
  }),
  args: {
    entityType: EntityType.Group,
    selecteds: [],
  },
};

export const DialogDashboards: Story = {
  render: (args) => ({
    components: { FSDialogSelectEntities, FSButton },
    setup() {
      const dialogOpen = ref(false);
      return { args, dialogOpen };
    },
    template: `
      <FSButton
        label="Open Dialog"
        @click="dialogOpen = true"
      />
      <FSDialogSelectEntities
        v-model="dialogOpen"
        v-model:selecteds="args.selecteds"
        v-bind="args"
      />
    `,
  }),
  args: {
    entityType: EntityType.Dashboard,
    selecteds: [],
  },
};

export const Groupings: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        :selectable="true"
        v-model="args.modelValue"
      />
    `,
  }),
  args: {
    entityType: EntityType.Grouping,
    modelValue: []
  },
};

export const Subgroupings: Story = {
  render: (args) => ({
    components: { FSSelectEntitiesList },
    setup() {
      return { args };
    },
    template: `
      <FSSelectEntitiesList
        :entityType="args.entityType"
        :showRemove="true"
        v-model="args.modelValue"
      />
    `,
  }),
  args: {
    entityType: EntityType.Subgrouping,
    modelValue: []
  },
};

export const DialogSubgroupings: Story = {
  render: (args) => ({
    components: { FSDialogSelectEntities, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSDialogSelectEntities
        :entityType="args.entityType"
        v-model:selecteds="args.selecteds"
        v-model:modelValue="args.modelValue"
        @update:selecteds="args['onUpdate:selecteds']"
        @update:modelValue="args['onUpdate:modelValue']"
      />
      <FSButton
        @click="args.modelValue = true"
        label="Open Dialog"
      />
    `,
  }),
  args: {
    entityType: EntityType.Subgrouping,
    selecteds: [],
    modelValue: false
  },
};
