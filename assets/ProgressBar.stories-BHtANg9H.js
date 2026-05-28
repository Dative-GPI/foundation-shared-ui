import{r as Y,g as r,j as y,ac as c,H as x,Y as G,P as a,i as C,l as u,o as V,a1 as h,k as i,F as J,W as K,E as Q,p as U}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as z}from"./FSRow-C8VtPvPz.js";import{F as X}from"./FSText-CUmuxASa.js";import{u as Z,a as S}from"./useColors-CvhpHTRO.js";import{_ as ee}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./useSlots-p1mkRhuZ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";const T=Y({name:"FSProgressBar",components:{FSText:X,FSRow:z},props:{modelValue:{type:Number,required:!0},startColor:{type:String,required:!1},endColor:{type:String,required:!1},showValue:{type:Boolean,required:!1,default:!0},valueFormat:{type:String,required:!1,default:"percentage"},min:{type:Number,required:!1,default:0},max:{type:Number,required:!1,default:1},labels:{type:Array,required:!1,default:()=>[]},cursor:{type:Boolean,required:!1,default:!1}},setup(e){const{getColors:m}=Z(),F=m(S.Light),w=m(S.Success),_=m(S.Error),t=r(()=>e.max>e.min),s=r(()=>e.max-e.min),n=r(()=>t.value?Math.min(Math.max(e.modelValue,e.min),e.max):e.min),d=r(()=>t.value?(n.value-e.min)/s.value*100:0),R=r(()=>e.modelValue>=e.min&&e.modelValue<=e.max),B=r(()=>t.value?(Math.min(Math.max(0,e.min),e.max)-e.min)/s.value*100:0),b=r(()=>Math.min(B.value,d.value)),o=r(()=>Math.abs(d.value-B.value)),D=r(()=>o.value===0?"0%":`${-(b.value/o.value)*100}%`),A=r(()=>o.value===0?"100%":`${(100-b.value)/o.value*100}%`),W=r(()=>e.labels.map(l=>{const O=t.value?(l.value-e.min)/s.value*100:0;return{value:l.value,display:l.text??l.value,percent:Math.min(Math.max(O,0),100)}})),j=r(()=>e.valueFormat==="raw"?e.modelValue.toFixed(2):`${Math.round(d.value)}%`),H=r(()=>({"--progress-bar-background":F.dark,"--progress-bar-gradient-start":e.startColor??_.base,"--progress-bar-gradient-start-stop":D.value,"--progress-bar-gradient-end":e.endColor??w.base,"--progress-bar-gradient-end-stop":A.value,"--progress-bar-fill-left":`${b.value}%`,"--progress-bar-fill-width":`${o.value}%`,"--progress-bar-cursor-position":`${d.value}%`}));return{positionedLabels:W,isValueInRange:R,displayValue:j,style:H}}}),re={class:"fs-progress-bar-wrapper"},ae={class:"fs-progress-bar-track"},se={key:0,class:"fs-progress-bar-cursor"},ne={key:1,class:"fs-progress-bar-fill"},te={key:0,class:"fs-progress-bar-labels"};function oe(e,m,F,w,_,t){const s=G("FSText");return a(),y(z,{align:"center-center",style:x(e.style)},{default:c(()=>[C("div",re,[C("div",ae,[e.$props.cursor&&e.isValueInRange?(a(),u("div",se,[e.$props.showValue?(a(),y(s,{key:0,class:"fs-progress-bar-cursor-label",font:"text-overline",ellipsis:!1},{default:c(()=>[V(h(e.displayValue),1)]),_:1})):i("",!0)])):i("",!0),e.$props.cursor?i("",!0):(a(),u("div",ne))]),e.positionedLabels.length?(a(),u("div",te,[(a(!0),u(J,null,K(e.positionedLabels,n=>(a(),u("div",{key:n.value,class:Q(["fs-progress-bar-label",{"fs-progress-bar-label--start":n.percent===0,"fs-progress-bar-label--end":n.percent===100}]),style:x({left:`${n.percent}%`})},[U(s,{font:"text-overline"},{default:c(()=>[V(h(n.display),1)]),_:2},1024)],6))),128))])):i("",!0)]),e.$props.showValue&&!e.$props.cursor?(a(),y(s,{key:0,font:"text-button"},{default:c(()=>[V(h(e.displayValue),1)]),_:1})):i("",!0)]),_:1},8,["style"])}const v=ee(T,[["render",oe]]);T.__docgenInfo={displayName:"FSProgressBar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number"},required:!0},{name:"startColor",type:{name:"string"},required:!1},{name:"endColor",type:{name:"string"},required:!1},{name:"showValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"valueFormat",values:["percentage","raw"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"percentage"'}},{name:"min",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"max",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"labels",type:{name:"Array<{ value: number; text?: string }>"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"cursor",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSProgressBar.vue"]};const be={title:"Foundation/Shared/ProgressBar",component:v,tags:["autodocs"],argTypes:{valueFormat:{control:"radio",options:["percentage","raw"]}}},p={args:{modelValue:.7,showValue:!0},render:e=>({components:{FSProgressBar:v},setup(){return{args:e}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})},f={args:{modelValue:-.6,min:-1,max:1,valueFormat:"raw",showValue:!0,labels:[{value:-1},{value:0},{value:1}]},render:e=>({components:{FSProgressBar:v},setup(){return{args:e}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})},g={args:{modelValue:5,min:-10,max:10,cursor:!0,showValue:!0,labels:[{value:-10},{value:0},{value:10}]},render:e=>({components:{FSProgressBar:v},setup(){return{args:e}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})};var q,P,$;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    modelValue: 0.70,
    showValue: true
  },
  render: args => ({
    components: {
      FSProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressBar
        v-bind="args"
      />
    \`
  })
}`,...($=(P=p.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var k,M,N;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    modelValue: -0.6,
    min: -1,
    max: 1,
    valueFormat: 'raw',
    showValue: true,
    labels: [{
      value: -1
    }, {
      value: 0
    }, {
      value: 1
    }]
  },
  render: args => ({
    components: {
      FSProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressBar
        v-bind="args"
      />
    \`
  })
}`,...(N=(M=f.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var I,E,L;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: 5,
    min: -10,
    max: 10,
    cursor: true,
    showValue: true,
    labels: [{
      value: -10
    }, {
      value: 0
    }, {
      value: 10
    }]
  },
  render: args => ({
    components: {
      FSProgressBar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressBar
        v-bind="args"
      />
    \`
  })
}`,...(L=(E=g.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const ye=["Default","Interval","IntervalCursor"];export{p as Default,f as Interval,g as IntervalCursor,ye as __namedExportsOrder,be as default};
