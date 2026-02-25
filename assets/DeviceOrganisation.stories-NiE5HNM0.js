import{d as y,o as O,w as T,B as p,m as S,H as V,I as s,J as m}from"./vue.esm-bundler-D5n7z5qz.js";import{F as I}from"./FSDeviceOrganisationTileUI-Dm1bx4wz.js";import{F}from"./FSLoadTile-B_OaMmgm.js";import{a as b}from"./useDeviceOrganisations-DCptJ7vO.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-Bzyxk1Wf.js";import"./FSButton-M9GMz66l.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./css-CxcvJboa.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./FSWindow-B_NnUx3E.js";import"./VWindowItem-BmOp3Vtj.js";import"./group-Cx5pids1.js";import"./proxiedModel-Cv3qT1cZ.js";import"./lazy-Bqido2cx.js";import"./ssrBoot-C79LbZhX.js";import"./transition-gfLL8RoD.js";import"./locale-n4v42L7l.js";import"./VBtn-DtRd7_Uc.js";import"./border-5JTJ2U38.js";import"./density-BTT1solu.js";import"./elevation-62d6MvS5.js";import"./rounded-BSNeeq4o.js";import"./variant-CRuOwF35.js";import"./dimensions-D_nx6Jbk.js";import"./loader-CAuY8UYG.js";import"./VProgressLinear-CI-Q4csR.js";import"./anchor-tlySGI4g.js";import"./position-DfaaINa4.js";import"./router-R_WRJyUs.js";import"./index-C2v-jVLO.js";import"./VDefaultsProvider-CPXI0q_G.js";import"./FSStatus-AXF2Kwoe.js";import"./FSChip-BmAEKlmX.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./useTranslations-CFCS6HA-.js";import"./FSColor-CsxJ8it1.js";import"./FSMenu-mE5omh8N.js";import"./VMenu-DOme5rNf.js";import"./VOverlay-BApTxsTF.js";import"./easing-DY7PVvcf.js";import"./display-DvHDH61C.js";import"./scopeId-DI6aT8IG.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-CBLjbvr6.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-hXT-iRib.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-B5u6_Nl0.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./VImg-CFhtVVj8.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-BiFTCuMc.js";import"./FSCheckbox-DMg4fEo0.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./hubFactory-B0gUdtus.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./subgroupingInfos-CBtJpNmo.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(m(),p(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),p(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const Vt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const It=["Variations"];export{i as Variations,It as __namedExportsOrder,Vt as default};
