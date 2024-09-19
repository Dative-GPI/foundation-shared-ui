import{v as N,m as W,f as le,b as D,w as B,c as A,n as ve,l as I,q as de,S as Be,i as Fe,s as G,o as Ye,r as Me,p as Xe,y as Ge,U as Ue,t as Ze,x as Ke,a7 as Je,Z as Qe,a0 as et,_ as tt,F as nt}from"./vue.esm-bundler-BwDfg4wG.js";import{a as X,d as ot,s as ce,b as at,g as Re,n as Ne,B as oe,c as we}from"./forwardRefs-DWGaNmQL.js";import{g as _e,m as rt,c as it,u as st}from"./color-BnvS3YzF.js";import{D as De,W as He,p as j,I as q,u as lt,c as _,G as be,X as ct,a as me,A as Ee,y as ut,n as ft,s as vt}from"./theme-DkbGhe4v.js";import{a as ye,u as dt}from"./proxiedModel-okNizC5Y.js";import{p as xe,f as ae,a as re,b as pe,g as Se}from"./anchor-0YuAsO7w.js";import{m as mt,u as yt}from"./dimensions-yOZi2HlQ.js";import{u as gt}from"./display-DC3KmzVA.js";import{m as ht,u as wt}from"./lazy-MJJzC26k.js";import{a as bt}from"./locale-DTc71_bq.js";import{a as Et,b as xt}from"./router-CeBnHAqN.js";import{m as pt,M as St}from"./transition-DbaVUv7M.js";const K=new WeakMap;function Ot(e,n){Object.keys(n).forEach(t=>{if(De(t)){const o=He(t),a=K.get(e);if(n[t]==null)a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))});else if(!a||![...a].some(i=>i[0]===o&&i[1]===n[t])){e.addEventListener(o,n[t]);const i=a||new Set;i.add([o,n[t]]),K.has(e)||K.set(e,i)}}else n[t]==null?e.removeAttribute(t):e.setAttribute(t,n[t])})}function kt(e,n){Object.keys(n).forEach(t=>{if(De(t)){const o=He(t),a=K.get(e);a==null||a.forEach(i=>{const[s,r]=i;s===o&&(e.removeEventListener(o,r),a.delete(i))})}else e.removeAttribute(t)})}function Ie(e){if(typeof e.getRootNode!="function"){for(;e.parentNode;)e=e.parentNode;return e!==document?null:document}const n=e.getRootNode();return n!==document&&n.getRootNode({composed:!0})!==document?null:n}function Pt(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;for(;e;){if(n?At(e):ge(e))return e;e=e.parentElement}return document.scrollingElement}function Q(e,n){const t=[];if(n&&e&&!n.contains(e))return t;for(;e&&(ge(e)&&t.push(e),e!==n);)e=e.parentElement;return t}function ge(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return n.overflowY==="scroll"||n.overflowY==="auto"&&e.scrollHeight>e.clientHeight}function At(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const n=window.getComputedStyle(e);return["scroll","auto"].includes(n.overflowY)}function Ct(e){for(;e;){if(window.getComputedStyle(e).position==="fixed")return!0;e=e.offsetParent}return!1}const Tt=j({target:[Object,Array]},"v-dialog-transition"),gn=_e()({name:"VDialogTransition",props:Tt(),setup(e,n){let{slots:t}=n;const o={onBeforeEnter(a){a.style.pointerEvents="none",a.style.visibility="hidden"},async onEnter(a,i){var w;await new Promise(h=>requestAnimationFrame(h)),await new Promise(h=>requestAnimationFrame(h)),a.style.visibility="";const{x:s,y:r,sx:u,sy:c,speed:f}=ke(e.target,a),g=X(a,[{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0},{}],{duration:225*f,easing:ot});(w=Oe(a))==null||w.forEach(h=>{X(h,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*f,easing:ce})}),g.finished.then(()=>i())},onAfterEnter(a){a.style.removeProperty("pointer-events")},onBeforeLeave(a){a.style.pointerEvents="none"},async onLeave(a,i){var w;await new Promise(h=>requestAnimationFrame(h));const{x:s,y:r,sx:u,sy:c,speed:f}=ke(e.target,a);X(a,[{},{transform:`translate(${s}px, ${r}px) scale(${u}, ${c})`,opacity:0}],{duration:125*f,easing:at}).finished.then(()=>i()),(w=Oe(a))==null||w.forEach(h=>{X(h,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*f,easing:ce})})},onAfterLeave(a){a.style.removeProperty("pointer-events")}};return()=>e.target?N(le,W({name:"dialog-transition"},o,{css:!1}),t):N(le,{name:"dialog-transition"},t)}});function Oe(e){var t;const n=(t=e.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:t.children;return n&&[...n]}function ke(e,n){const t=Re(e),o=Ne(n),[a,i]=getComputedStyle(n).transformOrigin.split(" ").map(k=>parseFloat(k)),[s,r]=getComputedStyle(n).getPropertyValue("--v-overlay-anchor-origin").split(" ");let u=t.left+t.width/2;s==="left"||r==="left"?u-=t.width/2:(s==="right"||r==="right")&&(u+=t.width/2);let c=t.top+t.height/2;s==="top"||r==="top"?c-=t.height/2:(s==="bottom"||r==="bottom")&&(c+=t.height/2);const f=t.width/o.width,g=t.height/o.height,w=Math.max(1,f,g),h=f/w||0,d=g/w||0,v=o.width*o.height/(window.innerWidth*window.innerHeight),O=v>.12?Math.min(1.5,(v-.12)*10+1):1;return{x:u-(a+o.left),y:c-(i+o.top),sx:h,sy:d,speed:O}}function ie(e,n){return{x:e.x+n.x,y:e.y+n.y}}function Lt(e,n){return{x:e.x-n.x,y:e.y-n.y}}function Pe(e,n){if(e.side==="top"||e.side==="bottom"){const{side:t,align:o}=e,a=o==="left"?0:o==="center"?n.width/2:o==="right"?n.width:o,i=t==="top"?0:t==="bottom"?n.height:t;return ie({x:a,y:i},n)}else if(e.side==="left"||e.side==="right"){const{side:t,align:o}=e,a=t==="left"?0:t==="right"?n.width:t,i=o==="top"?0:o==="center"?n.height/2:o==="bottom"?n.height:o;return ie({x:a,y:i},n)}return ie({x:n.width/2,y:n.height/2},n)}const Ve={static:Mt,connected:Nt},Bt=j({locationStrategy:{type:[String,Function],default:"static",validator:e=>typeof e=="function"||e in Ve},location:{type:String,default:"bottom"},origin:{type:String,default:"auto"},offset:[Number,String,Array]},"VOverlay-location-strategies");function Ft(e,n){const t=D({}),o=D();q&&ye(()=>!!(n.isActive.value&&e.locationStrategy),i=>{var s,r;B(()=>e.locationStrategy,i),I(()=>{window.removeEventListener("resize",a),o.value=void 0}),window.addEventListener("resize",a,{passive:!0}),typeof e.locationStrategy=="function"?o.value=(s=e.locationStrategy(n,e,t))==null?void 0:s.updateLocation:o.value=(r=Ve[e.locationStrategy](n,e,t))==null?void 0:r.updateLocation});function a(i){var s;(s=o.value)==null||s.call(o,i)}return{contentStyles:t,updateLocation:o}}function Mt(){}function Rt(e,n){n?e.style.removeProperty("left"):e.style.removeProperty("right");const t=Ne(e);return n?t.x+=parseFloat(e.style.right||0):t.x-=parseFloat(e.style.left||0),t.y-=parseFloat(e.style.top||0),t}function Nt(e,n,t){(Array.isArray(e.target.value)||Ct(e.target.value))&&Object.assign(t.value,{position:"fixed",top:0,[e.isRtl.value?"right":"left"]:0});const{preferredAnchor:a,preferredOrigin:i}=lt(()=>{const d=xe(n.location,e.isRtl.value),v=n.origin==="overlap"?d:n.origin==="auto"?ae(d):xe(n.origin,e.isRtl.value);return d.side===v.side&&d.align===re(v).align?{preferredAnchor:pe(d),preferredOrigin:pe(v)}:{preferredAnchor:d,preferredOrigin:v}}),[s,r,u,c]=["minWidth","minHeight","maxWidth","maxHeight"].map(d=>A(()=>{const v=parseFloat(n[d]);return isNaN(v)?1/0:v})),f=A(()=>{if(Array.isArray(n.offset))return n.offset;if(typeof n.offset=="string"){const d=n.offset.split(" ").map(parseFloat);return d.length<2&&d.push(0),d}return typeof n.offset=="number"?[n.offset,0]:[0,0]});let g=!1;const w=new ResizeObserver(()=>{g&&h()});B([e.target,e.contentEl],(d,v)=>{let[O,k]=d,[p,b]=v;p&&!Array.isArray(p)&&w.unobserve(p),O&&!Array.isArray(O)&&w.observe(O),b&&w.unobserve(b),k&&w.observe(k)},{immediate:!0}),I(()=>{w.disconnect()});function h(){if(g=!1,requestAnimationFrame(()=>g=!0),!e.target.value||!e.contentEl.value)return;const d=Re(e.target.value),v=Rt(e.contentEl.value,e.isRtl.value),O=Q(e.contentEl.value),k=12;O.length||(O.push(document.documentElement),e.contentEl.value.style.top&&e.contentEl.value.style.left||(v.x-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-x")||0),v.y-=parseFloat(document.documentElement.style.getPropertyValue("--v-body-scroll-y")||0)));const p=O.reduce((S,E)=>{const m=E.getBoundingClientRect(),y=new oe({x:E===document.documentElement?0:m.x,y:E===document.documentElement?0:m.y,width:E.clientWidth,height:E.clientHeight});return S?new oe({x:Math.max(S.left,y.left),y:Math.max(S.top,y.top),width:Math.min(S.right,y.right)-Math.max(S.left,y.left),height:Math.min(S.bottom,y.bottom)-Math.max(S.top,y.top)}):y},void 0);p.x+=k,p.y+=k,p.width-=k*2,p.height-=k*2;let b={anchor:a.value,origin:i.value};function V(S){const E=new oe(v),m=Pe(S.anchor,d),y=Pe(S.origin,E);let{x:M,y:L}=Lt(m,y);switch(S.anchor.side){case"top":L-=f.value[0];break;case"bottom":L+=f.value[0];break;case"left":M-=f.value[0];break;case"right":M+=f.value[0];break}switch(S.anchor.align){case"top":L-=f.value[1];break;case"bottom":L+=f.value[1];break;case"left":M-=f.value[1];break;case"right":M+=f.value[1];break}return E.x+=M,E.y+=L,E.width=Math.min(E.width,u.value),E.height=Math.min(E.height,c.value),{overflows:we(E,p),x:M,y:L}}let F=0,P=0;const l={x:0,y:0},T={x:!1,y:!1};let te=-1;for(;!(te++>10);){const{x:S,y:E,overflows:m}=V(b);F+=S,P+=E,v.x+=S,v.y+=E;{const y=Se(b.anchor),M=m.x.before||m.x.after,L=m.y.before||m.y.after;let z=!1;if(["x","y"].forEach(C=>{if(C==="x"&&M&&!T.x||C==="y"&&L&&!T.y){const R={anchor:{...b.anchor},origin:{...b.origin}},U=C==="x"?y==="y"?re:ae:y==="y"?ae:re;R.anchor=U(R.anchor),R.origin=U(R.origin);const{overflows:$}=V(R);($[C].before<=m[C].before&&$[C].after<=m[C].after||$[C].before+$[C].after<(m[C].before+m[C].after)/2)&&(b=R,z=T[C]=!0)}}),z)continue}m.x.before&&(F+=m.x.before,v.x+=m.x.before),m.x.after&&(F-=m.x.after,v.x-=m.x.after),m.y.before&&(P+=m.y.before,v.y+=m.y.before),m.y.after&&(P-=m.y.after,v.y-=m.y.after);{const y=we(v,p);l.x=p.width-y.x.before-y.x.after,l.y=p.height-y.y.before-y.y.after,F+=y.x.before,v.x+=y.x.before,P+=y.y.before,v.y+=y.y.before}break}const ne=Se(b.anchor);return Object.assign(t.value,{"--v-overlay-anchor-origin":`${b.anchor.side} ${b.anchor.align}`,transformOrigin:`${b.origin.side} ${b.origin.align}`,top:_(se(P)),left:e.isRtl.value?void 0:_(se(F)),right:e.isRtl.value?_(se(-F)):void 0,minWidth:_(ne==="y"?Math.min(s.value,d.width):s.value),maxWidth:_(Ae(be(l.x,s.value===1/0?0:s.value,u.value))),maxHeight:_(Ae(be(l.y,r.value===1/0?0:r.value,c.value)))}),{available:l,contentBox:v}}return B(()=>[a.value,i.value,n.offset,n.minWidth,n.minHeight,n.maxWidth,n.maxHeight],()=>h()),ve(()=>{const d=h();if(!d)return;const{available:v,contentBox:O}=d;O.height>v.y&&requestAnimationFrame(()=>{h(),requestAnimationFrame(()=>{h()})})}),{updateLocation:h}}function se(e){return Math.round(e*devicePixelRatio)/devicePixelRatio}function Ae(e){return Math.ceil(e*devicePixelRatio)/devicePixelRatio}let ue=!0;const ee=[];function _t(e){!ue||ee.length?(ee.push(e),fe()):(ue=!1,e(),fe())}let Ce=-1;function fe(){cancelAnimationFrame(Ce),Ce=requestAnimationFrame(()=>{const e=ee.shift();e&&e(),ee.length?fe():ue=!0})}const J={none:null,close:It,block:Vt,reposition:Wt},Dt=j({scrollStrategy:{type:[String,Function],default:"block",validator:e=>typeof e=="function"||e in J}},"VOverlay-scroll-strategies");function Ht(e,n){if(!q)return;let t;de(async()=>{t==null||t.stop(),n.isActive.value&&e.scrollStrategy&&(t=Be(),await new Promise(o=>setTimeout(o)),t.active&&t.run(()=>{var o;typeof e.scrollStrategy=="function"?e.scrollStrategy(n,e,t):(o=J[e.scrollStrategy])==null||o.call(J,n,e,t)}))}),I(()=>{t==null||t.stop()})}function It(e){function n(t){e.isActive.value=!1}We(e.targetEl.value??e.contentEl.value,n)}function Vt(e,n){var s;const t=(s=e.root.value)==null?void 0:s.offsetParent,o=[...new Set([...Q(e.targetEl.value,n.contained?t:void 0),...Q(e.contentEl.value,n.contained?t:void 0)])].filter(r=>!r.classList.contains("v-overlay-scroll-blocked")),a=window.innerWidth-document.documentElement.offsetWidth,i=(r=>ge(r)&&r)(t||document.documentElement);i&&e.root.value.classList.add("v-overlay--scroll-blocked"),o.forEach((r,u)=>{r.style.setProperty("--v-body-scroll-x",_(-r.scrollLeft)),r.style.setProperty("--v-body-scroll-y",_(-r.scrollTop)),r!==document.documentElement&&r.style.setProperty("--v-scrollbar-offset",_(a)),r.classList.add("v-overlay-scroll-blocked")}),I(()=>{o.forEach((r,u)=>{const c=parseFloat(r.style.getPropertyValue("--v-body-scroll-x")),f=parseFloat(r.style.getPropertyValue("--v-body-scroll-y")),g=r.style.scrollBehavior;r.style.scrollBehavior="auto",r.style.removeProperty("--v-body-scroll-x"),r.style.removeProperty("--v-body-scroll-y"),r.style.removeProperty("--v-scrollbar-offset"),r.classList.remove("v-overlay-scroll-blocked"),r.scrollLeft=-c,r.scrollTop=-f,r.style.scrollBehavior=g}),i&&e.root.value.classList.remove("v-overlay--scroll-blocked")})}function Wt(e,n,t){let o=!1,a=-1,i=-1;function s(r){_t(()=>{var f,g;const u=performance.now();(g=(f=e.updateLocation).value)==null||g.call(f,r),o=(performance.now()-u)/(1e3/60)>2})}i=(typeof requestIdleCallback>"u"?r=>r():requestIdleCallback)(()=>{t.run(()=>{We(e.targetEl.value??e.contentEl.value,r=>{o?(cancelAnimationFrame(a),a=requestAnimationFrame(()=>{a=requestAnimationFrame(()=>{s(r)})})):s(r)})})}),I(()=>{typeof cancelIdleCallback<"u"&&cancelIdleCallback(i),cancelAnimationFrame(a)})}function We(e,n){const t=[document,...Q(e)];t.forEach(o=>{o.addEventListener("scroll",n,{passive:!0})}),I(()=>{t.forEach(o=>{o.removeEventListener("scroll",n)})})}const $t=Symbol.for("vuetify:v-menu"),qt=j({closeDelay:[Number,String],openDelay:[Number,String]},"delay");function jt(e,n){let t=()=>{};function o(s){t==null||t();const r=Number(s?e.openDelay:e.closeDelay);return new Promise(u=>{t=ct(r,()=>{n==null||n(s),u(s)})})}function a(){return o(!0)}function i(){return o(!1)}return{clearDelay:t,runOpenDelay:a,runCloseDelay:i}}const zt=j({target:[String,Object],activator:[String,Object],activatorProps:{type:Object,default:()=>({})},openOnClick:{type:Boolean,default:void 0},openOnHover:Boolean,openOnFocus:{type:Boolean,default:void 0},closeOnContentClick:Boolean,...qt()},"VOverlay-activator");function Yt(e,n){let{isActive:t,isTop:o}=n;const a=me("useActivator"),i=D();let s=!1,r=!1,u=!0;const c=A(()=>e.openOnFocus||e.openOnFocus==null&&e.openOnHover),f=A(()=>e.openOnClick||e.openOnClick==null&&!e.openOnHover&&!c.value),{runOpenDelay:g,runCloseDelay:w}=jt(e,l=>{l===(e.openOnHover&&s||c.value&&r)&&!(e.openOnHover&&t.value&&!o.value)&&(t.value!==l&&(u=!0),t.value=l)}),h=D(),d={onClick:l=>{l.stopPropagation(),i.value=l.currentTarget||l.target,t.value||(h.value=[l.clientX,l.clientY]),t.value=!t.value},onMouseenter:l=>{var T;(T=l.sourceCapabilities)!=null&&T.firesTouchEvents||(s=!0,i.value=l.currentTarget||l.target,g())},onMouseleave:l=>{s=!1,w()},onFocus:l=>{ut(l.target,":focus-visible")!==!1&&(r=!0,l.stopPropagation(),i.value=l.currentTarget||l.target,g())},onBlur:l=>{r=!1,l.stopPropagation(),w()}},v=A(()=>{const l={};return f.value&&(l.onClick=d.onClick),e.openOnHover&&(l.onMouseenter=d.onMouseenter,l.onMouseleave=d.onMouseleave),c.value&&(l.onFocus=d.onFocus,l.onBlur=d.onBlur),l}),O=A(()=>{const l={};if(e.openOnHover&&(l.onMouseenter=()=>{s=!0,g()},l.onMouseleave=()=>{s=!1,w()}),c.value&&(l.onFocusin=()=>{r=!0,g()},l.onFocusout=()=>{r=!1,w()}),e.closeOnContentClick){const T=Fe($t,null);l.onClick=()=>{t.value=!1,T==null||T.closeParents()}}return l}),k=A(()=>{const l={};return e.openOnHover&&(l.onMouseenter=()=>{u&&(s=!0,u=!1,g())},l.onMouseleave=()=>{s=!1,w()}),l});B(o,l=>{l&&(e.openOnHover&&!s&&(!c.value||!r)||c.value&&!r&&(!e.openOnHover||!s))&&(t.value=!1)}),B(t,l=>{l||setTimeout(()=>{h.value=void 0})},{flush:"post"});const p=D();de(()=>{p.value&&ve(()=>{i.value=Ee(p.value)})});const b=D(),V=A(()=>e.target==="cursor"&&h.value?h.value:b.value?Ee(b.value):$e(e.target,a)||i.value),F=A(()=>Array.isArray(V.value)?void 0:V.value);let P;return B(()=>!!e.activator,l=>{l&&q?(P=Be(),P.run(()=>{Xt(e,a,{activatorEl:i,activatorEvents:v})})):P&&P.stop()},{flush:"post",immediate:!0}),I(()=>{P==null||P.stop()}),{activatorEl:i,activatorRef:p,target:V,targetEl:F,targetRef:b,activatorEvents:v,contentEvents:O,scrimEvents:k}}function Xt(e,n,t){let{activatorEl:o,activatorEvents:a}=t;B(()=>e.activator,(u,c)=>{if(c&&u!==c){const f=r(c);f&&s(f)}u&&ve(()=>i())},{immediate:!0}),B(()=>e.activatorProps,()=>{i()}),I(()=>{s()});function i(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&Ot(u,W(a.value,c))}function s(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:r(),c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:e.activatorProps;u&&kt(u,W(a.value,c))}function r(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activator;const c=$e(u,n);return o.value=(c==null?void 0:c.nodeType)===Node.ELEMENT_NODE?c:void 0,o.value}}function $e(e,n){var o,a;if(!e)return;let t;if(e==="parent"){let i=(a=(o=n==null?void 0:n.proxy)==null?void 0:o.$el)==null?void 0:a.parentNode;for(;i!=null&&i.hasAttribute("data-no-activator");)i=i.parentNode;t=i}else typeof e=="string"?t=document.querySelector(e):"$el"in e?t=e.$el:t=e;return t}function Gt(){if(!q)return G(!1);const{ssr:e}=gt();if(e){const n=G(!1);return Ye(()=>{n.value=!0}),n}else return G(!0)}function Ut(){const n=me("useScopeId").vnode.scopeId;return{scopeId:n?{[n]:""}:void 0}}const Te=Symbol.for("vuetify:stack"),Y=Me([]);function Zt(e,n,t){const o=me("useStack"),a=!t,i=Fe(Te,void 0),s=Me({activeChildren:new Set});Xe(Te,s);const r=G(+n.value);ye(e,()=>{var g;const f=(g=Y.at(-1))==null?void 0:g[1];r.value=f?f+10:+n.value,a&&Y.push([o.uid,r.value]),i==null||i.activeChildren.add(o.uid),I(()=>{if(a){const w=Ue(Y).findIndex(h=>h[0]===o.uid);Y.splice(w,1)}i==null||i.activeChildren.delete(o.uid)})});const u=G(!0);a&&de(()=>{var g;const f=((g=Y.at(-1))==null?void 0:g[0])===o.uid;setTimeout(()=>u.value=f)});const c=A(()=>!s.activeChildren.size);return{globalTop:Ge(u),localTop:c,stackStyles:A(()=>({zIndex:r.value}))}}function Kt(e){return{teleportTarget:A(()=>{const t=e.value;if(t===!0||!q)return;const o=t===!1?document.body:typeof t=="string"?document.querySelector(t):t;if(o==null)return;let a=o.querySelector(":scope > .v-overlay-container");return a||(a=document.createElement("div"),a.className="v-overlay-container",o.appendChild(a)),a})}}function Jt(){return!0}function qe(e,n,t){if(!e||je(e,t)===!1)return!1;const o=Ie(n);if(typeof ShadowRoot<"u"&&o instanceof ShadowRoot&&o.host===e.target)return!1;const a=(typeof t.value=="object"&&t.value.include||(()=>[]))();return a.push(n),!a.some(i=>i==null?void 0:i.contains(e.target))}function je(e,n){return(typeof n.value=="object"&&n.value.closeConditional||Jt)(e)}function Qt(e,n,t){const o=typeof t.value=="function"?t.value:t.value.handler;n._clickOutside.lastMousedownWasOutside&&qe(e,n,t)&&setTimeout(()=>{je(e,t)&&o&&o(e)},0)}function Le(e,n){const t=Ie(e);n(document),typeof ShadowRoot<"u"&&t instanceof ShadowRoot&&n(t)}const en={mounted(e,n){const t=a=>Qt(a,e,n),o=a=>{e._clickOutside.lastMousedownWasOutside=qe(a,e,n)};Le(e,a=>{a.addEventListener("click",t,!0),a.addEventListener("mousedown",o,!0)}),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!1}),e._clickOutside[n.instance.$.uid]={onClick:t,onMousedown:o}},unmounted(e,n){e._clickOutside&&(Le(e,t=>{var i;if(!t||!((i=e._clickOutside)!=null&&i[n.instance.$.uid]))return;const{onClick:o,onMousedown:a}=e._clickOutside[n.instance.$.uid];t.removeEventListener("click",o,!0),t.removeEventListener("mousedown",a,!0)}),delete e._clickOutside[n.instance.$.uid])}};function tn(e){const{modelValue:n,color:t,...o}=e;return N(le,{name:"fade-transition",appear:!0},{default:()=>[e.modelValue&&N("div",W({class:["v-overlay__scrim",e.color.backgroundColorClasses.value],style:e.color.backgroundColorStyles.value},o),null)]})}const nn=j({absolute:Boolean,attach:[Boolean,String,Object],closeOnBack:{type:Boolean,default:!0},contained:Boolean,contentClass:null,contentProps:null,disabled:Boolean,opacity:[Number,String],noClickAnimation:Boolean,modelValue:Boolean,persistent:Boolean,scrim:{type:[Boolean,String],default:!0},zIndex:{type:[Number,String],default:2e3},...zt(),...rt(),...mt(),...ht(),...Bt(),...Dt(),...ft(),...pt()},"VOverlay"),hn=_e()({name:"VOverlay",directives:{ClickOutside:en},inheritAttrs:!1,props:{_disableGlobalStack:Boolean,...nn()},emits:{"click:outside":e=>!0,"update:modelValue":e=>!0,afterLeave:()=>!0},setup(e,n){let{slots:t,attrs:o,emit:a}=n;const i=dt(e,"modelValue"),s=A({get:()=>i.value,set:x=>{x&&e.disabled||(i.value=x)}}),{teleportTarget:r}=Kt(A(()=>e.attach||e.contained)),{themeClasses:u}=vt(e),{rtlClasses:c,isRtl:f}=bt(),{hasContent:g,onAfterLeave:w}=wt(e,s),h=it(A(()=>typeof e.scrim=="string"?e.scrim:null)),{globalTop:d,localTop:v,stackStyles:O}=Zt(s,Ze(e,"zIndex"),e._disableGlobalStack),{activatorEl:k,activatorRef:p,target:b,targetEl:V,targetRef:F,activatorEvents:P,contentEvents:l,scrimEvents:T}=Yt(e,{isActive:s,isTop:v}),{dimensionStyles:te}=yt(e),ne=Gt(),{scopeId:S}=Ut();B(()=>e.disabled,x=>{x&&(s.value=!1)});const E=D(),m=D(),y=D(),{contentStyles:M,updateLocation:L}=Ft(e,{isRtl:f,contentEl:y,target:b,isActive:s});Ht(e,{root:E,contentEl:y,targetEl:V,isActive:s,updateLocation:L});function z(x){a("click:outside",x),e.persistent?Z():s.value=!1}function C(x){return s.value&&d.value&&(!e.scrim||x.target===m.value)}q&&B(s,x=>{x?window.addEventListener("keydown",R):window.removeEventListener("keydown",R)},{immediate:!0}),Ke(()=>{q&&window.removeEventListener("keydown",R)});function R(x){var H,he;x.key==="Escape"&&d.value&&(e.persistent?Z():(s.value=!1,(H=y.value)!=null&&H.contains(document.activeElement)&&((he=k.value)==null||he.focus())))}const U=Et();ye(()=>e.closeOnBack,()=>{xt(U,x=>{d.value&&s.value?(x(!1),e.persistent?Z():s.value=!1):x()})});const $=D();B(()=>s.value&&(e.absolute||e.contained)&&r.value==null,x=>{if(x){const H=Pt(E.value);H&&H!==document.scrollingElement&&($.value=H.scrollTop)}});function Z(){e.noClickAnimation||y.value&&X(y.value,[{transformOrigin:"center"},{transform:"scale(1.03)"},{transformOrigin:"center"}],{duration:150,easing:ce})}function ze(){w(),a("afterLeave")}return st(()=>{var x;return N(nt,null,[(x=t.activator)==null?void 0:x.call(t,{isActive:s.value,props:W({ref:p,targetRef:F},P.value,e.activatorProps)}),ne.value&&g.value&&N(Je,{disabled:!r.value,to:r.value},{default:()=>[N("div",W({class:["v-overlay",{"v-overlay--absolute":e.absolute||e.contained,"v-overlay--active":s.value,"v-overlay--contained":e.contained},u.value,c.value,e.class],style:[O.value,{"--v-overlay-opacity":e.opacity,top:_($.value)},e.style],ref:E},S,o),[N(tn,W({color:h,modelValue:s.value&&!!e.scrim,ref:m},T.value),null),N(St,{appear:!0,persisted:!0,transition:e.transition,target:b.value,onAfterLeave:ze},{default:()=>{var H;return[Qe(N("div",W({ref:y,class:["v-overlay__content",e.contentClass],style:[te.value,M.value]},l.value,e.contentProps),[(H=t.default)==null?void 0:H.call(t,{isActive:s})]),[[et,s.value],[tt("click-outside"),{handler:z,closeConditional:C,include:()=>[k.value]}]])]}})])]})])}),{activatorEl:k,scrimEl:m,target:b,animateClick:Z,contentEl:y,globalTop:d,localTop:v,updateLocation:L}}});export{gn as V,$t as a,hn as b,Pt as g,nn as m,Ut as u};