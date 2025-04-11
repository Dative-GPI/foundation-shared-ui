import{d as F,q as y,w as v,z as i,E as I,m as V,G as n,H as s}from"./vue.esm-bundler-PTWG9x2X.js";import{F as b}from"./FSFolderTileUI-Yq5da8PG.js";import{F as T}from"./FSLoadTile-DJeEAoEK.js";import{a as S}from"./useFolders-CqwBSG8H.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-C-rgGdhI.js";import"./FSIconCard-HSHEedj-.js";import"./FSCard-DkDNRB06.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSRow-DPcQMiM9.js";import"./useColors-CHEA4ij4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./FSIcon-Df5FR-8G.js";import"./VIcon-DIeegzqR.js";import"./color-CCpgnDIk.js";import"./FSImage-Bqzq6MgE.js";import"./FSImageUI-D2j3oDF1.js";import"./FSLoader-DjLBB-ae.js";import"./dimensions-v18atrWI.js";import"./elevation-CrSwNJwg.js";import"./locale-Cz_4DTJh.js";import"./VImg-CBGPWIu-.js";import"./rounded-BbPXzFqc.js";import"./transition-QV8dDJB9.js";import"./index-BNomsh5u.js";import"./useImages-B58XKdkx.js";import"./base-CmdGny12.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-3n1rBHGl.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./FSTile-DYkNmwQ6.js";import"./FSClickable-TnS9e2Ej.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./FSCheckbox-C5H351bN.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./density-CznkHGGy.js";import"./proxiedModel-CvHSoKPb.js";import"./index-Dqqa47M6.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./index-b-ADC_Il.js";import"./pathCrumb-Db-cq5HI.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,q){const c=n("FSLoadTile"),g=n("FSFolderTileUI");return e.getting?(s(),i(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(s(),i(g,V({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","selectable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Ue={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var p,d,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const Be=["Variations"];export{r as Variations,Be as __namedExportsOrder,Ue as default};
