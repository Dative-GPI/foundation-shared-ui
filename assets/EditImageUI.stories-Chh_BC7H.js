import{a as e}from"./index-B-lxVbXh.js";import{F as s}from"./FSEditImageUI-nANBsajj.js";import{F as i}from"./FSButton-CdKzPvIq.js";import"./v4-CtRu48qb.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSButtonFileMini-Bi3yQ9tl.js";import"./useColors-B9SkzYFF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-DuZszYeY.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useFiles-CvsF8d0a.js";import"./useAppAuthToken-CxB5IoRP.js";import"./FSRouterLink-D11oKEEH.js";import"./vue-router-WBcFvCV3.js";import"./base-CmdGny12.js";import"./FSCardPlaceholder-DcCni79S.js";import"./FSCard-ghpSlWxI.js";import"./FSRow-Dg2RhQyl.js";import"./css-CUVOJ3aO.js";import"./useBreakpoints-DO2FQykY.js";import"./VProgressCircular-Cjpa4WUk.js";import"./color-BS29f5Yp.js";import"./useRender-CaGCh2Xu.js";import"./intersectionObserver-DwVsweQn.js";import"./resizeObserver-Df0UXoOw.js";import"./size-D7Cgj1jW.js";import"./tag-DuA9585q.js";import"./FSIcon-DzQOa56z.js";import"./VIcon-Cu6WQqXu.js";import"./icons-Cl0t_6pZ.js";import"./FSText-DR713pSR.js";import"./useSlots-DEXetpJf.js";import"./FSImageUI-CdvzmuqZ.js";import"./FSLoader-DOgbrYCd.js";import"./dimensions-CS_qJJhy.js";import"./elevation-DQ_qKX67.js";import"./locale-DER8LJer.js";import"./proxiedModel-VL_RP4zk.js";import"./VImg-BdZHkGCX.js";import"./rounded-CS1_z6Jk.js";import"./transition-a5pzBS6c.js";import"./index-B4rZgXN-.js";import"./FSSpan-B28b2m0n.js";import"./FSCol-KRtq6OYO.js";const le={title:"Shared/Components/EditImage/EditImageUI",component:s,tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","full"]},"onUpdate:modelValue":{action:"update:modelValue"},"onUpdate:source":{action:"update:source"}}},U="/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQECBAUGAQEBAQIFBgUBAQECBAUGBQEBAgIFCAgGAQIDBQYKCgcCAwUGCAoLCQQGBwgKDAwKBwkJCQsKCgn/2wBDAQEBAQEBAgQHAQEBAgQFBgEBAQIDBgkBAQIDBQcJAQICBQYICQIEBQYICgsFBQgKCgwKBgYICgsMCgUFBgcJCgn/wAARCAAeAB4DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+9eiivx2/4KieP/27vh5apqn7Pn7Tvwl8GeH5NQ8O/BSD4S6z4W+1y2WoePfH9jYvcN4l/tWDIsxe+aE+xDO3bvGdw1Mz9iaK8W+A3hL44aLYeX+0F8ZfC3x18QeY93/wnOj6P/ZsX9iSKu2P+xBe3nNuQ2W+0/Nn7oxz7TQIK+QP24P2Z9X+LOhx2GieKdN8Hzpqnh/4wtrF1GzrLZfD/wCIlhfNEIoyDnUorIxg5wpbJBAwfr+igYUUUUCA/9k=",t={args:{source:null,modelValue:U,height:96,width:96,label:"Edit Image",variant:"standard",hideHeader:!1,required:!1,"onUpdate:modelValue":e("onUpdate:modelValue"),"onUpdate:source":e("onUpdate:source")},render:(a,{argTypes:r})=>({components:{FSEditImageUI:s,FSButton:i},props:Object.keys(r),setup(){return{args:a}},template:`
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
