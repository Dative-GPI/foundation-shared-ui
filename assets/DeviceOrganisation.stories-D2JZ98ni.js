import{d as y,v as O,w as T,B as s,H as S,m as V,I as p,J as m}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as I}from"./FSDeviceOrganisationTileUI-YyWhn4j3.js";import{F}from"./FSLoadTile-C36HWg-d.js";import{a as b}from"./useDeviceOrganisations-B1pSoqOA.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-C6a5gyW_.js";import"./FSButton-Czf3beC8.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSClickable-DFmwvck2.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./FSIcon-CeLDRxMK.js";import"./FSWindow-DsNw3XIm.js";import"./FSText-B2RNQvtL.js";import"./VWindowItem-DAmycCPb.js";import"./group-CxQl3dDS.js";import"./proxiedModel-Nw0LX-ta.js";import"./lazy-BrZUVd24.js";import"./ssrBoot-CyKRGZ4o.js";import"./transition-Ucf2Ovas.js";import"./locale-K9DBMW2q.js";import"./VBtn-BXSaXTUb.js";import"./border-BnR_N-bS.js";import"./density-mssFUWH2.js";import"./elevation-CjJG1XnK.js";import"./rounded-Cy4gG01O.js";import"./dimensions-TKp8HHzB.js";import"./loader-CbVzlK-r.js";import"./anchor-S0Fc85Gi.js";import"./router-kuDvkEMM.js";import"./index-DWDx8SXO.js";import"./VDefaultsProvider-CuIagDb9.js";import"./FSStatus-CPb6vIPN.js";import"./FSChip-DtJe-ffy.js";import"./useDateFormat-DHrriBQY.js";import"./useAppTimeZone-Bddnv5KM.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-DwRThLpm.js";import"./useTranslations-5XSl7qXA.js";import"./FSColor-ZoGLOG1G.js";import"./FSMenu-BD2xtcyR.js";import"./VMenu-DWktgpYO.js";import"./VOverlay-DXMNyzvF.js";import"./easing-DY7PVvcf.js";import"./display-CpM-3U3n.js";import"./scopeId-BJNiFHH-.js";import"./forwardRefs-C-GTDzx5.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-CU7b4h9J.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-BNinaqtk.js";import"./FSImage-s4wyGGaF.js";import"./FSImageUI-DVteMu9v.js";import"./FSLoader-0nGK1qhA.js";import"./VImg-BmPSKt86.js";import"./index-B48vLg-P.js";import"./useImages-k4wzHpJZ.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";import"./FSTile-CPs209xc.js";import"./FSCheckbox-D-xuSzdC.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./index-Dylhq_Dl.js";import"./hubFactory-DnMFjsb6.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(m(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const vt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const gt=["Variations"];export{i as Variations,gt as __namedExportsOrder,vt as default};
