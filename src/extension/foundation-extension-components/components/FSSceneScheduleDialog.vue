<template>
  <FSSubmitDialog
    cardClasses="fs-submit-dialog"
    :title="$tr('ui.scene-schedule-dialog.title', 'Schedule scene activation')"
  >
    <template #body>
      <FSCol
        width="fill"
        gap="18px"
      >
        <FSRow>
          <FSCol>
            <FSRow>
              <FSSpan font="text-overline">
                {{ $tr('ui.scene-schedule-dialog.selected-scene', 'Selected scene') }}
              </FSSpan>
            </FSRow>
            <FSRow>
              <FSSceneCard
                :label="$props.scene.label"
                :icon="$props.scene.icon"
                :description="$props.scene.description"
                :selected="true"
              ></FSSceneCard>
            </FSRow>
          </FSCol>
        </FSRow>
        <FSRow>
          <FSCol>
            <FSRow>
              <FSSpan font="text-overline">
                {{ $tr('ui.scene-schedule-dialog.date-time-label', 'Select a deffered launch time') }}
              </FSSpan>
            </FSRow>
            <FSRow align="bottom-center">
              <FSDateTimeField
                :hideHeader="true"
                v-model="date"
              >
              </FSDateTimeField>
              <FSButton
                :label="$tr('ui.scene-schedule-dialog.add', 'Add')"
                prependIcon="mdi-plus-box-outline"
                @click="onAddDatetime"
              />
            </FSRow>
          </FSCol>
        </FSRow>
        <FSRow>
          <FSCol
            gap="4px"
          >
            <FSRow>
              <FSSpan font="text-button">
                {{ $tr('ui.scene-schedule-dialog.deffered-launch', 'Deffered launch') }}
              </FSSpan>
            </FSRow>
            <FSRow height="90px">
              <FSCard
                v-if="validatedDates.length === 0"
                height="100%"
                width="100%"
                style="margin-top: 8px;border-style: dashed;"
              >
                <FSCol
                  align="center-center"
                  gap="4px"
                >
                  <FSSpan font="text-overline">
                    {{ $tr('ui.scene-schedule-dialog.no-dates', 'No deffered activation') }}
                  </FSSpan>
                </FSCol>
              </FSCard>
              <FSFadeOut
                v-if="validatedDates.length > 0"
                style="height:100%;width: 100%"
              >
                <FSCol
                  width="fill"
                  height="hug"
                >
                  <FSRow
                    v-for="date in validatedDates"
                    :key="date"
                    align="center-center"
                  >
                    <FSCol>
                      <FSSpan font="text-overline">
                        {{ epochToLongTimeFormat(date) }}
                      </FSSpan>
                    </FSCol>
                    <FSCol
                      align="center-right"
                    >
                      <FSButton
                        variant="icon"
                        icon="mdi-trash-can-outline"
                        @click="onDeleteDatetime(date)"
                        color="error"
                      />
                    </FSCol>
                  </FSRow>
                </FSCol>
              </FSFadeOut>
            </FSRow>
          </FSCol>
        </FSRow>
      </FSCol>
    </template>
  </FSSubmitDialog>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import { useTimeZone } from "@dative-gpi/foundation-shared-services/composables";


import FSSubmitDialog from "@dative-gpi/foundation-shared-components/components/FSSubmitDialog.vue";
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
import FSDateTimeField from "@dative-gpi/foundation-shared-components/components/FSDateTimeField.vue";
import FSFadeOut from "@dative-gpi/foundation-shared-components/components/FSFadeOut.vue";

import FSStatusCardScene from "./FSStatusCardScene.vue";
import FSSceneCard from "./FSSceneCard.vue";
import { SceneInfos } from "../../../core/foundation-core-domain/models/scene/sceneInfos";


export default defineComponent({
  name: "FSStatus",
  components: {
    FSSubmitDialog,
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
    FSCard,
    FSDateTimeField,
    FSFadeOut
  },
  props: {
    scene: {
      type: Object as PropType<SceneInfos>,
      required: true
    }
  },
  setup(props) {
    const { getUserOffsetMillis, epochToLongTimeFormat } = useTimeZone();
    const date = ref<number | null>(null);
    const validatedDates = ref(props.scene.sceneSchedules?.map((s) => s.timestamp) ?? []);

    const onAddDatetime = () => {
      if (date.value && !validatedDates.value.includes(date.value)) {
        validatedDates.value.push(date.value);
      }
    };

    const onDeleteDatetime = (date: number) => {
      validatedDates.value = validatedDates.value.filter((d) => d !== date);
    };

    return {
      date,
      onAddDatetime,
      onDeleteDatetime,
      validatedDates,
      epochToLongTimeFormat
    };
  },
  watch: {
    scene: {
      handler: function (newScene) {
        this.validatedDates = newScene?.sceneSchedules?.map((s) => s.timestamp) ?? [];
      },
      deep: true,
      immediate: true
    }
  }
});
</script>