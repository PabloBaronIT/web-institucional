<template>
  <videoComponent />
  <div class="main">
    <!-- <cardComponent /> -->
    <!-- <btnServiciosComponent /> -->
  </div>
  <!-- <ServiciosMunicipales /> -->
  <!-- <MapComponent /> -->
  <div class="programas">
    <!-- <Programa /> -->
    <!-- <Programa /> -->
  </div>
  <!-- <Noticias /> -->
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
// import btnServiciosComponent from "@/components/Home/BtnServiciosComponent.vue";
// import cardComponent from "@/components/Home/CardComponent.vue";
// import ServiciosMunicipales from "@/components/Home/ServiciosMunicipalesComponent.vue";
// import MapComponent from "@/components/Home/MapComponent.vue";
// import Programa from "@/components/Home/ProgramaComponent.vue";
// import Noticias from "@/components/Home/NoticiasComponent.vue";

export default {
  name: "HomeView",
  components: {
    videoComponent,
    // btnServiciosComponent,
    // cardComponent,
    // ServiciosMunicipales,
    // MapComponent,
    // Programa,
    // Noticias,
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

.programas {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
</style>
