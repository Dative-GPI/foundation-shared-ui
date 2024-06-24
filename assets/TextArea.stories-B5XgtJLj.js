import{c as v,b as V,s as pe,f as ve,o as ge,w as C,g as be,K as o,m as G,F as U,X as _,Y as xe,a3 as ye,n as D,d as he,y as Fe,z as X,A as J,B as $,O as we,P as Se,L as Ve,M as Ce,N as qe,D as Te}from"./vue.esm-bundler-CLWyqtrq.js";import{m as Re,f as ke,V as $e,a as Ae,F as Pe}from"./VField-BXxuzAJZ.js";import{_ as H}from"./FSCol-B1LPjIXg.js";import{u as Be}from"./useRules-D8GiojYJ.js";import{u as Ge}from"./css-Ca-HPGcF.js";import{u as He,C as A}from"./useColors-D61Fe1_L.js";import{_ as Ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Ne}from"./FSButton-xawrBwn0.js";import{a as Oe,u as Me,V as Q}from"./VInput-CwrHorP9.js";import{f as ze}from"./forwardRefs-DWGaNmQL.js";import{u as Ue}from"./proxiedModel-3ec75IAg.js";import{I as De}from"./index-C8D2gGUS.js";import{p as Ee,G as je,H as Ke,h as Le,K as Ye}from"./theme-bwyTeVCn.js";import{g as _e,u as Xe}from"./useRender-BBsw_RbX.js";import{F as Je}from"./FSForm-Bg-mYOth.js";import{_ as Qe}from"./FSRow-B7tdsi71.js";import{T as We}from"./rules-BoPQyOiY.js";import"./FSSpan-C4Iz3qX9.js";import"./useSlots-YtBg7QOA.js";import"./VSpacer-gQABP9En.js";import"./index-3KSGAm21.js";import"./transition-D0Fyuczc.js";import"./VLabel-CBBC7WmF.js";import"./color-CiZ0sQz8.js";import"./tag-CMDXkDN7.js";import"./loader-BsCFilcr.js";import"./VProgressCircular-D5Exu0y-.js";import"./resizeObserver-pTuJHNwh.js";import"./VIcon-CTYwU69W.js";import"./locale-DAz5thp-.js";import"./anchor-D3k-mERr.js";import"./rounded-BEQ3HMtY.js";import"./VDefaultsProvider-BaHTfC8g.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./FSClickable-CX-mXFfM.js";import"./FSCard-CtrctGW7.js";import"./FSIcon-nvjMvWEC.js";import"./density-BAQxqMxc.js";import"./useAppTimeZone-CjMaOqrj.js";import"./useTranslations-BiPIEqtB.js";import"./time-DShBRzYX.js";const Ze=Ee({autoGrow:Boolean,autofocus:Boolean,counter:[Boolean,Number,String],counterValue:Function,prefix:String,placeholder:String,persistentPlaceholder:Boolean,persistentCounter:Boolean,noResize:Boolean,rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseFloat(e))},maxRows:{type:[Number,String],validator:e=>!isNaN(parseFloat(e))},suffix:String,modelModifiers:Object,...Oe(),...Re()},"VTextarea"),ea=_e()({name:"VTextarea",directives:{Intersect:De},inheritAttrs:!1,props:Ze(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,s){let{attrs:g,emit:b,slots:t}=s;const r=Ue(e,"modelValue"),{isFocused:n,focus:c,blur:x}=Me(e),w=v(()=>typeof e.counterValue=="function"?e.counterValue(r.value):(r.value||"").toString().length),I=v(()=>{if(g.maxlength)return g.maxlength;if(!(!e.counter||typeof e.counter!="number"&&typeof e.counter!="string"))return e.counter});function i(a,u){var l,d;!e.autofocus||!a||(d=(l=u[0].target)==null?void 0:l.focus)==null||d.call(l)}const y=V(),p=V(),S=pe(""),q=V(),oe=v(()=>e.persistentPlaceholder||n.value||e.active);function N(){var a;q.value!==document.activeElement&&((a=q.value)==null||a.focus()),n.value||c()}function se(a){N(),b("click:control",a)}function ne(a){b("mousedown:control",a)}function ue(a){a.stopPropagation(),N(),D(()=>{r.value="",Ke(e["onClick:clear"],a)})}function ie(a){var l;const u=a.target;if(r.value=u.value,(l=e.modelModifiers)!=null&&l.trim){const d=[u.selectionStart,u.selectionEnd];D(()=>{u.selectionStart=d[0],u.selectionEnd=d[1]})}}const h=V(),T=V(+e.rows),O=v(()=>["plain","underlined"].includes(e.variant));ve(()=>{e.autoGrow||(T.value=+e.rows)});function F(){e.autoGrow&&D(()=>{if(!h.value||!p.value)return;const a=getComputedStyle(h.value),u=getComputedStyle(p.value.$el),l=parseFloat(a.getPropertyValue("--v-field-padding-top"))+parseFloat(a.getPropertyValue("--v-input-padding-top"))+parseFloat(a.getPropertyValue("--v-field-padding-bottom")),d=h.value.scrollHeight,R=parseFloat(a.lineHeight),M=Math.max(parseFloat(e.rows)*R+l,parseFloat(u.getPropertyValue("--v-input-control-height"))),z=parseFloat(e.maxRows)*R+l||1/0,f=Ye(d??0,M,z);T.value=Math.floor((f-l)/R),S.value=Le(f)})}ge(F),C(r,F),C(()=>e.rows,F),C(()=>e.maxRows,F),C(()=>e.density,F);let m;return C(h,a=>{a?(m=new ResizeObserver(F),m.observe(h.value)):m==null||m.disconnect()}),be(()=>{m==null||m.disconnect()}),Xe(()=>{const a=!!(t.counter||e.counter||e.counterValue),u=!!(a||t.details),[l,d]=je(g),{modelValue:R,...M}=Q.filterProps(e),z=ke(e);return o(Q,G({ref:y,modelValue:r.value,"onUpdate:modelValue":f=>r.value=f,class:["v-textarea v-text-field",{"v-textarea--prefixed":e.prefix,"v-textarea--suffixed":e.suffix,"v-text-field--prefixed":e.prefix,"v-text-field--suffixed":e.suffix,"v-textarea--auto-grow":e.autoGrow,"v-textarea--no-resize":e.noResize||e.autoGrow,"v-input--plain-underlined":O.value},e.class],style:e.style},l,M,{centerAffix:T.value===1&&!O.value,focused:n.value}),{...t,default:f=>{let{id:k,isDisabled:j,isDirty:K,isReadonly:de,isValid:ce}=f;return o($e,G({ref:p,style:{"--v-textarea-control-height":S.value},onClick:se,onMousedown:ne,"onClick:clear":ue,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},z,{id:k.value,active:oe.value||K.value,centerAffix:T.value===1&&!O.value,dirty:K.value||e.dirty,disabled:j.value,focused:n.value,error:ce.value===!1}),{...t,default:me=>{let{props:{class:L,...Y}}=me;return o(U,null,[e.prefix&&o("span",{class:"v-text-field__prefix"},[e.prefix]),_(o("textarea",G({ref:q,class:L,value:r.value,onInput:ie,autofocus:e.autofocus,readonly:de.value,disabled:j.value,placeholder:e.placeholder,rows:e.rows,name:e.name,onFocus:N,onBlur:x},Y,d),null),[[xe("intersect"),{handler:i},null,{once:!0}]]),e.autoGrow&&_(o("textarea",{class:[L,"v-textarea__sizer"],id:`${Y.id}-sizer`,"onUpdate:modelValue":fe=>r.value=fe,ref:h,readonly:!0,"aria-hidden":"true"},null),[[ye,r.value]]),e.suffix&&o("span",{class:"v-text-field__suffix"},[e.suffix])])}})},details:u?f=>{var k;return o(U,null,[(k=t.details)==null?void 0:k.call(t,f),a&&o(U,null,[o("span",null,null),o(Ae,{active:e.persistentCounter||n.value,value:w.value,max:I.value},t.counter)])])}:void 0})}),ze({},y,p,q)}}),le=he({name:"FSTextArea",components:{FSBaseField:Pe,FSCol:H},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:String,required:!1,default:null},rows:{type:Number,required:!1,default:1},autoGrow:{type:Boolean,required:!1,default:!0},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},messages:{type:Array,required:!1,default:null},clearable:{type:Boolean,required:!1,default:!0},editable:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(e){const{validateOn:s,getMessages:g}=Be(),{isMobileSized:b}=Ge(),{getColors:t}=He(),r=t(A.Error),n=t(A.Light),c=t(A.Dark),x=v(()=>{let i,y;if(!e.autoGrow){const p=b.value?34:38,S=b.value?14:16;e.rows>1?i=`${p+(e.rows-1)*S}px`:i=`${p}px`,y=`${e.rows*S}px`}return e.editable?{"--fs-text-area-cursor":"text","--fs-text-area-border-color":n.dark,"--fs-text-area-color":c.base,"--fs-text-area-active-border-color":c.dark,"--fs-text-area-error-border-color":r.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}:{"--fs-text-area-cursor":"default","--fs-text-area-border-color":n.base,"--fs-text-area-color":n.dark,"--fs-text-area-active-border-color":n.base,"--fs-text-area-height":i,"--fs-text-area-field-height":y}}),w=v(()=>{const i=["fs-text-area"];return e.autoGrow&&i.push("fs-text-area-auto-grow"),i}),I=v(()=>e.messages??g(e.modelValue,e.rules));return{validateOn:s,ColorEnum:A,messages:I,classes:w,style:x}}});function aa(e,s,g,b,t,r){const n=Fe("FSBaseField");return X(),J(n,{label:e.$props.label,description:e.$props.description,hideHeader:e.$props.hideHeader,required:e.$props.required,editable:e.$props.editable,messages:e.messages},{default:$(()=>[o(ea,G({class:["fs-text-area",e.classes],variant:"outlined",style:e.style,rows:e.$props.rows,persistentClear:!0,hideDetails:!0,noResize:!0,autoGrow:e.$props.autoGrow,readonly:!e.$props.editable,clearable:e.$props.clearable&&e.$props.editable&&!!e.$props.modelValue,rules:e.$props.rules,validateOn:e.validateOn,modelValue:e.$props.modelValue,"onUpdate:modelValue":s[1]||(s[1]=c=>e.$emit("update:modelValue",c))},e.$attrs),we({clear:$(()=>[o(H,{align:"center-center"},{default:$(()=>[e.$props.clearable&&e.$props.editable&&e.$props.modelValue?(X(),J(Ne,{key:0,icon:"mdi-close",variant:"icon",color:e.ColorEnum.Dark,onClick:s[0]||(s[0]=c=>e.$emit("update:modelValue",null))},null,8,["color"])):Te("",!0)]),_:1})]),_:2},[Se(e.$slots,(c,x)=>({name:x,fn:$(w=>[Ve(e.$slots,x,Ce(qe(w)))])}))]),1040,["style","class","rows","autoGrow","readonly","clearable","rules","validateOn","modelValue"])]),_:3},8,["label","description","hideHeader","required","editable","messages"])}const E=Ie(le,[["render",aa]]);le.__docgenInfo={displayName:"FSTextArea",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"rows",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"1"}},{name:"autoGrow",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"messages",type:{name:"string[]"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"clearable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"editable",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}}],events:[{name:"update:modelValue"}],slots:[{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSTextArea.vue"]};const ja={title:"Foundation/Shared/Input fields/TextArea",component:E,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},P={args:{args:{value1:null,value2:"Hello there",value3:`General Kenobi\r
You are a bold one!`}},render:(e,{argTypes:s})=>({components:{FSTextArea:E,FSCol:H},props:Object.keys(s),setup(){return{...e}},template:`
    <FSCol>
      <FSTextArea
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>`})},B={args:{args:{valid:!1,value1:"",value2:"",value3:"",rules:We}},render:(e,{argTypes:s})=>({components:{FSForm:Je,FSTextArea:E,FSCol:H,FSRow:Qe},props:Object.keys(s),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var W,Z,ee;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    args: {
      value1: null,
      value2: "Hello there",
      value3: "General Kenobi\\r\\nYou are a bold one!"
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSTextArea,
      FSCol
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSCol>
      <FSTextArea
        label="Text, auto grow"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Text, 2 rows"
        :autoGrow="false"
        :rows="2"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSTextArea
        label="Uneditable text, 1 row"
        description="Uneditable description"
        :editable="false"
        :autoGrow="false"
        :rows="1"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(ee=(Z=P.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: "",
      value2: "",
      value3: "",
      rules: TextRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSTextArea,
      FSCol,
      FSRow
    },
    props: Object.keys(argTypes),
    setup() {
      return {
        ...args
      };
    },
    template: \`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters"
          :rules="[args.rules.required(), args.rules.min(10)]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: max 10 characters"
          :rules="[args.rules.max(10)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSTextArea
          label="Rules: required & min 10 characters & at least one special & at least one uppercase & at least one lowercase & at least one digit"
          :rules="[args.rules.required(), args.rules.min(10), args.rules.special(), args.rules.uppercase(), args.rules.lowercase(), args.rules.digit()]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(re=(te=B.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Ka=["Variations","Rules"];export{B as Rules,P as Variations,Ka as __namedExportsOrder,ja as default};