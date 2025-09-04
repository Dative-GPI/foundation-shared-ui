import type { Meta, StoryObj } from '@storybook/vue3';

import FSFormulaField from "@dative-gpi/foundation-shared-components/components/fields/FSFormulaField.vue";
import FSTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";

const meta = {
  title: 'Foundation/Shared/Input fields/FormulaField',
  component: FSFormulaField,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSFormulaField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    args: {
      value1: null,
      value2: "Hello {name}!",
      value3: "The user {name} is {age} years old and lives in {city}.",
      variableReferences: [
        { code: "name", defaultValue: "John", label: "Name" },
        { code: "age", defaultValue: "25", label: "Age" },
        { code: "country", defaultValue: "France", label: "Country" },
        { code: "city", defaultValue: "Paris", label: "City" }
      ]
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSFormulaField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSFormulaField
        label="Formula"
        :variableReferences="args.variableReferences"
        v-model="args.value1"
      />
      <FSFormulaField
        label="Formula with initial value"
        :variableReferences="args.variableReferences"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSFormulaField
        label="Required formula with description"
        description="Enter a formula with variables"
        :required="true"
        :variableReferences="args.variableReferences"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSFormulaField
        label="Disabled formula"
        description="This field is disabled"
        :disabled="true"
        :variableReferences="args.variableReferences"
        v-model="args.value3"
      />
    </FSCol>`
  })
}

export const Variables: Story = {
  args: {
    modelValue: "Hello {name}, you are {age} years old!",
    variableReferences: [
      { code: "name", defaultValue: "John", label: "Name" },
      { code: "age", defaultValue: "25", label: "Age" },
      { code: "country", defaultValue: "France", label: "Country" },
      { code: "city", defaultValue: "Paris", label: "City" }
    ],
    variableValues: { name: "Alice", age: "30" }
  },
  render: (args, { argTypes }) => ({
    components: { FSFormulaField, FSCol, FSText, FSTextField, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol
      gap="24px"
    >
      <FSCol>
        <FSText
          font="text-button">
          Formula Editor
        </FSText>
        <FSFormulaField
          label="Formula"
          description="Use variables by clicking the variable button or typing {variableName}"
          :variableReferences="args.variableReferences"
          v-model="args.modelValue"
        />
      </FSCol>
      <FSCol>
        <FSText
          font="text-button">
          Variable Values
        </FSText>
        <FSRow>
          <FSTextField
            v-for="variable in args.variableReferences"
            :key="variable.code"
            :label="variable.label"
            v-model="args.variableValues[variable.code]"
          />
        </FSRow>
      </FSCol>
      <FSCol>
        <FSText
          font="text-button">
          Current Formula Output
        </FSText>
        <FSText>
          {{ args.modelValue || 'No formula entered' }}
        </FSText>
      </FSCol>
    </FSCol>`
  })
}