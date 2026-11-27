import{a as S,b as w}from"./properties-Qw-O9fbT.js";import{F as r}from"./FSProgressCircle-C6YV-L7T.js";import{F as b}from"./FSRow-BTBqaZ3Z.js";import{C as n}from"./useColors-CPKx0SIo.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSText-DkgFU9ZB.js";import"./useBreakpoints-Trboya0O.js";import"./useSlots-DEXetpJf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-BA19cdxW.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";const O={title:"Shared/Components/ProgressCircle",component:r,tags:["autodocs"],argTypes:{...w([b],r),...S(r),valueFormat:{control:"radio",options:["percentage","raw"]}}},t=l=>({components:{FSProgressCircle:r},setup(){return{args:l}},template:`
    <FSProgressCircle
      v-bind="args"
    />
  `}),e={render:t,args:{modelValue:.7,showValue:!0}},a={render:l=>({components:{FSProgressCircle:r},setup(){return{args:l}},template:`
      <FSProgressCircle
        v-bind="args"
        @click="() => {console.log('ProgressCircle clicked'); }"
      />
    `}),args:{modelValue:.32,size:"20px",thickness:"2px",showValue:!1,startColor:n.Primary,endColor:n.Primary}},o={render:t,args:{modelValue:-.6,min:-1,max:1,size:"120px",valueFormat:"raw",showValue:!0,labels:[{value:-.5},{value:0},{value:.5}]}},s={render:t,args:{modelValue:5,min:0,max:30,size:"120px",cursor:!0,startColor:n.Primary,endColor:n.Primary,showValue:!0,labels:[{value:0},{value:5},{value:10},{value:15},{value:20},{value:25}]}};var m,u,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render,
  args: {
    modelValue: 0.70,
    showValue: true
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,p,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSProgressCircle
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSProgressCircle
        v-bind="args"
        @click="() => {console.log('ProgressCircle clicked'); }"
      />
    \`
  }),
  args: {
    modelValue: 0.32,
    size: "20px",
    thickness: "2px",
    showValue: false,
    startColor: ColorEnum.Primary,
    endColor: ColorEnum.Primary
  }
}`,...(d=(p=a.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var g,v,C;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render,
  args: {
    modelValue: -0.6,
    min: -1,
    max: 1,
    size: "120px",
    valueFormat: 'raw',
    showValue: true,
    labels: [{
      value: -0.5
    }, {
      value: 0
    }, {
      value: 0.5
    }]
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var P,V,x;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render,
  args: {
    modelValue: 5,
    min: 0,
    max: 30,
    size: "120px",
    cursor: true,
    startColor: ColorEnum.Primary,
    endColor: ColorEnum.Primary,
    showValue: true,
    labels: [{
      value: 0
    }, {
      value: 5
    }, {
      value: 10
    }, {
      value: 15
    }, {
      value: 20
    }, {
      value: 25
    }]
  }
}`,...(x=(V=s.parameters)==null?void 0:V.docs)==null?void 0:x.source}}};const R=["Default","SmallClickable","Interval","IntervalCursor"];export{e as Default,o as Interval,s as IntervalCursor,a as SmallClickable,R as __namedExportsOrder,O as default};
