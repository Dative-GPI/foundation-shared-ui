import{F as x}from"./FSSubgroupingChip-kpwCAt5l.js";import{F as o}from"./FSChipGroup-x9KDE_OT.js";import{F as r}from"./FSText-CUmuxASa.js";import"./vue.esm-bundler-DR0_aU9U.js";import"./FSIcon-CBwOL1p5.js";import"./useBreakpoints-DhvOJkKp.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./css-B9c0ZZC5.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSChip-ShmCCKc7.js";import"./FSRow-C8VtPvPz.js";import"./FSCard--XyliQO3.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./FSButton-CX1uVweX.js";import"./FSCol-B2uM4vFw.js";import"./VSlideGroup-BjJJyiAP.js";import"./index-C-lZWyiZ.js";import"./display-B8Tm0OQZ.js";import"./goto-nsb-OfwD.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./group-CUiyutR_.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSWrapGroup-v391AceI.js";import"./FSMenu-Dpr7CvAm.js";import"./VMenu-CkdLE1rB.js";import"./VOverlay-BwyinDfp.js";import"./easing--CnlGZ0M.js";import"./anchor-CT7OU_gq.js";import"./dimensions-DYTrXD1P.js";import"./lazy-DY4Wto-x.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./transition-CedxoFs4.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./dialog-transition-BGzvJBOV.js";const ct={title:"Foundation/Shared/ChipGroup",component:o,tags:["autodocs"]},t={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
      <FSText font="text-h3"> Slide </FSText>
      <FSChipGroup
        :items="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
        variant="slide"
      />
    </div>`})},e={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
      <FSText font="text-h3"> Wrap </FSText>
      <FSChipGroup
        :items="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
      />
    </div>`})},i={render:()=>({components:{FSChipGroup:o,FSSubgroupingChip:x,FSText:r},template:`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <FSText font="text-h3"> With labels (maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (single, maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (maxItems=2) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With slot item.chip (maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="[
          { groupingIcon: 'mdi-flash', groupingLabel: 'Usage énergétique', groupingColor: '#FF9800', icon: 'mdi-office-building', label: 'Bâtiment' },
          { groupingIcon: 'mdi-office-building', groupingLabel: 'Bâtiment', groupingColor: '#2196F3', icon: 'mdi-flash', label: 'Usage énergétique' },
          { groupingIcon: 'mdi-snowflake', groupingLabel: 'Station de ski', groupingColor: '#4CAF50', icon: 'mdi-gondola', label: 'Remontées mécaniques' },
          { groupingIcon: 'mdi-car', groupingLabel: 'Transport', groupingColor: '#9C27B0', icon: 'mdi-parking', label: 'Parking' }
        ]"
        :maxItems="1"
      >
        <template #item.chip="{ item }">
          <FSSubgroupingChip
            :groupingLabel="item.groupingLabel"
            :groupingIcon="item.groupingIcon"
            :groupingColor="item.groupingColor"
            :label="item.label"
            :icon="item.icon"
          />
        </template>
      </FSChipGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Without maxItems (all visible) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
      />
    </div>`})};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSChipGroup,
      FSText
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
      <FSText font="text-h3"> Slide </FSText>
      <FSChipGroup
        :items="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
        variant="slide"
      />
    </div>\`
  })
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var a,s,g;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSChipGroup,
      FSText
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px; width: 400px;">
      <FSText font="text-h3"> Wrap </FSText>
      <FSChipGroup
        :items="['Primary', 'Success', 'Warning', 'Error', 'Light', 'Dark']"
      />
    </div>\`
  })
}`,...(g=(s=e.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var l,u,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSChipGroup,
      FSSubgroupingChip,
      FSText
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <FSText font="text-h3"> With labels (maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (single, maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (maxItems=2) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With slot item.chip (maxItems=1) </FSText>
      <FSChipGroup
        variant="menu"
        :items="[
          { groupingIcon: 'mdi-flash', groupingLabel: 'Usage énergétique', groupingColor: '#FF9800', icon: 'mdi-office-building', label: 'Bâtiment' },
          { groupingIcon: 'mdi-office-building', groupingLabel: 'Bâtiment', groupingColor: '#2196F3', icon: 'mdi-flash', label: 'Usage énergétique' },
          { groupingIcon: 'mdi-snowflake', groupingLabel: 'Station de ski', groupingColor: '#4CAF50', icon: 'mdi-gondola', label: 'Remontées mécaniques' },
          { groupingIcon: 'mdi-car', groupingLabel: 'Transport', groupingColor: '#9C27B0', icon: 'mdi-parking', label: 'Parking' }
        ]"
        :maxItems="1"
      >
        <template #item.chip="{ item }">
          <FSSubgroupingChip
            :groupingLabel="item.groupingLabel"
            :groupingIcon="item.groupingIcon"
            :groupingColor="item.groupingColor"
            :label="item.label"
            :icon="item.icon"
          />
        </template>
      </FSChipGroup>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> Without maxItems (all visible) </FSText>
      <FSChipGroup
        variant="menu"
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
      />
    </div>\`
  })
}`,...(d=(u=i.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const ht=["Slide","Wrap","Menu"];export{i as Menu,t as Slide,e as Wrap,ht as __namedExportsOrder,ct as default};
