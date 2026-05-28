import{a as q,b as G}from"./properties-Qw-O9fbT.js";import{a4 as n,p as t,a0 as U,V as X,aa as J,g as I,r as V,j as z,ac as u,G as b,u as P,P as p,X as v}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as C,u as y,m as T,p as K}from"./useRender-BLRtLddt.js";import{u as M,m as Q}from"./density-SLEyWIf6.js";import{b as W}from"./locale-yWiW8Thx.js";import{m as B}from"./tag-mR0sHpgP.js";import{a9 as g,k as f,aa as Y,$ as Z,a4 as ee}from"./theme-Dfllckn6.js";import{u as k}from"./color-RD9Ud5Y3.js";import{u as ie,m as R}from"./elevation-DVEOfLMu.js";import{a as N}from"./icons-CT9uuJgl.js";import{u as te,m as O}from"./rounded-B6-M_5uG.js";import{u as ne,m as j}from"./size-BQpWkrb5.js";import{V as oe}from"./VIcon-e3y7Ok8e.js";import{V as le}from"./VDefaultsProvider-BWK1RKVO.js";import{u as se,m as ae}from"./dimensions-DYTrXD1P.js";import"./proxiedModel-DoNoMWaC.js";const re=g({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...T(),...O(),...j(),...R()},"VTimelineDivider"),de=C()({name:"VTimelineDivider",props:re(),setup(e,d){let{slots:i}=d;const{sizeClasses:m,sizeStyles:s}=ne(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:l}=k(n(e,"dotColor")),{roundedClasses:o}=te(e,"v-timeline-divider__dot"),{elevationClasses:r}=ie(e),{backgroundColorClasses:h,backgroundColorStyles:_}=k(n(e,"lineColor"));return y(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",h.value],style:_.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",r.value,o.value,m.value],style:s.value},[t("div",{class:["v-timeline-divider__inner-dot",l.value,o.value],style:a.value},[i.default?t(le,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(oe,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",h.value],style:_.value},null)])),{}}}),E=g({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...T(),...ae(),...R(),...O(),...j(),...B()},"VTimelineItem"),me=C()({name:"VTimelineItem",props:E(),setup(e,d){let{slots:i}=d;const{dimensionStyles:m}=se(e),s=U(0),a=X();return J(a,l=>{var o;l&&(s.value=((o=l.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),y(()=>{var l,o;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":f(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${f(e.lineInset)})`:f(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:m.value},[(l=i.default)==null?void 0:l.call(i)]),t(de,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=i.opposite)==null?void 0:o.call(i))])])}),{}}}),ce=g({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ee(E({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...T(),...Q(),...B(),...Z()},"VTimeline"),H=C()({name:"VTimeline",props:ce(),setup(e,d){let{slots:i}=d;const{themeClasses:m}=Y(e),{densityClasses:s}=M(e),{rtlClasses:a}=W();K({VTimelineDivider:{lineColor:n(e,"lineColor")},VTimelineItem:{density:n(e,"density"),dotColor:n(e,"dotColor"),fillDot:n(e,"fillDot"),hideOpposite:n(e,"hideOpposite"),iconColor:n(e,"iconColor"),lineColor:n(e,"lineColor"),lineInset:n(e,"lineInset"),size:n(e,"size")}});const l=I(()=>{const r=e.side?e.side:e.density!=="default"?"end":null;return r&&`v-timeline--side-${r}`}),o=I(()=>{const r=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return r;case"start":return r[0];case"end":return r[1];default:return null}});return y(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},m.value,s.value,l.value,a.value,e.class],style:[{"--v-timeline-line-thickness":f(e.lineThickness)},e.style]},i)),{}}}),A=V({name:"FSTimeline",inheritAttrs:!1});function ue(e,d,i,m,s,a){return p(),z(H,b(P(e.$attrs)),{default:u(()=>[v(e.$slots,"default")]),_:3},16)}const S=w(A,[["render",ue]]);A.__docgenInfo={displayName:"FSTimeline",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/timelines/FSTimeline.vue"]};const x=V({name:"FSTimelineItem",inheritAttrs:!1});function ve(e,d,i,m,s,a){return p(),z(me,b(P(e.$attrs)),{opposite:u(()=>[v(e.$slots,"opposite")]),icon:u(()=>[v(e.$slots,"icon")]),default:u(()=>[v(e.$slots,"default")]),_:3},16)}const L=w(x,[["render",ve]]);x.__docgenInfo={displayName:"FSTimelineItem",exportName:"default",description:"",tags:{},slots:[{name:"opposite"},{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/timelines/FSTimelineItem.vue"]};const pe={title:"Foundation/Shared/Timeline",component:S,subcomponents:{FSTimelineItem:L},tags:["autodocs"],argTypes:{...G([H],S),...q(S)}},c={render:e=>({components:{FSTimeline:S,FSTimelineItem:L},setup(){return{args:e}},template:`
      <FSTimeline 
        v-bind="args"
      >
          <FSTimelineItem>
            Hello world
          </FSTimelineItem>

          <FSTimelineItem>
            Hello world 2
          </FSTimelineItem>
      </FSTimeline>`}),args:{}};var D,F,$;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSTimeline,
      FSTimelineItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSTimeline 
        v-bind="args"
      >
          <FSTimelineItem>
            Hello world
          </FSTimelineItem>

          <FSTimelineItem>
            Hello world 2
          </FSTimelineItem>
      </FSTimeline>\`
  }),
  args: {}
}`,...($=(F=c.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};const we=["Default"];export{c as Default,we as __namedExportsOrder,pe as default};
