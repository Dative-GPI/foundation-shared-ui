import{e as R,w as S,o as U,k as r,m as p,F as z,d as B,E as P,G as E,X as q,U as v,V as F,M as $,H as k,S as x}from"./vue.esm-bundler-NVdFPFZB.js";import{_ as b}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as h,m as G,a as I,b as H}from"./VWindowItem-CArm1FTd.js";import{I as O}from"./icons-Cl0t_6pZ.js";import{a as X}from"./locale-DER8LJer.js";import{u as j}from"./proxiedModel-VL_RP4zk.js";import{g as D,u as T}from"./useRender-CaGCh2Xu.js";import{c as J,p as N}from"./theme-DuZszYeY.js";import{V as K}from"./VDefaultsProvider-Blv54jCg.js";import{V as Q}from"./VBtn-Ct4hkl6N.js";import{V as Y}from"./VProgressLinear-Bctf4Kqo.js";import{V,m as Z}from"./VImg-BdZHkGCX.js";import{F as ee}from"./FSButton-CdKzPvIq.js";import"./group-BLkYT3DE.js";import"./lazy-sPNxwuRm.js";import"./ssrBoot-BimrXMWA.js";import"./transition-a5pzBS6c.js";import"./tag-DuA9585q.js";import"./border-D8z1QLxT.js";import"./density-CE2FkSgs.js";import"./elevation-DQ_qKX67.js";import"./rounded-CS1_z6Jk.js";import"./variant-DNfp8Yqp.js";import"./color-BS29f5Yp.js";import"./dimensions-CS_qJJhy.js";import"./loader-xTPVyuBN.js";import"./position-O95c9fuD.js";import"./router-D36qODsG.js";import"./size-D7Cgj1jW.js";import"./index-B-eFr4Nw.js";import"./VIcon-Cu6WQqXu.js";import"./VProgressCircular-Cjpa4WUk.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./anchor-Se7MGGLO.js";import"./index-B4rZgXN-.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./FSText-DR713pSR.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useBreakpoints-DO2FQykY.js";import"./useSlots-DEXetpJf.js";import"./FSSpan-B28b2m0n.js";import"./FSIcon-DzQOa56z.js";import"./css-CUVOJ3aO.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./FSCol-KRtq6OYO.js";const te=N({color:String,cycle:Boolean,delimiterIcon:{type:O,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:e=>Number(e)>0},progress:[Boolean,String],verticalDelimiters:[Boolean,String],...G({continuous:!0,mandatory:"force",showArrows:!0})},"VCarousel"),oe=D()({name:"VCarousel",props:te(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const o=j(e,"modelValue"),{t:i}=X(),a=R();let c=-1;S(o,m),S(()=>e.interval,m),S(()=>e.cycle,f=>{f?m():window.clearTimeout(c)}),U(l);function l(){!e.cycle||!a.value||(c=window.setTimeout(a.value.group.next,+e.interval>0?+e.interval:6e3))}function m(){window.clearTimeout(c),window.requestAnimationFrame(l)}return T(()=>{const f=h.filterProps(e);return r(h,p({ref:a},f,{modelValue:o.value,"onUpdate:modelValue":g=>o.value=g,class:["v-carousel",{"v-carousel--hide-delimiter-background":e.hideDelimiterBackground,"v-carousel--vertical-delimiters":e.verticalDelimiters},e.class],style:[{height:J(e.height)},e.style]}),{default:t.default,additional:g=>{let{group:s}=g;return r(z,null,[!e.hideDelimiters&&r("div",{class:"v-carousel__controls",style:{left:e.verticalDelimiters==="left"&&e.verticalDelimiters?0:"auto",right:e.verticalDelimiters==="right"?0:"auto"}},[s.items.value.length>0&&r(K,{defaults:{VBtn:{color:e.color,icon:e.delimiterIcon,size:"x-small",variant:"text"}},scoped:!0},{default:()=>[s.items.value.map((u,M)=>{const C={id:`carousel-item-${u.id}`,"aria-label":i("$vuetify.carousel.ariaLabel.delimiter",M+1,s.items.value.length),class:["v-carousel__controls__item",s.isSelected(u.id)&&"v-btn--active"],onClick:()=>s.select(u.id,!0)};return t.item?t.item({props:C,item:u}):r(Q,p(u,C),null)})]})]),e.progress&&r(Y,{class:"v-carousel__progress",color:typeof e.progress=="string"?e.progress:void 0,modelValue:(s.getItemIndex(o.value)+1)/s.items.value.length*100},null)])},prev:t.prev,next:t.next})}),{}}}),re=N({...Z(),...H()},"VCarouselItem"),ae=D()({name:"VCarouselItem",inheritAttrs:!1,props:re(),setup(e,n){let{slots:t,attrs:o}=n;T(()=>{const i=V.filterProps(e),a=I.filterProps(e);return r(I,p({class:["v-carousel-item",e.class]},a),{default:()=>[r(V,p(o,i),t)]})})}}),A=B({name:"FSCarousel"});function se(e,n,t,o,i,a){return $(),P(oe,v(F(e.$attrs)),E({_:2},[q(e.$slots,(c,l)=>({name:l,fn:k(m=>[x(e.$slots,l,v(F(m)))])}))]),1040)}const L=b(A,[["render",se]]);A.__docgenInfo={displayName:"FSCarousel",exportName:"default",description:"",tags:{},slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarousel.vue"]};const W=B({name:"FSCarouselItem"});function ne(e,n,t,o,i,a){return $(),P(ae,v(F(e.$attrs)),{default:k(()=>[x(e.$slots,"default")]),_:3},16)}const ie=b(W,[["render",ne]]);W.__docgenInfo={displayName:"FSCarouselItem",exportName:"default",description:"",tags:{},slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/carousels/FSCarouselItem.vue"]};const rt={title:"Shared/Components/Carousel",component:L,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},d={args:{args:{value:0}},render:e=>({components:{FSCarousel:L,FSButton:ee,FSCarouselItem:ie},setup(){return{args:e}},template:`
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
