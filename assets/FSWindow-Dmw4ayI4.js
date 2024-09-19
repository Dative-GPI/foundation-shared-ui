import{d as O,c as v,b as W,s as B,w as q,p as N,v as m,Z as Y,_ as J,i as K,a0 as U,n as Z,A as b,B as C,M as Q,N as $,C as _,m as p,J as ee,K as te,L as ne,D as oe,k as se,F as ae}from"./vue.esm-bundler-BwDfg4wG.js";import{u as ie}from"./useSlots-2JqallzA.js";import{s as x}from"./css-DTUiF03J.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as H,g as P,u as R}from"./color-BnvS3YzF.js";import{u as le,m as re,a as ce}from"./group-Co3yQlsH.js";import{a as de,u as fe}from"./locale-DTc71_bq.js";import{a as ve}from"./tag-Ceq3l71M.js";import{L as F,p as L,n as he,s as me,c as V}from"./theme-DkbGhe4v.js";import{V as X}from"./VBtn-CAkWF00h.js";import{m as ge,u as ye}from"./lazy-MJJzC26k.js";import{u as we}from"./ssrBoot-D00LCOWZ.js";import{M as be}from"./transition-DbaVUv7M.js";const A=O({name:"FSWindow",props:{width:{type:[Array,String,Number],required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:null}},setup(e){const{slots:n,getChildren:t}=ie();delete n.default;const o=v(()=>({"--fs-window-width":x(e.width),"--fs-window-height":x(e.height)}));return{slots:n,style:o,getChildren:t,value:(u,s)=>{var i;return((i=u==null?void 0:u.props)==null?void 0:i.value)??s}}}}),Se=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:a}=e,u=.5,s=16;e.offsetX=t-n,e.offsetY=a-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<o-s&&e.up(e),e.down&&a>o+s&&e.down(e))};function Ce(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function _e(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Se(n)}function Be(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Te(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ce(t,n),touchend:t=>_e(t,n),touchmove:t=>Be(t,n)}}function ke(e,n){var i;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},u=(i=n.instance)==null?void 0:i.$.uid;if(!o||!u)return;const s=Te(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=s,F(s).forEach(r=>{o.addEventListener(r,s[r],a)})}function Ie(e,n){var u,s;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const a=t._touchHandlers[o];F(a).forEach(i=>{t.removeEventListener(i,a[i])}),delete t._touchHandlers[o]}const M={mounted:ke,unmounted:Ie},j=Symbol.for("vuetify:v-window"),z=Symbol.for("vuetify:v-window-group"),Ee=L({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...H(),...ve(),...he()},"VWindow"),We=P()({name:"VWindow",directives:{Touch:M},props:Ee(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=me(e),{isRtl:a}=de(),{t:u}=fe(),s=le(e,z),i=W(),r=v(()=>a.value?!e.reverse:e.reverse),f=B(!1),y=v(()=>{const l=e.direction==="vertical"?"y":"x",h=(r.value?!f.value:f.value)?"-reverse":"";return`v-window-${l}${h}-transition`}),S=B(0),w=W(void 0),g=v(()=>s.items.value.findIndex(l=>s.selected.value.includes(l.id)));q(g,(l,d)=>{const h=s.items.value.length,E=h-1;h<=2?f.value=l<d:l===E&&d===0?f.value=!0:l===0&&d===E?f.value=!1:f.value=l<d}),N(j,{transition:y,isReversed:f,transitionCount:S,transitionHeight:w,rootRef:i});const c=v(()=>e.continuous||g.value!==0),T=v(()=>e.continuous||g.value!==s.items.value.length-1);function k(){c.value&&s.prev()}function I(){T.value&&s.next()}const D=v(()=>{const l=[],d={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${r.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};l.push(c.value?t.prev?t.prev({props:d}):m(X,d,null):m("div",null,null));const h={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${r.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return l.push(T.value?t.next?t.next({props:h}):m(X,h,null):m("div",null,null)),l}),G=v(()=>e.touch===!1?e.touch:{...{left:()=>{r.value?k():I()},right:()=>{r.value?I():k()},start:d=>{let{originalEvent:h}=d;h.stopPropagation()}},...e.touch===!0?{}:e.touch});return R(()=>Y(m(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var l,d;return[m("div",{class:"v-window__container",style:{height:w.value}},[(l=t.default)==null?void 0:l.call(t,{group:s}),e.showArrows!==!1&&m("div",{class:"v-window__controls"},[D.value])]),(d=t.additional)==null?void 0:d.call(t,{group:s})]}}),[[J("touch"),G.value]])),{group:s}}}),$e=L({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...H(),...re(),...ge()},"VWindowItem"),xe=P()({name:"VWindowItem",directives:{Touch:M},props:$e(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=K(j),a=ce(e,z),{isBooted:u}=we();if(!o||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=B(!1),i=v(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function r(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function f(){var c;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=V((c=o.rootRef.value)==null?void 0:c.clientHeight)),o.transitionCount.value+=1)}function y(){r()}function S(c){s.value&&Z(()=>{!i.value||!s.value||!o||(o.transitionHeight.value=V(c.clientHeight))})}const w=v(()=>{const c=o.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof c!="string"?o.transition.value:c,onBeforeEnter:f,onAfterEnter:r,onEnterCancelled:y,onBeforeLeave:f,onAfterLeave:r,onLeaveCancelled:y,onEnter:S}:!1}),{hasContent:g}=ye(e,a.isSelected);return R(()=>m(be,{transition:w.value,disabled:!u.value},{default:()=>{var c;return[Y(m("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[g.value&&((c=t.default)==null?void 0:c.call(t))]),[[U,a.isSelected.value]])]}})),{groupItem:a}}});function Ve(e,n,t,o,a,u){return b(),C(We,p({class:"fs-window",style:e.style,touch:!1},e.$attrs),Q({default:_(()=>[(b(!0),oe(ae,null,$(e.getChildren(),(s,i)=>(b(),C(xe,{class:"fs-window-item",value:e.value(s,i),key:i},{default:_(()=>[(b(),C(se(s)))]),_:2},1032,["value"]))),128))]),_:2},[$(e.slots,(s,i)=>({name:i,fn:_(r=>[ee(e.$slots,i,te(ne(r)))])}))]),1040,["style"])}const Oe=ue(A,[["render",Ve]]);A.__docgenInfo={displayName:"FSWindow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWindow.vue"]};export{Oe as F};