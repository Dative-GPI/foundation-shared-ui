import{a as t}from"./chunk-MZXVCX43-CvRfcaG5.js";import o from"./FSSimpleUserOrganisationsList-B1fVGT1d.js";import{F as l}from"./FSSimpleList-CYnmVOW5.js";import{F as g}from"./FSTile-oBYIwUj0.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-PTWG9x2X.js";import"./useUserOrganisations-DW8PbRkc.js";import"./permissionInfos-BPDgTHQl.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-DPcQMiM9.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSCol-qfATdd_b.js";import"./FSLoader-DnFcYh1x.js";import"./useColors-DSUu_QQ4.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./color-CCpgnDIk.js";import"./dimensions-v18atrWI.js";import"./elevation-CrSwNJwg.js";import"./locale-Cz_4DTJh.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./FSButton-CqjbOz0n.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";import"./FSCard-CRoBY3gL.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSIcon-DQMOs0-E.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./group-8tJUjatm.js";import"./proxiedModel-CvHSoKPb.js";import"./index-b-ADC_Il.js";import"./display-CESVul9-.js";import"./FSSearchField-BeidTVNh.js";import"./FSTextField-Du_6UKzN.js";import"./FSBaseField-BF-P1IfK.js";import"./useRules-D0leB7Wy.js";import"./VField-w4x2OZhg.js";import"./transition-QV8dDJB9.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./density-CznkHGGy.js";import"./loader-BqT2mYY7.js";import"./anchor-BcF6JBj1.js";import"./rounded-BbPXzFqc.js";import"./VDefaultsProvider-aDgtYDKn.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BNomsh5u.js";import"./useTranslations-BnE68qER.js";import"./FSImage-D6wIZvVb.js";import"./FSImageUI-Cd9yfhhj.js";import"./VImg-CBGPWIu-.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSButtonEditIcon-Bcy-m3oT.js";import"./FSButtonRemoveIcon-bgdCgD5W.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-D0eLEsDk.js";import"./VSelectionControl-Fvr0iuTu.js";import"./index-Dqqa47M6.js";const We={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
