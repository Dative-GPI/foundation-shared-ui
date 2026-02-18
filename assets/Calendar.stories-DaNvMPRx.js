import{d as M,J as y,B as S,D as u,q as l,K as b,L as _,I as C,c as f,G as $,F as N,U as k,H as R,P as W,m as j,e as v}from"./vue.esm-bundler-D5n7z5qz.js";import{F as g}from"./FSCol-D_lbFmZy.js";import{_ as p}from"./FSRow-DIk8KFbG.js";import{F as I}from"./FSButton-BSigqYK7.js";import{_ as w}from"./FSSpan-BN7wkmby.js";import{F as V}from"./FSColor-BNrD4P6_.js";import{a as E,F as U}from"./FSButtonNextIcon-CnQnCIEN.js";import{M as d}from"./dates-CU5b-tXh.js";import{C as G}from"./useColors-COEXNh00.js";import{u as K}from"./useTranslations-CFCS6HA-.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{d as Z}from"./timeRangeTools-JJV2RvI1.js";import{t as h,s as z,a as Q}from"./startOfWeek-uXTpkxA4.js";import{s as x}from"./startOfDay-C4pDH4rb.js";import{u as X}from"./useAppTimeZone-tx8M1w-h.js";import{F as ee}from"./FSCard-xgl24Qs4.js";import"./css-CxcvJboa.js";import"./useBreakpoints-CEzKC_o8.js";import"./FSRouterLink-D3C4jXZ9.js";import"./vue-router-BrikmAnQ.js";import"./FSText-015IEZHy.js";import"./useSlots-CoecqEnp.js";import"./FSIcon-DFkRD0af.js";import"./VIcon-C3cN4B51.js";import"./color-CUHqxR_J.js";import"./theme-BcqfMidt.js";import"./useRender-Dce1Ng4u.js";import"./icons-DbptYgqQ.js";import"./size-BBDCx9Cw.js";import"./tag-CJsP8ksx.js";import"./VProgressCircular-BsmUxqlD.js";import"./resizeObserver-CpF7iUII.js";import"./_commonjsHelpers-Cpj98o6Y.js";function F(e,t){const a=x(e),o=x(t);return+a==+o}function te(e){const t=h(e),a=t.getMonth();return t.setFullYear(t.getFullYear(),a+1,0),t.setHours(23,59,59,999),t}function ae(e,t){const a=t==null?void 0:t.weekStartsOn,o=h(e),m=o.getDay(),c=(m<a?-7:0)+6-(m-a);return o.setDate(o.getDate()+c),o.setHours(23,59,59,999),o}function O(e,t){const a=h(e),o=h(t);return a.getTime()>o.getTime()}function P(e,t){const a=h(e),o=h(t);return+a<+o}function re(e,t){const a=h(e),o=h(t);return a.getFullYear()===o.getFullYear()&&a.getMonth()===o.getMonth()}const Y=M({name:"FSMonthSelector",components:{FSRow:p,FSSpan:w,FSColor:V,FSButtonNextIcon:U,FSButtonPreviousIcon:E},props:{color:{type:String,required:!1,default:G.Primary},month:{type:Number,required:!0},year:{type:Number,required:!0}},emits:["update:month","update:year","update"],setup(e,{emit:t}){const{$tr:a}=K();return{monthToString:s=>{switch(s){case d.January:return a("ui.common.january","January");case d.February:return a("ui.common.february","February");case d.March:return a("ui.common.march","March");case d.April:return a("ui.common.april","April");case d.May:return a("ui.common.may","May");case d.June:return a("ui.common.june","June");case d.July:return a("ui.common.july","July");case d.August:return a("ui.common.august","August");case d.September:return a("ui.common.september","September");case d.October:return a("ui.common.october","October");case d.November:return a("ui.common.november","November");case d.December:return a("ui.common.december","December")}},onNext:()=>{t("update:month",e.month===12?1:e.month+1),t("update:year",e.month===12?e.year+1:e.year),t("update",{month:e.month===12?1:e.month+1,year:e.month===12?e.year+1:e.year})},onPrevious:()=>{t("update:month",e.month===1?12:e.month-1),t("update:year",e.month===1?e.year-1:e.year),t("update",{month:e.month===1?12:e.month-1,year:e.month===1?e.year-1:e.year})}}}});function oe(e,t,a,o,m,c){const s=C("FSButtonPreviousIcon"),n=C("FSColor"),r=C("FSButtonNextIcon");return y(),S(p,{align:"center-center"},{default:u(()=>[l(s,{onClick:e.onPrevious},null,8,["onClick"]),l(p,null,{default:u(()=>[l(n,{border:!1,padding:"0px 30px",color:e.$props.color,width:"100%",height:[40,36],style:{"min-width":"210px"}},{default:u(()=>[l(p,{width:"100%",height:"100%",align:"center-center"},{default:u(()=>[l(w,{font:"text-h3"},{default:u(()=>[b(_(e.monthToString(e.$props.month)),1)]),_:1}),l(w,{font:"text-h3"},{default:u(()=>[b(_(e.$props.year),1)]),_:1})]),_:1})]),_:1},8,["color"])]),_:1}),l(r,{onClick:e.onNext},null,8,["onClick"])]),_:1})}const ne=T(Y,[["render",oe]]);Y.__docgenInfo={displayName:"FSMonthSelector",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"ColorEnum.Primary"}},{name:"month",type:{name:"Months"},required:!0},{name:"year",type:{name:"number"},required:!0}],events:[{name:"update:month"},{name:"update:year"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleMonthSelector.vue"]};const J=M({name:"FSCalendarHeader",components:{FSRow:p,FSButton:I,FSSimpleMonthSelector:ne},props:{year:{type:Number,required:!0},month:{type:Number,required:!0}},setup(e,{emit:t}){return{onToday:()=>{const o=new Date;t("update:year",o.getFullYear()),t("update:month",o.getMonth()+1),t("update",{year:o.getFullYear(),month:o.getMonth()+1})}}}});function se(e,t,a,o,m,c){const s=C("FSSimpleMonthSelector");return y(),S(p,null,{default:u(()=>[l(s,{width:"hug",year:e.$props.year,month:e.$props.month,"onUpdate:year":t[0]||(t[0]=n=>e.$emit("update:year",n)),"onUpdate:month":t[1]||(t[1]=n=>e.$emit("update:month",n)),onUpdate:t[2]||(t[2]=n=>e.$emit("update",n))},null,8,["year","month"]),l(I,{label:e.$tr("ui.common.today","Today"),icon:"mdi-calendar-today",onClick:e.onToday},null,8,["label","onClick"])]),_:1})}const A=T(J,[["render",se]]);J.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0}],events:[{name:"update:year"},{name:"update:month"},{name:"update"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendarHeader.vue"]};const L=M({name:"FSCalendarHeader",components:{FSRow:p,FSCol:g},props:{year:{type:Number,required:!0},month:{type:Number,required:!0},showHeader:{type:Boolean,default:!0}},setup(e){const{getMachineOffset:t}=X(),a=f(()=>{const n=new Date(e.year,e.month-1,1),r=t(n.getTime());return n.setTime(n.getTime()+r),n}),o=f(()=>{const n=new Date(a.value),r=z(n,{weekStartsOn:1}),i=t(r.getTime());return r.setTime(r.getTime()+i),r}),m=f(()=>{const n=new Date(a.value),r=te(n),i=t(r.getTime());return r.setTime(r.getTime()+i),r}),c=f(()=>{const n=new Date(m.value),r=ae(n,{weekStartsOn:1}),i=t(r.getTime());return r.setTime(r.getTime()+i),r}),s=f(()=>{const n=[];let r=new Date(o.value);const i=new Date;for(;r<=c.value;)n.push({date:new Date(r),isToday:F(r,i),isPast:P(r,i)&&!F(r,i),isFutur:O(r,i)&&!F(r,i),isPreviousMonth:P(r,a.value),isNextMonth:O(r,m.value),isCurrentMonth:re(r,a.value)}),r=Q(r,1);return n});return{dayLabel:Z,days:s}}});function de(e,t,a,o,m,c){return y(),S(g,null,{default:u(()=>[e.$props.showHeader?(y(),S(p,{key:0,wrap:!1},{default:u(()=>[(y(),$(N,null,k(7,s=>l(g,{key:s,style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center"},{default:u(()=>[b(_(e.dayLabel(s-1)),1)]),_:2},1024)),64))]),_:1})):R("",!0),l(p,null,{default:u(()=>[(y(!0),$(N,null,k(e.days,s=>(y(),S(g,{key:e.$props.month+e.$props.year+s.date.toISOString(),style:{minWidth:"calc((100% - 8px * 7) / 7)",maxWidth:"calc((100% - 8px * 7) / 7)"},align:"center-center",height:"hug"},{default:u(()=>[W(e.$slots,"day",j({ref_for:!0},s))]),_:2},1024))),128))]),_:3})]),_:3})}const ue=T(L,[["render",de]]);L.__docgenInfo={displayName:"FSCalendarHeader",exportName:"default",description:"",tags:{},props:[{name:"year",type:{name:"number"},required:!0},{name:"month",type:{name:"number"},required:!0},{name:"showHeader",type:{name:"boolean"},defaultValue:{func:!1,value:"true"}}],slots:[{name:"day",scoped:!0,bindings:[]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/calendar/FSSimpleCalendar.vue"]};const Re={title:"Foundation/Shared/Calendar",component:A,tags:["autodocs"]},D={args:{},render:(e,{argTypes:t})=>({components:{FSCol:g,FSSimpleCalendarHeader:A,FSSimpleCalendar:ue,FSCard:ee},props:Object.keys(t),setup(){const a=v([]),o=n=>a.value.some(r=>F(r,n)),m=n=>{o(n)?a.value=a.value.filter(r=>!F(r,n)):a.value=[...a.value,n]},c=v(new Date().getMonth()+1),s=v(new Date().getFullYear());return{month:c,year:s,isDisabled:o,toggleDate:m,disabledDates:a}},template:`
      <FSCol gap="20px">
        <FSSimpleCalendarHeader v-model:month="month" v-model:year="year" width="500px" />
        <FSSimpleCalendar v-model:month="month" v-model:year="year">
          <template #day="{ date, isToday, isPast, isFutur, isNextMonth, isPreviousMonth, isCurrentMonth }">
            <FSCard
              height="100px"
              width="100%"
              :disabled="isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : 'standard'"
              :color="isDisabled(date) ? 'error' : 'light'"
              @click="toggleDate(date)"
            >
              <FSCard v-if="isToday" color="primary" padding="0 4px" variant="full">{{ date.getDate() }}</FSCard>
              <template v-else>{{ date.getDate() }}</template>
            </FSCard>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    `})};var q,H,B;D.parameters={...D.parameters,docs:{...(q=D.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {},
  render: (args, {
    argTypes
  }) => ({
    components: {
      FSCol,
      FSSimpleCalendarHeader,
      FSSimpleCalendar,
      FSCard
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
            <FSCard
              height="100px"
              width="100%"
              :disabled="isPast"
              padding="8px"
              :variant="!isCurrentMonth ? 'full' : 'standard'"
              :color="isDisabled(date) ? 'error' : 'light'"
              @click="toggleDate(date)"
            >
              <FSCard v-if="isToday" color="primary" padding="0 4px" variant="full">{{ date.getDate() }}</FSCard>
              <template v-else>{{ date.getDate() }}</template>
            </FSCard>
          </template>
        </FSSimpleCalendar>

        {{ disabledDates }}
      </FSCol>    
    \`
  })
}`,...(B=(H=D.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};const We=["Default"];export{D as Default,We as __namedExportsOrder,Re as default};
