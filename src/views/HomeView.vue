<template>
  <videoComponent />
  <div class="main">
    <cardComponent />
    <btnServiciosComponent />
  </div>
  <ServiciosMunicipales />
  <MapComponent />
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
import btnServiciosComponent from "@/components/Home/BtnServiciosComponent.vue";
import cardComponent from "@/components/Home/CardComponent.vue";
import ServiciosMunicipales from "@/components/Home/ServiciosMunicipalesComponent.vue";
import MapComponent from "@/components/Home/MapComponent.vue";

export default {
  name: "HomeView",
  components: {
    videoComponent,
    btnServiciosComponent,
    cardComponent,
    ServiciosMunicipales,
    MapComponent,
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
}

.main {
  display: flex;
  align-items: center;
}
</style>
