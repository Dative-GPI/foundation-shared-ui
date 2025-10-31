import{F}from"./FSTile-CPs209xc.js";import{F as c}from"./FSLocationTileUI-CUCtjEEl.js";import{d as V,w as b,B as m,H as S,m as T,I as l,J as p}from"./vue.esm-bundler-CC_jVOJ5.js";import{F as L}from"./FSLoadTile-C36HWg-d.js";import{a as v}from"./useLocations-C1Tb_jEa.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as C}from"./properties-Qw-O9fbT.js";import"./FSClickable-DFmwvck2.js";import"./FSRouterLink-DFrDtHuc.js";import"./vue-router-CE1XKJtL.js";import"./FSCard-twwkVLSp.js";import"./FSCol-DVEaUPKl.js";import"./css-DTGEi_Ca.js";import"./useBreakpoints-BMcJFLA8.js";import"./FSRow-CjY3icuR.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./VProgressCircular-B7HKciov.js";import"./color-BM2dSUAO.js";import"./resizeObserver-BZ0AJw4z.js";import"./VIcon-BOLLMMm0.js";import"./FSCheckbox-D-xuSzdC.js";import"./FSIcon-CeLDRxMK.js";import"./FSSpan-DkNsO5wd.js";import"./useSlots-C8jkAuOW.js";import"./useRules-Da0JLBaA.js";import"./VCheckboxBtn-C85wpeer.js";import"./VSelectionControl-CvHa2RXZ.js";import"./density-mssFUWH2.js";import"./proxiedModel-Nw0LX-ta.js";import"./index-DWDx8SXO.js";import"./VLabel-kKpu5iXd.js";import"./VInput-0C1kQySn.js";import"./locale-K9DBMW2q.js";import"./index-Dylhq_Dl.js";import"./transition-Ucf2Ovas.js";import"./dimensions-TKp8HHzB.js";import"./FSEntityCountBadge-N3i0Hfui.js";import"./FSColor-ZoGLOG1G.js";import"./badge-D9p4Oj7n.js";import"./FSSimpleTileUI-3tPA3xAK.js";import"./FSIconCard-C9Y7GHaO.js";import"./FSImage-s4wyGGaF.js";import"./FSImageUI-DVteMu9v.js";import"./FSLoader-0nGK1qhA.js";import"./elevation-CjJG1XnK.js";import"./VImg-BmPSKt86.js";import"./rounded-Cy4gG01O.js";import"./index-B48vLg-P.js";import"./useImages-k4wzHpJZ.js";import"./base-CmdGny12.js";import"./composableFactory-7f7_oyFS.js";import"./serviceFactory-aQiBqOvf.js";import"./lodash-Zo30T2Bj.js";import"./uuid-DTaye2KM.js";import"./useAppAuthToken-BT-dflJP.js";import"./address-CE2z3AEI.js";import"./base-Cj4tO-2v.js";import"./useAppOrganisationId-DWUnIwce.js";const f=V({name:"FSLocationTile",components:{FSLocationTileUI:c,FSLoadTile:L},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:i,entity:n}=v();return b(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:i,entity:n}}});function q(e,o,i,n,k,B){const g=l("FSLoadTile"),y=l("FSLocationTileUI");return e.getting?(p(),m(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=a=>e.$emit("update:modelValue",a))},null,8,["selectable","modelValue"])):e.entity?(p(),m(y,T({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=a=>e.$emit("update:modelValue",a))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","selectable","modelValue"])):S("",!0)}const r=I(f,[["render",q]]);f.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const Ae={title:"Foundation/Core/Tiles/Location",component:r,tags:["autodocs"],argTypes:{...C([c,F],r),...$(r),locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:r},setup(){return{args:e}},template:`
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
