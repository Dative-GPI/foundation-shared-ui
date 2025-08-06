import{F}from"./FSTile-DvIRGdrB.js";import{F as c}from"./FSLocationTileUI-D7HLxQge.js";import{d as V,w as b,B as m,H as S,m as T,I as l,J as p}from"./vue.esm-bundler-PONd4AmC.js";import{F as L}from"./FSLoadTile-C1FWVTDD.js";import{a as v}from"./useLocations-BPTXF2Ju.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as C}from"./properties-Qw-O9fbT.js";import"./FSClickable-BpeLEfG7.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSCheckbox-B_D3nKx1.js";import"./FSIcon-wf_hiRKr.js";import"./FSSpan-DqsaA-ji.js";import"./useSlots-nyIcwo6G.js";import"./useRules-CT5DWk6c.js";import"./VCheckboxBtn-CYnHxMSC.js";import"./VSelectionControl-BAKsAS1a.js";import"./density-DM1TPnyn.js";import"./proxiedModel-BMHfYIia.js";import"./index-aCfcr9Gd.js";import"./VLabel-B2dMuALu.js";import"./VInput-CX-j4Zl6.js";import"./locale-CoLhg8Wl.js";import"./index-COu1mqSp.js";import"./transition-BpYTYsmy.js";import"./dimensions-D04OQyPe.js";import"./FSEntityCountBadge-D-KvFTo_.js";import"./FSColor-BKFrJOA6.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-C5TZsX5E.js";import"./FSIconCard-BRdJN8eQ.js";import"./FSImage-C3LGd4N4.js";import"./FSImageUI-Dj9MaFLC.js";import"./FSLoader-B0jwcdOS.js";import"./elevation-D2k7D5K3.js";import"./VImg-AonvEV9k.js";import"./rounded-Cwlpymxx.js";import"./index-CzkqP9_q.js";import"./useImages-BcPfe_zO.js";import"./base-CmdGny12.js";import"./composableFactory-B2U31qfW.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BwsMVknI.js";import"./address-CE2z3AEI.js";import"./base-Cd1_IDDR.js";import"./useAppOrganisationId-BgVWu_vS.js";const f=V({name:"FSLocationTile",components:{FSLocationTileUI:c,FSLoadTile:L},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:i,entity:n}=v();return b(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:i,entity:n}}});function q(e,o,i,n,k,B){const g=l("FSLoadTile"),y=l("FSLocationTileUI");return e.getting?(p(),m(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(p(),m(y,T({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","selectable","modelValue"])):S("",!0)}const r=I(f,[["render",q]]);f.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Ae={title:"Foundation/Core/Tiles/Location",component:r,tags:["autodocs"],argTypes:{...C([c,F],r),...$(r),locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:r},setup(){return{args:e}},template:`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{locationId:"1"}};var s,d,u;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSLocationTile
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    locationId: '1'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const He=["Default"];export{t as Default,He as __namedExportsOrder,Ae as default};
