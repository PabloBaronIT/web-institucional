<template>
  <div class="contenedor">
    <FlyerComponent
      :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
      :text="'Programas'"
    />

    <ImgArticle />

    <div class="fade-in full-width">
      <DatosComponent />
    </div>

    <ArticleComponent />

    <FlyerComponent
      :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
      :text="'Tema del que se va a hablar'"
    />

    <ArticleComponent />

    <LineaComponent />
  </div>
</template>

<script>
import FlyerComponent from "@/components/Reutilizar/FlyerComponent.vue";
import ArticleComponent from "@/components/Ciudad/ArticleComponent.vue";
import DatosComponent from "@/components/Ciudad/DatosComponent.vue";
import ImgArticle from "@/components/Ciudad/ImgArticleComponent.vue";
import LineaComponent from "@/components/Ciudad/LineaComponent.vue";
export default {
  name: "CiudadView",
  components: {
    FlyerComponent,
    ArticleComponent,
    DatosComponent,
    ImgArticle,
    LineaComponent,
  },
};
</script>

<style scoped>
.contenedor {
  padding-top: 10vh;
}
</style>
