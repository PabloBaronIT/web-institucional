<template>
  <div>
    <videoComponent />
    <TarjetasComponent />
    <div class="masGestiones">
      <p>Ingresá aquí para más gestiones</p>
    </div>
    <ImagenComponent />
    <CardEcoComponent />
    <PromocionesComponent />
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>DESCUBRÍ NUESTROS PROGRAMA</h5>
      <div class="derecho"></div>
    </div>
    <GridProgramasComponent />
    <div class="consejo">
      <CardConsejoComponent />
    </div>
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>TE MOSTRAMOS LAS ÚLTIMAS NOVEDADES</h5>
      <div class="derecho"></div>
    </div>
    <!-- <div class="carouselNoticias"> -->
    <CarouselComponent />
    <!-- </div> -->

    <!-- <cardComponent /> -->
    <!-- <btnServiciosComponent /> -->
    <!-- <ServiciosMunicipales /> -->
    <!-- <MapComponent /> -->
    <!-- <div class="programas"> -->
    <!-- <Programa /> -->
    <!-- <Programa /> -->
    <!-- </div> -->
    <Noticias />
  </div>
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
import ImagenComponent from "@/components/Imagen/ImagenComponent.vue";
import CardEcoComponent from "@/components/Ecologico/CardEcoComponent.vue";
import GridProgramasComponent from "@/components/Programas/GridProgramasComponent.vue";
import CarouselComponent from "@/components/Carousel/CarouselComponent.vue";
import TarjetasComponent from "@/components/Buscador/TarjetasComponent.vue";
import CardConsejoComponent from "@/components/Consejo/CardConsejoComponent.vue";
import PromocionesComponent from "@/components/Promociones/PromocionesComponent.vue";

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
    CarouselComponent,
    TarjetasComponent,
    PromocionesComponent,
    // import PromocionesComponent from "@/components/Promociones/PromocionesComponent.vue";

    // ServiciosMunicipales,
    // MapComponent,
    // Programa,
    // Noticias,
    // cardComponent,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
/* .cards-container {
  display: flex;
  justify-content: center;
}

.main {
  display: flex;
  flex-direction: column;
  /* width: 100%; */

.programas {
  display: flex;
  justify-content: space-around;
  /* padding: 20px; */
}

.linea {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 7vh;
  margin-bottom: 7vh;
}

.linea h5 {
  font-weight: 600;
  color: #4b4a49;
}

.izquierdo {
  width: 33vw;
  height: 1px;
  background: #4b4a49;
  margin-bottom: 1%;
}

.derecho {
  height: 1px;
  width: 33vw;
  background: #4b4a49;
  margin-bottom: 1%;
}

.carouselNoticias {
  /* height: 60vh; */
  background-color: rebeccapurple;
  width: 70%;
  margin: auto;
  margin-bottom: 3%;
  align-items: center;
}
.masGestiones {
  display: none;
}
@media (max-width: 500px) {
  .linea {
    text-align: center;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  .linea h5 {
    font-size: 8px;
    font-weight: 400;
  }
  .izquierdo {
    width: 30%;
  }
  .derecho {
    width: 30%;
  }
  .masGestiones {
    border-radius: 40px;
    background: linear-gradient(
      90deg,
      #019939 0.18%,
      #ffcc03 52.79%,
      #e52320 107.64%
    );
    max-height: 29px;
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding-top: 1%;
    margin-top: 5%;
  }
  .masGestiones p {
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    color: #fff;
  }
  .consejo {
    display: none;
  }
}
</style>
