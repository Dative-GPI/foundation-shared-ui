import{G as s}from"./base-0de1729e.js";import{S as t}from"./serviceFactory-2dfad3af.js";import{C as n}from"./composableFactory-85dd6557.js";class a{constructor(e){this.id=e.id,this.icon=e.icon,this.code=e.code,this.label=e.label}}class c extends a{constructor(e){super(e)}}const i=()=>`${s()}/languages`,g=new t("language",c).create(o=>o.build(o.addGetMany(i,a),o.addNotify())),d=n.getMany(g);export{d as u};