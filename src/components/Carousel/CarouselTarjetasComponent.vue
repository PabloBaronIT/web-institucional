<template>
  <carousel :items-to-show="5" :wrapAround="true" :transition="500">
    <slide v-for="slide in this.novedades" :key="slide">
      <h5>{{ slide.titulo }}</h5>
    </slide>

    <template #addons>
      <navigation />
    </template>
  </carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CarouselTarjetasComponent",
  components: {
    Carousel,
    Slide,
    // Pagination,
    Navigation,
  },
  data() {
    return {
      novedades: [
        {
          titulo: "LICENCIA DE CONDUCIR",
        },
        {
          titulo: "COMERCIO",
        },
        {
          titulo: "SERVICIO DE VECINO",
        },
        {
          titulo: "PAGOS",
        },
      ],
    };
  },
});
</script>

<style scoped>
/* .contenedor {
  width: 68%;
  height: 30vh;
  margin-top: -2rem;
} */
h5 {
  color: #4b4a49;
  font-weight: 700;
}

.carousel {
  width: 90%;
  margin: auto;
  padding-left: 3rem;
  padding-right: 3rem;
}
.carousel__slide {
  padding: 0px 1rem;
  background: #fff;
  height: 15vh;
  width: 18vw;
  border-radius: 20px;
  box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  margin: 1rem;
  /* width: 18 vw; */
  /* width: 10vw; */
}
.carousel__slide:hover {
  background: linear-gradient(180deg, #019939 4.26%, #ffcc03 126.04%);
}
</style>
