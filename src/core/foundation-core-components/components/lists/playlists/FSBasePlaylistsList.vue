<template>
  <FSCol>
    <FSSearchField
      v-model="search"
    />
    <FSFadeOut
      :maxHeight="$props.maxHeight"
    >
      <FSDataTable
        defaultMode="iterator"
        :loading="fetchingPlaylists"
        :items="playlists"
        :showSearch="false"
        :modelValue="$props.modelValue"
        :disableTable="true"
        :search="search"
        :tableCode="$props.tableCode"
        @update:modelValue="$emit('update:modelValue', $event)"
        v-bind="$attrs"
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
        <template
          #item.tile="{ item }"
        >
          <FSClickable
            padding="12px"
            height="60px"
            width="216px"
            :color="isSelected(item.id) ? ColorEnum.Primary : ColorEnum.Dark"
            @click="$emit('update:modelValue', [item.id])"
            v-bind="$attrs"
          >
            <template
              #default
            >
              <FSRow
                align="center-center"
                gap="24px"
                :wrap="false"
              >
                <FSSpan
                  font="text-overline"
                  :lineClamp="1"
                >
                  {{ item.label }}
                </FSSpan>
                <FSButton
                  variant="icon"
                  icon="mdi-trash-can-outline"
                  :color="ColorEnum.Error"
                  @click="dialog = true"
                />
              </FSRow>
            </template>
          </FSClickable>
          <FSDialogRemove
            :removing="removingPlaylist"
            :error="error"
            :removeTotal="1"
            :removeCurrent="0"
            @click:submitButton="onRemove(item.id)"
            v-model="dialog"
          />
        </template>
      </FSDataTable>
    </FSFadeOut>
  </FSCol>
</template>

<script lang="ts">
import { defineComponent, type PropType, ref, watch } from "vue";

import type { PlaylistFilters } from "@dative-gpi/foundation-core-domain/models";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { usePlaylists, useRemovePlaylist } from "@dative-gpi/foundation-core-services/composables";

import FSSearchField from "@dative-gpi/foundation-shared-components/components/fields/FSSearchField.vue";
import FSDialogRemove from "@dative-gpi/foundation-shared-components/components/FSDialogRemove.vue";
import FSClickable from "@dative-gpi/foundation-shared-components/components/FSClickable.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSDataTable from "../FSDataTable.vue";

export default defineComponent({
  name: "BasePlaylistsList",
  components:{
    FSDialogRemove,
    FSSearchField, 
    FSDataTable,
    FSClickable,
    FSFadeOut,
    FSButton,
    FSSpan,
    FSCol,
    FSRow
  },
  props: {
    playlistFilters: {
      type: Object as PropType<PlaylistFilters>,
      required: false,
      default: null
    },
    modelValue: {
      type: Array as PropType<string[]>,
      default: () => [],
      required: false
    },
    tableCode: {
      type: String,
      required: false
    },
    maxHeight: {
      type: [Array, String, Number] as PropType<string[] | number[] | string | number | null | undefined>,
      required: false,
      default: undefined
    }
  },
  emits: ["update:modelValue"],
  setup(props) {
    const { getMany: fetchPlaylists, fetching: fetchingPlaylists, entities: playlists } = usePlaylists();
    const { removing: removingPlaylist, remove: removePlaylist } = useRemovePlaylist();
    const search = ref<string | undefined>();
    const error = ref<string | null>(null);
    const dialog = ref(false);

    const isSelected = (id: string): boolean => {
      return props.modelValue.includes(id);
    };

    const onRemove = async (playlistId: string) => {
      if(!playlistId){
        return;
      }
      try {
        error.value = null;
        await removePlaylist(playlistId);
        dialog.value = false;
      }
      catch (exception: any) {
        error.value = exception.response.data;
      }
    };

    watch([() => props.playlistFilters, search] , () => {
      fetchPlaylists({...props.playlistFilters, search: search.value});
    }, { immediate: true, deep: true });

    return {
      fetchingPlaylists,
      removingPlaylist,
      playlists,
      ColorEnum,
      search,
      dialog,
      error,
      isSelected,
      onRemove
    }
  }
});
</script>
