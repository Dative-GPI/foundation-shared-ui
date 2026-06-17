import{d as y,o as O,w as T,E as p,m as S,K as V,L as s,M as m}from"./vue.esm-bundler-C5-CUMHT.js";import{F as I}from"./FSDeviceOrganisationTileUI-Dz_pmJTj.js";import{F}from"./FSLoadTile-B4pkqwrF.js";import{a as b}from"./useDeviceOrganisations-B51htT3t.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-Dx0DcN2L.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./FSText-C8rmUTxK.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";import"./css-DSFbdPon.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./FSRow-C8aYwBu-.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSCol-DedFW0nl.js";import"./FSWindow-BM-m8I4D.js";import"./VWindowItem-G-NH8qmz.js";import"./group-B4VRq_l_.js";import"./proxiedModel-CV-HTW34.js";import"./lazy-DXVvciW4.js";import"./ssrBoot-ClVRhrXI.js";import"./transition-CgRUW3r8.js";import"./locale-BNkeanE6.js";import"./VBtn-CvDmdLsi.js";import"./border-DJaidMiz.js";import"./density-qUtw3dk7.js";import"./elevation-DfTZ1KyC.js";import"./rounded-Ctowy803.js";import"./variant-BJccJztY.js";import"./dimensions-Bm76csmg.js";import"./loader-CVb0Ac9O.js";import"./VProgressLinear-F46fcvb0.js";import"./anchor-Dj2AEc5N.js";import"./position-CTxKpBLl.js";import"./router-CTGX-puL.js";import"./index-asyjLxvi.js";import"./VDefaultsProvider-Dy-3lUkF.js";import"./FSStatus-DdAGC3Ux.js";import"./FSChip-PSYJcPlU.js";import"./useDateFormat-D3hpfVqH.js";import"./useTranslations-DAi7IZoP.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./useAppLanguageCode-CembXc6P.js";import"./useAppTimeZone-s1RlKu8w.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./FSColor-DHzcrx_i.js";import"./FSMenu-5jQDuEvO.js";import"./VMenu-dxHuUw__.js";import"./VOverlay-CG3iG1zZ.js";import"./easing-DY7PVvcf.js";import"./display-IUfV935l.js";import"./scopeId-DKs4U9S0.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-DRDndVEC.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-CQx2aZan.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-By4I55aC.js";import"./FSImage-CTV3ARHO.js";import"./FSImageUI-DrqF_CxM.js";import"./FSLoader-BTZOtjrt.js";import"./VImg-DXeUU_wB.js";import"./index-B3ZVJx30.js";import"./useImages-CyYFl-Jz.js";import"./composableFactory-Cxup7bUM.js";import"./serviceFactory-DI_gyWBF.js";import"./base-CmdGny12.js";import"./useAppAuthToken-DMcDmCCx.js";import"./FSTile-DmLtcb1O.js";import"./FSCheckbox-BwFpn-kB.js";import"./useRules-D4S0gmXa.js";import"./VCheckboxBtn-ODJx5um2.js";import"./VSelectionControl-D13_Swsb.js";import"./VLabel-COLF1QPQ.js";import"./VInput-Y0iB4nur.js";import"./index-pS3mXfMR.js";import"./hubFactory-kjEgbo8M.js";import"./base-BFVjoMA-.js";import"./useAppOrganisationId-CSdtG-as.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./subgroupingInfos-CBtJpNmo.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=s("FSLoadTile"),f=s("FSDeviceOrganisationTileUI");return e.getting?(m(),p(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),p(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const It={title:"Core/Components/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
