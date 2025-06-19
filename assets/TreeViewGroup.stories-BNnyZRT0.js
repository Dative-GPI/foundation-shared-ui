import{d as y,c as S,B as m,E as s,m as b,I as h,J as d,H as G,A as T,K as C}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as q}from"./FSTreeViewField-CZmGO8BN.js";import{F as V}from"./FSIcon-Dy1KglKQ.js";import{u as x}from"./useGroups-DLsFuWgj.js";import{u as _}from"./useTreeView-DAsG5qpC.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-DIPgj7wU.js";import"./VList-GVMOZe4n.js";import"./FSCard-CoFTtRNJ.js";import"./FSRow-udQVJR1p.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./useColors-CaMUbg8a.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-CCooKRqg.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./forwardRefs-DWGaNmQL.js";import"./color-6mal3hP4.js";import"./proxiedModel-BirLikdP.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./scopeId-BQSHBqq_.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./index-BNfVP6r5.js";import"./VIcon-beNtbbqt.js";import"./ssrBoot-B76fNmmB.js";import"./border-CsMm3Uu5.js";import"./density-B3EUR5Bv.js";import"./elevation-DCJceMeT.js";import"./rounded-T_eKj2ZY.js";import"./index-BSoBU6Pm.js";import"./VImg-BLvS348m.js";import"./index-0XvVa1kA.js";import"./FSTextField-DckKQdCq.js";import"./FSBaseField-DDV1bgDk.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./FSButton-CMFttM_1.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Bc_GnmK1.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./useRules-Cutg_0Yh.js";import"./VField-CIUPtZ0k.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./loader-zbNw4pum.js";import"./FSCheckbox-4_vPFX9A.js";import"./VSelectionControl-asaj2cFo.js";import"./FSFadeOut-cwNcN6_P.js";import"./uuid-DTaye2KM.js";import"./FSLoader-DbCBZFXe.js";import"./FSRadio-0ryRjk2L.js";import"./FSMenu-Rp1ILhng.js";import"./VMenu-C6lRy5En.js";import"./VBtn-BKAXKLVk.js";import"./group-1sntWZNj.js";import"./filter-DhzaDDBp.js";import"./pathCrumb-Db-cq5HI.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";const F=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:p,entities:l}=x(),i=S(()=>e.exclude?l.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):l.value),a=()=>n({...e.groupFilters}),{onUpdate:o}=_(i,[()=>e.groupFilters],r,a);return{fetchingGroups:p,groups:i,onUpdate:o}}});function B(e,r,n,p,l,i){const a=h("FSTreeViewField");return d(),m(a,b({label:e.$props.label??e.$tr("ui.common.group","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:o})=>[o.icon?(d(),m(V,{key:0},{default:s(()=>[T(C(o.icon),1)]),_:2},1024)):G("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(F,[["render",B]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>`})};var c,f,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
      FSTreeViewGroup,
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
      <FSTreeViewGroup
        label="Group"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with multiple selection"
        :multiple="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTreeViewGroup
        label="Group with sawn branch"
        exclude="12"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
