<template>
  <div class="historia-container">
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>SACANTA HOY</h5>
      <div class="derecho"></div>
    </div>

    <div class="volver">
      <div style="display: flex; flex-direction: row">
        <h4>Siguiente</h4>
        <img src="@/assets/images/FlechaDerecha.svg" alt="imagen" />
      </div>
    </div>
  </div>
</template>

<script>
// import HistoriaComponentVue from "@/components/Historia/HistoriaComponent.vue";
export default {
  name: "HistoriaView",
  components: {
    // HistoriaComponentVue,
  },
};
</script>

<style scoped>
.historia-container {
  padding-top: 10%;
  position: relative;
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
.textoUltimo {
  text-align: center;
  width: 80%;
  /* height: 146px; */
  margin: auto;
  margin-top: 8%;
  margin-bottom: 13%;
}
.textoUltimo h4 {
  font-weight: 400;
  font-size: 24px;
}
.volver {
  position: absolute;
  width: 30%;
  right: -12%;
  bottom: -5%;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* padding: 3.5%; */
  /* bottom: 16%; */
  /* margin: auto; */
  /* right: 4%; */
  /* left: 10%; */
}

.volver h4 {
  /* margin-left: 14px; */
  color: #4b4a49;
  font-weight: 400;
  margin-top: 2.5vh;
  margin-left: 1vw;
  margin-right: 1vw;
}
</style>
