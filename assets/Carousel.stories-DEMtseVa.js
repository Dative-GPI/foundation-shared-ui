import{d as B,b as z,w as v,v as E,k as o,F as M,m as p,B as P,D as O,S as U,P as S,Q as F,J as $,E as k,O as x}from"./vue.esm-bundler-PONd4AmC.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{m as q,V as h,b as J,a as I}from"./VWindowItem-DqS-XBSX.js";import{I as Q}from"./VIcon-shEmQARK.js";import{a as j}from"./locale-CoLhg8Wl.js";import{u as G}from"./proxiedModel-BMHfYIia.js";import{V as H}from"./VDefaultsProvider--dbql3OT.js";import{V as K}from"./VBtn-Bcg5Dpfx.js";import{V as X}from"./loader-zqGHJTJd.js";import{g as D,u as T}from"./color-CQ7P2KsY.js";import{p as N,c as Y}from"./theme-DW7AHeJn.js";import{m as Z,V}from"./VImg-AonvEV9k.js";import{F as ee}from"./FSButton-C_cDbGvj.js";import"./group-QLjCrFp5.js";import"./lazy-PL0gnfDR.js";import"./ssrBoot-DufuUSU7.js";import"./transition-BpYTYsmy.js";import"./border-BL_XAYaf.js";import"./density-DM1TPnyn.js";import"./elevation-D2k7D5K3.js";import"./rounded-Cwlpymxx.js";import"./dimensions-D04OQyPe.js";import"./router-DS8hXbpn.js";import"./index-aCfcr9Gd.js";import"./VProgressCircular-D57tYVQX.js";import"./resizeObserver-BAwzmH4Y.js";import"./anchor-rLQXsCC5.js";import"./index-CzkqP9_q.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSClickable-BpeLEfG7.js";import"./FSCard-B7av1ouT.js";import"./FSCol-Bfhiyt6Y.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./FSRow-C-b-hpWa.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./FSSpan-DxKJLsSl.js";import"./useSlots-nyIcwo6G.js";import"./FSIcon-wf_hiRKr.js";const A=B({name:"FSCarousel"}),te=N({color:String,cycle:Boolean,delimiterIcon:{type:Q,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...q({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),re=D()({name:"VCarousel",props:te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const r=G(e,"modelValue"),{t:i}=j(),a=z();let c=-1;v(r,u),v(()=>e.interval,u),v(()=>e.cycle,f=>{f?u():window.clearTimeout(c)}),E(l);function l(){!e.cycle||!a.value||(c=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function u(){window.clearTimeout(c),window.requestAnimationFrame(l)}return T(()=>{const f=h.filterProps(e);return o(h,p({ref:a},f,{modelValue:r.value,"onUpdate:modelValue":g=>r.value=g,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:Y(e.height)},e.style]}),{default:t.default,additional:g=>{let{group:s}=g;return o(M,null,[!e.hideDelimiters&&o("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[s.items.value.length>0&&o(H,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map((m,R)=>{const C={id:`carousel-item-${m.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",R+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(m.id)&&"v-btn--active"],onClick:()=>s.select(m.id,!0)};return t.item?t.item({props:C,item:m}):o(K,p(m,C),null)})]})]),e.progress&&o(X,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(s.getItemIndex(r.value)+1)/s.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),oe=N({...Z(),...J()},"VCarouselItem"),ae=D()({name:"VCarouselItem",inheritAttrs:!1,props:oe(),setup(e,n){let{slots:t,attrs:r}=n;T(()=>{const i=V.filterProps(e),a=I.filterProps(e);return o(I,p({class:["v-carousel-item",e.class]},a),{default:()=>[o(V,p(r,i),t)]})})}});function se(e,n,t,r,i,a){return $(),P(re,S(F(e.$attrs)),O({_:2},[U(e.$slots,(c,l)=>({name:l,fn:k(u=>[x(e.$slots,l,S(F(u)))])}))]),1040)}const L=b(A,[["render",se]]);A.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarousel.vue"]};const W=B({name:"FSCarouselItem"});function ne(e,n,t,r,i,a){return $(),P(ae,S(F(e.$attrs)),{default:k(()=>[x(e.$slots,"default")]),_:3},16)}const ie=b(W,[["render",ne]]);W.__docgenInfo={displayName:"FSCarouselItem",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarouselItem.vue"]};const Ke={title:"Foundation/Shared/Carousel",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value:0}},render:e=>({components:{FSCarousel:L,FSButton:ee,FSCarouselItem:ie},setup(){return{args:e}},template:`
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
}`,...(_=(y=d.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const Xe=["Variations"];export{d as Variations,Xe as __namedExportsOrder,Ke as default};
