<template>
  <div class="mapContenedor">
    <!-- <GMapMap
      :center="center"
      ref="myMapRef"
      :zoom="10"
      map-type-id="terrain"
      style=""
      class="mapa"
    >
      <GMapMarker
        :position="this.markerPosition"
        :clickable="false"
        :draggable="true"
        @dragend="updateMarkerPosition"
      />
    </GMapMap> -->

    <!-- mapa de zona de sacanta enbebido -->
    <iframe
      height="450"
      style="border: 0; width: 75%; margin: auto"
      loading="lazy"
      allowfullscreen
      referrerpolicy="no-referrer-when-downgrade"
      src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCsrNj3q6jmjiavruiFIQIIR-xhWrDb6sQ&center=-31.6657037,-63.0722619
    &zoom=10"
    >
    </iframe>
  </div>
</template>

<script>
// import { GoogleMap, Marker } from "vue3-google-map";
export default {
  name: "MapaLocation",
  props: {
    setTextInput: Function,
  },
  data() {
    return {
      lat: "",
      lng: "",
      selectedLocation: null,
      center: { lat: -31.6657037, lng: -63.0722619 },
      markerPosition: { lat: -31.6657037, lng: -63.0722619 },
    };
  },
  created() {},
  methods: {},
};
</script>
<style scoped>
p {
  color: #4b4a49;
}
.mapContenedor {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 5%;
}
.mapa {
  width: 100%;
  height: 628px;
  margin: auto;
}
@media (max-width: 500px) {
  iframe {
    height: 157px;
  }
}
</style>
