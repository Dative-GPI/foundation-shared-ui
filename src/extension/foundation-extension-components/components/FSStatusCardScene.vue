<template>
   <v-menu
    :closeOnContentClick="false"
    v-model="menu"
  >
  <template #activator="{ props }">
    <FSCard
      height="90px"
      class="fs-status-card-scene"
      :style="style"
      v-bind="props"
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
            :color="iconColor"
            class="fs-status-card-scene-icon"
          >
            {{ $props.status.icon }}
          </FSIcon>
          <FSText
            font="text-button"
          >
            {{ ($props.status.value + " " + ($props.status.unit ?? "")) }}
          </FSText>
        </FSRow>
        <FSRow
          align="center-center"
        >
          <FSText
            font="text-overline"
            class="fs-status-card-scene-label"
          >
            {{ $props.status.label }}
          </FSText>
        </FSRow>
        <FSRow v-if="$props.sceneTarget" align="center-center" >
          <FSChip
            :color="style['--fs-status-card-scene-coloricon']"
            :label="($tr('ui.status-card-scene.target', 'Target') + ' ' + $props.sceneTarget.label)"
          >
          </FSChip>
        </FSRow>
      </FSCol>
      <FSIcon
        v-if="$props.sceneTarget && $props.sceneTarget.value!==null && $props.sceneTarget.value !== $props.status.value"
        size="l"
        :color="style['--fs-status-card-scene-coloricon']"
        class="fs-status-card-scene-alert"
      >
        mdi-alert-circle-outline
      </FSIcon>
    </FSCard>
  </template>
  <FSCard
      :elevation="true"
      :border="false"
    >
      <FSCol
        align="center-center"
        padding="6px 24px"
      >
        <FSCol
          align="center-center"
          gap="12px"
        >
          <FSChip
            :color="$props.status.color"
            :prependIcon="$props.status.icon"
            :label="$props.status.label"
          />
          <FSRow
            width="hug"
          >
            <FSText>
              {{ $props.status.value }}
            </FSText>
          </FSRow>
        </FSCol>
        <FSRow
          v-if="$props.status.sourceTimestamp"
          width="hug"
        >
          <FSSpan
            font="text-overline"
          >
            {{ $props.status.sourceTimestamp }}
          </FSSpan>
        </FSRow>
      </FSCol>
    </FSCard>
  </v-menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";


import { ColorBase, ColorEnum } from "@dative-gpi/foundation-shared-components/models";
import { useColors } from "@dative-gpi/foundation-shared-components/composables";

import FSIcon from "@dative-gpi/foundation-shared-components/components/FSIcon.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import { DeviceStatusGroup } from "@dative-gpi/foundation-core-domain";

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
    status: {
      type: DeviceStatusGroup,
      required: true
    },
    sceneTarget: {
      type: Object,
      required: false,
      default: null
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    targetMode: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  setup(props) {

    const errors = useColors().getColors(ColorEnum.Error);
    const success = useColors().getColors(ColorEnum.Success);
    const dark = useColors().getColors(ColorEnum.Dark);
    const lights = useColors().getColors(ColorEnum.Light);
    
    const menu = ref(false);

    const iconColor = computed(() => {
      if(props.sceneTarget){
        if(props.disabled){
          return lights.dark;
        }else if(props.sceneTarget.value === props.status.value){
          return success.base;
        }else{
          return errors.base;
        }
      }else{
        if(props.disabled){
          return lights.dark;
        }else if(props.targetMode){
          return dark.light;
        }
        return props.status.color;
      }
    });
    
    
    const style = computed((): {[code: string]: string} & Partial<CSSStyleDeclaration> => {
      if (props.targetMode) {
        if(props.disabled){
          return {
            "--fs-status-card-scene-color": lights.base,
            "--fs-status-card-scene-colorborder": lights.base,
            "--fs-status-card-scene-colorfont": lights.dark,
            "--fs-status-card-scene-coloricon": lights.dark,
          };
        }else if(!props.sceneTarget){
          return {
            "--fs-status-card-scene-color": lights.base,
            "--fs-status-card-scene-colorborder": dark.light,
            "--fs-status-card-scene-colorfont": dark.light,
            "--fs-status-card-scene-coloricon": dark.light,
          };
        }else if(props.sceneTarget.value === props.status.value){
          return {
            "--fs-status-card-scene-color": success.light,
            "--fs-status-card-scene-colorborder": success.base,
            "--fs-status-card-scene-coloricon": success.base,
          };
        }else{
          return {
            "--fs-status-card-scene-color": errors.light,
            "--fs-status-card-scene-colorborder": errors.base,
            "--fs-status-card-scene-coloricon": errors.base,
          };
        }
      }else{
        if(props.disabled){
          return {
            "--fs-status-card-scene-color": lights.light,
            "--fs-status-card-scene-colorborder": lights.dark,
            "--fs-status-card-scene-colorfont": lights.dark,
            "--fs-status-card-scene-coloricon": lights.dark,
          };
        }
        return {
          "--fs-status-card-scene-color": lights.light,
          "--fs-status-card-scene-colorborder": lights.dark,
          "--fs-status-card-scene-coloricon": dark.dark,
        };
      }
    });

    return {
      style,
      iconColor,
      menu
    };
  }
});
</script>