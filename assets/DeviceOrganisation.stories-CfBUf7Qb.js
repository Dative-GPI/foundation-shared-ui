import{d as y,o as O,w as T,E as p,m as S,K as V,L as s,M as m}from"./vue.esm-bundler-NVdFPFZB.js";import{F as I}from"./FSDeviceOrganisationTileUI-Ce0bKORK.js";import{F}from"./FSLoadTile-BsiS59UV.js";import{a as b}from"./useDeviceOrganisations-Dl8aoAsc.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-CwSu6t9y.js";import"./FSButton-C9qE_hma.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-CffnRYnX.js";import"./FSIcon-D-iWmbKS.js";import"./css-BA19cdxW.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./FSCol-ChYB2Oag.js";import"./FSWindow-7nqQW9YX.js";import"./VWindowItem-e5v8cqfr.js";import"./group-g6KFhHmW.js";import"./proxiedModel-4bJ1saXA.js";import"./lazy-D5C5Y6_6.js";import"./ssrBoot-BimrXMWA.js";import"./transition-Dqm8buww.js";import"./locale-MGWjZjXD.js";import"./VBtn-CvpLyLjZ.js";import"./border-D-0PuVU0.js";import"./density-HajNgXBf.js";import"./elevation-DyTGrbk9.js";import"./rounded-BE8u9DAQ.js";import"./variant-De5GYaDP.js";import"./dimensions-BuDdBtmf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./position-BAHmyhJU.js";import"./router-D2Xcou1T.js";import"./index-CDgYZebE.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./FSStatus-Bwr_48Mw.js";import"./FSChip-BbpyYaSh.js";import"./useDateFormat-BKFE7Nxu.js";import"./useTranslations-D5uJM3hx.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CFDnQcKu.js";import"./useAppTimeZone-CjwINmn2.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./FSColor-BdLg0VqR.js";import"./FSMenu-BQ9x-9Vx.js";import"./VMenu-DfiSs3vJ.js";import"./VOverlay-flKIXg07.js";import"./easing-DY7PVvcf.js";import"./display-RdUuPsY9.js";import"./scopeId-CVBASNvj.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Y-HqWA1J.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-qjfUqJGV.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-Xq6LdERt.js";import"./FSImage-qkvcP0r6.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./VImg-CF0d7Fd2.js";import"./index-D_7bL_IH.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSTile-BhVLh0I_.js";import"./FSCheckbox-BEgzMGmB.js";import"./useRules-eFcMZq7y.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./index-C0WTB2TM.js";import"./hubFactory-BMvXtgCX.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./subgroupingInfos-CBtJpNmo.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(m(),p(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),p(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const It={title:"Core/Components/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3"],
      selected: [false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDeviceOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ft=["Variations"];export{i as Variations,Ft as __namedExportsOrder,It as default};
