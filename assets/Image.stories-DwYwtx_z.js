import{F as r}from"./FSImage-qkvcP0r6.js";import{F as o}from"./FSCol-ChYB2Oag.js";import{F as s}from"./FSRow-BTBqaZ3Z.js";import"./vue.esm-bundler-NVdFPFZB.js";import"./FSImageUI-CXTsXdBJ.js";import"./FSLoader-DRppy7ch.js";import"./useBreakpoints-Trboya0O.js";import"./useColors-CPKx0SIo.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-CHZNEzUD.js";import"./css-BA19cdxW.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./color-Cx3XlwVF.js";import"./dimensions-BuDdBtmf.js";import"./elevation-DyTGrbk9.js";import"./locale-MGWjZjXD.js";import"./proxiedModel-4bJ1saXA.js";import"./useRender-C5CA_XPC.js";import"./VImg-CF0d7Fd2.js";import"./rounded-BE8u9DAQ.js";import"./transition-Dqm8buww.js";import"./index-D_7bL_IH.js";import"./useImages-CuuQm3J3.js";import"./composableFactory-C8uMcJZX.js";import"./serviceFactory-DI_gyWBF.js";import"./eventQueue-D85hWBFd.js";import"./uuid-DTaye2KM.js";import"./base-CmdGny12.js";import"./useAppAuthToken-CxB5IoRP.js";const P={title:"Shared/Components/Image",component:r,tags:["autodocs"],argTypes:{onClick:{action:"clicked"}}},n={args:{},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="80px"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="100%"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})},t={args:{},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          imageId="1"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="80px"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="100%"
        />
        <FSImage
          imageId="1"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})},i={args:{args:{imgBase64:"iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="}},render:(e,{argTypes:a})=>({components:{FSImage:r,FSCol:o,FSRow:s},props:Object.keys(a),setup(){return{...e}},template:`
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="80px"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="100%"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>`})};var p,g,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSImage,
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
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="80px"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          height="80px"
          width="100%"
        />
        <FSImage
          source="https://products.dative-gpi.io/api/foundation/shared/v1/images/8da71ca6-3e31-47b2-93e6-a7a026ea062a/raw"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(m=(g=n.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var d,c,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSImage,
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
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          imageId="1"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="80px"
        />
        <FSImage
          imageId="1"
          height="80px"
          width="100%"
        />
        <FSImage
          imageId="1"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(h=(c=t.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var l,S,u;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    args: {
      imgBase64: "iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSImage,
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
    <div style="display: flex; flex-direction: column; gap: 10px;">
      <FSCol>
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          :aspectRatio="1"
          :height="80"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="80px"
        />
        <FSImage
          :imageB64="args.imgBase64"
          height="80px"
          width="100%"
        />
        <FSImage
          :imageB64="args.imgBase64"
          :cover="false"
          height="80px"
          width="100%"
        />
      </FSCol>
    </div>\`
  })
}`,...(u=(S=i.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const _=["Source","ImageId","ImageB64"];export{i as ImageB64,t as ImageId,n as Source,_ as __namedExportsOrder,P as default};
