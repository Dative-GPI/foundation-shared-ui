import{d as G,c as V,z as F,H as v,C as c,R as y,I as me,J as ce,m as fe,G as k,b as m,A as W,F as H,S as ye,q as x,Q as ve,E as w,Y as ae,a1 as ne,U as ge,N as $,V as Ae,i as U,w as R,a8 as Ne,p as he,B as Te,O as We,P as He}from"./vue.esm-bundler-DtArtqdn.js";import{l as p}from"./leaflet-src-CVI3lIVZ.js";import{F as Ue}from"./FSClickable-Lp9mb8CD.js";import{_ as Me}from"./FSSpan-Btkwe66a.js";import{_ as C}from"./FSRow-C-mN1bTt.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Z}from"./FSButton-q8xhuZjd.js";import{F as xe}from"./FSDialog-BY4HSEIn.js";import{F as Se}from"./FSCard-oEcmHswj.js";import{F as be}from"./FSIcon-DAU03b1P.js";import{F as I}from"./FSCol-D6yYDi9X.js";import{a as S,M as h}from"./map-Cp2HcdwH.js";import{u as Fe}from"./useBreakpoints-DjafNA1e.js";import{V as je}from"./VOverlay-Bjkk9AiY.js";import{u as Le,C as _}from"./useColors-P6sW9vWR.js";import{u as De}from"./useSlots-DbyfVVj5.js";import{u as Qe}from"./useTranslations-CEyRES9c.js";import{_ as Ke}from"./FSFadeOut-okmKwNuP.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./css-Byt5yd9p.js";import"./VProgressCircular-vkSDrwPD.js";import"./color-DKVd81aj.js";import"./theme-BTycGIF1.js";import"./resizeObserver-Bx252tqU.js";import"./VIcon-_X0ionFS.js";import"./FSText-CyTnv_LZ.js";import"./VDialog-BTHijwvN.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DNPVb8sx.js";import"./scopeId-DRx9AlMK.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./anchor-CbVlxldO.js";import"./dimensions-Dt4h5jdR.js";import"./display-H53nrFTM.js";import"./locale-EnvrzLNX.js";import"./router-DPM6bvc5.js";import"./transition-POm6u0ds.js";import"./index-DfSX31J9.js";import"./uuid-DTaye2KM.js";const Ye=(e,a,n="")=>`
  <div title="${n}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,Je=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,Xe=()=>'<div class="fs-map-mylocation-pin" />',ea=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,we=G({name:"FSImageCard",components:{FSClickable:Ue,FSSpan:Me,FSRow:C},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:V(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function aa(e,a,n,t,r,l){const i=k("FSClickable");return v(),F(i,fe({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:c(()=>[y(C,{align:"bottom-left",height:"fill"},{default:c(()=>[y(C,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:c(()=>[y(Me,{font:"text-overline"},{default:c(()=>[me(ce(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const na=O(we,[["render",aa]]);we.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const ke=G({name:"FSMapLayerButton",components:{FSImageCard:na,FSButton:Z,FSDialog:xe,FSRow:C},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const n=m(!1);return{dialog:n,onLayerClick:r=>{a("update:modelValue",r),n.value=!1}}}});function oa(e,a,n,t,r,l){const i=k("FSImageCard"),f=k("FSDialog");return v(),W(H,null,[y(Z,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=d=>e.dialog=!0)}),y(f,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=d=>e.dialog=d),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:c(()=>[y(C,{align:"center-center",wrap:!1},{default:c(()=>[(v(!0),W(H,null,ye(e.layers,d=>(v(),F(i,{variant:e.modelValue===d.name?"full":"background",color:e.modelValue===d.name?"primary":"light",label:d.label,src:d.image,key:d.name,onClick:L=>e.onLayerClick(d.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const ra=O(ke,[["render",oa]]);ke.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const Ce=G({name:"FSMapOverlay",components:{FSCard:Se,FSIcon:be,FSCol:I,FSRow:C},props:{mode:{type:String,required:!1,default:S.Collapse}},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:n,isTouchScreenEnabled:t}=Fe(),r=m(null),l=m(null),i=m(null),f=m(null),d=()=>{if(e.mode===S.Expand){a("update:mode",S.Collapse);return}a("update:mode",S.Expand)};return x(()=>{i.value=new ResizeObserver(L=>{L.forEach(o=>{a("update:height",o.contentRect.height)})}),f.value=new ResizeObserver(L=>{L.forEach(o=>{a("update:width",o.contentRect.width)})}),r.value&&(i.value.observe(r.value),a("update:height",r.value.offsetHeight)),l.value&&(f.value.observe(l.value.$el),a("update:width",l.value.$el.offsetWidth))}),ve(()=>{i.value&&i.value.disconnect(),f.value&&f.value.disconnect()}),{mobileOverlayWrapper:r,isTouchScreenEnabled:t,MapOverlayPositions:S,desktopOverlay:l,isExtraSmall:n,onClick:d}}});function ta(e,a,n,t,r,l){const i=k("FSCard");return v(),W(H,null,[e.isExtraSmall?(v(),F(je,{key:0,modelValue:e.$props.mode===e.MapOverlayPositions.Expand,contained:!0,onClick:a[0]||(a[0]=f=>e.$emit("update:mode",e.MapOverlayPositions.Collapse)),zIndex:"0"},null,8,["modelValue"])):w("",!0),ae(ge("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:Ae({height:e.$props.mode===e.MapOverlayPositions.Expand?"90%":e.$props.mode===e.MapOverlayPositions.Half?"60%":"auto"})},[y(i,{width:"100%",height:"100%",elevation:!0,border:!1},{default:c(()=>[y(I,{height:"100%",gap:"0px"},{default:c(()=>[y(C,{align:"center-center",style:{cursor:"pointer"},onTouchstart:e.onClick,onMousedown:e.onClick},{default:c(()=>[y(be,null,{default:c(()=>[me(ce(e.$props.mode===e.MapOverlayPositions.Expand?"mdi-chevron-down":"mdi-chevron-up"),1)]),_:1})]),_:1},8,["onTouchstart","onMousedown"]),e.$props.mode===e.MapOverlayPositions.Collapse?$(e.$slots,"collapsed",{key:0}):w("",!0),e.$props.mode!==e.MapOverlayPositions.Collapse?(v(),F(I,{key:1,height:"fill",style:{"min-height":"0"}},{default:c(()=>[$(e.$slots,"body")]),_:3})):w("",!0)]),_:3})]),_:3})],4),[[ne,e.isExtraSmall]]),ae(y(i,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:c(()=>[y(I,{height:"fill"},{default:c(()=>[$(e.$slots,"body")]),_:3})]),_:3},512),[[ne,!e.isExtraSmall]])],64)}const la=O(Ce,[["render",ta]]);Ce.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"collapsed"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const J="map",sa="markerClusterGroup",$e={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1}},emits:["click"],setup(e,{emit:a}){const n=U(J),t=U(sa,m(null)),{getColors:r}=Le(),l=m(null);if(!n)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!n.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const i=()=>{if(!n.value||!e.latlng)return;l.value&&(t&&t.value?t.value.removeLayer(l.value):n.value.removeLayer(l.value));let f=null;e.variant==="gps"?f=p.divIcon({html:Xe(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"?f=p.divIcon({html:Ye(e.icon??"mdi-map-marker",r(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-marker fs-map-location fs-map-location-selected":"fs-map-marker fs-map-location",iconAnchor:[36/2,36/2]}):f=p.divIcon({html:ea(r(e.color).base,e.label),iconSize:[16,16],className:e.selected?"fs-map-marker fs-map-pin fs-map-pin-selected":"fs-map-marker fs-map-pin",iconAnchor:[16/2,16/2]}),l.value=p.marker(e.latlng,{icon:f}),l.value.on("click",d=>{a("click",d)}),t&&t.value?l.value.addTo(t.value):l.value.addTo(n.value)};x(i),R(()=>[e.variant,e.color,e.latlng,e.selected],i)}};function ia(e,a,n,t,r,l){return $(e.$slots,"default")}const j=O($e,[["render",ia]]);$e.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Ie={name:"FSMapTileLayer",props:{layers:{type:Object,required:!1}},setup(e){const a=U(J);let n=e.layers;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const t=()=>{!e.layers||!a.value||(n&&n.forEach(r=>{r.removeFrom(a.value)}),n=[],e.layers.forEach(r=>{n==null||n.push(r.addTo(a.value))}))};x(t),R(()=>e.layers,t)}};function ua(e,a,n,t,r,l){return $(e.$slots,"default")}const da=O(Ie,[["render",ua]]);Ie.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"Layer[]"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};var Y={};const Oe=G({name:"FSMap",components:{FSMapMarker:j,FSMapTileLayer:da,FSMapLayerButton:ra,FSMapOverlay:la,FSButton:Z,FSCard:Se,FSCol:I},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:S.Collapse},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:null},bounds:{type:Object,required:!1,default:null},currentLayer:{type:String,required:!1,default:h.Map},allowedLayers:{type:Array,required:!1,default:()=>[h.Map,h.Imagery]},dirtyZoom:{type:Number,required:!1,default:16}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:n}=Qe(),{isExtraSmall:t}=Fe(),{getColors:r}=Le(),{slots:l}=De(),i=m(),f=m(),d=m(),L=m(null),o=m(null),q=m(),g=m();he("map",o);const M=m(e.dirtyZoom),B=new ResizeObserver(()=>{o.value&&o.value.invalidateSize()}),Q=[{name:h.Map,label:n("ui.map-layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layers:[p.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${Y.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:h.Imagery,label:n("ui.map-layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layers:[p.tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${Y.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:h.Snow,label:n("ui.map-layer.snow","Snow ski map"),image:new URL(""+new URL("snow-CUGd_AZE.png",import.meta.url).href,import.meta.url).href,layers:[p.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${Y.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer fs-map-tile-grayscale-layer"}),p.tileLayer("https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png",{maxZoom:18,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',className:"fs-map-tile-base-layer"})]}],E=V(()=>e.overlayMode!==S.Expand&&q.value&&t.value?q.value:0),X=V(()=>g.value&&!t.value?g.value:0),Ze=V(()=>({"--fs-map-location-pin-color":r(_.Primary).base,"--fs-map-mylocation-pin-color":r(_.Primary).base,"--fs-map-mylocation-pin-color-alpha":r(_.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${E.value}px`})),Re=V(()=>{var u;return((u=Q.find(s=>s.name===e.currentLayer))==null?void 0:u.layers)??Q[0].layers}),Ge=V(()=>Object.keys(l).filter(u=>u.startsWith("overlay-")).reduce((u,s)=>(u[s.replace("overlay-","")]=l[s],u),{})),K=(u,s)=>{if(!o.value)return u;s=s??o.value.getZoom();const b=o.value.project(u,s).subtract([X.value/2,-E.value/2]);return o.value.unproject(b,s)},Be=(u,s,b=M.value,P)=>{if(o.value)if(t.value){let z=0,ee=E.value;const _e=setInterval(()=>{(ee===E.value||z>=30)&&(clearInterval(_e),o.value.flyTo(K(p.latLng(u,s),b),b,P)),ee=E.value,z++},20)}else o.value.flyTo(K(p.latLng(u,s),b),b,P)},Pe=(u,s,b)=>{o.value&&o.value.setView(K(p.latLng(u,s),b),b)},ze=(u,s)=>{if(!o.value)return;const b=[X.value,0],P=[0,E.value],z={paddingTopLeft:b,paddingBottomRight:P,...s};o.value.fitBounds(u,z)};return x(()=>{if(!i.value)return;const u={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:p.latLngBounds(p.latLng(-90,-180),p.latLng(90,180)),maxBoundsViscosity:1,zoom:M.value,center:e.center?p.latLng(e.center[0],e.center[1]):p.latLng(48.85782,2.29521)};o.value=Ne(p.map(i.value,u)),o.value.on("click",s=>{a("click:latlng",s.latlng)}),o.value.attributionControl.remove(),p.control.attribution({position:"bottomleft"}).addTo(o.value),o.value.on("locationfound",s=>{s.latlng&&(L.value=s.latlng,o.value&&Be(s.latlng.lat,s.latlng.lng))}),B.observe(i.value)}),ve(()=>{B.disconnect()}),R([()=>e.center,()=>o.value],()=>{!o.value||!e.center||Pe(e.center[0],e.center[1],M.value)},{immediate:!0}),R([()=>e.bounds,()=>o.value],()=>{!o.value||!e.bounds||ze(e.bounds,{maxZoom:M.value})}),R(()=>e.dirtyZoom,u=>{M.value=u,o.value&&o.value.setZoom(u)},{immediate:!0}),{ColorEnum:_,defaultZoom:M,leafletContainer:i,locationGroupBounds:f,overlayHeight:q,overlayWidth:g,areaGroupBounds:d,map:o,actualLayer:Re,mapLayers:Q,gpsPosition:L,style:Ze,overlaySlots:Ge}}}),pa={ref:"leafletContainer",class:"fs-leaflet-container"};function ma(e,a,n,t,r,l){const i=k("FSMapTileLayer"),f=k("FSMapMarker"),d=k("FSMapLayerButton"),L=k("FSCard"),o=k("FSMapOverlay");return v(),F(L,fe({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:c(()=>{var q;return[ge("div",pa,[e.map?(v(),W(H,{key:0},[y(i,{layers:e.actualLayer},null,8,["layers"]),e.gpsPosition?(v(),F(f,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):w("",!0),$(e.$slots,"default")],64)):w("",!0)],512),(q=e.$props.allowedLayers)!=null&&q.length&&e.$props.allowedLayers.length>1?(v(),F(d,{key:0,layers:e.mapLayers.filter(g=>{var M;return((M=e.$props.allowedLayers)==null?void 0:M.includes(g.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[0]||(a[0]=g=>e.$emit("update:currentLayer",g))},null,8,["layers","modelValue"])):w("",!0),e.map?(v(),F(I,{key:1,class:"fs-map-control-buttons"},{default:c(()=>[e.$props.showMyLocation?(v(),F(Z,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[1]||(a[1]=()=>e.map.locate())})):w("",!0),e.$props.showZoomButtons?(v(),F(L,{key:1,elevation:!0},{default:c(()=>[y(I,{gap:"0"},{default:c(()=>[y(Z,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[2]||(a[2]=()=>e.map.zoomIn()),border:!1}),y(Z,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[3]||(a[3]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):w("",!0)]),_:1})):w("",!0),e.overlaySlots&&Object.keys(e.overlaySlots).length?(v(),F(o,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[4]||(a[4]=g=>e.$emit("update:overlayMode",g)),"onUpdate:height":a[5]||(a[5]=g=>e.overlayHeight=g),"onUpdate:width":a[6]||(a[6]=g=>e.overlayWidth=g)},Te({_:2},[ye(e.overlaySlots,(g,M)=>({name:M,fn:c(B=>[$(e.$slots,"overlay-"+M,We(He(B)))])}))]),1032,["mode"])):w("",!0)]}),_:3},16,["width","height","style"])}const D=O(Oe,[["render",ma]]);Oe.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bounds",type:{name:"LatLngBounds | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"currentLayer",type:{name:"MapLayers"},required:!1,defaultValue:{func:!1,value:"MapLayers.Map"}},{name:"allowedLayers",type:{name:"MapLayers[]"},required:!1,defaultValue:{func:!0,value:"() => [MapLayers.Map, MapLayers.Imagery]"}},{name:"dirtyZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"16"}}],events:[{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"update:selectedLocationId"},{name:"update:selectedAreaId"},{name:"click:latlng"}],slots:[{name:"default"},{name:"'overlay-' + name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const qe={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const n=U(J);let t=!1;if(!n)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!n.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const r=m(new p.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(l){return p.divIcon({html:Je(l.getChildCount()),className:"fs-map-marker fs-map-cluster-marker",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));he("markerClusterGroup",r),r.value.on("layeradd",()=>{if(!n.value)return;r.value.getLayers().length===e.expectedLayers&&!t&&(r.value.addTo(n.value),t=!0,a("update:bounds",r.value.getBounds()))})}};function ca(e,a,n,t,r,l){return $(e.$slots,"default")}const Ee=O(qe,[["render",ca]]);qe.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const an={title:"Foundation/Shared/Map",component:D,tags:["autodocs"],argTypes:{currentLayer:{control:"select",options:[h.Map,h.Imagery]},overlayMode:{control:"select",options:[S.Expand,S.Half,S.Collapse]}}},Ve=[{id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},{id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},{id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},{id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},{id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}}],A={args:{overlayMode:S.Collapse,currentLayer:h.Map,height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>G({components:{FSMap:D,FSRow:C,FSMapMarker:j},inheritAttrs:!1,setup(){return{args:e,location:Ve[0]}},template:`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
            :center="[location.address.latitude, location.address.longitude ]"
          >
            <FSMapMarker
              variant="location"
              :selected="true"
              :icon="location.icon"
              :color="location.color || 'primary'"
              :label="location.label"
              :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
            />
            <template #overlay-body>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      `})},N={args:{currentLayer:h.Imagery,overlayMode:S.Half},render:e=>({components:{FSMap:D,FSFadeOut:Ke,FSRow:C,FSCol:I,FSMapMarker:j,FSMapMarkerClusterGroup:Ee},setup(){const a=m(null);return{args:e,locations:Ve,bounds:a}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :bounds="bounds"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="locations.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="location in locations"
            :key="location.id"
            variant="location"
            :icon="location.icon"
            :color="location.color || 'primary'"
            :label="location.label"
            :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
          />
        </FSMapMarkerClusterGroup>
        <template #overlay-body>
          <FSRow
            padding="8px"
          >
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
              </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
    `})},T={args:{currentLayer:h.Snow,allowedLayers:[h.Map,h.Imagery,h.Snow],grayscale:!1,enableScrollWheelZoom:!0},render:e=>({components:{FSMap:D,FSMapMarker:j,FSMapMarkerClusterGroup:Ee},setup(){const a=m(null);return{args:e,bounds:a}},template:`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :allowed-layers="args.allowedLayers"
        :bounds="bounds"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="2"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="true"
            label="Centre station"
            variant="pin"
            @click="console.log($event)"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            label="Les confins"
            variant="pin"
            @click="console.log($event)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})};var oe,re,te;A.parameters={...A.parameters,docs:{...(oe=A.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    overlayMode: MapOverlayPositions.Collapse,
    currentLayer: MapLayers.Map,
    height: '100%',
    width: '100%',
    grayscale: false,
    showMyLocation: true,
    showZoomButtons: true,
    enableScrollWheelZoom: true
  },
  render: args => defineComponent({
    components: {
      FSMap,
      FSRow,
      FSMapMarker
    },
    inheritAttrs: false,
    setup() {
      return {
        args,
        location: locations[0]
      };
    },
    template: \`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
            :center="[location.address.latitude, location.address.longitude ]"
          >
            <FSMapMarker
              variant="location"
              :selected="true"
              :icon="location.icon"
              :color="location.color || 'primary'"
              :label="location.label"
              :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
            />
            <template #overlay-body>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      \`
  })
}`,...(te=(re=A.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var le,se,ie;N.parameters={...N.parameters,docs:{...(le=N.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    currentLayer: MapLayers.Imagery,
    overlayMode: MapOverlayPositions.Half
  },
  render: args => ({
    components: {
      FSMap,
      FSFadeOut,
      FSRow,
      FSCol,
      FSMapMarker,
      FSMapMarkerClusterGroup
    },
    setup() {
      const bounds = ref(null);
      return {
        args,
        locations,
        bounds
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :bounds="bounds"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="locations.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="location in locations"
            :key="location.id"
            variant="location"
            :icon="location.icon"
            :color="location.color || 'primary'"
            :label="location.label"
            :latlng="{ lat: location.address.latitude, lng: location.address.longitude }"
          />
        </FSMapMarkerClusterGroup>
        <template #overlay-body>
          <FSRow
            padding="8px"
          >
            <span>Custom overlay with fade out</span>
          </FSRow>
          <FSCol height="hug" style="min-height: 0;">
            <FSFadeOut height="100%">
              <div style="padding:8px; border-radius:4px; display: flex; flex-direction: column; gap: 10px;">
                <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
                  <span>Left overlay</span>
              </div>
            </FSFadeOut>
          </FSCol>
        </template>
      </FSMap>
    \`
  })
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,de,pe;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    currentLayer: MapLayers.Snow,
    allowedLayers: [MapLayers.Map, MapLayers.Imagery, MapLayers.Snow],
    grayscale: false,
    enableScrollWheelZoom: true
  },
  render: args => ({
    components: {
      FSMap,
      FSMapMarker,
      FSMapMarkerClusterGroup
    },
    setup() {
      const bounds = ref(null);
      return {
        args,
        bounds
      };
    },
    template: \`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :allowed-layers="args.allowedLayers"
        :bounds="bounds"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="2"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="true"
            label="Centre station"
            variant="pin"
            @click="console.log($event)"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            label="Les confins"
            variant="pin"
            @click="console.log($event)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(pe=(de=T.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};const nn=["SingleLocationMap","MultiLocationMap","CustomPinMap"];export{T as CustomPinMap,N as MultiLocationMap,A as SingleLocationMap,nn as __namedExportsOrder,an as default};
