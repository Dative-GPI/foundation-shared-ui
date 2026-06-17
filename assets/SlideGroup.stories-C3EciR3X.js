import{_ as e}from"./FSSlideGroup-5yThapiu.js";import{F as d}from"./FSRow-C8aYwBu-.js";import"./vue.esm-bundler-C5-CUMHT.js";import"./uuid-DTaye2KM.js";import"./FSButtonNextIcon-TA3Aju3l.js";import"./FSButton-DohpVEzP.js";import"./FSRouterLink-CMTOFxCD.js";import"./vue-router-Bg3goQnP.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FSText-C8rmUTxK.js";import"./useColors-BAnxS_-e.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CB6As9Cd.js";import"./useBreakpoints-pPMhsL5T.js";import"./useSlots-ol4Nk6ew.js";import"./FSSpan-D6aG51_c.js";import"./FSIcon-CNpmwcOd.js";import"./css-DSFbdPon.js";import"./VIcon-IlEzlDWp.js";import"./color-D7ZCcSxD.js";import"./useRender-_COxrB9K.js";import"./icons-CucLNLjN.js";import"./size-DwliOKuO.js";import"./tag-enhOFdJJ.js";import"./FSCard-DYe1QD8j.js";import"./VProgressCircular-D7Gk7a1O.js";import"./intersectionObserver-D1RZdbEq.js";import"./resizeObserver-hE1ulDL8.js";import"./FSCol-DedFW0nl.js";import"./VSlideGroup-Bd_pvRRU.js";import"./index-pS3mXfMR.js";import"./display-IUfV935l.js";import"./goto-Ba_J3Vzv.js";import"./locale-BNkeanE6.js";import"./proxiedModel-CV-HTW34.js";import"./group-B4VRq_l_.js";import"./VSlideGroupItem-BppNUl7y.js";const N={title:"Shared/Components/Global/Containers/SlideGroup",component:e,tags:["autodocs"],argTypes:{}},t={render:p=>({components:{FSSlideGroup:e,FSRow:d},setup(){return{args:p}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var o,i,r;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSSlideGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSSlideGroup 
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px;">
            <div v-for="(item, index) in 10" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSSlideGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(r=(i=t.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,N as default};
