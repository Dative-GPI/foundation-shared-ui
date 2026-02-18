import{d as F,o as y,w as v,B as i,m as I,H as b,I as s,J as n}from"./vue.esm-bundler-D5n7z5qz.js";import{F as V}from"./FSFolderTileUI-hVshZGb4.js";import{F as T}from"./FSLoadTile-BYDP9OBJ.js";import{a as S}from"./useFolders-J-bgo35G.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSEntityCountBadge-B4Vso5kq.js";import"./FSColor-UTke4uX4.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";import"./VProgressCircular-D6ZFUt0S.js";import"./color-BW36qAym.js";import"./useRender-BcOya-6A.js";import"./resizeObserver-Z3fjh7Cv.js";import"./size-CaXETvDn.js";import"./tag-BOR-k4cz.js";import"./FSSpan-BN7wkmby.js";import"./useSlots-CoecqEnp.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-q33kTTka.js";import"./FSIconCard-DsztzXrT.js";import"./FSIcon-BJsIM37h.js";import"./VIcon-mGJe0MYK.js";import"./icons-DR_vovBH.js";import"./FSImage-6sMlYEt8.js";import"./FSImageUI-D-goncjh.js";import"./FSLoader-Cl8hDT8j.js";import"./dimensions-B7sNhH2O.js";import"./elevation-JukLG-n6.js";import"./locale-DKpA43KM.js";import"./proxiedModel-BPspb6XO.js";import"./VImg-BlUyfKKc.js";import"./rounded-lfTNxM9v.js";import"./transition-DbItRNv8.js";import"./index-BKpPdzm5.js";import"./useImages-CiiOgSyV.js";import"./base-CmdGny12.js";import"./composableFactory-zc0ZsFxC.js";import"./serviceFactory-DGf7dwWo.js";import"./lodash-DyRFk5BS.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-mdN0gbKX.js";import"./FSTile-DnnqQnwQ.js";import"./FSCheckbox-CpWOjTw-.js";import"./FSCol-D_lbFmZy.js";import"./useRules-R3Ldkrx4.js";import"./VCheckboxBtn-t5XcVMJr.js";import"./VSelectionControl-SdigZO9B.js";import"./density-BnAGl-Nw.js";import"./index-BYo1BiTt.js";import"./VLabel-D-9L6eJP.js";import"./VInput-bTNISmSY.js";import"./index-6jMyctoo.js";import"./pathCrumb-Db-cq5HI.js";import"./base-YMsHX0Is.js";import"./useAppOrganisationId-CFu8M88R.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:V,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:l,entity:a}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:l,entity:a}}});function w(e,o,l,a,$,C){const c=s("FSLoadTile"),g=s("FSFolderTileUI");return e.getting?(n(),i(c,{key:0,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["selectable","modelValue"])):e.entity?(n(),i(g,I({key:1,code:e.entity.code,icon:e.entity.icon,label:e.entity.label,imageId:e.entity.imageId,bottomColor:e.entity.colors,recursiveFoldersIds:e.entity.recursiveFoldersIds,recursiveDashboardsIds:e.entity.recursiveDashboardsIds,selectable:e.$props.selectable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["code","icon","label","imageId","bottomColor","recursiveFoldersIds","recursiveDashboardsIds","selectable","modelValue"])):b("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Oe={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const je=["Variations"];export{r as Variations,je as __namedExportsOrder,Oe as default};
