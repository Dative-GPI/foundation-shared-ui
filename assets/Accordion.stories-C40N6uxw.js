import{i as $,z as t,Y as k,a1 as ve,c as p,Z as xe,p as Se,l as o,d as ge,B as g,E as v,m as qe,I as M,J as x,H as L,O as Q,A as z,K as O,C as Re,F as Ge,S as Ne,k as De}from"./vue.esm-bundler-CqZ6aK3I.js";import{F as Le}from"./FSRichTextField-pqlYRTYd.js";import{F as b}from"./FSIcon-I_C15xQX.js";import{_ as Pe}from"./FSSpan-B7HDTlg9.js";import{F as K}from"./FSText-C92q1_nI.js";import{_ as H}from"./FSRow-udQVJR1p.js";import{u as ze,C as U}from"./useColors-BIkRBR7C.js";import{s as W}from"./css-BZjDzSZ1.js";import{_ as Fe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Oe}from"./FSCol-DIPgj7wU.js";import{d as He}from"./index-BNfVP6r5.js";import{m as Y,g as E,u as _,c as ye,p as je}from"./color-6mal3hP4.js";import{m as Je,a as Ke}from"./scopeId-BQSHBqq_.js";import{p as w,x as Ye,s as Ze,J as Me}from"./theme-CCooKRqg.js";import{I as X,V as Qe,m as be}from"./VIcon-beNtbbqt.js";import{R as Ue}from"./index-BSoBU6Pm.js";import{V as Ve}from"./VDefaultsProvider-oq6rnkoo.js";import{u as We,m as Xe}from"./elevation-DCJceMeT.js";import{b as en,a as nn,u as an,m as tn}from"./group-1sntWZNj.js";import{u as on,m as ln}from"./rounded-T_eKj2ZY.js";import{u as sn}from"./useSlots-BgbXyH5p.js";import{F as rn}from"./FSButton-dobeAM7X.js";import{b as cn}from"./properties-Qw-O9fbT.js";import{a as dn,R as un,V as pn,m as mn,b as fn,c as vn,u as xn,d as Sn,e as gn,f as Pn,g as Fn}from"./index-9HBuTkI7.js";import{c as B,l as Z,b as q,u as R,j as yn,h as bn,k as Vn,J as In}from"./theme-DDYe6qij.js";import{m as Tn,u as hn,V as Ie}from"./lazy-B941nOD5.js";import{a as Te}from"./color-9RcjjqqD.js";import{I as ee,m as he}from"./icons-C3HzcIFd.js";import"./FSAutocompleteField-RKAWvs8y.js";import"./FSSearchField-Cs8evTDQ.js";import"./FSTextField-4RgpTJ2W.js";import"./FSBaseField-eUR0iGRU.js";import"./useRules-Cutg_0Yh.js";import"./useBreakpoints-DMrtgY61.js";import"./VField-CIUPtZ0k.js";import"./transition-C13qRIR1.js";import"./VLabel-BhsUugfE.js";import"./VInput-XpqL7_rK.js";import"./locale-BJmdjC_5.js";import"./density-B3EUR5Bv.js";import"./dimensions-CuS7VcMO.js";import"./proxiedModel-BirLikdP.js";import"./loader-zbNw4pum.js";import"./VProgressCircular-DDVR-EZI.js";import"./resizeObserver-C7qOORSR.js";import"./anchor-DiyvyHyx.js";import"./forwardRefs-DWGaNmQL.js";import"./index-0XvVa1kA.js";import"./useTranslations-D4m4SVfo.js";import"./VList-DEf1a9yq.js";import"./FSCard-BH9I8ruU.js";import"./VDialog-CJ2sxo0Y.js";import"./VOverlay-CHXjpHsK.js";import"./display-Cs3Y1ygD.js";import"./router-C0dK7NvB.js";import"./ssrBoot-B76fNmmB.js";import"./border-CsMm3Uu5.js";import"./VImg-BLvS348m.js";import"./FSSlideGroup-CD-roNbR.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-CWa-blL8.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./FSToggleSet-CLEmUotz.js";import"./FSWrapGroup-doTNURkF.js";import"./FSCheckbox-BY3-VJRx.js";import"./VSelectionControl-asaj2cFo.js";import"./FSFadeOut-B817LR1t.js";import"./FSLoader-Vyt-Eyzm.js";import"./FSRadio-B7ZlHycV.js";import"./VSelect-CiPDTZ1A.js";import"./VMenu-C6lRy5En.js";import"./filter-DhzaDDBp.js";import"./FSMenu-Rp1ILhng.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSRouterLink-CyH3F3Zz.js";import"./vue-router-RJKW7Wfw.js";import"./FSClickable-Lz1AMzcf.js";import"./proxiedModel-J4qoWggV.js";const V=Symbol.for("vuetify:v-expansion-panel"),Ce=B({...Z(),...Tn()},"VExpansionPanelText"),ne=q()({name:"VExpansionPanelText",props:Ce(),setup(e,s){let{slots:a}=s;const n=$(V);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=hn(e,n.isSelected);return R(()=>t(dn,{onAfterLeave:c},{default:()=>{var l;return[k(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&r.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[ve,n.isSelected.value]])]}})),{}}}),Ae=B({color:String,expandIcon:{type:ee,default:"$expand"},collapseIcon:{type:ee,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...Z()},"VExpansionPanelTitle"),ae=q()({name:"VExpansionPanelTitle",directives:{Ripple:un},props:Ae(),setup(e,s){let{slots:a}=s;const n=$(V);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=Te(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=p(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return R(()=>{var f;return k(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(f=a.default)==null?void 0:f.call(a,l.value),!e.hideActions&&t(Ie,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var m;return[t("span",{class:"v-expansion-panel-title__icon"},[((m=a.actions)==null?void 0:m.call(a,l.value))??t(pn,null,null)])]}})]),[[xe("ripple"),e.ripple]])}),{}}}),$e=B({title:String,text:String,bgColor:String,...vn(),...fn(),...mn(),...he(),...Ae(),...Ce()},"VExpansionPanel");q()({name:"VExpansionPanel",props:$e(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:a}=s;const n=xn(e,V),{backgroundColorClasses:r,backgroundColorStyles:c}=Te(e,"bgColor"),{elevationClasses:l}=Sn(e),{roundedClasses:d}=gn(e),f=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),m=p(()=>n.group.items.value.reduce((u,i,S)=>(n.group.selected.value.includes(i.id)&&u.push(S),u),[])),F=p(()=>{const u=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&m.value.some(i=>i-u===1)}),N=p(()=>{const u=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&m.value.some(i=>i-u===-1)});return Se(V,n),R(()=>{const u=!!(a.text||e.text),i=!!(a.title||e.title),S=ae.filterProps(e),D=ne.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":F.value,"v-expansion-panel--after-active":N.value,"v-expansion-panel--disabled":f.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),t(Ie,{defaults:{VExpansionPanelTitle:{...S},VExpansionPanelText:{...D}}},{default:()=>{var y;return[i&&t(ae,{key:"title"},{default:()=>[a.title?a.title():e.title]}),u&&t(ne,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(y=a.default)==null?void 0:y.call(a)]}})]})}),{groupItem:n}}});const Cn=["default","accordion","inset","popout"],An=B({flat:Boolean,...Fn(),...In($e(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Vn(),...Z(),...he(),variant:{type:String,default:"default",validator:e=>Cn.includes(e)}},"VExpansionPanels"),$n=q()({name:"VExpansionPanels",props:An(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const{next:n,prev:r}=Pn(e,V),{themeClasses:c}=yn(e),l=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return bn({VExpansionPanel:{bgColor:o(e,"bgColor"),collapseIcon:o(e,"collapseIcon"),color:o(e,"color"),eager:o(e,"eager"),elevation:o(e,"elevation"),expandIcon:o(e,"expandIcon"),focusable:o(e,"focusable"),hideActions:o(e,"hideActions"),readonly:o(e,"readonly"),ripple:o(e,"ripple"),rounded:o(e,"rounded"),static:o(e,"static")}}),R(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,l.value,e.class],style:e.style},{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a,{prev:r,next:n})]}})),{next:n,prev:r}}}),ke=ge({name:"FSAccordionPanel",components:{FSRichTextField:Le,FSIcon:b,FSSpan:Pe,FSText:K,FSRow:H},props:{prependIcon:{type:String,required:!1,default:null},title:{type:String,required:!1,default:null},content:{type:String,required:!1,default:null},paddingTitle:{type:[String,Number],required:!1,default:"16px"},paddingContent:{type:[String,Number],required:!1,default:"16px"},lineClampTitle:{type:Number,required:!1,default:2},lineClampContent:{type:Number,required:!1,default:5},divider:{type:Boolean,required:!1,default:!0},expandIcon:{type:String,required:!1,default:""},collapseIcon:{type:String,required:!1,default:""},variant:{type:String,required:!1,default:"standard"},actionPosition:{type:String,default:"end"}},setup(e){const{getColors:s}=ze(),a=s(U.Background),n=s(U.Light);return{style:p(()=>({"--fs-accordion-panel-padding-title":W(e.paddingTitle),"--fs-accordion-panel-padding-content":W(e.paddingContent),"--fs-accordion-panel-divider-size":e.divider?"1px":"0","--fs-accordion-panel-divider-color":n.dark,"--fs-accordion-panel-background-color":a.base}))}}}),I=Symbol.for("vuetify:v-expansion-panel"),Ee=w({...Y(),...Je()},"VExpansionPanelText"),j=E()({name:"VExpansionPanelText",props:Ee(),setup(e,s){let{slots:a}=s;const n=$(I);if(!n)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:r,onAfterLeave:c}=Ke(e,n.isSelected);return _(()=>t(He,{onAfterLeave:c},{default:()=>{var l;return[k(t("div",{class:["v-expansion-panel-text",e.class],style:e.style},[a.default&&r.value&&t("div",{class:"v-expansion-panel-text__wrapper"},[(l=a.default)==null?void 0:l.call(a)])]),[[ve,n.isSelected.value]])]}})),{}}}),_e=w({color:String,expandIcon:{type:X,default:"$expand"},collapseIcon:{type:X,default:"$collapse"},hideActions:Boolean,focusable:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...Y()},"VExpansionPanelTitle"),J=E()({name:"VExpansionPanelTitle",directives:{Ripple:Ue},props:_e(),setup(e,s){let{slots:a}=s;const n=$(I);if(!n)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:r,backgroundColorStyles:c}=ye(e,"color"),l=p(()=>({collapseIcon:e.collapseIcon,disabled:n.disabled.value,expanded:n.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly})),d=p(()=>n.isSelected.value?e.collapseIcon:e.expandIcon);return _(()=>{var f;return k(t("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":n.isSelected.value,"v-expansion-panel-title--focusable":e.focusable,"v-expansion-panel-title--static":e.static},r.value,e.class],style:[c.value,e.style],type:"button",tabindex:n.disabled.value?-1:void 0,disabled:n.disabled.value,"aria-expanded":n.isSelected.value,onClick:e.readonly?void 0:n.toggle},[t("span",{class:"v-expansion-panel-title__overlay"},null),(f=a.default)==null?void 0:f.call(a,l.value),!e.hideActions&&t(Ve,{defaults:{VIcon:{icon:d.value}}},{default:()=>{var m;return[t("span",{class:"v-expansion-panel-title__icon"},[((m=a.actions)==null?void 0:m.call(a,l.value))??t(Qe,null,null)])]}})]),[[xe("ripple"),e.ripple]])}),{}}}),we=w({title:String,text:String,bgColor:String,...Xe(),...nn(),...ln(),...be(),..._e(),...Ee()},"VExpansionPanel"),kn=E()({name:"VExpansionPanel",props:we(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:a}=s;const n=en(e,I),{backgroundColorClasses:r,backgroundColorStyles:c}=ye(e,"bgColor"),{elevationClasses:l}=We(e),{roundedClasses:d}=on(e),f=p(()=>(n==null?void 0:n.disabled.value)||e.disabled),m=p(()=>n.group.items.value.reduce((u,i,S)=>(n.group.selected.value.includes(i.id)&&u.push(S),u),[])),F=p(()=>{const u=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&m.value.some(i=>i-u===1)}),N=p(()=>{const u=n.group.items.value.findIndex(i=>i.id===n.id);return!n.isSelected.value&&m.value.some(i=>i-u===-1)});return Se(I,n),_(()=>{const u=!!(a.text||e.text),i=!!(a.title||e.title),S=J.filterProps(e),D=j.filterProps(e);return t(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":n.isSelected.value,"v-expansion-panel--before-active":F.value,"v-expansion-panel--after-active":N.value,"v-expansion-panel--disabled":f.value},d.value,r.value,e.class],style:[c.value,e.style]},{default:()=>[t("div",{class:["v-expansion-panel__shadow",...l.value]},null),t(Ve,{defaults:{VExpansionPanelTitle:{...S},VExpansionPanelText:{...D}}},{default:()=>{var y;return[i&&t(J,{key:"title"},{default:()=>[a.title?a.title():e.title]}),u&&t(j,{key:"text"},{default:()=>[a.text?a.text():e.text]}),(y=a.default)==null?void 0:y.call(a)]}})]})}),{groupItem:n}}}),En=["default","accordion","inset","popout"],_n=w({flat:Boolean,...tn(),...Me(we(),["bgColor","collapseIcon","color","eager","elevation","expandIcon","focusable","hideActions","readonly","ripple","rounded","tile","static"]),...Ze(),...Y(),...be(),variant:{type:String,default:"default",validator:e=>En.includes(e)}},"VExpansionPanels"),wn=E()({name:"VExpansionPanels",props:_n(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:a}=s;const{next:n,prev:r}=an(e,I),{themeClasses:c}=Ye(e),l=p(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return je({VExpansionPanel:{bgColor:o(e,"bgColor"),collapseIcon:o(e,"collapseIcon"),color:o(e,"color"),eager:o(e,"eager"),elevation:o(e,"elevation"),expandIcon:o(e,"expandIcon"),focusable:o(e,"focusable"),hideActions:o(e,"hideActions"),readonly:o(e,"readonly"),ripple:o(e,"ripple"),rounded:o(e,"rounded"),static:o(e,"static")}}),_(()=>t(e.tag,{class:["v-expansion-panels",{"v-expansion-panels--flat":e.flat,"v-expansion-panels--tile":e.tile},c.value,l.value,e.class],style:e.style},{default:()=>{var d;return[(d=a.default)==null?void 0:d.call(a,{prev:r,next:n})]}})),{next:n,prev:r}}});function Bn(e,s,a,n,r,c){const l=M("FSText"),d=M("FSRichTextField");return x(),g(kn,qe({class:"fs-accordion-panel",collapseIcon:e.$props.collapseIcon,expandIcon:e.$props.expandIcon,disabled:!1,elevation:0,style:e.style,hideActions:e.$props.actionPosition==="start"},e.$attrs),{default:v(()=>[t(J,null,{default:v(({expanded:f,collapseIcon:m,expandIcon:F})=>[t(H,{gap:"4px"},{default:v(()=>[e.$props.actionPosition==="start"?(x(),g(Oe,{key:0,width:"hug",align:"center-center"},{default:v(()=>[t(b,{size:"22.5px",icon:f?m:F},null,8,["icon"])]),_:2},1024)):L("",!0),Q(e.$slots,"title",{},()=>[t(H,null,{default:v(()=>[e.$props.prependIcon?(x(),g(b,{key:0},{default:v(()=>[z(O(e.$props.prependIcon),1)]),_:1})):L("",!0),t(Pe,{class:"fs-accordion-panel-title",lineClamp:e.$props.lineClampTitle},{default:v(()=>[z(O(e.$props.title),1)]),_:1},8,["lineClamp"])]),_:1})])]),_:2},1024)]),_:3}),t(j,null,{default:v(()=>[Q(e.$slots,"content",{},()=>[e.$props.variant==="standard"?(x(),g(l,{key:0,lineClamp:e.$props.lineClampContent},{default:v(()=>[z(O(e.$props.content),1)]),_:1},8,["lineClamp"])):e.$props.variant==="rich-text"?(x(),g(d,{key:1,variant:"readonly",modelValue:e.$props.content},null,8,["modelValue"])):L("",!0)])]),_:3})]),_:3},16,["collapseIcon","expandIcon","style","hideActions"])}const G=Fe(ke,[["render",Bn]]);ke.__docgenInfo={displayName:"FSAccordionPanel",exportName:"default",description:"",tags:{},props:[{name:"prependIcon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"title",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"content",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"paddingTitle",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"paddingContent",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"16px"'}},{name:"lineClampTitle",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"2"}},{name:"lineClampContent",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5"}},{name:"divider",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"expandIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"collapseIcon",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}},{name:"variant",values:["standard","rich-text"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"standard"'}},{name:"actionPosition",type:{name:'String as () => "start" | "end"'},defaultValue:{func:!1,value:'"end"'}}],slots:[{name:"title"},{name:"content"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordionPanel.vue"]};const Be=ge({name:"FSAccordion",setup(){const{getChildren:e}=sn();return{getChildren:e}}});function qn(e,s,a,n,r,c){return x(),g(wn,{variant:"accordion"},{default:v(()=>[(x(!0),Re(Ge,null,Ne(e.getChildren(),(l,d)=>(x(),g(De(l),{key:d}))),128))]),_:1})}const P=Fe(Be,[["render",qn]]);Be.__docgenInfo={displayName:"FSAccordion",exportName:"default",description:"",tags:{},sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSAccordion.vue"]};const st={title:"Foundation/Shared/Accordion",component:P,tags:["autodocs"],argTypes:{...cn([$n],P)}},T={render:e=>({components:{FSAccordion:P,FSAccordionPanel:G,FSText:K,FSIcon:b},setup(){return{args:e}},template:`
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
    `})},h={render:e=>({components:{FSAccordion:P,FSAccordionPanel:G,FSText:K,FSIcon:b,FSButton:rn},setup(){return{args:e}},template:`
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
    `})},C={render:e=>({components:{FSAccordion:P,FSAccordionPanel:G},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="First panel"
          content="Hello there"
        />
      </FSAccordion>
    `})},A={render:e=>({components:{FSAccordion:P,FSAccordionPanel:G},setup(){return{args:e}},template:`
      <FSAccordion
        v-model="args.modelValue"
        v-bind="args"
      >
        <FSAccordionPanel
          title="Second panel"
          content="General Kenobi"
        />
      </FSAccordion>
    `})};var te,oe,le;T.parameters={...T.parameters,docs:{...(te=T.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ie,se,re;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(re=(se=h.parameters)==null?void 0:se.docs)==null?void 0:re.source}}};var ce,de,ue;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(ue=(de=C.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,me,fe;A.parameters={...A.parameters,docs:{...(pe=A.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(fe=(me=A.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};const rt=["SlotPanelOne","SlotPanelTwo","PropPanelOne","PropPanelTwo"];export{C as PropPanelOne,A as PropPanelTwo,T as SlotPanelOne,h as SlotPanelTwo,rt as __namedExportsOrder,st as default};
