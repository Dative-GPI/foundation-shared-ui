import{d as y,o as O,w as T,B as s,m as S,H as V,I as p,J as m}from"./vue.esm-bundler-B9lxvfDw.js";import{F as I}from"./FSDeviceOrganisationTileUI-DqW-dzQ8.js";import{F}from"./FSLoadTile-DaCOw9m3.js";import{a as b}from"./useDeviceOrganisations-DuZ6cjW1.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-B9dZ7USN.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./VProgressCircular-DSOzHF7B.js";import"./color-CLtf7Qrc.js";import"./useRender-DM2jvMPN.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";import"./FSWindow-BpqFXPrr.js";import"./FSText-DZJhh1AD.js";import"./VWindowItem-BUJYZxEy.js";import"./group-BLkb5Gt4.js";import"./proxiedModel-DRvKxps3.js";import"./lazy-B_HJlRZe.js";import"./ssrBoot-butIQ2KL.js";import"./transition-Dh_EAQcC.js";import"./locale-C647X9dJ.js";import"./VBtn-CjvfwDqR.js";import"./variant-BIgPYL9J.js";import"./density-DvMOIaQw.js";import"./elevation-DZ0Sccyb.js";import"./rounded-BrvRf1BO.js";import"./dimensions-n1mPaUbN.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./router-BlaQ2-ft.js";import"./index-EdIR5CJS.js";import"./VDefaultsProvider-BurwYF19.js";import"./FSStatus-TEX23i_7.js";import"./FSChip-CnWvj3Fb.js";import"./useDateFormat-DB9Xcy26.js";import"./useAppTimeZone-yr9jXsW5.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CT4VqPAG.js";import"./useTranslations-AmWs0SAL.js";import"./FSColor-CFKVLO7B.js";import"./FSMenu-7I4odqF7.js";import"./VMenu-etFegoZJ.js";import"./VOverlay-DhmZjj8a.js";import"./easing-DY7PVvcf.js";import"./display-BzNfeHa8.js";import"./scopeId-4Hx_BsCg.js";import"./forwardRefs-C-GTDzx5.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DS-oMRk6.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-lZQE0wIC.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./FSLoader-FkDR4IbG.js";import"./VImg-UzuohEtG.js";import"./index-Dli51uy9.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSTile-05t0iUHJ.js";import"./FSCheckbox-8fnFFMk6.js";import"./useRules-Cun-4MZo.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./index-7AXDWkBX.js";import"./hubFactory-w0fuz269.js";import"./base-DYlC2SM8.js";import"./useAppOrganisationId-BPp8-Hw1.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(m(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),s(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const gt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ft=["Variations"];export{i as Variations,ft as __namedExportsOrder,gt as default};
