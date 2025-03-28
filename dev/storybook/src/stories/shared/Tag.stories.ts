import type { Meta, StoryObj } from '@storybook/vue3';

import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSTag from "@dative-gpi/foundation-shared-components/components/FSTag.vue";

const meta = {
  title: 'Foundation/Shared/Tag',
  component: FSTag,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSTag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  render: () => ({
    components: { FSTag, FSText, FSSpan, FSIcon },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots (default & button) </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSTag color="primary">
          <FSSpan> Primary, full, removable </FSSpan>
        </FSTag>
        <FSTag color="success" variant="standard" :removeDisabled="true">
          <FSSpan> Success, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="warning">
          <FSSpan> Warning, full, removable </FSSpan>
          <template #button>
            <FSIcon style="cursor: pointer;"> mdi-emoticon-cool-outline </FSIcon>
          </template>
        </FSTag>
        <FSTag color="error" variant="standard" :removeDisabled="true">
          <FSSpan> Error, standard, unremovable </FSSpan>
        </FSTag>
        <FSTag color="light" :removeDisabled="true">
          <FSSpan> Light, full, unremovable </FSSpan>
        </FSTag>
        <FSTag color="dark" variant="standard">
          <FSSpan> Dark, standard, removable </FSSpan>
        </FSTag>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSTag color="primary" variant="standard" :removeDisabled="true" label="Primary, standard, unremovable" />
        <FSTag color="success" label="Success, full, removable"     />
        <FSTag color="warning" variant="standard" :removeDisabled="true" label="Warning, standard, unremovable" />
        <FSTag color="error" label="Error, full, removable"       />
        <FSTag color="light" variant="standard" label="Light, standard, removable" />
        <FSTag color="dark" :removeDisabled="true" label="Dark, standard, unremovable" />
      </div>
    </div>`
  })
}