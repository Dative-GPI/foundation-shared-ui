import{a as t}from"./chunk-MZXVCX43-5Xl3hSHf.js";import o from"./FSSimpleUserOrganisationsList-BOeUo6cC.js";import{F as l}from"./FSSimpleList-DoaO6G6W.js";import{F as g}from"./FSTile-CbnAVjso.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-CTTOvLCD.js";import"./useUserOrganisations-CMmg5bCF.js";import"./permissionInfos-BPDgTHQl.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./serviceFactory-qtdw0UKd.js";import"./_commonjsHelpers-BosuxZz1.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8EFLcn9.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSCol-BPr0jVzk.js";import"./FSLoader-AugIw030.js";import"./useColors-D7R-CyI7.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./color-DTA1Qd0w.js";import"./dimensions-DIR9-JzD.js";import"./elevation-CqdG4vF6.js";import"./locale-Guk_W035.js";import"./FSFadeOut-C2gEJSut.js";import"./FSSlideGroup-CLbrB063.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSIcon-yzGYQgqh.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./group-CroFFR-b.js";import"./proxiedModel-Da7OD98r.js";import"./index-B698eGq-.js";import"./display-BWFgSvI7.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./density-n-hig0Tg.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./anchor-KPAVzGxJ.js";import"./rounded-5tkyiosR.js";import"./VDefaultsProvider-45AVpOQL.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./useTranslations-Dol6kQeQ.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./VImg-C1IcDibP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSButtonEditIcon-Rrl0wLIp.js";import"./FSButtonRemoveIcon-D2-ficmS.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-CVOakf5q.js";import"./VSelectionControl-CZi2-uP4.js";import"./index-Bj6Uq_NX.js";const _e={title:"Foundation/Core/Lists/Simple Lists/SimpleUserOrganisationsList",component:o,subcomponents:{FSSimpleList:l,FSTile:g},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleUserOrganisationsList:o},setup(){return{args:e}},template:`
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
