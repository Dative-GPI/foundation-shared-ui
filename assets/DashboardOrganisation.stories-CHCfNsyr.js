import{d as c,o as h,w as y,A as n,B as s,x as O,G as v,I as d}from"./vue.esm-bundler-CTTOvLCD.js";import{F as I}from"./FSDashboardOrganisationTileUI-DVLRJ9NE.js";import{F as V}from"./FSLoadTile-DgDYToEN.js";import{a as F}from"./useDashboardOrganisations-CHaQlPns.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-CEjcoOEX.js";import"./FSIconCard-CGvq_r_x.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./FSRow-C8EFLcn9.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./FSIcon-yzGYQgqh.js";import"./VIcon-DzkIKThE.js";import"./color-DTA1Qd0w.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./dimensions-DIR9-JzD.js";import"./elevation-CqdG4vF6.js";import"./locale-Guk_W035.js";import"./VImg-C1IcDibP.js";import"./rounded-5tkyiosR.js";import"./transition-C1y9a89u.js";import"./index-CK42gwlP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSTile-CbnAVjso.js";import"./FSClickable-DznopAj9.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./FSCheckbox-CVOakf5q.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./density-n-hig0Tg.js";import"./proxiedModel-Da7OD98r.js";import"./index-Bj6Uq_NX.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./index-B698eGq-.js";import"./form-gxFDX6UX.js";import"./dashboardTranslation-AqxFLxT8.js";import"./useAppLanguageCode-DIMcCLwL.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";const u=c({name:"FSDashboardOrganisationTile",components:{FSDashboardOrganisationTileUI:I,FSLoadTile:V},props:{dashboardOrganisationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:t,entity:i}=F();return h(()=>{o(e.dashboardOrganisationId)}),y(()=>e.dashboardOrganisationId,()=>{o(e.dashboardOrganisationId)}),{getting:t,entity:i}}});function S(e,o,t,i,D,k){const f=n("FSLoadTile"),b=n("FSDashboardOrganisationTileUI");return e.getting?(d(),s(f,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["editable","modelValue"])):e.entity?(d(),s(b,O({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,editable:e.$props.editable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","editable","bottomColor","modelValue"])):v("",!0)}const g=T(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTile.vue"]};const Ue={title:"Foundation/Core/Tiles/DashboardOrganisation",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},a={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSDashboardOrganisationTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSDashboardOrganisationTile
        v-for="(dashboardOrganisationId, index) in args.values"
        :key="index"
        :dashboardOrganisationId="dashboardOrganisationId"
        href="/"
        v-model="args.selected[index]"
      />
    </div>`})};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const xe=["Variations"];export{a as Variations,xe as __namedExportsOrder,Ue as default};
