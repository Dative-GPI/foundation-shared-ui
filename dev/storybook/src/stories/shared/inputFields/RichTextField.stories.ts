import type { Meta, StoryObj } from '@storybook/vue3';

import FSRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSRichTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSTextField from '@dative-gpi/foundation-shared-components/components/fields/FSTextField.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

const meta = {
  title: 'Shared/Components/Input fields/RichTextField',
  component: FSRichTextField,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSRichTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    args: {
      value1: "# Hello I am {{name}}\nI come from {{country}} and I am {{age}}.",
      variablePreset1: [{ code: "name", defaultValue: "DefaultName", label: "Name" }, { code: "age", defaultValue: "18", label: "Age" }, { code: "country", defaultValue: "World", label: "Country" }, { code: "city", defaultValue: "Capital", label: "City" }],
      variableValues1: { name: "John", age: 25 },
      value2: null,
      value3: "Click [here](https://www.dative-gpi.com/) to visit a **marvelous** website",
      value4: "Recette pour environ 50 baguettes tradition avec le process _Paneotrad_\n\n### Ingrédients\n\n- 10 kg de farine de Tradition T65\n- 6,8 L + 0,4 L d'eau\n- 70 g de levure\n- 180 g de sel"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSRichTextField
        label="Rich text"
        :variableReferences="args.variablePreset1"
        v-model="args.value4"
      />
      <FSRichTextField
        label="Rich text"
        variant="readonly"
        :variableValues="args.variableValues1"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Rich text, 2 rows"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Disabled rich text, with description"
        description="description"
        :disabled="true"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Readonly rich text"
        description="Readonly description"
        variant="readonly"
        v-model="args.value3"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSRichTextField
        label="Readonly rich text"
        emptyLabel="Empty label (modelValue linked with the Rich text, 2 rows modelValue)"
        variant="readonly"
        v-model="args.value2"
      />
    </FSCol>`
  })
}


export const Variables: Story = {
  args: {
    modelValue: "# Hello I am {{name}}\n\nI come from {{country}} and I am {{age}}.",
    variableReferences: [{ code: "name", defaultValue: "DefaultName", label: "Name" }, { code: "age", defaultValue: "18", label: "Age" }, { code: "country", defaultValue: "World", label: "Country" }, { code: "city", defaultValue: "Capital", label: "City" }],
    variableValues: { name: "John", age: "25" },
  },
  render: (args, { argTypes }) => ({
    components: { FSRichTextField, FSCol, FSText, FSTextField, FSRow },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol
      gap="24px"
    >
      <FSCol>
        <FSRichTextField
          :variableReferences="args.variableReferences"
          v-model="args.modelValue"
        />
      </FSCol>
      <FSCol>
        <FSText
          font="text-button">
          Variables
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
          Result
        </FSText>
        <FSRichTextField
          variant="readonly"
          :variableReferences="args.variableReferences"
          :variableValues="args.variableValues"
          :modelValue="args.modelValue"
        />
      </FSCol>
    </FSCol>`
  })
}