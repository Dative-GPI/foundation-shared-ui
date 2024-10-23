import{d as N,b as S,c as v,w as x,s as B,p as D,N as h,X as H,Y as U,i as K,a0 as J,n as Q,z as b,A as C,B as Z,O as k,C as T,m as p,K as ee,L as te,M as ne,E as oe,q as se,G as ae}from"./vue.esm-bundler-l-siv0w9.js";import{u as ie}from"./useSlots-C_N_WAus.js";import{s as W}from"./css-C_oz6kYw.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as P,g as R,a as F}from"./color-De-77ojK.js";import{u as le,a as re,b as ce}from"./group-Dk9dfj8w.js";import{a as de,u as fe}from"./locale-CTwwbPAi.js";import{a as ve}from"./VIcon-D6ql3n-m.js";import{H as L,p as A,s as me,x as he,c as X}from"./theme-C2MnUTNI.js";import{V as Y}from"./VBtn-9DyKx9D6.js";import{m as ge,u as ye}from"./lazy-DuBjUwFb.js";import{u as we}from"./ssrBoot-DD96sY1N.js";import{M as be}from"./transition-AZsQzdUZ.js";const M=N({name:"FSWindow",props:{width:{type:[Array,String,Number],required:!1,default:null},height:{type:[Array,String,Number],required:!1,default:null},modelValue:{type:[String,Number,Object],required:!1,default:0}},emits:["update:modelValue"],setup(e){const{slots:n,getChildren:t}=ie();delete n.default;const o=S(!0),a=S(null),u=v(()=>({"--fs-window-overflow":o.value?"visible":"hidden","--fs-window-height":W(e.height),"--fs-window-width":W(e.width)})),s=(i,l)=>{var c;return((c=i==null?void 0:i.props)==null?void 0:c.value)??l};return x(()=>e.modelValue,()=>{o.value=!1,a.value&&clearTimeout(a.value),a.value=setTimeout(()=>{o.value=!0},560)}),{slots:n,style:u,getChildren:t,value:s}}}),Se=e=>{const{touchstartX:n,touchendX:t,touchstartY:o,touchendY:a}=e,u=.5,s=16;e.offsetX=t-n,e.offsetY=a-o,Math.abs(e.offsetY)<u*Math.abs(e.offsetX)&&(e.left&&t<n-s&&e.left(e),e.right&&t>n+s&&e.right(e)),Math.abs(e.offsetX)<u*Math.abs(e.offsetY)&&(e.up&&a<o-s&&e.up(e),e.down&&a>o+s&&e.down(e))};function Ve(e,n){var o;const t=e.changedTouches[0];n.touchstartX=t.clientX,n.touchstartY=t.clientY,(o=n.start)==null||o.call(n,{originalEvent:e,...n})}function Ce(e,n){var o;const t=e.changedTouches[0];n.touchendX=t.clientX,n.touchendY=t.clientY,(o=n.end)==null||o.call(n,{originalEvent:e,...n}),Se(n)}function Te(e,n){var o;const t=e.changedTouches[0];n.touchmoveX=t.clientX,n.touchmoveY=t.clientY,(o=n.move)==null||o.call(n,{originalEvent:e,...n})}function Be(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:t=>Ve(t,n),touchend:t=>Ce(t,n),touchmove:t=>Te(t,n)}}function Ee(e,n){var i;const t=n.value,o=t!=null&&t.parent?e.parentElement:e,a=(t==null?void 0:t.options)??{passive:!0},u=(i=n.instance)==null?void 0:i.$.uid;if(!o||!u)return;const s=Be(n.value);o._touchHandlers=o._touchHandlers??Object.create(null),o._touchHandlers[u]=s,L(s).forEach(l=>{o.addEventListener(l,s[l],a)})}function Ie(e,n){var u,s;const t=(u=n.value)!=null&&u.parent?e.parentElement:e,o=(s=n.instance)==null?void 0:s.$.uid;if(!(t!=null&&t._touchHandlers)||!o)return;const a=t._touchHandlers[o];L(a).forEach(i=>{t.removeEventListener(i,a[i])}),delete t._touchHandlers[o]}const O={mounted:Ee,unmounted:Ie},q=Symbol.for("vuetify:v-window"),j=Symbol.for("vuetify:v-window-group"),_e=A({continuous:Boolean,nextIcon:{type:[Boolean,String,Function,Object],default:"$next"},prevIcon:{type:[Boolean,String,Function,Object],default:"$prev"},reverse:Boolean,showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||e==="hover"},touch:{type:[Object,Boolean],default:void 0},direction:{type:String,default:"horizontal"},modelValue:null,disabled:Boolean,selectedClass:{type:String,default:"v-window-item--active"},mandatory:{type:[Boolean,String],default:"force"},...P(),...ve(),...me()},"VWindow"),$e=R()({name:"VWindow",directives:{Touch:O},props:_e(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{themeClasses:o}=he(e),{isRtl:a}=de(),{t:u}=fe(),s=le(e,j),i=S(),l=v(()=>a.value?!e.reverse:e.reverse),c=B(!1),y=v(()=>{const r=e.direction==="vertical"?"y":"x",m=(l.value?!c.value:c.value)?"-reverse":"";return`v-window-${r}${m}-transition`}),V=B(0),w=S(void 0),g=v(()=>s.items.value.findIndex(r=>s.selected.value.includes(r.id)));x(g,(r,f)=>{const m=s.items.value.length,$=m-1;m<=2?c.value=r<f:r===$&&f===0?c.value=!0:r===0&&f===$?c.value=!1:c.value=r<f}),D(q,{transition:y,isReversed:c,transitionCount:V,transitionHeight:w,rootRef:i});const d=v(()=>e.continuous||g.value!==0),E=v(()=>e.continuous||g.value!==s.items.value.length-1);function I(){d.value&&s.prev()}function _(){E.value&&s.next()}const z=v(()=>{const r=[],f={icon:a.value?e.nextIcon:e.prevIcon,class:`v-window__${l.value?"right":"left"}`,onClick:s.prev,"aria-label":u("$vuetify.carousel.prev")};r.push(d.value?t.prev?t.prev({props:f}):h(Y,f,null):h("div",null,null));const m={icon:a.value?e.prevIcon:e.nextIcon,class:`v-window__${l.value?"left":"right"}`,onClick:s.next,"aria-label":u("$vuetify.carousel.next")};return r.push(E.value?t.next?t.next({props:m}):h(Y,m,null):h("div",null,null)),r}),G=v(()=>e.touch===!1?e.touch:{...{left:()=>{l.value?I():_()},right:()=>{l.value?_():I()},start:f=>{let{originalEvent:m}=f;m.stopPropagation()}},...e.touch===!0?{}:e.touch});return F(()=>H(h(e.tag,{ref:i,class:["v-window",{"v-window--show-arrows-on-hover":e.showArrows==="hover"},o.value,e.class],style:e.style},{default:()=>{var r,f;return[h("div",{class:"v-window__container",style:{height:w.value}},[(r=t.default)==null?void 0:r.call(t,{group:s}),e.showArrows!==!1&&h("div",{class:"v-window__controls"},[z.value])]),(f=t.additional)==null?void 0:f.call(t,{group:s})]}}),[[U("touch"),G.value]])),{group:s}}}),ke=A({reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},...P(),...re(),...ge()},"VWindowItem"),We=R()({name:"VWindowItem",directives:{Touch:O},props:ke(),emits:{"group:selected":e=>!0},setup(e,n){let{slots:t}=n;const o=K(q),a=ce(e,j),{isBooted:u}=we();if(!o||!a)throw new Error("[Vuetify] VWindowItem must be used inside VWindow");const s=B(!1),i=v(()=>u.value&&(o.isReversed.value?e.reverseTransition!==!1:e.transition!==!1));function l(){!s.value||!o||(s.value=!1,o.transitionCount.value>0&&(o.transitionCount.value-=1,o.transitionCount.value===0&&(o.transitionHeight.value=void 0)))}function c(){var d;s.value||!o||(s.value=!0,o.transitionCount.value===0&&(o.transitionHeight.value=X((d=o.rootRef.value)==null?void 0:d.clientHeight)),o.transitionCount.value+=1)}function y(){l()}function V(d){s.value&&Q(()=>{!i.value||!s.value||!o||(o.transitionHeight.value=X(d.clientHeight))})}const w=v(()=>{const d=o.isReversed.value?e.reverseTransition:e.transition;return i.value?{name:typeof d!="string"?o.transition.value:d,onBeforeEnter:c,onAfterEnter:l,onEnterCancelled:y,onBeforeLeave:c,onAfterLeave:l,onLeaveCancelled:y,onEnter:V}:!1}),{hasContent:g}=ye(e,a.isSelected);return F(()=>h(be,{transition:w.value,disabled:!u.value},{default:()=>{var d;return[H(h("div",{class:["v-window-item",a.selectedClass.value,e.class],style:e.style},[g.value&&((d=t.default)==null?void 0:d.call(t))]),[[J,a.isSelected.value]])]}})),{groupItem:a}}});function Xe(e,n,t,o,a,u){return b(),C($e,p({class:"fs-window",touch:!1,style:e.style,modelValue:e.$props.modelValue,"onUpdate:modelValue":n[0]||(n[0]=s=>e.$emit("update:modelValue",s))},e.$attrs),Z({default:T(()=>[(b(!0),oe(ae,null,k(e.getChildren(),(s,i)=>(b(),C(We,{class:"fs-window-item",value:e.value(s,i),key:i},{default:T(()=>[(b(),C(se(s)))]),_:2},1032,["value"]))),128))]),_:2},[k(e.slots,(s,i)=>({name:i,fn:T(l=>[ee(e.$slots,i,te(ne(l)))])}))]),1040,["style","modelValue"])}const Ge=ue(M,[["render",Xe]]);M.__docgenInfo={displayName:"FSWindow",exportName:"default",description:"",tags:{},props:[{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"any"},required:!1,defaultValue:{func:!1,value:"0"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWindow.vue"]};export{Ge as F};