<template>
  <template
    v-if="$props.loading"
  >
    <FSCol>
      <FSLoader
        v-if="$props.loading"
        width="100%"
        :height="['40px', '36px']"
      />
    </FSCol>
  </template>
  <template
    v-else
  >
    <v-treeview
      :itemTitle="$props.itemTitle"
      :itemValue="$props.itemValue"
      :items="treeItems"
    >
      <template
        v-for="(_, name) in $slots"
        v-slot:[name]="slotData"
      >
        <slot
          :name="name"
          v-bind="slotData"
        />
      </template>
    </v-treeview>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";
import { VTreeview } from "vuetify/labs/VTreeview";


import FSLoader from "./FSLoader.vue";
import FSCol from "./FSCol.vue";

export default defineComponent({
  name: "FSTreeView",
  components: {
    VTreeview,
    FSLoader,
    FSCol,
  },
  props: {
    items: {
      type: Array as PropType<any[]>,
      required: true
    },
    itemValue: {
      type: String,
      required: false,
      default: "id"
    },
    itemTitle: {
      type: String,
      required: false,
      default: "label"
    },
    itemParent: {
      type: String,
      required: false,
      default: "parentId"
    },
    exclude: {
      type: Array as PropType<string[]>,
      required: false,
      default: () => []
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(props) {
    const treeItems = computed((): any[] => {
      const filter = ((parentId: string | null) => {
        return props.items.filter((item: any) => {
          if (props.exclude.includes(item[props.itemValue])) {
            return false;
          }
          return item[props.itemParent] == parentId;
        });
      });
      const process = ((item: any): any => {
        if (props.items.some((child: any) => child[props.itemParent] === item[props.itemValue])) {
          return {
            ...item,
            children: filter(item[props.itemValue]).map(process)
          };
        }
        return item;
      });
      return filter(null).map(process);
    });

    return {
      treeItems
    };
  }
});
</script>