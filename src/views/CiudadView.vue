<template>
  <FlyerComponent
    :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
    :text="'Tema del que se va a hablar'"
  />

  <ArticleComponent />

  <div class="fade-in full-width">
    <DatosComponent />
  </div>

  <FlyerComponent
    :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
    :text="'Tema del que se va a hablar'"
  />

  <ArticleComponent />
</template>

<script>
import FlyerComponent from "@/components/Reutilizar/FlyerComponent.vue";
import ArticleComponent from "@/components/Ciudad/ArticleComponent.vue";
import DatosComponent from "@/components/Ciudad/DatosComponent.vue";

export default {
  name: "CiudadView",
  components: {
    FlyerComponent,
    ArticleComponent,
    DatosComponent,
  },
};
</script>

<style scoped></style>
