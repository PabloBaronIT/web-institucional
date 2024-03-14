<template>
  <Carousel
    :itemsToShow="3.2"
    :wrapAround="true"
    :transition="600"
    class="contenedor"
  >
    <Slide v-for="slide in this.novedades" :key="slide">
      <img :src="slide.imagen" alt="imagen" />

      <div class="interior-titulo" style="text-align: left">
        <router-link to="/historia">
          <div class="fecha">
            <p>
              {{ new Date().toLocaleDateString() }}
            </p>
          </div>
          <div class="descripcion">
            <p>{{ slide.titulo }}</p>
          </div>
        </router-link>
      </div>
      <!-- <p>Habilitacion de comercio</p> -->
    </Slide>
    <template #addons>
      <div class="navegation">
        <Navigation />
      </div>
      <!-- <Pagination /> -->
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
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
          titulo: "Reunión con el Pte. de la Agencia Córdoba Turismo.",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1683665000/sxli9cotqczr89ot2frw.png",
        },
        {
          titulo: "50° Fiesta Nacional de la Familia Piamontesa",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1689024361/bymphlvsesa0vr7t9msk.jpg",
        },
        {
          titulo: "Entrega de presente de primer niño nacido en 2024.",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1683665000/sxli9cotqczr89ot2frw.png",
        },
        {
          titulo: "Reunión con el Pte. de la Agencia Córdoba Turismo. ",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1689024361/bymphlvsesa0vr7t9msk.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.contenedor {
  width: 70%;
  height: 100%;
  margin: auto;
  margin-bottom: 5%;
  /* padding: 0 0; */
  padding: 0 2rem;
  /* background: red; */
}
.carousel__slide {
  padding: 0 1%;
  background: #fff;
  height: 363px;
  border-radius: 24px 0px;
  box-shadow: 8px 5px 10px 0px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: auto;
  /* padding-left: 1rem; */

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
  height: 66%;
  width: 100%;
  border-radius: 24px 0px;
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
  height: 363px;

  /* padding-top: 1rem; */
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
  height: 363px;

  /* padding-top: 1rem; */
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
  height: 363px;
  margin: 1.5rem 2rem;
}
.interior-titulo {
  width: 100%;
  /* margin: auto; */
  text-align: left;
  padding-left: 1rem;
  margin-top: 5%;
}
.interior-titulo p {
  margin-top: -3%;
}
.fecha {
  font-size: 13px;
  font-weight: 700;
}
@media (max-width: 500px) {
  .contenedor {
    height: 195px;
    width: 100%;
    padding: 0;
  }
  .slide {
    height: 100%;
    width: 100%;
    display: block;
  }
  .carousel {
    height: 195px;
    width: 100%;
    margin-bottom: 15%;
  }
  .carousel__track {
    margin-bottom: 5%;
  }
  .carousel__slide {
    height: 185px;
    width: 146px;
    padding: 0;
    border-radius: 16px;
  }
  .carousel__slide--active {
    height: 185px;
    margin: 4% 6%;
    /* padding-top: 3px; */
  }
  .carousel__slide--prev {
    height: 185px;
  }
  .carousel__slide--next {
    height: 185px;
  }
  .interior-titulo p {
    font-size: 12px;
    line-height: normal;
    /* margin-top: -8%; */
  }
  .interior-titulo {
    padding-left: 0.5rem;
    padding-top: 2%;
  }
  img {
    height: 50%;
    width: 95%;
    border-radius: 12px;
    margin-top: 6%;
  }
  .navegation {
    display: none;
  }
  .fecha {
    font-size: 12px;
    font-weight: 700;
    /* margin-bottom: -0.1rem; */
  }
  .descripcion {
    margin-top: -13%;
  }
}
</style>
