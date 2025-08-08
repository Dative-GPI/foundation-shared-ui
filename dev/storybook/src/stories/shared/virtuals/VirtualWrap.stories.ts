import type { Meta, StoryObj } from '@storybook/vue3';

import FSVirtualWrap from '@dative-gpi/foundation-shared-components/components/virtuals/FSVirtualWrap.vue';
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
  title: 'Foundation/Shared/Virtuals/Wrap',
  component: FSVirtualWrap,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSRow], FSVirtualWrap)
  },
} satisfies Meta<typeof FSVirtualWrap>;

export default meta;
type Story = StoryObj<typeof meta>;

/** items générés avec `width` aléatoire */
const makeItems = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

export const Default: Story = {
  args: {
    items: makeItems(20),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90,
    height: 325,
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSSpan, FSIcon, FSCol, FSRow },
    setup() { return { args }; },
    template: `
      <div>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
        <FSRow gap="0">
          <FSCol height="fill" style="background-color: lightgrey;">
          </FSCol>
          <FSVirtualWrap v-bind="args">
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
          </FSVirtualWrap>
          <FSCol height="fill" style="background-color: lightgrey;">
          </FSCol>
        </FSRow>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
      </div>
    `,
  }),
};


export const TwoItems: Story = {
  args: {
    items: makeItems(2),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90,
    height: 325,
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSSpan, FSIcon, FSCol, FSRow },
    setup() { return { args }; },
    template: `
      <div>
        <div style="background-color: lightgrey; height: 100px;">
        </div>
        <FSRow gap="0">
          <FSCol height="fill" style="background-color: lightgrey;">
          </FSCol>
          <FSVirtualWrap v-bind="args">
            <template #item="{ item, width }">
              <FSCol
                :key="item.id"
                :width="width"
                height="100%"
                style="background-color: grey;"
              >
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSCol>
            </template>
          </FSVirtualWrap>
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
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90,
    height: "fill"
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() {
      return { args }
    },
    // première ligne div pour éviter que ça passe tous les args au premier enfant
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>
      <div style="height: 600px">
        <FSCol 
          height="600px"
        >
          <FSVirtualWrap
            v-bind="args"
            style="min-height: 0px"
          >
            <template #item="{ item, height, width }">
              <FSRow :key="item.id" :height="height" width="width" style="background-color: grey">
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSRow>
            </template>
          </FSVirtualWrap>
        </FSCol>
      </div>
      `
  })
}


export const Full: Story = {
  args: {
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <FSVirtualWrap 
        v-bind="args"
      >
        <template #item="{ item, height }">
          <FSRow :key="item.id" :height="height" width="100%" style="background-color: grey">
            <FSSpan>{{ item.name }}</FSSpan>
            <FSIcon>mdi-home</FSIcon>
          </FSRow>
        </template>
      </FSVirtualWrap>
      `
  })
}


export const WorstCaseRenderViewPort: Story = {
  args: {
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSFadeOut, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() {
      return { args }
    },
    inheritAttrs: false,
    template: `
      <FSFadeOut height="500px">
        <FSVirtualWrap 
          v-bind="args"
        >
          <template #item="{ item, height }">
            <FSRow :key="item.id" :height="height" width="100%" style="background-color: grey">
              <FSSpan>{{ item.name }}</FSSpan>
              <FSIcon>mdi-home</FSIcon>
            </FSRow>
          </template>
        </FSVirtualWrap>
      </FSFadeOut>
      `
  })
}


export const FullEmbedded: Story = {
  args: {
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>

      <FSVirtualWrap 
        v-bind="args"
      >
        <template #item="{ item, height }">
          <FSRow :key="item.id" :height="height" width="100%" style="background-color: grey">
            <FSSpan>{{ item.name }}</FSSpan>
            <FSIcon>mdi-home</FSIcon>
          </FSRow>
        </template>
      </FSVirtualWrap>

      <div style="height: 600px; background-color: white-smoke">
      </div>
      `
  })
}


export const FullView: Story = {
  args: {
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSText, FSSpan, FSIcon, FSRow, FSCol, FSEntityView, FSButtonEdit, FSButtonRemove },
    setup() {
      const show1 = ref(true);
      const show2 = ref(true);
      return { args, show1, show2 }
    },
    template: `
      <FSEntityView title="Mizard" subtitle="8214485222" description="Description sur une ligne" imageId="1" :imageCover="true">
        <template #toolbar>
          <FSButtonEdit @click="show1 = !show1" />
          <FSButtonRemove @click="show2 = !show2" />
        </template>

        <FSCol gap="32px">
          <FSCol v-if="show1" height="600" style="background-color: lightgrey">
          </FSCol>
          
          <FSCol v-if="show2" height="200" style="background-color: lightgrey">
          </FSCol>
          
          <FSVirtualWrap 
            v-bind="args"
          >
            <template #item="{ item, height }">
              <FSRow :key="item.id" :height="height" width="100%" style="background-color: grey">
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSRow>
            </template>
          </FSVirtualWrap>

          <FSCol height="600" style="background-color: lightgrey">
          </FSCol>
        </FSCol>
      </FSEntityView>
      `
  })
}



export const Nested: Story = {
  args: {
    items: makeItems(500),
    gap: 10,
    itemWidth: 150,
    itemHeight: 90
  },
  render: (args) => ({
    components: { FSVirtualWrap, FSText, FSSpan, FSIcon, FSRow, FSCol, FSEntityView, FSFadeOut },
    setup() {
      return { args }
    },
    template: `
      <FSEntityView title="Mizard" subtitle="8214485222" description="Description sur une ligne" imageId="1" :imageCover="true">
        <template #toolbar>
          <FSButtonEdit />
          <FSButtonRemove />
        </template>

        <FSCol gap="32px">
          <FSCol height="600" style="background-color: lightgrey">
          </FSCol>

          <FSFadeOut height="800">
            <FSCol gap="32px">
              <FSCol height="300" style="background-color: red">
              </FSCol>
              
              <FSVirtualWrap 
                v-bind="args"
              >
                <template #item="{ item, height }">
                  <FSRow :key="item.id" :height="height" width="100%" style="background-color: grey">
                    <FSSpan>{{ item.name }}</FSSpan>
                    <FSIcon>mdi-home</FSIcon>
                  </FSRow>
                </template>
              </FSVirtualWrap>

              <FSCol height="300" style="background-color: red">
              </FSCol>
            </FSCol>
          </FSFadeOut>

          <FSCol height="600" style="background-color: lightgrey">
          </FSCol>
        </FSCol>
      </FSEntityView>
      `
  })
}