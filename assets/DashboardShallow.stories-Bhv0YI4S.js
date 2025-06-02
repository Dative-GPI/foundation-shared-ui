import{d as b,q as S,w,B as s,H as g,m as y,I as i,J as n}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as v}from"./FSDashboardShallowTileUI-WdhAQPIV.js";import{F as I}from"./FSLoadTile-BJVS6vIm.js";import{a as V}from"./useDashboardShallows-C6K5NMkC.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-Ji75yLFi.js";import"./FSIconCard-Dqsqzdxg.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSIcon-8KcAAKgU.js";import"./VIcon-ZzEkeSRE.js";import"./color-iZFxpsFf.js";import"./FSImage-DLNm9-cY.js";import"./FSImageUI-B_rD9Cl-.js";import"./FSLoader-0ho3eZau.js";import"./dimensions-CuS7VcMO.js";import"./elevation-DCJceMeT.js";import"./locale-BJmdjC_5.js";import"./VImg-UKGkvK5A.js";import"./rounded-T_eKj2ZY.js";import"./transition-C13qRIR1.js";import"./index-0XvVa1kA.js";import"./useImages-k0iD--OD.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSTile-DIm7BUL1.js";import"./FSClickable-CBfoSsDs.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./VProgressCircular-cB7gdjsO.js";import"./resizeObserver-C7qOORSR.js";import"./FSCheckbox-tSiw0lhZ.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-Dw5vpEc6.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-D1qNLyt7.js";import"./VInput-f1leR0eo.js";import"./index-BHk1SuU0.js";import"./FSChip-BAjrANNt.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";import"./dashboardTranslation-CqTP1_a6.js";import"./useAppLanguageCode-D1PzUORY.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:t}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:l,entity:t}}});function T(e,o,l,t,k,D){const h=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(n(),s(h,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(n(),s(f,y({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","selectable","bottomColor","modelValue"])):g("",!0)}const c=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:c},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardShallowTile
        v-for="(dashboardShallowId, index) in args.values"
        :key="index"
        :dashboardShallowId="dashboardShallowId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Le=["Variations"];export{a as Variations,Le as __namedExportsOrder,Ue as default};
