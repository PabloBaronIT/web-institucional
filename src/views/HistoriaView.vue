<template>
  <div class="historia-container">
    <!-- <Flyer
      :src="'https://www.jesusmaria.gov.ar/frontend/images/bg-motiva.jpg'"
      :text="'Noticias'"
    /> -->
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>NUESTRA HISTORIA</h5>
      <div class="derecho"></div>
    </div>
    <HistoriaComponentVue />
  </div>
</template>

<script>
import HistoriaComponentVue from "@/components/Historia/HistoriaComponent.vue";
// import Historia from "@/components/Ciudad/LineaComponent.vue";
// import Flyer from "@/components/Reutilizar/FlyerComponent.vue";
export default {
  name: "HistoriaView",
  components: {
    HistoriaComponentVue,
    // Flyer,
  },
};
</script>

<style scoped>
.historia-container {
  padding-top: 10%;
}

.linea {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  /* margin-top: 7vh; */
  /* margin-bottom: 7vh; */
}

.linea h5 {
  font-weight: 600;
  color: #4b4a49;
}

.izquierdo {
  width: 40%;
  height: 1px;
  background: #4b4a49;
  margin-bottom: 1%;
}

.derecho {
  height: 1px;
  width: 40%;
  background: #4b4a49;
  margin-bottom: 1%;
}
</style>
