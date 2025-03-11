import{d as F,o as y,w as v,z as i,E as I,m as V,G as n,H as p}from"./vue.esm-bundler-CUSnV4DE.js";import{F as b}from"./FSFolderTileUI-Cf8X7Iro.js";import{F as T}from"./FSLoadTile-CISJGXh8.js";import{a as S}from"./useFolders-C09C_Kh9.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-BEAz-zCV.js";import"./FSIconCard-DzysKg3d.js";import"./FSCard-BnVyMFnh.js";import"./FSCol-BQiFrdcO.js";import"./css-BnRE2gle.js";import"./useBreakpoints-CQzBW1Q0.js";import"./FSRow-hpHYWcoJ.js";import"./useColors-CQZIO9RQ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DGuAngmo.js";import"./FSIcon-Cp7BQBW6.js";import"./VIcon-DeLOaNVc.js";import"./color-CgsoZSKd.js";import"./FSImage-DejQHEUL.js";import"./FSImageUI-C65sLZ4Z.js";import"./FSLoader-BxWH0Nmg.js";import"./dimensions-BI5CQRk1.js";import"./elevation-C08MHLji.js";import"./locale-DYN4KMd8.js";import"./VImg-DinzZLZB.js";import"./rounded-DQzQH8wE.js";import"./transition-C81aHyit.js";import"./index-CeZa2hiu.js";import"./useImages-B9Gap5IC.js";import"./base-CmdGny12.js";import"./composableFactory-DWA25NsU.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BM6m0Bni.js";import"./FSSpan-M9GEX7v6.js";import"./useSlots-CY84M1fx.js";import"./FSTile-BB-cAi7f.js";import"./FSClickable-Bn4xIsxH.js";import"./FSRouterLink-CNYlwNDi.js";import"./vue-router-KxYGmK2X.js";import"./VProgressCircular-BbyuaGSs.js";import"./resizeObserver-Hv1_IiVG.js";import"./FSCheckbox-DT2R4my4.js";import"./useRules-CYZMRvpC.js";import"./VSelectionControl-BrUoGkRx.js";import"./density-DAqBVexQ.js";import"./proxiedModel-DaBGAliH.js";import"./index-BdaiM53K.js";import"./VLabel-DSsJm0B6.js";import"./VInput-C8lN0V_S.js";import"./index-DDQZ-RJM.js";import"./pathCrumb-Db-cq5HI.js";import"./base-DyefFz5t.js";import"./useAppOrganisationId-D-BntkEj.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function w(e,o,a,l,$,C){const c=n("FSLoadTile"),g=n("FSFolderTileUI");return e.getting?(p(),i(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),i(g,V({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,s,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2", "3", "6", "7"],
      selected: [false, false, false, false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSFolderTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const Be=["Variations"];export{r as Variations,Be as __namedExportsOrder,Ue as default};
