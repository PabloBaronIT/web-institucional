<template>
  <div class="container">
    <Carousel
      id="gallery"
      :items-to-show="1"
      :wrap-around="false"
      v-model="currentSlide"
    >
      <Slide class="box" v-for="item in items" :key="item.title">
        <div class="carousel-text">
          <div class="carousel-title">
            <h1>{{ item.title }}</h1>
          </div>
          <div class="carousel-description">{{ item.description }}</div>
        </div>
        <img src="@/assets/logo.png" alt="" />
      </Slide>
    </Carousel>

    <Carousel
      id="thumbnails"
      :items-to-show="4"
      :wrap-around="true"
      v-model="currentSlide"
      ref="carousel"
    >
      <Slide class="mini-box" v-for="item in items" :key="item">
        <div class="carousel__item" @click="slideTo(slide - 1)">
          {{ item.title }}
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { defineComponent } from "vue";
import { Carousel, Slide } from "vue3-carousel";

export default defineComponent({
  name: "HistoriaComponent",
  components: {
    Carousel,
    Slide,
    //Navigation,
  },
  data() {
    return {
      currentSlide: 0,
      items: [
        {
          title: "1618",
          description:
            "Sobre el Camino Real, a 50 km hacia el norte de la ciudad de Córdoba, se yergue Jesús María, ciudad comercial y de servicios, fundada por Pío León...",
        },
        {
          title: "1867",
          description:
            "Sobre el Camino Real, a 50 km hacia el norte de la ciudad de Córdoba, se yergue Jesús María, ciudad comercial y de servicios, fundada por Pío León...",
        },
        {
          title: "1618",
          description:
            "Sobre el Camino Real, a 50 km hacia el norte de la ciudad de Córdoba, se yergue Jesús María, ciudad comercial y de servicios, fundada por Pío León...",
        },

        {
          title: "1618",
          description:
            "Sobre el Camino Real, a 50 km hacia el norte de la ciudad de Córdoba, se yergue Jesús María, ciudad comercial y de servicios, fundada por Pío León...",
        },
        {
          title: "1867",
          description:
            "Sobre el Camino Real, a 50 km hacia el norte de la ciudad de Córdoba, se yergue Jesús María, ciudad comercial y de servicios, fundada por Pío León...",
        },
      ],
    };
  },
  methods: {
    slideTo(val) {
      this.currentSlide = val;
    },
  },
});
</script>

<style scoped>
.container {
  padding: 20px;
}

.box {
  background: var(--green);
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 10px;
  height: auto;
  margin: 10px 0;
  padding: 20px;
}
.mini-box {
  height: 10vh;
  background: var(--green);
  border-radius: 10px;
}

.carousel-text {
  width: 50%;
  text-align: left;
}
.box img {
  width: 150px;
}
</style>
