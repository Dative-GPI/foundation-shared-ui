import{d as L,c as u,i as H,R as a,Z as z,a2 as le,_ as ie,p as re,t as i,A as x,D as m,l as se,H as A,I as f,L as _,F as E,J as h,K as C,B as de,G as ce,S as pe,x as ue}from"./vue.esm-bundler-NAfsqApI.js";import{F as me}from"./FSRichTextField-COYXKmYi.js";import{F as V}from"./FSIcon-Dq2bxLH5.js";import{_ as W}from"./FSSpan-CLtVPKpS.js";import{F as K}from"./FSText-Bp70TDSF.js";import{_ as j}from"./FSRow-GjwhmX1p.js";import{u as fe,C as $}from"./useColors-CWqJhoVw.js";import{s as q}from"./css-DBDqGZ-V.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as xe}from"./index-Dne_26Gx.js";import{m as I,g,u as P,c as O,p as ve}from"./color-BvydW9AS.js";import{m as Se,a as Fe}from"./scopeId-CbPxXtFO.js";import{p as b,u as ye,s as ge,J as Pe}from"./theme-F_JAsCzs.js";import{I as w,V as be,m as Z}from"./VIcon-PiNvAqE-.js";import{R as Te}from"./index-o6vlk9JB.js";import{V as M}from"./VDefaultsProvider-BngNLuXK.js";import{u as he,m as Ce}from"./elevation-B-XsQHpK.js";import{b as Ve,a as Ie,u as ke,m as Ae}from"./group-Dl43T2CL.js";import{u as _e,m as Ee}from"./rounded-DwVJT96z.js";import{u as $e}from"./useSlots-S0O9Daut.js";import{F as qe}from"./FSButton-CnXo3fLV.js";import"./FSAutocompleteField-Dosoxp9w.js";import"./FSSearchField-LHGjxxhV.js";import"./FSTextField-Dzov9hcU.js";import"./FSBaseField-CjhswGig.js";import"./FSCol-CPY6S-Xd.js";import"./useRules-pqUeO9kt.js";import"./useBreakpoints-BwxwzcAl.js";import"./VField-KOKiCRZA.js";import"./transition-L7INWkz2.js";import"./VLabel-BDFzMscP.js";import"./VInput-B5HH3Lye.js";import"./locale-CAPEya44.js";import"./density-BGeA8UH8.js";import"./dimensions-IFPI4Yq9.js";import"./proxiedModel-sn-eI_a5.js";import"./form-DTsyvZhj.js";import"./loader-DsBOwpms.js";import"./VProgressCircular-B6p7zTwg.js";import"./resizeObserver-CLnVcpcq.js";import"./anchor-DvtYZGyi.js";import"./forwardRefs-DWGaNmQL.js";import"./index-DINlpRuJ.js";import"./useTranslations-CxiknF7e.js";import"./VList-Cf1cUG92.js";import"./FSCard-DOESxZy8.js";import"./VDialog-uWe1mq7l.js";import"./VOverlay-CNRAdbgq.js";import"./display-Bn-MFLq6.js";import"./router-0GC4RTMW.js";import"./ssrBoot-BkO-TPgF.js";import"./border-C5v47RY4.js";import"./VImg-D7CqP58l.js";import"./FSSlideGroup-Cl7IgSOt.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-BwecMMW5.js";import"./VSlideGroupItem-BvOdViLK.js";import"./FSToggleSet-CBrw8ECP.js";import"./FSWrapGroup-C3Z0hZ7U.js";import"./FSCheckbox-CZADXYvb.js";import"./VSelectionControl-CV2pv1R-.js";import"./FSFadeOut-D3iDD7Hj.js";import"./FSLoader-C8dZP0ML.js";import"./FSRadio-Bz6eMy_b.js";import"./VSelect-aoHOo6gx.js";import"./VMenu-D8AvjW2T.js";import"./filter-DH9_huac.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSRouterLink-BsurcUkD.js";import"./vue-router-CwkSDy-h.js";import"./FSClickable-Dvaj3J5M.js";const Q=L({name:"FSAccordionPanel",components:{FSRichTextField:me,FSIcon:V,FSSpan:W,FSText:K,FSRow:j},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:l}=fe(),t=l($.Background),n=l($.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":q(e.paddingTitle),"--fs-accordion-panel-padding-content":q(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}}),S=Symbol.for("vuetify:v-expansion-panel"),U=b({...I(),...Se()},"VExpansionPanelText"),B=g()({name:"VExpansionPanelText",props:U(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=Fe(e,n.isSelected);return P(()=>a(xe,{onAfterLeave:c},{default:()=>{var o;return[z(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&r.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(o=t.default)==null?void 0:o.call(t)])]),[[le,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:w,default:"$expand"},collapseIcon:{type:w,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...I()},"VExpansionPanelTitle"),R=g()({name:"VExpansionPanelTitle",directives:{Ripple:Te},props:X(),setup(e,l){let{slots:t}=l;const n=H(S);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"color"),o=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=u(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return P(()=>{var F;return z(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(F=t.default)==null?void 0:F.call(t,o.value),!e.hideActions&&a(M,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var v;return[a("span",{class:"v-expansion-panel-title__icon"},[((v=t.actions)==null?void 0:v.call(t,o.value))??a(be,null,null)])]}})]),[[ie("ripple"),e.ripple]])}),{}}}),Y=b({title:String,text:String,bgColor:String,...Ce(),...Ie(),...Ee(),...Z(),...X(),...U()},"VExpansionPanel"),we=g()({name:"VExpansionPanel",props:Y(),emits:{"group:selected":e=>!0},setup(e,l){let{slots:t}=l;const n=Ve(e,S),{backgroundColorClasses:r,backgroundColorStyles:c}=O(e,"bgColor"),{elevationClasses:o}=he(e),{roundedClasses:d}=_e(e),F=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),v=u(()=>n.group.items.value.reduce((p,s,T)=>(n.group.selected.value.includes(s.id)&&p.push(T),p),[])),te=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===1)}),ae=u(()=>{const p=n.group.items.value.findIndex(s=>s.id===n.id);return!n.isSelected.value&&v.value.some(s=>s-p===-1)});return re(S,n),P(()=>{const p=!!(t.text||e.text),s=!!(t.title||e.title),T=R.filterProps(e),oe=B.filterProps(e);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":te.value,"v-expansion-panel--after-active":ae.value,"v-expansion-panel--disabled":F.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[a("div",{class:["v-expansion-panel__shadow",...o.value]},null),a(M,{defaults:{VExpansionPanelTitle:{...T},VExpansionPanelText:{...oe}}},{default:()=>{var k;return[s&&a(R,{key:"title"},{default:()=>[t.title?t.title():e.title]}),p&&a(B,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(k=t.default)==null?void 0:k.call(t)]}})]})}),{groupItem:n}}}),Be=["default","accordion","inset","popout"],Re=b({flat:Boolean,...Ae(),...Pe(Y(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...ge(),...I(),...Z(),variant:{type:String,default:"default",validator:e=>Be.includes(e)}},"VExpansionPanels"),Ne=g()({name:"VExpansionPanels",props:Re(),emits:{"update:modelValue":e=>!0},setup(e,l){let{slots:t}=l;const{next:n,prev:r}=ke(e,S),{themeClasses:c}=ye(e),o=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return ve({VExpansionPanel:{bgColor:i(e,"bgColor"),collapseIcon:i(e,"collapseIcon"),color:i(e,"color"),eager:i(e,"eager"),elevation:i(e,"elevation"),expandIcon:i(e,"expandIcon"),focusable:i(e,"focusable"),hideActions:i(e,"hideActions"),readonly:i(e,"readonly"),ripple:i(e,"ripple"),rounded:i(e,"rounded"),static:i(e,"static")}}),P(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,o.value,e.class],style:e.style},{default:()=>{var d;return[(d=t.default)==null?void 0:d.call(t,{prev:r,next:n})]}})),{next:n,prev:r}}});function Ge(e,l,t,n,r,c){const o=A("FSText"),d=A("FSRichTextField");return f(),x(we,se({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:m(()=>[_(e.$slots,"title",{},()=>[a(j,null,{default:m(()=>[e.$props.prependIcon?(f(),x(V,{key:0},{default:m(()=>[h(C(e.$props.prependIcon),1)]),_:1})):E("",!0),a(W,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:m(()=>[h(C(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:m(()=>[_(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(f(),x(o,{key:0,lineClamp:e.$props.lineClampContent},{default:m(()=>[h(C(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(f(),x(d,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):E("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const De=J(Q,[["render",Ge]]);Q.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const ee=L({name:"FSAccordion",setup(){const{getChildren:e}=$e();return{getChildren:e}}});function Le(e,l,t,n,r,c){return f(),x(Ne,{variant:"accordion"},{default:m(()=>[(f(!0),de(ce,null,pe(e.getChildren(),(o,d)=>(f(),x(ue(o),{key:d}))),128))]),_:1})}const ne=J(ee,[["render",Le]]);ee.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const it={title:"Foundation/Shared/Accordion",component:ne,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},y={render:()=>({components:{FSAccordion:ne,FSAccordionPanel:De,FSText:K,FSIcon:V,FSButton:qe},template:`
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
