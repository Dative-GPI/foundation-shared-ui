import{u as a}from"./useTranslations-DN7QCs30.js";var n=(o=>(o[o.None=0]="None",o[o.Millisecond=1]="Millisecond",o[o.Second=2]="Second",o[o.Minute=3]="Minute",o[o.Hour=4]="Hour",o[o.Day=5]="Day",o[o.Week=6]="Week",o[o.Month=7]="Month",o[o.Year=8]="Year",o))(n||{});const{$tr:e}=a(),s=[{id:n.Second,label:e("ui.common.second","Second"),plural:e("ui.common.seconds","Seconds")},{id:n.Minute,label:e("ui.common.minute","Minute"),plural:e("ui.common.minutes","Minutes")},{id:n.Hour,label:e("ui.common.hour","Hour"),plural:e("ui.common.hours","Hours")},{id:n.Day,label:e("ui.common.day","Day"),plural:e("ui.common.days","Days")},{id:n.Week,label:e("ui.common.week","Week"),plural:e("ui.common.weeks","Weeks")},{id:n.Month,label:e("ui.common.month","Month"),plural:e("ui.common.months","Months")},{id:n.Year,label:e("ui.common.year","Year"),plural:e("ui.common.years","Years")}],t=o=>{if(!o)return"";const u=s.find(r=>r.id===o.unit);return u?`${o.value} ${o.value===1?u.label.toLowerCase():u.plural.toLowerCase()}`:""},l=[{id:1,label:e("ui.common.second","Second"),plural:e("ui.common.seconds","Seconds")},{id:60,label:e("ui.common.minute","Minute"),plural:e("ui.common.minutes","Minutes")},{id:3600,label:e("ui.common.hour","Hour"),plural:e("ui.common.hours","Hours")},{id:86400,label:e("ui.common.day","Day"),plural:e("ui.common.days","Days")},{id:604800,label:e("ui.common.week","Week"),plural:e("ui.common.weeks","Weeks")}],c=o=>{if(!o)return 0;for(let u=l.length-1;u>=0;u--)if(o%l[u].id===0)return u;return 0},i=o=>{const u=c(o),r=o/l[u].id;return`${r} ${r===1?l[u].label.toLowerCase():l[u].plural.toLowerCase()}`};export{c as a,s as b,t as c,i as g,l as t};