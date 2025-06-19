import{d as F,q as y,w as v,B as s,H as I,m as b,I as i,J as n}from"./vue.esm-bundler-BB--BfRN.js";import{F as V}from"./FSFolderTileUI-BWYEVHKh.js";import{F as T}from"./FSLoadTile-DmP7ukwS.js";import{a as S}from"./useFolders-DFUsT0bj.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-DQtgKGAi.js";import"./FSColor-BVXZQv_w.js";import"./FSCard-CiGLNn7K.js";import"./FSCol-BU2zndN-.js";import"./css-DoweNwVf.js";import"./useBreakpoints-f5uwzDhq.js";import"./FSRow-Bdc52rY8.js";import"./useColors-CeWNZtds.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-BwQCEo_4.js";import"./FSSpan-BndtI8AP.js";import"./useSlots-COLyvmal.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-cnp_Rsdz.js";import"./FSIconCard-DaY8wfJA.js";import"./FSIcon-BKav6CVU.js";import"./VIcon-Cl87HT90.js";import"./color-DIvEt_AX.js";import"./FSImage-D2nwrOf-.js";import"./FSImageUI-B_bAqKap.js";import"./FSLoader-Cf5HtYZd.js";import"./dimensions-DwY9cRwZ.js";import"./elevation-S_BtbnzN.js";import"./locale-CSWC84Vq.js";import"./VImg-DcLzuYY5.js";import"./rounded-BKWlZxOJ.js";import"./transition-GJJG9yri.js";import"./index--Ye8kcMr.js";import"./useImages-fX-VpO9W.js";import"./base-CmdGny12.js";import"./composableFactory-DwIj5O2m.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DmpXug6S.js";import"./FSTile-pg-_mccU.js";import"./FSClickable-CwRD7A4m.js";import"./FSRouterLink-DUWl7Aiu.js";import"./vue-router-CibjbVOv.js";import"./VProgressCircular-DNr7n8jG.js";import"./resizeObserver-CgHguIgR.js";import"./FSCheckbox-ti2pWVdy.js";import"./useRules-CSYFw_Ue.js";import"./VSelectionControl-KO2lf4xS.js";import"./density-Xpr_P7nk.js";import"./proxiedModel-DMSSa4ZW.js";import"./index-8zgUIpZ9.js";import"./VLabel-Cmax-_yp.js";import"./VInput-BfMi-lTR.js";import"./index-9ysw5oGg.js";import"./pathCrumb-Db-cq5HI.js";import"./base-CiabG-44.js";import"./useAppOrganisationId-D3b8yxVY.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,q){const c=i("FSLoadTile"),g=i("FSFolderTileUI");return e.getting?(n(),s(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(n(),s(g,b({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,bottomColor:e.entity.colors,recursiveFoldersIds:e.entity.recursiveFoldersIds,recursiveDashboardsIds:e.entity.recursiveDashboardsIds,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["code","icon","label","imageId","bottomColor","recursiveFoldersIds","recursiveDashboardsIds","selectable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const De={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
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
