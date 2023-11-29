<template>
  <carousel :items-to-show="5" :wrapAround="true" :transition="500">
    <slide v-for="slide in this.novedades" :key="slide">
      <router-link to="/historia" class="interior">
        <h5>{{ slide.titulo }}</h5>
      </router-link>
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
          titulo: "SERVICIO AL VECINO",
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
  padding: 0.3rem 0.3rem;
  background: #fff;
  height: 15vh;
  max-width: 18vw;
  border-radius: 20px;
  box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.2);
  margin: 0.5rem 1.5rem;
  /* width: 18 vw; */
  /* width: 10vw; */
}
.carousel__slide:hover {
  background: linear-gradient(180deg, #019939 4.26%, #ffcc03 126.04%);
}
.interior {
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 17px;
  text-align: center;
  padding: 1.5rem 1.5rem;
  text-decoration: none;
}
.interior h5:hover {
  color: #019939;
}
</style>
