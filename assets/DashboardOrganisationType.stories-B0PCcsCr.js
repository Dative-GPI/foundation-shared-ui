import{d as f,v as b,w as T,B as n,H as h,m as O,I as s,J as p}from"./vue.esm-bundler-PONd4AmC.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-Doc4ZM9N.js";import{F as I}from"./FSLoadTile-CmlEdWHt.js";import{a as V}from"./useDashboardOrganisationTypes-BLzPB7zn.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-K7NYhEKB.js";import"./FSIconCard-C0gGqVte.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSIcon-bsX1r_Ci.js";import"./VIcon-DIMW80nW.js";import"./color-_AiH45em.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./FSLoader-UOJfN8Qb.js";import"./dimensions-CNbPgA3L.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./VImg-DKyIpwU2.js";import"./rounded-BBFi0CuG.js";import"./transition-BXZIGKil.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSTile-Cm_QUpQV.js";import"./FSClickable-CyhgWkHC.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./FSCheckbox-CQphVYdu.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./density-CNNumQ_A.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./index-CANKuvlL.js";import"./FSChip-CfNKsjD1.js";import"./dashboardTranslation-BjqIvegu.js";import"./useAppLanguageCode-fPbUdbod.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const c=s("FSLoadTile"),y=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(p(),n(y,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):h("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Be={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ue=["Variations"];export{o as Variations,Ue as __namedExportsOrder,Be as default};
