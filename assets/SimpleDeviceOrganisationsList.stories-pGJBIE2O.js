import{a as t}from"./chunk-MZXVCX43-CvRfcaG5.js";import o from"./FSSimpleDeviceOrganisationsList-BhcSXQ-U.js";import{F as l}from"./FSSimpleList-cZZMaIdv.js";import{F as g}from"./FSTile-Cm_QUpQV.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-PONd4AmC.js";import"./useDeviceOrganisations-C8_gExGe.js";import"./hubFactory-BXOUebMD.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./pathCrumb-Db-cq5HI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-b-hpWa.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSCol-Bfhiyt6Y.js";import"./FSLoader-UOJfN8Qb.js";import"./useColors-Dytl_X2F.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./color-_AiH45em.js";import"./dimensions-CNbPgA3L.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./FSFadeOut-CtUd8oOA.js";import"./FSSlideGroup-CGqp6f7y.js";import"./FSButtonNextIcon-Dkus99PH.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSIcon-bsX1r_Ci.js";import"./VSlideGroupItem-B5H5Uw6w.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-CANKuvlL.js";import"./display-BXzLC06Y.js";import"./FSSearchField-D3E8Wwt2.js";import"./FSTextField-D-U5ryYn.js";import"./FSBaseField-DMW1nZy-.js";import"./useRules-CT5DWk6c.js";import"./VField-So_guaQm.js";import"./transition-BXZIGKil.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./density-CNNumQ_A.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./rounded-BBFi0CuG.js";import"./VDefaultsProvider-BsWh58B_.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Bb4mSIJO.js";import"./useTranslations-_Q1DYra_.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./VImg-DKyIpwU2.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSButtonEditIcon-BpAlbPZY.js";import"./FSButtonRemoveIcon-BCvPXs9s.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-CQphVYdu.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./index-B8vPsAiL.js";const Ae={title:"Foundation/Core/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const Be=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Be as __namedExportsOrder,Ae as default};
