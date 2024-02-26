<template>

  <FSCard
    width="100%"
  >
  <FSCol
  :gap="16"
  :padding="10"
  >
    <FSRow>
      <FSCol>
        <FSSpan
          v-if="$props.label"
          class="fs-calendar-label"
          font="text-h3"
        >
          {{ $props.label }}
        </FSSpan>
      </FSCol>
      <FSCol
        align="center-right">
        <FSChip 
          v-if="$props.workInProgress"
          :label="$tr('ui.action-group-card.work-in-progress', 'Work in progress')"
          color="error"
        />
        <FSChip 
          v-if="!$props.workInProgress"
          :label="$tr('ui.action-group-card.see-all', 'See all')"
          color="primary"
          variant="standard"
          :editable="true"
        />
      </FSCol>
    </FSRow>
    <FSRow
      align="left-center"
    >
      <FSSpan
        v-if="$props.label"
        font="text-overline"
      >
        {{ $tr('ui.action-group-card.status-title', 'Status') }}
      </FSSpan>
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
        font="text-overline"
      >
        {{ $tr('ui.action-group-card.scene-title', 'Scenes') }}
      </FSSpan>
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
        variant="standard"
        :color="selectedScene?.color"
        style="flex: 1;"
        :editable="(selectedScene !== null && !$props.workInProgress)"
      >
        <template #append
          v-if="selectedScene !== null && selectedScene?.defferedCount > 0"
        >
          <FSBadge
            :color="($props.workInProgress ? 'grey' :  selectedScene.color)"
            :content="selectedScene?.defferedCount.toString()"
            :inline="true"
            :bordered="false"
          >
          </FSBadge>
        </template>
      </FSButton>
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
import { defineComponent, ref } from "vue";

import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSDivider from "@dative-gpi/foundation-shared-components/components/FSDivider.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSBadge from "@dative-gpi/foundation-shared-components/components/FSBadge.vue";

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
    FSButton,
    FSChip,
    FSSpan,
    FSBadge
},
  props: {
    label: {
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