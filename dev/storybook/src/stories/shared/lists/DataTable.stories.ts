import type { Meta, StoryObj } from '@storybook/vue3';

import { VDataTable } from 'vuetify/components';
import FSStatusesCarousel from '@dative-gpi/foundation-shared-components/components/deviceOrganisations/FSStatusesCarousel.vue';
import FSDataTableUI from "@dative-gpi/foundation-shared-components/components/lists/FSDataTableUI.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import { addComponentEmits, addSubcomponentsArgTypes } from '@/utils/properties';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';

const meta = {
  title: 'Foundation/Shared/Lists/DataTable',
  component: FSDataTableUI,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([VDataTable], FSDataTableUI),
    ...addComponentEmits(FSDataTableUI)
  },
} satisfies Meta<typeof FSDataTableUI>;

export default meta;
type Story = StoryObj<typeof meta>;

const headers1 = [{
  text: "Column 1 - sortable",
  value: "column1",
  index: 0,
  hidden: false,
  width: "100px",
  sortable: true,
  filterable: true
}, {
  text: "Column 2",
  value: "column2",
  index: 1,
  hidden: false,
  width: "80px"
}, {
  text: "Column 3",
  value: "column3",
  index: 2,
  hidden: false,
  width: "120px",
  sortable: true,
  filterable: true
}];

const items1 = Array.from(Array(80).keys()).map((i) => ({
  id: i.toString(),
  column1: `Row ${i % 3} - Column 1`,
  column2: `Row ${i + 1} - Column 2`,
  column3: { text: `Row ${i + 1} - Column 3`, value: i + 1 },
  column4: i < 9 ? 1704067200000 : i < 13 ? 1704153600000 : i < 27 ? 1704240000000 : i < 36 ? 1704326400000 : i < 45 ? 1704412800000 : i < 54 ? 1704499200000 : i < 63 ? 1704585600000 : 1704672000000
}));

const items2 = Array.from(Array(25).keys()).map(i => ({
  id: i.toString(),
  column1: `${i}`,
  column2: `${i}${String.fromCharCode(65 + i)}`,
  column3: `${String.fromCharCode(65 + i)}`,
  column4: (i % 5 !== 0) ? `${i}${String.fromCharCode(65 + i)}` : null
}));

const headers2 = [{
  text: "Column 1 - sortable",
  value: "column1",
  index: 0,
  hidden: false,
  width: "100px",
  sortable: true,
  filterable: false
}, {
  text: "Column 2",
  value: "column2",
  index: 1,
  hidden: false,
  width: "80px",
  sortable: true,
  filterable: false
}, {
  text: "Column 3",
  value: "column3",
  index: 2,
  hidden: false,
  width: "120px",
  sortable: true,
  filterable: false
}, {
  text: "Column 4",
  value: "column4",
  index: 3,
  hidden: false,
  width: "120px",
  sortable: true,
  filterable: false
}];

const value1: any[] = [];
const groupBy = {
  key: "column4",
  order: "asc" as const
};
const clickRow = () => { console.log("clicked"); };
const itemTo = (item: any) => ({ name: 'device', params: { deviceId: item.id } });

export const GroupBy: Story = {
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    showSearch: false,
    disableIterator: true,
    groupBy: groupBy,
    sneakyHeaders: ['column1']
  },
  render: (args) => ({
    components: { FSDataTableUI },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />`
  })
};

export const SortDraggable: Story = {
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    sneakyHeaders: ['column1'],
    disableIterator: true,
    sortDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        :disableIterator="args.disableIterator"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :sortDraggable="args.sortDraggable"
        :gap="args.gap"
      />`
  })
};

export const IncludeDraggable: Story = {
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: false,
    showSearch: false,
    sneakyHeaders: ['column1'],
    includeDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
      />`
  })
};

export const SelectableIncludeSortDraggable: Story = {
  args: {
    headers: headers1,
    items: items1,
    modelValue: value1,
    selectable: true,
    sneakyHeaders: ['column1'],
    includeDraggable: true,
    sortDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      />`
  })
};

export const SingleSelectWithItemTo: Story = {
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    singleSelect: true,
    sneakyHeaders: ['column1'],
    includeDraggable: true,
    sortDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        :singleSelect="args.singleSelect"
        :sneakyHeaders="args.sneakyHeaders"
        :itemTo="args.disableItemTo ? null : args.itemTo"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      />`
  })
};

export const WithToolbarSlot: Story = {
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    includeDraggable: true,
    sortDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI, FSButton, FSRow },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #toolbar>
          <FSRow>
            <FSButton>Toolbar 1</FSButton>
            <FSButton>Toolbar button 2</FSButton>
            <FSButton>Toolbar button 3</FSButton>
            <FSButton>Toolbar button 4</FSButton>
            <FSButton>Toolbar button 5</FSButton>
            <FSButton>Toolbar button 6</FSButton>
          </FSRow>
        </template>
      </FSDataTableUI>`
  })
};

export const WithToolbarSlot2: Story = {
  args: {
    headers: headers2,
    items: items2,
    modelValue: value1,
    selectable: true,
    includeDraggable: true,
    sortDraggable: true
  },
  render: (args) => ({
    components: { FSDataTableUI, FSButton },
    setup() {
      return { args };
    },
    template: `
      <FSDataTableUI
        :selectable="args.selectable"
        :items="args.items"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
      >
        <template #append-toolbar>
          <FSButton>Toolbar 1</FSButton>
          <FSButton>Toolbar button 2</FSButton>
          <FSButton>Toolbar button 3</FSButton>
          <FSButton>Toolbar button 4</FSButton>
        </template>
      </FSDataTableUI>`
  })
};


export const DragAndDrop: Story = {
  args: {
    showSearch: false,
    selectable: true,
    singleSelect: false,
    disableIterator: false,
    disableTable: false,
    includeDraggable: false,
    sortDraggable: true,
    headers: [{
      text: "Label",
      value: "column1",
      index: 0,
      hidden: false,
      sortable: true,
      filterable: true,
      loading: false
    }],
    items: Array.from(Array(20).keys()).map((i) => ({
      id: i.toString(),
      column1: `Element ${i}`,
    })),
    modelValue: []
  },
  render: (args) => ({
    components: { FSDataTableUI },
    props: Object.keys(args),
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :disableTable="args.disableTable"
        :includeDraggable="args.includeDraggable"
        :sortDraggable="args.sortDraggable"
        :loading="args.loading"
        v-model:items="args.items"
        @click:row="args.clickRow"
        @update:items="(items) => console.log(items)"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      />
    </div>`
  })
};

export const Carousel: Story = {
  args: {
    headers: [{
      text: "Label",
      value: "column1",
      index: 0,
      hidden: false,
      sortable: true,
      filterable: true
    }, {
      text: "Carousel",
      value: "statuses",
      index: 1,
      hidden: false
    }, {
      text: "Other",
      value: "column2",
      index: 2,
      hidden: false
    }, {
      text: "Miscellaneous",
      value: "column3",
      index: 3,
      hidden: false
    }, {
      text: "Stuff",
      value: "column4",
      index: 4,
      hidden: false
    }, {
      text: "Other stuff",
      value: "column5",
      index: 5,
      hidden: false
    }, {
      text: "More stuff",
      value: "column6",
      index: 6,
      hidden: false
    }, {
      text: "Even more stuff",
      value: "column7",
      index: 7,
      hidden: false
    }, {
      text: "Last stuff",
      value: "column8",
      index: 8,
      hidden: false
    }],
    items: Array.from(Array(20).keys()).map((i) => ({
      id: i.toString(),
      column1: `Row ${i} - Column 1`,
      column2: `Row ${i} - Column 2`,
      column3: `Row ${i} - Column 3`,
      column4: `Row ${i} - Column 4`,
      column5: `Row ${i} - Column 5`,
      column6: `Row ${i} - Column 6`,
      column7: `Row ${i} - Column 7`,
      column8: `Row ${i} - Column 8`,
      modelStatuses: [{
        id: "1",
        modelId: "1",
        dataCategoryId: "1",
        dataCategoryLabel: "Category 1",
        dataDefinitionId: "1",
        dataDefinitionLabel: "Definition 1",
        label: "Status 1",
        index: 0,
        lifetime: 24 * 3600,
        timeToLive: 7 * 24 * 3600,
        showDefault: true,
        iconDefault: "mdi-power-standby",
        colorDefault: "#E3E3E3"
      }, {
        id: "2",
        modelId: "1",
        dataCategoryId: "1",
        dataCategoryLabel: "Category 1",
        dataDefinitionId: "2",
        dataDefinitionLabel: "Definition 2",
        label: "Status 2",
        index: 0,
        lifetime: 24 * 3600,
        timeToLive: 7 * 24 * 3600,
        showDefault: true,
        iconDefault: "mdi-thermometer-probe",
        colorDefault: "#E3E3E3"
      }],
      status: {
        id: "1",
        statuses: [{
          modelStatusId: "1",
          statusGroups: [{
            sourceTimestamp: (new Date()).toISOString(),
            enqueuedTimestamp: (new Date()).toISOString(),
            processedTimestamp: (new Date()).toISOString(),
            value: "On",
            label: "",
            icon: "mdi-power-standby",
            color: "#33FF33"
          }]
        }, {
          modelStatusId: "2",
          statusGroups: Array.from(Array(5).keys()).map((i) => ({
            sourceTimestamp: (new Date()).toISOString(),
            enqueuedTimestamp: (new Date()).toISOString(),
            processedTimestamp: (new Date()).toISOString(),
            groupByValue: (i + 1).toString(),
            value: (i * 100).toString(),
            label: "",
            icon: "mdi-thermometer-probe",
            color: "#33FF33"
          }))
        }]
      }
    })),
    modelValue: [],
    selectable: true,
    showSearch: false,
    disableIterator: true,
    sneakyHeaders: ['column1']
  },
  render: (args) => ({
    components: { FSDataTableUI, FSStatusesCarousel },
    setup() {
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSDataTableUI
        :selectable="args.selectable"
        :showSearch="args.showSearch"
        :disableIterator="args.disableIterator"
        :items="args.items"
        :groupBy="args.groupBy"
        :sneakyHeaders="args.sneakyHeaders"
        @click:row="args.onClickRow"
        v-model:headers="args.headers"
        v-model="args.modelValue"
      >
        <template #item.statuses="{ item }">
          <FSStatusesCarousel
            :modelStatuses="item.modelStatuses"
            :deviceStatuses="item.status.statuses"
          />
        </template>
      </FSDataTableUI>
    </div>`
  })
};