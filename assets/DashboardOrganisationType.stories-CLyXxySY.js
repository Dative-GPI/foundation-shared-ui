import{d as f,q as b,w as T,z as n,E as h,m as O,G as s,H as p}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-CFoh9aKA.js";import{F as I}from"./FSLoadTile-FbI2NTBN.js";import{a as V}from"./useDashboardOrganisationTypes-Dw8co7i_.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-D1P1i1cE.js";import"./FSIconCard-BeL7xzLJ.js";import"./FSCard-BedrH_cK.js";import"./FSCol-BR6T1l1C.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./FSRow-oDTnIAxc.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSIcon-LkE5-ra7.js";import"./VIcon-GfKFLOEw.js";import"./color-Bo6l13w9.js";import"./FSImage-DOioESmt.js";import"./FSImageUI-DnMadCDH.js";import"./FSLoader-CRKSvpTi.js";import"./dimensions-DW-k5kP_.js";import"./elevation-DgpWsjTu.js";import"./locale-BqFH1fBg.js";import"./VImg-D7XF-hIS.js";import"./rounded-CDCr0BOq.js";import"./transition-DMoMR0kB.js";import"./index-DWgrY6Dg.js";import"./useImages-X7qHyDlJ.js";import"./base-CmdGny12.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3v3Ax1PV.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./FSTile-CUVojSsV.js";import"./FSClickable-CXLm7rHe.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./FSCheckbox-DdLfY5jd.js";import"./useRules-B12Yr5ve.js";import"./VSelectionControl-MVg9W9ha.js";import"./density-Dl4v3sM7.js";import"./proxiedModel-DKx29MO-.js";import"./index-BkfcJ8bv.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./index-BJH4L2FX.js";import"./FSChip-BQxZ7VK4.js";import"./dashboardTranslation-Ck_0ef_t.js";import"./useAppLanguageCode-CN6bsmo6.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const c=s("FSLoadTile"),y=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(p(),n(y,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):h("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const xe={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var l,d,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      FSDashboardOrganisationTypeTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTypeTile
        v-for="(dashboardOrganisationTypeId, index) in args.values"
        :key="index"
        :dashboardOrganisationTypeId="dashboardOrganisationTypeId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ue=["Variations"];export{o as Variations,Ue as __namedExportsOrder,xe as default};
