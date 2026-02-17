import type { Meta, StoryObj } from '@storybook/vue3';

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import { addSubcomponentsArgTypes } from '@/utils/properties';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

const meta = {
  title: 'Foundation/Shared/Chip',
  component: FSChip,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSRow], FSChip)
  },
} satisfies Meta<typeof FSChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'primary',
    variant: 'standard',
    label: 'I am a chip'
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
  render: () => ({
    components: { FSChip, FSText, FSSpan, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSChip color="primary" :clickable="true">
          <FSIcon size="s"> mdi-emoticon-cool-outline </FSIcon>
          <FSSpan font="text-overline"> Primary, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="success" variant="standard">
          <FSSpan font="text-overline"> Success, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="warning" :clickable="true">
          <FSSpan font="text-overline"> Warning, full, clickable </FSSpan>
        </FSChip>
        <FSChip color="error" variant="standard">
          <FSIcon size="s"> mdi-thermometer </FSIcon>
          <FSSpan font="text-overline"> Error, standard, unclickable </FSSpan>
        </FSChip>
        <FSChip color="light">
          <FSSpan font="text-overline"> Light, full, unclickable </FSSpan>
        </FSChip>
        <FSChip color="dark" variant="standard" :clickable="true">
          <FSSpan font="text-overline"> Dark, standard, clickable </FSSpan>
        </FSChip>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip color="primary" variant="standard" label="Primary, standard, unclickable" />
        <FSChip color="success" :clickable="true" prependIcon="mdi-check" label="Success, full, clickable"     />
        <FSChip color="warning" variant="standard" label="Warning, standard, unclickable" />
        <FSChip color="error" :clickable="true" label="Error, full, clickable" appendIcon="mdi-close" />
        <FSChip color="light" variant="standard" :clickable="true" label="Light, standard, clickable" />
        <FSChip color="dark" label="Dark, full, unclickable" />
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> Text align </FSText>
      <div style="display: flex; gap: 10px;">
        <FSChip width="200px" color="primary" variant="standard" label="200px with long labelllllllllllllllllllllllll" />
        <FSChip width="500px" align="center-center" color="primary" variant="standard" label="500px with align center-center" />
      </div>
      <div style="display: flex; gap: 10px;">
        <FSChip width="fill" align="center-left" color="primary" variant="standard" label="fill with align center-left" />
        <FSChip width="fill" color="primary" variant="standard" label="fill without align center-left" />
      </div>
    </div>`
  })
}