<template>

  <FSCard
    width="100%"
  >
  <FSCol>
    <FSRow>
      <FSSpan
        v-if="$props.label"
        class="fs-calendar-label"
        font="text-h3"
      >
        {{ $props.label }}
      </FSSpan>
    </FSRow>
    <FSRow
      align="left-center"
    >
      <FSSpan
        v-if="$props.label"
        class="fs-calendar-label"
        font="text-overline"
      >
        {{ $tr('ui.action-group-card.status-title', 'Status') }}
      </FSSpan>
    </FSRow>
    <FSRow>
      <FSSlideGroup
        style="width: 100%;"
      >
        <FSStatusCardScene
          v-for="status in $props.status"
          :status="status"
          :disabled="$props.workInProgress"
          :targetMode="(selectedScene !== null)"
          :sceneTarget="(selectedScene !== null ? selectedScene.sceneTargets.filter((target) => {
            return target.deviceId === status.deviceId
          })[0] : null)"
        />
      </FSSlideGroup>
    </FSRow>
    <FSRow
      align="left-center"
    >
      <FSSpan
        v-if="$props.label"
        class="fs-calendar-label"
        font="text-overline"
      >
        {{ $tr('ui.action-group-card.scene-title', 'Scenes') }}
      </FSSpan>
    </FSRow>
    <FSRow>
      <FSSlideGroup
        style="width: 100%;"
      >
        <FSSceneCard
          v-for="scene in $props.scenes"
          :label="scene.label"
          :icon="scene.icon"
          :description="scene.description"
          :selected="(scene === selectedScene)"
          :disabled="$props.workInProgress"
          @click="onSceneClicked(scene)"
        />
      </FSSlideGroup>
    </FSRow>
    <FSDivider />
    <FSRow>
      <FSButton 
        prependIcon="mdi-home-automation"
        :label="$tr('ui.action-group-card.deffered-lauch','Deffered launch')"
        variant="full"
        :color="selectedScene?.color"
        style="flex: 1;"
        :editable="(selectedScene !== null && !$props.workInProgress)"
      />
      <FSButton 
        prependIcon="mdi-home-automation"
        :label="$tr('ui.action-group-card.scene-lauch','Launch now')"
        variant="full"
        :color="selectedScene?.color"
        style="flex: 1;"
        :editable="(selectedScene !== null && !$props.workInProgress)"
      />
    </FSRow>
  </FSCol>
  </FSCard>    
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";

import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSDivider from "@dative-gpi/foundation-shared-components/components/FSDivider.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";

import FSStatusCardScene from "./FSStatusCardScene.vue";
import FSSceneCard from "./FSSceneCard.vue";


export default defineComponent({
  name: "FSStatus",
  components: {
    FSCard,
    FSText,
    FSCol,
    FSRow,
    FSStatusCardScene,
    FSSceneCard,
    FSSlideGroup,
    FSDivider,
    FSButton
},
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    workInProgress: {
      type: Boolean,
      required: false,
      default: false
    },
    status: {
      type: Array,
      required: false,
      default: null
    },
    scenes: {
      type: Array,
      required: false,
      default: null
    },
    selectedScene: {
      type: Object,
      required: false,
      default: null
    }
  },
  setup(props) {
    let selectedScene = ref(props.selectedScene);

    const onSceneClicked = (scene): void => {
      if(!props.workInProgress){
        if(selectedScene.value === scene){
          selectedScene.value = null;
        }else{
          selectedScene.value = scene;
        }
      }

    };


    return {
      selectedScene,
      onSceneClicked
    };
  }
});
</script>