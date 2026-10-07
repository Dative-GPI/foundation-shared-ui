import{F as x}from"./FSSubgroupingChip-KI3t5aXQ.js";import{F as o}from"./FSChipGroup-O6skKn2T.js";import{F as r}from"./FSText-DkgFU9ZB.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSIcon-D-iWmbKS.js";import"./useBreakpoints-Trboya0O.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./FSChip-BbpyYaSh.js";import"./FSRow-BTBqaZ3Z.js";import"./FSCard-X6BL7IDn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSSlideGroup-BLif3f0e.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSCol-ChYB2Oag.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./display-RdUuPsY9.js";import"./goto-D2YfjHNt.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSMenu-BQ9x-9Vx.js";import"./VMenu-DfiSs3vJ.js";import"./VOverlay-flKIXg07.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./lazy-D5C5Y6_6.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";const ct={title:"Shared/Components/ChipGroup",component:o,tags:["autodocs"]},t={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
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
