<template>
  <ImgComponent />
  <ArticleComponent />
</template>

<script>
import ImgComponent from "@/components/Ciudad/ImgComponent.vue";
import ArticleComponent from "@/components/Ciudad/ArticleComponent.vue";

export default {
  name: "CiudadView",
  components: {
    ImgComponent,
    ArticleComponent,
  },
};
</script>

<style scoped></style>
