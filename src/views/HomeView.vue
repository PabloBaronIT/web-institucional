<template>
  <div class="main">
    <topNavComponent />
    <videoComponent />
    <btnServiciosComponent />
    <div class="cards-container">
      <cardComponent bckg="/messi.webp" />
      <cardComponent bckg="/messi.webp" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import topNavComponent from "@/components/Home/TopNavComponent.vue";
import videoComponent from "@/components/Home/VideoComponent";
import btnServiciosComponent from "@/components/Home/BtnServiciosComponent.vue";
import cardComponent from "@/components/Home/CardComponent.vue";

export default {
  name: "HomeView",
  components: {
    topNavComponent,
    videoComponent,
    btnServiciosComponent,
    cardComponent,
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  justify-content: center;
}
</style>
