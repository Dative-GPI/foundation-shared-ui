import{d as b,q as S,w,z as s,E as g,m as y,G as i,H as n}from"./vue.esm-bundler-DtArtqdn.js";import{F as v}from"./FSDashboardShallowTileUI-DUpNcBF9.js";import{F as I}from"./FSLoadTile-CBQFx1gm.js";import{a as V}from"./useDashboardShallows-DI3fcNbG.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-D3KSbSt2.js";import"./FSIconCard-B3mmomhn.js";import"./FSCard-oEcmHswj.js";import"./FSCol-D6yYDi9X.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./FSRow-C-mN1bTt.js";import"./useColors-P6sW9vWR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";import"./FSIcon-DAU03b1P.js";import"./VIcon-_X0ionFS.js";import"./color-DKVd81aj.js";import"./FSImage-DyJ7YE9e.js";import"./FSImageUI-CJROiAZk.js";import"./FSLoader-C5CmIvK9.js";import"./dimensions-Dt4h5jdR.js";import"./elevation-DuPJjm1T.js";import"./locale-EnvrzLNX.js";import"./VImg-DB10nKT8.js";import"./rounded-B9giz-GX.js";import"./transition-POm6u0ds.js";import"./index-ShtRROw2.js";import"./useImages-Ob47Tzpe.js";import"./base-CmdGny12.js";import"./composableFactory-D6jnN1uy.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-CqNI4hgs.js";import"./FSSpan-Btkwe66a.js";import"./useSlots-DbyfVVj5.js";import"./FSTile-BxDceP5O.js";import"./FSClickable-Lp9mb8CD.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./FSCheckbox-D615kJWP.js";import"./useRules-eDN7Chft.js";import"./VSelectionControl-D_AGLwLV.js";import"./density-96HGjcby.js";import"./proxiedModel-DNPVb8sx.js";import"./index-DWcj--5B.js";import"./VLabel-D5MHSYH0.js";import"./VInput-Dw4F_0vm.js";import"./index-YdMT2sR1.js";import"./FSChip-BhYAH8Ub.js";import"./base-BeFRilZr.js";import"./useAppOrganisationId-DlPw95JR.js";import"./dashboardTranslation-B8McJAJF.js";import"./useAppLanguageCode-xqeUHdoL.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:t}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:l,entity:t}}});function T(e,o,l,t,k,D){const h=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(n(),s(h,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(n(),s(f,y({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","selectable","bottomColor","modelValue"])):g("",!0)}const c=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Be={title:"Foundation/Core/Tiles/DashboardShallow",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Le=["Variations"];export{a as Variations,Le as __namedExportsOrder,Be as default};
