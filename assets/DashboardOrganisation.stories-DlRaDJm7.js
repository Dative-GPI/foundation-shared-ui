import{d as c,g as h,w as y,y as n,z as s,A as d,m as O,F as v}from"./vue.esm-bundler-DTB_q9xr.js";import{F}from"./FSDashboardOrganisationTileUI-DXez82TC.js";import{F as I}from"./FSLoadTile-BbriS9IV.js";import{a as V}from"./useDashboardOrganisations-kbzoA4Hp.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BT9SMgLd.js";import"./FSIconCard-DaZBidMJ.js";import"./FSCard-C6D9gNrD.js";import"./FSCol-CYWCfIBP.js";import"./css-B7hQ34V-.js";import"./useBreakpoints-ERBVGIQe.js";import"./FSRow-CFFgZ74C.js";import"./useColors-BWKJNLz8.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CX_N7n5F.js";import"./FSIcon-CaaGuK6D.js";import"./VIcon-DzZvThha.js";import"./color-Du5JXqac.js";import"./FSImage-BI5HPXDV.js";import"./FSImageUI-DJb3mSkN.js";import"./FSLoader-IaO7i80m.js";import"./dimensions-CqoZOW6j.js";import"./elevation-JfXKLVfD.js";import"./locale-BJQwrXJ7.js";import"./VImg-C1aVTsth.js";import"./rounded-ErtzAGHK.js";import"./transition-DhTIerNz.js";import"./index-DS9MhfY5.js";import"./useImages-DHwuL45g.js";import"./base-CmdGny12.js";import"./serviceFactory-DAEdCiSt.js";import"./lodash-BiW_TGGX.js";import"./composableFactory-CG8osPlO.js";import"./useAppAuthToken-B5E2e0uj.js";import"./FSSpan-DGSHCe_l.js";import"./useSlots-BnylMYIF.js";import"./FSTile-NKozYWaP.js";import"./FSClickable-BkJRwj5f.js";import"./VProgressCircular-DjSdELIn.js";import"./resizeObserver-BhfhgZOk.js";import"./FSCheckbox-Bdwx0Alv.js";import"./useRules-D0gcbU57.js";import"./VSelectionControl-CFrRrZff.js";import"./density-CmGe4Vfq.js";import"./proxiedModel-Atn7Z0Ko.js";import"./index-DMxVfgfA.js";import"./VLabel-33JaQml4.js";import"./VInput-DGUvNq3c.js";import"./index-UH0ZuYvc.js";import"./form-_oo3cshG.js";import"./dashboardTranslation-CCi8mM_Y.js";import"./useAppLanguageCode-CJD7t5rC.js";import"./pathCrumb-Db-cq5HI.js";import"./base-XmH0JLOD.js";import"./useAppOrganisationId-C2nceDRs.js";const u=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:F,FSLoadTile:I},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return h(()=>{a(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{a(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,a,t,i,D,k){const f=n("FSLoadTile"),b=n("FSDashboardOrganisationTileUI");return e.getting?(s(),d(f,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(s(),d(b,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):v("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ce={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var p,l,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
      FSDashboardOrganisationTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const qe=["Variations"];export{o as Variations,qe as __namedExportsOrder,Ce as default};