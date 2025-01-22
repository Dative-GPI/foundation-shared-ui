import{d as y,o as O,w as T,A as s,B as p,x as S,G as V,I as m}from"./vue.esm-bundler-CTTOvLCD.js";import{F as I}from"./FSDeviceOrganisationTileUI-DNNhNNKb.js";import{F}from"./FSLoadTile-DgDYToEN.js";import{a as b}from"./useDeviceOrganisations-BVpouCeZ.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-CeRQMfL9.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSIcon-yzGYQgqh.js";import"./FSWindow-BmTGXmTr.js";import"./FSText-zXSXSnZG.js";import"./group-CroFFR-b.js";import"./proxiedModel-Da7OD98r.js";import"./locale-Guk_W035.js";import"./VBtn-IPVaR7st.js";import"./border-CjCUMUtA.js";import"./density-n-hig0Tg.js";import"./elevation-CqdG4vF6.js";import"./rounded-5tkyiosR.js";import"./dimensions-DIR9-JzD.js";import"./loader-BcXzPxbu.js";import"./anchor-KPAVzGxJ.js";import"./router-SvtovJtL.js";import"./index-Bj6Uq_NX.js";import"./VDefaultsProvider-45AVpOQL.js";import"./scopeId-DGVhnfG2.js";import"./ssrBoot-C3MoFAVe.js";import"./transition-C1y9a89u.js";import"./FSStatus-D6HOLnGm.js";import"./FSChip-CVBfHYvV.js";import"./useDateFormat-Cunhon6k.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./useAppTimeZone-Cju-Nbag.js";import"./datesTools-CNM18gr4.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useTranslations-Dol6kQeQ.js";import"./FSColor-DFBMo33h.js";import"./VMenu-DP8ibRhi.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./display-BWFgSvI7.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DElPA4e7.js";import"./FSDivider-Da6ewG1k.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./VImg-C1IcDibP.js";import"./index-CK42gwlP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSTile-CbnAVjso.js";import"./FSCheckbox-CVOakf5q.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./index-B698eGq-.js";import"./form-gxFDX6UX.js";import"./hubFactory-BAzgR7Yx.js";import"./deviceConnectivityDetails-D8ezb3sc.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(m(),p(g,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["editable","modelValue"])):e.entity?(m(),p(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,editable:e.$props.editable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","editable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const pt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const mt=["Variations"];export{i as Variations,mt as __namedExportsOrder,pt as default};
