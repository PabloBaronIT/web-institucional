<template>
  <videoComponent />
  <div class="main">
    <cardComponent bckg="" />
    <btnServiciosComponent />
  </div>
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
import btnServiciosComponent from "@/components/Home/BtnServiciosComponent.vue";
import cardComponent from "@/components/Home/CardComponent.vue";

export default {
  name: "HomeView",
  components: {
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

.main {
  display: flex;
}
</style>
