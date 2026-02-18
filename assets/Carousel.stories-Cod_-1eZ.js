import{e as U,w as v,o as q,q as r,m as p,F as z,d as B,B as P,C as M,U as E,Q as S,R as F,J as $,D as x,P as k}from"./vue.esm-bundler-B9lxvfDw.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as h,m as J,a as I,b as O}from"./VWindowItem-BUJYZxEy.js";import{I as Q}from"./icons-B5bBvhw0.js";import{a as j}from"./locale-C647X9dJ.js";import{u as G}from"./proxiedModel-DRvKxps3.js";import{V as H}from"./VDefaultsProvider-BurwYF19.js";import{V as K}from"./VBtn-CjvfwDqR.js";import{V as X}from"./loader-CaGstafT.js";import{g as b,u as T}from"./useRender-DM2jvMPN.js";import{c as Y,p as N}from"./theme-Bz5xEpqh.js";import{V,m as Z}from"./VImg-UzuohEtG.js";import{F as ee}from"./FSButton-CxA5c6KR.js";import"./group-BLkb5Gt4.js";import"./lazy-B_HJlRZe.js";import"./ssrBoot-butIQ2KL.js";import"./transition-Dh_EAQcC.js";import"./variant-BIgPYL9J.js";import"./color-CLtf7Qrc.js";import"./density-DvMOIaQw.js";import"./elevation-DZ0Sccyb.js";import"./rounded-BrvRf1BO.js";import"./dimensions-n1mPaUbN.js";import"./router-BlaQ2-ft.js";import"./VIcon-DPcX_RaC.js";import"./index-EdIR5CJS.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./anchor-ByUPiJZt.js";import"./index-Dli51uy9.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSClickable-zRgeWTkl.js";import"./FSCard-BwbWypiX.js";import"./FSCol-BwxAijHz.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSRow-CFa9RNor.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSSpan-COYXSDbp.js";import"./useSlots-BioZKQqg.js";import"./FSIcon-kCffLiJ2.js";const te=N({color:String,cycle:Boolean,delimiterIcon:{type:Q,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...J({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),oe=b()({name:"VCarousel",props:te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=G(e,"modelValue"),{t:i}=j(),a=U();let c=-1;v(o,u),v(()=>e.interval,u),v(()=>e.cycle,f=>{f?u():window.clearTimeout(c)}),q(l);function l(){!e.cycle||!a.value||(c=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(c),window.requestAnimationFrame(l)}return T(()=>{const f=h.filterProps(e);return r(h,p({ref:a},f,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Y(e.height)},e.style]}),{default:t.default,additional:g=>{let{group:s}=g;return r(z,null,[!e.hideDelimiters&&r("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[s.items.value.length>0&&r(H,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map((m,W)=>{const C={id:`carousel-item-${m.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",W+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(m.id)&&"v-btn--active"],onClick:()=>s.select(m.id,!0)};return t.item?t.item({props:C,item:m}):r(K,p(m,C),null)})]})]),e.progress&&r(X,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(s.getItemIndex(o.value)+1)/s.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),re=N({...Z(),...O()},"VCarouselItem"),ae=b()({name:"VCarouselItem",inheritAttrs:!1,props:re(),setup(e,n){let{slots:t,attrs:o}=n;T(()=>{const i=V.filterProps(e),a=I.filterProps(e);return r(I,p({class:["v-carousel-item",e.class]},a),{default:()=>[r(V,p(o,i),t)]})})}}),A=B({name:"FSCarousel"});function se(e,n,t,o,i,a){return $(),P(oe,S(F(e.$attrs)),M({_:2},[E(e.$slots,(c,l)=>({name:l,fn:x(u=>[k(e.$slots,l,S(F(u)))])}))]),1040)}const L=D(A,[["render",se]]);A.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarousel.vue"]};const R=B({name:"FSCarouselItem"});function ne(e,n,t,o,i,a){return $(),P(ae,S(F(e.$attrs)),{default:x(()=>[k(e.$slots,"default")]),_:3},16)}const ie=D(R,[["render",ne]]);R.__docgenInfo={displayName:"FSCarouselItem",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarouselItem.vue"]};const Xe={title:"Foundation/Shared/Carousel",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value:0}},render:e=>({components:{FSCarousel:L,FSButton:ee,FSCarouselItem:ie},setup(){return{args:e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px; align: center;">
      <FSCarousel  direction="vertical" :interval="2000" :cycle="true" :showArrows="'hover'" >
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
      <FSCarousel  direction="vertical" :interval="2000" :cycle="true" :showArrows="'hover'" >
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
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const Ye=["Variations"];export{d as Variations,Ye as __namedExportsOrder,Xe as default};
