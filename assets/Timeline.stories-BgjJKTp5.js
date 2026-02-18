import{a as L,b as J}from"./properties-Qw-O9fbT.js";import{y as n,q as t,s as Q,e as U,w as X,c as I,d as V,B as z,D as u,Q as b,R as P,J as p,P as v}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{g as S,u as y,m as T,p as G}from"./useRender-Dce1Ng4u.js";import{u as K,m as M}from"./density-BTT1solu.js";import{u as W}from"./locale-n4v42L7l.js";import{m as B}from"./tag-CJsP8ksx.js";import{p as g,c as f,A as Y,C as Z,X as ee}from"./theme-BcqfMidt.js";import{b as D}from"./color-CUHqxR_J.js";import{u as ie,m as R}from"./elevation-62d6MvS5.js";import{I as N}from"./icons-DbptYgqQ.js";import{u as te,m as O}from"./rounded-BSNeeq4o.js";import{u as ne,m as A}from"./size-BBDCx9Cw.js";import{V as oe}from"./VIcon-C3cN4B51.js";import{V as le}from"./VDefaultsProvider-CPXI0q_G.js";import{u as se,m as ae}from"./dimensions-D_nx6Jbk.js";import"./proxiedModel-Cv3qT1cZ.js";const re=g({dotColor:String,fillDot:Boolean,hideDot:Boolean,icon:N,iconColor:String,lineColor:String,...T(),...O(),...A(),...R()},"VTimelineDivider"),de=S()({name:"VTimelineDivider",props:re(),setup(e,d){let{slots:i}=d;const{sizeClasses:m,sizeStyles:s}=ne(e,"v-timeline-divider__dot"),{backgroundColorStyles:a,backgroundColorClasses:l}=D(n(e,"dotColor")),{roundedClasses:o}=te(e,"v-timeline-divider__dot"),{elevationClasses:r}=ie(e),{backgroundColorClasses:h,backgroundColorStyles:_}=D(n(e,"lineColor"));return y(()=>t("div",{class:["v-timeline-divider",{"v-timeline-divider--fill-dot":e.fillDot},e.class],style:e.style},[t("div",{class:["v-timeline-divider__before",h.value],style:_.value},null),!e.hideDot&&t("div",{key:"dot",class:["v-timeline-divider__dot",r.value,o.value,m.value],style:s.value},[t("div",{class:["v-timeline-divider__inner-dot",l.value,o.value],style:a.value},[i.default?t(le,{key:"icon-defaults",disabled:!e.icon,defaults:{VIcon:{color:e.iconColor,icon:e.icon,size:e.size}}},i.default):t(oe,{key:"icon",color:e.iconColor,icon:e.icon,size:e.size},null)])]),t("div",{class:["v-timeline-divider__after",h.value],style:_.value},null)])),{}}}),E=g({density:String,dotColor:String,fillDot:Boolean,hideDot:Boolean,hideOpposite:{type:Boolean,default:void 0},icon:N,iconColor:String,lineInset:[Number,String],...T(),...ae(),...R(),...O(),...A(),...B()},"VTimelineItem"),me=S()({name:"VTimelineItem",props:E(),setup(e,d){let{slots:i}=d;const{dimensionStyles:m}=se(e),s=Q(0),a=U();return X(a,l=>{var o;l&&(s.value=((o=l.$el.querySelector(".v-timeline-divider__dot"))==null?void 0:o.getBoundingClientRect().width)??0)},{flush:"post"}),y(()=>{var l,o;return t("div",{class:["v-timeline-item",{"v-timeline-item--fill-dot":e.fillDot},e.class],style:[{"--v-timeline-dot-size":f(s.value),"--v-timeline-line-inset":e.lineInset?`calc(var(--v-timeline-dot-size) / 2 + ${f(e.lineInset)})`:f(0)},e.style]},[t("div",{class:"v-timeline-item__body",style:m.value},[(l=i.default)==null?void 0:l.call(i)]),t(de,{ref:a,hideDot:e.hideDot,icon:e.icon,iconColor:e.iconColor,size:e.size,elevation:e.elevation,dotColor:e.dotColor,fillDot:e.fillDot,rounded:e.rounded},{default:i.icon}),e.density!=="compact"&&t("div",{class:"v-timeline-item__opposite"},[!e.hideOpposite&&((o=i.opposite)==null?void 0:o.call(i))])])}),{}}}),ce=g({align:{type:String,default:"center",validator:e=>["center","start"].includes(e)},direction:{type:String,default:"vertical",validator:e=>["vertical","horizontal"].includes(e)},justify:{type:String,default:"auto",validator:e=>["auto","center"].includes(e)},side:{type:String,validator:e=>e==null||["start","end"].includes(e)},lineThickness:{type:[String,Number],default:2},lineColor:String,truncateLine:{type:String,validator:e=>["start","end","both"].includes(e)},...ee(E({lineInset:0}),["dotColor","fillDot","hideOpposite","iconColor","lineInset","size"]),...T(),...M(),...B(),...Z()},"VTimeline"),H=S()({name:"VTimeline",props:ce(),setup(e,d){let{slots:i}=d;const{themeClasses:m}=Y(e),{densityClasses:s}=K(e),{rtlClasses:a}=W();G({VTimelineDivider:{lineColor:n(e,"lineColor")},VTimelineItem:{density:n(e,"density"),dotColor:n(e,"dotColor"),fillDot:n(e,"fillDot"),hideOpposite:n(e,"hideOpposite"),iconColor:n(e,"iconColor"),lineColor:n(e,"lineColor"),lineInset:n(e,"lineInset"),size:n(e,"size")}});const l=I(()=>{const r=e.side?e.side:e.density!=="default"?"end":null;return r&&`v-timeline--side-${r}`}),o=I(()=>{const r=["v-timeline--truncate-line-start","v-timeline--truncate-line-end"];switch(e.truncateLine){case"both":return r;case"start":return r[0];case"end":return r[1];default:return null}});return y(()=>t(e.tag,{class:["v-timeline",`v-timeline--${e.direction}`,`v-timeline--align-${e.align}`,`v-timeline--justify-${e.justify}`,o.value,{"v-timeline--inset-line":!!e.lineInset},m.value,s.value,l.value,a.value,e.class],style:[{"--v-timeline-line-thickness":f(e.lineThickness)},e.style]},i)),{}}}),j=V({name:"FSTimeline",inheritAttrs:!1});function ue(e,d,i,m,s,a){return p(),z(H,b(P(e.$attrs)),{default:u(()=>[v(e.$slots,"default")]),_:3},16)}const C=w(j,[["render",ue]]);j.__docgenInfo={displayName:"FSTimeline",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/timelines/FSTimeline.vue"]};const q=V({name:"FSTimelineItem",inheritAttrs:!1});function ve(e,d,i,m,s,a){return p(),z(me,b(P(e.$attrs)),{opposite:u(()=>[v(e.$slots,"opposite")]),icon:u(()=>[v(e.$slots,"icon")]),default:u(()=>[v(e.$slots,"default")]),_:3},16)}const x=w(q,[["render",ve]]);q.__docgenInfo={displayName:"FSTimelineItem",exportName:"default",description:"",tags:{},slots:[{name:"opposite"},{name:"icon"},{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/timelines/FSTimelineItem.vue"]};const pe={title:"Foundation/Shared/Timeline",component:C,subcomponents:{FSTimelineItem:x},tags:["autodocs"],argTypes:{...J([H],C),...L(C)}},c={render:e=>({components:{FSTimeline:C,FSTimelineItem:x},setup(){return{args:e}},template:`
      <FSTimeline 
        v-bind="args"
      >
          <FSTimelineItem>
            Hello world
          </FSTimelineItem>

          <FSTimelineItem>
            Hello world 2
          </FSTimelineItem>
      </FSTimeline>`}),args:{}};var k,F,$;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
