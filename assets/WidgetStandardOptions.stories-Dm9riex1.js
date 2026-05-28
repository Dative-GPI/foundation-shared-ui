import{r as v,j as B,ac as m,Y as x,P as S,p as n,V as i}from"./vue.esm-bundler-DR0_aU9U.js";import{_ as s}from"./FSRow-C8VtPvPz.js";import y from"./FSNumberField-CgKAjoME.js";import H from"./FSSwitch-DiXJeC6s.js";import{_ as F}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./css-B9c0ZZC5.js";import"./useBreakpoints-DhvOJkKp.js";import"./FSTextField-tianF0jI.js";import"./FSBaseField-y2QkcP3h.js";import"./FSSpan-9E7WYB2n.js";import"./useSlots-p1mkRhuZ.js";import"./FSCol-B2uM4vFw.js";import"./useColors-CvhpHTRO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./theme-Dfllckn6.js";import"./FSButton-CX1uVweX.js";import"./FSRouterLink-CV-Ooad2.js";import"./vue-router-BD3n-2Cp.js";import"./FSText-CUmuxASa.js";import"./FSIcon-CBwOL1p5.js";import"./VIcon-e3y7Ok8e.js";import"./color-RD9Ud5Y3.js";import"./useRender-BLRtLddt.js";import"./icons-CT9uuJgl.js";import"./size-BQpWkrb5.js";import"./tag-mR0sHpgP.js";import"./FSCard--XyliQO3.js";import"./VProgressCircular-CZaehD4X.js";import"./intersectionObserver-DIY-g69O.js";import"./resizeObserver-BES9Ltqd.js";import"./useRules-2yt7KWSA.js";import"./VTextField-Jo2lzvlt.js";import"./VField-BhclGBdp.js";import"./index-C-lZWyiZ.js";import"./transition-CedxoFs4.js";import"./VLabel-BfwkTHLb.js";import"./VInput-Cb7sX7IB.js";import"./locale-yWiW8Thx.js";import"./proxiedModel-DoNoMWaC.js";import"./density-SLEyWIf6.js";import"./dimensions-DYTrXD1P.js";import"./loader-C939_FnV.js";import"./VProgressLinear-CSdvTkgI.js";import"./anchor-CT7OU_gq.js";import"./rounded-B6-M_5uG.js";import"./easing--CnlGZ0M.js";import"./VDefaultsProvider-BWK1RKVO.js";import"./forwardRefs-C-GTDzx5.js";import"./index-BLyOCIqB.js";import"./VSelectionControl-MAodlwa3.js";import"./index-Dlqh_ozP.js";const b=v({name:"WidgetStandardOptions",components:{FSRow:s,FSNumberField:y,FSSwitch:H},props:{widgetWidth:{type:Number,required:!0},widgetHeight:{type:Number,required:!0},hideBorders:{type:Boolean,required:!0}},emits:["update:widgetWidth","update:widgetHeight","update:hideBorders"]});function O(e,t,r,o,V,$){const h=x("FSNumberField");return S(),B(s,{align:"bottom-left",wrap:!1,gap:"16px"},{default:m(()=>[n(s,{align:"bottom-center"},{default:m(()=>[n(h,{label:e.$tr("entity.widget.width","Width"),modelValue:e.widgetWidth,"onUpdate:modelValue":t[0]||(t[0]=d=>e.$emit("update:widgetWidth",d))},null,8,["label","modelValue"]),n(h,{label:e.$tr("entity.widget.height","Height"),modelValue:e.widgetHeight,"onUpdate:modelValue":t[1]||(t[1]=d=>e.$emit("update:widgetHeight",d))},null,8,["label","modelValue"]),n(H,{class:"dialog-configure-widget-hide-borders",label:e.$tr("entity.widget.hide-borders","Hide borders"),modelValue:e.hideBorders,"onUpdate:modelValue":t[2]||(t[2]=d=>e.$emit("update:hideBorders",d))},null,8,["label","modelValue"])]),_:1})]),_:1})}const a=F(b,[["render",O]]);b.__docgenInfo={displayName:"WidgetStandardOptions",exportName:"default",description:"",tags:{},props:[{name:"widgetWidth",type:{name:"number"},required:!0},{name:"widgetHeight",type:{name:"number"},required:!0},{name:"hideBorders",type:{name:"boolean"},required:!0}],events:[{name:"update:widgetWidth"},{name:"update:widgetHeight"},{name:"update:hideBorders"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSWidgetStandardOptions.vue"]};const Oe={title:"Foundation/Shared/WidgetStandardOptions",component:a,tags:["autodocs"],argTypes:{widgetWidth:{control:"number",description:"Width of the widget"},widgetHeight:{control:"number",description:"Height of the widget"},hideBorders:{control:"boolean",description:"Whether to hide widget borders"},"onUpdate:widgetWidth":{action:"widgetWidth changed"},"onUpdate:widgetHeight":{action:"widgetHeight changed"},"onUpdate:hideBorders":{action:"hideBorders changed"}},args:{widgetWidth:300,widgetHeight:200,hideBorders:!1}},g={args:{widgetWidth:300,widgetHeight:200,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:a},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Widget Configuration Options</h3>
        <FSWidgetStandardOptions 
          v-model:widgetWidth="widgetWidth"
          v-model:widgetHeight="widgetHeight"
          v-model:hideBorders="hideBorders"
        />
        <div style="margin-top: 20px; padding: 10px; background: white; border-radius: 4px;">
          <h4>Current Values:</h4>
          <p>Width: {{ widgetWidth }}px</p>
          <p>Height: {{ widgetHeight }}px</p>
          <p>Hide Borders: {{ hideBorders }}</p>
        </div>
      </div>
    `})},p={args:{widgetWidth:400,widgetHeight:300,hideBorders:!1},render:e=>({components:{FSWidgetStandardOptions:a},setup(){const t=i(e.widgetWidth),r=i(e.widgetHeight),o=i(e.hideBorders);return{widgetWidth:t,widgetHeight:r,hideBorders:o}},template:`
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h3>Widget Options</h3>
          <FSWidgetStandardOptions 
            v-model:widgetWidth="widgetWidth"
            v-model:widgetHeight="widgetHeight"
            v-model:hideBorders="hideBorders"
          />
        </div>
        <div style="flex: 1;">
          <h3>Widget Preview</h3>
          <div 
            :style="{
              width: widgetWidth + 'px',
              height: widgetHeight + 'px',
              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
              border: hideBorders ? 'none' : '2px solid #2196f3',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1976d2',
              maxWidth: '100%',
              maxHeight: '400px'
            }"
          >
            Widget Preview<br>
            {{ widgetWidth }}x{{ widgetHeight }}
          </div>
        </div>
      </div>
    `})};var l,w,u;g.parameters={...g.parameters,docs:{...(l=g.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    widgetWidth: 300,
    widgetHeight: 200,
    hideBorders: false
  },
  render: args => ({
    components: {
      FSWidgetStandardOptions
    },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);
      return {
        widgetWidth,
        widgetHeight,
        hideBorders
      };
    },
    template: \`
      <div style="padding: 20px; background: #f5f5f5; border-radius: 8px;">
        <h3>Widget Configuration Options</h3>
        <FSWidgetStandardOptions 
          v-model:widgetWidth="widgetWidth"
          v-model:widgetHeight="widgetHeight"
          v-model:hideBorders="hideBorders"
        />
        <div style="margin-top: 20px; padding: 10px; background: white; border-radius: 4px;">
          <h4>Current Values:</h4>
          <p>Width: {{ widgetWidth }}px</p>
          <p>Height: {{ widgetHeight }}px</p>
          <p>Hide Borders: {{ hideBorders }}</p>
        </div>
      </div>
    \`
  })
}`,...(u=(w=g.parameters)==null?void 0:w.docs)==null?void 0:u.source}}};var c,f,W;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    widgetWidth: 400,
    widgetHeight: 300,
    hideBorders: false
  },
  render: args => ({
    components: {
      FSWidgetStandardOptions
    },
    setup() {
      const widgetWidth = ref(args.widgetWidth);
      const widgetHeight = ref(args.widgetHeight);
      const hideBorders = ref(args.hideBorders);
      return {
        widgetWidth,
        widgetHeight,
        hideBorders
      };
    },
    template: \`
      <div style="display: flex; gap: 20px;">
        <div style="flex: 1;">
          <h3>Widget Options</h3>
          <FSWidgetStandardOptions 
            v-model:widgetWidth="widgetWidth"
            v-model:widgetHeight="widgetHeight"
            v-model:hideBorders="hideBorders"
          />
        </div>
        <div style="flex: 1;">
          <h3>Widget Preview</h3>
          <div 
            :style="{
              width: widgetWidth + 'px',
              height: widgetHeight + 'px',
              background: 'linear-gradient(45deg, #e3f2fd, #bbdefb)',
              border: hideBorders ? 'none' : '2px solid #2196f3',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              color: '#1976d2',
              maxWidth: '100%',
              maxHeight: '400px'
            }"
          >
            Widget Preview<br>
            {{ widgetWidth }}x{{ widgetHeight }}
          </div>
        </div>
      </div>
    \`
  })
}`,...(W=(f=p.parameters)==null?void 0:f.docs)==null?void 0:W.source}}};const Ve=["Default","Interactive"];export{g as Default,p as Interactive,Ve as __namedExportsOrder,Oe as default};
