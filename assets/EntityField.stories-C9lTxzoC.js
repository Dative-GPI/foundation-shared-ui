import"./vue.esm-bundler-NVdFPFZB.js";import{F as m}from"./FSEntityField-DQXD1KFq.js";import{a as L}from"./properties-Qw-O9fbT.js";import{E as t}from"./applications-WAjZkOx7.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-ChYB2Oag.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useSlots-DEXetpJf.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./FSSelectField-WAavbS0b.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./FSCard-X6BL7IDn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./proxiedModel-4bJ1saXA.js";import"./easing-DY7PVvcf.js";import"./anchor-C-rl7L3L.js";import"./dimensions-BuDdBtmf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./locale-MGWjZjXD.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./transition-Dqm8buww.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./FSSlideGroup-BLif3f0e.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSText-DkgFU9ZB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./VSlideGroup-DLaaL0Lk.js";import"./index-C0WTB2TM.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./VInput-CBXzUquC.js";import"./density-HajNgXBf.js";import"./FSTextField-CCgGVMUk.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./VLabel-DOSQu5RP.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./rounded-BE8u9DAQ.js";import"./index-D_7bL_IH.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./FSColor-BdLg0VqR.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSDialogSelectEntities-D6C2AcI0.js";import"./FSDialogSubmit-CKeqPWSD.js";import"./FSDialog-CUz09xcb.js";import"./iframe-CcuVKb3f.js";const se={title:"Core/Components/EntityField",component:m,tags:["autodocs"],argTypes:{...L(m)}},e={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:V=>({components:{FSEntityField:m},setup(){return{args:V}},template:`
      <FSEntityField
        v-bind="args" 
        v-model="args.modelValue" 
        v-model:entityType="args.entityType"
      />`})},o={...e,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},i={...e,args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[]}},r={...e,args:{label:"Entity selection with single select",modelValue:["1"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model],singleSelect:!0}},p={...e,args:{label:"Entity selection",modelValue:["1","2","3","4","5"],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}},n={...e,args:{label:"Entity selection",modelValue:["1","2","3","4","5","6","7","8","9","10"],entityType:t.Device,showEntities:!1,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]}};var s,a,y;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(y=(a=o.parameters)==null?void 0:a.docs)==null?void 0:y.source}}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: [] as string[],
    entityType: EntityType.Device,
    allowedEntityTypes: []
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var E,T,u;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection with single select",
    modelValue: ["1"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model],
    singleSelect: true
  }
}`,...(u=(T=r.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var g,v,D;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5"],
    entityType: EntityType.Device,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(D=(v=p.parameters)==null?void 0:v.docs)==null?void 0:D.source}}};var w,S,b;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    label: "Entity selection",
    modelValue: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
    entityType: EntityType.Device,
    showEntities: false,
    allowedEntityTypes: [EntityType.Device, EntityType.Location, EntityType.Group, EntityType.Model]
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const ae=["Empty","AllTypes","One","Five","TenNoList"];export{i as AllTypes,o as Empty,p as Five,r as One,n as TenNoList,ae as __namedExportsOrder,se as default};
