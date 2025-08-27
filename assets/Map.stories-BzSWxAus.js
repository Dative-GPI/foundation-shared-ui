import{i as O,b as s,R as z,p as N,O as Q,d as H}from"./vue.esm-bundler-PONd4AmC.js";import{a as j}from"./properties-Qw-O9fbT.js";import{c as U,M as q,F as c,a as m}from"./FSMap-KwT9bkWn.js";import{F as J}from"./FSCol-Bfhiyt6Y.js";import{_ as $}from"./FSRow-C-b-hpWa.js";import{_ as V}from"./FSFadeOut-Dik6Imqk.js";import{a as S}from"./leaflet-src-BqBfykqS.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as K}from"./FSButton-BtOsEP4C.js";import{M as u,a as i}from"./map-DZJqnnPm.js";import{u as T}from"./uuid-DTaye2KM.js";import"./FSClickable-BpeLEfG7.js";import"./FSRouterLink-mxENRZ46.js";import"./vue-router-D84-pxgD.js";import"./FSCard-B7av1ouT.js";import"./useColors-WMY9wD-z.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_Z9wfsFC.js";import"./theme-DW7AHeJn.js";import"./css-BeoQuAfr.js";import"./useBreakpoints-RTs-XAJF.js";import"./VProgressCircular-D57tYVQX.js";import"./color-CQ7P2KsY.js";import"./resizeObserver-BAwzmH4Y.js";import"./VIcon-shEmQARK.js";import"./FSSpan-DqsaA-ji.js";import"./useSlots-nyIcwo6G.js";import"./FSDialog-B0dMniE4.js";import"./FSText-CaGosnIl.js";import"./VDialog-DuPuMCeo.js";import"./VOverlay-DZqv3aZJ.js";import"./easing-DY7PVvcf.js";import"./proxiedModel-BMHfYIia.js";import"./anchor-rLQXsCC5.js";import"./dimensions-D04OQyPe.js";import"./display-D1WOGNJY.js";import"./lazy-PL0gnfDR.js";import"./locale-CoLhg8Wl.js";import"./router-DS8hXbpn.js";import"./scopeId-DFcjERLl.js";import"./transition-BpYTYsmy.js";import"./forwardRefs-C-GTDzx5.js";import"./VDefaultsProvider--dbql3OT.js";import"./FSIcon-wf_hiRKr.js";import"./iframe-BmwtWRlW.js";import"../sb-preview/runtime.js";import"./useTranslations-_Q1DYra_.js";const W={name:"FSMapMarkerClusterGroup",props:{expectedLayers:{type:Number,default:0,required:!1},disableClusteringAtZoom:{type:Number,default:17,required:!1}},setup(a,{emit:n}){const o=O(q);let r=!1;if(!o)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component");if(!o.value)throw new Error("FSMapMarkerClusterGroup must be used inside a FSMap component with a map");const t=s(new S.MarkerClusterGroup({spiderfyOnMaxZoom:!1,showCoverageOnHover:!1,disableClusteringAtZoom:a.disableClusteringAtZoom,iconCreateFunction:function(e){return S.divIcon({html:U(e.getChildCount()),className:"fs-map-marker fs-map-cluster-marker",iconSize:[36,36],iconAnchor:[36/2,36/2]})}}));N("markerClusterGroup",t);const d=()=>{if(!o.value)return;const e=t.value.getLayers();if(e.length===0&&r){o.value.removeLayer(t.value),r=!1;return}if(e.length===a.expectedLayers&&!r&&(t.value.addTo(o.value),r=!0),e.length===a.expectedLayers){const l=new S.LatLngBounds([]);for(const p of e)p.getBounds?l.extend(p.getBounds()):p.getLatLng&&l.extend(p.getLatLng());n("update:bounds",e.length>0?l:null)}};t.value.on("layeradd",d),t.value.on("layerremove",d),z(()=>{o.value&&o.value.hasLayer(t.value)&&o.value.removeLayer(t.value)})}};function X(a,n,o,r,t,d){return Q(a.$slots,"default")}const f=D(W,[["render",X]]);W.__docgenInfo={displayName:"FSMapMarkerClusterGroup",exportName:"default",description:"",tags:{},props:[{name:"expectedLayers",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"0"}},{name:"disableClusteringAtZoom",type:{name:"number"},required:!1,defaultValue:{func:!1,value:"17"}}],slots:[{name:"default"}],sourceFiles:["/home/runner/work/foundation-shared-ui/foundation-shared-ui/src/shared/foundation-shared-components/components/map/FSMapMarkerClusterGroup.vue"]};const qe={title:"Foundation/Shared/Map",component:c,tags:["autodocs"],argTypes:{...j(c),currentLayer:{control:"select",options:[i.Map,i.Imagery,i.Snow]},overlayMode:{control:"select",options:[u.Expand,u.Half,u.Collapse]}}},F=[{id:"3fb7ebf0-3227-4767-bb96-001384efdd57",label:"Le Mans GERAL",address:{formattedAddress:"Bd Marie et Alexandre Oyon, 72100 Le Mans, France",locality:"Le Mans",country:"France",latitude:47.9946047,longitude:.1907672,placeId:"EjJCb3VsZXZhcmQgTWFyaWUgZXQgQWxleGFuZHJlIE95b24sIExlIE1hbnMsIEZyYW5jZSIuKiwKFAoSCZdY4sE2j-JHEfQHbY7RQXwpEhQKEgkxqvMU0ojiRxF_4H1qTF0CaQ",placeLabel:"Boulevard Marie et Alexandre Oyon, Le Mans, France"},icon:null,color:null},{id:"83963f32-6bd5-453d-b271-2b5a41672966",label:"Dative GPI",icon:"mdi-laptop",color:"primary",address:{formattedAddress:"100 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71175,longitude:5.071489,placeId:"",placeLabel:"Dative, France"}},{id:"44e00e4b-ef50-4f88-9fb2-d94659ee5881",label:"Gerard Perrier Industrie",icon:"mdi-home",color:"primary",address:{formattedAddress:"160 rue de norvège, Colombier Saugnieu, France",locality:"Colombier Saugnieu",country:"France",latitude:45.71129,longitude:5.071729,placeId:"",placeLabel:"GPI, France"}},{id:"4a3ced7a-d7e7-4004-b40a-ed57fa45615d",label:"Seirel Automatismes SAS",icon:"mdi-snowflake",color:"#FF0000",address:{formattedAddress:"7 Rue Galilée, 69800 Saint-Priest, France",locality:"Saint-Priest",country:"France",latitude:45.682349,longitude:4.956942,placeId:"",placeLabel:"Seirel, France"}},{id:"0598187c-3c63-413c-bc82-86c279027955",label:"D.E.S. FRIUL DI MIEC",address:{formattedAddress:"Via Ermes di Colloredo, 33040 Salt UD, Italie",locality:"Salt",country:"Italie",latitude:46.1158765,longitude:13.2881119,placeId:"EjBWaWEgRXJtZXMgZGkgQ29sbG9yZWRvLCBQb3ZvbGV0dG8sIFVkaW5lLCBJdGFsaWUiLiosChQKEgl_rhjEJEp6RxGWfpMrWhzPkBIUChIJn70qOztKekcRlT3jhsw1_cY",placeLabel:"Via Ermes di Colloredo, Povoletto, Udine, Italie"}}],g={args:{overlayMode:u.Collapse,currentLayer:i.Map,height:"100%",width:"100%",grayscale:!1,showMyLocation:!0,showZoomButtons:!0,enableScrollWheelZoom:!0},render:a=>H({components:{FSMap:c,FSRow:$,FSMapMarker:m},inheritAttrs:!1,setup(){const n=s(F[0]);return{args:a,location:n,onNewClick:r=>{console.log(r),n.value.address.latitude=r.lat,n.value.address.longitude=r.lng}}},template:`
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
      `})},v={args:{currentLayer:i.Imagery,overlayMode:u.Half},render:a=>({components:{FSMap:c,FSFadeOut:V,FSRow:$,FSCol:J,FSMapMarker:m,FSMapMarkerClusterGroup:f},setup(){const n=s(null);return{args:a,locations:F,bounds:n}},template:`
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
    `})},M={args:{currentLayer:i.Snow,allowedLayers:[i.Map,i.Imagery,i.Snow],grayscale:!1,enableScrollWheelZoom:!0},render:a=>({components:{FSMap:c,FSMapMarker:m,FSMapMarkerClusterGroup:f},setup(){const n=s(null);return{args:a,bounds:n}},template:`
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
    `})},y={args:{enableScrollWheelZoom:!0},render:a=>({components:{FSMap:c,FSMapMarker:m,FSMapMarkerClusterGroup:f},setup(){const n=s(null),o=s(null),r=s(null),t=s(10);return{args:a,bounds:n,zoom:t,center:r,selectedIndex:o,onClick:(e,l,p)=>{console.log(e),l==="blue"&&(t.value=15,r.value=[e.latlng.lat,e.latlng.lng]),l==="green"&&(r.value=[e.latlng.lat,e.latlng.lng]),o.value=p}}},template:`
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
    `})},b={args:{enableScrollWheelZoom:!0},render:a=>({components:{FSMap:c,FSMapMarker:m,FSMapMarkerClusterGroup:f,FSButton:K},setup(){const n=s([]),o=s(null);return{args:a,pins:n,bounds:o,addRandomPin:()=>{const d=Math.floor(Math.random()*F.length),e=F[d],p={id:T(),label:`Pin ${n.value.length+1}`,latitude:e.address.latitude+Math.random()*10-5,longitude:e.address.longitude+Math.random()*10-5};n.value.push(p)},removePin:d=>{const e=n.value.findIndex(l=>l.id===d);e!==-1&&n.value.splice(e,1)}}},template:`
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
    `})};var L,k,h;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(h=(k=g.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var C,x,I;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(x=v.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var w,G,P;M.parameters={...M.parameters,docs:{...(w=M.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(P=(G=M.parameters)==null?void 0:G.docs)==null?void 0:P.source}}};var R,Z,A;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(A=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:A.source}}};var E,B,_;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(_=(B=b.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};const Je=["SingleLocationMap","MultiLocationMap","CustomPinMap","ClickablePinMap","GeneratePinMap"];export{y as ClickablePinMap,M as CustomPinMap,b as GeneratePinMap,v as MultiLocationMap,g as SingleLocationMap,Je as __namedExportsOrder,qe as default};
