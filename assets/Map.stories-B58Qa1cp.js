import{d as T,c as q,A as L,B as F,D as y,x as $e,I as m,R as h,J as ke,K as Ce,b as v,F as B,H as _,S as J,o as P,Q as Ie,G as M,Z as se,a2 as ie,P as Re,U as Ye,L as k,i as E,w as O,p as ee,v as Xe,C as ea,N as aa,O as na}from"./vue.esm-bundler-CTTOvLCD.js";import{l as f}from"./leaflet-src-CVI3lIVZ.js";import{F as oa}from"./FSClickable-DznopAj9.js";import{_ as qe}from"./FSSpan-QNtf4e4q.js";import{_ as b}from"./FSRow-C8EFLcn9.js";import{_ as I}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as V}from"./FSButton-B2X9DGvb.js";import{F as ta}from"./FSDialog-B6Z2dUh0.js";import{F as Oe}from"./FSCard-DxhVm8H0.js";import{F as Ve}from"./FSIcon-yzGYQgqh.js";import{F as C}from"./FSCol-BPr0jVzk.js";import{u as Ee}from"./useBreakpoints-Bm7CjYdd.js";import{b as ra}from"./VOverlay-Bysvo4NF.js";import{u as ae,C as W}from"./useColors-D7R-CyI7.js";import{u as la}from"./useSlots-NXmwCOLw.js";import{u as sa}from"./useTranslations-Dol6kQeQ.js";import{_ as Ae}from"./FSFadeOut-C2gEJSut.js";import{F as ia}from"./FSDialogMultiForm-C8mxa5So.js";import"./_commonjsHelpers-BosuxZz1.js";import"./FSRouterLink-Bb19gxv6.js";import"./vue-router-DzpOuZw-.js";import"./css-D46r6e5F.js";import"./VProgressCircular-it35si_v.js";import"./color-DTA1Qd0w.js";import"./theme-DpYUkAdN.js";import"./resizeObserver-Bwa55KU2.js";import"./VIcon-DzkIKThE.js";import"./FSText-zXSXSnZG.js";import"./VDialog-Cr2bmOLC.js";import"./forwardRefs-DWGaNmQL.js";import"./proxiedModel-Da7OD98r.js";import"./scopeId-DGVhnfG2.js";import"./VDefaultsProvider-45AVpOQL.js";import"./anchor-KPAVzGxJ.js";import"./dimensions-DIR9-JzD.js";import"./display-BWFgSvI7.js";import"./locale-Guk_W035.js";import"./router-SvtovJtL.js";import"./transition-C1y9a89u.js";import"./index-DfSX31J9.js";import"./uuid-DTaye2KM.js";import"./FSPagination-BO0FGe5w.js";import"./FSForm-BAYt8fPx.js";import"./form-gxFDX6UX.js";import"./FSWindow-BmTGXmTr.js";import"./group-CroFFR-b.js";import"./VBtn-IPVaR7st.js";import"./border-CjCUMUtA.js";import"./density-n-hig0Tg.js";import"./elevation-CqdG4vF6.js";import"./rounded-5tkyiosR.js";import"./loader-BcXzPxbu.js";import"./index-Bj6Uq_NX.js";import"./ssrBoot-C3MoFAVe.js";const ua=(e,a,n="")=>`
  <div title="${n}" style="--fs-map-location-pin-color-alpha:${a}50;--fs-map-location-pin-color: ${a}">
    <i class="${e} mdi notranslate v-theme--DefaultTheme fs-icon" aria-hidden="true" style="--fs-icon-font-size: 22px;" />
  </div>`,da=e=>`
  <div class="fs-map-cluster">
    <span>${e}</span>
  </div>`,pa=()=>'<div class="fs-map-mylocation-pin" />',ca=(e,a="")=>`<div title="${a}" style="--fs-map-point-pin-color:${e}" class="fs-map-point-pin" />`,Be=T({name:"FSImageCard",components:{FSClickable:oa,FSSpan:qe,FSRow:b},props:{src:{type:String,required:!0},label:{type:String,required:!0},height:{type:[Array,String,Number],required:!1,default:"110px"},width:{type:[Array,String,Number],required:!1,default:"200px"}},setup(e){return{style:q(()=>({"--fs-image-card-background":`url(${e.src})`}))}}});function ma(e,a,n,o,t,r){const p=L("FSClickable");return m(),F(p,$e({class:"fs-image-card",height:e.height,width:e.width,style:e.style},e.$attrs),{default:y(()=>[h(b,{align:"bottom-left",height:"fill"},{default:y(()=>[h(b,{class:"fs-image-card-label",align:"center-left",padding:"8px"},{default:y(()=>[h(qe,{font:"text-overline"},{default:y(()=>[ke(Ce(e.$props.label),1)]),_:1})]),_:1})]),_:1})]),_:1},16,["height","width","style"])}const fa=I(Be,[["render",ma]]);Be.__docgenInfo={displayName:"FSImageCard",exportName:"default",description:"",tags:{},props:[{name:"src",type:{name:"string"},required:!0},{name:"label",type:{name:"string"},required:!0},{name:"height",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'110px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'200px'"}}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/FSImageCard.vue"]};const _e=T({name:"FSMapLayerButton",components:{FSImageCard:fa,FSButton:V,FSDialog:ta,FSRow:b},props:{layers:{type:Array,required:!1,default:()=>[]},modelValue:{type:String,required:!1,default:""}},emits:["update:modelValue"],setup(e,{emit:a}){const n=v(!1);return{dialog:n,onLayerClick:t=>{a("update:modelValue",t),n.value=!1}}}});function ya(e,a,n,o,t,r){const p=L("FSImageCard"),c=L("FSDialog");return m(),B(_,null,[h(V,{class:"fs-map-layer-button",icon:"mdi-layers-outline",elevation:!0,onClick:a[0]||(a[0]=d=>e.dialog=!0)}),h(c,{modelValue:e.dialog,"onUpdate:modelValue":a[1]||(a[1]=d=>e.dialog=d),title:e.$tr("ui.map-layer.select","Select layer"),contained:!0},{body:y(()=>[h(b,{align:"center-center",wrap:!1},{default:y(()=>[(m(!0),B(_,null,J(e.layers,d=>(m(),F(p,{variant:e.modelValue===d.name?"full":"background",color:e.modelValue===d.name?"primary":"light",label:d.label,src:d.image,key:d.name,onClick:w=>e.onLayerClick(d.name)},null,8,["variant","color","label","src","onClick"]))),128))]),_:1})]),_:1},8,["modelValue","title"])],64)}const va=I(_e,[["render",ya]]);_e.__docgenInfo={displayName:"FSMapLayerButton",exportName:"default",description:"",tags:{},props:[{name:"layers",type:{name:"MapLayer[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"modelValue",type:{name:"string"},required:!1,defaultValue:{func:!1,value:'""'}}],events:[{name:"update:modelValue"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapLayerButton.vue"]};const Ge=T({name:"FSMapOverlay",components:{FSCard:Oe,FSIcon:Ve,FSCol:C,FSRow:b},props:{mode:{type:String,required:!1,default:"collapse"}},emits:["update:mode","update:height","update:width"],setup(e,{emit:a}){const{isExtraSmall:n,isTouchScreenEnabled:o}=Ee(),t=v(null),r=v(null),p=v(null),c=v(null),d=()=>{if(e.mode==="expand"){a("update:mode","collapse");return}a("update:mode","expand")};return P(()=>{p.value=new ResizeObserver(w=>{w.forEach(u=>{a("update:height",u.contentRect.height)})}),c.value=new ResizeObserver(w=>{w.forEach(u=>{a("update:width",u.contentRect.width)})}),t.value&&(p.value.observe(t.value),a("update:height",t.value.offsetHeight)),r.value&&(c.value.observe(r.value.$el),a("update:width",r.value.$el.offsetWidth))}),Ie(()=>{p.value&&p.value.disconnect(),c.value&&c.value.disconnect()}),{mobileOverlayWrapper:t,isTouchScreenEnabled:o,desktopOverlay:r,isExtraSmall:n,onClick:d}}});function ga(e,a,n,o,t,r){const p=L("FSCard");return m(),B(_,null,[e.isExtraSmall?(m(),F(ra,{key:0,modelValue:e.$props.mode==="expand",contained:!0,onClick:a[0]||(a[0]=c=>e.$emit("update:mode","collapse")),zIndex:"0"},null,8,["modelValue"])):M("",!0),se(Re("div",{ref:"mobileOverlayWrapper",class:"fs-map-overlay-mobile",style:Ye({height:e.$props.mode==="expand"?"90%":e.$props.mode==="half"?"60%":"auto"})},[h(p,{width:"100%",height:"100%",elevation:!0,border:!1},{default:y(()=>[h(C,{height:"100%",gap:"0px"},{default:y(()=>[h(b,{align:"center-center",style:{cursor:"pointer"},onTouchstart:e.onClick,onMousedown:e.onClick},{default:y(()=>[h(Ve,null,{default:y(()=>[ke(Ce(e.$props.mode==="expand"?"mdi-chevron-down":"mdi-chevron-up"),1)]),_:1})]),_:1},8,["onTouchstart","onMousedown"]),e.$props.mode==="collapse"?k(e.$slots,"collapsed",{key:0}):M("",!0),e.$props.mode!=="collapse"?(m(),F(C,{key:1,height:"fill",style:{"min-height":"0"}},{default:y(()=>[k(e.$slots,"body")]),_:3})):M("",!0)]),_:3})]),_:3})],4),[[ie,e.isExtraSmall]]),se(h(p,{class:"fs-map-overlay-desktop",ref:"desktopOverlay",elevation:!0,border:!1},{default:y(()=>[h(C,{height:"fill"},{default:y(()=>[k(e.$slots,"body")]),_:3})]),_:3},512),[[ie,!e.isExtraSmall]])],64)}const ha=I(Ge,[["render",ga]]);Ge.__docgenInfo={displayName:"FSMapOverlay",exportName:"default",description:"",tags:{},props:[{name:"mode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"collapse"'}}],events:[{name:"update:mode"},{name:"update:height"},{name:"update:width"}],slots:[{name:"collapsed"},{name:"body"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapOverlay.vue"]};const Sa="featureGroup",x="map",Fa="markerClusterGroup",Ze={name:"FSMapMarker",props:{variant:{type:String,default:"location",required:!1},color:{type:String,default:"primary",required:!1},latlng:{type:Object,required:!0},icon:{type:String,required:!1},selected:{type:Boolean,default:!1,required:!1},label:{type:String,required:!1}},emits:["click"],setup(e,{emit:a}){const n=E(x),o=E(Fa,v(null)),{getColors:t}=ae(),r=v(null);if(!n)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!n.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const p=()=>{if(!n.value||!e.latlng)return;r.value&&(o&&o.value?o.value.removeLayer(r.value):n.value.removeLayer(r.value));let c=null;e.variant==="gps"?c=f.divIcon({html:pa(),className:"fs-map-mylocation",iconSize:[16,16],iconAnchor:[16/2,16/2]}):e.variant==="location"&&e.icon?c=f.divIcon({html:ua(e.icon,t(e.color).base,e.label),iconSize:[36,36],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[36/2,36/2]}):c=f.divIcon({html:ca(t(e.color).base),iconSize:[20,20],className:e.selected?"fs-map-location fs-map-location-selected":"fs-map-location",iconAnchor:[20/2,20/2]}),r.value=f.marker(e.latlng,{icon:c}),r.value.on("click",d=>{a("click",d)}),o&&o.value?r.value.addTo(o.value):r.value.addTo(n.value)};P(p),O(()=>[e.variant,e.color,e.latlng,e.selected],p)}};function La(e,a,n,o,t,r){return k(e.$slots,"default")}const Ma=I(Ze,[["render",La]]);Ze.__docgenInfo={displayName:"FSMapMarker",exportName:"default",description:"",tags:{},props:[{name:"variant",values:["gps","location","pin"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'location'"}},{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlng",type:{name:'Pick<LatLng, "lat" | "lng"> | null'},required:!0},{name:"icon",type:{name:"string"},required:!1},{name:"selected",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"label",type:{name:"string"},required:!1}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarker.vue"]};const ze={name:"FSMapTileLayer",props:{layer:{type:Object,required:!1}},setup(e){const a=E(x),n=e.layer;if(!a)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!a.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const o=()=>{!e.layer||!a.value||(n&&a.value.removeLayer(n),e.layer.addTo(a.value))};P(o),O(()=>e.layer,o)}};function ba(e,a,n,o,t,r){return k(e.$slots,"default")}const wa=I(ze,[["render",ba]]);ze.__docgenInfo={displayName:"FSMapTileLayer",exportName:"default",description:"",tags:{},props:[{name:"layer",type:{name:"Layer"},required:!1}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapTileLayer.vue"]};const Te={name:"FSMapFeatureGroup",props:{expectedLayers:{type:Number,default:0,required:!1}},setup(e,{emit:a}){const n=E(x);let o=!1;if(!n)throw new Error("FSMapFeatureGroup must be used inside a FSMap component");if(!n.value)throw new Error("FSMapFeatureGroup must be used inside a FSMap component with a map");const t=v(new f.FeatureGroup);ee("featureGroup",t),t.value.on("layeradd",()=>{if(!n.value)return;t.value.getLayers().length===e.expectedLayers&&!o&&(t.value.addTo(n.value),o=!0,a("update:bounds",t.value.getBounds()))})}};function $a(e,a,n,o,t,r){return k(e.$slots,"default")}const ka=I(Te,[["render",$a]]);Te.__docgenInfo={displayName:"FSMapFeatureGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapFeatureGroup.vue"]};const Pe={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(e,{emit:a}){const n=E(x);let o=!1;if(!n)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!n.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const t=v(new f.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:e.disableClusteringAtZoom,iconCreateFunction:function(r){return f.divIcon({html:da(r.getChildCount()),className:"fs-map-location fs-map-location-full",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));ee("markerClusterGroup",t),t.value.on("layeradd",()=>{if(!n.value)return;t.value.getLayers().length===e.expectedLayers&&!o&&(t.value.addTo(n.value),o=!0,a("update:bounds",t.value.getBounds()))})}};function Ca(e,a,n,o,t,r){return k(e.$slots,"default")}const Ia=I(Pe,[["render",Ca]]);Pe.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const xe={name:"FSMapPolygon",props:{color:{type:String,default:"primary",required:!1},latlngs:{type:Array,required:!0}},emits:["click"],setup(e,{emit:a}){const n=E(x),o=E(Sa,v(null)),{getColors:t}=ae(),r=v(null);if(!n)throw new Error("FSMapTileLayer must be used inside a FSMap component");if(!n.value)throw new Error("FSMapTileLayer must be used inside a FSMap component with a map");const p=()=>{if(!n.value||!e.latlngs)return;r.value&&(o&&o.value?o.value.removeLayer(r.value):n.value.removeLayer(r.value));const c=t(e.color).base;r.value=f.polygon(e.latlngs.map(d=>[d.lat,d.lng]),{color:c,fillColor:c+"50",fillOpacity:.5,className:"fs-map-area"}),r.value.on("click",d=>{a("click",d)}),o&&o.value?r.value.addTo(o.value):r.value.addTo(n.value)};P(p),O(()=>[e.color,e.latlngs],p)}};function Ra(e,a,n,o,t,r){return k(e.$slots,"default")}const qa=I(xe,[["render",Ra]]);xe.__docgenInfo={displayName:"FSMapPolygon",exportName:"default",description:"",tags:{},props:[{name:"color",type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'primary'"}},{name:"latlngs",type:{name:'Pick<LatLng, "lat" | "lng">[] | null'},required:!0}],events:[{name:"click"}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapPolygon.vue"]};var ue={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1,STORYBOOK:"true"};const Ne=T({name:"FSMap",components:{FSMapMarker:Ma,FSMapTileLayer:wa,FSMapFeatureGroup:ka,FSMapMarkerClusterGroup:Ia,FSMapPolygon:qa,FSMapLayerButton:va,FSMapOverlay:ha,FSButton:V,FSCard:Oe,FSCol:C},props:{height:{type:[String,Number],required:!1,default:"400px"},width:{type:[Array,String,Number],required:!1,default:"100%"},grayscale:{type:Boolean,required:!1,default:!1},overlayMode:{type:String,required:!1,default:"collapse"},showMyLocation:{type:Boolean,required:!1,default:!0},showZoomButtons:{type:Boolean,required:!1,default:!0},enableScrollWheelZoom:{type:Boolean,required:!1,default:!1},center:{type:Array,required:!1,default:()=>[45.71,5.07]},locations:{type:Array,required:!1,default:()=>[]},areas:{type:Array,required:!1,default:()=>[]},currentLayer:{type:String,required:!1,default:"map"},allowedLayers:{type:Array,required:!1,default:()=>["map","imagery"]},selectedLocationId:{type:String,required:!1,default:null},selectedAreaId:{type:String,required:!1,default:null}},emits:["update:modelValue","update:selectedLocationId","update:selectedAreaId","update:overlayMode","update:currentLayer","click:latlng"],setup(e,{emit:a}){const{$tr:n}=sa(),{isExtraSmall:o}=Ee(),{getColors:t}=ae(),{slots:r}=la(),p=v(),c=v(),d=v(),w=v(null),u=v(null),Z=v(),A=v();ee("map",u);const R=16,z=new ResizeObserver(()=>{u.value&&u.value.invalidateSize()}),i=[{name:"map",label:n("ui.map-layer.map","Map"),image:new URL(""+new URL("map-ZY9NaImr.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}&key=${ue.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})},{name:"imagery",label:n("ui.map-layer.imagery","Imagery"),image:new URL(""+new URL("imagery-BfKgd9Qv.png",import.meta.url).href,import.meta.url).href,layer:f.tileLayer(`https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}&key=${ue.VITE_GOOGLE_MAPS_API_KEY??""}`,{maxZoom:22,subdomains:["mt0","mt1","mt2","mt3"],attribution:"© Google Map Data"})}],g=q(()=>e.overlayMode!=="expand"&&Z.value&&o.value?Z.value:0),N=q(()=>A.value&&!o.value?A.value:0),He=q(()=>({"--fs-map-location-pin-color":t(W.Primary).base,"--fs-map-mylocation-pin-color":t(W.Primary).base,"--fs-map-mylocation-pin-color-alpha":t(W.Primary).base+"50","--fs-map-container-grayscale":e.grayscale?"0.9":"0","--fs-map-control-buttons-margin-bottom":`${g.value}px`})),je=q(()=>{var l;return((l=i.find(s=>s.name===e.currentLayer))==null?void 0:l.layer)??i[0].layer}),Qe=q(()=>{if(!c.value&&!d.value)return null;let l=c.value;return l&&d.value?l.extend(d.value):d.value&&(l=d.value),l}),Ke=q(()=>Object.keys(r).filter(l=>l.startsWith("overlay-")).reduce((l,s)=>(l[s.replace("overlay-","")]=r[s],l),{})),Y=(l,s)=>{if(!u.value)return l;s=s??u.value.getZoom();const S=u.value.project(l,s).subtract([N.value/2,-g.value/2]);return u.value.unproject(S,s)},oe=(l,s,S=R,$)=>{if(u.value)if(o.value){let D=0,le=g.value;const Je=setInterval(()=>{(le===g.value||D>=30)&&(clearInterval(Je),u.value.flyTo(Y(f.latLng(l,s),S),S,$)),le=g.value,D++},20)}else u.value.flyTo(Y(f.latLng(l,s),S),S,$)},te=(l,s,S)=>{u.value&&u.value.setView(Y(f.latLng(l,s)),S)},re=(l,s)=>{if(!u.value)return;const S=[N.value,0],$=[0,g.value],D={paddingTopLeft:S,paddingBottomRight:$,...s};u.value.fitBounds(l,D)};return P(()=>{if(!p.value)return;const l={zoomControl:!1,scrollWheelZoom:e.enableScrollWheelZoom,minZoom:2,maxZoom:22,maxBounds:f.latLngBounds(f.latLng(-90,-180),f.latLng(90,180)),maxBoundsViscosity:1};u.value=Xe(f.map(p.value,l)),te(e.center[0],e.center[1],R),u.value.on("click",s=>{a("click:latlng",s.latlng)}),u.value.attributionControl.remove(),f.control.attribution({position:"bottomleft"}).addTo(u.value),u.value.on("locationfound",s=>{s.latlng&&(w.value=s.latlng,u.value&&oe(s.latlng.lat,s.latlng.lng))}),z.observe(p.value)}),Ie(()=>{z.disconnect()}),O(()=>e.center,l=>{u.value&&te(l[0],l[1],R)}),O(()=>e.selectedLocationId,l=>{if(!u.value)return;const s=e.locations.find(S=>S.id===l);s&&oe(s==null?void 0:s.address.latitude,s==null?void 0:s.address.longitude,R,{animate:!1})},{immediate:!0}),O(()=>e.selectedAreaId,l=>{if(!u.value)return;const s=e.areas.find($=>$.id===l);if(!s)return;const S=f.latLngBounds(s.coordinates.map($=>f.latLng($.latitude,$.longitude)));re(S)},{immediate:!0}),O(()=>Qe.value,l=>{!u.value||!l||re(l,{maxZoom:R})}),{ColorEnum:W,defaultZoom:R,leafletContainer:p,locationGroupBounds:c,overlayHeight:Z,overlayWidth:A,areaGroupBounds:d,map:u,actualLayer:je,mapLayers:i,gpsPosition:w,style:He,overlaySlots:Ke}}}),Oa={ref:"leafletContainer",class:"fs-leaflet-container"};function Va(e,a,n,o,t,r){const p=L("FSMapTileLayer"),c=L("FSMapMarker"),d=L("FSMapPolygon"),w=L("FSMapFeatureGroup"),u=L("FSMapMarkerClusterGroup"),Z=L("FSMapLayerButton"),A=L("FSCard"),R=L("FSMapOverlay");return m(),F(A,$e({class:"fs-map",width:e.$props.width,height:e.$props.height,style:e.style},e.$attrs),{default:y(()=>{var z;return[Re("div",Oa,[e.map?(m(),B(_,{key:0},[h(p,{layer:e.actualLayer},null,8,["layer"]),e.gpsPosition?(m(),F(c,{key:0,variant:"gps",color:e.ColorEnum.Primary,latlng:e.gpsPosition},null,8,["color","latlng"])):M("",!0),e.$props.areas?(m(),F(w,{key:1,"expected-layers":e.$props.areas.length,"onUpdate:bounds":a[0]||(a[0]=i=>e.areaGroupBounds=i)},{default:y(()=>[(m(!0),B(_,null,J(e.areas,i=>(m(),F(d,{key:i.id,color:i.color,latlngs:i.coordinates.map(g=>({lat:g.latitude,lng:g.longitude})),onClick:g=>e.$emit("update:selectedAreaId",i.id)},null,8,["color","latlngs","onClick"]))),128))]),_:1},8,["expected-layers"])):M("",!0),e.$props.locations?(m(),F(u,{key:2,"expected-layers":e.$props.locations.length,disableClusteringAtZoom:e.defaultZoom,"onUpdate:bounds":a[1]||(a[1]=i=>e.locationGroupBounds=i)},{default:y(()=>[(m(!0),B(_,null,J(e.$props.locations,i=>(m(),F(c,{selected:i.id===e.$props.selectedLocationId,key:i.id,label:i.label,color:i.color??e.ColorEnum.Primary,icon:i.icon??"mdi-map-marker",latlng:{lat:i.address.latitude,lng:i.address.longitude},onClick:g=>e.$emit("update:selectedLocationId",i.id)},null,8,["selected","label","color","icon","latlng","onClick"]))),128))]),_:1},8,["expected-layers","disableClusteringAtZoom"])):M("",!0)],64)):M("",!0)],512),(z=e.$props.allowedLayers)!=null&&z.length&&e.$props.allowedLayers.length>1?(m(),F(Z,{key:0,layers:e.mapLayers.filter(i=>{var g;return((g=e.$props.allowedLayers)==null?void 0:g.includes(i.name))??!0}),modelValue:e.$props.currentLayer,"onUpdate:modelValue":a[2]||(a[2]=i=>e.$emit("update:currentLayer",i))},null,8,["layers","modelValue"])):M("",!0),e.map?(m(),F(C,{key:1,class:"fs-map-control-buttons"},{default:y(()=>[e.$props.showMyLocation?(m(),F(V,{key:0,icon:"mdi-crosshairs-gps",color:"primary",variant:"full",elevation:!0,onClick:a[3]||(a[3]=()=>e.map.locate())})):M("",!0),e.$props.showZoomButtons?(m(),F(A,{key:1,elevation:!0},{default:y(()=>[h(C,{gap:"0"},{default:y(()=>[h(V,{class:"fs-map-zoom-plus-button",icon:"mdi-plus",onClick:a[4]||(a[4]=()=>e.map.zoomIn()),border:!1}),h(V,{class:"fs-map-zoom-minus-button",icon:"mdi-minus",onClick:a[5]||(a[5]=()=>e.map.zoomOut()),border:!1})]),_:1})]),_:1})):M("",!0)]),_:1})):M("",!0),h(R,{mode:e.$props.overlayMode,"onUpdate:mode":a[6]||(a[6]=i=>e.$emit("update:overlayMode",i)),"onUpdate:height":a[7]||(a[7]=i=>e.overlayHeight=i),"onUpdate:width":a[8]||(a[8]=i=>e.overlayWidth=i)},ea({_:2},[J(e.overlaySlots,(i,g)=>({name:g,fn:y(N=>[k(e.$slots,"overlay-"+g,aa(na(N)))])}))]),1032,["mode"])]}),_:3},16,["width","height","style"])}const G=I(Ne,[["render",Va]]);Ne.__docgenInfo={displayName:"FSMap",exportName:"default",description:"",tags:{},props:[{name:"height",type:{name:"string | number | null"},required:!1,defaultValue:{func:!1,value:"'400px'"}},{name:"width",type:{name:"string[] | number[] | string | number | null"},required:!1,defaultValue:{func:!1,value:"'100%'"}},{name:"grayscale",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"overlayMode",values:["collapse","half","expand"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:"'collapse'"}},{name:"showMyLocation",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"showZoomButtons",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"true"}},{name:"enableScrollWheelZoom",type:{name:"boolean"},required:!1,defaultValue:{func:!1,value:"false"}},{name:"center",type:{name:"number[]"},required:!1,defaultValue:{func:!0,value:"() => [45.71, 5.07]"}},{name:"locations",type:{name:"FSLocation[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"areas",type:{name:"FSArea[]"},required:!1,defaultValue:{func:!0,value:"() => []"}},{name:"currentLayer",values:["map","imagery"],type:{name:"string"},required:!1,defaultValue:{func:!1,value:'"map"'}},{name:"allowedLayers",type:{name:"string[]"},required:!1,defaultValue:{func:!0,value:'() => ["map", "imagery"]'}},{name:"selectedLocationId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}},{name:"selectedAreaId",type:{name:"string | null"},required:!1,defaultValue:{func:!1,value:"null"}}],events:[{name:"update:selectedAreaId"},{name:"update:selectedLocationId"},{name:"update:currentLayer"},{name:"update:overlayMode"},{name:"update:modelValue"},{name:"click:latlng"}],slots:[{name:"'overlay-' + name",scoped:!0,bindings:[{name:"name",title:"binding"}]}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMap.vue"]};const Bn={title:"Foundation/Shared/Map",component:G,tags:["autodocs"],argTypes:{currentLayer:{control:"select",options:["map","imagery"]},overlayMode:{control:"select",options:["collapse","half","expand"]}}},X={id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},ne={id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},De={id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},We={id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},Ue={id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}},Ea={id:"area1",color:"error",coordinates:[{latitude:45.799455,longitude:4.886445},{latitude:45.904229,longitude:5.193776},{latitude:45.582651,longitude:5.308631},{latitude:45.476594,longitude:5.0013},{latitude:45.836335,longitude:4.754118}]},U={args:{locations:[X],selectedLocationId:X.id,overlayMode:"collapse",currentLayer:"map",height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:e=>T({components:{FSMap:G,FSRow:b},inheritAttrs:!1,setup(){return{args:e}},template:`
        <FSRow height="500px">
          <FSMap
            :width="args.width"
            :height="args.height"
            v-model:overlayMode="args.overlayMode"
            v-model:currentLayer="args.currentLayer"
            v-model:selectedLocationId="args.selectedLocationId"
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template #overlay-body>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      `})},H={args:{locations:[ne,De,We,Ue],selectedLocationId:null,currentLayer:"imagery",overlayMode:"half"},render:e=>({components:{FSMap:G,FSFadeOut:Ae,FSRow:b,FSCol:C},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
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
    `})},j={args:{locations:[ne,De,We,Ue],selectedLocationId:null,currentLayer:"map"},render:e=>({components:{FSMap:G,FSFadeOut:Ae,FSRow:b,FSCol:C},setup(){return{args:e}},template:`
      <FSMap
        :overlayMode="args.selectedLocationId ? 'half' : 'collapse'"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
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
    `})},Q={args:{locations:[X,ne],areas:[Ea],selectedLocationId:null,selectedAreaId:null,overlayMode:"collapse",currentLayer:"map"},render:e=>({components:{FSMap:G,FSRow:b},setup(){return{args:e}},template:`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template #overlay-body>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
        <template #overlay-collapsed>
          <FSRow>
            <span>Collapsed overlay</span>
          </FSRow>
        </template>
      </FSMap>
    `})},K={args:{showDialog:!1},render:e=>({components:{FSMap:G,FSDialogMultiForm:ia,FSButton:V},setup(){return{args:e}},template:`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    `})};var de,pe,ce;U.parameters={...U.parameters,docs:{...(de=U.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    locations: [location1],
    selectedLocationId: location1.id,
    overlayMode: 'collapse',
    currentLayer: 'map',
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
      FSRow
    },
    inheritAttrs: false,
    setup() {
      return {
        args
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
            :locations="args.locations"
            :grayscale="args.grayscale"
            :showMyLocation="args.showMyLocation"
            :showZoomButtons="args.showZoomButtons"
            :enableScrollWheelZoom="args.enableScrollWheelZoom"
          >
            <template #overlay-body>
              <FSRow>
                <span>Fixed header for the overlay</span>
              </FSRow>
            </template>
          </FSMap>
        </FSRow>
      \`
  })
}`,...(ce=(pe=U.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};var me,fe,ye;H.parameters={...H.parameters,docs:{...(me=H.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    locations: [location2, location3, location4, location5],
    selectedLocationId: null,
    currentLayer: 'imagery',
    overlayMode: 'half'
  },
  render: args => ({
    components: {
      FSMap,
      FSFadeOut,
      FSRow,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
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
}`,...(ye=(fe=H.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var ve,ge,he;j.parameters={...j.parameters,docs:{...(ve=j.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    locations: [location2, location3, location4, location5],
    selectedLocationId: null,
    currentLayer: 'map'
  },
  render: args => ({
    components: {
      FSMap,
      FSFadeOut,
      FSRow,
      FSCol
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        :overlayMode="args.selectedLocationId ? 'half' : 'collapse'"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        :locations="args.locations"
      >
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
}`,...(he=(ge=j.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var Se,Fe,Le;Q.parameters={...Q.parameters,docs:{...(Se=Q.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    locations: [location1, location2],
    areas: [area1],
    selectedLocationId: null,
    selectedAreaId: null,
    overlayMode: 'collapse',
    currentLayer: 'map'
  },
  render: args => ({
    components: {
      FSMap,
      FSRow
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <FSMap
        v-model:overlayMode="args.overlayMode"
        v-model:currentLayer="args.currentLayer"
        v-model:selectedLocationId="args.selectedLocationId"
        v-model:selectedAreaId="args.selectedAreaId"
        :locations="args.locations"
        :areas="args.areas"
      >
        <template #overlay-body>
          <FSRow>
            <span>Overlay for area selection</span>
          </FSRow>
        </template>
        <template #overlay-collapsed>
          <FSRow>
            <span>Collapsed overlay</span>
          </FSRow>
        </template>
      </FSMap>
    \`
  })
}`,...(Le=(Fe=Q.parameters)==null?void 0:Fe.docs)==null?void 0:Le.source}}};var Me,be,we;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    showDialog: false
  },
  render: args => ({
    components: {
      FSMap,
      FSDialogMultiForm,
      FSButton
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <div>
        <FSButton label="Open dialog with map" @click="args.showDialog = true" />
        <FSDialogMultiForm
          v-model="args.showDialog"
          width="800px"
          :steps="2"
          title="Edit location"
        >
          <template #step-2>
            <FSMap />
          </template>
        </FSDialogMultiForm>
      </div>
    \`
  })
}`,...(we=(be=K.parameters)==null?void 0:be.docs)==null?void 0:we.source}}};const _n=["SingleLocationMap","MultiLocationMap","MultiLocationMapClick","AreaMap","MapInDialog"];export{Q as AreaMap,K as MapInDialog,H as MultiLocationMap,j as MultiLocationMapClick,U as SingleLocationMap,_n as __namedExportsOrder,Bn as default};
