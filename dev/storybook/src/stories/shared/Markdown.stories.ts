import type { Meta, StoryObj } from '@storybook/vue3';
import { addComponentEmits } from '@/utils/properties';

import FSMarkdown from "@dative-gpi/foundation-shared-components/components/FSMarkdown.vue";

const meta: Meta<typeof FSMarkdown> = {
  title: 'Shared/Components/Markdown',
  component: FSMarkdown,
  tags: ['autodocs'],
  argTypes: {
    ...addComponentEmits(FSMarkdown),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const render: Story["render"] = (args) => ({
  components: { FSMarkdown },
  setup() {
    return { args };
  },
  template: `
    <FSMarkdown
      v-bind="args"
    />
  `,
});

export const Default: Story = {
  render,
  args: {
    content: [
      "# Title",
      "## Subtitle",
      "### Section",
      "",
      "Some **bold**, _italic_ and ~~strikethrough~~ text, with a variable: {{name}}.",
      "A line",
      "and the next one",
      "",
      "- A [link](https://www.dative-gpi.com/)",
      "- A plain URL: https://www.dative-gpi.com/",
      "  - A nested item",
      "",
      "1. First step",
      "2. Second step",
      "",
      "> A note, or a quote",
      "",
      "Some `inline code`, and a block:",
      "",
      "```",
      "const answer = 42;",
      "```",
      "",
      "| Column | Value |",
      "|---|---|",
      "| A | 1 |",
      "| B | 2 |",
      "",
      "---",
      "",
      "Raw HTML is escaped: <b>not bold</b>",
    ].join("\n"),
    variableValues: { name: "John" },
  },
};

export const Images: Story = {
  render,
  args: {
    content: "An image, hidden unless `showImages` is on:\n\n![Illustration](https://framerusercontent.com/images/yIHC5rcw1l2hbWpY4Vx3KxCsJw.jpg)",
    showImages: true,
  },
};
