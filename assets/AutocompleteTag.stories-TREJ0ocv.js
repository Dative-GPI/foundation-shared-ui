import{d as y,e as S,c,w as b,E as C,G as F,X as A,m as w,L as T,M as k,H as _,S as $,U as q,V as I}from"./vue.esm-bundler-NVdFPFZB.js";import{F as B}from"./FSAutocompleteField-nltmptol.js";import{u as P}from"./useTranslations-D5uJM3hx.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-KRtq6OYO.js";import"./FSSearchField-Dnz4Beq9.js";import"./FSTextField-Cq4gI6mX.js";import"./FSBaseField-Bph8nCfp.js";import"./FSSpan-B28b2m0n.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useColors-v3I-6cBg.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./FSButton-BqreeKOn.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DIbyStIN.js";import"./FSIcon-BcHBVf_o.js";import"./VIcon-Cu6WQqXu.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./icons-Cl0t_6pZ.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSCard-DxY0aXhp.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./transition-a5pzBS6c.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./density-CE2FkSgs.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./anchor-Se7MGGLO.js";import"./rounded-CS1_z6Jk.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Blv54jCg.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B4rZgXN-.js";import"./FSDialogMenu-BzRN-uoP.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./dialog-transition-B9S_00bc.js";import"./FSSlideGroup-BbqArISU.js";import"./FSButtonNextIcon-CyemLlRb.js";import"./VSlideGroup-B-JqmwGu.js";import"./goto-CvfYl6LX.js";import"./group-BLkYT3DE.js";import"./VSlideGroupItem-DS171Ouj.js";import"./FSToggleSet-D0wxZ1Az.js";import"./FSWrapGroup-Ddblgb9F.js";import"./FSCheckbox-D4XH1I7L.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSFadeOut-W61q8jFE.js";import"./FSLoader-BoDinVVO.js";import"./elevation-DQ_qKX67.js";import"./FSRadio-Dd1EMADi.js";import"./VSelect-CVWNfrM9.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VMenu-BCj9c0xY.js";import"./filter-C4s97JnQ.js";import"./eventQueue-D85hWBFd.js";const V=y({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=P(),i=S([]),n=c(()=>e.items.concat(i.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("autocomplete.tag.selecteds","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(r=>n.value.find(p=>p.id===r)))},a=t=>{o("update:modelValue",[...e.modelValue??[],{id:U(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return b(()=>e.modelValue,t=>{var r;t&&(i.value=((r=e.modelValue)==null?void 0:r.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:n,onUpdateModelValue:s,onAddItem:a,onKeydown:l}}});function M(e,o,u,i,n,d){var a;const s=T("FSAutocompleteField");return k(),C(s,w({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(a=e.modelValue)==null?void 0:a.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),F({_:2},[A(e.$slots,(l,t)=>({name:t,fn:_(r=>[$(e.$slots,t,q(I(r)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=K(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const gt={title:"Shared/Components/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>`})};var f,g,h;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    args: {
      items: [{
        id: "1",
        label: "Alpha",
        isCustom: false
      }, {
        id: "2",
        label: "Beta",
        isCustom: false
      }, {
        id: "3",
        label: "Charly",
        isCustom: false
      }],
      value1: null,
      value2: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSAutocompleteTag,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSAutocompleteTag
        label="Default items and new value"
        :items="args.items"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSAutocompleteTag
        label="New value"
        v-model="args.value2"
      />
    </FSCol>\`
  })
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const ht=["Variations"];export{m as Variations,ht as __namedExportsOrder,gt as default};
