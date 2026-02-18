import{d as y,o as O,w as T,B as s,m as S,H as V,I as p,J as m}from"./vue.esm-bundler-D5n7z5qz.js";import{F as I}from"./FSDeviceOrganisationTileUI-Dw8qPO_n.js";import{F}from"./FSLoadTile-BYDP9OBJ.js";import{a as b}from"./useDeviceOrganisations-B22s0Itx.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSStatusesCarousel-D_HomSOY.js";import"./FSButton-CZRwWCRJ.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./css-CxcvJboa.js";import"./VIcon-mGJe0MYK.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";import"./FSWindow-BNICod7d.js";import"./VWindowItem-CYjgFUvM.js";import"./group-BRhJCq_i.js";import"./proxiedModel-BPspb6XO.js";import"./lazy-C77w73YC.js";import"./ssrBoot-C79LbZhX.js";import"./transition-DbItRNv8.js";import"./locale-DKpA43KM.js";import"./VBtn--7NXzl5z.js";import"./variant-j8rFA7nZ.js";import"./density-BnAGl-Nw.js";import"./elevation-JukLG-n6.js";import"./rounded-lfTNxM9v.js";import"./dimensions-B7sNhH2O.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./router-BDiSnJ53.js";import"./index-BYo1BiTt.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSStatus-BfrTZyYP.js";import"./FSChip-BDUVXgpY.js";import"./useDateFormat-Be4eIA50.js";import"./useAppTimeZone-tx8M1w-h.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./useTranslations-CFCS6HA-.js";import"./FSColor-UTke4uX4.js";import"./FSMenu-Cl6jFqyD.js";import"./VMenu-en6JpVrG.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./display-D8bdLPBN.js";import"./scopeId-DC5duiFx.js";import"./forwardRefs-C-GTDzx5.js";import"./connectivities-QAv_oTwm.js";import"./alertsTools-DXX-KwfE.js";import"./badge-D9p4Oj7n.js";import"./FSDivider-IzUejiDW.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./FSLoader-Cl8hDT8j.js";import"./VImg-BlUyfKKc.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-DnnqQnwQ.js";import"./FSCheckbox-CpWOjTw-.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./index-6jMyctoo.js";import"./hubFactory-B0gUdtus.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./deviceConnectivityDetails-DsuFztYx.js";import"./pathCrumb-Db-cq5HI.js";import"./address-CE2z3AEI.js";const c=y({name:"FSDeviceOrganisationTile",components:{FSDeviceOrganisationTileUI:I,FSLoadTile:F},props:{deviceOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0},alertTo:{type:Function,required:!1,default:null}},emits:["update:modelValue"],setup(e){const{get:t,getting:r,entity:a}=b();return O(()=>{t(e.deviceOrganisationId)}),T(()=>e.deviceOrganisationId,()=>{t(e.deviceOrganisationId)}),{getting:r,entity:a}}});function w(e,t,r,a,D,$){var n;const g=p("FSLoadTile"),f=p("FSDeviceOrganisationTileUI");return e.getting?(m(),s(g,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},null,8,["selectable","modelValue"])):e.entity?(m(),s(f,S({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,deviceConnectivity:e.entity.connectivity,deviceWorstAlert:e.entity.worstAlert,deviceAlerts:e.entity.alerts,modelStatuses:e.entity.modelStatuses,deviceStatuses:(n=e.entity.status)==null?void 0:n.statuses,selectable:e.$props.selectable,alertTo:e.$props.alertTo,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[1]||(t[1]=o=>e.$emit("update:modelValue",o))},e.$attrs),null,16,["imageId","label","code","deviceConnectivity","deviceWorstAlert","deviceAlerts","modelStatuses","deviceStatuses","selectable","alertTo","modelValue"])):V("",!0)}const v=k(c,[["render",w]]);c.__docgenInfo={displayName:"FSDeviceOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"deviceOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"alertTo",type:{name:"func"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDeviceOrganisationTile.vue"]};const ft={title:"Foundation/Core/Tiles/DeviceOrganisation",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},i={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:t})=>({components:{FSDeviceOrganisationTile:v},props:Object.keys(t),setup(){return{...e}},template:`
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
}`,...(u=(d=i.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const yt=["Variations"];export{i as Variations,yt as __namedExportsOrder,ft as default};
