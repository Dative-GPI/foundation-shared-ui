import{a as t}from"./chunk-MZXVCX43-CvRfcaG5.js";import o from"./FSSimpleDeviceOrganisationsList-CYVUAcfw.js";import{F as l}from"./FSSimpleList-BUH6gRZ9.js";import{F as g}from"./FSTile-BRY5tUWm.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./useDeviceOrganisations-GFqrAv_Y.js";import"./hubFactory-BW9da_6X.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSCol-DIPgj7wU.js";import"./FSLoader-DbCBZFXe.js";import"./useColors-CaMUbg8a.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./color-6mal3hP4.js";import"./dimensions-CuS7VcMO.js";import"./elevation-DCJceMeT.js";import"./locale-BJmdjC_5.js";import"./FSFadeOut-cwNcN6_P.js";import"./FSSlideGroup-CXGL0bk9.js";import"./FSButtonNextIcon-CYg1KVZY.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./FSCard-CoFTtRNJ.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-Dy1KglKQ.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./index-BNfVP6r5.js";import"./display-Cs3Y1ygD.js";import"./FSSearchField-DF9olKJY.js";import"./FSTextField-DckKQdCq.js";import"./FSBaseField-DDV1bgDk.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./transition-C13qRIR1.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./density-B3EUR5Bv.js";import"./loader-zbNw4pum.js";import"./anchor-DiyvyHyx.js";import"./rounded-T_eKj2ZY.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./useTranslations-D4m4SVfo.js";import"./FSImage-HVQxbrXN.js";import"./FSImageUI-OJrjYu5n.js";import"./VImg-BLvS348m.js";import"./useImages-DKhIXvlG.js";import"./base-CmdGny12.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSButtonEditIcon-HDEocbu6.js";import"./FSButtonRemoveIcon-Bi-VfENX.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-4_vPFX9A.js";import"./VSelectionControl-asaj2cFo.js";import"./index-BSoBU6Pm.js";const ze={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `}),args:{maxHeight:100,showEdit:!1,showRemove:!1,showDraggable:!1,direction:"column",itemLabel:"label",searchable:!0,tileProps:e=>({onClick:()=>t("onClick:item")(e)}),"click:edit":t("click:edit"),"click:remove":t("click:remove")}},r={args:{maxHeight:0,showEdit:!0,showRemove:!0,showDraggable:!1,direction:"column",itemLabel:"label",searchable:!1},render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    `})};var a,s,m;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSimpleDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
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
    direction: "column",
    itemLabel: "label",
    searchable: true,
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
    direction: "column",
    itemLabel: "label",
    searchable: false
  },
  render: args => ({
    components: {
      FSSimpleDeviceOrganisationsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSimpleDeviceOrganisationsList
        :maxHeight="args.maxHeight"
        :showEdit="args.showEdit"
        :showRemove="args.showRemove"
        :showDraggable="args.showDraggable"
        :direction="args.direction"
        :itemLabel="args.itemLabel"
        :searchable="args.searchable"
        @click:edit="args['click:edit']"
        @click:remove="args['click:remove']"
      />
    \`
  })
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Ae=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Ae as __namedExportsOrder,ze as default};
