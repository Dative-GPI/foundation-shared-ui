import{a as g,b as u}from"./properties-Qw-O9fbT.js";import l from"./FSSwitch-BNuTVLQh.js";import{F as E}from"./FSSelectEntitiesField-6hj9NXo8.js";import{F as P}from"./FSSelectDashboardEntityPreset-B6Pj0vJS.js";import{F as i}from"./FSEntitySelectPresetConfiguration-C4V3FAOG.js";import{s as a}from"./settings.mock-DTcbrVXq.js";import{E as y}from"./applications-WAjZkOx7.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-ChYB2Oag.js";import"./css-BA19cdxW.js";import"./FSRow-BTBqaZ3Z.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./useRules-eFcMZq7y.js";import"./index-C0WTB2TM.js";import"./useRender-C5CA_XPC.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./transition-Dqm8buww.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./VLabel-DOSQu5RP.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./intersectionObserver-DHmVtmN7.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./VProgressCircular-D014ccrC.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSEntityField-DQXD1KFq.js";import"./FSBaseField-DjPNexk7.js";import"./FSSelectField-WAavbS0b.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./FSCard-X6BL7IDn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./easing-DY7PVvcf.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./FSSlideGroup-BLif3f0e.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-D5s36be0.js";import"./FSButton-C9qE_hma.js";import"./FSText-DkgFU9ZB.js";import"./FSIcon-D-iWmbKS.js";import"./VSlideGroup-DLaaL0Lk.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSTextField-CCgGVMUk.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-D_7bL_IH.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./FSColor-BdLg0VqR.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./FSDialogSelectEntities-D6C2AcI0.js";import"./FSDialogSubmit-CKeqPWSD.js";import"./FSDialog-CUz09xcb.js";import"./iframe-CcuVKb3f.js";import"./FSAutocompleteField-CfIbenZ4.js";import"./FSSearchField-TAeMrCJx.js";import"./filter-CEUeuq74.js";import"./dashboards-ttSPVkRQ.js";const yr={title:"Core/Components/WidgetConfigurations/EntitySelectPresetConfiguration",component:i,tags:["autodocs"],argTypes:{...u([l,P,E],i),...g(i)}},c={render:d=>({components:{FSEntitySelectPresetConfiguration:i},setup(){return{args:d}},template:`
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
