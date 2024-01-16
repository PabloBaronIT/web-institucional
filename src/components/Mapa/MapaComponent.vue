<template>
  <div class="mapContenedor">
    <GMapMap
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
    </GMapMap>
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
      //   updateMarkerPosition: (event) => {
      //     this.markerPosition.lat = event.latLng.lat();
      //     this.markerPosition.lng = event.latLng.lng();

      //     this.asd();
      //   },
    };
  },
  //   components: { GoogleMap, Marker },
  created() {
    // this.$getLocation()
    //   .then((coordinates) => {
    //     console.log(coordinates, "coordiantes");
    //     (this.center.lat = coordinates.lat),
    //       (this.center.lng = coordinates.lng);
    //     this.markerPosition.lat = coordinates.lat;
    //     this.markerPosition.lng = coordinates.lng;
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  methods: {
    // asd() {
    //   this.setTextInput(
    //     this.markerPosition.lat.toFixed(7),
    //     this.markerPosition.lng.toFixed(7)
    //   );
    // },
  },
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
}
.mapa {
  width: 100%;
  height: 628px;
  margin: auto;
}
@media (max-width: 800px) {
  .mapContenedor {
    padding-right: 20%;
  }
}
</style>
