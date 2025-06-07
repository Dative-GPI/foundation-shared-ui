import type { Meta, StoryObj } from '@storybook/vue3';

import FSVirtualGrid from '@dative-gpi/foundation-shared-components/components/virtuals/FSVirtualGrid.vue';
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
  title: 'Foundation/Shared/Virtuals/Grid',
  component: FSVirtualGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof FSVirtualGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

interface Column {
  text?: string | null;
  value?: string | null;
  index: number;
  hidden: boolean;
  width?: string | number | null;
  grow?: boolean | null;

  sortable?: boolean | null;
  sort?: ((a: any, b: any) => number) | null;
  sortRaw?: ((a: any, b: any) => number) | null;

  filterable?: boolean | null;
  fixedFilters?: { value: any, text: string }[] | null;
  methodFilter?: ((value: any, property: any) => boolean) | null;
  methodFilterRaw?: ((value: any, item: any) => boolean) | null;
  filter?: ((value: any, search: string, item: any) => boolean) | null;
}

const table = {
  id: "18",
  code: "devicesExplorer1",
  mode: "table",
  rowsPerPage: 10,
  columns: [{
    text: "Label",
    value: "label",
    width: 200,
    index: 0,
    grow: true,
    hidden: false,
    sortable: true,
    filterable: true
  }, {
    text: "Code",
    value: "code",
    index: 1,
    width: 100,
    grow: true,
    hidden: false,
    sortable: true,
    filterable: true
  }, {
    text: "Type",
    value: "type",
    index: 2,
    hidden: false,
    sortable: true,
    filterable: true
  }, {
    text: "Icon",
    value: "icon",
    index: 3,
    width: 50,
    hidden: false,
    sortable: false,
    filterable: false
  }, {
    text: "Image",
    value: "imageId",
    index: 4,
    hidden: false,
    sortable: false,
    filterable: false
  }, {
    text: "Connectivity",
    value: "connectivity",
    index: 5,
    hidden: false,
    sortable: true,
    filterable: true
  }, {
    text: "Alerts",
    value: "alerts",
    index: 6,
    hidden: false,
    sortable: false,
    filterable: true
  }, {
    text: "Status",
    value: "status",
    index: 7,
    hidden: false,
    sortable: false,
    filterable: true
  }] satisfies Column[],
  sortByKey: null,
  sortByOrder: null
}

const makeItems = (n: number) =>
  Array.from({ length: n }, (_, i) => ({
    id: i,
    label: `Item ${i + 1}`,
    code: `item-${i + 1}`,
    type: i % 2 === 0 ? 'Type A' : 'Type B',
    icon: i % 2 === 0 ? 'icon-a' : 'icon-b',
    imageId: i % 2 === 0 ? 'image-a.png' : 'image-b.png',
    connectivity: i % 2 === 0 ? 'Online' : 'Offline',
    alerts: i % 3 === 0 ? 'Alert' : '',
    status: i % 2 === 0 ? 'Active' : 'Inactive'
  }));

export const Default: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSText, FSSpan, FSIcon, FSRow },
    setup() { return { args }; },
    inheritAttrs: false,
    template: `
        <FSVirtualGrid v-bind="args" height="400">
          <template #cell="{ item, row, col }">
            <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
          </template>
        </FSVirtualGrid>
    `
  })
}

export const Fill: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10,
    height: "fill"
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() { return { args }; },
    inheritAttrs: false,
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>
      <div style="height: 600px">
        <FSCol 
          height="600px"
        >
          <FSVirtualGrid v-bind="args"
            style="min-height: 0px">
            <template #cell="{ item, row, col }">
              <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
            </template>
          </FSVirtualGrid>
        </FSCol>
      </div>
    `
  })
}


export const Full: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10,
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() { return { args }; },
    inheritAttrs: false,
    template: `
      <FSVirtualGrid v-bind="args" style="margin-bottom: 20px">
        <template #cell="{ item, row, col }">
          <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
        </template>
      </FSVirtualGrid>
    `
  })
}


export const WorstCaseRenderViewPort: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10,
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSFadeOut, FSText, FSSpan, FSIcon, FSRow, FSCol },
    setup() {
      return { args }
    },
    inheritAttrs: false,
    template: `
      <FSFadeOut height="500px">
        <FSVirtualGrid 
          v-bind="args"
        >
          <template #cell="{ item, row, col }">
            <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
          </template>
        </FSVirtualGrid>
      </FSFadeOut>
      `
  })
}


export const FullEmbedded: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10,
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSText, FSSpan, FSIcon, FSRow },
    setup() {
      return { args }
    },
    template: `
      <div style="height: 600px; background-color: white-smoke">
      </div>

      <FSVirtualGrid 
        v-bind="args"
      >
        <template #cell="{ item, row, col }">
          <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
        </template>
      </FSVirtualGrid>

      <div style="height: 2000px; background-color: white-smoke">
      </div>
      `
  })
}


export const FullView: Story = {
  args: {
    items: makeItems(1000),
    columns: table.columns,
    rowHeight: 40,
    gap: 10,
    topOffset: 153,
  },
  render: (args) => ({
    components: { FSVirtualGrid, FSText, FSSpan, FSIcon, FSRow, FSCol, FSEntityView, FSButtonEdit, FSButtonRemove },
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
          
          <FSVirtualGrid 
            v-bind="args"
          >
            <template #cell="{ item, row, col }">
              <FSSpan>{{ item.label }}<br/>(r{{ row }},c{{ col }})</FSSpan>
            </template>
          </FSVirtualGrid>

          <FSCol height="2000" style="background-color: lightgrey">
          </FSCol>
        </FSCol>
      </FSEntityView>
      `
  })
}

