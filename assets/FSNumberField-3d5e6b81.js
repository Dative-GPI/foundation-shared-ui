import{f as p,E as i,F as m,U as f,V as c,A as F,G as b,R as V,N,O as $}from"./vue.esm-bundler-838daa40.js";import{F as s}from"./FSTextField-5838a9fc.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";const n=p({name:"FSNumberField",components:{FSTextField:s},props:{modelValue:{type:Number,required:!1,default:null},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e,{emit:o}){return{onUpdate:l=>{const a=/([0-9 ]*[,.]?)?[0-9]+/.exec(l);a&&!isNaN(parseFloat(a[0].replace(",",".").replace(" ","")))?o("update:modelValue",parseFloat(a[0].replace(",",".").replace(" ",""))):o("update:modelValue",0)}}}});function S(e,o,d,l,a,_){var r;return i(),m(s,F({editable:e.$props.editable,modelValue:(r=e.$props.modelValue)==null?void 0:r.toString(),"onUpdate:modelValue":e.onUpdate},e.$attrs),f({_:2},[c(e.$slots,(g,t)=>({name:t,fn:b(u=>[V(e.$slots,t,N($(u)))])}))]),1040,["editable","modelValue","onUpdate:modelValue"])}const q=h(n,[["render",S]]);n.__docgenInfo={displayName:"FSNumberField",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"number | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSNumberField.vue"]};export{q as F};