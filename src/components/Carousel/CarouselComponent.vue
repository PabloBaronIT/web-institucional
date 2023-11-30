<template>
  <Carousel
    :itemsToShow="3.5"
    :wrapAround="true"
    :transition="500"
    class="contenedor"
  >
    <Slide v-for="slide in this.novedades" :key="slide">
      <img :src="slide.imagen" alt="imagen" />

      <router-link to="/historia">
        <div class="interior-titulo">
          <p style="font-size: 13px; font-weight: 600">
            {{ new Date().toLocaleDateString() }}
          </p>
          <p style="margin-top: -0.5rem">{{ slide.titulo }}</p>
        </div>
      </router-link>
      <!-- <p>Habilitacion de comercio</p> -->
    </Slide>
    <template #addons>
      <Navigation />
      <!-- <Pagination /> -->
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "CarouselComponent",
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
          titulo: "Código Urbano Sacanta.",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1683665000/sxli9cotqczr89ot2frw.png",
        },
        {
          titulo: "COE Sacanta (Centro de Operaciones de Emergencias.)",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1689024361/bymphlvsesa0vr7t9msk.jpg",
        },
        {
          titulo: "Concurso de precio ENHOSA-Red de agua Potable Sacanta.",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1683665000/sxli9cotqczr89ot2frw.png",
        },
        {
          titulo: "COE Sacanta (Centro de Operaciones de Emergencias",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1689024361/bymphlvsesa0vr7t9msk.jpg",
        },
      ],
    };
  },
});
</script>

<style scoped>
.contenedor {
  width: 68%;
  height: 100%;

  margin: auto;
  /* padding: 0 1rem; */
  /* background: red; */
}
.carousel__slide {
  padding: 0px 1rem;
  background: #fff;
  height: 40vh;
  border-radius: 30px 0px;
  box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: left;
  /* width: 18 vw; */
  /* width: 10vw; */
}
a {
  color: #4b4a49;
  text-decoration: none;
}
a:hover {
  color: #333232;
}
img {
  height: 50%;
  width: 95%;
  border-radius: 30px 0px;
}
.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-30deg) scale(0.95);
  height: 45vh;

  /* padding-top: 1rem; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
  height: 45vh;

  /* padding-top: 1rem; */
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  height: 45vh;
  margin: 1.5rem 2rem;
}
.interior-titulo {
  width: 100%;
  /* margin: auto; */
  text-align: left;
  margin-top: 0.5rem;
}
</style>
