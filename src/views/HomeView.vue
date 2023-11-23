<template>
  <videoComponent />
  <div class="main">
    <ImagenComponent />
    <CardEcoComponent />
    <div class="linea">
      <div class="izquierdo"></div>
      <h4>DESCUBRÍ NUESTROS PROGRAMAS</h4>
      <div class="derecho"></div>
    </div>
    <GridProgramasComponent />
    <CardConsejoComponent />
    <div class="linea">
      <div class="izquierdo"></div>
      <h4>TE MOSTRAMOS LAS ÚLTIMAS NOVEDADES</h4>
      <div class="derecho"></div>
    </div>
    <!-- <cardComponent /> -->
    <!-- <btnServiciosComponent /> -->
  </div>
  <!-- <ServiciosMunicipales /> -->
  <!-- <MapComponent /> -->
  <div class="programas">
    <!-- <Programa /> -->
    <!-- <Programa /> -->
  </div>
  <Noticias />
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
import ImagenComponent from "@/components/Imagen/ImagenComponent.vue";
import CardEcoComponent from "@/components/Ecologico/CardEcoComponent.vue";
import CardConsejoComponent from "@/components/Consejo/CardConsejoComponent.vue";
import GridProgramasComponent from "@/components/Programas/GridProgramasComponent.vue";
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
    CardEcoComponent,
    CardConsejoComponent,
    ImagenComponent,
    GridProgramasComponent,
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
  flex-direction: column;
}

.programas {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}
.linea {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: auto;
  margin-top: 5vh;
  margin-bottom: 5vh;
}
.linea h4 {
  font-weight: 600;
  color: #4b4a49;
}
.izquierdo {
  width: 33vw;
  height: 1px;
  background: #4b4a49;
}
.derecho {
  height: 1px;
  width: 33vw;
  background: #4b4a49;
}
</style>
