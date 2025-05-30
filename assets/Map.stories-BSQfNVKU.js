import{d as B,c as E,z as h,H as g,C as f,R as y,I as he,J as Fe,m as ee,G as k,b as m,A as U,F as j,S as Le,q as J,Q as Z,E as F,Y as oe,a1 as te,U as ke,N as I,V as Te,i as D,w,a8 as _e,p as Ce,B as He,O as Ue,P as je}from"./vue.esm-bundler-DtArtqdn.js";import{a as De}from"./properties-Qw-O9fbT.js";import{l as c}from"./leaflet-src-CVI3lIVZ.js";import{F as Qe}from"./FSClickable-Lp9mb8CD.js";import{_ as $e}from"./FSSpan-Btkwe66a.js";import{_ as C}from"./FSRow-C-mN1bTt.js";import{_ as z}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as O}from"./FSButton-q8xhuZjd.js";import{F as Je}from"./FSDialog-BY4HSEIn.js";import{F as we}from"./FSCard-oEcmHswj.js";import{F as Ie}from"./FSIcon-DAU03b1P.js";import{F as P}from"./FSCol-D6yYDi9X.js";import{M as b,a as M}from"./map-Cp2HcdwH.js";import{u as Pe}from"./useBreakpoints-DjafNA1e.js";import{V as Ke}from"./VOverlay-Bjkk9AiY.js";import{u as qe,C as N}from"./useColors-P6sW9vWR.js";import{u as Ye}from"./useTranslations-CEyRES9c.js";import{u as Xe}from"./useSlots-DbyfVVj5.js";import{_ as ea}from"./FSFadeOut-okmKwNuP.js";import{u as aa}from"./uuid-DTaye2KM.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-BnjgQQHT.js";import"./vue-router-D25_MSGh.js";import"./css-Byt5yd9p.js";import"./VProgressCircular-vkSDrwPD.js";import"./color-DKVd81aj.js";import"./theme-BTycGIF1.js";import"./resizeObserver-Bx252tqU.js";import"./VIcon-_X0ionFS.js";import"./FSText-CyTnv_LZ.js";import"./VDialog-BTHijwvN.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-DNPVb8sx.js";import"./scopeId-DRx9AlMK.js";import"./VDefaultsProvider-ChCmi1O1.js";import"./anchor-CbVlxldO.js";import"./dimensions-Dt4h5jdR.js";import"./display-H53nrFTM.js";import"./locale-EnvrzLNX.js";import"./router-DPM6bvc5.js";import"./transition-POm6u0ds.js";import"./index-DfSX31J9.js";const na=(e,a,l="")=>`
  <div title="${l}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,la=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,oa=()=>'<div class="fs-map-mylocation-pin" />',ta=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`;var ra={};const sa=()=>{const{$tr:e}=Ye(),a=ra.VITE_GOOGLE_MAPS_API_KEY??"";return{layers:[{name:b.Map,label:e("ui.map-layer.map","Map"),image:new URL("../../assets/images/map/map.png",import.meta.url).href,layers:[c.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:b.Imagery,label:e("ui.map-layer.imagery","Imagery"),image:new URL("../../assets/images/map/imagery.png",import.meta.url).href,layers:[c.tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer"})]},{name:b.Snow,label:e("ui.map-layer.snow","Snow ski map"),image:new URL("../../assets/images/map/snow.png",import.meta.url).href,layers:[c.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${a}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data",className:"fs-map-tile-base-layer fs-map-tile-grayscale-layer"}),c.tileLayer("https://tiles.opensnowmap.org/pistes/{z}/{x}/{y}.png",{maxZoom:18,attribution:'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors & ODbL, &copy; <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',className:"fs-map-tile-base-layer"})]}]}},Oe=B({name:"FSImageCard",components:{FSClickable:Qe,FSSpan:$e,FSRow:C},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:E(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function ia(e,a,l,r,t,d){const o=k("FSClickable");return g(),h(o,ee({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:f(()=>[y(C,{align:"bottom-left",height:"fill"},{default:f(()=>[y(C,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:f(()=>[y($e,{font:"text-overline"},{default:f(()=>[he(Fe(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const ua=z(Oe,[["render",ia]]);Oe.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const Re=B({name:"FSMapLayerButton",components:{FSImageCard:ua,FSButton:O,FSDialog:Je,FSRow:C},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const l=m(!1);return{dialog:l,onLayerClick:t=>{a("update:modelValue",t),l.value=!1}}}});function da(e,a,l,r,t,d){const o=k("FSImageCard"),s=k("FSDialog");return g(),U(j,null,[y(O,ee({class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=n=>e.dialog=!0)},e.$attrs),null,16),y(s,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=n=>e.dialog=n),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:f(()=>[y(C,{align:"center-center",wrap:!1},{default:f(()=>[(g(!0),U(j,null,Le(e.layers,n=>(g(),h(o,{variant:e.modelValue===n.name?"full":"background",color:e.modelValue===n.name?"primary":"light",label:n.label,src:n.image,key:n.name,onClick:S=>e.onLayerClick(n.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const pa=z(Re,[["render",da]]);Re.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const ze=B({name:"FSMapOverlay",components:{FSCard:we,FSIcon:Ie,FSCol:P,FSRow:C},props:{mode:{type:String,required:!1,default:M.Collapse}},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:l,isTouchScreenEnabled:r}=Pe(),t=m(null),d=m(null),o=m(null),s=m(null),n=()=>{if(e.mode===M.Expand){a("update:mode",M.Collapse);return}a("update:mode",M.Expand)};return J(()=>{o.value=new ResizeObserver(S=>{S.forEach(L=>{a("update:height",L.contentRect.height)})}),s.value=new ResizeObserver(S=>{S.forEach(L=>{a("update:width",L.contentRect.width)})}),t.value&&(o.value.observe(t.value),a("update:height",t.value.offsetHeight)),d.value&&(s.value.observe(d.value.$el),a("update:width",d.value.$el.offsetWidth))}),Z(()=>{o.value&&o.value.disconnect(),s.value&&s.value.disconnect()}),{mobileOverlayWrapper:t,isTouchScreenEnabled:r,MapOverlayPositions:M,desktopOverlay:d,isExtraSmall:l,onClick:n}}});function ca(e,a,l,r,t,d){const o=k("FSCard");return g(),U(j,null,[e.isExtraSmall?(g(),h(Ke,{key:0,modelValue:e.$props.mode===e.MapOverlayPositions.Expand,contained:!0,onClick:a[0]||(a[0]=s=>e.$emit("update:mode",e.MapOverlayPositions.Collapse)),zIndex:"0"},null,8,["modelValue"])):F("",!0),oe(ke("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:Te({height:e.$props.mode===e.MapOverlayPositions.Expand?"90%":e.$props.mode===e.MapOverlayPositions.Half?"60%":"auto"})},[y(o,{width:"100%",height:"100%",elevation:!0,border:!1},{default:f(()=>[y(P,{height:"100%",gap:"0px"},{default:f(()=>[y(C,{align:"center-center",style:{cursor:"pointer"},onTouchstart:e.onClick,onMousedown:e.onClick},{default:f(()=>[y(Ie,null,{default:f(()=>[he(Fe(e.$props.mode===e.MapOverlayPositions.Expand?"mdi-chevron-down":"mdi-chevron-up"),1)]),_:1})]),_:1},8,["onTouchstart","onMousedown"]),e.$props.mode===e.MapOverlayPositions.Collapse?I(e.$slots,"collapsed",{key:0}):F("",!0),e.$props.mode!==e.MapOverlayPositions.Collapse?(g(),h(P,{key:1,height:"fill",style:{"min-height":"0"}},{default:f(()=>[I(e.$slots,"body")]),_:3})):F("",!0)]),_:3})]),_:3})],4),[[te,e.isExtraSmall]]),oe(y(o,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:f(()=>[y(P,{height:"fill"},{default:f(()=>[I(e.$slots,"body")]),_:3})]),_:3},512),[[te,!e.isExtraSmall]])],64)}const ma=z(ze,[["render",ca]]);ze.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"collapsed"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const ae="map",fa="markerClusterGroup",Ee={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1}},emits:["click"],setup(e,{emit:a}){const l=D(ae),r=D(fa,m(null)),{getColors:t}=qe(),d=()=>{if(e.variant==="gps")return c.divIcon({html:oa(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]});if(e.variant==="location")return c.divIcon({html:na(e.icon??"mdi-map-marker",t(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-marker fs-map-location fs-map-location-selected":"fs-map-marker fs-map-location",iconAnchor:[36/2,36/2]});const s=16;return c.divIcon({html:ta(t(e.color).base,e.label),iconSize:[s,s],className:e.selected?"fs-map-marker fs-map-pin fs-map-pin-selected":"fs-map-marker fs-map-pin",iconAnchor:[s/2,s/2]})},o=m(c.marker(e.latlng??[0,0],{icon:d()}));if(!l)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!l.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");w(l,()=>{l.value&&(r&&r.value?o.value.addTo(r.value):o.value.addTo(l.value))},{immediate:!0}),w([()=>e.variant,()=>e.color,()=>e.selected],()=>{var n;if(!o.value||!l.value)return;const s=d();(n=o.value)==null||n.setIcon(s)}),w([()=>{var s;return(s=e.latlng)==null?void 0:s.lat},()=>{var s;return(s=e.latlng)==null?void 0:s.lng}],()=>{!o.value||!l.value||!e.latlng||o.value.setLatLng(e.latlng)}),J(()=>{o.value.on("click",s=>{a("click",s)})}),Z(()=>{o.value&&l.value&&(r&&r.value?r.value.removeLayer(o.value):l.value.removeLayer(o.value))})}};function va(e,a,l,r,t,d){return I(e.$slots,"default")}const V=z(Ee,[["render",va]]);Ee.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const Ve={name:"FSMapTileLayer",props:{layers:{type:Object,required:!1}},setup(e){const a=D(ae);let l=e.layers;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const r=()=>{!e.layers||!a.value||(l&&l.forEach(t=>{t.removeFrom(a.value)}),l=[],e.layers.forEach(t=>{l==null||l.push(t.addTo(a.value))}))};J(r),Z(()=>{l&&a.value&&(l.forEach(t=>{a.value.hasLayer(t)&&a.value.removeLayer(t)}),l=[])}),w(()=>e.layers,r)}};function ya(e,a,l,r,t,d){return I(e.$slots,"default")}const ga=z(Ve,[["render",ya]]);Ve.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"Layer[]"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Ge=B({name:"FSMap",components:{FSMapMarker:V,FSMapTileLayer:ga,FSMapLayerButton:pa,FSMapOverlay:ma,FSButton:O,FSCard:we,FSCol:P},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},disabled:{type:Boolean,required:!1,default:!1},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:M.Collapse},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:null},bounds:{type:Object,required:!1,default:null},currentLayer:{type:String,required:!1,default:b.Map},allowedLayers:{type:Array,required:!1,default:()=>[b.Map,b.Imagery]},zoom:{type:Number,required:!1,default:16}},emits:["update:overlayMode","update:currentLayer","click:latlng","update:zoom","update:center"],setup(e,{emit:a}){const{layers:l}=sa(),{isExtraSmall:r}=Pe(),{getColors:t}=qe(),{slots:d}=Xe(),o=m(),s=m(null),n=m(null),S=m(),L=m();Ce("map",n);const G=new ResizeObserver(()=>{n.value&&n.value.invalidateSize()}),v=E(()=>e.overlayMode!==M.Expand&&S.value&&r.value?S.value:0),$=E(()=>L.value&&!r.value?L.value:0),Y=E(()=>({"--fs-map-location-pin-color":t(N.Primary).base,"--fs-map-mylocation-pin-color":t(N.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(N.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${v.value}px`})),Ze=E(()=>{var i;return((i=l.find(u=>u.name===e.currentLayer))==null?void 0:i.layers)??l[0].layers}),xe=E(()=>Object.keys(d).filter(i=>i.startsWith("overlay-")).reduce((i,u)=>(i[u.replace("overlay-","")]=d[u],i),{})),X=(i,u)=>{if(!n.value)return i;u=u??n.value.getZoom();const p=n.value.project(i,u).subtract([$.value/2,-v.value/2]);return n.value.unproject(p,u)},Ne=(i,u,p,q)=>{if(n.value)if(r.value){let x=0,le=v.value;const We=setInterval(()=>{(le===v.value||x>=30)&&(clearInterval(We),n.value.flyTo(X(c.latLng(i,u),p),p,q)),le=v.value,x++},20)}else n.value.flyTo(X(c.latLng(i,u),p),p,q)},ne=(i,u,p)=>{n.value&&n.value.setView(X(c.latLng(i,u),p),p)},Ae=(i,u)=>{if(!n.value)return;const p=[$.value+24,24],q=[24,v.value+24],x={paddingTopLeft:p,paddingBottomRight:q,...u};n.value.fitBounds(i,x)};return J(()=>{if(!o.value)return;const i={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom&&!e.disabled,dragging:!e.disabled,doubleClickZoom:!1,minZoom:2,maxZoom:22,maxBounds:c.latLngBounds(c.latLng(-90,-180),c.latLng(90,180)),maxBoundsViscosity:1,zoom:e.zoom,center:e.center?c.latLng(e.center[0],e.center[1]):c.latLng(48.85782,2.29521)};n.value=_e(c.map(o.value,i)),n.value.on("click",u=>{a("click:latlng",u.latlng)}),n.value.on("zoomend",()=>{n.value&&a("update:zoom",n.value.getZoom())}),n.value.on("moveend",()=>{if(!n.value)return;const u=n.value.getCenter();a("update:center",[u.lat,u.lng])}),n.value.attributionControl.remove(),c.control.attribution({position:"bottomleft"}).addTo(n.value),n.value.on("locationfound",u=>{u.latlng&&(s.value=u.latlng,n.value&&Ne(u.latlng.lat,u.latlng.lng,14))}),G.observe(o.value)}),Z(()=>{G.disconnect()}),w([()=>e.center,()=>e.zoom],([i,u],[p,q])=>{!n.value||!e.center||!i||n.value.getZoom()===u&&n.value.getCenter().equals(c.latLng(i[0],i[1]))||((i[0]!==(p==null?void 0:p[0])||i[1]!==(p==null?void 0:p[1]))&&u!==q?ne(i[0],i[1],u):i[0]!==(p==null?void 0:p[0])||i[1]!==(p==null?void 0:p[1])?ne(i[0],i[1],n.value.getZoom()):u!==q&&n.value.setZoom(u))},{immediate:!0}),w([()=>e.bounds,()=>n.value],()=>{!n.value||!e.bounds||Ae(e.bounds,{maxZoom:14})}),w(()=>e.enableScrollWheelZoom,i=>{n.value&&(i?n.value.scrollWheelZoom.enable():n.value.scrollWheelZoom.disable())},{immediate:!0}),w(()=>e.disabled,i=>{n.value&&(i?(n.value.dragging.disable(),n.value.scrollWheelZoom.disable()):(n.value.dragging.enable(),e.enableScrollWheelZoom&&n.value.scrollWheelZoom.enable()))},{immediate:!0}),{ColorEnum:N,leafletContainer:o,overlayHeight:S,overlayWidth:L,map:n,actualLayer:Ze,layers:l,gpsPosition:s,style:Y,overlaySlots:xe}}}),ba={ref:"leafletContainer",class:"fs-leaflet-container"};function Ma(e,a,l,r,t,d){const o=k("FSMapTileLayer"),s=k("FSMapMarker"),n=k("FSMapLayerButton"),S=k("FSCard"),L=k("FSMapOverlay");return g(),h(S,ee({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:f(()=>{var G;return[ke("div",ba,[e.map?(g(),U(j,{key:0},[y(o,{layers:e.actualLayer},null,8,["layers"]),e.gpsPosition?(g(),h(s,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):F("",!0),I(e.$slots,"default")],64)):F("",!0)],512),(G=e.$props.allowedLayers)!=null&&G.length&&e.$props.allowedLayers.length>1?(g(),h(n,{key:0,disabled:e.$props.disabled,layers:e.layers.filter(v=>{var $;return(($=e.$props.allowedLayers)==null?void 0:$.includes(v.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[0]||(a[0]=v=>e.$emit("update:currentLayer",v))},null,8,["disabled","layers","modelValue"])):F("",!0),e.map?(g(),h(P,{key:1,class:"fs-map-control-buttons"},{default:f(()=>[e.$props.showMyLocation?(g(),h(O,{key:0,disabled:e.$props.disabled,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[1]||(a[1]=()=>e.map.locate())},null,8,["disabled"])):F("",!0),e.$props.showZoomButtons?(g(),h(S,{key:1,elevation:!0},{default:f(()=>[y(P,{gap:"0"},{default:f(()=>[y(O,{disabled:e.$props.disabled,class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[2]||(a[2]=()=>e.map.zoomIn()),border:!1},null,8,["disabled"]),y(O,{disabled:e.$props.disabled,class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[3]||(a[3]=()=>e.map.zoomOut()),border:!1},null,8,["disabled"])]),_:1})]),_:1})):F("",!0)]),_:1})):F("",!0),e.overlaySlots&&Object.keys(e.overlaySlots).length?(g(),h(L,{key:2,mode:e.$props.overlayMode,"onUpdate:mode":a[4]||(a[4]=v=>e.$emit("update:overlayMode",v)),"onUpdate:height":a[5]||(a[5]=v=>e.overlayHeight=v),"onUpdate:width":a[6]||(a[6]=v=>e.overlayWidth=v)},He({_:2},[Le(e.overlaySlots,(v,$)=>({name:$,fn:f(Y=>[I(e.$slots,"overlay-"+$,Ue(je(Y)))])}))]),1032,["mode"])):F("",!0)]}),_:3},16,["width","height","style"])}const R=z(Ge,[["render",Ma]]);Ge.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"disabled",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",type:{name:"MapOverlayPositions"},required:!1,defaultValue:{func:!1,value:"MapOverlayPositions.Collapse"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[] | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"bounds",type:{name:"LatLngBounds | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"currentLayer",type:{name:"MapLayers"},required:!1,defaultValue:{func:!1,value:"MapLayers.Map"}},{name:"allowedLayers",type:{name:"MapLayers[]"},required:!1,defaultValue:{func:!0,value:"() => [MapLayers.Map, MapLayers.Imagery]"}},{name:"zoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"16"}}],events:[{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"click:latlng"},{name:"update:zoom"},{name:"update:center"}],slots:[{name:"default"},{name:"'overlay-' + name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const Be={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const l=D(ae);let r=!1;if(!l)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!l.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const t=m(new c.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(o){return c.divIcon({html:la(o.getChildCount()),className:"fs-map-marker fs-map-cluster-marker",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));Ce("markerClusterGroup",t);const d=()=>{if(!l.value)return;const o=t.value.getLayers();if(o.length===0&&r){l.value.removeLayer(t.value),r=!1;return}if(o.length===e.expectedLayers&&!r&&(t.value.addTo(l.value),r=!0),o.length===e.expectedLayers){const s=new c.LatLngBounds([]);for(const n of o)n.getBounds?s.extend(n.getBounds()):n.getLatLng&&s.extend(n.getLatLng());a("update:bounds",o.length>0?s:null)}};t.value.on("layeradd",d),t.value.on("layerremove",d),Z(()=>{l.value&&l.value.hasLayer(t.value)&&l.value.removeLayer(t.value)})}};function Sa(e,a,l,r,t,d){return I(e.$slots,"default")}const K=z(Be,[["render",Sa]]);Be.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const dn={title:"Foundation/Shared/Map",component:R,tags:["autodocs"],argTypes:{...De(R),currentLayer:{control:"select",options:[b.Map,b.Imagery,b.Snow]},overlayMode:{control:"select",options:[M.Expand,M.Half,M.Collapse]}}},Q=[{id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},{id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},{id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},{id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},{id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}}],A={args:{overlayMode:M.Collapse,currentLayer:b.Map,height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>B({components:{FSMap:R,FSRow:C,FSMapMarker:V},inheritAttrs:!1,setup(){const a=m(Q[0]);return{args:e,location:a,onNewClick:r=>{console.log(r),a.value.address.latitude=r.lat,a.value.address.longitude=r.lng}}},template:`
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
      `})},W={args:{currentLayer:b.Imagery,overlayMode:M.Half},render:e=>({components:{FSMap:R,FSFadeOut:ea,FSRow:C,FSCol:P,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=m(null);return{args:e,locations:Q,bounds:a}},template:`
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
    `})},T={args:{currentLayer:b.Snow,allowedLayers:[b.Map,b.Imagery,b.Snow],grayscale:!1,enableScrollWheelZoom:!0},render:e=>({components:{FSMap:R,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=m(null);return{args:e,bounds:a}},template:`
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
    `})},_={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:R,FSMapMarker:V,FSMapMarkerClusterGroup:K},setup(){const a=m(null),l=m(null),r=m(null),t=m(10);return{args:e,bounds:a,zoom:t,center:r,selectedIndex:l,onClick:(o,s,n)=>{console.log(o),s==="blue"&&(t.value=15,r.value=[o.latlng.lat,o.latlng.lng]),s==="green"&&(r.value=[o.latlng.lat,o.latlng.lng]),l.value=n}}},template:`
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
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})},H={args:{enableScrollWheelZoom:!0},render:e=>({components:{FSMap:R,FSMapMarker:V,FSMapMarkerClusterGroup:K,FSButton:O},setup(){const a=m([]),l=m(null);return{args:e,pins:a,bounds:l,addRandomPin:()=>{const d=Math.floor(Math.random()*Q.length),o=Q[d],n={id:aa(),label:`Pin ${a.value.length+1}`,latitude:o.address.latitude+Math.random()*10-5,longitude:o.address.longitude+Math.random()*10-5};a.value.push(n)},removePin:d=>{const o=a.value.findIndex(s=>s.id===d);o!==-1&&a.value.splice(o,1)}}},template:`
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
            @click="removePin(pin.id)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    `})};var re,se,ie;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var ue,de,pe;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(fe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:fe.source}}};var ve,ye,ge;_.parameters={..._.parameters,docs:{...(ve=_.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(ge=(ye=_.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var be,Me,Se;H.parameters={...H.parameters,docs:{...(be=H.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
            @click="removePin(pin.id)"
          />
        </FSMapMarkerClusterGroup>
      </FSMap>
    \`
  })
}`,...(Se=(Me=H.parameters)==null?void 0:Me.docs)==null?void 0:Se.source}}};const pn=["SingleLocationMap","MultiLocationMap","CustomPinMap","ClickablePinMap","GeneratePinMap"];export{_ as ClickablePinMap,T as CustomPinMap,H as GeneratePinMap,W as MultiLocationMap,A as SingleLocationMap,pn as __namedExportsOrder,dn as default};
