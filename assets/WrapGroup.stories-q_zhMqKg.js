import{F as n}from"./FSWrapGroup-doTNURkF.js";import{_ as d}from"./FSRow-udQVJR1p.js";import"./vue.esm-bundler-CqZ6aK3I.js";import"./uuid-DTaye2KM.js";import"./useSlots-BgbXyH5p.js";import"./useColors-BIkRBR7C.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";import"./theme-CCooKRqg.js";import"./css-BZjDzSZ1.js";import"./useBreakpoints-DMrtgY61.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSlideGroupItem-BXZ5gf7q.js";import"./group-1sntWZNj.js";import"./proxiedModel-BirLikdP.js";import"./index-BNfVP6r5.js";import"./color-6mal3hP4.js";import"./display-Cs3Y1ygD.js";import"./locale-BJmdjC_5.js";import"./VIcon-beNtbbqt.js";import"./resizeObserver-C7qOORSR.js";const _={title:"Foundation/Shared/Global/Containers/WrapGroup",component:n,tags:["autodocs"],argTypes:{width:{control:"text"},height:{control:"text"}}},e={render:o=>({components:{FSWrapGroup:n,FSRow:d},setup(){return{args:o}},template:`
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
