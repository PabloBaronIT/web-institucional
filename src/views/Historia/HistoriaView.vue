<template>
  <div class="historia-container">
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>NUESTRA HISTORIA</h5>
      <div class="derecho"></div>
    </div>
    <HistoriaComponentVue />
    <div class="textoUltimo">
      <h4>
        En cada momento vivido, tejimos el presente de Sacanta. Ahora, con la
        historia como guía, nos aventuramos a forjar un mañana aún más fuerte.
      </h4>
    </div>
    <div class="volver">
      <div style="display: flex; flex-direction: row">
        <h4>Siguiente</h4>
        <router-link to="/pueblo/sacanta-hoy/#inicio">
          <img src="@/assets/images/FlechaDerecha.svg" alt="imagen" />
        </router-link>
      </div>
    </div>
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
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.historia-container {
  width: 100%;
  /* margin-top: 3%; */
  padding-top: 10%;
  position: relative;
  padding-bottom: 12%;
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
@media (max-width: 500px) {
  .historia-container {
    padding-top: 5%;
    /* margin-top: 0; */
  }
  .linea {
    /* text-align: center;
     margin-top: 3%; 
    /* margin-bottom: 3%; */
    /* display: none; */
    margin-top: 0;
  }
  .volver {
    width: 10%;
    right: 2%;
    bottom: 2%;
    /* background: red; */
  }
  .volver h4 {
    display: none;
  }
  .volver img {
    width: 32px;
    height: 32px;
  }
  .linea h5 {
    font-size: 8px;
    font-weight: 400;
  }
  .izquierdo {
    width: 40%;
  }
  .derecho {
    width: 40%;
  }
  .textoUltimo h4 {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}
</style>
