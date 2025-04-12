import{d as L,c as u,i as z,P as a,Y as H,a1 as le,Z as ie,p as re,l as i,z as x,C as m,m as se,G as A,H as f,L as E,E as _,I as h,J as C,A as de,F as ce,Q as pe,k as ue}from"./vue.esm-bundler-PTWG9x2X.js";import{F as me}from"./FSRichTextField-DTdLdr9m.js";import{F as V}from"./FSIcon-DQMOs0-E.js";import{_ as W}from"./FSSpan-yJEd2pn-.js";import{F as j}from"./FSText-Da5isN0I.js";import{_ as J}from"./FSRow-DPcQMiM9.js";import{u as fe,C as $}from"./useColors-DSUu_QQ4.js";import{s as q}from"./css-B90wD3BD.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as xe}from"./index-b-ADC_Il.js";import{m as I,g,u as P,c as O,p as ve}from"./color-CCpgnDIk.js";import{m as Se,a as Fe}from"./scopeId-CROTNdIb.js";import{p as b,x as ye,s as ge,J as Pe}from"./theme-D6MQh39g.js";import{I as w,V as be,m as Q}from"./VIcon-DIeegzqR.js";import{R as Te}from"./index-Dqqa47M6.js";import{V as Y}from"./VDefaultsProvider-aDgtYDKn.js";import{u as he,m as Ce}from"./elevation-CrSwNJwg.js";import{b as Ve,a as Ie,u as ke,m as Ae}from"./group-8tJUjatm.js";import{u as Ee,m as _e}from"./rounded-BbPXzFqc.js";import{u as $e}from"./useSlots-BG_ZhEqK.js";import{F as qe}from"./FSButton-CqjbOz0n.js";import"./FSAutocompleteField-B675gFER.js";import"./FSSearchField-BeidTVNh.js";import"./FSTextField-Du_6UKzN.js";import"./FSBaseField-BF-P1IfK.js";import"./FSCol-qfATdd_b.js";import"./useRules-D0leB7Wy.js";import"./useBreakpoints-W7XGW48y.js";import"./VField-w4x2OZhg.js";import"./transition-QV8dDJB9.js";import"./VLabel-BNJ33aDR.js";import"./VInput-C2FcZlE6.js";import"./locale-Cz_4DTJh.js";import"./density-CznkHGGy.js";import"./dimensions-v18atrWI.js";import"./proxiedModel-CvHSoKPb.js";import"./loader-BqT2mYY7.js";import"./VProgressCircular-eoxb555W.js";import"./resizeObserver-C17Kgm90.js";import"./anchor-BcF6JBj1.js";import"./forwardRefs-DWGaNmQL.js";import"./index-BNomsh5u.js";import"./useTranslations-BnE68qER.js";import"./VList-Dqx2Wq64.js";import"./FSCard-CRoBY3gL.js";import"./VDialog-DW8Lwwmu.js";import"./VOverlay-CoK8W0Lk.js";import"./display-CESVul9-.js";import"./router-BQjY5_kj.js";import"./ssrBoot-DfimFJGl.js";import"./border-CIYj3WlL.js";import"./VImg-CBGPWIu-.js";import"./FSSlideGroup-Cnb4B0wP.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BgOE6pA_.js";import"./VSlideGroupItem-C6-4cvTl.js";import"./FSToggleSet-2ksJh9hi.js";import"./FSWrapGroup-8ynKQ69u.js";import"./FSCheckbox-D0eLEsDk.js";import"./VSelectionControl-Fvr0iuTu.js";import"./FSFadeOut-BR2NoxgI.js";import"./FSLoader-DnFcYh1x.js";import"./FSRadio-dWKh4KJE.js";import"./VSelect-D-RlUgcB.js";import"./VMenu-BiZHvw8b.js";import"./filter-qsWrMVs0.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSRouterLink-C06pLVSG.js";import"./vue-router-_5OpMgKw.js";import"./FSClickable-KpP1cmTZ.js";const Z=L({name:"FSAccordionPanel",components:{FSRichTextField:me,FSIcon:V,FSSpan:W,FSText:j,FSRow:J},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:l}=fe(),t=l($.Background),n=l($.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":q(e.paddingTitle),"--fs-accordion-panel-padding-content":q(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}}),S=Symbol.for("vuetify:v-expansion-panel"),M=b({...I(),...Se()},"VExpansionPanelText"),B=g()({name:"VExpansionPanelText",props:M(),setup(e,l){let{slots:t}=l;const n=z(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=Fe(e,n.isSelected);return P(()=>a(xe,{onAfterLeave:c},{default:()=>{var o;return[H(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[le,n.isSelected.value]])]}})),{}}}),U=b({color:String,expandIcon:{type:w,default:"$expand"},collapseIcon:{type:w,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...I()},"VExpansionPanelTitle"),N=g()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:U(),setup(e,l){let{slots:t}=l;const n=z(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"color"),o=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=u(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var F;return H(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(F=t.default)==null?void 0:F.call(t,o.value),!e.hideActions&&a(Y,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var v;return[a("span",{class:"v-expansion-panel-title__icon"},[((v=t.actions)==null?void 0:v.call(t,o.value))??a(be,null,null)])]}})]),[[ie("ripple"),e.ripple]])}),{}}}),X=b({title:String,text:String,bgColor:String,...Ce(),...Ie(),..._e(),...Q(),...U(),...M()},"VExpansionPanel"),we=g()({name:"VExpansionPanel",props:X(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Ve(e,S),{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"bgColor"),{elevationClasses:o}=he(e),{roundedClasses:d}=Ee(e),F=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),v=u(()=>n.group.items.value.reduce((p,s,T)=>(n.group.selected.value.includes(s.id)&&p.push(T),p),[])),te=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===1)}),ae=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===-1)});return re(S,n),P(()=>{const p=!!(t.text||e.text),s=!!(t.title||e.title),T=N.filterProps(e),oe=B.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":te.value,"v-expansion-panel--after-active":ae.value,"v-expansion-panel--disabled":F.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[a("div",{class:["v-expansion-panel__shadow",...o.value]},null),a(Y,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...oe}}},{default:()=>{var k;return[s&&a(N,{key:"title"},{default:()=>[t.title?t.title():e.title]}),p&&a(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(k=t.default)==null?void 0:k.call(t)]}})]})}),{groupItem:n}}}),Be=["default","accordion","inset","popout"],Ne=b({flat:Boolean,...Ae(),...Pe(X(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ge(),...I(),...Q(),variant:{type:String,default:"default",validator:e=>Be.includes(e)}},"VExpansionPanels"),Re=g()({name:"VExpansionPanels",props:Ne(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:r}=ke(e,S),{themeClasses:c}=ye(e),o=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ve({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),P(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{prev:r,next:n})]}})),{next:n,prev:r}}});function Ge(e,l,t,n,r,c){const o=A("FSText"),d=A("FSRichTextField");return f(),x(we,se({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:m(()=>[E(e.$slots,"title",{},()=>[a(J,null,{default:m(()=>[e.$props.prependIcon?(f(),x(V,{key:0},{default:m(()=>[h(C(e.$props.prependIcon),1)]),_:1})):_("",!0),a(W,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:m(()=>[h(C(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:m(()=>[E(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(f(),x(o,{key:0,lineClamp:e.$props.lineClampContent},{default:m(()=>[h(C(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(f(),x(d,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):_("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const De=K(Z,[["render",Ge]]);Z.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const ee=L({name:"FSAccordion",setup(){const{getChildren:e}=$e();return{getChildren:e}}});function Le(e,l,t,n,r,c){return f(),x(Re,{variant:"accordion"},{default:m(()=>[(f(!0),de(ce,null,pe(e.getChildren(),(o,d)=>(f(),x(ue(o),{key:d}))),128))]),_:1})}const ne=K(ee,[["render",Le]]);ee.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const lt={title:"Foundation/Shared/Accordion",component:ne,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={render:()=>({components:{FSAccordion:ne,FSAccordionPanel:De,FSText:j,FSIcon:V,FSButton:qe},template:`
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
    </div>`})};var R,G,D;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(D=(G=y.parameters)==null?void 0:G.docs)==null?void 0:D.source}}};const it=["Variations"];export{y as Variations,it as __namedExportsOrder,lt as default};
