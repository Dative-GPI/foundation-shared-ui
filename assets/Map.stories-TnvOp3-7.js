const __vite__fileDeps=["./leaflet-src-BqBfykqS.js","./_commonjsHelpers-BosuxZz1.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as m,q as K,d as B,c as O,B as L,J as b,E as y,z as g,A as he,K as Fe,m as ee,I as C,C as U,F as D,S as Le,R as G,H as k,Y as te,a1 as oe,U as ke,O as P,V as We,i as j,w,a8 as Te,p as Ce,D as He,P as Ue,Q as De}from"./vue.esm-bundler-BB--BfRN.js";import{a as je}from"./properties-Qw-O9fbT.js";import{a as v}from"./leaflet-src-BqBfykqS.js";import{F as Qe}from"./FSClickable-CwRD7A4m.js";import{_ as we}from"./FSSpan-BndtI8AP.js";import{_ as $}from"./FSRow-Bdc52rY8.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSButton-DEqhqb0b.js";import{F as Ke}from"./FSDialog-CsOSQzi_.js";import{F as $e}from"./FSCard-CiGLNn7K.js";import{F as Ie}from"./FSIcon-BKav6CVU.js";import{F as q}from"./FSCol-BU2zndN-.js";import{M,a as h}from"./map-BkwnYXis.js";import{u as Pe}from"./useBreakpoints-f5uwzDhq.js";import{V as Je}from"./VOverlay-B758aeer.js";import{u as qe,C as A}from"./useColors-CeWNZtds.js";import{u as Ye}from"./FSRouterLink-DUWl7Aiu.js";import{_ as Xe}from"./iframe-DOhUVVJz.js";import{u as ea}from"./useTranslations-DvAhn7XV.js";import{u as aa}from"./useSlots-COLyvmal.js";import{_ as na}from"./FSFadeOut-BS7VKwj1.js";import{u as la}from"./uuid-DTaye2KM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-DoweNwVf.js";import"./VProgressCircular-DNr7n8jG.js";import"./color-DIvEt_AX.js";import"./theme-BwQCEo_4.js";import"./resizeObserver-CgHguIgR.js";import"./VIcon-Cl87HT90.js";import"./FSText-RaLR8FTM.js";import"./VDialog-bMbnstsA.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DMSSa4ZW.js";import"./scopeId-NiaFRIZK.js";import"./VDefaultsProvider-BK3j_XEC.js";import"./anchor-C8ooBn8e.js";import"./dimensions-DwY9cRwZ.js";import"./display-DzHu_6W3.js";import"./locale-CSWC84Vq.js";import"./router-WJHyAZQ9.js";import"./transition-GJJG9yri.js";import"./index-_Z9wfsFC.js";import"./vue-router-CibjbVOv.js";import"../sb-preview/runtime.js";const ta=(e,a,l="")=>`
  <div title="${l}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,oa=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,ra=()=>'<div class="fs-map-mylocation-pin" />',sa=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`;var ia={};const ua=()=>{const{$tr:e}=ea(),a=ia.VITE_GOOGLE_MAPS_API_KEY??"",l=m([]);return K(async()=>{try{const t=(await Xe(()=>import("./leaflet-src-BqBfykqS.js").then(p=>p.l),__vite__mapDeps([0,1]),import.meta.url)).tileLayer;l.value=[{name:M.Map,label:e("ui.map-layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layers:[t(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:M.Imagery,label:e("ui.map-layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layers:[t(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:M.Snow,label:e("ui.map-layer.snow","Snow ski map"),image:new URL(""+new URL("snow-CUGd_AZE.png",import.meta.url).href,import.meta.url).href,layers:[t(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer fs-map-tile-grayscale-layer"}),t("https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png",{maxZoom:18,attribution:"Map data: &copy; OpenStreetMap contributors & ODbL, CC-BY-SA",className:"fs-map-tile-base-layer"})]}]}catch(o){console.error("Leaflet is not installed or failed to load.",o),l.value=[]}}),{layers:l}},Re=B({name:"FSImageCard",components:{FSClickable:Qe,FSSpan:we,FSRow:$},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:O(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function da(e,a,l,o,t,p){const r=C("FSClickable");return b(),L(r,ee({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[g($,{align:"bottom-left",height:"fill"},{default:y(()=>[g($,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[g(we,{font:"text-overline"},{default:y(()=>[he(Fe(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const pa=V(Re,[["render",da]]);Re.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const Oe=B({name:"FSMapLayerButton",components:{FSImageCard:pa,FSButton:E,FSDialog:Ke,FSRow:$},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const l=m(!1);return{dialog:l,onLayerClick:t=>{a("update:modelValue",t),l.value=!1}}}});function ca(e,a,l,o,t,p){const r=C("FSImageCard"),i=C("FSDialog");return b(),U(D,null,[g(E,ee({class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=n=>e.dialog=!0)},e.$attrs),null,16),g(i,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=n=>e.dialog=n),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:y(()=>[g($,{align:"center-center",wrap:!1},{default:y(()=>[(b(!0),U(D,null,Le(e.layers,n=>(b(),L(r,{variant:e.modelValue===n.name?"full":"background",color:e.modelValue===n.name?"primary":"light",label:n.label,src:n.image,key:n.name,onClick:S=>e.onLayerClick(n.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const ma=V(Oe,[["render",ca]]);Oe.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const Ee=B({name:"FSMapOverlay",components:{FSCard:$e,FSIcon:Ie,FSCol:q,FSRow:$},props:{mode:{type:String,required:!1,default:h.Collapse}},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:l,isTouchScreenEnabled:o}=Pe(),t=m(null),p=m(null),r=m(null),i=m(null),n=()=>{if(e.mode===h.Expand){a("update:mode",h.Collapse);return}a("update:mode",h.Expand)};return K(()=>{r.value=new ResizeObserver(S=>{S.forEach(F=>{a("update:height",F.contentRect.height)})}),i.value=new ResizeObserver(S=>{S.forEach(F=>{a("update:width",F.contentRect.width)})}),t.value&&(r.value.observe(t.value),a("update:height",t.value.offsetHeight)),p.value&&(i.value.observe(p.value.$el),a("update:width",p.value.$el.offsetWidth))}),G(()=>{r.value&&r.value.disconnect(),i.value&&i.value.disconnect()}),{mobileOverlayWrapper:t,isTouchScreenEnabled:o,MapOverlayPositions:h,desktopOverlay:p,isExtraSmall:l,onClick:n}}});function fa(e,a,l,o,t,p){const r=C("FSCard");return b(),U(D,null,[e.isExtraSmall?(b(),L(Je,{key:0,modelValue:e.$props.mode===e.MapOverlayPositions.Expand,contained:!0,onClick:a[0]||(a[0]=i=>e.$emit("update:mode",e.MapOverlayPositions.Collapse)),zIndex:"0"},null,8,["modelValue"])):k("",!0),te(ke("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:We({height:e.$props.mode===e.MapOverlayPositions.Expand?"90%":e.$props.mode===e.MapOverlayPositions.Half?"60%":"auto"})},[g(r,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[g(q,{height:"100%",gap:"0px"},{default:y(()=>[g($,{align:"center-center",style:{cursor:"pointer"},onTouchstart:e.onClick,onMousedown:e.onClick},{default:y(()=>[g(Ie,null,{default:y(()=>[he(Fe(e.$props.mode===e.MapOverlayPositions.Expand?"mdi-chevron-down":"mdi-chevron-up"),1)]),_:1})]),_:1},8,["onTouchstart","onMousedown"]),e.$props.mode===e.MapOverlayPositions.Collapse?P(e.$slots,"collapsed",{key:0}):k("",!0),e.$props.mode!==e.MapOverlayPositions.Collapse?(b(),L(q,{key:1,height:"fill",style:{"min-height":"0"}},{default:y(()=>[P(e.$slots,"body")]),_:3})):k("",!0)]),_:3})]),_:3})],4),[[oe,e.isExtraSmall]]),te(g(r,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[g(q,{height:"fill"},{default:y(()=>[P(e.$slots,"body")]),_:3})]),_:3},512),[[oe,!e.isExtraSmall]])],64)}const va=V(Ee,[["render",fa]]);Ee.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"collapsed"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const ae="map",ya="markerClusterGroup",ze={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1},to:{type:Object,required:!1}},emits:["click","auxclick"],setup(e,{emit:a}){const l=j(ae),o=j(ya,m(null)),{getColors:t}=qe(),{handleRoutingEvent:p}=Ye();if(!l)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!l.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const r=()=>{if(e.variant==="gps")return v.divIcon({html:ra(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]});if(e.variant==="location")return v.divIcon({html:ta(e.icon??"mdi-map-marker",t(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-marker fs-map-location fs-map-location-selected":"fs-map-marker fs-map-location",iconAnchor:[36/2,36/2]});const d=16;return v.divIcon({html:sa(t(e.color).base,e.label),iconSize:[d,d],className:e.selected?"fs-map-marker fs-map-pin fs-map-pin-selected":"fs-map-marker fs-map-pin",iconAnchor:[d/2,d/2]})},i=m(v.marker(e.latlng??[0,0],{icon:r()})),n=O(()=>i.value.getElement()),S=d=>{if(e.to){p(d,e.to,!0);return}a("click",{...d,latlng:e.latlng})},F=d=>{if(e.to){p(d,e.to);return}a("auxclick",{...d,latlng:e.latlng})};w(l,()=>{l.value&&(o&&o.value?i.value.addTo(o.value):i.value.addTo(l.value))},{immediate:!0}),w([()=>e.variant,()=>e.color,()=>e.selected],()=>{var f;if(!i.value||!l.value)return;const d=r();(f=i.value)==null||f.setIcon(d)}),w([()=>{var d;return(d=e.latlng)==null?void 0:d.lat},()=>{var d;return(d=e.latlng)==null?void 0:d.lng}],()=>{!i.value||!l.value||!e.latlng||i.value.setLatLng(e.latlng)}),w(n,d=>{d&&(d.addEventListener("click",S),d.addEventListener("auxclick",F))},{immediate:!0}),G(()=>{i.value&&l.value&&(o&&o.value?o.value.removeLayer(i.value):l.value.removeLayer(i.value))})}};function ga(e,a,l,o,t,p){return P(e.$slots,"default")}const x=V(ze,[["render",ga]]);ze.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1},{name:"to",type:{name:"RouteLocation | null"},required:!1}],events:[{name:"click"},{name:"auxclick"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Ve={name:"FSMapTileLayer",props:{layers:{type:Object,required:!1}},setup(e){const a=j(ae);let l=e.layers;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const o=()=>{!e.layers||!a.value||(l&&l.forEach(t=>{t.removeFrom(a.value)}),l=[],e.layers.forEach(t=>{l==null||l.push(t.addTo(a.value))}))};K(o),G(()=>{l&&a.value&&(l.forEach(t=>{a.value.hasLayer(t)&&a.value.removeLayer(t)}),l=[])}),w(()=>e.layers,o)}};function ba(e,a,l,o,t,p){return P(e.$slots,"default")}const Ma=V(Ve,[["render",ba]]);Ve.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"Layer[]"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const xe=B({name:"FSMap",components:{FSMapMarker:x,FSMapTileLayer:Ma,FSMapLayerButton:ma,FSMapOverlay:va,FSButton:E,FSCard:$e,FSCol:q},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},disabled:{type:Boolean,required:!1,default:!1},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:h.Collapse},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:null},bounds:{type:Object,required:!1,default:null},currentLayer:{type:String,required:!1,default:M.Map},allowedLayers:{type:Array,required:!1,default:()=>[M.Map,M.Imagery]},zoom:{type:Number,required:!1,default:16}},emits:["update:overlayMode","update:currentLayer","click:latlng","update:zoom","update:center"],setup(e,{emit:a}){const{layers:l}=ua(),{isExtraSmall:o}=Pe(),{getColors:t}=qe(),{slots:p}=aa(),r=m(),i=m(null),n=m(null),S=m(),F=m();Ce("map",n);const d=new ResizeObserver(()=>{n.value&&n.value.invalidateSize()}),f=O(()=>e.overlayMode!==h.Expand&&S.value&&o.value?S.value:0),I=O(()=>F.value&&!o.value?F.value:0),Y=O(()=>({"--fs-map-location-pin-color":t(A.Primary).base,"--fs-map-mylocation-pin-color":t(A.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(A.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${f.value}px`})),Ge=O(()=>{var s;return(s=l.value.find(u=>u.name===e.currentLayer))==null?void 0:s.layers}),Ze=O(()=>Object.keys(p).filter(s=>s.startsWith("overlay-")).reduce((s,u)=>(s[u.replace("overlay-","")]=p[u],s),{})),X=(s,u)=>{if(!n.value)return s;u=u??n.value.getZoom();const c=n.value.project(s,u).subtract([I.value/2,-f.value/2]);return n.value.unproject(c,u)},Ae=(s,u,c,R)=>{if(n.value)if(o.value){let Z=0,le=f.value;const _e=setInterval(()=>{(le===f.value||Z>=30)&&(clearInterval(_e),n.value.flyTo(X(v.latLng(s,u),c),c,R)),le=f.value,Z++},20)}else n.value.flyTo(X(v.latLng(s,u),c),c,R)},ne=(s,u,c)=>{n.value&&n.value.setView(X(v.latLng(s,u),c),c)},Ne=(s,u)=>{if(!n.value)return;const c=[I.value+24,24],R=[24,f.value+24],Z={paddingTopLeft:c,paddingBottomRight:R,...u};n.value.fitBounds(s,Z)};return K(()=>{if(!r.value)return;const s={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom&&!e.disabled,dragging:!e.disabled,doubleClickZoom:!1,minZoom:2,maxZoom:22,maxBounds:v.latLngBounds(v.latLng(-90,-180),v.latLng(90,180)),maxBoundsViscosity:1,zoom:e.zoom,center:e.center?v.latLng(e.center[0],e.center[1]):v.latLng(48.85782,2.29521)};n.value=Te(v.map(r.value,s)),n.value.on("click",u=>{a("click:latlng",u.latlng)}),n.value.on("zoomend",()=>{n.value&&a("update:zoom",n.value.getZoom())}),n.value.on("moveend",()=>{if(!n.value)return;const u=n.value.getCenter();a("update:center",[u.lat,u.lng])}),n.value.attributionControl.remove(),v.control.attribution({position:"bottomleft"}).addTo(n.value),n.value.on("locationfound",u=>{u.latlng&&(i.value=u.latlng,n.value&&Ae(u.latlng.lat,u.latlng.lng,14))}),d.observe(r.value)}),G(()=>{d.disconnect()}),w([()=>e.center,()=>e.zoom],([s,u],[c,R])=>{!n.value||!e.center||!s||n.value.getZoom()===u&&n.value.getCenter().equals(v.latLng(s[0],s[1]))||((s[0]!==(c==null?void 0:c[0])||s[1]!==(c==null?void 0:c[1]))&&u!==R?ne(s[0],s[1],u):s[0]!==(c==null?void 0:c[0])||s[1]!==(c==null?void 0:c[1])?ne(s[0],s[1],n.value.getZoom()):u!==R&&n.value.setZoom(u))},{immediate:!0}),w([()=>e.bounds,()=>n.value],()=>{!n.value||!e.bounds||Ne(e.bounds,{maxZoom:14})}),w(()=>e.enableScrollWheelZoom,s=>{n.value&&(s?n.value.scrollWheelZoom.enable():n.value.scrollWheelZoom.disable())},{immediate:!0}),w(()=>e.disabled,s=>{n.value&&(s?(n.value.dragging.disable(),n.value.scrollWheelZoom.disable()):(n.value.dragging.enable(),e.enableScrollWheelZoom&&n.value.scrollWheelZoom.enable()))},{immediate:!0}),{ColorEnum:A,leafletContainer:r,overlayHeight:S,overlayWidth:F,map:n,actualLayer:Ge,layers:l,gpsPosition:i,style:Y,overlaySlots:Ze}}}),Sa={ref:"leafletContainer",class:"fs-leaflet-container"};function ha(e,a,l,o,t,p){const r=C("FSMapTileLayer"),i=C("FSMapMarker"),n=C("FSMapLayerButton"),S=C("FSCard"),F=C("FSMapOverlay");return b(),L(S,ee({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var d;return[ke("div",Sa,[e.map?(b(),U(D,{key:0},[g(r,{layers:e.actualLayer},null,8,["layers"]),e.gpsPosition?(b(),L(i,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):k("",!0),P(e.$slots,"default")],64)):k("",!0)],512),(d=e.$props.allowedLayers)!=null&&d.length&&e.$props.allowedLayers.length>1?(b(),L(n,{key:0,disabled:e.$props.disabled,layers:e.layers.filter(f=>{var I;return((I=e.$props.allowedLayers)==null?void 0:I.includes(f.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[0]||(a[0]=f=>e.$emit("update:currentLayer",f))},null,8,["disabled","layers","modelValue"])):k("",!0),e.map?(b(),L(q,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(b(),L(E,{key:0,disabled:e.$props.disabled,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[1]||(a[1]=()=>e.map.locate())},null,8,["disabled"])):k("",!0),e.$props.showZoomButtons?(b(),L(S,{key:1,elevation:!0},{default:y(()=>[g(q,{gap:"0"},{default:y(()=>[g(E,{disabled:e.$props.disabled,class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[2]||(a[2]=()=>e.map.zoomIn()),border:!1},null,8,["disabled"]),g(E,{disabled:e.$props.disabled,class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[3]||(a[3]=()=>e.map.zoomOut()),border:!1},null,8,["disabled"])]),_:1})]),_:1})):k("",!0)]),_:1})):k("",!0),e.overlaySlots&&Object.keys(e.overlaySlots).length?(b(),L(F,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[4]||(a[4]=f=>e.$emit("update:overlayMode",f)),"onUpdate:height":a[5]||(a[5]=f=>e.overlayHeight=f),"onUpdate:width":a[6]||(a[6]=f=>e.overlayWidth=f)},He({_:2},[Le(e.overlaySlots,(f,I)=>({name:I,fn:y(Y=>[P(e.$slots,"overlay-"+I,Ue(De(Y)))])}))]),1032,["mode"])):k("",!0)]}),_:3},16,["width","height","style"])}const z=V(xe,[["render",ha]]);xe.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bounds",type:{name:"LatLngBounds | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"currentLayer",type:{name:"MapLayers"},required:!1,defaultValue:{func:!1,value:"MapLayers.Map"}},{name:"allowedLayers",type:{name:"MapLayers[]"},required:!1,defaultValue:{func:!0,value:"() => [MapLayers.Map, MapLayers.Imagery]"}},{name:"zoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"16"}}],events:[{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"click:latlng"},{name:"update:zoom"},{name:"update:center"}],slots:[{name:"default"},{name:"'overlay-' + name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const Be={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const l=j(ae);let o=!1;if(!l)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!l.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const t=m(new v.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(r){return v.divIcon({html:oa(r.getChildCount()),className:"fs-map-marker fs-map-cluster-marker",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));Ce("markerClusterGroup",t);const p=()=>{if(!l.value)return;const r=t.value.getLayers();if(r.length===0&&o){l.value.removeLayer(t.value),o=!1;return}if(r.length===e.expectedLayers&&!o&&(t.value.addTo(l.value),o=!0),r.length===e.expectedLayers){const i=new v.LatLngBounds([]);for(const n of r)n.getBounds?i.extend(n.getBounds()):n.getLatLng&&i.extend(n.getLatLng());a("update:bounds",r.length>0?i:null)}};t.value.on("layeradd",p),t.value.on("layerremove",p),G(()=>{l.value&&l.value.hasLayer(t.value)&&l.value.removeLayer(t.value)})}};function Fa(e,a,l,o,t,p){return P(e.$slots,"default")}const J=V(Be,[["render",Fa]]);Be.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const fn={title:"Foundation/Shared/Map",component:z,tags:["autodocs"],argTypes:{...je(z),currentLayer:{control:"select",options:[M.Map,M.Imagery,M.Snow]},overlayMode:{control:"select",options:[h.Expand,h.Half,h.Collapse]}}},Q=[{id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},{id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},{id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},{id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},{id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}}],N={args:{overlayMode:h.Collapse,currentLayer:M.Map,height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>B({components:{FSMap:z,FSRow:$,FSMapMarker:x},inheritAttrs:!1,setup(){const a=m(Q[0]);return{args:e,location:a,onNewClick:o=>{console.log(o),a.value.address.latitude=o.lat,a.value.address.longitude=o.lng}}},template:`
        <FSRow height="500px">
          <FSMap
            :center="[location.address.latitude, location.address.longitude]"
            @click:latlng="onNewClick"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            v-bind="args"
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
      `})},_={args:{currentLayer:M.Imagery,overlayMode:h.Half},render:e=>({components:{FSMap:z,FSFadeOut:na,FSRow:$,FSCol:q,FSMapMarker:x,FSMapMarkerClusterGroup:J},setup(){const a=m(null);return{args:e,locations:Q,bounds:a}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :bounds="bounds"
        v-bind="args"
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
    `})},W={args:{currentLayer:M.Snow,allowedLayers:[M.Map,M.Imagery,M.Snow],grayscale:!1,enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:x,FSMapMarkerClusterGroup:J},setup(){const a=m(null);return{args:e,bounds:a}},template:`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-bind="args"
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
            :to="{ name: 'About' }"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            label="Les confins"
            variant="pin"
            :to="{ name: 'About' }"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})},T={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:x,FSMapMarkerClusterGroup:J},setup(){const a=m(null),l=m(null),o=m(null),t=m(10);return{args:e,bounds:a,zoom:t,center:o,selectedIndex:l,onClick:(r,i,n)=>{console.log(r),i==="blue"&&(t.value=15,o.value=[r.latlng.lat,r.latlng.lng]),i==="green"&&(o.value=[r.latlng.lat,r.latlng.lng]),l.value=n}}},template:`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-model:center="center"
        v-model:zoom="zoom"
        v-bind="args"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="3"
          @update:bounds="(event) => {bounds = event; console.log(event)}"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="selectedIndex === 0"
            label="Centre station"
            variant="pin"
            @click="onClick($event, 'blue', 0)"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="selectedIndex === 1"
            color="green"
            label="Les confins"
            variant="pin"
            @click="onClick($event, 'green', 1)"
          />
          <FSMapMarker
            :latlng="{ lat: 43.915748, lng: 6.469506 }"
            :selected="selectedIndex === 2"
            color="primary"
            label="Le sud"
            variant="pin"
            @click="onClick($event, 'blue', 2)"
            @auxclick="onClick($event, 'green', 2)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})},H={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:x,FSMapMarkerClusterGroup:J,FSButton:E},setup(){const a=m([]),l=m(null);return{args:e,pins:a,bounds:l,addRandomPin:()=>{const p=Math.floor(Math.random()*Q.length),r=Q[p],n={id:la(),label:`Pin ${a.value.length+1}`,latitude:r.address.latitude+Math.random()*10-5,longitude:r.address.longitude+Math.random()*10-5};a.value.push(n)},removePin:p=>{const r=a.value.findIndex(i=>i.id===p);r!==-1&&a.value.splice(r,1)}}},template:`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-bind="args"
      >
        <template #overlay-body>
          <FSButton @click="addRandomPin">Add Random Pin</FSButton>
          <FSButton @click="removePin(pins[0]?.id)">Remove First Pin</FSButton>
        </template>
        <FSMapMarkerClusterGroup
          :expected-layers="pins.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="pin in pins"
            :key="pin.id"
            :latlng="{ lat: pin.latitude, lng: pin.longitude }"
            :label="pin.label"
            variant="pin"
            color="#FF0000"
            @auxclick="removePin(pin.id)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})};var re,se,ie;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
      const location = ref(locations[0]);
      const onNewClick = (event: any) => {
        console.log(event);
        location.value.address.latitude = event.lat;
        location.value.address.longitude = event.lng;
      };
      return {
        args,
        location,
        onNewClick
      };
    },
    template: \`
        <FSRow height="500px">
          <FSMap
            :center="[location.address.latitude, location.address.longitude]"
            @click:latlng="onNewClick"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            v-bind="args"
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
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,de,pe;_.parameters={..._.parameters,docs:{...(ue=_.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
        v-bind="args"
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
}`,...(pe=(de=_.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,fe;W.parameters={...W.parameters,docs:{...(ce=W.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
        :bounds="bounds"
        v-bind="args"
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
            :to="{ name: 'About' }"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="false"
            label="Les confins"
            variant="pin"
            :to="{ name: 'About' }"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(fe=(me=W.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,ye,ge;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
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
      const selectedIndex = ref<number | null>(null);
      const center = ref<[number, number] | null>(null);
      const zoom = ref(10);
      const onClick = (event: any, color: "green" | "blue", index: number) => {
        console.log(event);
        if (color === "blue") {
          zoom.value = 15; // Zoom in on the first marker
          center.value = [event.latlng.lat, event.latlng.lng];
        }
        if (color === "green") {
          center.value = [event.latlng.lat, event.latlng.lng];
        }
        selectedIndex.value = index;
      };
      return {
        args,
        bounds,
        zoom,
        center,
        selectedIndex,
        onClick
      };
    },
    template: \`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-model:center="center"
        v-model:zoom="zoom"
        v-bind="args"
      >
        <FSMapMarkerClusterGroup
          :expected-layers="3"
          @update:bounds="(event) => {bounds = event; console.log(event)}"
        >
          <FSMapMarker
            :latlng="{ lat: 45.904565, lng: 6.423869 }"
            :selected="selectedIndex === 0"
            label="Centre station"
            variant="pin"
            @click="onClick($event, 'blue', 0)"
          />
          <FSMapMarker
            :latlng="{ lat: 45.915748, lng: 6.469506 }"
            :selected="selectedIndex === 1"
            color="green"
            label="Les confins"
            variant="pin"
            @click="onClick($event, 'green', 1)"
          />
          <FSMapMarker
            :latlng="{ lat: 43.915748, lng: 6.469506 }"
            :selected="selectedIndex === 2"
            color="primary"
            label="Le sud"
            variant="pin"
            @click="onClick($event, 'blue', 2)"
            @auxclick="onClick($event, 'green', 2)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(ge=(ye=T.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var be,Me,Se;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    enableScrollWheelZoom: true
  },
  render: args => ({
    components: {
      FSMap,
      FSMapMarker,
      FSMapMarkerClusterGroup,
      FSButton
    },
    setup() {
      const pins = ref<{
        id: string;
        label: string;
        latitude: number;
        longitude: number;
      }[]>([]);
      const bounds = ref(null);
      const addRandomPin = () => {
        const randomIndex = Math.floor(Math.random() * locations.length);
        const location = locations[randomIndex];
        const id = uuidv4();
        const pin = {
          id: id,
          label: \`Pin \${pins.value.length + 1}\`,
          latitude: location.address.latitude + Math.random() * 10 - 5,
          longitude: location.address.longitude + Math.random() * 10 - 5
        };
        pins.value.push(pin);
      };
      const removePin = (id: string) => {
        const index = pins.value.findIndex(pin => pin.id === id);
        if (index !== -1) {
          pins.value.splice(index, 1);
        }
      };
      return {
        args,
        pins,
        bounds,
        addRandomPin,
        removePin
      };
    },
    template: \`
      <FSMap
        v-model:currentLayer="args.currentLayer"
        :bounds="bounds"
        v-bind="args"
      >
        <template #overlay-body>
          <FSButton @click="addRandomPin">Add Random Pin</FSButton>
          <FSButton @click="removePin(pins[0]?.id)">Remove First Pin</FSButton>
        </template>
        <FSMapMarkerClusterGroup
          :expected-layers="pins.length"
          @update:bounds="bounds = $event"
        >
          <FSMapMarker
            v-for="pin in pins"
            :key="pin.id"
            :latlng="{ lat: pin.latitude, lng: pin.longitude }"
            :label="pin.label"
            variant="pin"
            color="#FF0000"
            @auxclick="removePin(pin.id)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(Se=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};const vn=["SingleLocationMap","MultiLocationMap","CustomPinMap","ClickablePinMap","GeneratePinMap"];export{T as ClickablePinMap,W as CustomPinMap,H as GeneratePinMap,_ as MultiLocationMap,N as SingleLocationMap,vn as __namedExportsOrder,fn as default};
