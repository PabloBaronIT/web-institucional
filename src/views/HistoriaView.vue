<template>
  <div class="historia-container">
    <Flyer
      :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
      :text="'Historia de Campo Bravo'"
    />
    <Historia />
  </div>
</template>

<script>
import Historia from "@/components/Ciudad/LineaComponent.vue";
import Flyer from "@/components/Reutilizar/FlyerComponent.vue";

export default {
  name: "HistoriaView",
  components: {
    Historia,
    Flyer,
  },
};
</script>

<style scoped></style>
