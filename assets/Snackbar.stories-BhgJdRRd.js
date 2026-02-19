import{e as r,s as q,w as E,o as Fe,c as R,q as c,m as I,n as he,z as ye,a as Be,g as Ve,d as Ce,B as v,C as Te,D as d,X as xe,J as F,P as O,H as $,K as W,L as z}from"./vue.esm-bundler-D5n7z5qz.js";import{a as we,b as Le}from"./properties-Qw-O9fbT.js";import{F as u}from"./FSButton-BEP9Z3FS.js";import{F as ie}from"./FSIcon-DFkRD0af.js";import{_ as ce}from"./FSSpan-BN7wkmby.js";import{_ as ue}from"./FSRow-DIk8KFbG.js";import{S as Pe}from"./FSCard-D2UHbOmr.js";import{C as $e,u as qe}from"./useColors-COEXNh00.js";import{s as Y}from"./css-CxcvJboa.js";import{_ as Re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as H,m as Me}from"./VOverlay-BApTxsTF.js";import{f as De}from"./forwardRefs-C-GTDzx5.js";import{V as Ne,u as Ue}from"./layout-bCTvkfRV.js";import{m as Ae,V as _e}from"./VProgressLinear-CI-Q4csR.js";import{u as Ee,m as Ie}from"./position-DfaaINa4.js";import{u as Oe,a as We}from"./proxiedModel-Cv3qT1cZ.js";import{u as ze,m as Ye}from"./rounded-BSNeeq4o.js";import{u as He}from"./scopeId-DI6aT8IG.js";import{A as Ke,r as je,p as Ge,o as Je,C as Xe}from"./theme-BcqfMidt.js";import{u as Qe,m as Ze,g as ea}from"./variant-CRuOwF35.js";import{V as aa}from"./VDefaultsProvider-CPXI0q_G.js";import{g as na,u as ta}from"./useRender-Dce1Ng4u.js";import{F as T}from"./FSCol-D_lbFmZy.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useBreakpoints-CEzKC_o8.js";import"./useSlots-CoecqEnp.js";import"./VProgressCircular-BsmUxqlD.js";import"./color-CUHqxR_J.js";import"./resizeObserver-CpF7iUII.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./VIcon-C3cN4B51.js";import"./icons-DbptYgqQ.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./easing-DY7PVvcf.js";import"./anchor-tlySGI4g.js";import"./dimensions-D_nx6Jbk.js";import"./display-DvHDH61C.js";import"./lazy-Bqido2cx.js";import"./locale-n4v42L7l.js";import"./router-R_WRJyUs.js";import"./transition-gfLL8RoD.js";function oa(e){const n=q(e());let a=-1;function t(){clearInterval(a)}function s(){t(),he(()=>n.value=e())}function p(i){const x=i?getComputedStyle(i):{transitionDuration:.2},f=parseFloat(x.transitionDuration)*1e3||200;if(t(),n.value<=0)return;const w=performance.now();a=window.setInterval(()=>{const L=performance.now()-w+f;n.value=Math.max(e()-L,0),n.value<=0&&t()},f)}return ye(t),{clear:t,time:n,start:p,reset:s}}const ra=Ge({multiLine:Boolean,text:String,timer:[Boolean,String],timeout:{type:[Number,String],default:5e3},vertical:Boolean,...Ae({location:"bottom"}),...Ie(),...Ye(),...Ze(),...Xe(),...Je(Me({transition:"v-snackbar-transition"}),["persistent","noClickAnimation","scrim","scrollStrategy"])},"VSnackbar"),me=na()({name:"VSnackbar",props:ra(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const t=Oe(e,"modelValue"),{positionClasses:s}=Ee(e),{scopeId:p}=He(),{themeClasses:i}=Ke(e),{colorClasses:x,colorStyles:f,variantClasses:w}=Qe(e),{roundedClasses:L}=ze(e),b=oa(()=>Number(e.timeout)),M=r(),D=r(),k=q(!1),N=q(0),U=r(),pe=Be(Ne,void 0);We(()=>!!pe,()=>{const o=Ue();Ve(()=>{U.value=o.mainStyles.value})}),E(t,S),E(()=>e.timeout,S),Fe(()=>{t.value&&S()});let P=-1;function S(){b.reset(),window.clearTimeout(P);const o=Number(e.timeout);if(!t.value||o===-1)return;const m=je(D.value);b.start(m),P=window.setTimeout(()=>{t.value=!1},o)}function fe(){b.reset(),window.clearTimeout(P)}function be(){k.value=!0,fe()}function A(){k.value=!1,S()}function ke(o){N.value=o.touches[0].clientY}function Se(o){Math.abs(N.value-o.changedTouches[0].clientY)>50&&(t.value=!1)}function ge(){k.value&&A()}const ve=R(()=>e.location.split(" ").reduce((o,m)=>(o[`v-snackbar--${m}`]=!0,o),{}));return ta(()=>{const o=H.filterProps(e),m=!!(a.default||a.text||e.text);return c(H,I({ref:M,class:["v-snackbar",{"v-snackbar--active":t.value,"v-snackbar--multi-line":e.multiLine&&!e.vertical,"v-snackbar--timer":!!e.timer,"v-snackbar--vertical":e.vertical},ve.value,s.value,e.class],style:[U.value,e.style]},o,{modelValue:t.value,"onUpdate:modelValue":g=>t.value=g,contentProps:I({class:["v-snackbar__wrapper",i.value,x.value,L.value,w.value],style:[f.value],onPointerenter:be,onPointerleave:A},o.contentProps),persistent:!0,noClickAnimation:!0,scrim:!1,scrollStrategy:"none",_disableGlobalStack:!0,onTouchstartPassive:ke,onTouchend:Se,onAfterLeave:ge},p),{default:()=>{var g,_;return[ea(!1,"v-snackbar"),e.timer&&!k.value&&c("div",{key:"timer",class:"v-snackbar__timer"},[c(_e,{ref:D,color:typeof e.timer=="string"?e.timer:"info",max:e.timeout,"model-value":b.time.value},null)]),m&&c("div",{key:"content",class:"v-snackbar__content",role:"status","aria-live":"polite"},[((g=a.text)==null?void 0:g.call(a))??e.text,(_=a.default)==null?void 0:_.call(a)]),a.actions&&c(aa,{defaults:{VBtn:{variant:"text",ripple:!1,slim:!0}}},{default:()=>[c("div",{class:"v-snackbar__actions"},[a.actions({isActive:t})])]})]},activator:a.activator})}),De({},M)}}),de=Ce({name:"FSSnackbar",components:{FSButton:u,FSIcon:ie,FSSpan:ce,FSRow:ue},props:{modelValue:{type:Boolean,required:!1,default:!1},text:{type:String,required:!1,default:null},icon:{type:String,required:!1,default:null},color:{type:String,required:!1,default:$e.Dark},timeout:{type:Number,required:!1,default:5e3},location:{type:String,required:!1,default:"bottom"},multiLine:{type:Boolean,required:!1,default:!1},closeButton:{type:Boolean,required:!1,default:!1},variant:{type:String,required:!1,default:Pe.Full},borderRadius:{type:[String,Number],required:!1,default:"4px"}},emits:["update:modelValue"],setup(e){const{getColors:n}=qe(),a=R(()=>n(e.color));return{style:R(()=>{switch(e.variant){case"standard":return{"--fs-snackbar-border-radius":Y(e.borderRadius),"--fs-snackbar-background-color":a.value.light,"--fs-snackbar-color":a.value.dark};default:return{"--fs-snackbar-border-radius":Y(e.borderRadius),"--fs-snackbar-background-color":a.value.base,"--fs-snackbar-color":a.value.light}}})}}});function sa(e,n,a,t,s,p){return F(),v(me,{class:"fs-snackbar",modelValue:e.$props.modelValue,"onUpdate:modelValue":n[1]||(n[1]=i=>e.$emit("update:modelValue",i)),"multi-line":e.$props.multiLine,location:e.$props.location,timeout:e.$props.timeout,style:xe(e.style)},Te({default:d(()=>[O(e.$slots,"default",{},()=>[c(ue,{align:"center-left",wrap:!1,gap:"12px"},{default:d(()=>[e.$props.icon?(F(),v(ie,{key:0},{default:d(()=>[W(z(e.$props.icon),1)]),_:1})):$("",!0),e.$props.text?(F(),v(ce,{key:1,ellipsis:!e.$props.multiLine},{default:d(()=>[W(z(e.$props.text),1)]),_:1},8,["ellipsis"])):$("",!0)]),_:1})])]),_:2},[e.$slots.actions||e.$props.closeButton?{name:"actions",fn:d(()=>[O(e.$slots,"actions",{},()=>[e.$props.closeButton?(F(),v(u,{key:0,icon:"mdi-close",variant:"icon",onClick:n[0]||(n[0]=i=>e.$emit("update:modelValue",!1))})):$("",!0)])]),key:"0"}:void 0]),1032,["modelValue","multi-line","location","timeout","style"])}const l=Re(de,[["render",sa]]);de.__docgenInfo={displayName:"FSSnackbar",exportName:"default",description:"",tags:{},props:[{name:"modelValue",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"text",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"icon",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Dark"}},{name:"timeout",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"5000"}},{name:"location",values:["top","bottom","left","right","top left","top right","bottom left","bottom right"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"bottom"'}},{name:"multiLine",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"closeButton",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"variant",type:{name:"SnackbarVariant"},required:!1,defaultValue:{func:!1,value:"SnackbarVariants.Full"}},{name:"borderRadius",type:{name:"string|number"},required:!1,defaultValue:{func:!1,value:'"4px"'}}],events:[{name:"update:modelValue"}],slots:[{name:"default"},{name:"actions"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSSnackbar.vue"]};const Xa={title:"Foundation/Shared/Snackbar",component:l,tags:["autodocs"],argTypes:{...Le([me],l),...we(l)}},h={render:e=>({components:{FSSnackbar:l},setup(){return{args:e}},template:`
      <FSSnackbar
        v-model="args.modelValue"
        v-bind="args"
      />
    `}),args:{modelValue:!0,text:"This is a snackbar message",icon:"mdi-information",closeButton:!0}},y={render:e=>({components:{FSSnackbar:l,FSButton:u,FSCol:T},setup(){const n=r(!1),a=r(!1),t=r(!1),s=r(!1);return{args:e,snackbar1:n,snackbar2:a,snackbar3:t,snackbar4:s}},template:`
      <FSCol gap="16px">
        <FSButton
          label="Success"
          color="success"
          @click="snackbar1 = true"
        />
        <FSButton
          label="Error"
          color="error"
          @click="snackbar2 = true"
        />
        <FSButton
          label="Warning"
          color="warning"
          @click="snackbar3 = true"
        />
        <FSButton
          label="Standard variant"
          color="primary"
          @click="snackbar4 = true"
        />

        <FSSnackbar
          v-model="snackbar1"
          v-bind="args"
          text="Operation completed successfully!"
          icon="mdi-check-circle"
          color="success"
        />
        <FSSnackbar
          v-model="snackbar2"
          v-bind="args"
          text="An error occurred. Please try again."
          icon="mdi-alert-circle"
          color="error"
        />
        <FSSnackbar
          v-model="snackbar3"
          v-bind="args"
          text="Warning: This action cannot be undone."
          icon="mdi-alert"
          color="warning"
        />
        <FSSnackbar
          v-model="snackbar4"
          v-bind="args"
          text="This is an informational message."
          icon="mdi-information"
          color="primary"
          variant="standard"
        />
      </FSCol>
    `}),args:{closeButton:!0,timeout:5e3}},B={render:e=>({components:{FSSnackbar:l,FSButton:u,FSCol:T},setup(){const n=r(!1),a=r(!1),t=r(!1),s=r(!1);return{args:e,snackbarTop:n,snackbarBottom:a,snackbarTopRight:t,snackbarBottomLeft:s}},template:`
      <FSCol gap="16px">
        <FSButton label="Top" @click="snackbarTop = true" />
        <FSButton label="Bottom" @click="snackbarBottom = true" />
        <FSButton label="Top Right" @click="snackbarTopRight = true" />
        <FSButton label="Bottom Left" @click="snackbarBottomLeft = true" />

        <FSSnackbar
          v-model="snackbarTop"
          v-bind="args"
          text="Message at top"
          location="top"
        />
        <FSSnackbar
          v-model="snackbarBottom"
          v-bind="args"
          text="Message at bottom"
          location="bottom"
        />
        <FSSnackbar
          v-model="snackbarTopRight"
          v-bind="args"
          text="Message at top right"
          location="top right"
        />
        <FSSnackbar
          v-model="snackbarBottomLeft"
          v-bind="args"
          text="Message at bottom left"
          location="bottom left"
        />
      </FSCol>
    `}),args:{closeButton:!0,timeout:3e3}},V={render:e=>({components:{FSSnackbar:l,FSButton:u,FSCol:T},setup(){const n=r(!1);return{args:e,snackbar:n,handleUndo:()=>{alert("Undo clicked!"),n.value=!1}}},template:`
      <FSCol gap="16px">
        <FSButton
          label="Show with action"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        >
          <template #actions>
            <FSButton
              label="UNDO"
              variant="standard"
              @click="handleUndo"
            />
          </template>
        </FSSnackbar>
      </FSCol>
    `}),args:{text:"Item deleted",icon:"mdi-delete",color:"error",timeout:1e4}},C={render:e=>({components:{FSSnackbar:l,FSButton:u,FSCol:T},setup(){const n=r(!1);return{args:e,snackbar:n}},template:`
      <FSCol gap="16px">
        <FSButton
          label="Show multi-line"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        />
      </FSCol>
    `}),args:{text:"This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly.",icon:"mdi-information",multiLine:!0,closeButton:!0,timeout:7e3}};var K,j,G;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSnackbar
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSSnackbar
        v-model="args.modelValue"
        v-bind="args"
      />
    \`
  }),
  args: {
    modelValue: true,
    text: "This is a snackbar message",
    icon: "mdi-information",
    closeButton: true
  }
}`,...(G=(j=h.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var J,X,Q;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSnackbar,
      FSButton,
      FSCol
    },
    setup() {
      const snackbar1 = ref(false);
      const snackbar2 = ref(false);
      const snackbar3 = ref(false);
      const snackbar4 = ref(false);
      return {
        args,
        snackbar1,
        snackbar2,
        snackbar3,
        snackbar4
      };
    },
    template: \`
      <FSCol gap="16px">
        <FSButton
          label="Success"
          color="success"
          @click="snackbar1 = true"
        />
        <FSButton
          label="Error"
          color="error"
          @click="snackbar2 = true"
        />
        <FSButton
          label="Warning"
          color="warning"
          @click="snackbar3 = true"
        />
        <FSButton
          label="Standard variant"
          color="primary"
          @click="snackbar4 = true"
        />

        <FSSnackbar
          v-model="snackbar1"
          v-bind="args"
          text="Operation completed successfully!"
          icon="mdi-check-circle"
          color="success"
        />
        <FSSnackbar
          v-model="snackbar2"
          v-bind="args"
          text="An error occurred. Please try again."
          icon="mdi-alert-circle"
          color="error"
        />
        <FSSnackbar
          v-model="snackbar3"
          v-bind="args"
          text="Warning: This action cannot be undone."
          icon="mdi-alert"
          color="warning"
        />
        <FSSnackbar
          v-model="snackbar4"
          v-bind="args"
          text="This is an informational message."
          icon="mdi-information"
          color="primary"
          variant="standard"
        />
      </FSCol>
    \`
  }),
  args: {
    closeButton: true,
    timeout: 5000
  }
}`,...(Q=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Q.source}}};var Z,ee,ae;B.parameters={...B.parameters,docs:{...(Z=B.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSnackbar,
      FSButton,
      FSCol
    },
    setup() {
      const snackbarTop = ref(false);
      const snackbarBottom = ref(false);
      const snackbarTopRight = ref(false);
      const snackbarBottomLeft = ref(false);
      return {
        args,
        snackbarTop,
        snackbarBottom,
        snackbarTopRight,
        snackbarBottomLeft
      };
    },
    template: \`
      <FSCol gap="16px">
        <FSButton label="Top" @click="snackbarTop = true" />
        <FSButton label="Bottom" @click="snackbarBottom = true" />
        <FSButton label="Top Right" @click="snackbarTopRight = true" />
        <FSButton label="Bottom Left" @click="snackbarBottomLeft = true" />

        <FSSnackbar
          v-model="snackbarTop"
          v-bind="args"
          text="Message at top"
          location="top"
        />
        <FSSnackbar
          v-model="snackbarBottom"
          v-bind="args"
          text="Message at bottom"
          location="bottom"
        />
        <FSSnackbar
          v-model="snackbarTopRight"
          v-bind="args"
          text="Message at top right"
          location="top right"
        />
        <FSSnackbar
          v-model="snackbarBottomLeft"
          v-bind="args"
          text="Message at bottom left"
          location="bottom left"
        />
      </FSCol>
    \`
  }),
  args: {
    closeButton: true,
    timeout: 3000
  }
}`,...(ae=(ee=B.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,te,oe;V.parameters={...V.parameters,docs:{...(ne=V.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSnackbar,
      FSButton,
      FSCol
    },
    setup() {
      const snackbar = ref(false);
      const handleUndo = () => {
        alert('Undo clicked!');
        snackbar.value = false;
      };
      return {
        args,
        snackbar,
        handleUndo
      };
    },
    template: \`
      <FSCol gap="16px">
        <FSButton
          label="Show with action"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        >
          <template #actions>
            <FSButton
              label="UNDO"
              variant="standard"
              @click="handleUndo"
            />
          </template>
        </FSSnackbar>
      </FSCol>
    \`
  }),
  args: {
    text: "Item deleted",
    icon: "mdi-delete",
    color: "error",
    timeout: 10000
  }
}`,...(oe=(te=V.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var re,se,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSnackbar,
      FSButton,
      FSCol
    },
    setup() {
      const snackbar = ref(false);
      return {
        args,
        snackbar
      };
    },
    template: \`
      <FSCol gap="16px">
        <FSButton
          label="Show multi-line"
          @click="snackbar = true"
        />

        <FSSnackbar
          v-model="snackbar"
          v-bind="args"
        />
      </FSCol>
    \`
  }),
  args: {
    text: "This is a longer message that might need multiple lines to display all the information properly. This is a longer message that might need multiple lines to display all the information properly.",
    icon: "mdi-information",
    multiLine: true,
    closeButton: true,
    timeout: 7000
  }
}`,...(le=(se=C.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Qa=["Default","Variations","Positions","WithCustomActions","MultiLine"];export{h as Default,C as MultiLine,B as Positions,y as Variations,V as WithCustomActions,Qa as __namedExportsOrder,Xa as default};
