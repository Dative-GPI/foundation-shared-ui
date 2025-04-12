import{F}from"./FSTile-laYGtZFU.js";import{F as c}from"./FSLocationTileUI-B0z_IJdF.js";import{d as V,w as b,z as l,E as S,m as T,G as m,H as s}from"./vue.esm-bundler-PTWG9x2X.js";import{F as L}from"./FSLoadTile-t9RE8sse.js";import{a as v}from"./useLocations-C5CK260A.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{a as $,b as C}from"./properties-DwZ_iDct.js";import"./FSClickable-KpP1cmTZ.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSCard-CRoBY3gL.js";import"./FSCol-qfATdd_b.js";import"./css-B90wD3BD.js";import"./useBreakpoints-W7XGW48y.js";import"./FSRow-DPcQMiM9.js";import"./useColors-DSUu_QQ4.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-D6MQh39g.js";import"./VProgressCircular-eoxb555W.js";import"./color-CCpgnDIk.js";import"./resizeObserver-C17Kgm90.js";import"./VIcon-DIeegzqR.js";import"./FSCheckbox-D0eLEsDk.js";import"./FSIcon-DQMOs0-E.js";import"./FSSpan-yJEd2pn-.js";import"./useSlots-BG_ZhEqK.js";import"./useRules-D0leB7Wy.js";import"./VSelectionControl-Fvr0iuTu.js";import"./density-CznkHGGy.js";import"./proxiedModel-CvHSoKPb.js";import"./index-Dqqa47M6.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./locale-Cz_4DTJh.js";import"./index-b-ADC_Il.js";import"./transition-QV8dDJB9.js";import"./dimensions-v18atrWI.js";import"./FSIconCard-CVsCm8Sv.js";import"./FSColor-D8vECu2f.js";import"./FSLoader-DnFcYh1x.js";import"./elevation-CrSwNJwg.js";import"./address-CE2z3AEI.js";import"./base-BJ27TNVe.js";import"./useAppOrganisationId-CurthI5S.js";import"./composableFactory-BVozujU4.js";import"./serviceFactory-B3o6Bvwt.js";import"./lodash-BrWYvtk2.js";import"./uuid-DTaye2KM.js";const f=V({name:"FSLocationTile",components:{FSLocationTileUI:c,FSLoadTile:L},props:{locationId:{type:String,required:!0},modelValue:{type:Boolean,required:!1,default:!1},selectable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{get:o,getting:n,entity:i}=v();return b(()=>e.locationId,()=>{o(e.locationId)},{immediate:!0}),{getting:n,entity:i}}});function q(e,o,n,i,k,U){const g=m("FSLoadTile"),y=m("FSLocationTileUI");return e.getting?(s(),l(g,{key:0,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[0]||(o[0]=r=>e.$emit("update:modelValue",r))},null,8,["selectable","modelValue"])):e.entity?(s(),l(y,T({key:1,icon:e.entity.icon,label:e.entity.label,code:e.entity.code,color:e.entity.color,address:e.entity.address.placeLabel,deviceCount:e.entity.deviceOrganisationsCount,selectable:e.$props.selectable,modelValue:e.modelValue,"onUpdate:modelValue":o[1]||(o[1]=r=>e.$emit("update:modelValue",r))},e.$attrs),null,16,["icon","label","code","color","address","deviceCount","selectable","modelValue"])):S("",!0)}const a=I(f,[["render",q]]);f.__docgenInfo={displayName:"FSLocationTile",exportName:"default",description:"",tags:{},props:[{name:"locationId",type:{name:"string"},required:!0},{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"selectable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/core/foundation-core-components/components/tiles/FSLocationTile.vue"]};const $e={title:"Foundation/Core/Tiles/Location",component:a,tags:["autodocs"],argTypes:{...C([c,F],a),...$(a),locationId:{control:"select",options:["1","2","3"]}}},t={render:e=>({components:{FSLocationTile:a},setup(){return{args:e}},template:`
      <FSLocationTile
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{locationId:"1"}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};const Ce=["Default"];export{t as Default,Ce as __namedExportsOrder,$e as default};
