import{d as F,q as y,w as v,B as s,H as I,m as b,I as i,J as n}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as V}from"./FSFolderTileUI-Bi3NpZDY.js";import{F as T}from"./FSLoadTile-Bw7hZXRy.js";import{a as S}from"./useFolders-B4N1VEBF.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-DyIvKxgu.js";import"./FSColor-CuR1jGLD.js";import"./FSCard-BH9I8ruU.js";import"./FSCol-DIPgj7wU.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./FSRow-udQVJR1p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./FSSpan-B7HDTlg9.js";import"./useSlots-BgbXyH5p.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-CTlLxYKh.js";import"./FSIconCard-CnZfOJKt.js";import"./FSIcon-I_C15xQX.js";import"./VIcon-beNtbbqt.js";import"./color-6mal3hP4.js";import"./FSImage-DRd0-U7U.js";import"./FSImageUI-BiWZkhEx.js";import"./FSLoader-Vyt-Eyzm.js";import"./dimensions-CuS7VcMO.js";import"./elevation-DCJceMeT.js";import"./locale-BJmdjC_5.js";import"./VImg-BLvS348m.js";import"./rounded-T_eKj2ZY.js";import"./transition-C13qRIR1.js";import"./index-0XvVa1kA.js";import"./useImages-DKhIXvlG.js";import"./base-CmdGny12.js";import"./composableFactory-BJClBu0g.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-nTw6pyPT.js";import"./FSTile-Brz7aCRY.js";import"./FSClickable-Lz1AMzcf.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./FSCheckbox-BY3-VJRx.js";import"./useRules-Cutg_0Yh.js";import"./VSelectionControl-asaj2cFo.js";import"./density-B3EUR5Bv.js";import"./proxiedModel-BirLikdP.js";import"./index-BSoBU6Pm.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./index-BNfVP6r5.js";import"./pathCrumb-Db-cq5HI.js";import"./base-B6WxqUqv.js";import"./useAppOrganisationId-oxTtWVij.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,q){const c=i("FSLoadTile"),g=i("FSFolderTileUI");return e.getting?(n(),s(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(n(),s(g,b({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,bottomColor:e.entity.colors,recursiveFoldersIds:e.entity.recursiveFoldersIds,recursiveDashboardsIds:e.entity.recursiveDashboardsIds,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["code","icon","label","imageId","bottomColor","recursiveFoldersIds","recursiveDashboardsIds","selectable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const De={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSFolderTile
        v-for="(folderId, index) in args.values"
        :key="index"
        :folderId="folderId"
        @auxclick="args.values.pop()"
        v-model="args.selected[index]"
      />
    </div>`})};var d,p,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Le=["Variations"];export{r as Variations,Le as __namedExportsOrder,De as default};
