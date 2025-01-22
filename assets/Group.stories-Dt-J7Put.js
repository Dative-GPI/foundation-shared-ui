import{d as v,o as y,w as I,A as p,B as n,x as V,G as F,I as s}from"./vue.esm-bundler-CTTOvLCD.js";import{F as T}from"./FSGroupTileUI-_vwJ5dNp.js";import{F as G}from"./FSLoadTile-DgDYToEN.js";import{a as b}from"./useGroups-D7h3QxMH.js";import{_ as S}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSImage-BOQw5jYK.js";import"./FSImageUI-DYFwVBnb.js";import"./FSLoader-AugIw030.js";import"./useBreakpoints-Bm7CjYdd.js";import"./useColors-D7R-CyI7.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-DpYUkAdN.js";import"./css-D46r6e5F.js";import"./color-DTA1Qd0w.js";import"./dimensions-DIR9-JzD.js";import"./elevation-CqdG4vF6.js";import"./locale-Guk_W035.js";import"./VImg-C1IcDibP.js";import"./rounded-5tkyiosR.js";import"./transition-C1y9a89u.js";import"./index-CK42gwlP.js";import"./useImages-B6xLFcwg.js";import"./base-CmdGny12.js";import"./serviceFactory-qtdw0UKd.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";import"./composableFactory-BcaJMM0w.js";import"./useAppAuthToken-CysW3k_e.js";import"./FSColor-DFBMo33h.js";import"./FSCard-DxhVm8H0.js";import"./FSCol-BPr0jVzk.js";import"./FSRow-C8EFLcn9.js";import"./FSSpan-QNtf4e4q.js";import"./useSlots-NXmwCOLw.js";import"./FSTile-CbnAVjso.js";import"./FSClickable-DznopAj9.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSCheckbox-CVOakf5q.js";import"./FSIcon-yzGYQgqh.js";import"./useRules-DE909mL5.js";import"./VSelectionControl-CZi2-uP4.js";import"./density-n-hig0Tg.js";import"./proxiedModel-Da7OD98r.js";import"./index-Bj6Uq_NX.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./index-B698eGq-.js";import"./form-gxFDX6UX.js";import"./pathCrumb-Db-cq5HI.js";import"./base-D9u3vc5Q.js";import"./useAppOrganisationId-DS-QKKZa.js";const u=v({name:"FSGroupTile",components:{FSGroupTileUI:T,FSLoadTile:G},props:{groupId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},editable:{type:Boolean,required:!1,default:!0}},setup(e){const{get:o,getting:i,entity:a}=b();return y(()=>{o(e.groupId)}),I(()=>e.groupId,()=>{o(e.groupId)}),{getting:i,entity:a}}});function k(e,o,i,a,w,$){const c=p("FSLoadTile"),f=p("FSGroupTileUI");return e.getting?(s(),n(c,{key:0,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=t=>e.$emit("update:modelValue",t))},null,8,["editable","modelValue"])):e.entity?(s(),n(f,V({key:1,imageId:e.entity.imageId,label:e.entity.label,code:e.entity.code,recursiveGroupsIds:e.entity.recursiveGroupsIds,recursiveDeviceOrganisationsIds:e.entity.recursiveDeviceOrganisationsIds,editable:e.$props.editable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=t=>e.$emit("update:modelValue",t))},e.$attrs),null,16,["imageId","label","code","recursiveGroupsIds","recursiveDeviceOrganisationsIds","editable","modelValue"])):F("",!0)}const g=S(u,[["render",k]]);u.__docgenInfo={displayName:"FSGroupTile",exportName:"default",description:"",tags:{},props:[{name:"groupId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSGroupTile.vue"]};const Be={title:"Foundation/Core/Tiles/Group",component:g,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},r={args:{args:{values:["1","2"],selected:[!1,!1]}},render:(e,{argTypes:o})=>({components:{FSGroupTile:g},props:Object.keys(o),setup(){return{...e}},template:`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>`})};var l,m,d;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      values: ["1", "2"],
      selected: [false, false]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSGroupTile
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100vw;">
      <FSGroupTile
        v-for="(groupId, index) in args.values"
        :key="index"
        :groupId="groupId"
        v-model="args.selected[index]"
      />
    </div>\`
  })
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const Ce=["Variations"];export{r as Variations,Ce as __namedExportsOrder,Be as default};
