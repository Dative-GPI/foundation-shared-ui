import{d as y,b,c,w as F,z as C,B as S,Q as A,m as w,G as T,H as k,C as _,L as $,M as q,N as B}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as I}from"./FSAutocompleteField-Bhc8WovN.js";import{u as N}from"./uuid-DTaye2KM.js";import{u as P}from"./useTranslations-CLqRehXT.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as U}from"./FSCol-BR6T1l1C.js";import"./FSSearchField-BNfMDrZK.js";import"./FSTextField-C7rYmEAT.js";import"./FSBaseField-B4CV_xuh.js";import"./FSSpan-y1Ex52-c.js";import"./useBreakpoints-C6JPO-aN.js";import"./useSlots-c6yg-hhg.js";import"./FSRow-oDTnIAxc.js";import"./css-BgLnvP7H.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./FSCard-BedrH_cK.js";import"./VProgressCircular-C-4f-PXJ.js";import"./color-Bo6l13w9.js";import"./resizeObserver-Cb3oz2nO.js";import"./VIcon-GfKFLOEw.js";import"./FSIcon-LkE5-ra7.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./index-BJH4L2FX.js";import"./transition-DMoMR0kB.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./locale-BqFH1fBg.js";import"./density-Dl4v3sM7.js";import"./dimensions-DW-k5kP_.js";import"./proxiedModel-DKx29MO-.js";import"./loader-CQB_6PPx.js";import"./anchor-DCFmATqq.js";import"./rounded-CDCr0BOq.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DWgrY6Dg.js";import"./VList-Cd1xaDQJ.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./router-BXF-7Xxx.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./elevation-DgpWsjTu.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./FSSlideGroup-DuKHMc7B.js";import"./FSButtonNextIcon-CuTZlUtI.js";import"./VSlideGroupItem-41bDxGuE.js";import"./group-3MU8bQUc.js";import"./FSToggleSet-lwjzcNyZ.js";import"./FSWrapGroup-DldQIiCW.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./VSelect-IZDtUERE.js";import"./VMenu-sKuqJ8jm.js";import"./filter-DHa7wap7.js";const V=y({components:{FSAutocompleteField:I},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=P(),m=b([]),i=c(()=>e.items.concat(m.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("autocomplete.tag.selecteds","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(a=>i.value.find(p=>p.id===a)))},r=t=>{o("update:modelValue",[...e.modelValue??[],{id:N(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return F(()=>e.modelValue,t=>{var a;t&&(m.value=((a=e.modelValue)==null?void 0:a.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:i,onUpdateModelValue:s,onAddItem:r,onKeydown:l}}});function M(e,o,u,m,i,d){var r;const s=T("FSAutocompleteField");return k(),C(s,w({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(r=e.modelValue)==null?void 0:r.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),S({_:2},[A(e.$slots,(l,t)=>({name:t,fn:_(a=>[$(e.$slots,t,q(B(a)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=K(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const xe={title:"Foundation/Shared/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:U},props:Object.keys(o),setup(){return{...e}},template:`
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
    </FSCol>`})};var f,g,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const et=["Variations"];export{n as Variations,et as __namedExportsOrder,xe as default};
