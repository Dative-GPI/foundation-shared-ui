import{G as t}from"./base-0de1729e.js";import{S as i}from"./serviceFactory-2dfad3af.js";import{C as n}from"./composableFactory-85dd6557.js";class s{constructor(o){this.id=o.id,this.offset=o.offset}}class r extends s{constructor(o){super(o)}}const c=()=>`${t()}/time-zones`,a=new i("timeZone",r).create(e=>e.build(e.addGetMany(c,s),e.addNotify())),u=n.getMany(a);export{u};