import{d as M,z as S,H as y,C as d,R as l,G as D,I as v,J as _,c as f,E as W,A as T,F as $,S as N,N as j,m as E,b as C}from"./vue.esm-bundler-DtArtqdn.js";import{F as g}from"./FSCol-D6yYDi9X.js";import{_ as p}from"./FSRow-C-mN1bTt.js";import{F as I}from"./FSButton-q8xhuZjd.js";import{_ as w}from"./FSSpan-Btkwe66a.js";import{F as L}from"./FSColor-DmAlFAB4.js";import{a as V,F as U}from"./FSButtonNextIcon-Bvnrx82W.js";import{M as u}from"./dates-CU5b-tXh.js";import{C as z}from"./useColors-P6sW9vWR.js";import{u as G}from"./useTranslations-CEyRES9c.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as Z}from"./timeRangeTools-CXKOQ4MO.js";import{t as h,s as K,a as Q}from"./startOfWeek-uXTpkxA4.js";import{s as x}from"./startOfDay-C4pDH4rb.js";import{u as X}from"./useAppTimeZone-BYltbN9h.js";import{F as ee}from"./FSClickable-Lp9mb8CD.js";import"./css-Byt5yd9p.js";import"./useBreakpoints-DjafNA1e.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./FSIcon-DAU03b1P.js";import"./VIcon-_X0ionFS.js";import"./color-DKVd81aj.js";import"./theme-BTycGIF1.js";import"./VProgressCircular-vkSDrwPD.js";import"./resizeObserver-Bx252tqU.js";import"./useSlots-DbyfVVj5.js";import"./FSCard-oEcmHswj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DfSX31J9.js";function F(e,t){const n=x(e),o=x(t);return+n==+o}function te(e){const t=h(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function ne(e,t){const n=t==null?void 0:t.weekStartsOn,o=h(e),i=o.getDay(),c=(i<n?-7:0)+6-(i-n);return o.setDate(o.getDate()+c),o.setHours(23,59,59,999),o}function O(e,t){const n=h(e),o=h(t);return n.getTime()>o.getTime()}function P(e,t){const n=h(e),o=h(t);return+n<+o}function ae(e,t){const n=h(e),o=h(t);return n.getFullYear()===o.getFullYear()&&n.getMonth()===o.getMonth()}const Y=M({name:"FSMonthSelector",components:{FSRow:p,FSSpan:w,FSColor:L,FSButtonNextIcon:U,FSButtonPreviousIcon:V},props:{color:{type:String,required:!1,default:z.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:n}=G();return{monthToString:s=>{switch(s){case u.January:return n("ui.common.january","January");case u.February:return n("ui.common.february","February");case u.March:return n("ui.common.march","March");case u.April:return n("ui.common.april","April");case u.May:return n("ui.common.may","May");case u.June:return n("ui.common.june","June");case u.July:return n("ui.common.july","July");case u.August:return n("ui.common.august","August");case u.September:return n("ui.common.september","September");case u.October:return n("ui.common.october","October");case u.November:return n("ui.common.november","November");case u.December:return n("ui.common.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function oe(e,t,n,o,i,c){const s=D("FSButtonPreviousIcon"),r=D("FSColor"),a=D("FSButtonNextIcon");return y(),S(p,{align:"center-center"},{default:d(()=>[l(s,{onClick:e.onPrevious},null,8,["onClick"]),l(p,null,{default:d(()=>[l(r,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:d(()=>[l(p,{width:"100%",height:"100%",align:"center-center"},{default:d(()=>[l(w,{font:"text-h3"},{default:d(()=>[v(_(e.monthToString(e.$props.month)),1)]),_:1}),l(w,{font:"text-h3"},{default:d(()=>[v(_(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),l(a,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const re=k(Y,[["render",oe]]);Y.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"Months"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const A=M({name:"FSCalendarHeader",components:{FSRow:p,FSButton:I,FSSimpleMonthSelector:re},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const o=new Date;t("update:year",o.getFullYear()),t("update:month",o.getMonth()+1),t("update",{year:o.getFullYear(),month:o.getMonth()+1})}}}});function se(e,t,n,o,i,c){const s=D("FSSimpleMonthSelector");return y(),S(p,null,{default:d(()=>[l(s,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=r=>e.$emit("update:year",r)),"onUpdate:month":t[1]||(t[1]=r=>e.$emit("update:month",r)),onUpdate:t[2]||(t[2]=r=>e.$emit("update",r))},null,8,["year","month"]),l(I,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const J=k(A,[["render",se]]);A.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const R=M({name:"FSCalendarHeader",components:{FSRow:p,FSCol:g},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{getMachineOffset:t}=X(),n=f(()=>{const r=new Date(e.year,e.month-1,1),a=t(r.getTime());return r.setTime(r.getTime()+a),r}),o=f(()=>{const r=new Date(n.value),a=K(r,{weekStartsOn:1}),m=t(a.getTime());return a.setTime(a.getTime()+m),a}),i=f(()=>{const r=new Date(n.value),a=te(r),m=t(a.getTime());return a.setTime(a.getTime()+m),a}),c=f(()=>{const r=new Date(i.value),a=ne(r,{weekStartsOn:1}),m=t(a.getTime());return a.setTime(a.getTime()+m),a}),s=f(()=>{const r=[];let a=new Date(o.value);const m=new Date;for(;a<=c.value;)r.push({date:new Date(a),isToday:F(a,m),isPast:P(a,m)&&!F(a,m),isFutur:O(a,m)&&!F(a,m),isPreviousMonth:P(a,n.value),isNextMonth:O(a,i.value),isCurrentMonth:ae(a,n.value)}),a=Q(a,1);return r});return{dayLabel:Z,days:s}}});function ue(e,t,n,o,i,c){return y(),S(g,null,{default:d(()=>[e.$props.showHeader?(y(),S(p,{key:0,wrap:!1},{default:d(()=>[(y(),T($,null,N(7,s=>l(g,{key:s,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:d(()=>[v(_(e.dayLabel(s-1)),1)]),_:2},1024)),64))]),_:1})):W("",!0),l(p,null,{default:d(()=>[(y(!0),T($,null,N(e.days,s=>(y(),S(g,{key:e.$props.month+e.$props.year+s.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:d(()=>[j(e.$slots,"day",E({ref_for:!0},s))]),_:2},1024))),128))]),_:3})]),_:3})}const de=k(R,[["render",ue]]);R.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const Ae={title:"Foundation/Shared/Calendar",component:J,tags:["autodocs"]},b={args:{},render:(e,{argTypes:t})=>({components:{FSCol:g,FSSimpleCalendarHeader:J,FSSimpleCalendar:de,FSClickable:ee},props:Object.keys(t),setup(){const n=C([]),o=r=>n.value.some(a=>F(a,r)),i=r=>{o(r)?n.value=n.value.filter(a=>!F(a,r)):n.value=[...n.value,r]},c=C(new Date().getMonth()+1),s=C(new Date().getFullYear());return{month:c,year:s,isDisabled:o,toggleDate:i,disabledDates:n}},template:`
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
    `})};var H,q,B;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};const Je=["Default"];export{b as Default,Je as __namedExportsOrder,Ae as default};
