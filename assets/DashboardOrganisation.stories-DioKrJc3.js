import{d as b,v as h,w as y,B as n,H as O,m as v,I as s,J as d}from"./vue.esm-bundler-PONd4AmC.js";import{F as I}from"./FSDashboardOrganisationTileUI-D6614wKf.js";import{F as V}from"./FSLoadTile-CmlEdWHt.js";import{a as F}from"./useDashboardOrganisations-C3_8-r_-.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-K7NYhEKB.js";import"./FSIconCard-C0gGqVte.js";import"./FSCard-DYD9Tm3w.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-Dytl_X2F.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CTzRPxOi.js";import"./FSIcon-bsX1r_Ci.js";import"./VIcon-DIMW80nW.js";import"./color-_AiH45em.js";import"./FSImage-CxsBRX2Y.js";import"./FSImageUI-DSgZP-Av.js";import"./FSLoader-UOJfN8Qb.js";import"./dimensions-CNbPgA3L.js";import"./elevation-CL0Py7Fp.js";import"./locale-CoLhg8Wl.js";import"./VImg-DKyIpwU2.js";import"./rounded-BBFi0CuG.js";import"./transition-BXZIGKil.js";import"./index-Bb4mSIJO.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSTile-Cm_QUpQV.js";import"./FSClickable-CyhgWkHC.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./VProgressCircular-CDK6zSYw.js";import"./resizeObserver-UZYihl4g.js";import"./FSCheckbox-CQphVYdu.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-B-CDiKqR.js";import"./VSelectionControl-HwS3bHvU.js";import"./density-CNNumQ_A.js";import"./proxiedModel-vOB1Q9Gh.js";import"./index-B8vPsAiL.js";import"./VLabel-5AeJpfXJ.js";import"./VInput-ClaXJMCA.js";import"./index-CANKuvlL.js";import"./dashboardTranslation-BjqIvegu.js";import"./useAppLanguageCode-fPbUdbod.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";const u=b({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:I,FSLoadTile:V},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:i}=F();return h(()=>{o(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,o,t,i,D,k){const c=s("FSLoadTile"),f=s("FSDashboardOrganisationTileUI");return e.getting?(d(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(d(),n(f,v({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):O("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var l,p,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const xe=["Variations"];export{a as Variations,xe as __namedExportsOrder,Ue as default};
