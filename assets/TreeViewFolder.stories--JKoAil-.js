import{d as y,c as S,z as s,C as d,m as h,G as T,H as u,E as b,I as C,J as x}from"./vue.esm-bundler-CUSnV4DE.js";import{F as _}from"./FSTreeViewField-DY1iiNB_.js";import{F as g}from"./FSIcon-Cp7BQBW6.js";import{u as k}from"./useTreeView-Cuoo8GxL.js";import{u as q}from"./useFolders-C09C_Kh9.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-BQiFrdcO.js";import"./VList-0zKlnGxf.js";import"./FSCard-BnVyMFnh.js";import"./FSRow-hpHYWcoJ.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./VDialog-Co_Esry_.js";import"./VOverlay-BKGgaXLT.js";import"./forwardRefs-DWGaNmQL.js";import"./color-CgsoZSKd.js";import"./proxiedModel-DaBGAliH.js";import"./anchor-MMgLgK3d.js";import"./dimensions-BI5CQRk1.js";import"./display-DbvBihXn.js";import"./scopeId-DP5cc-6o.js";import"./locale-DYN4KMd8.js";import"./router-C6XMMO7F.js";import"./transition-C81aHyit.js";import"./VDefaultsProvider-BV2n7M0f.js";import"./index-DDQZ-RJM.js";import"./VIcon-DeLOaNVc.js";import"./ssrBoot-Cb1Ys1Hl.js";import"./border-CdoaLNWv.js";import"./density-DAqBVexQ.js";import"./elevation-C08MHLji.js";import"./rounded-DQzQH8wE.js";import"./index-BdaiM53K.js";import"./VImg-DinzZLZB.js";import"./index-CeZa2hiu.js";import"./FSTextField-MbUkXGoG.js";import"./FSBaseField-DwmVeNEG.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSButton-BTpAdEE5.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./FSClickable-Bn4xIsxH.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./useRules-CYZMRvpC.js";import"./VField-B_GuA4vu.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./loader-BjfLeESU.js";import"./FSCheckbox-DT2R4my4.js";import"./VSelectionControl-BrUoGkRx.js";import"./FSFadeOut-BguakrVC.js";import"./uuid-DTaye2KM.js";import"./FSLoader-BxWH0Nmg.js";import"./FSRadio-BICP5Dmr.js";import"./VBtn-Rjy2Sxim.js";import"./group-CrKBhSLQ.js";import"./filter-BDc_Ne3E.js";import"./VMenu-BYRtZ3M5.js";import"./lodash-BrWYvtk2.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function O(e,r,a,m,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[C(x(o.icon),1)]),_:2},1024)):b("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",O]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const Re={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
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
}`,...(F=(f=t.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};const We=["Variations"];export{t as Variations,We as __namedExportsOrder,Re as default};
