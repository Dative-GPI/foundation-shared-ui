import{d as y,e as S,c,w as b,E as C,G as F,X as A,m as w,L as T,M as k,H as _,S as $,U as q,V as I}from"./vue.esm-bundler-NVdFPFZB.js";import{F as B}from"./FSAutocompleteField-CfIbenZ4.js";import{u as P}from"./useTranslations-D5uJM3hx.js";import{u as U}from"./uuid-DTaye2KM.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-ChYB2Oag.js";import"./FSSearchField-TAeMrCJx.js";import"./FSTextField-CCgGVMUk.js";import"./FSBaseField-DjPNexk7.js";import"./FSSpan-CffnRYnX.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./FSButton-C9qE_hma.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DkgFU9ZB.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./icons-AciKn6XY.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSCard-X6BL7IDn.js";import"./VProgressCircular-D014ccrC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./useRules-eFcMZq7y.js";import"./VTextField-C-VZod1v.js";import"./VField-C_JZJuDz.js";import"./index-C0WTB2TM.js";import"./transition-Dqm8buww.js";import"./VLabel-DOSQu5RP.js";import"./VInput-CBXzUquC.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./density-HajNgXBf.js";import"./dimensions-BuDdBtmf.js";import"./loader-DOKDD2NA.js";import"./VProgressLinear-DA0V-MGc.js";import"./anchor-C-rl7L3L.js";import"./rounded-BE8u9DAQ.js";import"./easing-DY7PVvcf.js";import"./VDefaultsProvider-Cane1ZR3.js";import"./forwardRefs-C-GTDzx5.js";import"./index-D_7bL_IH.js";import"./FSDialogMenu-DFLdv4ZH.js";import"./VDialog-D_wwtbpx.js";import"./VOverlay-flKIXg07.js";import"./display-RdUuPsY9.js";import"./lazy-D5C5Y6_6.js";import"./router-D2Xcou1T.js";import"./scopeId-CVBASNvj.js";import"./dialog-transition-Y-HqWA1J.js";import"./FSSlideGroup-BLif3f0e.js";import"./FSButtonNextIcon-D5s36be0.js";import"./VSlideGroup-DLaaL0Lk.js";import"./goto-D2YfjHNt.js";import"./group-g6KFhHmW.js";import"./VSlideGroupItem-BNzWd0Zb.js";import"./FSToggleSet-BsHkDw8a.js";import"./FSWrapGroup-CZDPgZeJ.js";import"./FSCheckbox-BEgzMGmB.js";import"./VCheckboxBtn-BT3SzIyH.js";import"./VSelectionControl-TRNlUp1F.js";import"./index-CDgYZebE.js";import"./FSFadeOut-DWR8A1ny.js";import"./FSLoader-DRppy7ch.js";import"./elevation-DyTGrbk9.js";import"./FSRadio-BJhcq_TI.js";import"./VSelect-CfYUtP1Q.js";import"./VList-Bkkbsc6W.js";import"./ssrBoot-BimrXMWA.js";import"./border-D-0PuVU0.js";import"./variant-De5GYaDP.js";import"./VImg-CF0d7Fd2.js";import"./VDivider-sEPw-6oz.js";import"./VMenu-DfiSs3vJ.js";import"./filter-CEUeuq74.js";import"./eventQueue-D85hWBFd.js";const V=y({components:{FSAutocompleteField:B},props:{placeholder:{type:String,required:!1,default:null},items:{type:Array,required:!1,default:()=>[]},modelValue:{type:Array,required:!1,default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:o}){const{$tr:u}=P(),i=S([]),n=c(()=>e.items.concat(i.value)),d=c(()=>{var t;return!e.modelValue||e.modelValue.length===0?null:e.placeholder??u("autocomplete.tag.selecteds","{0} item(s) selected",((t=e.modelValue)==null?void 0:t.length)??0)}),s=t=>{o("update:modelValue",t==null?void 0:t.map(r=>n.value.find(p=>p.id===r)))},a=t=>{o("update:modelValue",[...e.modelValue??[],{id:U(),label:t,isCustom:!0}])},l=t=>{t.key==="Backspace"&&o("update:modelValue",[...e.modelValue??[]])};return b(()=>e.modelValue,t=>{var r;t&&(i.value=((r=e.modelValue)==null?void 0:r.filter(p=>p.isCustom))??[])},{immediate:!0}),{innerPlaceholder:d,innerItems:n,onUpdateModelValue:s,onAddItem:a,onKeydown:l}}});function M(e,o,u,i,n,d){var a;const s=T("FSAutocompleteField");return k(),C(s,w({placeholder:e.innerPlaceholder,items:e.innerItems,showSearch:!0,multiple:!0,modelValue:(a=e.modelValue)==null?void 0:a.map(l=>l.id),"onUpdate:modelValue":e.onUpdateModelValue,"onAdd:item":e.onAddItem,onKeydown:e.onKeydown},e.$attrs),F({_:2},[A(e.$slots,(l,t)=>({name:t,fn:_(r=>[$(e.$slots,t,q(I(r)))])}))]),1040,["placeholder","items","modelValue","onUpdate:modelValue","onAdd:item","onKeydown"])}const v=K(V,[["render",M]]);V.__docgenInfo={exportName:"default",displayName:"FSAutocompleteTag",description:"",tags:{},props:[{name:"placeholder",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"items",type:{name:"{id: string, label: string, isCustom: boolean}[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"{id: string, label: string, isCustom: boolean}[] | null"},required:!1,defaultValue:{func:!0,value:"() => []"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSAutocompleteTag.vue"]};const gt={title:"Shared/Components/Input fields/AutocompleteTag",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},m={args:{args:{items:[{id:"1",label:"Alpha",isCustom:!1},{id:"2",label:"Beta",isCustom:!1},{id:"3",label:"Charly",isCustom:!1}],value1:null,value2:null}},render:(e,{argTypes:o})=>({components:{FSAutocompleteTag:v,FSCol:N},props:Object.keys(o),setup(){return{...e}},template:`
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
