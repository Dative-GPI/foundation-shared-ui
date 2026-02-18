import{d as y,c as S,B as s,D as d,m as h,I as T,J as u,K as b,L as x,H as C}from"./vue.esm-bundler-D5n7z5qz.js";import{F as _}from"./FSTreeViewField-Dn2pPwYZ.js";import{F as g}from"./FSIcon-BJsIM37h.js";import{u as k}from"./useTreeView-DMLD_pJG.js";import{u as q}from"./useFolders-J-bgo35G.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-D_lbFmZy.js";import"./FSDialogMenu-553iq_m_.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./VDialog-B2OpqrDi.js";import"./VOverlay-DHaepw21.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BPspb6XO.js";import"./anchor-CPKk15qm.js";import"./dimensions-B7sNhH2O.js";import"./display-D8bdLPBN.js";import"./lazy-C77w73YC.js";import"./locale-DKpA43KM.js";import"./router-BDiSnJ53.js";import"./scopeId-DC5duiFx.js";import"./transition-DbItRNv8.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-6Z-RVAh9.js";import"./FSTextField-Cclf6IX8.js";import"./FSBaseField-Buivlp1M.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./FSButton-CZRwWCRJ.js";import"./FSText-CJ7Lhzl1.js";import"./useRules-R3Ldkrx4.js";import"./VField-B1xdFTJF.js";import"./index-6jMyctoo.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./density-BnAGl-Nw.js";import"./loader-COXi3ZW_.js";import"./rounded-lfTNxM9v.js";import"./index-BKpPdzm5.js";import"./FSCheckbox-CpWOjTw-.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./index-BYo1BiTt.js";import"./FSTreeView-JZgx-W9a.js";import"./FSLoader-Cl8hDT8j.js";import"./elevation-JukLG-n6.js";import"./VList-DlQk11w2.js";import"./ssrBoot-C79LbZhX.js";import"./variant-j8rFA7nZ.js";import"./VImg-BlUyfKKc.js";import"./VDivider-Yc-HesXU.js";import"./VBtn--7NXzl5z.js";import"./group-BRhJCq_i.js";import"./filter-DlYw_aWm.js";import"./FSFadeOut-C918yX_r.js";import"./uuid-DTaye2KM.js";import"./FSRadio-BXAjRcH_.js";import"./FSMenu-Cl6jFqyD.js";import"./VMenu-en6JpVrG.js";import"./lodash-DyRFk5BS.js";import"./pathCrumb-Db-cq5HI.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function N(e,r,a,m,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[b(x(o.icon),1)]),_:2},1024)):C("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const ir={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const nr=["Variations"];export{t as Variations,nr as __namedExportsOrder,ir as default};
