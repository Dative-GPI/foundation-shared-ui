import type { Meta, StoryObj } from '@storybook/vue3';

import FSVirtualRow from '@dative-gpi/foundation-shared-components/components/virtuals/FSVirtualRow.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSSpan from '@dative-gpi/foundation-shared-components/components/FSSpan.vue';
import FSIcon from '@dative-gpi/foundation-shared-components/components/FSIcon.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSFadeOut from '@dative-gpi/foundation-shared-components/components/FSFadeOut.vue';
import FSEntityView from "@dative-gpi/foundation-shared-components/components/views/FSEntityView.vue";
import FSButtonEdit from '@dative-gpi/foundation-shared-components/components/buttons/FSButtonEdit.vue';
import FSButtonRemove from '@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemove.vue';

import { addSubcomponentsArgTypes } from '@/utils/properties';
import { ref } from 'vue';

const meta = {
  title: 'Foundation/Shared/Virtuals/Row',
  component: FSVirtualRow,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSRow], FSVirtualRow)
  },
} satisfies Meta<typeof FSVirtualRow>;

export default meta;
type Story = StoryObj<typeof meta>;

/** items générés avec `width` aléatoire */
const makeItems = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
    width: Math.random() > 0.5 ? 150 : 200,
  }));

export const Default: Story = {
  args: {
    items: makeItems(12),
    gap: 10,
    width: 600,
    height: 300
  },
  render: (args) => ({
    components: { FSVirtualRow, FSSpan, FSIcon, FSCol, FSRow },
    setup() { return { args }; },
    template: `
      <div>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
        <FSRow gap="0">
          <FSCol height="fill" style="background-color: lightgrey;">
          </FSCol>
          <FSVirtualRow v-bind="args">
            <template #item="{ item }">
              <FSCol
                :key="item.id"
                :width="item.width"
                height="100%"
                style="background-color: grey;"
              >
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSCol>
            </template>
          </FSVirtualRow>
          <FSCol height="fill" style="background-color: lightgrey;">
          </FSCol>
        </FSRow>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
      </div>
    `,
  }),
};

export const Fill: Story = {
  args: {
    items: makeItems(25),
    gap: 10,
    width: 'fill',
    height: 300
  },
  render: (args) => ({
    components: { FSVirtualRow, FSSpan, FSIcon, FSCol, FSRow },
    setup() { return { args }; },
    template: `
      <div>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
        <FSRow gap="0" :wrap="false">
          <FSCol width="100" height="fill" style="background-color: lightgrey;">
          </FSCol>
          <FSVirtualRow v-bind="args" style="min-width: 0">
            <template #item="{ item }">
              <FSCol
                :key="item.id"
                :width="item.width"
                height="100%"
                style="background-color: grey;"
              >
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSCol>
            </template>
          </FSVirtualRow>
          <FSCol width="100" height="fill" style="background-color: lightgrey;">
          </FSCol>
        </FSRow>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
      </div>
    `,
  }),
};

export const Full: Story = {
  args: {
    items: makeItems(25),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualRow, FSSpan, FSIcon, FSCol, FSFadeOut },
    setup() { return { args }; },
    template: `
      <FSFadeOut 
        height="300"
        :hideHorizontalOverflow="false"
        :hideVerticalOverflow="true"
        :scrollOutside="false"
        width="100%"
      >
        <FSVirtualRow v-bind="args" style="min-width: fit-content" height="100%">
          <template #item="{ item }">
            <FSCol
              :key="item.id"
              :width="item.width"
              height="100%"
              style="background-color: grey;"
            >
              <FSSpan>{{ item.name }}</FSSpan>
              <FSIcon>mdi-home</FSIcon>
            </FSCol>
          </template>
        </FSVirtualRow>
      </FSFadeOut>
    `,
  }),
};


export const FullView: Story = {
  args: {
    items: makeItems(25),
    gap: 10
  },
  render: (args) => ({
    components: {
      FSVirtualRow, FSCol, FSRow, FSEntityView,
      FSButtonEdit, FSButtonRemove, FSSpan, FSIcon, FSFadeOut
    },
    setup() {
      const show1 = ref(true);
      const show2 = ref(true);
      return { args, show1, show2 };
    },
    template: `
      <FSEntityView
        title="Mizard"
        subtitle="8214485222"
        description="Description sur une ligne"
        imageId="1"
        :imageCover="true"
      >
        <template #toolbar>
          <FSButtonEdit  @click="show1 = !show1" />
          <FSButtonRemove @click="show2 = !show2" />
        </template>

        <FSFadeOut 
          height="300" 
          :hideHorizontalOverflow="false"
          :hideVerticalOverflow="true"
          :scrollOutside="false"
          width="100%"
        >
          <FSRow gap="32px" :wrap="false" width="hug" style="min-width: fit-content">
            <FSCol v-if="show1" width="600" height="fill" style="background-color: lightgrey;" />
            <FSCol v-if="show2" width="200" height="fill" style="background-color: lightgrey;" />

            <FSVirtualRow v-bind="args" height="300" style="min-width: fit-content">
              <template #item="{ item }">
                <FSCol
                  :key="item.id"
                  :width="item.width"
                  height="100%"
                  style="background-color: grey;"
                >
                  <FSSpan>{{ item.name }}</FSSpan>
                  <FSIcon>mdi-home</FSIcon>
                </FSCol>
              </template>
            </FSVirtualRow>

            <FSCol width="600" height="fill" style="background-color: lightgrey;" />
          </FSRow>
        </FSFadeOut>
      </FSEntityView>
    `,
  }),
};

export const Nested: Story = {
  args: {
    items: makeItems(2500),
    gap: 10
  },
  render: (args) => ({
    components: {
      FSVirtualRow, FSCol, FSFadeOut, FSEntityView,
      FSButtonEdit, FSButtonRemove, FSSpan, FSIcon, FSRow
    },
    setup() { return { args }; },
    template: `
      <FSEntityView
        title="Mizard"
        subtitle="8214485222"
        description="Description sur une ligne"
        imageId="1"
        :imageCover="true"
      >
        <template #toolbar>
          <FSButtonEdit  />
          <FSButtonRemove />
        </template>

        <FSCol gap="32px">
          <FSCol height="600" style="background-color: lightgrey;" />

          <FSFadeOut 
            height="300" 
            :hideHorizontalOverflow="false"
            :hideVerticalOverflow="true"
            :scrollOutside="false"
            width="100%"
          >
            <FSRow gap="32px" width="hug" height="100%" style="min-height: 0; max-width: none; min-width: fit-content" :wrap="false">
              <FSCol height="fill" width="800" style="background-color: red;" />

              <FSVirtualRow v-bind="args" height="100%" width="2600" :scrollOutside="false">
                <template #item="{ item }">
                  <FSCol
                    :key="item.id"
                    :width="item.width"
                    height="100%"
                    style="background-color: grey;"
                  >
                    <FSSpan>{{ item.name }}</FSSpan>
                    <FSIcon>mdi-home</FSIcon>
                  </FSCol>
                </template>
              </FSVirtualRow>

              <FSCol height="fill" width="800" style="background-color: red;" />
          </FSFadeOut>

          <FSCol height="600" style="background-color: lightgrey;" />
        </FSCol>
      </FSEntityView>
    `,
  }),
};
