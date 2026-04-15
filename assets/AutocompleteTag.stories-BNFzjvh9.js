import{d as y,e as F,c,w as S,E as b,G as C,X as A,m as w,L as T,M as k,H as _,S as $,U as q,V as I}from"./vue.esm-bundler-D_gXonxt.js";import{F as B}from"./FSAutocompleteField-DmyylIMV.js";import{u as P}from"./uuid-DTaye2KM.js";import{u as U}from"./useTranslations-D2TwtVAp.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-C3EJfcJX.js";import"./FSSearchField-Bhtathpg.js";import"./FSTextField-CxQWhEox.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./useBreakpoints-BWz07CZT.js";import"./useSlots-CdBAzqCX.js";import"./FSRow-cHWWqhhs.js";import"./css-Bznx04uW.js";import"./useColors-B49MKafH.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DdZUMbNR.js";import"./FSButton-cpkpLA7w.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./FSText-DL_5kFi7.js";import"./FSIcon-B9MXbR5l.js";import"./VIcon-gCapjdof.js";import"./color-DuOnfdFp.js";import"./useRender-BE0GCWmZ.js";import"./icons-DiQlgRdj.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSCard-Cxfe3-O9.js";import"./VProgressCircular-BomUTxjq.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./useRules-CohX4tE3.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./index-aKIkx5xA.js";import"./transition-CHyhkthg.js";import"./VLabel-BCYtLXrQ.js";import"./VInput-By-nMj_W.js";import"./locale-CEMLpecI.js";import"./proxiedModel-Cl0bR0rs.js";import"./density-W7RG4BnT.js";import"./dimensions-BYDjhYdL.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./anchor-DrPAsKKU.js";import"./rounded-yhlSUX6x.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-DJfojugM.js";import"./forwardRefs-C-GTDzx5.js";import"./index-CpkyVf-S.js";import"./FSDialogMenu-CYc22LXB.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./dialog-transition-d5ANZlFh.js";import"./FSSlideGroup-DWL-VMav.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./VSlideGroup-Bqij08hI.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-C7biUZpu.js";import"./FSWrapGroup-D5YRUBcz.js";import"./FSCheckbox-zoBL9ZjY.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./FSFadeOut-z7-cnvK3.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./filter-DB2eMWUq.js";const V=y({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=U(),i=F([]),n=c(()=>e.items.concat(i.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("autocomplete.tag.selecteds","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(r=>n.value.find(p=>p.id===r)))},a=t=>{o("update:modelValue",[...e.modelValue??[],{id:P(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return S(()=>e.modelValue,t=>{var r;t&&(i.value=((r=e.modelValue)==null?void 0:r.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:n,onUpdateModelValue:s,onAddItem:a,onKeydown:l}}});function M(e,o,u,i,n,d){var a;const s=T("FSAutocompleteField");return k(),b(s,w({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(a=e.modelValue)==null?void 0:a.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),C({_:2},[A(e.$slots,(l,t)=>({name:t,fn:_(r=>[$(e.$slots,t,q(I(r)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=K(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const ft={title:"Foundation/Shared/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(h=(g=m.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const gt=["Variations"];export{m as Variations,gt as __namedExportsOrder,ft as default};
