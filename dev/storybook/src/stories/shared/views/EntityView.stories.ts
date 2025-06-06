import type { Meta, StoryObj } from '@storybook/vue3';

import { VDivider } from 'vuetify/lib/components/index.mjs';

import { ColorEnum } from '@dative-gpi/foundation-shared-components/models';
import { addSubcomponentsArgTypes } from '@/utils/properties';

import FSCol from '@dative-gpi/foundation-shared-components/components/FSCol.vue';
import FSImage from '@dative-gpi/foundation-shared-components/components/FSImage.vue';
import FSLoader from '@dative-gpi/foundation-shared-components/components/FSLoader.vue';
import FSBaseView from '@dative-gpi/foundation-shared-components/components/views/FSBaseView.vue';
import FSEntityView from "@dative-gpi/foundation-shared-components/components/views/FSEntityView.vue";
import FSButtonEdit from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonEdit.vue";
import FSButtonRemove from "@dative-gpi/foundation-shared-components/components/buttons/FSButtonRemove.vue";
import FSBaseMobileView from '@dative-gpi/foundation-shared-components/components/views/mobile/FSBaseMobileView.vue';
import FSBaseDesktopView from '@dative-gpi/foundation-shared-components/components/views/desktop/FSBaseDesktopView.vue';
import FSBaseEntityMobileView from '@dative-gpi/foundation-shared-components/components/views/mobile/FSBaseEntityMobileView.vue';
import FSBaseEntityDesktopView from '@dative-gpi/foundation-shared-components/components/views/desktop/FSBaseEntityDesktopView.vue';

const meta = {
  title: 'Foundation/Shared/views/EntityView',
  component: FSEntityView,
  tags: ['autodocs'],
  argTypes: {
    ...addSubcomponentsArgTypes([FSBaseView, FSBaseMobileView, FSBaseDesktopView, FSBaseEntityDesktopView, FSBaseEntityMobileView], FSEntityView)
  },
} satisfies Meta<typeof FSEntityView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    breadcrumbs: [
      { title: 'Lorem', to: '/' },
      { title: 'MIZAR CDC', disabled: true }
    ],
  },
  render: (args) => ({
    components: { FSEntityView },
    setup() { 
      return { args };
    },
    template: `
        <FSEntityView
          v-bind="args"
        >
          <template
            v-for="n in 80"
            :key="n"
          >
            <p>I am a simple text</p>
          </template>
        </FSEntityView>
      `
  })
}

export const Variation0: Story = {
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: 'Description d\'un four Mizar sous Lorem Ipsum en maquettes.',
    // imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    iconBackgroundColors: ['#FF0000', '#0000FF'],
    iconBackgroundVariant: 'gradient',
    iconBorder: false,
    iconColor: ColorEnum.Dark,
    breadcrumbs: [
      { title: 'Lorem', to: '/' },
      { title: 'MIZAR CDC', disabled: true }
    ],
  },
  render: (args) => ({
    components: { FSEntityView, FSButtonEdit, FSButtonRemove, FSLoader, FSCol },
    setup() { 
      return { args };
    },
    template: `
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      `
  })
}

export const Variation1: Story = {
  args: {
    title: 'MIZAR CDC',
    subtitle: '93000000000000128751',
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined,
  },
  render: (args) => ({
    components: { VDivider, FSEntityView },
    setup() { 
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
        />
      </div>
    </div>`
  })
}

export const Variation2: Story = {
  args: {
    title: 'MIZAR CDC With a longer title',
    subtitle: null,
    description: null,
    imageId: null,
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Error,
    iconBackgroundColors: ['#A0FFA0', '#A0A0FF'],
    iconBackgroundVariant: 'gradient',
  },
  render: (args) => ({
    components: { VDivider, FSEntityView },
    setup() { 
      return { args };
    },
    template: `
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <div style="display: flex; gap: 10px;">
        <FSEntityView
          :title="args.title"
          :subtitle="args.subtitle"
          :description="args.description"
          :imageId="args.imageId"
          :imageCover="args.imageCover"
          :icon="args.icon"
          :color="args.color"
          :iconBackgroundColors="args.iconBackgroundColors"
          :iconBackgroundVariant="args.iconBackgroundVariant"
        />
      </div>
    </div>`
  })
}
export const ExtensionMock: Story = {
  args: {
    title: 'Extension',
    subtitle: 'subtitle extttttttttt',
    description: 'Description d\'une extension Lorem Ipsum en maquettes.',
    imageId: '1',
    imageCover: true,
    icon: 'mdi-chemical-weapon',
    color: ColorEnum.Primary,
    iconBackgroundColors: undefined,
    breadcrumbs: [
      { title: 'Lorem', to: '/' },
      { title: 'MIZAR CDC', disabled: true }
    ],
  },
  render: (args) => ({
    components: { FSEntityView, FSButtonEdit, FSButtonRemove, FSLoader, FSCol, FSImage },
    setup() { 
      return { args };
    },
    template: `
        <FSEntityView v-bind="args">
          <template #toolbar>
            <FSButtonEdit />
            <FSButtonRemove />
          </template>

          <template 
            #image="{ actualImageSize }"
          >
            <FSImage
              :imageId="args.imageId"
              :cover="args.imageCover"
              :height="actualImageSize"
              :width="actualImageSize"
            />
          </template>

          <FSCol gap="32px">
            <template v-for="n in 5" :key="n">
              <FSCol gap="16px">
                <FSLoader variant="text-h3" />
                <FSCol>
                  <FSLoader v-for="j in 4" variant="text-body" />
                </FSCol>
              </FSCol>
            </template>
          </FSCol>
        </FSEntityView>
      `
  })
}