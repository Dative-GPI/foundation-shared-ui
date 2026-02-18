import{e as U,w as v,o as q,q as r,m as p,F as z,d as B,B as P,C as M,U as E,Q as S,R as F,J as $,D as x,P as k}from"./vue.esm-bundler-D5n7z5qz.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as h,m as J,a as I,b as O}from"./VWindowItem-CYjgFUvM.js";import{I as Q}from"./icons-DR_vovBH.js";import{a as j}from"./locale-DKpA43KM.js";import{u as G}from"./proxiedModel-BPspb6XO.js";import{V as H}from"./VDefaultsProvider-6Z-RVAh9.js";import{V as K}from"./VBtn--7NXzl5z.js";import{V as X}from"./loader-COXi3ZW_.js";import{g as b,u as T}from"./useRender-BcOya-6A.js";import{c as Y,p as N}from"./theme-Cdiv_FYE.js";import{V,m as Z}from"./VImg-BlUyfKKc.js";import{F as ee}from"./FSButton-CZRwWCRJ.js";import"./group-BRhJCq_i.js";import"./lazy-C77w73YC.js";import"./ssrBoot-C79LbZhX.js";import"./transition-DbItRNv8.js";import"./tag-BOR-k4cz.js";import"./variant-j8rFA7nZ.js";import"./color-BW36qAym.js";import"./density-BnAGl-Nw.js";import"./elevation-JukLG-n6.js";import"./rounded-lfTNxM9v.js";import"./dimensions-B7sNhH2O.js";import"./router-BDiSnJ53.js";import"./size-CaXETvDn.js";import"./index-BYo1BiTt.js";import"./VIcon-mGJe0MYK.js";import"./VProgressCircular-D6ZFUt0S.js";import"./resizeObserver-Z3fjh7Cv.js";import"./anchor-CPKk15qm.js";import"./index-BKpPdzm5.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-CJ7Lhzl1.js";import"./useColors-BM_SKUZx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-BJsIM37h.js";import"./css-CxcvJboa.js";import"./FSCard-BH6GLU3V.js";import"./FSRow-DIk8KFbG.js";import"./FSCol-D_lbFmZy.js";import"./FSSpan-BN7wkmby.js";const te=N({color:String,cycle:Boolean,delimiterIcon:{type:Q,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...J({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),oe=b()({name:"VCarousel",props:te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=G(e,"modelValue"),{t:i}=j(),a=U();let c=-1;v(o,u),v(()=>e.interval,u),v(()=>e.cycle,f=>{f?u():window.clearTimeout(c)}),q(l);function l(){!e.cycle||!a.value||(c=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(c),window.requestAnimationFrame(l)}return T(()=>{const f=h.filterProps(e);return r(h,p({ref:a},f,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Y(e.height)},e.style]}),{default:t.default,additional:g=>{let{group:s}=g;return r(z,null,[!e.hideDelimiters&&r("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[s.items.value.length>0&&r(H,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map((m,W)=>{const C={id:`carousel-item-${m.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",W+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(m.id)&&"v-btn--active"],onClick:()=>s.select(m.id,!0)};return t.item?t.item({props:C,item:m}):r(K,p(m,C),null)})]})]),e.progress&&r(X,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(s.getItemIndex(o.value)+1)/s.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),re=N({...Z(),...O()},"VCarouselItem"),ae=b()({name:"VCarouselItem",inheritAttrs:!1,props:re(),setup(e,n){let{slots:t,attrs:o}=n;T(()=>{const i=V.filterProps(e),a=I.filterProps(e);return r(I,p({class:["v-carousel-item",e.class]},a),{default:()=>[r(V,p(o,i),t)]})})}}),A=B({name:"FSCarousel"});function se(e,n,t,o,i,a){return $(),P(oe,S(F(e.$attrs)),M({_:2},[E(e.$slots,(c,l)=>({name:l,fn:x(u=>[k(e.$slots,l,S(F(u)))])}))]),1040)}const L=D(A,[["render",se]]);A.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarousel.vue"]};const R=B({name:"FSCarouselItem"});function ne(e,n,t,o,i,a){return $(),P(ae,S(F(e.$attrs)),{default:x(()=>[k(e.$slots,"default")]),_:3},16)}const ie=D(R,[["render",ne]]);R.__docgenInfo={displayName:"FSCarouselItem",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarouselItem.vue"]};const Ze={title:"Foundation/Shared/Carousel",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value:0}},render:e=>({components:{FSCarousel:L,FSButton:ee,FSCarouselItem:ie},setup(){return{args:e}},template:`
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
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const et=["Variations"];export{d as Variations,et as __namedExportsOrder,Ze as default};
