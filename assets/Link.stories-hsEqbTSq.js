import{d as v,c as r,B as S,D as f,m as h,I as k,J as b,P as q,Q as L,R as F,q as C,K as x,L as _}from"./vue.esm-bundler-D5n7z5qz.js";import{F as V}from"./FSRouterLink-D3C4jXZ9.js";import{_ as c}from"./FSSpan-BN7wkmby.js";import{C as w,u as R}from"./useColors-BM_SKUZx.js";import{u as $}from"./useBreakpoints-CEzKC_o8.js";import{u as B}from"./useSlots-CoecqEnp.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./vue-router-BrikmAnQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Cdiv_FYE.js";const g=v({name:"FSLink",components:{FSRouterLink:V,FSSpan:c},props:{label:{type:String,required:!1,default:null},to:{type:Object,required:!1,default:null},href:{type:String,required:!1,default:null},font:{type:String,required:!1,default:"text-body"},lineClamp:{type:Number,required:!1,default:1},ellipsis:{type:Boolean,required:!1,default:!0},color:{type:String,required:!1,default:w.Primary},variant:{type:String,required:!1,default:"dark"}},setup(e){const{fontStyles:a}=$(),{getColors:n}=R(),{slots:o}=B(),s=r(()=>n(e.color)),u=r(()=>{switch(e.variant){case"base":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.base,...a.value};case"light":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.light,...a.value};case"dark":return{"--fs-span-line-clamp":e.lineClamp.toString(),"--fs-link-color":s.value.dark,...a.value}}});return{classes:r(()=>{const t=["fs-link",e.font];return o.default||t.push("fs-span-pre-wrap"),e.lineClamp>1?t.push("fs-span-line-clamp"):e.ellipsis&&t.push("fs-span-ellipsis"),t}),style:u}}});function P(e,a,n,o,s,u){const i=k("FSRouterLink");return b(),S(i,h({to:e.$props.to,href:e.$props.href,class:e.classes,style:e.style},e.$attrs),{default:f(t=>[q(e.$slots,"default",L(F(t)),()=>[C(c,null,{default:f(()=>[x(_(e.$props.label),1)]),_:1})])]),_:3},16,["to","href","class","style"])}const y=N(g,[["render",P]]);g.__docgenInfo={displayName:"FSLink",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"to",type:{name:"RouteLocation | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"href",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"font",values:["text-h1","text-h2","text-h3","text-body","text-button","text-overline"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"text-body"'}},{name:"lineClamp",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"ellipsis",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"variant",values:["base","light","dark"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"dark"'}}],slots:[{name:"default",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSLink.vue"]};const J={title:"Foundation/Shared/Link",component:y,tags:["autodocs"],argTypes:{}},l={args:{},render:(e,{argTypes:a})=>({components:{FSLink:y},props:Object.keys(a),setup(){return{...e}},template:`
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
    `})};var p,d,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
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
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const K=["Variations"];export{l as Variations,K as __namedExportsOrder,J as default};
