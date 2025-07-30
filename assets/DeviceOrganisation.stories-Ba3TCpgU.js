import{d as y,v as O,w as T,B as s,H as S,m as V,I as p,J as m}from"./vue.esm-bundler-PONd4AmC.js";import{F as I}from"./FSDeviceOrganisationTileUI-BAZWlPPE.js";import{F}from"./FSLoadTile-CV3JeyXf.js";import{a as b}from"./useDeviceOrganisations-C8_gExGe.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-DtK6B5rg.js";import"./FSButton-C_cDbGvj.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSIcon-wf_hiRKr.js";import"./FSWindow-BzgsfAkg.js";import"./FSText-EpsxHg8Z.js";import"./VWindowItem-DqS-XBSX.js";import"./group-QLjCrFp5.js";import"./proxiedModel-BMHfYIia.js";import"./lazy-PL0gnfDR.js";import"./ssrBoot-DufuUSU7.js";import"./transition-BpYTYsmy.js";import"./locale-CoLhg8Wl.js";import"./VBtn-Bcg5Dpfx.js";import"./border-BL_XAYaf.js";import"./density-DM1TPnyn.js";import"./elevation-D2k7D5K3.js";import"./rounded-Cwlpymxx.js";import"./dimensions-D04OQyPe.js";import"./loader-zqGHJTJd.js";import"./anchor-rLQXsCC5.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./VDefaultsProvider--dbql3OT.js";import"./FSStatus-CMenP6_W.js";import"./FSChip-CS2j_Mvh.js";import"./useDateFormat-BhCCrheZ.js";import"./useAppTimeZone-BXRoybOo.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-fPbUdbod.js";import"./useTranslations-_Q1DYra_.js";import"./FSColor-BKFrJOA6.js";import"./FSMenu-BEcSDcUA.js";import"./VMenu-DAcX0VlQ.js";import"./VOverlay-C4y2redN.js";import"./forwardRefs-DWGaNmQL.js";import"./display-D1WOGNJY.js";import"./scopeId-DFcjERLl.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-5t55QQTx.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-Bb3704DE.js";import"./FSImage-C3LGd4N4.js";import"./FSImageUI-Dj9MaFLC.js";import"./FSLoader-B0jwcdOS.js";import"./VImg-AonvEV9k.js";import"./index-CzkqP9_q.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSTile-DCbo0Z1b.js";import"./FSCheckbox-B1Q6_lSw.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./index-COu1mqSp.js";import"./hubFactory-BXOUebMD.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(m(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ut={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const ct=["Variations"];export{i as Variations,ct as __namedExportsOrder,ut as default};
