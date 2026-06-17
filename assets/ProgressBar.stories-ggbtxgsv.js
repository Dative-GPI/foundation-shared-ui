import{F as s}from"./FSProgressBar-DWZS0cgQ.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./FSRow-C8aYwBu-.js";import"./css-DSFbdPon.js";import"./useBreakpoints-pPMhsL5T.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSText-C8rmUTxK.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./useSlots-ol4Nk6ew.js";const f={title:"Shared/Components/ProgressBar",component:s,tags:["autodocs"],argTypes:{valueFormat:{control:"radio",options:["percentage","raw"]}}},e={args:{modelValue:.7,showValue:!0},render:r=>({components:{FSProgressBar:s},setup(){return{args:r}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})},n={args:{modelValue:-.6,min:-1,max:1,valueFormat:"raw",showValue:!0,labels:[{value:-1},{value:0},{value:1}]},render:r=>({components:{FSProgressBar:s},setup(){return{args:r}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})},a={args:{modelValue:5,min:-10,max:10,cursor:!0,showValue:!0,labels:[{value:-10},{value:0},{value:10}]},render:r=>({components:{FSProgressBar:s},setup(){return{args:r}},template:`
      <FSProgressBar
        v-bind="args"
      />
    `})};var o,t,u;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(u=(t=e.parameters)==null?void 0:t.docs)==null?void 0:u.source}}};var l,m,p;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,g,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(g=a.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};const I=["Default","Interval","IntervalCursor"];export{e as Default,n as Interval,a as IntervalCursor,I as __namedExportsOrder,f as default};
