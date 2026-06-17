import{F as x}from"./FSSubgroupingChip-ntLLgXYm.js";import{F as o}from"./FSChipGroup-_HVNT_pj.js";import{F as r}from"./FSText-C8rmUTxK.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSIcon-CNpmwcOd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./css-DSFbdPon.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSSpan-D6aG51_c.js";import"./useSlots-ol4Nk6ew.js";import"./FSChip-PSYJcPlU.js";import"./FSRow-C8aYwBu-.js";import"./FSCard-DYe1QD8j.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSSlideGroup-5yThapiu.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSCol-DedFW0nl.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSWrapGroup-DMf-egfq.js";import"./FSMenu-5jQDuEvO.js";import"./VMenu-dxHuUw__.js";import"./VOverlay-CG3iG1zZ.js";import"./easing-DY7PVvcf.js";import"./anchor-Dj2AEc5N.js";import"./dimensions-Bm76csmg.js";import"./lazy-DXVvciW4.js";import"./router-CTGX-puL.js";import"./scopeId-DKs4U9S0.js";import"./transition-CgRUW3r8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./dialog-transition-DRDndVEC.js";const ct={title:"Shared/Components/ChipGroup",component:o,tags:["autodocs"]},t={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
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
