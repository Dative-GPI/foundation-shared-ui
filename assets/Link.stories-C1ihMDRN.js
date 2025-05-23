import{d as C,c as t,A as q,z as L,E as F,N as d,V,D as $,C as r,m as w,G as R,H as m,R as c,I as g,J as y,O as _,P as x}from"./vue.esm-bundler-DtArtqdn.js";import{F as N}from"./FSRouterLink-BnjgQQHT.js";import{_ as o}from"./FSSpan-Btkwe66a.js";import{C as B,u as P}from"./useColors-P6sW9vWR.js";import{u as U}from"./useBreakpoints-DjafNA1e.js";import{u as E}from"./useSlots-DbyfVVj5.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-router-D25_MSGh.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-BTycGIF1.js";const S=C({name:"FSLink",components:{FSRouterLink:N,FSSpan:o},props:{label:{type:String,required:!1,default:null},to:{type:Object,required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:B.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{fontStyles:a}=U(),{getColors:u}=P(),{slots:i}=E(),n=t(()=>u(e.color)),p=t(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.base,...a.value};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.light,...a.value};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":n.value.dark,...a.value}}});return{classes:t(()=>{const s=["fs-link",e.font];return i.default||s.push("fs-span-pre-wrap"),e.lineClamp>1?s.push("fs-span-line-clamp"):e.ellipsis&&s.push("fs-span-ellipsis"),s}),style:p}}}),z=["href"];function D(e,a,u,i,n,p){const f=R("FSRouterLink");return e.$props.href?(m(),q("a",{key:0,href:e.$props.href,class:$(e.classes),style:V(e.style)},[d(e.$slots,"default",{},()=>[c(o,null,{default:r(()=>[g(y(e.$props.label),1)]),_:1})])],14,z)):e.$props.to?(m(),L(f,w({key:1,to:e.$props.to,class:e.classes,style:e.style},e.$attrs),{default:r(s=>[d(e.$slots,"default",_(x(s)),()=>[c(o,null,{default:r(()=>[g(y(e.$props.label),1)]),_:1})])]),_:3},16,["to","class","style"])):F("",!0)}const b=O(S,[["render",D]]);S.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const X={title:"Foundation/Shared/Link",component:b,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},l={args:{args:{}},render:(e,{argTypes:a})=>({components:{FSLink:b},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var k,h,v;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Y=["Variations"];export{l as Variations,Y as __namedExportsOrder,X as default};
