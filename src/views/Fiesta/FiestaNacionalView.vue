<template>
  <div class="fiesta-container">
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>FIESTA NACIONAL</h5>
      <div class="derecho"></div>
    </div>
    <div class="medio">
      <FiestaComponent
        Titulo="Fiesta Nacional de la familia Piamontesa"
        Fecha="16-17 DE FEBRERO"
        :Posicion="true"
      />
      <FiestaComponent
        Titulo="Fiesta en honor al Santo Patrono San Ignacio de Loyola"
        Fecha="31 DE JULIO"
        :Posicion="false"
      />
      <FiestaComponent
        Titulo="Fiesta del Reencuentro"
        Fecha="11 DE NOVIEMBRE"
        :Posicion="true"
      />
    </div>

    <div class="volver">
      <div style="display: flex; flex-direction: row">
        <router-link to="/pueblo/descubri-sacanta">
          <img src="@/assets/images/FlechaIzquierda.svg" alt="imagen" />
        </router-link>
        <h4>Volver atrás</h4>
      </div>
      <div style="display: flex; flex-direction: row">
        <h4>Siguiente</h4>
        <router-link to="/pueblo/fiesta-nacional">
          <img src="@/assets/images/FlechaDerecha.svg" alt="imagen" />
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import FiestaComponent from "./../../components/Fiesta/FiestaComponent";

export default {
  name: "FiestaView",
  created() {
    window.scrollTo(0, 0);
  },
  components: {
    FiestaComponent,
  },
};
</script>

<style scoped>
.fiesta-container {
  padding-top: 10%;
  position: relative;
  padding-bottom: 12%;
}
.medio {
  margin-top: 3%;
  /* margin-bottom: 3%; */
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
  font-size: 22px;
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
.volver {
  position: absolute;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 3.5%;
  bottom: 2%;
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
