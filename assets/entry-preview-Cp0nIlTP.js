import{h as _,ad as y,a4 as N,ae as w,r as f}from"./vue.esm-bundler-Zcuj-zyO.js";var I=Object.defineProperty,j=(e,r)=>{for(var t in r)I(e,t,{get:r[t],enumerable:!0})};const{sanitizeStoryContextUpdate:v}=__STORYBOOK_MODULE_PREVIEW_API__;var E={};j(E,{applyDecorators:()=>b,parameters:()=>h,render:()=>P,renderToCanvas:()=>U});var P=(e,r)=>{let{id:t,component:i}=r;if(!i)throw new Error(`Unable to render story ${t} as the component annotation is missing from the default export`);return()=>_(i,e,F(e,r))},G=e=>{globalThis.PLUGINS_SETUP_FUNCTIONS??(globalThis.PLUGINS_SETUP_FUNCTIONS=new Set),globalThis.PLUGINS_SETUP_FUNCTIONS.add(e)},C=async(e,r)=>{globalThis&&globalThis.PLUGINS_SETUP_FUNCTIONS&&await Promise.all([...globalThis.PLUGINS_SETUP_FUNCTIONS].map(t=>t(e,r)))},c=new Map;async function U({storyFn:e,forceRemount:r,showMain:t,showException:i,storyContext:a,id:n},o){let u=c.get(o);if(u&&!r){let p=e(),l=T(p,a);return L(u.reactiveArgs,l),()=>{d(u.vueApp,o)}}u&&r&&d(u.vueApp,o);let s=y({setup(){a.args=f(a.args);let p=e(),l=T(p,a),g={vueApp:s,reactiveArgs:f(l)};return c.set(o,g),()=>_(p)}});return s.config.errorHandler=(p,l,g)=>{var S;(S=window.__STORYBOOK_PREVIEW__)!=null&&S.storyRenders.some(O=>O.id===n&&O.phase==="playing")?setTimeout(()=>{throw p},0):i(p)},await C(s,a),s.mount(o),t(),()=>{d(s,o)}}function F(e,r){let{argTypes:t}=r,i=Object.entries(e).filter(([a])=>{var n,o;return((o=(n=t[a])==null?void 0:n.table)==null?void 0:o.category)==="slots"}).map(([a,n])=>[a,typeof n=="function"?n:()=>n]);return Object.fromEntries(i)}function T(e,r){return e.props&&N(e)?e.props:r.args}function L(e,r){if(Object.keys(r).length===0)return;let t=w(e)?e:f(e);Object.keys(t).forEach(i=>{i in r||delete t[i]}),Object.assign(t,r)}function d(e,r){e==null||e.unmount(),c.has(r)&&c.delete(r)}function R(e){return typeof e=="function"?{render:e,name:e.name}:e}function m(e,r){let t=e;return t===null?null:typeof t=="function"?t:r?{...R(t),components:{...t.components||{},story:r}}:{render(){return _(t)}}}function b(e,r){return r.reduce((t,i)=>a=>{let n,o=i(u=>{let s=v(u);return u&&(s.args=Object.assign(a.args,s.args)),n=t({...a,...s}),n},a);return n||(n=t(a)),o===n?n:m(o,()=>_(n))},t=>m(e(t)))}var h={renderer:"vue3"};const A=Object.freeze(Object.defineProperty({__proto__:null,applyDecorators:b,parameters:h,render:P,renderToCanvas:U},Symbol.toStringTag,{value:"Module"}));export{A as e,G as s};