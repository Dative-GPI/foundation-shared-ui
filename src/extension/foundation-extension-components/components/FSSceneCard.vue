<template>

  <FSCard
    width="184px"
    height="90px"
    :style="style"
    :class="{'fs-scene-card': true, 'fs-scene-card-clickable': !disabled && !selected}"
  >
    <FSCol
      align="center-center"
      gap="4px"
    >
      <FSRow
        align="center-center"
      >
        <FSIcon
          size="xl"
        >
          {{ $props.icon }}
        </FSIcon>
        <FSText
          font="text-button"
          class="fs-scene-card-title"
        >
          {{ $props.label }}
        </FSText>
      </FSRow>
      <FSRow
        v-if="$props.description"
        align="center-center"
      >
        <FSText
          font="text-overline"
          class="fs-scene-card-description"
        >
          {{ $props.description }}
        </FSText>
      </FSRow>
    </FSCol>
  </FSCard>    
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

import { ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";

export default defineComponent({
  name: "FSStatus",
  components: {
    FSIcon,
    FSCard,
    FSCol,
    FSText,
    FSRow,
    FSChip
},
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    selected: {
      type: Boolean,
      required: false,
      default: false
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    description: {
      type: String,
      required: false,
      default: null
    }
  },
  setup(props) {

    const colors = useColors().getColors(ColorEnum.Primary);
    const light = useColors().getColors(ColorEnum.Light);
    const dark = useColors().getColors(ColorEnum.Dark);

    const style = computed(() => {
      if(props.selected){
        if(props.disabled){
          return {
            "--fs-scene-card-background-color": light.base,
            "--fs-scene-card-icon-color": light.dark,
            "--fs-scene-card-border-color": light.dark,
            "--fs-scene-card-title-color": light.dark,
            "--fs-scene-card-description-color": light.dark
          }
        }else{
          return {
            "--fs-scene-card-background-color": colors.light,
            "--fs-scene-card-icon-color": colors.base,
            "--fs-scene-card-border-color": colors.base,
            "--fs-scene-card-title-color": colors.base,
            "--fs-scene-card-description-color": dark.dark
          }
        }
      }else{
        if(props.disabled){
          return {
            "--fs-scene-card-background-color": light.light,
            "--fs-scene-card-icon-color": light.base,
            "--fs-scene-card-border-color": light.base,
            "--fs-scene-card-title-color": light.base,
            "--fs-scene-card-description-color": light.base
          }
        }else{
          return {
            "--fs-scene-card-background-color": light.light,
            "--fs-scene-card-icon-color": colors.base,
            "--fs-scene-card-border-color": light.base,
            "--fs-scene-card-title-color": dark.dark,
            "--fs-scene-card-description-color": dark.dark
          }
        }
      }
    });


    return {
      style,
    };
  }
});
</script>