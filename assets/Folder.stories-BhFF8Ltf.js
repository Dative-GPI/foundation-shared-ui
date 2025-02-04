import{d as F,o as y,w as v,A as i,F as I,l as V,H as n,I as p}from"./vue.esm-bundler-NAfsqApI.js";import{F as b}from"./FSFolderTileUI-eROgffLs.js";import{F as T}from"./FSLoadTile-Csmm-etI.js";import{a as S}from"./useFolders-D02leScy.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSSimpleTileUI-D4Sas0yr.js";import"./FSIconCard-B7o102Mb.js";import"./FSCard-DOESxZy8.js";import"./FSCol-CPY6S-Xd.js";import"./css-DBDqGZ-V.js";import"./useBreakpoints-BwxwzcAl.js";import"./FSRow-GjwhmX1p.js";import"./useColors-CWqJhoVw.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-F_JAsCzs.js";import"./FSIcon-Dq2bxLH5.js";import"./VIcon-PiNvAqE-.js";import"./color-BvydW9AS.js";import"./FSImage-pL2n9Qiy.js";import"./FSImageUI-5vzo4bHr.js";import"./FSLoader-C8dZP0ML.js";import"./dimensions-IFPI4Yq9.js";import"./elevation-B-XsQHpK.js";import"./locale-CAPEya44.js";import"./VImg-D7CqP58l.js";import"./rounded-DwVJT96z.js";import"./transition-L7INWkz2.js";import"./index-DINlpRuJ.js";import"./useImages-V3peuH-V.js";import"./base-CmdGny12.js";import"./composableFactory-WcheuuwI.js";import"./serviceFactory-DMr1GitK.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-DQih8RjT.js";import"./FSSpan-CLtVPKpS.js";import"./useSlots-S0O9Daut.js";import"./FSTile-DVIPkavo.js";import"./FSClickable-Dvaj3J5M.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./FSCheckbox-CZADXYvb.js";import"./useRules-pqUeO9kt.js";import"./VSelectionControl-CV2pv1R-.js";import"./density-BGeA8UH8.js";import"./proxiedModel-sn-eI_a5.js";import"./index-o6vlk9JB.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./index-Dne_26Gx.js";import"./form-DTsyvZhj.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D1kf-R5n.js";import"./useAppOrganisationId-CZPUgkT3.js";const u=F({name:"FSFolderTile",components:{FSFolderTileUI:b,FSLoadTile:T},props:{folderId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:a,entity:l}=S();return y(()=>{o(e.folderId)}),v(()=>e.folderId,()=>{o(e.folderId)}),{getting:a,entity:l}}});function w(e,o,a,l,$,C){const c=n("FSLoadTile"),g=n("FSFolderTileUI");return e.getting?(p(),i(c,{key:0,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(p(),i(g,V({key:1,label:e.entity.label,code:e.entity.code,bottomColor:e.entity.colors,icon:e.entity.icon,imageId:e.entity.imageId,editable:e.$props.editable,modelValue:e.$props.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["label","code","bottomColor","icon","imageId","editable","modelValue"])):I("",!0)}const f=k(u,[["render",w]]);u.__docgenInfo={displayName:"FSFolderTile",exportName:"default",description:"",tags:{},props:[{name:"folderId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSFolderTile.vue"]};const Be={title:"Foundation/Core/Tiles/Folder",component:f,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2","3","6","7"],selected:[!1,!1,!1,!1,!1]}},render:(e,{argTypes:o})=>({components:{FSFolderTile:f},props:Object.keys(o),setup(){return{...e}},template:`
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
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const he=["Variations"];export{r as Variations,he as __namedExportsOrder,Be as default};
