import{c as u,t as f,L as a,i as N,X as R,a2 as ee,Y as ne,p as te,d as G,y as I,z as m,A as x,B as p,m as ae,I as k,E as P,G as h,D as A,C as oe,N as le,q as ie,F as se}from"./vue.esm-bundler-DjjVIdVI.js";import{F as re}from"./FSRichTextField-J6rp678y.js";import{F as C}from"./FSIcon-BCbpBdVG.js";import{_ as D}from"./FSSpan-D1pceTli.js";import{F as L}from"./FSText-Der-WemT.js";import{F as z}from"./FSRow-CpogXLW8.js";import{u as de,C as E}from"./useColors-CdvgF10X.js";import{s as $}from"./css-BkQhD285.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as y,g,p as W,a as T,c as j}from"./color-BKGJvBEr.js";import{m as ce,u as pe,a as ue,b as me}from"./group-CgGrJ6ok.js";import{a as K}from"./tag-DT601Ssr.js";import{p as b,u as fe,y as xe}from"./theme-v7reDO7s.js";import{d as ve}from"./index-DOC0sH28.js";import{m as O,u as Se}from"./lazy-Dq_5BjJr.js";import{I as _,V as Fe}from"./VIcon-CzaRZDPI.js";import{R as ye}from"./index-CN4E1Twd.js";import{m as ge,u as Te}from"./elevation-kEG7tFkj.js";import{m as be,u as Pe}from"./rounded-Cely44IK.js";import{u as he}from"./useSlots-DzSo5JdB.js";import{F as Ce}from"./FSButton-DS0wrBKk.js";import"./FSAutocompleteField-BTuTRJw_.js";import"./FSSearchField-CGsun2bQ.js";import"./FSTextField-DSbw_bnX.js";import"./FSBaseField-CruMavxg.js";import"./FSCol-TPWSQPHs.js";import"./VSpacer-CrqXaTz-.js";import"./useRules-yoa6lFkm.js";import"./VField-BnYbwRuc.js";import"./transition-C6adUwH7.js";import"./VLabel-jMK3Bs2x.js";import"./VInput-CYsTqNhA.js";import"./locale-Dn84bpGK.js";import"./density-BPFRY_Tg.js";import"./proxiedModel-G1bil5DU.js";import"./form-B7NlTRtd.js";import"./loader-CiSVFYJ7.js";import"./VProgressCircular-D-6SFgJ3.js";import"./resizeObserver-C4lJhwTD.js";import"./anchor-Bj7ImPZT.js";import"./VDefaultsProvider-vYIZ9Ix8.js";import"./forwardRefs-DWGaNmQL.js";import"./index-Cc8xmT7Y.js";import"./useTranslations-f9CWAvtI.js";import"./FSDialogMenu-CUwupOm-.js";import"./FSCard-C9IdgJNY.js";import"./VDialog-BtZGJwxx.js";import"./VOverlay-PZpBQDvE.js";import"./dimensions-DBrW1AO_.js";import"./display-CRYv_UDL.js";import"./router-Cjjv2JN-.js";import"./FSSlideGroup-DlNGN2Nb.js";import"./uuid-DTaye2KM.js";import"./VSlideGroupItem-_Msq1ZN2.js";import"./FSToggleSet-CzRpQEWO.js";import"./FSWrapGroup-D3vzPBUf.js";import"./FSCheckbox-Bu2nWsZZ.js";import"./VSelectionControl-DgLKJW5n.js";import"./FSFadeOut-CNI_FQpM.js";import"./FSLoader-DpMpI5Qw.js";import"./FSRadio-ChOxIOPt.js";import"./VList-CJJ57CS8.js";import"./ssrBoot-Ddid0i9S.js";import"./border-DUGfqaHN.js";import"./VImg-IVf3xxVd.js";import"./VSelect-DlfHU1SC.js";import"./VMenu-BkqMtGEU.js";import"./filter-BS4_e9hb.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSClickable-DnsFhA6_.js";const v=Symbol.for("vuetify:v-expansion-panel"),Ve=["default","accordion","inset","popout"],Ie=b({color:String,flat:Boolean,focusable:Boolean,static:Boolean,tile:Boolean,variant:{type:String,default:"default",validator:e=>Ve.includes(e)},readonly:Boolean,...y(),...ce(),...K(),...fe()},"VExpansionPanels"),ke=g()({name:"VExpansionPanels",props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,o){let{slots:t}=o;pe(e,v);const{themeClasses:n}=xe(e),s=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return W({VExpansionPanel:{color:f(e,"color"),readonly:f(e,"readonly")},VExpansionPanelTitle:{focusable:f(e,"focusable"),static:f(e,"static")}}),T(()=>a(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},n.value,s.value,e.class],style:e.style},t)),{}}}),Ae=b({...y(),...O()},"VExpansionPanelText"),Ee=g()({name:"VExpansionPanelText",props:Ae(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:s,onAfterLeave:c}=Se(e,n.isSelected);return T(()=>a(ve,{onAfterLeave:c},{default:()=>{var l;return[R(a("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&s.value&&a("div",{class:"v-expansion-panel-text__wrapper"},[(l=t.default)==null?void 0:l.call(t)])]),[[ee,n.isSelected.value]])]}})),{}}}),X=b({color:String,expandIcon:{type:_,default:"$expand"},collapseIcon:{type:_,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...y()},"VExpansionPanelTitle"),$e=g()({name:"VExpansionPanelTitle",directives:{Ripple:ye},props:X(),setup(e,o){let{slots:t}=o;const n=N(v);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:s,backgroundColorStyles:c}=j(e,"color"),l=u(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return T(()=>{var r;return R(a("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},s.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[a("span",{class:"v-expansion-panel-title__overlay"},null),(r=t.default)==null?void 0:r.call(t,l.value),!e.hideActions&&a("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(l.value):a(Fe,{icon:n.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[ne("ripple"),e.ripple]])}),{}}}),_e=b({title:String,text:String,bgColor:String,...y(),...ge(),...ue(),...O(),...be(),...K(),...X()},"VExpansionPanel"),qe=g()({name:"VExpansionPanel",props:_e(),emits:{"group:selected":e=>!0},setup(e,o){let{slots:t}=o;const n=me(e,v),{backgroundColorClasses:s,backgroundColorStyles:c}=j(e,"bgColor"),{elevationClasses:l}=Te(e),{roundedClasses:r}=Pe(e),Q=u(()=>(n==null?void 0:n.disabled.value)||e.disabled),V=u(()=>n.group.items.value.reduce((d,i,S)=>(n.group.selected.value.includes(i.id)&&d.push(S),d),[])),U=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-d===1)}),Z=u(()=>{const d=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&V.value.some(i=>i-d===-1)});return te(v,n),W({VExpansionPanelText:{eager:f(e,"eager")},VExpansionPanelTitle:{readonly:f(e,"readonly")}}),T(()=>{const d=!!(t.text||e.text),i=!!(t.title||e.title);return a(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":U.value,"v-expansion-panel--after-active":Z.value,"v-expansion-panel--disabled":Q.value},r.value,s.value,e.class],style:[c.value,e.style]},{default:()=>{var S;return[a("div",{class:["v-expansion-panel__shadow",...l.value]},null),i&&a($e,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),d&&a(Ee,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(S=t.default)==null?void 0:S.call(t)]}})}),{}}}),Y=G({name:"FSAccordionPanel",components:{FSRichTextField:re,FSIcon:C,FSSpan:D,FSText:L,FSRow:z},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"}},setup(e){const{getColors:o}=de(),t=o(E.Background),n=o(E.Light);return{style:u(()=>({"--fs-accordion-panel-padding-title":$(e.paddingTitle),"--fs-accordion-panel-padding-content":$(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":t.base}))}}});function Be(e,o,t,n,s,c){const l=I("FSText"),r=I("FSRichTextField");return m(),x(qe,ae({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style},e.$attrs),{title:p(()=>[k(e.$slots,"title",{},()=>[a(z,null,{default:p(()=>[e.$props.prependIcon?(m(),x(C,{key:0},{default:p(()=>[P(h(e.$props.prependIcon),1)]),_:1})):A("",!0),a(D,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:p(()=>[P(h(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),text:p(()=>[k(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(m(),x(l,{key:0,lineClamp:e.$props.lineClampContent},{default:p(()=>[P(h(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(m(),x(r,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):A("",!0)])]),_:3},16,["collapseIcon","expandIcon","style"])}const we=H(Y,[["render",Be]]);Y.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const J=G({name:"FSAccordion",setup(){const{getChildren:e}=he();return{getChildren:e}}});function Ne(e,o,t,n,s,c){return m(),x(ke,{variant:"accordion"},{default:p(()=>[(m(!0),oe(se,null,le(e.getChildren(),(l,r)=>(m(),x(ie(l),{key:r}))),128))]),_:1})}const M=H(J,[["render",Ne]]);J.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const nt={title:"Foundation/Shared/Accordion",component:M,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},F={render:()=>({components:{FSAccordion:M,FSAccordionPanel:we,FSText:L,FSIcon:C,FSButton:Ce},template:`
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
    </div>`})};var q,B,w;F.parameters={...F.parameters,docs:{...(q=F.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(w=(B=F.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};const tt=["Variations"];export{F as Variations,tt as __namedExportsOrder,nt as default};