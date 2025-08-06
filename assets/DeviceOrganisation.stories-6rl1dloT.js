import{d as y,v as O,w as T,B as s,H as S,m as V,I as p,J as m}from"./vue.esm-bundler-CocPPKUI.js";import{F as I}from"./FSDeviceOrganisationTileUI-BQnNsejj.js";import{F}from"./FSLoadTile-DFZjoCKI.js";import{a as b}from"./useDeviceOrganisations-ZtaF5q3P.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-BzxOKWJc.js";import"./FSButton-B9T3D7JL.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-CqIDwjuA.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./VProgressCircular-k_tOz5gX.js";import"./color-D50-hVV_.js";import"./resizeObserver-DDOqpSMx.js";import"./VIcon-ZjKwFcqe.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSIcon-BGuuL0jz.js";import"./FSWindow-CvRw_nNN.js";import"./FSText-Nj40J67v.js";import"./VWindowItem-bVm6GL_p.js";import"./group-MFxThiWx.js";import"./proxiedModel-DW1FRKBO.js";import"./lazy-Dahsm7lL.js";import"./ssrBoot-B-cFki3l.js";import"./transition-bMLtH-b3.js";import"./locale-_fONYh-8.js";import"./VBtn-CT_Tyh1g.js";import"./border-ZP5ArpGv.js";import"./density-2KuMGYl6.js";import"./elevation-DUhGVECn.js";import"./rounded-CBYChxif.js";import"./dimensions-Cv9Fwl7U.js";import"./loader-BDqRCawj.js";import"./anchor-D4EnoweD.js";import"./router-CKzlklLc.js";import"./index-BwBNp3ym.js";import"./VDefaultsProvider-CV4ffwSK.js";import"./FSStatus-CWQdNh98.js";import"./FSChip-CNOL3owI.js";import"./useDateFormat-DIxFAYu6.js";import"./useAppTimeZone-CyFP2jUy.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-yNRdweo3.js";import"./useTranslations-DJaIYmO0.js";import"./FSColor-BNf9GFvs.js";import"./FSMenu-D9AFjjKN.js";import"./VMenu-DVt-HGrP.js";import"./VOverlay-C9rlmtj8.js";import"./easing-DY7PVvcf.js";import"./display-23tZl-3U.js";import"./scopeId-BfaO37qo.js";import"./forwardRefs-C-GTDzx5.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-C5uSaOKl.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-CFVo7QSZ.js";import"./FSImage-BNGlz8LX.js";import"./FSImageUI-i6dq6NUa.js";import"./FSLoader-JpoH2mis.js";import"./VImg-C2WY2bzk.js";import"./index-5LM_ZUPq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSTile-CP6rjFw-.js";import"./FSCheckbox-MGAv1q-u.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./index-hd-xIizf.js";import"./hubFactory-uN_GIrZ4.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(m(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ct={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const vt=["Variations"];export{i as Variations,vt as __namedExportsOrder,ct as default};
