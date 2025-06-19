import{d as f,q as b,w as T,B as n,H as h,m as O,I as s,J as p}from"./vue.esm-bundler-BB--BfRN.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-icv9hPhD.js";import{F as I}from"./FSLoadTile-DmP7ukwS.js";import{a as V}from"./useDashboardOrganisationTypes-u57-zMqY.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-cnp_Rsdz.js";import"./FSIconCard-DaY8wfJA.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./FSRow-Bdc52rY8.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./FSIcon-BKav6CVU.js";import"./VIcon-Cl87HT90.js";import"./color-DIvEt_AX.js";import"./FSImage-D2nwrOf-.js";import"./FSImageUI-B_bAqKap.js";import"./FSLoader-Cf5HtYZd.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./VImg-DcLzuYY5.js";import"./rounded-BKWlZxOJ.js";import"./transition-GJJG9yri.js";import"./index--Ye8kcMr.js";import"./useImages-fX-VpO9W.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DmpXug6S.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSTile-pg-_mccU.js";import"./FSClickable-CwRD7A4m.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./FSCheckbox-ti2pWVdy.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./density-Xpr_P7nk.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-8zgUIpZ9.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./index-9ysw5oGg.js";import"./FSChip-fXKFC3cO.js";import"./dashboardTranslation-B4MMbMdA.js";import"./useAppLanguageCode-DVn301Ra.js";import"./base-CiabG-44.js";import"./useAppOrganisationId-D3b8yxVY.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const c=s("FSLoadTile"),y=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(p(),n(y,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):h("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const xe={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Be=["Variations"];export{o as Variations,Be as __namedExportsOrder,xe as default};
