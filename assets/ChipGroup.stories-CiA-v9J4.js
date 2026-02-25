import{F as x}from"./FSSubgroupingChip-DSvuACV4.js";import{F as o}from"./FSChipGroup-CIJdEqtJ.js";import{F as r}from"./FSText-015IEZHy.js";import"./vue.esm-bundler-D5n7z5qz.js";import"./FSIcon-DFkRD0af.js";import"./useBreakpoints-CEzKC_o8.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./css-CxcvJboa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSChip-BAG_v8gF.js";import"./FSRow-DIk8KFbG.js";import"./FSCard-BCuiauGe.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSSlideGroup-BOTL2kDs.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BVPIcqKL.js";import"./FSButton-BTgaogZq.js";import"./FSCol-D_lbFmZy.js";import"./VSlideGroup-BJAU1y7G.js";import"./index-Bo6vw90T.js";import"./display-DvHDH61C.js";import"./goto-nADK4Ssb.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./group-Cx5pids1.js";import"./VSlideGroupItem-B1P3g7mq.js";import"./FSWrapGroup-ES-pUhBN.js";import"./FSMenu-mE5omh8N.js";import"./VMenu-DOme5rNf.js";import"./VOverlay-BApTxsTF.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./lazy-Bqido2cx.js";import"./router-R_WRJyUs.js";import"./scopeId-DI6aT8IG.js";import"./transition-gfLL8RoD.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./dialog-transition-CBLjbvr6.js";const xt={title:"Foundation/Shared/ChipGroup",component:o,tags:["autodocs"]},t={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
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
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (single, maxItems=1) </FSText>
      <FSChipGroup
        :items="['Bâtiment']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (maxItems=2) </FSText>
      <FSChipGroup
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With slot item.chip (maxItems=1) </FSText>
      <FSChipGroup
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
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
      />
    </div>`})};var m,p,n;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(n=(p=t.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};var a,s,g;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(g=(s=e.parameters)==null?void 0:s.docs)==null?void 0:g.source}}};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (single, maxItems=1) </FSText>
      <FSChipGroup
        :items="['Bâtiment']"
        :maxItems="1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With labels (maxItems=2) </FSText>
      <FSChipGroup
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
        :maxItems="2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText font="text-h3"> With slot item.chip (maxItems=1) </FSText>
      <FSChipGroup
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
        :items="['Bâtiment', 'Usage énergétique', 'Remontées mécaniques', 'Parking']"
      />
    </div>\`
  })
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ct=["Slide","Wrap","MaxItems"];export{i as MaxItems,t as Slide,e as Wrap,ct as __namedExportsOrder,xt as default};
