import{d as B,c as O,B as L,J as b,E as v,z as g,A as he,K as Fe,m as X,I as C,b as y,C as U,F as j,S as Le,q as ee,R as G,H as k,Y as te,a1 as oe,U as ke,O as q,V as Te,i as D,w,a8 as _e,p as Ce,D as He,P as Ue,Q as je}from"./vue.esm-bundler-CqZ6aK3I.js";import{a as De}from"./properties-Qw-O9fbT.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as Qe}from"./FSClickable-Lz1AMzcf.js";import{_ as we}from"./FSSpan-B7HDTlg9.js";import{_ as $}from"./FSRow-udQVJR1p.js";import{_ as x}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as E}from"./FSButton-dobeAM7X.js";import{F as Ke}from"./FSDialog-Cg-ZNEvc.js";import{F as $e}from"./FSCard-BH9I8ruU.js";import{F as Ie}from"./FSIcon-I_C15xQX.js";import{F as P}from"./FSCol-DIPgj7wU.js";import{M,a as h}from"./map-Cp2HcdwH.js";import{u as qe}from"./useBreakpoints-DMrtgY61.js";import{V as Je}from"./VOverlay-CHXjpHsK.js";import{u as Pe,C as A}from"./useColors-BIkRBR7C.js";import{u as Ye}from"./FSRouterLink-CyH3F3Zz.js";import{u as Xe}from"./useTranslations-D4m4SVfo.js";import{u as ea}from"./useSlots-BgbXyH5p.js";import{_ as aa}from"./FSFadeOut-B817LR1t.js";import{u as na}from"./uuid-DTaye2KM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./css-BZjDzSZ1.js";import"./VProgressCircular-DDVR-EZI.js";import"./color-6mal3hP4.js";import"./theme-CCooKRqg.js";import"./resizeObserver-C7qOORSR.js";import"./VIcon-beNtbbqt.js";import"./FSText-C92q1_nI.js";import"./VDialog-CJ2sxo0Y.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-BirLikdP.js";import"./scopeId-BQSHBqq_.js";import"./VDefaultsProvider-oq6rnkoo.js";import"./anchor-DiyvyHyx.js";import"./dimensions-CuS7VcMO.js";import"./display-Cs3Y1ygD.js";import"./locale-BJmdjC_5.js";import"./router-C0dK7NvB.js";import"./transition-C13qRIR1.js";import"./index-DfSX31J9.js";import"./vue-router-RJKW7Wfw.js";const la=(e,a,l="")=>`
  <div title="${l}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,ta=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,oa=()=>'<div class="fs-map-mylocation-pin" />',ra=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`;var sa={};const ia=()=>{const{$tr:e}=Xe(),a=sa.VITE_GOOGLE_MAPS_API_KEY??"";return{layers:[{name:M.Map,label:e("ui.map-layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layers:[f.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:M.Imagery,label:e("ui.map-layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layers:[f.tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:M.Snow,label:e("ui.map-layer.snow","Snow ski map"),image:new URL(""+new URL("snow-CUGd_AZE.png",import.meta.url).href,import.meta.url).href,layers:[f.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer fs-map-tile-grayscale-layer"}),f.tileLayer("https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png",{maxZoom:18,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',className:"fs-map-tile-base-layer"})]}]}},Re=B({name:"FSImageCard",components:{FSClickable:Qe,FSSpan:we,FSRow:$},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:O(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function ua(e,a,l,r,o,p){const t=C("FSClickable");return b(),L(t,X({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:v(()=>[g($,{align:"bottom-left",height:"fill"},{default:v(()=>[g($,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:v(()=>[g(we,{font:"text-overline"},{default:v(()=>[he(Fe(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const da=x(Re,[["render",ua]]);Re.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const Oe=B({name:"FSMapLayerButton",components:{FSImageCard:da,FSButton:E,FSDialog:Ke,FSRow:$},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const l=y(!1);return{dialog:l,onLayerClick:o=>{a("update:modelValue",o),l.value=!1}}}});function pa(e,a,l,r,o,p){const t=C("FSImageCard"),i=C("FSDialog");return b(),U(j,null,[g(E,X({class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=n=>e.dialog=!0)},e.$attrs),null,16),g(i,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=n=>e.dialog=n),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:v(()=>[g($,{align:"center-center",wrap:!1},{default:v(()=>[(b(!0),U(j,null,Le(e.layers,n=>(b(),L(t,{variant:e.modelValue===n.name?"full":"background",color:e.modelValue===n.name?"primary":"light",label:n.label,src:n.image,key:n.name,onClick:S=>e.onLayerClick(n.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const ca=x(Oe,[["render",pa]]);Oe.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const Ee=B({name:"FSMapOverlay",components:{FSCard:$e,FSIcon:Ie,FSCol:P,FSRow:$},props:{mode:{type:String,required:!1,default:h.Collapse}},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:l,isTouchScreenEnabled:r}=qe(),o=y(null),p=y(null),t=y(null),i=y(null),n=()=>{if(e.mode===h.Expand){a("update:mode",h.Collapse);return}a("update:mode",h.Expand)};return ee(()=>{t.value=new ResizeObserver(S=>{S.forEach(F=>{a("update:height",F.contentRect.height)})}),i.value=new ResizeObserver(S=>{S.forEach(F=>{a("update:width",F.contentRect.width)})}),o.value&&(t.value.observe(o.value),a("update:height",o.value.offsetHeight)),p.value&&(i.value.observe(p.value.$el),a("update:width",p.value.$el.offsetWidth))}),G(()=>{t.value&&t.value.disconnect(),i.value&&i.value.disconnect()}),{mobileOverlayWrapper:o,isTouchScreenEnabled:r,MapOverlayPositions:h,desktopOverlay:p,isExtraSmall:l,onClick:n}}});function ma(e,a,l,r,o,p){const t=C("FSCard");return b(),U(j,null,[e.isExtraSmall?(b(),L(Je,{key:0,modelValue:e.$props.mode===e.MapOverlayPositions.Expand,contained:!0,onClick:a[0]||(a[0]=i=>e.$emit("update:mode",e.MapOverlayPositions.Collapse)),zIndex:"0"},null,8,["modelValue"])):k("",!0),te(ke("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:Te({height:e.$props.mode===e.MapOverlayPositions.Expand?"90%":e.$props.mode===e.MapOverlayPositions.Half?"60%":"auto"})},[g(t,{width:"100%",height:"100%",elevation:!0,border:!1},{default:v(()=>[g(P,{height:"100%",gap:"0px"},{default:v(()=>[g($,{align:"center-center",style:{cursor:"pointer"},onTouchstart:e.onClick,onMousedown:e.onClick},{default:v(()=>[g(Ie,null,{default:v(()=>[he(Fe(e.$props.mode===e.MapOverlayPositions.Expand?"mdi-chevron-down":"mdi-chevron-up"),1)]),_:1})]),_:1},8,["onTouchstart","onMousedown"]),e.$props.mode===e.MapOverlayPositions.Collapse?q(e.$slots,"collapsed",{key:0}):k("",!0),e.$props.mode!==e.MapOverlayPositions.Collapse?(b(),L(P,{key:1,height:"fill",style:{"min-height":"0"}},{default:v(()=>[q(e.$slots,"body")]),_:3})):k("",!0)]),_:3})]),_:3})],4),[[oe,e.isExtraSmall]]),te(g(t,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:v(()=>[g(P,{height:"fill"},{default:v(()=>[q(e.$slots,"body")]),_:3})]),_:3},512),[[oe,!e.isExtraSmall]])],64)}const fa=x(Ee,[["render",ma]]);Ee.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"collapsed"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const ae="map",ya="markerClusterGroup",ze={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1},to:{type:Object,required:!1}},emits:["click","auxclick"],setup(e,{emit:a}){const l=D(ae),r=D(ya,y(null)),{getColors:o}=Pe(),{handleRoutingEvent:p}=Ye();if(!l)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!l.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const t=()=>{if(e.variant==="gps")return f.divIcon({html:oa(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]});if(e.variant==="location")return f.divIcon({html:la(e.icon??"mdi-map-marker",o(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-marker fs-map-location fs-map-location-selected":"fs-map-marker fs-map-location",iconAnchor:[36/2,36/2]});const d=16;return f.divIcon({html:ra(o(e.color).base,e.label),iconSize:[d,d],className:e.selected?"fs-map-marker fs-map-pin fs-map-pin-selected":"fs-map-marker fs-map-pin",iconAnchor:[d/2,d/2]})},i=y(f.marker(e.latlng??[0,0],{icon:t()})),n=O(()=>i.value.getElement()),S=d=>{if(e.to){p(d,e.to,!0);return}a("click",{...d,latlng:e.latlng})},F=d=>{if(e.to){p(d,e.to);return}a("auxclick",{...d,latlng:e.latlng})};w(l,()=>{l.value&&(r&&r.value?i.value.addTo(r.value):i.value.addTo(l.value))},{immediate:!0}),w([()=>e.variant,()=>e.color,()=>e.selected],()=>{var m;if(!i.value||!l.value)return;const d=t();(m=i.value)==null||m.setIcon(d)}),w([()=>{var d;return(d=e.latlng)==null?void 0:d.lat},()=>{var d;return(d=e.latlng)==null?void 0:d.lng}],()=>{!i.value||!l.value||!e.latlng||i.value.setLatLng(e.latlng)}),w(n,d=>{d&&(d.addEventListener("click",S),d.addEventListener("auxclick",F))},{immediate:!0}),G(()=>{i.value&&l.value&&(r&&r.value?r.value.removeLayer(i.value):l.value.removeLayer(i.value))})}};function va(e,a,l,r,o,p){return q(e.$slots,"default")}const V=x(ze,[["render",va]]);ze.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1},{name:"to",type:{name:"RouteLocation | null"},required:!1}],events:[{name:"click"},{name:"auxclick"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const xe={name:"FSMapTileLayer",props:{layers:{type:Object,required:!1}},setup(e){const a=D(ae);let l=e.layers;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const r=()=>{!e.layers||!a.value||(l&&l.forEach(o=>{o.removeFrom(a.value)}),l=[],e.layers.forEach(o=>{l==null||l.push(o.addTo(a.value))}))};ee(r),G(()=>{l&&a.value&&(l.forEach(o=>{a.value.hasLayer(o)&&a.value.removeLayer(o)}),l=[])}),w(()=>e.layers,r)}};function ga(e,a,l,r,o,p){return q(e.$slots,"default")}const ba=x(xe,[["render",ga]]);xe.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"Layer[]"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Ve=B({name:"FSMap",components:{FSMapMarker:V,FSMapTileLayer:ba,FSMapLayerButton:ca,FSMapOverlay:fa,FSButton:E,FSCard:$e,FSCol:P},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},disabled:{type:Boolean,required:!1,default:!1},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:h.Collapse},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:null},bounds:{type:Object,required:!1,default:null},currentLayer:{type:String,required:!1,default:M.Map},allowedLayers:{type:Array,required:!1,default:()=>[M.Map,M.Imagery]},zoom:{type:Number,required:!1,default:16}},emits:["update:overlayMode","update:currentLayer","click:latlng","update:zoom","update:center"],setup(e,{emit:a}){const{layers:l}=ia(),{isExtraSmall:r}=qe(),{getColors:o}=Pe(),{slots:p}=ea(),t=y(),i=y(null),n=y(null),S=y(),F=y();Ce("map",n);const d=new ResizeObserver(()=>{n.value&&n.value.invalidateSize()}),m=O(()=>e.overlayMode!==h.Expand&&S.value&&r.value?S.value:0),I=O(()=>F.value&&!r.value?F.value:0),J=O(()=>({"--fs-map-location-pin-color":o(A.Primary).base,"--fs-map-mylocation-pin-color":o(A.Primary).base,"--fs-map-mylocation-pin-color-alpha":o(A.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${m.value}px`})),Ge=O(()=>{var s;return((s=l.find(u=>u.name===e.currentLayer))==null?void 0:s.layers)??l[0].layers}),Ze=O(()=>Object.keys(p).filter(s=>s.startsWith("overlay-")).reduce((s,u)=>(s[u.replace("overlay-","")]=p[u],s),{})),Y=(s,u)=>{if(!n.value)return s;u=u??n.value.getZoom();const c=n.value.project(s,u).subtract([I.value/2,-m.value/2]);return n.value.unproject(c,u)},Ae=(s,u,c,R)=>{if(n.value)if(r.value){let Z=0,le=m.value;const We=setInterval(()=>{(le===m.value||Z>=30)&&(clearInterval(We),n.value.flyTo(Y(f.latLng(s,u),c),c,R)),le=m.value,Z++},20)}else n.value.flyTo(Y(f.latLng(s,u),c),c,R)},ne=(s,u,c)=>{n.value&&n.value.setView(Y(f.latLng(s,u),c),c)},Ne=(s,u)=>{if(!n.value)return;const c=[I.value+24,24],R=[24,m.value+24],Z={paddingTopLeft:c,paddingBottomRight:R,...u};n.value.fitBounds(s,Z)};return ee(()=>{if(!t.value)return;const s={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom&&!e.disabled,dragging:!e.disabled,doubleClickZoom:!1,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1,zoom:e.zoom,center:e.center?f.latLng(e.center[0],e.center[1]):f.latLng(48.85782,2.29521)};n.value=_e(f.map(t.value,s)),n.value.on("click",u=>{a("click:latlng",u.latlng)}),n.value.on("zoomend",()=>{n.value&&a("update:zoom",n.value.getZoom())}),n.value.on("moveend",()=>{if(!n.value)return;const u=n.value.getCenter();a("update:center",[u.lat,u.lng])}),n.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(n.value),n.value.on("locationfound",u=>{u.latlng&&(i.value=u.latlng,n.value&&Ae(u.latlng.lat,u.latlng.lng,14))}),d.observe(t.value)}),G(()=>{d.disconnect()}),w([()=>e.center,()=>e.zoom],([s,u],[c,R])=>{!n.value||!e.center||!s||n.value.getZoom()===u&&n.value.getCenter().equals(f.latLng(s[0],s[1]))||((s[0]!==(c==null?void 0:c[0])||s[1]!==(c==null?void 0:c[1]))&&u!==R?ne(s[0],s[1],u):s[0]!==(c==null?void 0:c[0])||s[1]!==(c==null?void 0:c[1])?ne(s[0],s[1],n.value.getZoom()):u!==R&&n.value.setZoom(u))},{immediate:!0}),w([()=>e.bounds,()=>n.value],()=>{!n.value||!e.bounds||Ne(e.bounds,{maxZoom:14})}),w(()=>e.enableScrollWheelZoom,s=>{n.value&&(s?n.value.scrollWheelZoom.enable():n.value.scrollWheelZoom.disable())},{immediate:!0}),w(()=>e.disabled,s=>{n.value&&(s?(n.value.dragging.disable(),n.value.scrollWheelZoom.disable()):(n.value.dragging.enable(),e.enableScrollWheelZoom&&n.value.scrollWheelZoom.enable()))},{immediate:!0}),{ColorEnum:A,leafletContainer:t,overlayHeight:S,overlayWidth:F,map:n,actualLayer:Ge,layers:l,gpsPosition:i,style:J,overlaySlots:Ze}}}),Ma={ref:"leafletContainer",class:"fs-leaflet-container"};function Sa(e,a,l,r,o,p){const t=C("FSMapTileLayer"),i=C("FSMapMarker"),n=C("FSMapLayerButton"),S=C("FSCard"),F=C("FSMapOverlay");return b(),L(S,X({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:v(()=>{var d;return[ke("div",Ma,[e.map?(b(),U(j,{key:0},[g(t,{layers:e.actualLayer},null,8,["layers"]),e.gpsPosition?(b(),L(i,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):k("",!0),q(e.$slots,"default")],64)):k("",!0)],512),(d=e.$props.allowedLayers)!=null&&d.length&&e.$props.allowedLayers.length>1?(b(),L(n,{key:0,disabled:e.$props.disabled,layers:e.layers.filter(m=>{var I;return((I=e.$props.allowedLayers)==null?void 0:I.includes(m.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[0]||(a[0]=m=>e.$emit("update:currentLayer",m))},null,8,["disabled","layers","modelValue"])):k("",!0),e.map?(b(),L(P,{key:1,class:"fs-map-control-buttons"},{default:v(()=>[e.$props.showMyLocation?(b(),L(E,{key:0,disabled:e.$props.disabled,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[1]||(a[1]=()=>e.map.locate())},null,8,["disabled"])):k("",!0),e.$props.showZoomButtons?(b(),L(S,{key:1,elevation:!0},{default:v(()=>[g(P,{gap:"0"},{default:v(()=>[g(E,{disabled:e.$props.disabled,class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[2]||(a[2]=()=>e.map.zoomIn()),border:!1},null,8,["disabled"]),g(E,{disabled:e.$props.disabled,class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[3]||(a[3]=()=>e.map.zoomOut()),border:!1},null,8,["disabled"])]),_:1})]),_:1})):k("",!0)]),_:1})):k("",!0),e.overlaySlots&&Object.keys(e.overlaySlots).length?(b(),L(F,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[4]||(a[4]=m=>e.$emit("update:overlayMode",m)),"onUpdate:height":a[5]||(a[5]=m=>e.overlayHeight=m),"onUpdate:width":a[6]||(a[6]=m=>e.overlayWidth=m)},He({_:2},[Le(e.overlaySlots,(m,I)=>({name:I,fn:v(J=>[q(e.$slots,"overlay-"+I,Ue(je(J)))])}))]),1032,["mode"])):k("",!0)]}),_:3},16,["width","height","style"])}const z=x(Ve,[["render",Sa]]);Ve.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bounds",type:{name:"LatLngBounds | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"currentLayer",type:{name:"MapLayers"},required:!1,defaultValue:{func:!1,value:"MapLayers.Map"}},{name:"allowedLayers",type:{name:"MapLayers[]"},required:!1,defaultValue:{func:!0,value:"() => [MapLayers.Map, MapLayers.Imagery]"}},{name:"zoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"16"}}],events:[{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"click:latlng"},{name:"update:zoom"},{name:"update:center"}],slots:[{name:"default"},{name:"'overlay-' + name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const Be={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const l=D(ae);let r=!1;if(!l)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!l.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const o=y(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(t){return f.divIcon({html:ta(t.getChildCount()),className:"fs-map-marker fs-map-cluster-marker",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));Ce("markerClusterGroup",o);const p=()=>{if(!l.value)return;const t=o.value.getLayers();if(t.length===0&&r){l.value.removeLayer(o.value),r=!1;return}if(t.length===e.expectedLayers&&!r&&(o.value.addTo(l.value),r=!0),t.length===e.expectedLayers){const i=new f.LatLngBounds([]);for(const n of t)n.getBounds?i.extend(n.getBounds()):n.getLatLng&&i.extend(n.getLatLng());a("update:bounds",t.length>0?i:null)}};o.value.on("layeradd",p),o.value.on("layerremove",p),G(()=>{l.value&&l.value.hasLayer(o.value)&&l.value.removeLayer(o.value)})}};function ha(e,a,l,r,o,p){return q(e.$slots,"default")}const K=x(Be,[["render",ha]]);Be.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const pn={title:"Foundation/Shared/Map",component:z,tags:["autodocs"],argTypes:{...De(z),currentLayer:{control:"select",options:[M.Map,M.Imagery,M.Snow]},overlayMode:{control:"select",options:[h.Expand,h.Half,h.Collapse]}}},Q=[{id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},{id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},{id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},{id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},{id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}}],N={args:{overlayMode:h.Collapse,currentLayer:M.Map,height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>B({components:{FSMap:z,FSRow:$,FSMapMarker:V},inheritAttrs:!1,setup(){const a=y(Q[0]);return{args:e,location:a,onNewClick:r=>{console.log(r),a.value.address.latitude=r.lat,a.value.address.longitude=r.lng}}},template:`
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
      `})},W={args:{currentLayer:M.Imagery,overlayMode:h.Half},render:e=>({components:{FSMap:z,FSFadeOut:aa,FSRow:$,FSCol:P,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=y(null);return{args:e,locations:Q,bounds:a}},template:`
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
    `})},T={args:{currentLayer:M.Snow,allowedLayers:[M.Map,M.Imagery,M.Snow],grayscale:!1,enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=y(null);return{args:e,bounds:a}},template:`
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
    `})},_={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=y(null),l=y(null),r=y(null),o=y(10);return{args:e,bounds:a,zoom:o,center:r,selectedIndex:l,onClick:(t,i,n)=>{console.log(t),i==="blue"&&(o.value=15,r.value=[t.latlng.lat,t.latlng.lng]),i==="green"&&(r.value=[t.latlng.lat,t.latlng.lng]),l.value=n}}},template:`
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
    `})},H={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:z,FSMapMarker:V,FSMapMarkerClusterGroup:K,FSButton:E},setup(){const a=y([]),l=y(null);return{args:e,pins:a,bounds:l,addRandomPin:()=>{const p=Math.floor(Math.random()*Q.length),t=Q[p],n={id:na(),label:`Pin ${a.value.length+1}`,latitude:t.address.latitude+Math.random()*10-5,longitude:t.address.longitude+Math.random()*10-5};a.value.push(n)},removePin:p=>{const t=a.value.findIndex(i=>i.id===p);t!==-1&&a.value.splice(t,1)}}},template:`
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
}`,...(ie=(se=N.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,de,pe;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(pe=(de=W.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,me,fe;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(fe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ye,ve,ge;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(ge=(ve=_.parameters)==null?void 0:ve.docs)==null?void 0:ge.source}}};var be,Me,Se;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(Se=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};const cn=["SingleLocationMap","MultiLocationMap","CustomPinMap","ClickablePinMap","GeneratePinMap"];export{_ as ClickablePinMap,T as CustomPinMap,H as GeneratePinMap,W as MultiLocationMap,N as SingleLocationMap,cn as __namedExportsOrder,pn as default};
