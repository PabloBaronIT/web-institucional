<template>
  <videoComponent />
  <div class="main">
    <cardComponent />
    <btnServiciosComponent />
  </div>
  <ServiciosMunicipales />
</template>

<script>
// @ is an alias to /src

import videoComponent from "@/components/Home/VideoComponent";
import btnServiciosComponent from "@/components/Home/BtnServiciosComponent.vue";
import cardComponent from "@/components/Home/CardComponent.vue";
import ServiciosMunicipales from "@/components/Home/ServiciosMunicipalesComponent.vue";

export default {
  name: "HomeView",
  components: {
    videoComponent,
    btnServiciosComponent,
    cardComponent,
    ServiciosMunicipales,
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
