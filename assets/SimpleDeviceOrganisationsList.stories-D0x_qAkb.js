import{a as t}from"./index-B-lxVbXh.js";import o from"./FSSimpleDeviceOrganisationsList-Br0eEPWL.js";import{F as g}from"./FSSimpleList-rABq_RV8.js";import{F as n}from"./FSTile-DmLtcb1O.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./useDeviceOrganisations-B51htT3t.js";import"./hubFactory-kjEgbo8M.js";import"./composableFactory-Cxup7bUM.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./serviceFactory-DI_gyWBF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./pathCrumb-Db-cq5HI.js";import"./subgroupingInfos-CBtJpNmo.js";import"./address-CE2z3AEI.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./FSCol-DedFW0nl.js";import"./FSLoader-BTZOtjrt.js";import"./useColors-BAnxS_-e.js";import"./theme-CB6As9Cd.js";import"./color-D7ZCcSxD.js";import"./dimensions-Bm76csmg.js";import"./elevation-DfTZ1KyC.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./useRender-_COxrB9K.js";import"./FSFadeOut-DOLGFW1u.js";import"./FSSlideGroup-5yThapiu.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./useSlots-ol4Nk6ew.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";import"./VIcon-IlEzlDWp.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";import"./FSSearchField-DfSRPhxD.js";import"./FSTextField-V-eBW8wn.js";import"./FSBaseField-B1fPD4-R.js";import"./useRules-D4S0gmXa.js";import"./VTextField-CPakm9mu.js";import"./VField-Cbr0bjXl.js";import"./transition-CgRUW3r8.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./density-qUtw3dk7.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./rounded-Ctowy803.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3ZVJx30.js";import"./useTranslations-DAi7IZoP.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./VImg-DXeUU_wB.js";import"./useImages-CyYFl-Jz.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./FSButtonEditIcon-C_iuGg8m.js";import"./FSButtonRemoveIcon-UsTQE2oI.js";import"./filter-C1K_d8Vd.js";import"./FSCheckbox-BwFpn-kB.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./index-asyjLxvi.js";const Xe={title:"Core/Components/Lists/Simple Lists/SimpleDeviceOrganisationsList",component:o,subcomponents:{FSSimpleList:g,FSTile:n},tags:["autodocs"],argTypes:{direction:{control:"select",options:["column","row"]},"click:edit":{action:"click:edit"},"click:remove":{action:"click:remove"}}},i={render:e=>({components:{FSSimpleDeviceOrganisationsList:o},setup(){return{args:e}},template:`
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
    `})};var a,m,s;i.parameters={...i.parameters,docs:{...(a=i.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(s=(m=i.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const Ye=["Default","ListWithoutSearch"];export{i as Default,r as ListWithoutSearch,Ye as __namedExportsOrder,Xe as default};
