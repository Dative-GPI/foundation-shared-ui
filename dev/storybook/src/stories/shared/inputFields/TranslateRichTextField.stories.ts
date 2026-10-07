import type { Meta, StoryObj } from '@storybook/vue3';

import FSTranslateRichTextField from "@dative-gpi/foundation-shared-components/components/fields/FSTranslateRichTextField.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSRichTextField from '@dative-gpi/foundation-shared-components/components/fields/FSRichTextField.vue';
import type { RichTextVariable } from '@dative-gpi/foundation-shared-components/models/richTextVariable';

const meta = {
  title: 'Shared/Components/Input fields/TranslateRichTextField',
  component: FSTranslateRichTextField,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSTranslateRichTextField),
    ...addSubcomponentsArgTypes([FSRichTextField], FSTranslateRichTextField),
  },
} satisfies Meta<typeof FSTranslateRichTextField>;

const variableReferences: RichTextVariable[] = [
  { code: "temperature", defaultValue: "0", label: "Température" },
  { code: "weather", defaultValue: "XXX", label: "Météo" }
];

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modelValue: "Click [here](https://www.dative-gpi.com/) to visit a marvelous website",
    variableReferences: [...variableReferences],
  },
  render: (args, { argTypes }) => ({
    components: { FSTranslateRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSTranslateRichTextField
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`
  })
}

export const TranslationObject: Story = {
  args: {
    translationsExpanded: false,
    property: "text",
    modelValue: "# A nice home\n\n### Current weather : {{weather}} ({{temperature}} °C)\n\nA nice home is a **French villa** with a huge garden, surrounded by lush greenery and vibrant flowers. The villa's elegant stone façade is complemented by large **arched windows** that allow plenty of natural light to flood the spacious, open interiors.\n\nInside, high ceilings, wooden beams, and rustic furniture create a warm, welcoming atmosphere. The outdoor space features a charming terrace perfect for al fresco dining, and a sparkling swimming pool offers a refreshing escape on sunny days.",
    translations: [
      { languageCode: "fr-FR", text: "# Une belle maison\n\n### Météo actuelle : {{weather}} ({{temperature}} °C)\n\nUne belle maison est une **villa française** avec un immense **jardin**, entourée de verdure luxuriante et de **fleurs** éclatantes. La villa possède une élégante **façade en pierre** et de grandes **fenêtres** cintrées qui laissent entrer la lumière naturelle dans les intérieurs spacieux.\n\nÀ l'intérieur, la villa offre de **hauts plafonds**, des **poutres en bois** et un mobilier **rustique** et chaleureux. La **terrasse** extérieure est idéale pour dîner, et une **piscine** scintillante invite à la détente lors des journées ensoleillées." },
      { languageCode: "it-IT", text: null },
      { languageCode: "en-GB", text: null },
      { languageCode: "es-ES", text: null }
    ],
    variableReferences: [...variableReferences]
  },
  render: (args, { argTypes }) => ({
    components: { FSTranslateRichTextField, FSCol },
    props: Object.keys(argTypes),
    setup() {
      return { args };
    },
    template: `
    <FSCol>
      <FSTranslateRichTextField
        @update:modelValue="args['onUpdate:modelValue']"
        v-model:translationsExpanded="args.translationsExpanded"
        v-model:modelValue="args.modelValue"
        v-model:translations="args.translations"
        v-bind="args"
      />
    </FSCol>`
  })
}