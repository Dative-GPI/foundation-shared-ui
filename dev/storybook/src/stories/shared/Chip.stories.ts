import type { Meta, StoryObj } from '@storybook/vue3';

import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';

const meta = {
  title: 'Foundation/Shared/Chip',
  component: FSChip,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSCard], FSChip),
    ...addComponentEmits(FSChip)
  },
} satisfies Meta<typeof FSChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'standard',
    label: 'I am a chip to dative-gpi',
    clickable: false,
  },
  render: (args) => ({
    components: { FSChip, FSText, FSSpan, FSIcon },
    setup() {
      return { args }
    },
    template: `
      <FSChip 
        v-bind="args"
      />
      `
  })
}

export const Variations: Story = {
  args: {
    clickable: true
  },
  render: (args) => ({
    components: { FSChip, FSText, FSSpan, FSIcon },
    inheritAttrs: false,
    setup() {
      return { args }
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" v-bind="args">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full</FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard" v-bind="args">
          <FSSpan font="text-overline"> Success, standard</FSSpan>
        </FSChip>
        <FSChip color="warning" v-bind="args">
          <FSSpan font="text-overline"> Warning, full</FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard" v-bind="args">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard </FSSpan>
        </FSChip>
        <FSChip color="light" v-bind="args">
          <FSSpan font="text-overline"> Light, full </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" v-bind="args">
          <template #default="{ contentVariant }">
            <FSIcon
              icon="mdi-check"
              :variant="contentVariant"
              color="error"
              size="16"
            />
            <FSSpan font="text-button">contentVariant slot passage</FSSpan>
          </template>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard" v-bind="args" />
        <FSChip color="success" prependIcon="mdi-check" label="Success, full" v-bind="args" />
        <FSChip color="warning" variant="standard" label="Warning, standard" v-bind="args" />
        <FSChip color="error" label="Error, full" appendIcon="mdi-close" v-bind="args" />
        <FSChip color="light" variant="standard" label="Light, standard" v-bind="args" />
        <FSChip color="dark" label="Dark, full" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText>Variants</FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="standard" v-bind="args" />
        <FSChip width="200px" color="primary" variant="standard" :border="false" label="standard no border" v-bind="args" />
        <FSChip width="200px" color="primary" variant="full" label="full (default)" v-bind="args" />
        <FSChip width="200px" color="primary" variant="background" label="background" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient" v-bind="args" />
        <FSChip width="200px" :color="['primary', 'aqua']" variant="gradient" label="gradient no border" :border="false" v-bind="args" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" v-bind="args" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" v-bind="args" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="100%" align="center-left" color="primary" variant="standard" label="100% with align center-left" v-bind="args" />
        <FSChip width="100%" color="primary" variant="standard" label="100% without align center-left" v-bind="args" />
      </div>
    </div>`
  })
}