import{d as y,c as S,B as s,E as d,m as h,I as T,J as u,H as b,A as x,K as C}from"./vue.esm-bundler-CocPPKUI.js";import{F as _}from"./FSTreeViewField-DvlwST1e.js";import{F as g}from"./FSIcon-CKNHHVc2.js";import{u as k}from"./useTreeView-CbgjJx0c.js";import{u as q}from"./useFolders-O31KLirP.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-79-COv64.js";import"./FSDialogMenu-CeOfi1Vz.js";import"./FSCard-JQNJPDhp.js";import"./FSRow-BvJ7lU5E.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";import"./useColors-DUufJJPH.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./VDialog-Cy-8Xjn8.js";import"./VOverlay-BofqjN94.js";import"./easing-DY7PVvcf.js";import"./color-yBCdco2I.js";import"./proxiedModel-DvocDLKO.js";import"./anchor-C7UfIAXa.js";import"./dimensions-C9PuMYcl.js";import"./display-BmuJHlI4.js";import"./lazy-CpkO2kQj.js";import"./locale-_fONYh-8.js";import"./router-Btsphvl6.js";import"./scopeId-LQkRlG9f.js";import"./transition-BuKnRONq.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider-Clc0K3gC.js";import"./FSTextField-CrSrBFtk.js";import"./FSBaseField-BHCTmkg_.js";import"./FSSpan-DrSEJIpr.js";import"./useSlots-D4bv69lA.js";import"./FSButton-VjwKfCr9.js";import"./FSRouterLink-CitgaMwY.js";import"./vue-router-BKog_lZN.js";import"./FSClickable-6FPdriKA.js";import"./VProgressCircular-BMkR7ln7.js";import"./resizeObserver-QYhQJr79.js";import"./VIcon-Qz-Il978.js";import"./useRules-C3-AmzzE.js";import"./VField-CEhz-0ZK.js";import"./index-DfBdMsnv.js";import"./VLabel-HvE-XSAC.js";import"./VInput-DhPQv4YC.js";import"./density-DZuLaB-B.js";import"./loader-B3-0Tc48.js";import"./rounded-Cjf6r1y4.js";import"./index-lkzvYdnq.js";import"./FSCheckbox-ChCYq6Yz.js";import"./VCheckboxBtn-B3VCaA0L.js";import"./VSelectionControl-BneTlqNp.js";import"./index-BgX1FNqJ.js";import"./FSTreeView-CZ5XqIQo.js";import"./FSLoader-BeIlBGG_.js";import"./elevation-CsFMJmSN.js";import"./VList-BU_HHy4r.js";import"./ssrBoot-B-cFki3l.js";import"./border-B0huqYee.js";import"./VImg-BaN5zAl6.js";import"./VBtn-Cjbcb1KM.js";import"./group-CbiZXdYV.js";import"./filter-CdJ0RAiZ.js";import"./FSFadeOut-BaaWP8Xe.js";import"./uuid-DTaye2KM.js";import"./FSRadio-DSN2e6_O.js";import"./FSMenu-ymP5KhuL.js";import"./VMenu-uiC9_CJ1.js";import"./lodash-Zo30T2Bj.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D6U4mRRi.js";import"./useAppOrganisationId-DacmST4-.js";import"./composableFactory-DRFDSLtA.js";import"./serviceFactory-aQiBqOvf.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function N(e,r,a,m,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[x(C(o.icon),1)]),_:2},1024)):b("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const rr={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const or=["Variations"];export{t as Variations,or as __namedExportsOrder,rr as default};
