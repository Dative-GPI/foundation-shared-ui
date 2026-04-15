import{d as E,e as b,c as v,w as j,J as O,k as i,G as P,X as H,H as m,m as G,F as U,L as S,M as K,S as y,U as N,V as I}from"./vue.esm-bundler-D_gXonxt.js";import{_ as L}from"./lodash-5Yh5OMmr.js";import{F as M}from"./FSDialogSubmit-CXqdvZQ2.js";import{F as z}from"./FSCalendarTwin-BkRZiEol.js";import k from"./FSTextField-CxQWhEox.js";import{F as p}from"./FSButton-cpkpLA7w.js";import{C as R}from"./useColors-B49MKafH.js";import{u as J}from"./useRules-CohX4tE3.js";import{u as X}from"./useDateFormat-BQ8h6gVb.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as W}from"./FSForm-7qi1lT_s.js";import{F as A}from"./FSCol-C3EJfcJX.js";import{_ as T}from"./FSRow-cHWWqhhs.js";import{D as Y}from"./rules-BzW1_6pp.js";import{u as x}from"./useAppTimeZone-Cxxk5HO_.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./FSFadeOut-z7-cnvK3.js";import"./uuid-DTaye2KM.js";import"./useBreakpoints-BWz07CZT.js";import"./css-Bznx04uW.js";import"./FSDialog-st5JvFSU.js";import"./FSCard-Cxfe3-O9.js";import"./FSRouterLink-DcR6eU1F.js";import"./vue-router-v2CeLf7E.js";import"./VProgressCircular-BomUTxjq.js";import"./color-DuOnfdFp.js";import"./theme-DdZUMbNR.js";import"./useRender-BE0GCWmZ.js";import"./intersectionObserver-Dxvbt_ZY.js";import"./resizeObserver-B9WvY7yr.js";import"./size-WKyNI-v9.js";import"./tag-CbMfyUQg.js";import"./FSText-DL_5kFi7.js";import"./useSlots-CdBAzqCX.js";import"./VDialog-BTFeiENf.js";import"./VOverlay-CrMgAm2W.js";import"./proxiedModel-Cl0bR0rs.js";import"./easing-DY7PVvcf.js";import"./anchor-DrPAsKKU.js";import"./dimensions-BYDjhYdL.js";import"./display-BIN9xr9Q.js";import"./lazy-aXB44k01.js";import"./locale-CEMLpecI.js";import"./router-hLwSEJDL.js";import"./scopeId-BwxBN6Au.js";import"./transition-CHyhkthg.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-d5ANZlFh.js";import"./VDefaultsProvider-DJfojugM.js";import"./useTranslations-D2TwtVAp.js";import"./FSSelectField-D3jDhMc4.js";import"./FSDialogMenu-CYc22LXB.js";import"./FSSlideGroup-DWL-VMav.js";import"./FSButtonNextIcon-CoBpV-yC.js";import"./VSlideGroup-Bqij08hI.js";import"./index-aKIkx5xA.js";import"./goto-wDz_aHst.js";import"./group-BimGXDpZ.js";import"./icons-DiQlgRdj.js";import"./VIcon-gCapjdof.js";import"./VSlideGroupItem-DyiSjx9G.js";import"./FSToggleSet-C7biUZpu.js";import"./FSWrapGroup-D5YRUBcz.js";import"./VInput-By-nMj_W.js";import"./density-W7RG4BnT.js";import"./FSBaseField-CGwB2cs2.js";import"./FSSpan-ap0CpdXZ.js";import"./FSCheckbox-zoBL9ZjY.js";import"./FSIcon-B9MXbR5l.js";import"./VCheckboxBtn-CftoRKYU.js";import"./VSelectionControl-Bhob2ZN1.js";import"./index-ByzLombQ.js";import"./VLabel-BCYtLXrQ.js";import"./FSLoader-CdctsmAF.js";import"./elevation-sxxySPKb.js";import"./FSRadio-Bk5L3sqZ.js";import"./VSelect-BdqVvZBK.js";import"./VTextField-SMQo8Oxu.js";import"./VField-Cr90fIiu.js";import"./loader-DM6th8g9.js";import"./VProgressLinear-bxxDRxj8.js";import"./rounded-yhlSUX6x.js";import"./index-CpkyVf-S.js";import"./VList-D8CiLhgs.js";import"./ssrBoot-DpaZqI6q.js";import"./border-BTzDu4tj.js";import"./variant-ftZYcIF1.js";import"./VImg-ufpttNgj.js";import"./VDivider-CTy1lKut.js";import"./VMenu-KvKUKA1I.js";import"./useAppLanguageCode-ulGHj8Yu.js";import"./VLocaleProvider-D9Wisn4b.js";import"./date-C09vmCiz.js";import"./VBtn-DgLqICzT.js";import"./position-mzu5LnMQ.js";import"./datesTools-DpylUQoJ.js";import"./startOfWeek-uXTpkxA4.js";import"./startOfDay-C4pDH4rb.js";import"./time-B7nWt_FV.js";import"./times-CqUFey1a.js";const B=E({name:"FSDateRangeField",components:{FSDialogSubmit:M,FSCalendarTwin:z,FSTextField:k,FSButton:p},props:{label:{type:String,required:!1,default:null},description:{type:String,required:!1,default:null},modelValue:{type:Array,required:!1,default:null},color:{type:String,required:!1,default:R.Primary},hideHeader:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},rules:{type:Array,required:!1,default:()=>[]},disabled:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(e,{emit:r}){const{validateOn:c,getMessages:f}=J(),{epochToShortDateFormat:F}=X(),l=b(!1),a=b(e.modelValue),d=v(()=>!e.modelValue||!Array.isArray(e.modelValue)||!e.modelValue.length?"":e.modelValue.map(Z=>F(Z)).join(" - ")),o=v(()=>f(e.modelValue,e.rules,!0)),t=()=>{e.disabled||(l.value=!0)},u=()=>{r("update:modelValue",null),a.value=null},$=()=>{r("update:modelValue",a.value),l.value=!1};return j(()=>e.modelValue,()=>{L.isEqual(a.value,e.modelValue)||(a.value=e.modelValue)}),{toShortDateFormat:d,innerDateRange:a,validateOn:c,ColorEnum:R,messages:o,dialog:l,onClick:t,onClear:u,onSubmit:$}}});function _(e,r,c,f,F,l){const a=S("FSCalendarTwin"),d=S("FSDialogSubmit");return K(),O(U,null,[i(k,G({class:"fs-date-field",label:e.$props.label,description:e.$props.description,color:e.$props.color,hideHeader:e.$props.hideHeader,required:e.$props.required,disabled:e.$props.disabled,readonly:!0,rules:e.$props.rules,messages:e.messages,validateOn:e.validateOn,validationValue:e.$props.modelValue,modelValue:e.toShortDateFormat,onClick:e.onClick,"onUpdate:modelValue":e.onClear},e.$attrs),P({"prepend-inner":m(()=>[y(e.$slots,"prepend-inner",{},()=>[i(p,{variant:"icon",icon:"mdi-calendar",disabled:e.$props.disabled,color:e.ColorEnum.Dark},null,8,["disabled","color"])])]),_:2},[H(e.$slots,(o,t)=>({name:t,fn:m(u=>[y(e.$slots,t,N(I(u)))])}))]),1040,["label","description","color","hideHeader","required","disabled","rules","messages","validateOn","validationValue","modelValue","onClick","onUpdate:modelValue"]),i(d,{title:e.$props.label,submitButtonColor:e.$props.color,"onClick:submitButton":e.onSubmit,modelValue:e.dialog,"onUpdate:modelValue":r[1]||(r[1]=o=>e.dialog=o)},{body:m(()=>[i(a,{color:e.$props.color,modelValue:e.innerDateRange,"onUpdate:modelValue":r[0]||(r[0]=o=>e.innerDateRange=o)},null,8,["color","modelValue"])]),_:1},8,["title","submitButtonColor","onClick:submitButton","modelValue"])],64)}const g=Q(B,[["render",_]]);B.__docgenInfo={displayName:"FSDateRangeField",exportName:"default",description:"",tags:{},props:[{name:"label",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"description",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"modelValue",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"color",type:{name:"ColorBase"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"hideHeader",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"required",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"rules",type:{name:"any[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}}],events:[{name:"update:modelValue"}],slots:[{name:"prepend-inner"},{name:"name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/fields/FSDateRangeField.vue"]};const zr={title:"Foundation/Shared/Input fields/DateRangeField",component:g,tags:["autodocs"],argTypes:{}},n={args:{args:{setTimeZone:x().setAppTimeZone,value1:null,value2:[17040672e5,17356032e5],value3:[17040672e5,17356032e5]}},render:(e,{argTypes:r})=>({components:{FSDateRangeField:g,FSButton:p,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Disabled date range, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>`})},s={args:{args:{valid:!1,value1:null,value2:null,value3:null,rules:Y}},render:(e,{argTypes:r})=>({components:{FSForm:W,FSDateRangeField:g,FSCol:A,FSRow:T},props:Object.keys(r),setup(){return{...e}},template:`
    <FSForm v-model="args.valid">
      <FSCol>
        <FSRow>
          <div class="text-body">
            Form validity: {{ args.valid ?? "false" }}
          </div>
        </FSRow>
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>`})};var h,q,V;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    args: {
      setTimeZone: useAppTimeZone().setAppTimeZone,
      value1: null,
      value2: [1704067200000, 1735603200000],
      value3: [1704067200000, 1735603200000]
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSDateRangeField,
      FSButton,
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
    <FSCol>
      <FSRow>
        <FSButton
          label="Africa/Abidjan"
          @click="args.setTimeZone('Africa/Abidjan')"
        />
        <FSButton
          label="Europe/Paris"
          @click="args.setTimeZone('Europe/Paris')"
        />
        <FSButton
          label="America/Guatemala"
          @click="args.setTimeZone('America/Guatemala')"
        />
        <FSButton
          label="Asia/Kamchatka"
          @click="args.setTimeZone('Asia/Kamchatka')"
        />
      </FSRow>
      <FSDateRangeField
        label="Date range, primary color"
        v-model="args.value1"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Required date range, warning color, with description"
        description="Description for this field"
        color="warning"
        :required="true"
        v-model="args.value2"
      />
      <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
      <FSDateRangeField
        label="Disabled date range, error color, with description"
        color="error"
        :disabled="true"
        v-model="args.value3"
      />
    </FSCol>\`
  })
}`,...(V=(q=n.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var D,w,C;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    args: {
      valid: false,
      value1: null,
      value2: null,
      value3: null,
      rules: DateRules
    }
  },
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSForm,
      FSDateRangeField,
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
        <FSDateRangeField
          label="Rules: required"
          :rules="[args.rules.required()]"
          :required="true"
          v-model="args.value1"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: before 2024-01-31 00:00"
          :rules="[args.rules.max(1706738400000)]"
          :required="true"
          v-model="args.value2"
        />
        <div style="width: 100%; border-bottom: 2px dotted lightgrey" />
        <FSDateRangeField
          label="Rules: required & before 2024-01-31 00:00 & after 2024-01-02 00:00"
          :rules="[args.rules.required(), args.rules.max(1706738400000), args.rules.min(1704146400000)]"
          :required="true"
          v-model="args.value3"
        />
      </FSCol>
    </FSForm>\`
  })
}`,...(C=(w=s.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};const Jr=["Variations","Rules"];export{s as Rules,n as Variations,Jr as __namedExportsOrder,zr as default};
