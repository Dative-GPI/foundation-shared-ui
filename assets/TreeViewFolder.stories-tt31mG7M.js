import{d as y,c as S,E as s,H as d,m as h,L as T,M as u,N as b,O as C,K as x}from"./vue.esm-bundler-NVdFPFZB.js";import{F as _}from"./FSTreeViewField-CmRHFR0d.js";import{F as g}from"./FSIcon-DzQOa56z.js";import{u as k}from"./useTreeView-cUjfMozj.js";import{u as q}from"./useFolders-DxZsIFNa.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-KRtq6OYO.js";import"./FSDialogMenu-HNK7X8ju.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./VDialog-CmTscL9b.js";import"./VOverlay-BuHPOPgF.js";import"./proxiedModel-VL_RP4zk.js";import"./easing-DY7PVvcf.js";import"./anchor-Se7MGGLO.js";import"./dimensions-CS_qJJhy.js";import"./display-QVN4B5Qw.js";import"./lazy-sPNxwuRm.js";import"./locale-DER8LJer.js";import"./router-D36qODsG.js";import"./scopeId-DEhVAmth.js";import"./transition-a5pzBS6c.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-B9S_00bc.js";import"./VDefaultsProvider-Blv54jCg.js";import"./FSTextField-DFareS9q.js";import"./FSBaseField-CishEyxh.js";import"./FSSpan-B28b2m0n.js";import"./useSlots-DEXetpJf.js";import"./FSButton-CdKzPvIq.js";import"./FSText-DR713pSR.js";import"./useRules-eFcMZq7y.js";import"./VTextField-D3yY9XvD.js";import"./VField-DrHaNHaW.js";import"./index-ByfGjSW7.js";import"./VLabel-BtnooUPU.js";import"./VInput-BA20Y-wG.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./density-CE2FkSgs.js";import"./loader-xTPVyuBN.js";import"./VProgressLinear-Bctf4Kqo.js";import"./rounded-CS1_z6Jk.js";import"./index-B4rZgXN-.js";import"./FSCheckbox-D5kCrb66.js";import"./VCheckboxBtn-BSFWUORg.js";import"./VSelectionControl-BqUEMQy8.js";import"./index-B-eFr4Nw.js";import"./FSTreeView-C0Tbsxgx.js";import"./FSLoader-DOgbrYCd.js";import"./elevation-DQ_qKX67.js";import"./VList-BhDySjdU.js";import"./ssrBoot-BimrXMWA.js";import"./border-D8z1QLxT.js";import"./variant-DNfp8Yqp.js";import"./VImg-BdZHkGCX.js";import"./VDivider-B9VczfM4.js";import"./VBtn-Ct4hkl6N.js";import"./group-BLkYT3DE.js";import"./position-O95c9fuD.js";import"./filter-C4s97JnQ.js";import"./FSFadeOut-VhSFSAo6.js";import"./uuid-DTaye2KM.js";import"./FSRadio-C94-RoOx.js";import"./FSMenu-DcCsQXC4.js";import"./VMenu-BCj9c0xY.js";import"./eventQueue-D85hWBFd.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CxE7IGU1.js";import"./useAppOrganisationId-DLYVMJh2.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:m,fetching:a,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>m({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:a,folders:i,onUpdate:o}}});function O(e,r,m,a,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[b(C(o.icon),1)]),_:2},1024)):x("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",O]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const dr={title:"Core/Components/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const ur=["Variations"];export{t as Variations,ur as __namedExportsOrder,dr as default};
