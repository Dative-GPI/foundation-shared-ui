import{d as y,c as S,E as u,H as s,m as b,L as h,M as d,N as G,O as T,K as C}from"./vue.esm-bundler-NVdFPFZB.js";import{F as q}from"./FSTreeViewField-CmRHFR0d.js";import{F as V}from"./FSIcon-DzQOa56z.js";import{u as x}from"./useTreeView-cUjfMozj.js";import{u as _}from"./useGroups-AhsW-q1a.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as k}from"./FSCol-KRtq6OYO.js";import"./FSDialogMenu-HNK7X8ju.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSButton-CdKzPvIq.js";import"./FSText-DR713pSR.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSTreeView-C0Tbsxgx.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VBtn-Ct4hkl6N.js";import"./group-BLkYT3DE.js";import"./position-O95c9fuD.js";import"./filter-C4s97JnQ.js";import"./FSFadeOut-VhSFSAo6.js";import"./uuid-DTaye2KM.js";import"./FSRadio-C94-RoOx.js";import"./FSMenu-DcCsQXC4.js";import"./VMenu-BCj9c0xY.js";import"./eventQueue-D85hWBFd.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const v=y({name:"FSTreeViewGroup",components:{FSTreeViewField:q,FSIcon:V},props:{groupFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:null}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:n,fetching:a,entities:l}=_(),i=S(()=>e.exclude?l.value.filter(m=>m.id!==e.exclude&&!m.path.some(w=>w.id===e.exclude)):l.value),p=()=>n({...e.groupFilters}),{onUpdate:o}=x(i,[()=>e.groupFilters],r,p);return{fetchingGroups:a,groups:i,onUpdate:o}}});function N(e,r,n,a,l,i){const p=h("FSTreeViewField");return d(),u(p,b({label:e.$props.label??e.$tr("ui.common.group","Group"),multiple:e.$props.multiple,loading:e.fetchingGroups,items:e.groups,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":s(({item:o})=>[o.icon?(d(),u(V,{key:0},{default:s(()=>[G(T(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["label","multiple","loading","items","modelValue","onUpdate:modelValue"])}const F=$(v,[["render",N]]);v.__docgenInfo={displayName:"FSTreeViewGroup",exportName:"default",description:"",tags:{},props:[{name:"groupFilters",type:{name:"GroupFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewGroup.vue"]};const sr={title:"Core/Components/TreeViews/TreeViewGroup",component:F,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewGroup:F,FSCol:k},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(g=(f=t.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const dr=["Variations"];export{t as Variations,dr as __namedExportsOrder,sr as default};
