import{a as oe,q as o,Z as ae,a3 as ge,c as f,_ as Pe,p as ye,y as r,d as le,B as v,D as d,m as be,I as H,J as m,H as $,P as L,K as E,L as q,G as Te,F as he,U as Ie,x as Ae}from"./vue.esm-bundler-B9lxvfDw.js";import{F as Ve}from"./FSRichTextField-Bnd__GRi.js";import{F as g}from"./FSIcon-kCffLiJ2.js";import{_ as re}from"./FSSpan-COYXSDbp.js";import{F as N}from"./FSText-DZJhh1AD.js";import{_ as w}from"./FSRow-CFa9RNor.js";import{u as Ce,C as O}from"./useColors-B5aYgogF.js";import{s as z}from"./css-BHrR5cp2.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as ke}from"./FSCol-BwxAijHz.js";import{d as _e}from"./index-7AXDWkBX.js";import{g as I,u as A,m as G,p as $e}from"./useRender-DM2jvMPN.js";import{u as Ee,m as qe}from"./lazy-B_HJlRZe.js";import{p as V,F as we,G as Be,R as Re}from"./theme-Bz5xEpqh.js";import{b as se}from"./color-CLtf7Qrc.js";import{I as K,m as ce}from"./icons-B5bBvhw0.js";import{R as Ne}from"./index-EdIR5CJS.js";import{V as de}from"./VDefaultsProvider-BurwYF19.js";import{V as Ge}from"./VIcon-DPcX_RaC.js";import{u as De,m as He}from"./elevation-DZ0Sccyb.js";import{u as Le,m as Oe,a as ze,b as Ke}from"./group-BLkb5Gt4.js";import{u as je,m as Je}from"./rounded-BrvRf1BO.js";import{u as Ue}from"./useSlots-BioZKQqg.js";import{F as Ze}from"./FSButton-CxA5c6KR.js";import{b as Me}from"./properties-Qw-O9fbT.js";import"./FSAutocompleteField-CPNDx3_i.js";import"./FSSearchField-OT9cCDCH.js";import"./FSTextField-mjFAiq2r.js";import"./FSBaseField-CSo0Z4y4.js";import"./useRules-Cun-4MZo.js";import"./useBreakpoints-Dc84uxeD.js";import"./VField-BoZICv48.js";import"./transition-Dh_EAQcC.js";import"./VLabel-CT69iMfY.js";import"./VInput-DcZY3iGt.js";import"./locale-C647X9dJ.js";import"./proxiedModel-DRvKxps3.js";import"./density-DvMOIaQw.js";import"./dimensions-n1mPaUbN.js";import"./loader-CaGstafT.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./anchor-ByUPiJZt.js";import"./easing-DY7PVvcf.js";import"./forwardRefs-C-GTDzx5.js";import"./index-Dli51uy9.js";import"./useTranslations-AmWs0SAL.js";import"./FSDialogMenu-DW8xl5CQ.js";import"./FSCard-BwbWypiX.js";import"./VDialog-CdFKtTkF.js";import"./VOverlay-DhmZjj8a.js";import"./display-BzNfeHa8.js";import"./router-BlaQ2-ft.js";import"./scopeId-4Hx_BsCg.js";import"./FSSlideGroup-CS_aA5Ur.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BETncHzg.js";import"./VSlideGroup-6AACxYIN.js";import"./goto-BiKnNwZ0.js";import"./VSlideGroupItem-C_H8qOqk.js";import"./FSToggleSet-ByYfXxag.js";import"./FSWrapGroup-rn2r_UVH.js";import"./FSCheckbox-8fnFFMk6.js";import"./VCheckboxBtn-BM2tTzJT.js";import"./VSelectionControl-COH1jBNJ.js";import"./FSFadeOut-DwiC6ECo.js";import"./FSLoader-FkDR4IbG.js";import"./FSRadio-0LKeB0Ro.js";import"./VSelect-DVFoBPCa.js";import"./VList-CuJqKfkq.js";import"./ssrBoot-butIQ2KL.js";import"./variant-BIgPYL9J.js";import"./VImg-UzuohEtG.js";import"./VDivider-CJxliPT_.js";import"./VMenu-etFegoZJ.js";import"./filter-7QmGX2th.js";import"./FSMenu-7I4odqF7.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";const P=Symbol.for("vuetify:v-expansion-panel"),pe=V({...G(),...qe()},"VExpansionPanelText"),B=I()({name:"VExpansionPanelText",props:pe(),setup(e,l){let{slots:t}=l;const n=oe(P);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:p}=Ee(e,n.isSelected);return A(()=>o(_e,{onAfterLeave:p},{default:()=>{var a;return[ae(o("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&i.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(a=t.default)==null?void 0:a.call(t)])]),[[ge,n.isSelected.value]])]}})),{}}}),ue=V({color:String,expandIcon:{type:K,default:"$expand"},collapseIcon:{type:K,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...G()},"VExpansionPanelTitle"),R=I()({name:"VExpansionPanelTitle",directives:{Ripple:Ne},props:ue(),setup(e,l){let{slots:t}=l;const n=oe(P);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:p}=se(e,"color"),a=f(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),c=f(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return A(()=>{var x;return ae(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[p.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(x=t.default)==null?void 0:x.call(t,a.value),!e.hideActions&&o(de,{defaults:{VIcon:{icon:c.value}}},{default:()=>{var S;return[o("span",{class:"v-expansion-panel-title__icon"},[((S=t.actions)==null?void 0:S.call(t,a.value))??o(Ge,null,null)])]}})]),[[Pe("ripple"),e.ripple]])}),{}}}),me=V({title:String,text:String,bgColor:String,...He(),...Oe(),...Je(),...ce(),...ue(),...pe()},"VExpansionPanel"),Qe=I()({name:"VExpansionPanel",props:me(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Le(e,P),{backgroundColorClasses:i,backgroundColorStyles:p}=se(e,"bgColor"),{elevationClasses:a}=De(e),{roundedClasses:c}=je(e),x=f(()=>(n==null?void 0:n.disabled.value)||e.disabled),S=f(()=>n.group.items.value.reduce((u,s,_)=>(n.group.selected.value.includes(s.id)&&u.push(_),u),[])),k=f(()=>{const u=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&S.value.some(s=>s-u===1)}),xe=f(()=>{const u=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&S.value.some(s=>s-u===-1)});return ye(P,n),A(()=>{const u=!!(t.text||e.text),s=!!(t.title||e.title),_=R.filterProps(e),Fe=B.filterProps(e);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":k.value,"v-expansion-panel--after-active":xe.value,"v-expansion-panel--disabled":x.value},c.value,i.value,e.class],style:[p.value,e.style]},{default:()=>[o("div",{class:["v-expansion-panel__shadow",...a.value]},null),o(de,{defaults:{VExpansionPanelTitle:{..._},VExpansionPanelText:{...Fe}}},{default:()=>{var D;return[s&&o(R,{key:"title"},{default:()=>[t.title?t.title():e.title]}),u&&o(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(D=t.default)==null?void 0:D.call(t)]}})]})}),{groupItem:n}}}),We=["default","accordion","inset","popout"],Xe=V({flat:Boolean,...Ke(),...Re(me(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Be(),...G(),...ce(),variant:{type:String,default:"default",validator:e=>We.includes(e)}},"VExpansionPanels"),fe=I()({name:"VExpansionPanels",props:Xe(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:i}=ze(e,P),{themeClasses:p}=we(e),a=f(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $e({VExpansionPanel:{bgColor:r(e,"bgColor"),collapseIcon:r(e,"collapseIcon"),color:r(e,"color"),eager:r(e,"eager"),elevation:r(e,"elevation"),expandIcon:r(e,"expandIcon"),focusable:r(e,"focusable"),hideActions:r(e,"hideActions"),readonly:r(e,"readonly"),ripple:r(e,"ripple"),rounded:r(e,"rounded"),static:r(e,"static")}}),A(()=>o(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},p.value,a.value,e.class],style:e.style},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t,{prev:i,next:n})]}})),{next:n,prev:i}}}),Se=le({name:"FSAccordionPanel",components:{FSRichTextField:Ve,FSIcon:g,FSSpan:re,FSText:N,FSRow:w},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"},actionPosition:{type:String,default:"end"}},setup(e){const{getColors:l}=Ce(),t=l(O.Background),n=l(O.Light);return{style:f(()=>({"--fs-accordion-panel-padding-title":z(e.paddingTitle),"--fs-accordion-panel-padding-content":z(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});function Ye(e,l,t,n,i,p){const a=H("FSText"),c=H("FSRichTextField");return m(),v(Qe,be({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style,hideActions:e.$props.actionPosition==="start"},e.$attrs),{default:d(()=>[o(R,null,{default:d(({expanded:x,collapseIcon:S,expandIcon:k})=>[o(w,{gap:"4px"},{default:d(()=>[e.$props.actionPosition==="start"?(m(),v(ke,{key:0,width:"hug",align:"center-center"},{default:d(()=>[o(g,{size:"22.5px",icon:x?S:k},null,8,["icon"])]),_:2},1024)):$("",!0),L(e.$slots,"title",{},()=>[o(w,null,{default:d(()=>[e.$props.prependIcon?(m(),v(g,{key:0},{default:d(()=>[E(q(e.$props.prependIcon),1)]),_:1})):$("",!0),o(re,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:d(()=>[E(q(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},1024)]),_:3}),o(B,null,{default:d(()=>[L(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(m(),v(a,{key:0,lineClamp:e.$props.lineClampContent},{default:d(()=>[E(q(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(m(),v(c,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):$("",!0)])]),_:3})]),_:3},16,["collapseIcon","expandIcon","style","hideActions"])}const C=ie(Se,[["render",Ye]]);Se.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"actionPosition",type:{name:'String as () => "start" | "end"'},defaultValue:{func:!1,value:'"end"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const ve=le({name:"FSAccordion",setup(){const{getChildren:e}=Ue();return{getChildren:e}}});function en(e,l,t,n,i,p){return m(),v(fe,{variant:"accordion"},{default:d(()=>[(m(!0),Te(he,null,Ie(e.getChildren(),(a,c)=>(m(),v(Ae(a),{key:c}))),128))]),_:1})}const F=ie(ve,[["render",en]]);ve.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const kt={title:"Foundation/Shared/Accordion",component:F,tags:["autodocs"],argTypes:{...Me([fe],F)}},y={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C,FSText:N,FSIcon:g},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          expandIcon="mdi-chevron-left"
          collapseIcon="mdi-chevron-down"
        >
          <template #title>
            <FSText>First panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
        <FSAccordionPanel
          expandIcon="mdi-chevron-right"
          collapseIcon="mdi-chevron-down"
          actionPosition="start"
        >
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    `})},b={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C,FSText:N,FSIcon:g,FSButton:Ze},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel>
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-robot-angry-outline</FSIcon>
            <FSText>General kenobi</FSText>
            <FSButton label="Click here to see more" />
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    `})},T={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="First panel"
          content="Hello there"
        />
      </FSAccordion>
    `})},h={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="Second panel"
          content="General Kenobi"
        />
      </FSAccordion>
    `})};var j,J,U;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSAccordion,
      FSAccordionPanel,
      FSText,
      FSIcon
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          expandIcon="mdi-chevron-left"
          collapseIcon="mdi-chevron-down"
        >
          <template #title>
            <FSText>First panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
        <FSAccordionPanel
          expandIcon="mdi-chevron-right"
          collapseIcon="mdi-chevron-down"
          actionPosition="start"
        >
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-emoticon-cool-outline</FSIcon>
            <FSText>Hello there</FSText>
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    \`
  })
}`,...(U=(J=y.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var Z,M,Q;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSAccordion,
      FSAccordionPanel,
      FSText,
      FSIcon,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel>
          <template #title>
            <FSText>Second panel</FSText>
          </template>
          <template #content>
            <FSIcon>mdi-robot-angry-outline</FSIcon>
            <FSText>General kenobi</FSText>
            <FSButton label="Click here to see more" />
          </template>
        </FSAccordionPanel>
      </FSAccordion>
    \`
  })
}`,...(Q=(M=b.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var W,X,Y;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSAccordion,
      FSAccordionPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="First panel"
          content="Hello there"
        />
      </FSAccordion>
    \`
  })
}`,...(Y=(X=T.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,ne,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSAccordion,
      FSAccordionPanel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="Second panel"
          content="General Kenobi"
        />
      </FSAccordion>
    \`
  })
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const _t=["SlotPanelOne","SlotPanelTwo","PropPanelOne","PropPanelTwo"];export{T as PropPanelOne,h as PropPanelTwo,y as SlotPanelOne,b as SlotPanelTwo,_t as __namedExportsOrder,kt as default};
