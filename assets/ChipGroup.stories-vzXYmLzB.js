import{F as x}from"./FSSubgroupingChip-DvBJ_f2b.js";import{F as o}from"./FSChipGroup-BMnAo0Gc.js";import{F as r}from"./FSText-DL_5kFi7.js";import"./vue.esm-bundler-D_gXonxt.js";import"./FSIcon-B9MXbR5l.js";import"./useBreakpoints-BWz07CZT.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./css-Bznx04uW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSSpan-ap0CpdXZ.js";import"./useSlots-CdBAzqCX.js";import"./FSChip-BxBwP6Ct.js";import"./FSRow-cHWWqhhs.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSSlideGroup-CeCO9XCC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-Dgxxr9ql.js";import"./FSButton-DHeuA-BH.js";import"./FSCol-C3EJfcJX.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSMenu-BRQdQ5Qk.js";import"./VMenu-KvKUKA1I.js";import"./VOverlay-CrMgAm2W.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./lazy-aXB44k01.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-DJfojugM.js";import"./dialog-transition-d5ANZlFh.js";const ct={title:"Foundation/Shared/ChipGroup",component:o,tags:["autodocs"]},t={render:()=>({components:{FSChipGroup:o,FSText:r},template:`
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
