import{d as L,c as u,i as H,R as a,Z as z,a2 as le,_ as ie,p as re,t as i,A,B as x,D as m,x as se,I as f,L as _,J as h,K as C,G as E,F as de,S as ce,k as pe,H as ue}from"./vue.esm-bundler-CTTOvLCD.js";import{F as me}from"./FSRichTextField-NnB0eL9G.js";import{F as V}from"./FSIcon-yzGYQgqh.js";import{_ as W}from"./FSSpan-QNtf4e4q.js";import{F as K}from"./FSText-zXSXSnZG.js";import{_ as j}from"./FSRow-C8EFLcn9.js";import{u as fe,C as $}from"./useColors-D7R-CyI7.js";import{s as q}from"./css-D46r6e5F.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as xe}from"./index-B698eGq-.js";import{m as I,g,a as P,c as O,p as ve}from"./color-DTA1Qd0w.js";import{m as Se,a as Fe}from"./scopeId-DGVhnfG2.js";import{p as b,J as ye,s as ge,u as Pe}from"./theme-DpYUkAdN.js";import{I as w,V as be,a as Z}from"./VIcon-DzkIKThE.js";import{R as Te}from"./index-Bj6Uq_NX.js";import{V as M}from"./VDefaultsProvider-45AVpOQL.js";import{m as he,u as Ce}from"./elevation-CqdG4vF6.js";import{a as Ve,b as Ie,m as ke,u as Ae}from"./group-CroFFR-b.js";import{m as _e,u as Ee}from"./rounded-5tkyiosR.js";import{u as $e}from"./useSlots-NXmwCOLw.js";import{F as qe}from"./FSButton-B2X9DGvb.js";import"./FSAutocompleteField-BzAl3brV.js";import"./FSSearchField-BTXtCPns.js";import"./FSTextField-Cq5SV0et.js";import"./FSBaseField-BJJzXcrO.js";import"./FSCol-BPr0jVzk.js";import"./useRules-DE909mL5.js";import"./useBreakpoints-Bm7CjYdd.js";import"./VField-Bi2n7Ebd.js";import"./transition-C1y9a89u.js";import"./VLabel-DjEMOXzE.js";import"./VInput-BgFKWDn-.js";import"./locale-Guk_W035.js";import"./density-n-hig0Tg.js";import"./dimensions-DIR9-JzD.js";import"./proxiedModel-Da7OD98r.js";import"./form-gxFDX6UX.js";import"./loader-BcXzPxbu.js";import"./VProgressCircular-it35si_v.js";import"./resizeObserver-Bwa55KU2.js";import"./anchor-KPAVzGxJ.js";import"./forwardRefs-DWGaNmQL.js";import"./index-CK42gwlP.js";import"./useTranslations-Dol6kQeQ.js";import"./VList-DRexluGA.js";import"./FSCard-DxhVm8H0.js";import"./VDialog-Cr2bmOLC.js";import"./VOverlay-Bysvo4NF.js";import"./display-BWFgSvI7.js";import"./router-SvtovJtL.js";import"./ssrBoot-C3MoFAVe.js";import"./border-CjCUMUtA.js";import"./VImg-C1IcDibP.js";import"./FSSlideGroup-CLbrB063.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BC6-OF7l.js";import"./VSlideGroupItem-CyUsoDyC.js";import"./FSToggleSet-0XsNufiD.js";import"./FSWrapGroup-BCi713M2.js";import"./FSCheckbox-CVOakf5q.js";import"./VSelectionControl-CZi2-uP4.js";import"./FSFadeOut-C2gEJSut.js";import"./FSLoader-AugIw030.js";import"./FSRadio-GwhtOOcI.js";import"./VSelect-BnarcBwl.js";import"./VMenu-DP8ibRhi.js";import"./filter-4zTRfP5f.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./FSClickable-DznopAj9.js";const Q=L({name:"FSAccordionPanel",components:{FSRichTextField:me,FSIcon:V,FSSpan:W,FSText:K,FSRow:j},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:l}=fe(),t=l($.Background),n=l($.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":q(e.paddingTitle),"--fs-accordion-panel-padding-content":q(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}}),S=Symbol.for("vuetify:v-expansion-panel"),U=b({...I(),...Se()},"VExpansionPanelText"),B=g()({name:"VExpansionPanelText",props:U(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=Fe(e,n.isSelected);return P(()=>a(xe,{onAfterLeave:c},{default:()=>{var o;return[z(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[le,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:w,default:"$expand"},collapseIcon:{type:w,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...I()},"VExpansionPanelTitle"),R=g()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:X(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"color"),o=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=u(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var F;return z(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(F=t.default)==null?void 0:F.call(t,o.value),!e.hideActions&&a(M,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var v;return[a("span",{class:"v-expansion-panel-title__icon"},[((v=t.actions)==null?void 0:v.call(t,o.value))??a(be,null,null)])]}})]),[[ie("ripple"),e.ripple]])}),{}}}),Y=b({title:String,text:String,bgColor:String,...he(),...Ve(),..._e(),...Z(),...X(),...U()},"VExpansionPanel"),we=g()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Ie(e,S),{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"bgColor"),{elevationClasses:o}=Ce(e),{roundedClasses:d}=Ee(e),F=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),v=u(()=>n.group.items.value.reduce((p,s,T)=>(n.group.selected.value.includes(s.id)&&p.push(T),p),[])),te=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===1)}),ae=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===-1)});return re(S,n),P(()=>{const p=!!(t.text||e.text),s=!!(t.title||e.title),T=R.filterProps(e),oe=B.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":te.value,"v-expansion-panel--after-active":ae.value,"v-expansion-panel--disabled":F.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[a("div",{class:["v-expansion-panel__shadow",...o.value]},null),a(M,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...oe}}},{default:()=>{var k;return[s&&a(R,{key:"title"},{default:()=>[t.title?t.title():e.title]}),p&&a(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(k=t.default)==null?void 0:k.call(t)]}})]})}),{groupItem:n}}}),Be=["default","accordion","inset","popout"],Re=b({flat:Boolean,...ke(),...ye(Y(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ge(),...I(),...Z(),variant:{type:String,default:"default",validator:e=>Be.includes(e)}},"VExpansionPanels"),Ne=g()({name:"VExpansionPanels",props:Re(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:r}=Ae(e,S),{themeClasses:c}=Pe(e),o=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ve({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),P(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{prev:r,next:n})]}})),{next:n,prev:r}}});function Ge(e,l,t,n,r,c){const o=A("FSText"),d=A("FSRichTextField");return f(),x(we,se({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:m(()=>[_(e.$slots,"title",{},()=>[a(j,null,{default:m(()=>[e.$props.prependIcon?(f(),x(V,{key:0},{default:m(()=>[h(C(e.$props.prependIcon),1)]),_:1})):E("",!0),a(W,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:m(()=>[h(C(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:m(()=>[_(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(f(),x(o,{key:0,lineClamp:e.$props.lineClampContent},{default:m(()=>[h(C(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(f(),x(d,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):E("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const De=J(Q,[["render",Ge]]);Q.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const ee=L({name:"FSAccordion",setup(){const{getChildren:e}=$e();return{getChildren:e}}});function Le(e,l,t,n,r,c){return f(),x(Ne,{variant:"accordion"},{default:m(()=>[(f(!0),de(ue,null,ce(e.getChildren(),(o,d)=>(f(),x(pe(o),{key:d}))),128))]),_:1})}const ne=J(ee,[["render",Le]]);ee.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const it={title:"Foundation/Shared/Accordion",component:ne,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={render:()=>({components:{FSAccordion:ne,FSAccordionPanel:De,FSText:K,FSIcon:V,FSButton:qe},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSAccordion>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    First panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-emoticon-cool-outline
                  </FSIcon>
                  <FSText>
                    Hello there
                  </FSText>
                </template>
            </FSAccordionPanel>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    Second panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-robot-angry-outline
                  </FSIcon>
                  <FSText>
                    General kenobi
                  </FSText>
                  <FSButton
                    label="Click here to see more"
                  />
                </template>
            </FSAccordionPanel>
        </FSAccordion>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSAccordion>
            <FSAccordionPanel
              title="First panel"
              content="Hello there"
            />
            <FSAccordionPanel
              title="Second panel"
              content="General Kenobi"
            />
        </FSAccordion>
      </div>
    </div>`})};var N,G,D;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSAccordion,
      FSAccordionPanel,
      FSText,
      FSIcon,
      FSButton
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSText> With slots </FSText>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <FSAccordion>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    First panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-emoticon-cool-outline
                  </FSIcon>
                  <FSText>
                    Hello there
                  </FSText>
                </template>
            </FSAccordionPanel>
            <FSAccordionPanel>
                <template #title>
                  <FSText>
                    Second panel
                  </FSText>
                </template>
                <template #content>
                  <FSIcon>
                    mdi-robot-angry-outline
                  </FSIcon>
                  <FSText>
                    General kenobi
                  </FSText>
                  <FSButton
                    label="Click here to see more"
                  />
                </template>
            </FSAccordionPanel>
        </FSAccordion>
      </div>
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSText> With props </FSText>
      <div style="display: flex; gap: 10px;">
        <FSAccordion>
            <FSAccordionPanel
              title="First panel"
              content="Hello there"
            />
            <FSAccordionPanel
              title="Second panel"
              content="General Kenobi"
            />
        </FSAccordion>
      </div>
    </div>\`
  })
}`,...(D=(G=y.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const rt=["Variations"];export{y as Variations,rt as __namedExportsOrder,it as default};
