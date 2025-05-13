import{d as y,c as S,z as m,C as s,m as b,G,H as d,E as h,I as T,J as C}from"./vue.esm-bundler-CM4TIH-Q.js";import{F as q}from"./FSTreeViewField-D23wNoth.js";import{F as V}from"./FSIcon-LkE5-ra7.js";import{u as x}from"./useGroups-TGZYIwdO.js";import{u as _}from"./useTreeView-D2l5R3V-.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-BR6T1l1C.js";import"./VList-Cd1xaDQJ.js";import"./FSCard-BedrH_cK.js";import"./FSRow-oDTnIAxc.js";import"./css-BgLnvP7H.js";import"./useBreakpoints-C6JPO-aN.js";import"./useColors-CjA2D2xA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-d3-Spt7o.js";import"./VDialog-CgsoTmCe.js";import"./VOverlay-DtEUynQC.js";import"./forwardRefs-DWGaNmQL.js";import"./color-Bo6l13w9.js";import"./proxiedModel-DKx29MO-.js";import"./anchor-DCFmATqq.js";import"./dimensions-DW-k5kP_.js";import"./display-CUGteI3_.js";import"./scopeId-COl1Iexy.js";import"./locale-BqFH1fBg.js";import"./router-BXF-7Xxx.js";import"./transition-DMoMR0kB.js";import"./VDefaultsProvider-DYp4Zk7-.js";import"./index-BJH4L2FX.js";import"./VIcon-GfKFLOEw.js";import"./ssrBoot-BDHgcVA9.js";import"./border-CvDIZQGy.js";import"./density-Dl4v3sM7.js";import"./elevation-DgpWsjTu.js";import"./rounded-CDCr0BOq.js";import"./index-BkfcJ8bv.js";import"./VImg-D7XF-hIS.js";import"./index-DWgrY6Dg.js";import"./FSTextField-C7rYmEAT.js";import"./FSBaseField-B4CV_xuh.js";import"./FSSpan-y1Ex52-c.js";import"./useSlots-c6yg-hhg.js";import"./FSButton-DatX9tV0.js";import"./FSRouterLink-CxLK3Rak.js";import"./vue-router-io_1IWnU.js";import"./FSClickable-CXLm7rHe.js";import"./VProgressCircular-C-4f-PXJ.js";import"./resizeObserver-Cb3oz2nO.js";import"./useRules-B12Yr5ve.js";import"./VField-D97ztcGG.js";import"./VLabel-Ca5QW7tf.js";import"./VInput-DXPqvHKO.js";import"./loader-CQB_6PPx.js";import"./FSCheckbox-DdLfY5jd.js";import"./VSelectionControl-MVg9W9ha.js";import"./FSFadeOut-CmtPc-zJ.js";import"./uuid-DTaye2KM.js";import"./FSLoader-CRKSvpTi.js";import"./FSRadio-Di2X4_xD.js";import"./FSMenu-Da0q64tf.js";import"./VMenu-sKuqJ8jm.js";import"./VBtn-DqO4-7PD.js";import"./group-3MU8bQUc.js";import"./filter-DHa7wap7.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Be6PBkQb.js";import"./useAppOrganisationId-BtM3-JKO.js";import"./composableFactory-B6T2dm2_.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";const F=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:p,entities:l}=x(),i=S(()=>e.exclude?l.value.filter(u=>u.id!==e.exclude&&!u.path.some(w=>w.id===e.exclude)):l.value),a=()=>n({...e.groupFilters}),{onUpdate:o}=_(i,[()=>e.groupFilters],r,a);return{fetchingGroups:p,groups:i,onUpdate:o}}});function N(e,r,n,p,l,i){const a=G("FSTreeViewField");return d(),m(a,b({label:e.$props.label??e.$tr("ui.common.group","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:o})=>[o.icon?(d(),m(V,{key:0},{default:s(()=>[T(C(o.icon),1)]),_:2},1024)):h("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(F,[["render",N]]);F.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewGroup",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:v,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
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
