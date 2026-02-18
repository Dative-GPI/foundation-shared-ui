import{d as M,J as y,B as S,D as d,q as l,K as v,L as _,I as D,c as f,G as T,F as $,U as N,H as R,P as W,m as j,e as C}from"./vue.esm-bundler-B9lxvfDw.js";import{F as g}from"./FSCol-BwxAijHz.js";import{_ as p}from"./FSRow-CFa9RNor.js";import{F as I}from"./FSButton-CxA5c6KR.js";import{_ as w}from"./FSSpan-COYXSDbp.js";import{F as V}from"./FSColor-CFKVLO7B.js";import{a as E,F as U}from"./FSButtonNextIcon-BETncHzg.js";import{M as u}from"./dates-CU5b-tXh.js";import{C as G}from"./useColors-B5aYgogF.js";import{u as K}from"./useTranslations-AmWs0SAL.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as Z}from"./timeRangeTools-BBBu92sG.js";import{t as h,s as z,a as Q}from"./startOfWeek-uXTpkxA4.js";import{s as x}from"./startOfDay-C4pDH4rb.js";import{u as X}from"./useAppTimeZone-yr9jXsW5.js";import{F as ee}from"./FSClickable-zRgeWTkl.js";import"./css-BHrR5cp2.js";import"./useBreakpoints-Dc84uxeD.js";import"./FSRouterLink-ButUsqS5.js";import"./vue-router-NIKGBDSI.js";import"./FSIcon-kCffLiJ2.js";import"./VIcon-DPcX_RaC.js";import"./color-CLtf7Qrc.js";import"./theme-Bz5xEpqh.js";import"./useRender-DM2jvMPN.js";import"./icons-B5bBvhw0.js";import"./VProgressCircular-DSOzHF7B.js";import"./resizeObserver-DjRdaT-k.js";import"./useSlots-BioZKQqg.js";import"./FSCard-BwbWypiX.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(e,t){const a=x(e),o=x(t);return+a==+o}function te(e){const t=h(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function ae(e,t){const a=t==null?void 0:t.weekStartsOn,o=h(e),i=o.getDay(),c=(i<a?-7:0)+6-(i-a);return o.setDate(o.getDate()+c),o.setHours(23,59,59,999),o}function O(e,t){const a=h(e),o=h(t);return a.getTime()>o.getTime()}function P(e,t){const a=h(e),o=h(t);return+a<+o}function ne(e,t){const a=h(e),o=h(t);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}const Y=M({name:"FSMonthSelector",components:{FSRow:p,FSSpan:w,FSColor:V,FSButtonNextIcon:U,FSButtonPreviousIcon:E},props:{color:{type:String,required:!1,default:G.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:a}=K();return{monthToString:s=>{switch(s){case u.January:return a("ui.common.january","January");case u.February:return a("ui.common.february","February");case u.March:return a("ui.common.march","March");case u.April:return a("ui.common.april","April");case u.May:return a("ui.common.may","May");case u.June:return a("ui.common.june","June");case u.July:return a("ui.common.july","July");case u.August:return a("ui.common.august","August");case u.September:return a("ui.common.september","September");case u.October:return a("ui.common.october","October");case u.November:return a("ui.common.november","November");case u.December:return a("ui.common.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function oe(e,t,a,o,i,c){const s=D("FSButtonPreviousIcon"),r=D("FSColor"),n=D("FSButtonNextIcon");return y(),S(p,{align:"center-center"},{default:d(()=>[l(s,{onClick:e.onPrevious},null,8,["onClick"]),l(p,null,{default:d(()=>[l(r,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:d(()=>[l(p,{width:"100%",height:"100%",align:"center-center"},{default:d(()=>[l(w,{font:"text-h3"},{default:d(()=>[v(_(e.monthToString(e.$props.month)),1)]),_:1}),l(w,{font:"text-h3"},{default:d(()=>[v(_(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),l(n,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const re=k(Y,[["render",oe]]);Y.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"Months"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const J=M({name:"FSCalendarHeader",components:{FSRow:p,FSButton:I,FSSimpleMonthSelector:re},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const o=new Date;t("update:year",o.getFullYear()),t("update:month",o.getMonth()+1),t("update",{year:o.getFullYear(),month:o.getMonth()+1})}}}});function se(e,t,a,o,i,c){const s=D("FSSimpleMonthSelector");return y(),S(p,null,{default:d(()=>[l(s,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=r=>e.$emit("update:year",r)),"onUpdate:month":t[1]||(t[1]=r=>e.$emit("update:month",r)),onUpdate:t[2]||(t[2]=r=>e.$emit("update",r))},null,8,["year","month"]),l(I,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const A=k(J,[["render",se]]);J.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const L=M({name:"FSCalendarHeader",components:{FSRow:p,FSCol:g},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{getMachineOffset:t}=X(),a=f(()=>{const r=new Date(e.year,e.month-1,1),n=t(r.getTime());return r.setTime(r.getTime()+n),r}),o=f(()=>{const r=new Date(a.value),n=z(r,{weekStartsOn:1}),m=t(n.getTime());return n.setTime(n.getTime()+m),n}),i=f(()=>{const r=new Date(a.value),n=te(r),m=t(n.getTime());return n.setTime(n.getTime()+m),n}),c=f(()=>{const r=new Date(i.value),n=ae(r,{weekStartsOn:1}),m=t(n.getTime());return n.setTime(n.getTime()+m),n}),s=f(()=>{const r=[];let n=new Date(o.value);const m=new Date;for(;n<=c.value;)r.push({date:new Date(n),isToday:F(n,m),isPast:P(n,m)&&!F(n,m),isFutur:O(n,m)&&!F(n,m),isPreviousMonth:P(n,a.value),isNextMonth:O(n,i.value),isCurrentMonth:ne(n,a.value)}),n=Q(n,1);return r});return{dayLabel:Z,days:s}}});function ue(e,t,a,o,i,c){return y(),S(g,null,{default:d(()=>[e.$props.showHeader?(y(),S(p,{key:0,wrap:!1},{default:d(()=>[(y(),T($,null,N(7,s=>l(g,{key:s,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:d(()=>[v(_(e.dayLabel(s-1)),1)]),_:2},1024)),64))]),_:1})):R("",!0),l(p,null,{default:d(()=>[(y(!0),T($,null,N(e.days,s=>(y(),S(g,{key:e.$props.month+e.$props.year+s.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:d(()=>[W(e.$slots,"day",j({ref_for:!0},s))]),_:2},1024))),128))]),_:3})]),_:3})}const de=k(L,[["render",ue]]);L.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const Ae={title:"Foundation/Shared/Calendar",component:A,tags:["autodocs"]},b={args:{},render:(e,{argTypes:t})=>({components:{FSCol:g,FSSimpleCalendarHeader:A,FSSimpleCalendar:de,FSClickable:ee},props:Object.keys(t),setup(){const a=C([]),o=r=>a.value.some(n=>F(n,r)),i=r=>{o(r)?a.value=a.value.filter(n=>!F(n,r)):a.value=[...a.value,r]},c=C(new Date().getMonth()+1),s=C(new Date().getFullYear());return{month:c,year:s,isDisabled:o,toggleDate:i,disabledDates:a}},template:`
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSClickable
              height="100px"
              width="100%"
              :disabled="isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : undefined"
              :color="isDisabled(date) ? 'error' : undefined"
              @click="toggleDate(date)"
            >
              <FSClickable v-if="isToday" color="primary" padding="0 4px" variant="full">{{ date.getDate() }}</FSClickable>
              <template v-else>{{ date.getDate() }}</template>
            </FSClickable>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    `})};var q,H,B;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSSimpleCalendarHeader,
      FSSimpleCalendar,
      FSClickable
    },
    props: Object.keys(argTypes),
    setup() {
      const disabledDates = ref<Date[]>([]);
      const isDisabled = (date: Date) => {
        return disabledDates.value.some(d => isSameDay(d, date));
      };
      const toggleDate = (date: Date) => {
        if (isDisabled(date)) {
          disabledDates.value = disabledDates.value.filter(d => !isSameDay(d, date));
        } else {
          disabledDates.value = [...disabledDates.value, date];
        }
      };
      const month = ref(new Date().getMonth() + 1);
      const year = ref(new Date().getFullYear());
      return {
        month,
        year,
        isDisabled,
        toggleDate,
        disabledDates
      };
    },
    template: \`
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSClickable
              height="100px"
              width="100%"
              :disabled="isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : undefined"
              :color="isDisabled(date) ? 'error' : undefined"
              @click="toggleDate(date)"
            >
              <FSClickable v-if="isToday" color="primary" padding="0 4px" variant="full">{{ date.getDate() }}</FSClickable>
              <template v-else>{{ date.getDate() }}</template>
            </FSClickable>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    \`
  })
}`,...(B=(H=b.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const Le=["Default"];export{b as Default,Le as __namedExportsOrder,Ae as default};
