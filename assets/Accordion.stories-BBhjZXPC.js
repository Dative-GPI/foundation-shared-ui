import{w as oe,p as o,ad as ae,a9 as Pe,g as f,Z as ye,Q as be,a4 as r,r as le,j as v,ac as d,B as Te,Y as H,P as m,k as $,X as L,o as E,a1 as w,l as he,F as Ae,W as Ie,_ as Ve}from"./vue.esm-bundler-DR0_aU9U.js";import{F as Ce}from"./FSRichTextField-qp3i2ueh.js";import{F as g}from"./FSIcon-CBwOL1p5.js";import{_ as re}from"./FSSpan-9E7WYB2n.js";import{F as R}from"./FSText-CUmuxASa.js";import{F as ie}from"./FSCol-B2uM4vFw.js";import{_ as q}from"./FSRow-C8VtPvPz.js";import{u as ke,a as O}from"./useColors-CvhpHTRO.js";import{s as z}from"./css-B9c0ZZC5.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as _e}from"./index-C-lZWyiZ.js";import{g as A,u as I,m as G,p as $e}from"./useRender-BLRtLddt.js";import{u as Ee,m as we}from"./lazy-DY4Wto-x.js";import{a9 as V,aa as qe,$ as Be,a7 as Ne}from"./theme-Dfllckn6.js";import{u as ce}from"./color-RD9Ud5Y3.js";import{a as j}from"./icons-CT9uuJgl.js";import{R as Re}from"./index-Dlqh_ozP.js";import{V as de}from"./VDefaultsProvider-BWK1RKVO.js";import{V as Ge}from"./VIcon-e3y7Ok8e.js";import{u as De,m as He}from"./elevation-DVEOfLMu.js";import{b as Le,m as Oe,u as ze,a as je}from"./group-CUiyutR_.js";import{u as Ke,m as Qe}from"./rounded-B6-M_5uG.js";import{m as pe}from"./tag-mR0sHpgP.js";import{u as We}from"./useSlots-p1mkRhuZ.js";import{F as Xe}from"./FSButton-CX1uVweX.js";import{b as Ye}from"./properties-Qw-O9fbT.js";import"./FSAutocompleteField-TSSWDRN2.js";import"./FSSearchField-DM7Wv8W0.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./useBreakpoints-DhvOJkKp.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./intersectionObserver-DIY-g69O.js";import"./anchor-CT7OU_gq.js";import"./easing--CnlGZ0M.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./size-BQpWkrb5.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./resizeObserver-BES9Ltqd.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useTranslations-CDmrxgqt.js";import"./FSDialogMenu-qRBioB29.js";import"./VDialog-uOP7gGlh.js";import"./VOverlay-BwyinDfp.js";import"./display-B8Tm0OQZ.js";import"./router-CJAgOfLI.js";import"./scopeId-bhuUTgv7.js";import"./dialog-transition-BGzvJBOV.js";import"./FSSlideGroup-DXfM7ZwC.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BPTvjWXT.js";import"./VSlideGroup-BjJJyiAP.js";import"./goto-nsb-OfwD.js";import"./VSlideGroupItem-BDJ1UEY1.js";import"./FSToggleSet-r3-ZJAhZ.js";import"./FSWrapGroup-v391AceI.js";import"./FSCheckbox-D-n0kplZ.js";import"./VCheckboxBtn-BcbTaDIc.js";import"./VSelectionControl-MAodlwa3.js";import"./FSFadeOut-DENuqwmT.js";import"./FSLoader-DlWbYN_-.js";import"./FSRadio-CAlCR3Pp.js";import"./VSelect-CjSLppM5.js";import"./VList-fBlb7u4-.js";import"./ssrBoot-DbD7MJXH.js";import"./border-CatZixNo.js";import"./variant-BZg-bE5G.js";import"./VImg-DooBjoZC.js";import"./VDivider-g5HOQuaH.js";import"./VMenu-CkdLE1rB.js";import"./filter-CXrqG-Z2.js";import"./FSMenu-Dpr7CvAm.js";const P=Symbol.for("vuetify:v-expansion-panel"),ue=V({...G(),...we()},"VExpansionPanelText"),B=A()({name:"VExpansionPanelText",props:ue(),setup(e,l){let{slots:t}=l;const n=oe(P);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:p}=Ee(e,n.isSelected);return I(()=>o(_e,{onAfterLeave:p},{default:()=>{var a;return[ae(o("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&i.value&&o("div",{class:"v-expansion-panel-text__wrapper"},[(a=t.default)==null?void 0:a.call(t)])]),[[Pe,n.isSelected.value]])]}})),{}}}),me=V({color:String,expandIcon:{type:j,default:"$expand"},collapseIcon:{type:j,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...G()},"VExpansionPanelTitle"),N=A()({name:"VExpansionPanelTitle",directives:{Ripple:Re},props:me(),setup(e,l){let{slots:t}=l;const n=oe(P);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:p}=ce(e,"color"),a=f(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),c=f(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return I(()=>{var x;return ae(o("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},i.value,e.class],style:[p.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[o("span",{class:"v-expansion-panel-title__overlay"},null),(x=t.default)==null?void 0:x.call(t,a.value),!e.hideActions&&o(de,{defaults:{VIcon:{icon:c.value}}},{default:()=>{var S;return[o("span",{class:"v-expansion-panel-title__icon"},[((S=t.actions)==null?void 0:S.call(t,a.value))??o(Ge,null,null)])]}})]),[[ye("ripple"),e.ripple]])}),{}}}),fe=V({title:String,text:String,bgColor:String,...He(),...Oe(),...Qe(),...pe(),...me(),...ue()},"VExpansionPanel"),Ze=A()({name:"VExpansionPanel",props:fe(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Le(e,P),{backgroundColorClasses:i,backgroundColorStyles:p}=ce(e,"bgColor"),{elevationClasses:a}=De(e),{roundedClasses:c}=Ke(e),x=f(()=>(n==null?void 0:n.disabled.value)||e.disabled),S=f(()=>n.group.items.value.reduce((u,s,_)=>(n.group.selected.value.includes(s.id)&&u.push(_),u),[])),k=f(()=>{const u=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&S.value.some(s=>s-u===1)}),Fe=f(()=>{const u=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&S.value.some(s=>s-u===-1)});return be(P,n),I(()=>{const u=!!(t.text||e.text),s=!!(t.title||e.title),_=N.filterProps(e),ge=B.filterProps(e);return o(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":k.value,"v-expansion-panel--after-active":Fe.value,"v-expansion-panel--disabled":x.value},c.value,i.value,e.class],style:[p.value,e.style]},{default:()=>[o("div",{class:["v-expansion-panel__shadow",...a.value]},null),o(de,{defaults:{VExpansionPanelTitle:{..._},VExpansionPanelText:{...ge}}},{default:()=>{var D;return[s&&o(N,{key:"title"},{default:()=>[t.title?t.title():e.title]}),u&&o(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(D=t.default)==null?void 0:D.call(t)]}})]})}),{groupItem:n}}}),Je=["default","accordion","inset","popout"],Me=V({flat:Boolean,...je(),...Ne(fe(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Be(),...G(),...pe(),variant:{type:String,default:"default",validator:e=>Je.includes(e)}},"VExpansionPanels"),Se=A()({name:"VExpansionPanels",props:Me(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:i}=ze(e,P),{themeClasses:p}=qe(e),a=f(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return $e({VExpansionPanel:{bgColor:r(e,"bgColor"),collapseIcon:r(e,"collapseIcon"),color:r(e,"color"),eager:r(e,"eager"),elevation:r(e,"elevation"),expandIcon:r(e,"expandIcon"),focusable:r(e,"focusable"),hideActions:r(e,"hideActions"),readonly:r(e,"readonly"),ripple:r(e,"ripple"),rounded:r(e,"rounded"),static:r(e,"static")}}),I(()=>o(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},p.value,a.value,e.class],style:e.style},{default:()=>{var c;return[(c=t.default)==null?void 0:c.call(t,{prev:i,next:n})]}})),{next:n,prev:i}}}),ve=le({name:"FSAccordionPanel",components:{FSRichTextField:Ce,FSIcon:g,FSSpan:re,FSText:R,FSCol:ie,FSRow:q},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"},actionPosition:{type:String,default:"end"}},setup(e){const{getColors:l}=ke(),t=l(O.Background),n=l(O.Light);return{style:f(()=>({"--fs-accordion-panel-padding-title":z(e.paddingTitle),"--fs-accordion-panel-padding-content":z(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});function Ue(e,l,t,n,i,p){const a=H("FSText"),c=H("FSRichTextField");return m(),v(Ze,Te({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style,hideActions:e.$props.actionPosition==="start"},e.$attrs),{default:d(()=>[o(N,null,{default:d(({expanded:x,collapseIcon:S,expandIcon:k})=>[o(q,{gap:"4px"},{default:d(()=>[e.$props.actionPosition==="start"?(m(),v(ie,{key:0,width:"hug",align:"center-center"},{default:d(()=>[o(g,{size:"22.5px",icon:x?S:k},null,8,["icon"])]),_:2},1024)):$("",!0),L(e.$slots,"title",{},()=>[o(q,null,{default:d(()=>[e.$props.prependIcon?(m(),v(g,{key:0},{default:d(()=>[E(w(e.$props.prependIcon),1)]),_:1})):$("",!0),o(re,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:d(()=>[E(w(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},1024)]),_:3}),o(B,null,{default:d(()=>[L(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(m(),v(a,{key:0,lineClamp:e.$props.lineClampContent},{default:d(()=>[E(w(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(m(),v(c,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):$("",!0)])]),_:3})]),_:3},16,["collapseIcon","expandIcon","style","hideActions"])}const C=se(ve,[["render",Ue]]);ve.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"actionPosition",type:{name:'String as () => "start" | "end"'},defaultValue:{func:!1,value:'"end"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const xe=le({name:"FSAccordion",setup(){const{getChildren:e}=We();return{getChildren:e}}});function en(e,l,t,n,i,p){return m(),v(Se,{variant:"accordion"},{default:d(()=>[(m(!0),he(Ae,null,Ie(e.getChildren(),(a,c)=>(m(),v(Ve(a),{key:c}))),128))]),_:1})}const F=se(xe,[["render",en]]);xe.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const Bt={title:"Foundation/Shared/Accordion",component:F,tags:["autodocs"],argTypes:{...Ye([Se],F)}},y={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C,FSText:R,FSIcon:g},setup(){return{args:e}},template:`
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
    `})},b={render:e=>({components:{FSAccordion:F,FSAccordionPanel:C,FSText:R,FSIcon:g,FSButton:Xe},setup(){return{args:e}},template:`
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
    `})};var K,Q,W;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(W=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,M,U;T.parameters={...T.parameters,docs:{...(J=T.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(U=(M=T.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var ee,ne,te;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(te=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const Nt=["SlotPanelOne","SlotPanelTwo","PropPanelOne","PropPanelTwo"];export{T as PropPanelOne,h as PropPanelTwo,y as SlotPanelOne,b as SlotPanelTwo,Nt as __namedExportsOrder,Bt as default};
