<template>
  <FSDialog
    v-model="dialog"
  >
    <FSCard>
      <FSCol
        gap="24px"
      >
        <FSRow
          padding="24px 24px 0px 24px"
        >
          <FSRow>
            <FSText>
              {{ $tr('ui.crop-image-dialog.title', 'Crop Image') }}
            </FSText>
          </FSRow>
          <FSButton
            icon="mdi-close"
            variant="icon"
            @click="dialog = false"
          />
        </FSRow>
        <FSCol>
          <FSRow>
            <canvas
            />
          </FSRow>
          <FSCol
            gap="24px"
          >
            <FSTabs
              v-model="tab"
            >
              <FSTab
                :value="0"
                :label="$tr('ui.crop-image-dialog.zoom', 'Zoom')"
              />
              <FSTab
                :value="1"
                :label="$tr('ui.crop-image-dialog.background', 'Background')"
              />
            </FSTabs>
            <FSWindow
              width="100%"
              v-model="tab"
            >
              <FSRow
                align="center-center"
              >
                Tab 1
              </FSRow>
              <FSRow
                align="center-center"
              >
                Tab 2
              </FSRow>
            </FSWindow>
          </FSCol>
          <FSRow
            padding="24px"
            align="center-right"
          >
            <template
              v-if="tab === 0"
            >
              <FSButton
                :label="$tr('ui.common.cancel', 'Cancel')"
                @click="dialog = false"
              />
              <FSButton
                :label="$tr('ui.common.next', 'Next')"
                :color="ColorEnum.Primary"
                @click="tab = 1"
              />
            </template>
            <template
              v-else
            >
              <FSButton
                :label="$tr('ui.common.back', 'Back')"
                @click="tab = 0"
              />
              <FSButton
                :label="$tr('ui.common.ok', 'OK')"
                :color="ColorEnum.Primary"
                variant="full"
                @click="onSubmit"
              />
            </template>
          </FSRow>
        </FSCol>
      </FSCol>
    </FSCard>

  </FSDialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import FSDialog from '@dative-gpi/foundation-shared-components/components/FSDialog.vue';
import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSRow from '@dative-gpi/foundation-shared-components/components/FSRow.vue';
import FSCard from '@dative-gpi/foundation-shared-components/components/FSCard.vue';
import FSText from '@dative-gpi/foundation-shared-components/components/FSText.vue';
import FSWindow from '@dative-gpi/foundation-shared-components/components/FSWindow.vue';
import FSTab from '@dative-gpi/foundation-shared-components/components/FSTab.vue';
import FSTabs from '@dative-gpi/foundation-shared-components/components/FSTabs.vue';
import FSButton from '@dative-gpi/foundation-shared-components/components/FSButton.vue';
import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';

export default defineComponent({
  name: "FSCropImageDialog",
  components: {
    FSCol,
    FSRow,
    FSTab,
    FSTabs,
    FSCard,
    FSText,
    FSDialog,
    FSButton,
    FSWindow,
  },
  props: {
  },
  emits: [],
  setup() {
    const dialog = ref(true);
    const tab = ref(0);

    const onSubmit = () => {
      dialog.value = false;
    };

    return {
      ColorEnum,
      dialog,
      tab,
      onSubmit
    };
  }
});
</script>