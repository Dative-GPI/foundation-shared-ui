<template>
  <FSMenu
    :closeOnContentClick="false"
    v-model="expanded"
  >
    <template
      #activator="{ props }"
    >
      <FSChip
        prependIcon="mdi-filter-variant"
        class="fs-filter-button"
        variant="standard"
        :height="['30px', '24px']"
        :color="ColorEnum.Dark"
        :clickable="true"
        :label="label"
        v-bind="props"
      />
    </template>
    <FSCard
      class="fs-filter-button-menu"
      :elevation="true"
      :border="false"
    >
      <FSCol
        padding="20px"
        gap="12px"
      >
        <FSCol
          gap="12px"
        >
          <FSSpan
            font="text-overline"
          >
            {{ $tr("ui.common.filter", "Filter") }}
          </FSSpan>
          <FSChip
            class="fs-filter-button-chip"
            :label="$tr('ui.common.all-values', 'All values')"
            :height="['30px', '24px']"
            :variant="getAllVariant()"
            :color="$props.color"
            align="center-left"
            :clickable="true"
            @click="onToggleAll"
          />
          <FSDivider />
          <FSSearchField
            :hideHeader="true"
            class="fs-filter-button-search"
            v-model="search"
          />
        </FSCol>
        <FSFadeOut
          maxHeight="360px"
        >
          <FSCol
            gap="6px"
          >
            <FSChip
              v-for="(filter, index) in searchedFilters"
              class="fs-filter-button-chip"
              :variant="getVariant(filter)"
              :height="['30px', '24px']"
              :color="$props.color"
              :label="filter.text"
              align="center-left"
              :clickable="true"
              :border="false"
              :key="index"
              @click="() => onToggle(filter)"
            >
              <template
                #default
              >
                <slot
                  v-bind="{ filter }"
                />
              </template>
            </FSChip>
          </FSCol>
        </FSFadeOut>
      </FSCol>
    </FSCard>
  </FSMenu>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType, ref } from "vue";

import { type CardVariant, CardVariants, type ColorBase, ColorEnum, type FSDataTableColumn, type FSDataTableFilter } from "@dative-gpi/foundation-shared-components/models";
import { useTranslations as useTranslationsProvider } from "@dative-gpi/bones-ui/composables";

import FSSearchField from "../fields/FSSearchField.vue";
import FSFadeOut from "../FSFadeOut.vue";
import FSDivider from "../FSDivider.vue";
import FSCard from "../FSCard.vue";
import FSChip from "../FSChip.vue";
import FSSpan from "../FSSpan.vue";
import FSMenu from '../FSMenu.vue';
import FSCol from "../FSCol.vue";

export default defineComponent({
  name: "FSFilterButton",
  components: {
    FSSearchField,
    FSFadeOut,
    FSDivider,
    FSCard,
    FSChip,
    FSSpan,
    FSMenu,
    FSCol
  },
  props: {
    header: {
      type: Object as PropType<FSDataTableColumn>,
      required: true
    },
    filters: {
      type: Array as PropType<FSDataTableFilter[]>,
      required: false,
      default: () => []
    },
    color: {
      type: String as PropType<ColorBase>,
      required: false,
      default: ColorEnum.Primary
    }
  },
  emits: ["update:filter"],
  setup(props, { emit }) {
    const { $tr } = useTranslationsProvider();

    const singlePick = ref(false);
    const expanded = ref(false);
    const search = ref<string | null>(null);

    const label = computed((): string | null => {
      if (props.header.text) {
        if (props.filters) {
          const hidden = props.filters.filter(f => f.hidden).length;
          if (hidden > 0) {
            return $tr("filter-button.some-filters-visible", "{0}: {1} visible", props.header.text, (props.filters.length - hidden).toString());
          }
        }
        return $tr("filter-button.all-filters-visible", "{0}: All visible", props.header.text);
      }
      return null;
    });

    const searchedFilters = computed((): FSDataTableFilter[] => {
      if (search.value) {
        return props.filters.filter(f => (f.text + f.value).includes(search.value!));
      }
      return props.filters;
    });

    const getVariant = (filter: FSDataTableFilter): CardVariant => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        if (filter.hidden) {
          return CardVariants.Background;
        }
        return CardVariants.Full;
      }
      return CardVariants.Background;
    };

    const getAllVariant = (): CardVariant => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        return CardVariants.Background;
      }
      return CardVariants.Full;
    };

    const onToggle = (filter: FSDataTableFilter): void => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: f.value === filter.value ? !f.hidden : f.hidden })));
      }
      else {
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: f.value === filter.value ? false : true })));
      }
      singlePick.value = true;
    };

    const onToggleAll = (): void => {
      if (singlePick.value || props.filters.filter(f => f.hidden).length > 0) {
        singlePick.value = false;
        emit("update:filter", props.filters.map(f => ({ ...f, hidden: false })));
      }
      else {
        singlePick.value = true;
      }
    };

    return {
      searchedFilters,
      singlePick,
      ColorEnum,
      expanded,
      search,
      label,
      getAllVariant,
      onToggleAll,
      getVariant,
      onToggle
    };
  }
});
</script>