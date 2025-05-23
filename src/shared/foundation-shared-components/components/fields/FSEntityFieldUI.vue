<template>
  <FSBaseField
    :description="$props.description"
    :hideHeader="$props.hideHeader"
    :required="$props.required"
    :disabled="$props.disabled"
    :label="$props.label"
    :messages="messages"
  >
    <FSCol
      gap="12px"
    >
      <FSRow
        :wrap="false"
      >
        <FSSelectField
          :disabled="$props.disabled"
          :items="actualEntityTypes"
          :hideHeader="true"
          :clearable="false"
          :modelValue="$props.entityType"
          @update:modelValue="$emit('update:entityType', $event)"
        />
        <template
          v-if="itemsCount > 0"
        >
          <FSButton
            icon="mdi-pencil"
            :label="$tr('ui.common.edit', 'Edit')"
            :disabled="$props.disabled"
            @click="$emit('click:select')"
          />
        </template>
        <template
          v-else
        >
          <FSButton
            icon="mdi-plus-circle-multiple-outline"
            :label="$tr('ui.common.select', 'Select')"
            :disabled="$props.disabled"
            @click="$emit('click:select')"
          />
        </template>
      </FSRow>
      <FSRow
        v-if="$props.showCount"
      >
        <template
          v-if="itemsCount > 0"
        >
          <FSColor
            :color="ColorEnum.Primary"
            :border="false"
            width="100%"
          >
            <FSRow
              padding="4px"
              align="center-center"
            >
              <FSIcon
                :icon="entityIcon"
              />
              <FSSpan
                font="text-overline"
              >
                {{ $tr('entity-field.selected', '{0} selected(s)', itemsCount) }}
              </FSSpan>
            </FSRow>
          </FSColor>
        </template>

        <template
          v-else
        >
          <FSColor
            :color="ColorEnum.Light"
            :border="false"
            width="100%"
          >
            <FSRow
              padding="4px"
              align="center-center"
            >
              <FSIcon
                :icon="entityIcon"
              />
              <FSSpan
                font="text-overline"
              >
                {{ $tr('entity-field.no-entity-selected', 'No entity selected') }}
              </FSSpan>
            </FSRow>
          </FSColor>
        </template>
      </FSRow>

      <FSFadeOut
        v-if="$props.showEntities && itemsCount > 0"
        :maxHeight="$props.listMaxHeight"
        width="100%"
      >
        <slot
          name="items"
        />
      </FSFadeOut>
    </FSCol>
  </FSBaseField>
</template>


<script lang="ts">
import { computed, defineComponent, type PropType } from "vue";

import { EntityType } from "@dative-gpi/foundation-shared-domain/enums";
import { ColorEnum } from "../../models";
import { useTranslations } from "@dative-gpi/bones-ui";

import FSRow from "../FSRow.vue";
import FSCol from "../FSCol.vue";
import FSBaseField from "./FSBaseField.vue";
import FSSelectField from "./FSSelectField.vue";
import FSButton from "../FSButton.vue";
import FSIcon from "../FSIcon.vue";
import FSColor from "../FSColor.vue";

export default defineComponent({
  name: "FSEntityFieldUI",
  components: {
    FSBaseField,
    FSSelectField,
    FSButton,
    FSIcon,
    FSColor,
    FSRow,
    FSCol
  },
  props: {
    label: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    description: {
      type: String as PropType<string | null>,
      required: false,
      default: null
    },
    itemsCount: {
      type: Number,
      required: false,
      default: 0
    },
    hideHeader: {
      type: Boolean,
      required: false,
      default: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    rules: {
      type: Array as PropType<any[]>,
      required: false,
      default: () => []
    },
    messages: {
      type: Array as PropType<string[]>,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    entityType: {
      type: Number as PropType<EntityType>,
      required: true
    },
    allowedEntityTypes: {
      type: Array as PropType<EntityType[]>,
      required: false,
      default: () => []
    },
    showEntities: {
      type: Boolean,
      required: false,
      default: true
    },
    showCount: {
      type: Boolean,
      required: false,
      default: true
    },
    listMaxHeight: {
      type: String as PropType<string | null>,
      required: false,
      default: "220px"
    }
  },
  emits: ["update:entityType", "click:select"],
  setup(props) {
    const { $tr } = useTranslations();

    const actualEntityTypes = computed(() => {
      const items = [
        {
          id: EntityType.Model,
          label: $tr("ui.common.models", "Model(s)")
        },
        {
          id: EntityType.Group,
          label: $tr("ui.common.groups", "Groups")
        },
        {
          id: EntityType.Location,
          label: $tr("ui.common.locations", "Locations")
        },
        {
          id: EntityType.Device,
          label: $tr("ui.common.devices", "Devices")
        },
        {
          id: EntityType.User,
          label: $tr("ui.common.users", "Users")
        },
        {
          id: EntityType.Dashboard,
          label: $tr("ui.common.dashboards", "Dashboards")
        },
        {
          id: EntityType.Folder,
          label: $tr("ui.common.folders", "Folders")
        }
      ];

      if(props.allowedEntityTypes.length) {
        return items.filter(item => props.allowedEntityTypes.includes(item.id));
      } else {
        return items;
      }
    });

    const entityIcon = computed(() => {
      switch(props.entityType) {
        case EntityType.Model:
          return "mdi-cube";
        case EntityType.Group:
          return "mdi-account-group";
        case EntityType.Location:
          return "mdi-map-marker";
        case EntityType.Device:
          return "mdi-cellphone";
        case EntityType.User:
          return "mdi-account";
        case EntityType.Dashboard:
          return "mdi-view-dashboard";
        case EntityType.Folder:
          return "mdi-folder";
        default:
          return "mdi-cube";
      }
    });

    return {
      ColorEnum,
      entityIcon,
      actualEntityTypes
    };
  }
});
</script>