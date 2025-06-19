import{d as b,q as S,w,B as s,H as g,m as y,I as i,J as n}from"./vue.esm-bundler-BB--BfRN.js";import{F as v}from"./FSDashboardShallowTileUI-Cn4q5j1M.js";import{F as I}from"./FSLoadTile-DmP7ukwS.js";import{a as V}from"./useDashboardShallows-KYOhoCdq.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-cnp_Rsdz.js";import"./FSIconCard-DaY8wfJA.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./FSRow-Bdc52rY8.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./FSIcon-BKav6CVU.js";import"./VIcon-Cl87HT90.js";import"./color-DIvEt_AX.js";import"./FSImage-D2nwrOf-.js";import"./FSImageUI-B_bAqKap.js";import"./FSLoader-Cf5HtYZd.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./VImg-DcLzuYY5.js";import"./rounded-BKWlZxOJ.js";import"./transition-GJJG9yri.js";import"./index--Ye8kcMr.js";import"./useImages-fX-VpO9W.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DmpXug6S.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSTile-pg-_mccU.js";import"./FSClickable-CwRD7A4m.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./FSCheckbox-ti2pWVdy.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./density-Xpr_P7nk.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-8zgUIpZ9.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./index-9ysw5oGg.js";import"./FSChip-fXKFC3cO.js";import"./base-CiabG-44.js";import"./useAppOrganisationId-D3b8yxVY.js";import"./dashboardTranslation-B4MMbMdA.js";import"./useAppLanguageCode-DVn301Ra.js";import"./pathCrumb-Db-cq5HI.js";const u=b({name:"FSDashboardShallowTile",components:{FSDashboardShallowTileUI:v,FSLoadTile:I},props:{dashboardShallowId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:t}=V();return S(()=>{o(e.dashboardShallowId)}),w(()=>e.dashboardShallowId,()=>{o(e.dashboardShallowId)}),{getting:l,entity:t}}});function T(e,o,l,t,k,D){const h=i("FSLoadTile"),f=i("FSDashboardShallowTileUI");return e.getting?(n(),s(h,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(n(),s(f,y({key:1,icon:e.entity.icon,code:e.entity.code,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","code","label","imageId","selectable","bottomColor","modelValue"])):g("",!0)}const c=F(u,[["render",T]]);u.__docgenInfo={displayName:"FSDashboardShallowTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardShallowId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardShallowTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardShallow",component:c,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardShallowTile:c},props:Object.keys(o),setup(){return{...e}},template:`
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
