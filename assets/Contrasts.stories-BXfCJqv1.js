import{d as v,c as y,B as b,E as r,J as _,k as n,V as a,U as t,K as e}from"./vue.esm-bundler-CocPPKUI.js";import{u as m,a as S}from"./useColors-DUufJJPH.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as l}from"./FSCol-79-COv64.js";import{_ as h}from"./FSRow-BvJ7lU5E.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DhcBBMcp.js";import"./css-mt76hoAn.js";import"./useBreakpoints-DZlz3-56.js";const g=v({name:"Contrasts",components:{},props:{color:{type:String,required:!1,default:"#F0FFF0"}},setup(o){const{getColors:c}=m(),d=y(()=>c(o.color));return{describeColor:p=>{const s=new S(p);return{h:s.hue().toFixed(2),s:s.saturationv().toFixed(2),b:s.value().toFixed(2),d:s.isDark()}},colors:d}}}),R={style:{"font-weight":"bold"}},B={style:{"font-weight":"bold"}},N={style:{"font-weight":"bold"}},V={style:{"font-weight":"bold"}},$={style:{"font-weight":"bold"}},D={style:{"font-weight":"bold"}},q={style:{"font-weight":"bold"}},E={style:{"font-weight":"bold"}};function P(o,c,d,F,p,s){return _(),b(h,{class:"mb-12"},{default:r(()=>[n(l,{align:"center-center",style:a({backgroundColor:o.colors.light,color:o.colors.lightContrast,height:"100px"})},{default:r(()=>[t("div",R," Light "+e(o.colors.light),1),t("div",B,e(o.colors.lightContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.soft,color:o.colors.softContrast,height:"100px"})},{default:r(()=>[t("div",N," Soft "+e(o.colors.soft),1),t("div",V,e(o.colors.softContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.base,color:o.colors.baseContrast,height:"100px"})},{default:r(()=>[t("div",$," Base "+e(o.colors.base),1),t("div",D,e(o.colors.baseContrast),1)]),_:1},8,["style"]),n(l,{align:"center-center",style:a({backgroundColor:o.colors.dark,color:o.colors.darkContrast,height:"100px"})},{default:r(()=>[t("div",q," Dark "+e(o.colors.dark),1),t("div",E,e(o.colors.darkContrast),1)]),_:1},8,["style"])]),_:1})}const w=k(g,[["render",P]]);g.__docgenInfo={displayName:"Contrasts",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'#F0FFF0'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/dev/storybook/src/stories/shared/global/Contrasts.vue"]};const j={title:"Foundation/Shared/Global/Contrasts",component:w,tags:["autodocs"],argTypes:{}},i={render:()=>({components:{FSRow:h,FSCol:l,Contrasts:w},setup(){return{allColors:m().getBasePaletteColors()}},template:`
      <div style="max-width: 100vw; overflow-x: auto;">
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    `})};var u,f,C;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      FSRow,
      FSCol,
      Contrasts
    },
    setup() {
      const allColors = useColors().getBasePaletteColors();
      return {
        allColors
      };
    },
    template: \`
      <div style="max-width: 100vw; overflow-x: auto;">
        Colors : 
        <FSRow v-for="colorRow in allColors" :wrap="false">
          <FSCol v-for="color in colorRow">
            <Contrasts :color="color" />
          </FSCol>
        </FSRow>
      </div>
    \`
  })
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const A=["BaseColors"];export{i as BaseColors,A as __namedExportsOrder,j as default};
