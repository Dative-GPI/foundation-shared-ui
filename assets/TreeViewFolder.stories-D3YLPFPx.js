import{d as y,c as S,B as s,E as d,m as h,I as T,J as u,H as b,A as x,K as C}from"./vue.esm-bundler-BB--BfRN.js";import{F as _}from"./FSTreeViewField-e8ipHHyk.js";import{F as g}from"./FSIcon-BKav6CVU.js";import{u as k}from"./useTreeView-BryKfYi-.js";import{u as q}from"./useFolders-DFUsT0bj.js";import{_ as $}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as B}from"./FSCol-BU2zndN-.js";import"./VList-CAfJ4PqY.js";import"./FSCard-CiGLNn7K.js";import"./FSRow-Bdc52rY8.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./VDialog-bMbnstsA.js";import"./VOverlay-B758aeer.js";import"./forwardRefs-DWGaNmQL.js";import"./color-DIvEt_AX.js";import"./proxiedModel-DMSSa4ZW.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./scopeId-NiaFRIZK.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./index-9ysw5oGg.js";import"./VIcon-Cl87HT90.js";import"./ssrBoot-DNxkCF-9.js";import"./border-TZTDiA6n.js";import"./density-Xpr_P7nk.js";import"./elevation-S_BtbnzN.js";import"./rounded-BKWlZxOJ.js";import"./index-8zgUIpZ9.js";import"./VImg-DcLzuYY5.js";import"./index--Ye8kcMr.js";import"./FSTextField-DmCfYujO.js";import"./FSBaseField-BxMUaAXJ.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./FSButton-DEqhqb0b.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./FSClickable-CwRD7A4m.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./useRules-CSYFw_Ue.js";import"./VField-COyetWuv.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./loader-BKsf8Js6.js";import"./FSCheckbox-ti2pWVdy.js";import"./VSelectionControl-KO2lf4xS.js";import"./FSFadeOut-BS7VKwj1.js";import"./uuid-DTaye2KM.js";import"./FSLoader-Cf5HtYZd.js";import"./FSRadio-C1kBTUbb.js";import"./FSMenu-BwDA4EdU.js";import"./VMenu-DdabqpBj.js";import"./VBtn-CpUNAmWP.js";import"./group-C8GVwDAJ.js";import"./filter-Cz8pNtBH.js";import"./lodash-Zo30T2Bj.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CiabG-44.js";import"./useAppOrganisationId-D3b8yxVY.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";const V=y({name:"FSTreeViewFolder",components:{FSTreeViewField:_,FSIcon:g},props:{folderFilters:{type:Object,required:!1,default:null},exclude:{type:String,required:!1,default:null},modelValue:{type:[Array,String],required:!1,default:null},multiple:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{getMany:a,fetching:m,entities:l}=q(),i=S(()=>e.exclude?l.value.filter(p=>p.id!==e.exclude&&!p.path.some(w=>w.id===e.exclude)):l.value),n=()=>a({...e.folderFilters}),{onUpdate:o}=k(i,[()=>e.folderFilters],r,n);return{fetchingFolders:m,folders:i,onUpdate:o}}});function N(e,r,a,m,l,i){const n=T("FSTreeViewField");return u(),s(n,h({multiple:e.$props.multiple,loading:e.fetchingFolders,items:e.folders,modelValue:e.$props.modelValue,"onUpdate:modelValue":e.onUpdate},e.$attrs),{"menu-prepend":d(({item:o})=>[o.icon?(u(),s(g,{key:0},{default:d(()=>[x(C(o.icon),1)]),_:2},1024)):b("",!0)]),_:1},16,["multiple","loading","items","modelValue","onUpdate:modelValue"])}const v=$(V,[["render",N]]);V.__docgenInfo={displayName:"FSTreeViewFolder",exportName:"default",description:"",tags:{},props:[{name:"folderFilters",type:{name:"FolderFilters"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"exclude",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string[] | string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"multiple",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/treeviews/FSTreeViewFolder.vue"]};const We={title:"Foundation/Core/TreeViews/TreeViewFolder",component:v,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{value1:null,value2:null,value3:null}},render:(e,{argTypes:r})=>({components:{FSTreeViewFolder:v,FSCol:B},props:Object.keys(r),setup(){return{...e}},template:`
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
