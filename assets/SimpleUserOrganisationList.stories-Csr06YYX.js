import{a as t}from"./chunk-MZXVCX43-CvRfcaG5.js";import o from"./FSSimpleUserOrganisationsList-HXp79oyi.js";import{F as l}from"./FSSimpleList-CKisPmNW.js";import{F as g}from"./FSTile-BxDceP5O.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-DtArtqdn.js";import"./useUserOrganisations-BuaFyxFw.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BeFRilZr.js";import"./useAppOrganisationId-DlPw95JR.js";import"./composableFactory-D6jnN1uy.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C-mN1bTt.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./FSCol-D6yYDi9X.js";import"./FSLoader-C5CmIvK9.js";import"./useColors-P6sW9vWR.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./color-DKVd81aj.js";import"./dimensions-Dt4h5jdR.js";import"./elevation-DuPJjm1T.js";import"./locale-EnvrzLNX.js";import"./FSFadeOut-okmKwNuP.js";import"./FSSlideGroup-DaeYUKJp.js";import"./FSButtonNextIcon-Bvnrx82W.js";import"./FSButton-q8xhuZjd.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSClickable-Lp9mb8CD.js";import"./FSCard-oEcmHswj.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./VIcon-_X0ionFS.js";import"./FSSpan-Btkwe66a.js";import"./useSlots-DbyfVVj5.js";import"./FSIcon-DAU03b1P.js";import"./VSlideGroupItem-XSA54cuy.js";import"./group-B-yFvi8t.js";import"./proxiedModel-DNPVb8sx.js";import"./index-YdMT2sR1.js";import"./display-H53nrFTM.js";import"./FSSearchField-BUH-dwrD.js";import"./FSTextField-Dwg3bGtr.js";import"./FSBaseField-COfiqIR8.js";import"./useRules-eDN7Chft.js";import"./VField-OtS-Js_u.js";import"./transition-POm6u0ds.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./density-96HGjcby.js";import"./loader-CJlqftns.js";import"./anchor-CbVlxldO.js";import"./rounded-B9giz-GX.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./forwardRefs-DWGaNmQL.js";import"./index-ShtRROw2.js";import"./useTranslations-CEyRES9c.js";import"./FSImage-DyJ7YE9e.js";import"./FSImageUI-CJROiAZk.js";import"./VImg-DB10nKT8.js";import"./useImages-Ob47Tzpe.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CqNI4hgs.js";import"./FSButtonEditIcon-B0Kp4W_H.js";import"./FSButtonRemoveIcon-0qEFttvx.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-D615kJWP.js";import"./VSelectionControl-D_AGLwLV.js";import"./index-DWcj--5B.js";const We={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _e=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,_e as __namedExportsOrder,We as default};
