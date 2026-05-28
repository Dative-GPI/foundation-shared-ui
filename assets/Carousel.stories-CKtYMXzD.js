import{V as z,aa as v,L as M,p as r,B as p,F as U,r as B,j as P,m as j,W as q,G as S,u as F,P as $,ac as k,X as x}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as h,b as E,a as I,m as G}from"./VWindowItem-D6b_Aeub.js";import{a as O}from"./icons-CT9uuJgl.js";import{u as X}from"./locale-yWiW8Thx.js";import{u as H}from"./proxiedModel-DoNoMWaC.js";import{g as D,u as T}from"./useRender-BLRtLddt.js";import{k as J,a9 as N}from"./theme-Dfllckn6.js";import{V as K}from"./VDefaultsProvider-BWK1RKVO.js";import{V as Q}from"./VBtn-hLKUYNZP.js";import{V as Y}from"./VProgressLinear-CSdvTkgI.js";import{V,m as Z}from"./VImg-DooBjoZC.js";import{F as ee}from"./FSButton-CX1uVweX.js";import"./group-CUiyutR_.js";import"./lazy-DY4Wto-x.js";import"./ssrBoot-DbD7MJXH.js";import"./transition-CedxoFs4.js";import"./tag-mR0sHpgP.js";import"./border-CatZixNo.js";import"./density-SLEyWIf6.js";import"./elevation-DVEOfLMu.js";import"./rounded-B6-M_5uG.js";import"./variant-BZg-bE5G.js";import"./color-RD9Ud5Y3.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./position-Dh5mOHTG.js";import"./router-CJAgOfLI.js";import"./size-BQpWkrb5.js";import"./index-Dlqh_ozP.js";import"./VIcon-e3y7Ok8e.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./anchor-CT7OU_gq.js";import"./index-BLyOCIqB.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./FSSpan-9E7WYB2n.js";import"./FSIcon-CBwOL1p5.js";import"./css-B9c0ZZC5.js";import"./FSCard--XyliQO3.js";import"./FSRow-C8VtPvPz.js";import"./FSCol-B2uM4vFw.js";const te=N({color:String,cycle:Boolean,delimiterIcon:{type:O,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...E({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),oe=D()({name:"VCarousel",props:te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=H(e,"modelValue"),{t:i}=X(),a=z();let c=-1;v(o,u),v(()=>e.interval,u),v(()=>e.cycle,f=>{f?u():window.clearTimeout(c)}),M(l);function l(){!e.cycle||!a.value||(c=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(c),window.requestAnimationFrame(l)}return T(()=>{const f=h.filterProps(e);return r(h,p({ref:a},f,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:J(e.height)},e.style]}),{default:t.default,additional:g=>{let{group:s}=g;return r(U,null,[!e.hideDelimiters&&r("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[s.items.value.length>0&&r(K,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map((m,R)=>{const C={id:`carousel-item-${m.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",R+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(m.id)&&"v-btn--active"],onClick:()=>s.select(m.id,!0)};return t.item?t.item({props:C,item:m}):r(Q,p(m,C),null)})]})]),e.progress&&r(Y,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(s.getItemIndex(o.value)+1)/s.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),re=N({...Z(),...G()},"VCarouselItem"),ae=D()({name:"VCarouselItem",inheritAttrs:!1,props:re(),setup(e,n){let{slots:t,attrs:o}=n;T(()=>{const i=V.filterProps(e),a=I.filterProps(e);return r(I,p({class:["v-carousel-item",e.class]},a),{default:()=>[r(V,p(o,i),t)]})})}}),A=B({name:"FSCarousel"});function se(e,n,t,o,i,a){return $(),P(oe,S(F(e.$attrs)),j({_:2},[q(e.$slots,(c,l)=>({name:l,fn:k(u=>[x(e.$slots,l,S(F(u)))])}))]),1040)}const L=b(A,[["render",se]]);A.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarousel.vue"]};const W=B({name:"FSCarouselItem"});function ne(e,n,t,o,i,a){return $(),P(ae,S(F(e.$attrs)),{default:k(()=>[x(e.$slots,"default")]),_:3},16)}const ie=b(W,[["render",ne]]);W.__docgenInfo={displayName:"FSCarouselItem",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarouselItem.vue"]};const rt={title:"Foundation/Shared/Carousel",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value:0}},render:e=>({components:{FSCarousel:L,FSButton:ee,FSCarouselItem:ie},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; align: center;">
      <FSCarousel  direction="vertical" :continuous="false" :interval="1000" :cycle="false" :showArrows="'hover'" >
          <FSCarouselItem>
              <FSButton> Primary color </FSButton> 
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Secondary color </FSButton>
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Tertiary color </FSButton>
          </FSCarouselItem>
      </FSCarousel>
    </div>`})};var w,y,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    args: {
      value: 0
    }
  },
  render: args => ({
    components: {
      FSCarousel,
      FSButton,
      FSCarouselItem
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <div style="display: flex; flex-direction: column; gap: 10px; align: center;">
      <FSCarousel  direction="vertical" :continuous="false" :interval="1000" :cycle="false" :showArrows="'hover'" >
          <FSCarouselItem>
              <FSButton> Primary color </FSButton> 
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Secondary color </FSButton>
          </FSCarouselItem>

          <FSCarouselItem>
              <FSButton> Tertiary color </FSButton>
          </FSCarouselItem>
      </FSCarousel>
    </div>\`
  })
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const at=["Variations"];export{d as Variations,at as __namedExportsOrder,rt as default};
