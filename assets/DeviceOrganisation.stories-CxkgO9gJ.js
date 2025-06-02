import{d as y,q as O,w as T,B as s,H as S,m as V,I as p,J as l}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as I}from"./FSDeviceOrganisationTileUI-CGmN7KIQ.js";import{F}from"./FSLoadTile-BJVS6vIm.js";import{a as b}from"./useDeviceOrganisations-D81pXeB-.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-K-4UOw2m.js";import"./FSButton-2OKi08_r.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-CBfoSsDs.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./VProgressCircular-cB7gdjsO.js";import"./color-iZFxpsFf.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-ZzEkeSRE.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSIcon-8KcAAKgU.js";import"./FSWindow-Be0cwqXj.js";import"./FSText-C92q1_nI.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./locale-BJmdjC_5.js";import"./VBtn-3Idlo3fr.js";import"./border-DGybV2oK.js";import"./density-B3EUR5Bv.js";import"./elevation-DCJceMeT.js";import"./rounded-T_eKj2ZY.js";import"./dimensions-CuS7VcMO.js";import"./loader-Bh1R7Z2A.js";import"./anchor-DiyvyHyx.js";import"./router-C0dK7NvB.js";import"./index-BSoBU6Pm.js";import"./VDefaultsProvider-3cG3_dFO.js";import"./scopeId-BQSHBqq_.js";import"./ssrBoot-B76fNmmB.js";import"./transition-C13qRIR1.js";import"./FSStatus-fXHt660J.js";import"./FSChip-BAjrANNt.js";import"./useDateFormat-B0N4tW_S.js";import"./useAppTimeZone-CbCPkuif.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-D1PzUORY.js";import"./useTranslations-D4m4SVfo.js";import"./FSColor-CuR1jGLD.js";import"./FSMenu-9wehFRGE.js";import"./VMenu-B5kDinlh.js";import"./VOverlay-CrPt6Ctk.js";import"./forwardRefs-DWGaNmQL.js";import"./display-Cs3Y1ygD.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-BFhuJWje.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-D2fK97AG.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./VImg-UKGkvK5A.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSTile-DIm7BUL1.js";import"./FSCheckbox-tSiw0lhZ.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./index-BHk1SuU0.js";import"./hubFactory-BW9da_6X.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(l(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(l(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const lt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const mt=["Variations"];export{i as Variations,mt as __namedExportsOrder,lt as default};
