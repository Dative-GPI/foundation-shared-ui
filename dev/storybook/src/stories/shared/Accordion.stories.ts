import type { Meta, StoryObj } from '@storybook/vue3';

import FSAccordionPanel from "@dative-gpi/foundation-shared-components/components/FSAccordionPanel.vue";
import FSAccordion from "@dative-gpi/foundation-shared-components/components/FSAccordion.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import { addSubcomponentsArgTypes } from '@/utils/properties';
import { VExpansionPanels } from 'vuetify/components';

const meta: Meta<typeof FSAccordion> = {
  title: 'Foundation/Shared/Accordion',
  component: FSAccordion,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VExpansionPanels], FSAccordion),
  },
} satisfies Meta<typeof FSAccordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SlotPanelOne: Story = {
  render: (args) => ({
    components: { FSAccordion, FSAccordionPanel, FSText, FSIcon },
    setup() {
      return { args };
    },
    template: `
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          expandIcon="mdi-chevron-left"
          collapseIcon="mdi-chevron-down"
        >
          <template #title>
            <FSText>First panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
        <FSAccordionPanel
          expandIcon="mdi-chevron-right"
          collapseIcon="mdi-chevron-down"
          actionPosition="start"
        >
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    `
  })
};

export const SlotPanelTwo: Story = {
  render: (args) => ({
    components: { FSAccordion, FSAccordionPanel, FSText, FSIcon, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel>
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-robot-angry-outline</FSIcon>
            <FSText>General kenobi</FSText>
            <FSButton label="Click here to see more" />
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    `
  })
};

export const PropPanelOne: Story = {
  render: (args) => ({
    components: { FSAccordion, FSAccordionPanel },
    setup() {
      return { args };
    },
    template: `
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="First panel"
          content="Hello there"
        />
      </FSAccordion>
    `
  })
};

export const PropPanelTwo: Story = {
  render: (args) => ({
    components: { FSAccordion, FSAccordionPanel },
    setup() {
      return { args };
    },
    template: `
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="Second panel"
          content="General Kenobi"
        />
      </FSAccordion>
    `
  })
};
