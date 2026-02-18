import{e as a,o as M,j as b,f as R,w,c as B,d as I,t as V}from"./vue.esm-bundler-B9lxvfDw.js";import{F as g}from"./FSCol-BwxAijHz.js";import{F as _}from"./FSText-DZJhh1AD.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-B5aYgogF.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Bz5xEpqh.js";import"./useSlots-BioZKQqg.js";const z="(prefers-reduced-motion: reduce)";function L(){const r=a(!1);let e=null;const t=n=>{r.value=n.matches};return M(()=>{var n;e=((n=window.matchMedia)==null?void 0:n.call(window,z))||null,r.value=(e==null?void 0:e.matches)||!1,e!=null&&e.addEventListener&&e.addEventListener("change",t)}),b(()=>{e!=null&&e.removeEventListener&&e.removeEventListener("change",t)}),{prefersReducedMotion:r}}const P=r=>{let e=null;const t=a(!1),n=()=>{if(t.value)return;t.value=!0;const s=()=>{t.value&&(r(),e=requestAnimationFrame(s))};e=requestAnimationFrame(s)},i=()=>{t.value=!1,e!==null&&(cancelAnimationFrame(e),e=null)};return b(()=>{i()}),{start:n,stop:i,isActive:R(t)}};function k(r,e=.3){const t=a(null);let n=null;const i=o=>{s(),n=new IntersectionObserver(([l])=>{!!(l!=null&&l.isIntersecting)&&t.value&&t.value()},{threshold:e}),n.observe(o)},s=()=>{n==null||n.disconnect(),n=null};return w(r,o=>{console.log("Target changed:",o),o&&o.$el&&i(o.$el)},{immediate:!0}),b(s),{onVisible:t}}function E(r,e=a(800),t=a(2),n=a(!1),i=a(null),s=o=>1-Math.pow(1-o,3)){const{prefersReducedMotion:o}=L(),{onVisible:l}=k(i),u=a(0),p=a(!1),h=a(0),d=a(0),f=a(0),N=B(()=>{const c=String(u.value);return t.value>0?c.padStart(t.value,"0"):c}),{start:U,stop:A}=P(()=>{const c=performance.now()-h.value,S=Math.min(1,c/e.value);if(S>=1){u.value=f.value,p.value=!1,A();return}const D=s(S);u.value=Math.round(d.value+(f.value-d.value)*D)}),x=()=>{if(o.value){u.value=r.value,p.value=!1;return}d.value=u.value,f.value=r.value,h.value=performance.now(),p.value=!0,U()};return w(r,()=>{x()},{immediate:!0}),l.value=()=>{n.value&&!p.value&&(u.value=d.value,x())},{displayText:N}}const ee={title:"Animation/useCountUp",tags:["autodocs"],argTypes:{value:{control:"number",description:"Target number to count up to"},duration:{control:"number",description:"Animation duration in milliseconds"},pad:{control:"number",description:"Number of digits to pad with zeros"},startOnVisible:{control:"boolean",description:"Start animation when element becomes visible"}}},$=I({name:"CountUpDemo",props:{value:{type:Number,required:!0},duration:{type:Number,required:!0},pad:{type:Number,required:!0},startOnVisible:{type:Boolean,required:!0}},setup(r){const{value:e,duration:t,pad:n,startOnVisible:i}=V(r),s=a(null),{displayText:o}=E(e,t,n,i,s);return{displayText:o,value:e,element:s}},template:`
    <FSCol style="padding: 16px">
      <div style="margin-bottom: 8px; color: #666" ref="element">
        target: {{ value }}
      </div>
      <div style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700">
        {{ displayText }}
      </div>
    </FSCol>
  `,components:{FSCol:g}}),m={args:{value:1234,duration:800,pad:2,startOnVisible:!1},render:(r,{argTypes:e})=>({components:{CountUpDemo:$,FSCol:g},setup(){return{args:r}},template:`
      <FSCol>
        <CountUpDemo v-bind="args" />
      </FSCol>
    `})},v={args:{value:15,duration:1200,pad:2,startOnVisible:!0},render:r=>({components:{FSCol:g,FSText:_},props:{value:{type:Number,required:!0},duration:{type:Number,required:!0},pad:{type:Number,required:!0},startOnVisible:{type:Boolean,required:!0}},setup(e){const{value:t,duration:n,pad:i,startOnVisible:s}=V(e),o=a(null),{displayText:l}=E(t,n,i,s,o);return{displayText:l,value:t,element:o}},template:`
      <FSCol style="padding: 16px">
        <div style="color: #666; margin-bottom: 16px">
          Scroll down to see the animation start when the number becomes visible
        </div>
        <div style="height: 80vh"></div>
        <FSText
          ref="element"
          font="text-h1"
          style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700; padding: 32px; background: #f5f5f5; border-radius: 8px; text-align: center"
        >
          {{ displayText }}
        </FSText>
        <div style="height: 40vh"></div>
      </FSCol>
    `})};var y,F,C;m.parameters={...m.parameters,docs:{...(y=m.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    value: 1234,
    duration: 800,
    pad: 2,
    startOnVisible: false
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      CountUpDemo,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSCol>
        <CountUpDemo v-bind="args" />
      </FSCol>
    \`
  })
}`,...(C=(F=m.parameters)==null?void 0:F.docs)==null?void 0:C.source}}};var T,O,q;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    value: 15,
    duration: 1200,
    pad: 2,
    startOnVisible: true
  },
  render: args => ({
    components: {
      FSCol,
      FSText
    },
    props: {
      value: {
        type: Number,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      pad: {
        type: Number,
        required: true
      },
      startOnVisible: {
        type: Boolean,
        required: true
      }
    },
    setup(props) {
      const {
        value,
        duration,
        pad,
        startOnVisible
      } = toRefs(props);
      const element = ref<ComponentPublicInstance | null>(null);
      const {
        displayText
      } = useCountUp(value, duration, pad, startOnVisible, element);
      return {
        displayText,
        value,
        element
      };
    },
    template: \`
      <FSCol style="padding: 16px">
        <div style="color: #666; margin-bottom: 16px">
          Scroll down to see the animation start when the number becomes visible
        </div>
        <div style="height: 80vh"></div>
        <FSText
          ref="element"
          font="text-h1"
          style="font-variant-numeric: tabular-nums; font-size: 48px; font-weight: 700; padding: 32px; background: #f5f5f5; border-radius: 8px; text-align: center"
        >
          {{ displayText }}
        </FSText>
        <div style="height: 40vh"></div>
      </FSCol>
    \`
  })
}`,...(q=(O=v.parameters)==null?void 0:O.docs)==null?void 0:q.source}}};const te=["Default","StartOnVisible"];export{m as Default,v as StartOnVisible,te as __namedExportsOrder,ee as default};
