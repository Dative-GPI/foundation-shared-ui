import{d as y,q as O,w as T,z as s,E as S,m as V,G as p,H as l}from"./vue.esm-bundler-CM4TIH-Q.js";import{F}from"./FSDeviceOrganisationTileUI-B-SrD_kS.js";import{F as I}from"./FSLoadTile-FbI2NTBN.js";import{a as b}from"./useDeviceOrganisations-CImzgQ6a.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-BDJOzY3R.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./FSRow-oDTnIAxc.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./FSIcon-LkE5-ra7.js";import"./FSWindow-DLGRzUAP.js";import"./FSText-yCmXS8Mf.js";import"./group-3MU8bQUc.js";import"./proxiedModel-DKx29MO-.js";import"./locale-BqFH1fBg.js";import"./VBtn-DqO4-7PD.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./dimensions-DW-k5kP_.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./router-BXF-7Xxx.js";import"./index-BkfcJ8bv.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./scopeId-COl1Iexy.js";import"./ssrBoot-BDHgcVA9.js";import"./transition-DMoMR0kB.js";import"./FSStatus-C-KHdQY_.js";import"./FSChip-BQxZ7VK4.js";import"./useDateFormat-hcE1Scoo.js";import"./useAppTimeZone-CP1Ic-gf.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./useTranslations-CLqRehXT.js";import"./FSColor-C-j-C7oN.js";import"./FSMenu-Da0q64tf.js";import"./VMenu-sKuqJ8jm.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./display-CUGteI3_.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-CqIDKnNi.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-sTywU57d.js";import"./FSImage-DOioESmt.js";import"./FSImageUI-DnMadCDH.js";import"./FSLoader-CRKSvpTi.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./FSTile-CUVojSsV.js";import"./FSCheckbox-DdLfY5jd.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./index-BJH4L2FX.js";import"./hubFactory-CQtOx0VB.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:F,FSLoadTile:I},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(l(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(l(),s(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):S("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const lt={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
