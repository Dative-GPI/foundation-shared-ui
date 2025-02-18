import{a as t}from"./chunk-MZXVCX43-CvRfcaG5.js";import o from"./FSSimpleUserOrganisationsList-RPbOwyfj.js";import{F as l}from"./FSSimpleList-BxHNvRpZ.js";import{F as g}from"./FSTile-DQjpE46R.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-BD3cPSox.js";import"./useUserOrganisations-CIqdeF_c.js";import"./permissionInfos-BPDgTHQl.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./FSCol-C9a7BKGp.js";import"./FSLoader-DTAq-3Vo.js";import"./useColors-Cu9vf_Ix.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./color-DAd2dJIE.js";import"./dimensions-DbGEEU80.js";import"./elevation-C4p0Fj2B.js";import"./locale-Cg0C6Moy.js";import"./FSFadeOut-FPHnkeYn.js";import"./FSSlideGroup-BX0UkKdi.js";import"./FSButtonNextIcon-B3zS2F8_.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./FSCard-DOwp-V9l.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./VIcon-ef9P0Odv.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSIcon-BikiybNc.js";import"./VSlideGroupItem-BuoHA9mk.js";import"./group-B_AHtZDM.js";import"./proxiedModel-JzK6JHhO.js";import"./index-CcZ3F2bM.js";import"./display-D74v7vg7.js";import"./FSSearchField-C59ZFn1o.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./transition-BVEL_Cnv.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./density-Dp_zkCfD.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./anchor-Ce3a1Oj_.js";import"./rounded-idSslOdv.js";import"./VDefaultsProvider-rHrX99un.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Ov0xN_Hx.js";import"./useTranslations-aJtH5CGl.js";import"./FSImage-BtmbCNhT.js";import"./FSImageUI-CjPb9VM2.js";import"./VImg-DqEZxS4C.js";import"./useImages-DZM65JD7.js";import"./base-CmdGny12.js";import"./useAppAuthToken-B3id31UI.js";import"./FSButtonEditIcon-DVSLuoQC.js";import"./FSButtonRemoveIcon-DLpUPCJq.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./index-BRxggfmq.js";const _e={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        direction="row"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `}),args:{maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"row",itemLabel:"name",searchable:!0,tileHeight:"60px",tileProps:e=>({onClick:()=>t("onClick:item")(e)}),"click:edit":t("click:edit"),"click:remove":t("click:remove")}},r={args:{maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"row",itemLabel:"name",searchable:!1,tileHeight:"60px"},render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `})};var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimpleUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        direction="row"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  }),
  args: {
    maxHeight: 100,
    showEdit: false,
    showRemove: false,
    showDraggable: false,
    direction: "row",
    itemLabel: "name",
    searchable: true,
    tileHeight: '60px',
    tileProps: item => ({
      onClick: () => action("onClick:item")(item)
    }),
    "click:edit": action("click:edit"),
    "click:remove": action("click:remove")
  }
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var n,c,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    maxHeight: 0,
    showEdit: true,
    showRemove: true,
    showDraggable: false,
    direction: "row",
    itemLabel: "name",
    searchable: false,
    tileHeight: '60px'
  },
  render: args => ({
    components: {
      FSSimpleUserOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleUserOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        :tileHeight="args.tileHeight"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  })
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const ye=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,ye as __namedExportsOrder,_e as default};
