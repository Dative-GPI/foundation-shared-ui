import type { Meta, StoryObj } from '@storybook/vue3';

import FSEntityView from "@dative-gpi/foundation-shared-components/components/views/FSEntityView.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSVirtualCol from '@dative-gpi/foundation-shared-components/components/virtuals/FSVirtualCol.vue';
import FSFadeOut from '@dative-gpi/foundation-shared-components/components/FSFadeOut.vue';

import { addSubcomponentsArgTypes } from '@/utils/properties';
import FSButtonEdit from '@dative-gpi/foundation-shared-components/components/buttons/FSButtonEdit.vue';
import FSButtonRemove from '@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemove.vue';
import { ref } from 'vue';

const meta = {
  title: 'Foundation/Shared/Virtuals/Col',
  component: FSVirtualCol,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSCol], FSVirtualCol)
  },
} satisfies Meta<typeof FSVirtualCol>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10,
    height: 500,
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>
      <FSVirtualCol 
        v-bind="args"
      >
        <template #item="{ item }">
          <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
            <FSSpan>{{ item.name }}</FSSpan>
            <FSIcon>mdi-home</FSIcon>
          </FSRow>
        </template>
      </FSVirtualCol>
      `
  })
}


export const Fill: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10,
    height: "fill"
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow, FSCol },
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
          <FSVirtualCol 
            v-bind="args"
            style="min-height: 0px"
          >
            <template #item="{ item }">
              <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSRow>
            </template>
          </FSVirtualCol>
        </FSCol>
      </div>
      `
  })
}


export const Full: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <FSVirtualCol 
        v-bind="args"
      >
        <template #item="{ item }">
          <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
            <FSSpan>{{ item.name }}</FSSpan>
            <FSIcon>mdi-home</FSIcon>
          </FSRow>
        </template>
      </FSVirtualCol>
      `
  })
}


export const WorstCaseRenderViewPort: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualCol, FSFadeOut, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() {
      return { args }
    },
    inheritAttrs: false,
    template: `
      <FSFadeOut height="500px">
        <FSVirtualCol 
          v-bind="args"
        >
          <template #item="{ item }">
            <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
              <FSSpan>{{ item.name }}</FSSpan>
              <FSIcon>mdi-home</FSIcon>
            </FSRow>
          </template>
        </FSVirtualCol>
      </FSFadeOut>
      `
  })
}


export const FullEmbedded: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>

      <FSVirtualCol 
        v-bind="args"
      >
        <template #item="{ item }">
          <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
            <FSSpan>{{ item.name }}</FSSpan>
            <FSIcon>mdi-home</FSIcon>
          </FSRow>
        </template>
      </FSVirtualCol>

      <div style="height: 600px; background-color: white-smoke">
      </div>
      `
  })
}


export const FullView: Story = {
  args: {
    items: Array.from({ length: 25 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow, FSCol, FSEntityView, FSButtonEdit, FSButtonRemove },
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
          
          <FSVirtualCol 
            v-bind="args"
          >
            <template #item="{ item }">
              <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
                <FSSpan>{{ item.name }}</FSSpan>
                <FSIcon>mdi-home</FSIcon>
              </FSRow>
            </template>
          </FSVirtualCol>

          <FSCol height="600" style="background-color: lightgrey">
          </FSCol>
        </FSCol>
      </FSEntityView>
      `
  })
}



export const Nested: Story = {
  args: {
    items: Array.from({ length: 2500 }, (_, i) => ({
      id: i,
      name: `Item ${i}`,
      height: Math.random() > 0.5 ? 50 : 100,
    })),
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualCol, FSText, FSSpan, FSIcon, FSRow, FSCol, FSEntityView, FSFadeOut },
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
              
              <FSVirtualCol 
                v-bind="args"
              >
                <template #item="{ item }">
                  <FSRow :key="item.id" :height="item.height" width="100%" style="background-color: grey">
                    <FSSpan>{{ item.name }}</FSSpan>
                    <FSIcon>mdi-home</FSIcon>
                  </FSRow>
                </template>
              </FSVirtualCol>

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