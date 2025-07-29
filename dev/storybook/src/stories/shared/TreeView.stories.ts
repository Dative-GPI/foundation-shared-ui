import type { Meta, StoryObj } from '@storybook/vue3';

import FSTreeView from "@dative-gpi/foundation-shared-components/components/FSTreeView.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";

const meta = {
  title: 'Foundation/Shared/TreeView',
  component: FSTreeView,
  tags: ['autodocs'],
  argTypes: {
  },
} satisfies Meta<typeof FSTreeView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Variations: Story = {
  args: {
    args: {
      items: [{
        id: 0,
        label: "Group 1",
        icon: "mdi-account"
      }, {
        id: 1,
        label: "Group 2"
      }, {
        id: 2,
        label: "Group 3"
      }, {
        id: 3,
        label: "Group 4",
        icon: "mdi-folder",
        parentId: 0
      }, {
        id: 4,
        label: "Group 5",
        parentId: 0
      }, {
        id: 5,
        label: "Group 6",
        parentId: 3
      }],
      value1: null,
      value2: ["0", "1", "2"],
      value3: "2",
      value4: "2"
    }
  },
  render: (args, { argTypes }) => ({
    components: { FSTreeView, FSCol, FSIcon },
    props: Object.keys(argTypes),
    setup() {
      return { ...args };
    },
    template: `
    <FSCol>
      <FSTreeView
        width="100%"
        :items="args.items"

      >
        <template
          #prepend="{ item }"
        >
          <FSIcon :icon="item.icon" />
        </template>
      </FSTreeView>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeView
        :items="args.items"
      />
    </FSCol>`
  })
}