import{a as b,b as T}from"./properties-Qw-O9fbT.js";import{F as d}from"./FSTileList-B36mIUFw.js";import{d as L,w as S,B as M,D as v,m as y,I as s,J as $,q as h}from"./vue.esm-bundler-D5n7z5qz.js";import{F as I}from"./FSModelTileUI-nanWIqi2.js";import{u as q}from"./useModels-CwoL5iCH.js";import{L as _}from"./lists-Dmp0D7yf.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSCol-D_lbFmZy.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSLoader-Cl8hDT8j.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./color-BW36qAym.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./useRender-BcOya-6A.js";import"./FSFadeOut-C918yX_r.js";import"./uuid-DTaye2KM.js";import"./FSSlideGroup-D85Y1rXq.js";import"./FSButtonNextIcon-BnFBmJK4.js";import"./FSButton-Cpjx6pT4.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSCard-DLunkI-x.js";import"./FSRow-DIk8KFbG.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./FSSpan-BN7wkmby.js";import"./VSlideGroup-BxUK8FWF.js";import"./index-6jMyctoo.js";import"./display-D8bdLPBN.js";import"./goto-BwndLEHi.js";import"./group-BRhJCq_i.js";import"./VSlideGroupItem-CYOAdS4m.js";import"./FSSearchField-B5GkzB7N.js";import"./FSTextField-BEn-1eo1.js";import"./FSBaseField-Buivlp1M.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./transition-DbItRNv8.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./density-BnAGl-Nw.js";import"./loader-COXi3ZW_.js";import"./anchor-CPKk15qm.js";import"./rounded-lfTNxM9v.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BKpPdzm5.js";import"./useTranslations-CFCS6HA-.js";import"./FSSimpleTileUI-Cb7ASF5N.js";import"./FSIconCard-C3NcCNyZ.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./VImg-BlUyfKKc.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-ITpf6FQn.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./filter-C1K_d8Vd.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const u=L({name:"FSTileModelsList",components:{FSTileList:d,FSModelTileUI:I},props:{modelFilters:{type:Object,required:!1,default:()=>({})},modelValue:{type:Array,required:!1,default:()=>[]},selectable:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e){const{entities:t,getMany:m,fetching:l}=q();return S(()=>e.modelFilters,()=>{m(e.modelFilters)},{immediate:!0}),{models:t,fetching:l,ListDirections:_}}});function C(e,t,m,l,c,U){const f=s("FSModelTileUI"),g=s("FSTileList");return $(),M(g,y({items:e.models,loading:e.fetching,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":t[0]||(t[0]=o=>e.$emit("update:modelValue",o))},e.$attrs),{"item.tile":v(({item:o,toggleSelect:F,direction:V})=>[h(f,{imageId:o.imageId,label:o.label,code:o.code,width:V===e.ListDirections.Column?"fill":void 0,selectable:e.$props.selectable,modelValue:(e.$props.modelValue??[]).includes(o.id),"onUpdate:modelValue":D=>F(o)},null,8,["imageId","label","code","width","selectable","modelValue","onUpdate:modelValue"])]),_:1},16,["items","loading","selectable","modelValue"])}const i=w(u,[["render",C]]);u.__docgenInfo={displayName:"FSTileModelsList",exportName:"default",description:"",tags:{},props:[{name:"modelFilters",type:{name:"ModelFilters"},required:!1,defaultValue:{func:!0,value:"() => ({})"}},{name:"modelValue",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/lists/models/FSTileModelsList.vue"]};const so={title:"Foundation/Core/Lists/Tile Lists/TileModelsList",component:i,tags:["autodocs"],argTypes:{...T([d],i),...b(i)}},r={args:{modelValue:[],modelFilters:{}},render:e=>({components:{FSTileModelsList:i},setup(){return{args:e}},template:`
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
}`,...(n=(p=r.parameters)==null?void 0:p.docs)==null?void 0:n.source}}};const ao=["Default"];export{r as Default,ao as __namedExportsOrder,so as default};
