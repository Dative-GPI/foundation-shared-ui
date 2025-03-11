import{d as b,o as S,w,z as i,E as g,m as y,G as s,H as d}from"./vue.esm-bundler-CUSnV4DE.js";import{F as v}from"./FSDashboardShallowTileUI-CQ-qfDlV.js";import{F as I}from"./FSLoadTile-CISJGXh8.js";import{a as V}from"./useDashboardShallows-B_A-U8Qb.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-CH6Jrfv2.js";import"./FSIconCard-DzysKg3d.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSIcon-Cp7BQBW6.js";import"./VIcon-DeLOaNVc.js";import"./color-CgsoZSKd.js";import"./FSImage-DejQHEUL.js";import"./FSImageUI-C65sLZ4Z.js";import"./FSLoader-BxWH0Nmg.js";import"./dimensions-BI5CQRk1.js";import"./elevation-C08MHLji.js";import"./locale-DYN4KMd8.js";import"./VImg-DinzZLZB.js";import"./rounded-DQzQH8wE.js";import"./transition-C81aHyit.js";import"./index-CeZa2hiu.js";import"./useImages-B9Gap5IC.js";import"./base-CmdGny12.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BM6m0Bni.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSTile-CrH2i7Zg.js";import"./FSClickable-Bn4xIsxH.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./FSCheckbox-DT2R4my4.js";import"./useRules-CYZMRvpC.js";import"./VSelectionControl-BrUoGkRx.js";import"./density-DAqBVexQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-BdaiM53K.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./index-DDQZ-RJM.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./dashboardTranslation-B6EkJt2k.js";import"./useAppLanguageCode-CV1UAuz5.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:l}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:t,entity:l}}});function T(e,o,t,l,k,D){const c=s("FSLoadTile"),f=s("FSDashboardShallowTileUI");return e.getting?(d(),i(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(d(),i(f,y({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","editable","bottomColor","modelValue"])):g("",!0)}const h=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:h,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:h},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var n,p,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      FSDashboardShallowTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(p=a.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Be=["Variations"];export{a as Variations,Be as __namedExportsOrder,Ue as default};
