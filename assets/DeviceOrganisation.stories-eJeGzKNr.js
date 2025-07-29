import{d as y,v as O,w as T,B as s,H as S,m as V,I as p,J as l}from"./vue.esm-bundler-PONd4AmC.js";import{F as I}from"./FSDeviceOrganisationTileUI-DEHVaOc5.js";import{F}from"./FSLoadTile-CmlEdWHt.js";import{a as b}from"./useDeviceOrganisations-C8_gExGe.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-Bzj0TB3v.js";import"./FSButton-CZKySWW0.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-CyhgWkHC.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./VProgressCircular-CDK6zSYw.js";import"./color-_AiH45em.js";import"./resizeObserver-UZYihl4g.js";import"./VIcon-DIMW80nW.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSIcon-bsX1r_Ci.js";import"./FSWindow-sJd0tDre.js";import"./FSText-C7hkL3As.js";import"./group-CvGRLeFV.js";import"./proxiedModel-vOB1Q9Gh.js";import"./locale-CoLhg8Wl.js";import"./VBtn-PodE2DV2.js";import"./border-z35mRDPS.js";import"./density-CNNumQ_A.js";import"./elevation-CL0Py7Fp.js";import"./rounded-BBFi0CuG.js";import"./dimensions-CNbPgA3L.js";import"./loader-DGoLn0VY.js";import"./anchor-D2WyvgD_.js";import"./router-6tzIEQS-.js";import"./index-B8vPsAiL.js";import"./VDefaultsProvider-BsWh58B_.js";import"./scopeId-CWp-k_S_.js";import"./ssrBoot-DufuUSU7.js";import"./transition-BXZIGKil.js";import"./FSStatus-CipG5px-.js";import"./FSChip-CfNKsjD1.js";import"./useDateFormat-BhCCrheZ.js";import"./useAppTimeZone-BXRoybOo.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-fPbUdbod.js";import"./useTranslations-_Q1DYra_.js";import"./FSColor-ClFDHQcW.js";import"./FSMenu-0Xerd8-Y.js";import"./VMenu-D11N5TPJ.js";import"./VOverlay-U8N3Tt4W.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BXzLC06Y.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DNbi6lpe.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-B_antRd7.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./FSLoader-UOJfN8Qb.js";import"./VImg-DKyIpwU2.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSTile-Cm_QUpQV.js";import"./FSCheckbox-CQphVYdu.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./index-CANKuvlL.js";import"./hubFactory-BXOUebMD.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(l(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(l(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const mt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDeviceOrganisationTile
        v-for="(deviceOrganisationId, index) in args.values"
        :key="index"
        :deviceOrganisationId="deviceOrganisationId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var m,d,u;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const dt=["Variations"];export{i as Variations,dt as __namedExportsOrder,mt as default};
