import{a as g,b as u}from"./properties-Qw-O9fbT.js";import l from"./FSSwitch-q4sdKOv5.js";import{F as E}from"./FSSelectEntitiesField-m1i48UAZ.js";import{F as P}from"./FSSelectDashboardEntityPreset-BrQVLXMn.js";import{F as i}from"./FSEntitySelectPresetConfiguration-BSsDJjp7.js";import{s as a}from"./settings.mock-DTcbrVXq.js";import{E as y}from"./applications-WAjZkOx7.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-ChYB2Oag.js";import"./css-BA19cdxW.js";import"./FSRow-BTBqaZ3Z.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./useRules-eFcMZq7y.js";import"./index-ByfGjSW7.js";import"./useRender-CaGCh2Xu.js";import"./VDefaultsProvider-Blv54jCg.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./transition-a5pzBS6c.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./VLabel-BtnooUPU.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./intersectionObserver-DwVsweQn.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./VProgressCircular-Cjpa4WUk.js";import"./resizeObserver-Df0UXoOw.js";import"./FSEntityField-BdS2GCS1.js";import"./FSBaseField-t-4Gn9bZ.js";import"./FSSelectField-DAqtgTqw.js";import"./FSDialogMenu-joEeq_8S.js";import"./FSCard-CuYV3KZq.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./easing-DY7PVvcf.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-D8eb9LJO.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CMh8EZHD.js";import"./FSButton-CREo68Oh.js";import"./FSText-BxohX4Ti.js";import"./FSIcon-DnRHaPib.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-CC3irkQK.js";import"./FSWrapGroup-DRxEpGLX.js";import"./FSTextField-DjKK-1Jq.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-BeUZFJsQ.js";import"./VCheckboxBtn-BSFWUORg.js";import"./FSFadeOut-BlROHk6C.js";import"./FSLoader-C6yio_zx.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-BAP5Pn0S.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./FSColor-BcZro-gF.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSDialogSelectEntities-CMkwmXq1.js";import"./FSDialogSubmit-BrkGnJdN.js";import"./FSDialog-rxEa8PMp.js";import"./iframe-BfbF_-se.js";import"./FSAutocompleteField-BoSKVKEg.js";import"./FSSearchField-Cfe-15n8.js";import"./filter-C4s97JnQ.js";import"./dashboards-ttSPVkRQ.js";const yr={title:"Core/Components/WidgetConfigurations/EntitySelectPresetConfiguration",component:i,tags:["autodocs"],argTypes:{...u([l,P,E],i),...g(i)}},c={render:d=>({components:{FSEntitySelectPresetConfiguration:i},setup(){return{args:d}},template:`
      <FSEntitySelectPresetConfiguration
        v-model:useEntityPreset="args.useEntityPreset"
        v-model:entityPresetCode="args.entityPresetCode"
        v-model:entityType="args.entityType"
        v-model:entitiesIds="args.entitiesIds"
        v-bind="args"
      />
    `})},t={...c,args:{settings:a,useEntityPreset:!1,entityPresetCode:"",entityType:y.Device,entitiesIds:[]}},r={...c,args:{settings:a,useEntityPreset:!0,entityPresetCode:"locations",entityType:y.Device,entitiesIds:[]}};var o,e,m;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: false,
    entityPresetCode: '',
    entityType: EntityType.Device,
    entitiesIds: []
  }
}`,...(m=(e=t.parameters)==null?void 0:e.docs)==null?void 0:m.source}}};var p,s,n;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  ...BaseStory,
  args: {
    settings: settingsMock,
    useEntityPreset: true,
    entityPresetCode: 'locations',
    entityType: EntityType.Device,
    entitiesIds: []
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const cr=["CustomEntities","UsePreset"];export{t as CustomEntities,r as UsePreset,cr as __namedExportsOrder,yr as default};
