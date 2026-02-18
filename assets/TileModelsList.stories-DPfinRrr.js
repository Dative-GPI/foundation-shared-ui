import{a as b,b as T}from"./properties-Qw-O9fbT.js";import{F as d}from"./FSTileList-BxLITnwF.js";import{d as L,w as S,B as M,D as v,m as y,I as s,J as $,q as h}from"./vue.esm-bundler-B9lxvfDw.js";import{F as I}from"./FSModelTileUI-CIFG3-_H.js";import{u as q}from"./useModels-C_38oGYE.js";import{L as _}from"./lists-Dmp0D7yf.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSLoader-FkDR4IbG.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./color-CLtf7Qrc.js";import"./dimensions-n1mPaUbN.js";import"./elevation-DZ0Sccyb.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./useRender-DM2jvMPN.js";import"./FSFadeOut-DwiC6ECo.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./FSButtonNextIcon-BETncHzg.js";import"./FSButton-CxA5c6KR.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSRow-CFa9RNor.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./VIcon-DPcX_RaC.js";import"./icons-B5bBvhw0.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";import"./VSlideGroup-6AACxYIN.js";import"./index-7AXDWkBX.js";import"./display-BzNfeHa8.js";import"./goto-BiKnNwZ0.js";import"./group-BLkb5Gt4.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./useRules-Cun-4MZo.js";import"./VField-BoZICv48.js";import"./transition-Dh_EAQcC.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./density-DvMOIaQw.js";import"./loader-CaGstafT.js";import"./anchor-ByUPiJZt.js";import"./rounded-BrvRf1BO.js";import"./VDefaultsProvider-BurwYF19.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-Dli51uy9.js";import"./useTranslations-AmWs0SAL.js";import"./FSSimpleTileUI-NTI_Cssm.js";import"./FSIconCard-B96S8Zdc.js";import"./FSImage-BdRbjk_B.js";import"./FSImageUI-Dstvh29N.js";import"./VImg-UzuohEtG.js";import"./useImages-CXY-OT-0.js";import"./base-CmdGny12.js";import"./composableFactory-CzIPMomJ.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-Cnww6a6j.js";import"./FSTile-05t0iUHJ.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./index-EdIR5CJS.js";import"./filter-C1K_d8Vd.js";import"./base-DYlC2SM8.js";import"./useAppOrganisationId-BPp8-Hw1.js";const u=L({name:"FSTileModelsList",components:{FSTileList:d,FSModelTileUI:I},props:{modelFilters:{type:Object,required:!1,default:()=>({})},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{entities:t,getMany:m,fetching:l}=q();return S(()=>e.modelFilters,()=>{m(e.modelFilters)},{immediate:!0}),{models:t,fetching:l,ListDirections:_}}});function C(e,t,m,l,c,U){const f=s("FSModelTileUI"),g=s("FSTileList");return $(),M(g,y({items:e.models,loading:e.fetching,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),{"item.tile":v(({item:o,toggleSelect:F,direction:V})=>[h(f,{imageId:o.imageId,label:o.label,code:o.code,width:V===e.ListDirections.Column?"fill":void 0,selectable:e.$props.selectable,modelValue:(e.$props.modelValue??[]).includes(o.id),"onUpdate:modelValue":D=>F(o)},null,8,["imageId","label","code","width","selectable","modelValue","onUpdate:modelValue"])]),_:1},16,["items","loading","selectable","modelValue"])}const i=w(u,[["render",C]]);u.__docgenInfo={displayName:"FSTileModelsList",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/models/FSTileModelsList.vue"]};const mo={title:"Foundation/Core/Lists/Tile Lists/TileModelsList",component:i,tags:["autodocs"],argTypes:{...T([d],i),...b(i)}},r={args:{modelValue:[],modelFilters:{}},render:e=>({components:{FSTileModelsList:i},setup(){return{args:e}},template:`
      <FSTileModelsList
      v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    `})};var a,p,n;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    modelValue: [],
    modelFilters: {}
  },
  render: args => ({
    components: {
      FSTileModelsList
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTileModelsList
      v-model:modelValue="args.modelValue"
        v-bind="args"
      />
    \`
  })
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const lo=["Default"];export{r as Default,lo as __namedExportsOrder,mo as default};
