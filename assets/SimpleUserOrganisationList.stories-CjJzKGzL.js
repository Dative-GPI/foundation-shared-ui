import{a as t}from"./index-B-lxVbXh.js";import o from"./FSSimpleUserOrganisationsList-24yB18OA.js";import{F as g}from"./FSSimpleList-Ju8IcnnB.js";import{F as n}from"./FSTile-Dc7IleRl.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-D_gXonxt.js";import"./useUserOrganisations-Ca7NnciS.js";import"./composableFactory-DkrZ_DEM.js";import"./serviceFactory-BqFXSmrg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./lodash-5Yh5OMmr.js";import"./uuid-DTaye2KM.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./permissionInfos-BPDgTHQl.js";import"./base-1TCiMBKH.js";import"./useAppOrganisationId-Dp-8AYe6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useBreakpoints-BWz07CZT.js";import"./FSCol-C3EJfcJX.js";import"./FSLoader-CdctsmAF.js";import"./useColors-B49MKafH.js";import"./theme-DdZUMbNR.js";import"./color-DuOnfdFp.js";import"./dimensions-BYDjhYdL.js";import"./elevation-sxxySPKb.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./useRender-BE0GCWmZ.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSSlideGroup-DWL-VMav.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./FSButton-cpkpLA7w.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./FSSpan-ap0CpdXZ.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./display-BIN9xr9Q.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSSearchField-Bhtathpg.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./useTranslations-D2TwtVAp.js";import"./FSImage-DWYQvpU3.js";import"./FSImageUI-C_EkTaPS.js";import"./VImg-ufpttNgj.js";import"./useImages-pCcsdsIl.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DU8AzEWU.js";import"./FSButtonEditIcon-D1vTeLmP.js";import"./FSButtonRemoveIcon-DYVCOrYf.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";const Me={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:g,FSTile:n},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(m=(s=i.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Ne=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Ne as __namedExportsOrder,Me as default};
