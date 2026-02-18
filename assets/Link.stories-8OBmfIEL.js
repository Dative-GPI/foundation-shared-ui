import{d as q,c as r,G as L,P as d,W as C,E as F,B as V,D as o,m as $,H as w,I as R,J as m,q as c,K as g,L as y,Q as _,R as x}from"./vue.esm-bundler-B9lxvfDw.js";import{F as B}from"./FSRouterLink-ButUsqS5.js";import{_ as n}from"./FSSpan-COYXSDbp.js";import{C as N,u as P}from"./useColors-B5aYgogF.js";import{u as U}from"./useBreakpoints-Dc84uxeD.js";import{u as E}from"./useSlots-BioZKQqg.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-router-NIKGBDSI.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";const S=q({name:"FSLink",components:{FSRouterLink:B,FSSpan:n},props:{label:{type:String,required:!1,default:null},to:{type:Object,required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:N.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{fontStyles:a}=U(),{getColors:u}=P(),{slots:i}=E(),l=r(()=>u(e.color)),p=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":l.value.base,...a.value};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":l.value.light,...a.value};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":l.value.dark,...a.value}}});return{classes:r(()=>{const s=["fs-link",e.font];return i.default||s.push("fs-span-pre-wrap"),e.lineClamp>1?s.push("fs-span-line-clamp"):e.ellipsis&&s.push("fs-span-ellipsis"),s}),style:p}}}),O=["href"];function T(e,a,u,i,l,p){const f=R("FSRouterLink");return e.$props.href?(m(),L("a",{key:0,href:e.$props.href,class:F(e.classes),style:C(e.style)},[d(e.$slots,"default",{},()=>[c(n,null,{default:o(()=>[g(y(e.$props.label),1)]),_:1})])],14,O)):e.$props.to?(m(),V(f,$({key:1,to:e.$props.to,class:e.classes,style:e.style},e.$attrs),{default:o(s=>[d(e.$slots,"default",_(x(s)),()=>[c(n,null,{default:o(()=>[g(y(e.$props.label),1)]),_:1})])]),_:3},16,["to","class","style"])):w("",!0)}const b=D(S,[["render",T]]);S.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const M={title:"Foundation/Shared/Link",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:b},props:Object.keys(a),setup(){return{...e}},template:`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink
          :to="{ name: 'Home', query: { search: 'Device' } }"
          label="Using RouteLocation from vue-router"
        />
        <FSLink
          href="https://www.google.fr"
          label="Using Google URL"
        />
      </div>
    `})};var k,h,v;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    args: {}
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSLink
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <FSLink
          :to="{ name: 'Home', query: { search: 'Device' } }"
          label="Using RouteLocation from vue-router"
        />
        <FSLink
          href="https://www.google.fr"
          label="Using Google URL"
        />
      </div>
    \`
  })
}`,...(v=(h=t.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const X=["Variations"];export{t as Variations,X as __namedExportsOrder,M as default};
