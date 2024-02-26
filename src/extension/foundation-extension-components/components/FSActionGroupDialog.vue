<template>

  <FSDialog
    cardClasses="fs-submit-dialog"
    color="light"
  >
  <FSCard>
  <FSCol
  :gap="16"
  :padding="10"
  >
    <FSRow>
      <FSCol v-if="$props.label">
        <FSSpan font="text-h2">
          {{ $props.label }}
        </FSSpan>
      </FSCol>
      <v-spacer />
      <FSButton
        variant="icon"
        icon="mdi-close"
        color="dark"
        @click="$emit('update:modelValue', false)"
      />
    </FSRow>
    <FSRow
      align="left-center"
    >
      <FSSpan
        v-if="$props.label"
        font="text-overline"
      >
        {{ $tr('ui.action-group-dialog.status-title', 'Status') }}
      </FSSpan>
      <FSSlideGroup
        style="width: 100%;"
      >
        <FSStatusCardScene
          v-for="status in $props.status"
          :status="status"
          :targetMode="false"
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
        {{ $tr('ui.action-group-dialog.target-title', 'Target') }}
      </FSSpan>
      <FSSlideGroup
        style="width: 100%;"
      >
        <FSStatusCardScene
          v-for="status in $props.status"
          :status="status"
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
        {{ $tr('ui.action-group-dialog.scene-title', 'Scenes') }}
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
          @click="onSceneClicked(scene)"
        />
      </FSSlideGroup>
    </FSRow>
  </FSCol>
  </FSCard>
  </FSDialog>    
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";

import FSDialog from "@dative-gpi/foundation-shared-components/components/FSDialog.vue";
import FSText from "@dative-gpi/foundation-shared-components/components/FSText.vue";
import FSCol from "@dative-gpi/foundation-shared-components/components/FSCol.vue";
import FSRow from "@dative-gpi/foundation-shared-components/components/FSRow.vue";
import FSSlideGroup from "@dative-gpi/foundation-shared-components/components/FSSlideGroup.vue";
import FSDivider from "@dative-gpi/foundation-shared-components/components/FSDivider.vue";
import FSButton from "@dative-gpi/foundation-shared-components/components/FSButton.vue";
import FSChip from "@dative-gpi/foundation-shared-components/components/FSChip.vue";
import FSSpan from "@dative-gpi/foundation-shared-components/components/FSSpan.vue";
import FSBadge from "@dative-gpi/foundation-shared-components/components/FSBadge.vue";
import FSCard from "@dative-gpi/foundation-shared-components/components/FSCard.vue";

import FSStatusCardScene from "./FSStatusCardScene.vue";
import FSSceneCard from "./FSSceneCard.vue";
import { FSModelStatus } from "../../../shared/foundation-shared-components/models";
import { SceneInfos } from "../../../core/foundation-core-domain/models/scene/sceneInfos";


export default defineComponent({
  name: "FSStatus",
  components: {
    FSDialog,
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
    FSBadge,
    FSCard
},
  props: {
    label: {
      type: String,
      required: true
    },
    status: {
      type: Array as PropType<FSModelStatus[]>,
      required: false,
      default: null
    },
    scenes: {
      type: Array as PropType<SceneInfos[]>,
      required: false,
      default: null
    },
    selectedScene: {
      type: Object as PropType<SceneInfos>,
      required: false,
      default: null
    }
  },
  setup(props) {
    let selectedScene = ref(props.selectedScene);

    const onSceneClicked = (scene): void => {
      if(selectedScene.value === scene){
        selectedScene.value = null;
      }else{
        selectedScene.value = scene;
      }
    };


    return {
      selectedScene,
      onSceneClicked
    };
  }
});
</script>