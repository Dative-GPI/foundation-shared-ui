import"./vue.esm-bundler-NVdFPFZB.js";import{F as m}from"./FSEntityField-FEmd6D3b.js";import{a as L}from"./properties-Qw-O9fbT.js";import{E as t}from"./applications-WAjZkOx7.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-KRtq6OYO.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSSelectField-CGFDUGHS.js";import"./FSDialogMenu-HNK7X8ju.js";import"./FSCard-ghpSlWxI.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSSlideGroup-BYhxS2B0.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BffFRYRL.js";import"./FSButton-CdKzPvIq.js";import"./FSText-DR713pSR.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./VSlideGroup-B-JqmwGu.js";import"./index-ByfGjSW7.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CZYm0d1o.js";import"./FSWrapGroup-jHFOEYDl.js";import"./VInput-BA20Y-wG.js";import"./density-CE2FkSgs.js";import"./FSTextField-DFareS9q.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./VLabel-BtnooUPU.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-VhSFSAo6.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-C94-RoOx.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./FSColor-on4KTt7-.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSDialogSelectEntities-bkEbt6TJ.js";import"./FSDialogSubmit-DINdQLo5.js";import"./FSDialog-B0wwkY4N.js";import"./iframe-NYGHBXq9.js";const se={title:"Core/Components/EntityField",component:m,tags:["autodocs"],argTypes:{...L(m)}},e={args:{label:"Entity selection",modelValue:[],entityType:t.Device,allowedEntityTypes:[t.Device,t.Location,t.Group,t.Model]},render:V=>({components:{FSEntityField:m},setup(){return{args:V}},template:`
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
