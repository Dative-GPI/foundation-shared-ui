import{d as f,o as b,w as T,B as n,m as h,H as O,I as s,J as p}from"./vue.esm-bundler-D5n7z5qz.js";import{F as v}from"./FSDashboardOrganisationTypeTileUI-D2FNK2kw.js";import{F as I}from"./FSLoadTile-B_OaMmgm.js";import{a as V}from"./useDashboardOrganisationTypes-DWyektPH.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-Csj1FPWH.js";import"./FSIconCard-BlsFbvOA.js";import"./FSCard-DENSLTM_.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-COEXNh00.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-BcqfMidt.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./useRender-Dce1Ng4u.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./FSImage-EC-hlP5h.js";import"./FSImageUI-BLy7Ukeh.js";import"./FSLoader-uhE9mCg0.js";import"./dimensions-D_nx6Jbk.js";import"./elevation-62d6MvS5.js";import"./locale-n4v42L7l.js";import"./proxiedModel-Cv3qT1cZ.js";import"./VImg-CFhtVVj8.js";import"./rounded-BSNeeq4o.js";import"./transition-gfLL8RoD.js";import"./index-u79WnTSR.js";import"./useImages-tmSeA2NQ.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-CyDQptGk.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSTile-BiFTCuMc.js";import"./FSCheckbox-DMg4fEo0.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-ZIdy5nkM.js";import"./VSelectionControl-Cd6FgV1q.js";import"./density-BTT1solu.js";import"./index-C2v-jVLO.js";import"./VLabel-DPXmEVvJ.js";import"./VInput-CbNwc64i.js";import"./index-Bo6vw90T.js";import"./FSChip-BmAEKlmX.js";import"./dashboardTranslation-5aW7dfuK.js";import"./useAppLanguageCode-CWFK3Ooe.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const u=f({name:"FSDashboardOrganisationTypeTile",components:{FSDashboardOrganisationTypeTileUI:v,FSLoadTile:I},props:{dashboardOrganisationTypeId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:a,getting:t,entity:i}=V();return b(()=>{a(e.dashboardOrganisationTypeId)}),T(()=>e.dashboardOrganisationTypeId,()=>{a(e.dashboardOrganisationTypeId)}),{getting:t,entity:i}}});function S(e,a,t,i,k,D){const c=s("FSLoadTile"),y=s("FSDashboardOrganisationTypeTileUI");return e.getting?(p(),n(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[0]||(a[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(p(),n(y,h({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,selectable:e.$props.selectable,bottomColor:e.entity.colors,modelValue:e.$props.modelValue,"onUpdate:modelValue":a[1]||(a[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["code","icon","label","imageId","selectable","bottomColor","modelValue"])):O("",!0)}const g=F(u,[["render",S]]);u.__docgenInfo={displayName:"FSDashboardOrganisationTypeTile",exportName:"default",description:"",tags:{},props:[{name:"dashboardOrganisationTypeId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSDashboardOrganisationTypeTile.vue"]};const Le={title:"Foundation/Core/Tiles/DashboardOrganisationType",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},o={args:{args:{values:["1","2","3"],selected:[!1,!1,!1]}},render:(e,{argTypes:a})=>({components:{FSDashboardOrganisationTypeTile:g},props:Object.keys(a),setup(){return{...e}},template:`
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
}`,...(m=(d=o.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Ne=["Variations"];export{o as Variations,Ne as __namedExportsOrder,Le as default};
