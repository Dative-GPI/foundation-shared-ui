import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';

import FSLexicalField from "@dative-gpi/foundation-shared-components/components/fields/FSLexicalField.vue";
import FSRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSRichTextField.vue";
import FSMarkdownField from "@dative-gpi/foundation-shared-components/components/fields/FSMarkdownField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta: Meta<typeof FSRichTextField> = {
  title: 'Shared/Components/Input fields/RichTextField',
  component: FSRichTextField,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSLexicalField, FSMarkdownField, FSCol], FSRichTextField),
    ...addComponentEmits(FSRichTextField),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const variableReferences = [{ code: "name", defaultValue: "DefaultName", label: "Name" }, { code: "age", defaultValue: "18", label: "Age" }, { code: "country", defaultValue: "World", label: "Country" }, { code: "city", defaultValue: "Capital", label: "City" }];

// The field, then what a reader sees
const renderWithResult: Story["render"] = (args) => ({
  components: { FSRichTextField, FSCol },
  setup() {
    return { args };
  },
  template: `
    <FSCol
      gap="24px"
    >
      <FSRichTextField
        v-model="args.modelValue"
        v-bind="args"
      />
      <FSRichTextField
        v-bind="args"
        variant="readonly"
      />
    </FSCol>
  `,
});

const render: Story["render"] = (args) => ({
  components: { FSRichTextField },
  setup() {
    return { args };
  },
  template: `
    <FSRichTextField
      v-model="args.modelValue"
      v-bind="args"
    />
  `,
});

export const Default: Story = {
  render: renderWithResult,
  args: {
    label: "Rich text",
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Hello I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"name\",\"defaultValue\":\"defaultName\"}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"heading\",\"version\":1,\"tag\":\"h1\"},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"I come from \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"country\",\"defaultValue\":\"World\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" and I am \",\"type\":\"text\",\"version\":1},{\"type\":\"variable\",\"version\":1,\"code\":\"age\",\"defaultValue\":\"defaultAge\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\".\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1},{\"children\":[],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
    variableReferences,
    variableValues: { name: "John", age: "25" },
  },
};

export const Markdown: Story = {
  render: renderWithResult,
  args: {
    label: "Markdown",
    format: "markdown",
    modelValue: "# Hello I am {{name}}\n\nI come from **{{country}}** and I am {{age}}.\n\n- Click [here](https://www.dative-gpi.com/) to visit a _marvelous_ website\n- Raw HTML such as <script>alert(1)</script> is escaped",
    variableReferences,
    variableValues: { name: "John", age: "25" },
  },
};

export const Empty: Story = {
  render,
  args: {
    label: "Rich text, 2 rows",
    rows: 2,
    modelValue: null,
  },
};

export const Disabled: Story = {
  render,
  args: {
    label: "Disabled rich text, with description",
    description: "Description",
    disabled: true,
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Click \",\"type\":\"text\",\"version\":1},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"here\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":\"\",\"url\":\"https://www.dative-gpi.com/\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" to visit a marvelous website\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
  },
};

export const Readonly: Story = {
  render,
  args: {
    variant: "readonly",
    modelValue: "{\"root\":{\"children\":[{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"Click \",\"type\":\"text\",\"version\":1},{\"children\":[{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\"here\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"link\",\"version\":1,\"rel\":\"noreferrer\",\"target\":\"_blank\",\"title\":\"\",\"url\":\"https://www.dative-gpi.com/\"},{\"detail\":0,\"format\":0,\"mode\":\"normal\",\"style\":\"\",\"text\":\" to visit a marvelous website\",\"type\":\"text\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"paragraph\",\"version\":1}],\"direction\":\"ltr\",\"format\":\"\",\"indent\":0,\"type\":\"root\",\"version\":1}}",
  },
};

export const ReadonlyMarkdown: Story = {
  render,
  args: {
    variant: "readonly",
    modelValue: "# Hello I am {{name}}\n\nClick [here](https://www.dative-gpi.com/) to visit a **marvelous** website",
    variableValues: { name: "John" },
  },
};

export const ReadonlyEmpty: Story = {
  render,
  args: {
    variant: "readonly",
    emptyLabel: "Empty label",
    modelValue: null,
  },
};
