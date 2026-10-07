import{a as e}from"./index-B-lxVbXh.js";import{F as s}from"./FSEditImageUI-BYLDvTVf.js";import{F as i}from"./FSButton-C9qE_hma.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSButtonFileMini-hCufq9n3.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFiles-CvsF8d0a.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./base-CmdGny12.js";import"./FSCardPlaceholder-B4nJ7EgT.js";import"./FSCard-X6BL7IDn.js";import"./FSRow-BTBqaZ3Z.js";import"./css-BA19cdxW.js";import"./useBreakpoints-Trboya0O.js";import"./VProgressCircular-D014ccrC.js";import"./color-Cx3XlwVF.js";import"./useRender-C5CA_XPC.js";import"./intersectionObserver-DHmVtmN7.js";import"./resizeObserver-ZKSQVJHV.js";import"./size-kKHvqn_O.js";import"./tag-BLKDmAVb.js";import"./FSIcon-D-iWmbKS.js";import"./VIcon-BPCLtKbp.js";import"./icons-AciKn6XY.js";import"./FSText-DkgFU9ZB.js";import"./useSlots-DEXetpJf.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./dimensions-BuDdBtmf.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./VImg-CF0d7Fd2.js";import"./rounded-BE8u9DAQ.js";import"./transition-Dqm8buww.js";import"./index-D_7bL_IH.js";import"./FSSpan-CffnRYnX.js";import"./FSCol-ChYB2Oag.js";const le={title:"Shared/Components/EditImage/EditImageUI",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:source":{action:"update:source"}}},U="/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQECBAUGAQEBAQIFBgUBAQECBAUGBQEBAgIFCAgGAQIDBQYKCgcCAwUGCAoLCQQGBwgKDAwKBwkJCQsKCgn/2wBDAQEBAQEBAgQHAQEBAgQFBgEBAQIDBgkBAQIDBQcJAQICBQYICQIEBQYICgsFBQgKCgwKBgYICgsMCgUFBgcJCgn/wAARCAAeAB4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+9eiivx2/4KieP/27vh5apqn7Pn7Tvwl8GeH5NQ8O/BSD4S6z4W+1y2WoePfH9jYvcN4l/tWDIsxe+aE+xDO3bvGdw1Mz9iaK8W+A3hL44aLYeX+0F8ZfC3x18QeY93/wnOj6P/ZsX9iSKu2P+xBe3nNuQ2W+0/Nn7oxz7TQIK+QP24P2Z9X+LOhx2GieKdN8Hzpqnh/4wtrF1GzrLZfD/wCIlhfNEIoyDnUorIxg5wpbJBAwfr+igYUUUUCA/9k=",t={args:{source:null,modelValue:U,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":e("onUpdate:modelValue"),"onUpdate:source":e("onUpdate:source")},render:(a,{argTypes:r})=>({components:{FSEditImageUI:s,FSButton:i},props:Object.keys(r),setup(){return{args:a}},template:`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`})},o={args:{source:null,modelValue:null,height:280,width:"100%",label:"Edit Image",variant:"full",hideHeader:!1,required:!1,"onUpdate:modelValue":e("onUpdate:modelValue"),"onUpdate:source":e("onUpdate:source")},render:(a,{argTypes:r})=>({components:{FSEditImageUI:s,FSButton:i},props:Object.keys(r),setup(){return{args:a}},template:`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`})},d={args:{source:"https://www.dative-gpi.com/assets/images/illustration-home-opt.jpg",modelValue:null,height:280,width:"300px",label:"Edit Image",variant:"full",hideHeader:!1,required:!1,"onUpdate:modelValue":e("onUpdate:modelValue"),"onUpdate:source":e("onUpdate:source")},render:(a,{argTypes:r})=>({components:{FSEditImageUI:s,FSButton:i},props:Object.keys(r),setup(){return{args:a}},template:`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />`})};var l,p,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    source: null,
    modelValue: imageTdata,
    height: 96,
    width: 96,
    label: 'Edit Image',
    variant: 'standard',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source")
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEditImageUI,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />\`
  })
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,g,n;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    source: null,
    modelValue: null,
    height: 280,
    width: '100%',
    label: 'Edit Image',
    variant: 'full',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source")
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEditImageUI,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />\`
  })
}`,...(n=(g=o.parameters)==null?void 0:g.docs)==null?void 0:n.source}}};var c,A,h;d.parameters={...d.parameters,docs:{...(c=d.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    source: "https://www.dative-gpi.com/assets/images/illustration-home-opt.jpg",
    modelValue: null,
    height: 280,
    width: '300px',
    label: 'Edit Image',
    variant: 'full',
    hideHeader: false,
    required: false,
    "onUpdate:modelValue": action("onUpdate:modelValue"),
    "onUpdate:source": action("onUpdate:source")
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSEditImageUI,
      FSButton
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSEditImageUI 
        v-model:source="args.source"
        :height="args.height"
        :width="args.width"
        :label="args.label"
        :variant="args.variant"
        :hideHeader="args.hideHeader"
        :required="args.required"
        v-model="args.modelValue"
        @update:modelValue="args['onUpdate:modelValue']"
        @update:source="args['onUpdate:source']"
      />\`
  })
}`,...(h=(A=d.parameters)==null?void 0:A.docs)==null?void 0:h.source}}};const pe=["Default","VariationFull","VariationFullSource"];export{t as Default,o as VariationFull,d as VariationFullSource,pe as __namedExportsOrder,le as default};
