import{F as n}from"./FSWrapGroup-Dayjp45z.js";import{_ as d}from"./FSRow-C-b-hpWa.js";import"./vue.esm-bundler-PONd4AmC.js";import"./uuid-DTaye2KM.js";import"./useSlots-nyIcwo6G.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-B4B7QRhR.js";import"./group-QLjCrFp5.js";import"./proxiedModel-BMHfYIia.js";import"./index-COu1mqSp.js";import"./color-CQ7P2KsY.js";import"./display-D1WOGNJY.js";import"./locale-CoLhg8Wl.js";import"./VIcon-shEmQARK.js";import"./resizeObserver-BAwzmH4Y.js";const _={title:"Foundation/Shared/Global/Containers/WrapGroup",component:n,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"}}},e={render:o=>({components:{FSWrapGroup:n,FSRow:d},setup(){return{args:o}},template:`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    `}),args:{width:"600px",height:"fit-content"}};var t,i,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: args => ({
    components: {
      FSWrapGroup,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div style="display: flex; flex-direction: column; border: 1px dotted black;">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div v-for="(item, index) in 25" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;">
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
      <div style="margin:40px" />
      <div style="display: flex; flex-direction: column; border: 1px dotted black; width: 50%">
        <FSWrapGroup
          :width="args.width"
          :height="args.height"
        >
          <FSRow :width="args.height" style="background-color: palegreen; padding: 4px; flex-wrap: wrap;">
            <div 
              v-for="(item, index) in 26" :key="index" style="display: flex; width: 62px; height: 32px; padding: 4px; background-color: blanchedalmond;"
              style="flex: 1 0 120px;"
            >
              item {{ index + 1 }}
            </div>
          </FSRow>
        </FSWrapGroup>
      </div>
    \`
  }),
  args: {
    width: '600px',
    height: 'fit-content'
  }
}`,...(r=(i=e.parameters)==null?void 0:i.docs)==null?void 0:r.source}}};const D=["Default"];export{e as Default,D as __namedExportsOrder,_ as default};
