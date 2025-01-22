import{d as y,c as S,A as h,B as s,D as d,x as T,I as u,J as b,K as x,G as C}from"./vue.esm-bundler-CTTOvLCD.js";import{F as _}from"./FSTreeViewField-BFodl7Yn.js";import{F as g}from"./FSIcon-yzGYQgqh.js";import{u as k}from"./useTreeView-YQ2qVQrn.js";import{u as q}from"./useFolders-55SOa8BN.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-BPr0jVzk.js";import"./VList-Bd0Q6LvF.js";import"./FSCard-DxhVm8H0.js";import"./FSRow-C8EFLcn9.js";import"./css-D46r6e5F.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DTA1Qd0w.js";import"./proxiedModel-Da7OD98r.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./scopeId-DGVhnfG2.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./VDefaultsProvider-45AVpOQL.js";import"./index-B698eGq-.js";import"./VIcon-DzkIKThE.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./density-n-hig0Tg.js";import"./elevation-CqdG4vF6.js";import"./rounded-5tkyiosR.js";import"./index-Bj6Uq_NX.js";import"./VImg-C1IcDibP.js";import"./index-CK42gwlP.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSButton-B2X9DGvb.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./useRules-DE909mL5.js";import"./VField-Bi2n7Ebd.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./FSCheckbox-CVOakf5q.js";import"./VSelectionControl-CZi2-uP4.js";import"./FSFadeOut-C2gEJSut.js";import"./uuid-DTaye2KM.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VBtn-IPVaR7st.js";import"./group-CroFFR-b.js";import"./filter-4zTRfP5f.js";import"./VMenu-DP8ibRhi.js";import"./lodash-BrWYvtk2.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";import"./serviceFactory-qtdw0UKd.js";import"./composableFactory-BcaJMM0w.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function N(e,r,a,m,l,i){const n=h("FSTreeViewField");return u(),s(n,T({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[b(x(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,F;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: null,
      value3: null
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTreeViewFolder,
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
      <FSTreeViewFolder
        label="Folder"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewFolder
        label="Folder with sawn branch"
        exclude="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
