import type { Meta, StoryObj } from '@storybook/vue3';
import { defineComponent } from 'vue';

import { addComponentEmits } from '@/utils/properties';

import FSPoliciesValidationField from "@dative-gpi/foundation-shared-components/components/fields/FSPoliciesValidationField.vue";
import FSForm from '@dative-gpi/foundation-shared-components/components/FSForm.vue';

const meta = {
  title: 'Foundation/Shared/PoliciesValidationField',
  component: FSPoliciesValidationField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSPoliciesValidationField)
  },
} satisfies Meta<typeof FSPoliciesValidationField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PoliciesValidationField: Story = {
  args: {
    generalConditions: false,
    privacyPolicy: false
  },
  render: (args) =>
    defineComponent({
      components: { 
        FSPoliciesValidationField,
        FSForm
      },
      inheritAttrs: false,
      setup() {
        return { args };
      },
      template: `
        <FSForm height="500px">
          <FSPoliciesValidationField
            v-model:generalConditions="args.generalConditions"
            v-model:privacyPolicy="args.privacyPolicy"
          />
        </FSForm>
      `,
    }),
};
