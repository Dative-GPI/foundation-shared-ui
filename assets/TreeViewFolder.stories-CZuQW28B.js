import{d as y,c as S,A as s,D as d,l as h,H as T,I as u,F as b,J as x,K as C}from"./vue.esm-bundler-BD3cPSox.js";import{F as _}from"./FSTreeViewField-n8-_Ss4j.js";import{F as g}from"./FSIcon-BikiybNc.js";import{u as k}from"./useTreeView-B8EPVgj1.js";import{u as q}from"./useFolders-_kAN-3Vc.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as N}from"./FSCol-C9a7BKGp.js";import"./VList-B1NoTgR2.js";import"./FSCard-DOwp-V9l.js";import"./FSRow-CopwEayK.js";import"./css-CmnfRCoE.js";import"./useBreakpoints-CnZdRDE7.js";import"./useColors-Cu9vf_Ix.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-B93wSOzC.js";import"./VDialog-BLZ0rQaD.js";import"./VOverlay-D-tSP_Gg.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DAd2dJIE.js";import"./proxiedModel-JzK6JHhO.js";import"./anchor-Ce3a1Oj_.js";import"./dimensions-DbGEEU80.js";import"./display-D74v7vg7.js";import"./scopeId-CdDRBDvT.js";import"./locale-Cg0C6Moy.js";import"./router-BdSI2seK.js";import"./transition-BVEL_Cnv.js";import"./VDefaultsProvider-rHrX99un.js";import"./index-CcZ3F2bM.js";import"./VIcon-ef9P0Odv.js";import"./ssrBoot-BSKtbDuI.js";import"./border-CUiZ6XeR.js";import"./density-Dp_zkCfD.js";import"./elevation-C4p0Fj2B.js";import"./rounded-idSslOdv.js";import"./index-BRxggfmq.js";import"./VImg-DqEZxS4C.js";import"./index-Ov0xN_Hx.js";import"./FSTextField-DHU8-iy6.js";import"./FSBaseField-BvFJ1Ol8.js";import"./FSSpan-CqHf-ny6.js";import"./useSlots-DhthX9xh.js";import"./FSButton-CQA40iQ2.js";import"./FSRouterLink-_G3m0SRF.js";import"./vue-router-Ds_E4c-X.js";import"./FSClickable-BsEc8iHI.js";import"./VProgressCircular-Ca7Fp11Q.js";import"./resizeObserver-BdS48m16.js";import"./useRules-Bpmg6xi7.js";import"./VField-_4f0OeoM.js";import"./VLabel-gCKEzUPw.js";import"./VInput-D-36mGWK.js";import"./form-DhAzn97I.js";import"./loader-DirtECG2.js";import"./FSCheckbox-CM6E8uCY.js";import"./VSelectionControl-CDPTHhw0.js";import"./FSFadeOut-FPHnkeYn.js";import"./uuid-DTaye2KM.js";import"./FSLoader-DTAq-3Vo.js";import"./FSRadio-DNoTFnQV.js";import"./VBtn-BRV4dgeZ.js";import"./group-B_AHtZDM.js";import"./filter-VzgWnVmw.js";import"./VMenu-iLNk3WZy.js";import"./lodash-BrWYvtk2.js";import"./pathCrumb-Db-cq5HI.js";import"./base-Dl3FgNgM.js";import"./useAppOrganisationId-C1bzpuv9.js";import"./composableFactory-uBEY979O.js";import"./serviceFactory-DMr1GitK.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function O(e,r,a,m,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[x(C(o.icon),1)]),_:2},1024)):b("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",O]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:N},props:Object.keys(r),setup(){return{...e}},template:`
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
    </FSCol>`})};var c,F,f;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(f=(F=t.parameters)==null?void 0:F.docs)==null?void 0:f.source}}};const Xe=["Variations"];export{t as Variations,Xe as __namedExportsOrder,We as default};
