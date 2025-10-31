import{_ as n}from"./FSSpan-DkNsO5wd.js";import{F}from"./FSText-B2RNQvtL.js";import{F as d}from"./FSCol-DVEaUPKl.js";import"./vue.esm-bundler-CC_jVOJ5.js";import"./useBreakpoints-BMcJFLA8.js";import"./useSlots-C8jkAuOW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./useColors-BXuuHMxE.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-Bp81IclV.js";import"./css-DTGEi_Ca.js";const T={title:"Foundation/Shared/Global/Texts",component:n,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},t={render:()=>({components:{FSSpan:n,FSCol:d,FSText:F},template:`
      <FSCol>
        <FSSpan font="text-h1"> text-h1</FSSpan>
        <FSSpan font="text-h2"> text-h2 </FSSpan>
        <FSSpan font="text-h3"> text-h3 </FSSpan>
        <FSSpan font="text-h4"> text-h4 </FSSpan>
        <FSSpan font="text-body"> text-body </FSSpan>
        <FSSpan font="text-button"> text-button </FSSpan>
        <FSSpan font="text-overline"> text-overline </FSSpan>
        <FSCol width="50px">
          <FSSpan font="text-h3" 
          wordBreak="break-word"
          :ellipsis="false"
          > 
            longgg text Span
          </FSSpan>
        </FSCol>
        <FSCol width="50px">
          <FSText font="text-body"
          wordBreak="break-word"
          :ellipsis="false"
          >
            long textttttt Text
          </FSText>
        </FSCol>
      </FSCol>`})},e={render:()=>({components:{FSSpan:n,FSCol:d},template:`
      <FSCol>
        <pre>&lt;FSSpan font="text-body"&gt;
  Jumped a line
  Again Tabulated   3 Spaces
&lt;/FSSpan&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body">
          Jumped a line
          Again Tabulated   3 Spaces
        </FSSpan>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <pre>&lt;FSSpan font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" /&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body" v-text="'\\r\\nJumped a line\\r\\nAgain\\tTabulated   3 Spaces'" />
      </FSCol>`})};var o,a,S;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSpan,
      FSCol,
      FSText
    },
    template: \`
      <FSCol>
        <FSSpan font="text-h1"> text-h1</FSSpan>
        <FSSpan font="text-h2"> text-h2 </FSSpan>
        <FSSpan font="text-h3"> text-h3 </FSSpan>
        <FSSpan font="text-h4"> text-h4 </FSSpan>
        <FSSpan font="text-body"> text-body </FSSpan>
        <FSSpan font="text-button"> text-button </FSSpan>
        <FSSpan font="text-overline"> text-overline </FSSpan>
        <FSCol width="50px">
          <FSSpan font="text-h3" 
          wordBreak="break-word"
          :ellipsis="false"
          > 
            longgg text Span
          </FSSpan>
        </FSCol>
        <FSCol width="50px">
          <FSText font="text-body"
          wordBreak="break-word"
          :ellipsis="false"
          >
            long textttttt Text
          </FSText>
        </FSCol>
      </FSCol>\`
  })
}`,...(S=(a=t.parameters)==null?void 0:a.docs)==null?void 0:S.source}}};var p,r,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSSpan,
      FSCol
    },
    template: \`
      <FSCol>
        <pre>&lt;FSSpan font="text-body"&gt;
  Jumped a line
  Again Tabulated   3 Spaces
&lt;/FSSpan&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body">
          Jumped a line
          Again Tabulated   3 Spaces
        </FSSpan>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <pre>&lt;FSSpan font="text-body" v-text="'\\\\r\\\\nJumped a line\\\\r\\\\nAgain\\\\tTabulated   3 Spaces'" /&gt;</pre>
        <FSSpan style="border: 2px dotted black" font="text-body" v-text="'\\\\r\\\\nJumped a line\\\\r\\\\nAgain\\\\tTabulated   3 Spaces'" />
      </FSCol>\`
  })
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const k=["AllFonts","VTextDirective"];export{t as AllFonts,e as VTextDirective,k as __namedExportsOrder,T as default};
