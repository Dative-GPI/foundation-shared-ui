import{d as b,v as h,w as y,B as n,H as O,m as v,I as s,J as d}from"./vue.esm-bundler-CocPPKUI.js";import{F as I}from"./FSDashboardOrganisationTileUI-B4US1boy.js";import{F as V}from"./FSLoadTile-DFZjoCKI.js";import{a as F}from"./useDashboardOrganisations-CngKwlYR.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-JlViAhdT.js";import"./FSIconCard-Df7qPY01.js";import"./FSCard-2KUMcI8D.js";import"./FSCol-79-COv64.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./FSRow-BvJ7lU5E.js";import"./useColors-C1aD-Kb6.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-C1Gcptw7.js";import"./FSIcon-BGuuL0jz.js";import"./VIcon-ZjKwFcqe.js";import"./color-D50-hVV_.js";import"./FSImage-BNGlz8LX.js";import"./FSImageUI-i6dq6NUa.js";import"./FSLoader-JpoH2mis.js";import"./dimensions-Cv9Fwl7U.js";import"./elevation-DUhGVECn.js";import"./locale-_fONYh-8.js";import"./VImg-C2WY2bzk.js";import"./rounded-CBYChxif.js";import"./transition-bMLtH-b3.js";import"./index-5LM_ZUPq.js";import"./useImages-ImHO88Nc.js";import"./base-CmdGny12.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DuOSULz9.js";import"./FSSpan-CKhKq6E1.js";import"./useSlots-D4bv69lA.js";import"./FSTile-CP6rjFw-.js";import"./FSClickable-CqIDwjuA.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./VProgressCircular-k_tOz5gX.js";import"./resizeObserver-DDOqpSMx.js";import"./FSCheckbox-MGAv1q-u.js";import"./useRules-C3-AmzzE.js";import"./VCheckboxBtn-CRTq-u2o.js";import"./VSelectionControl-t1Q43Tu7.js";import"./density-2KuMGYl6.js";import"./proxiedModel-DW1FRKBO.js";import"./index-BwBNp3ym.js";import"./VLabel-yrR5w-fx.js";import"./VInput-JSCg5nQs.js";import"./index-hd-xIizf.js";import"./dashboardTranslation-DZd3-N0v.js";import"./useAppLanguageCode-yNRdweo3.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";const u=b({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:I,FSLoadTile:V},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:i}=F();return h(()=>{o(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,o,t,i,D,k){const c=s("FSLoadTile"),f=s("FSDashboardOrganisationTileUI");return e.getting?(d(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(d(),n(f,v({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):O("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(o),setup(){return{...e}},template:`
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
