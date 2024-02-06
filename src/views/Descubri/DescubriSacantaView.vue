<template>
  <div class="descubri-container">
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>DESCUBRÍ SACANTA</h5>
      <div class="derecho"></div>
    </div>
    <CardDescubriComponent />
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>LUGARES DE INTERÉS</h5>
      <div class="derecho"></div>
    </div>
    <GridInteresesComponent />
    <!-- <MapStreetViewComponent /> -->
    <div class="volver">
      <div style="display: flex; flex-direction: row">
        <router-link to="/pueblo/sacanta-hoy">
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
import CardDescubriComponent from "@/components/Descubri/CardDescubriComponent.vue";
import GridInteresesComponent from "@/components/Intereses/GridInteresesComponent.vue";
// import MapStreetViewComponent from "@/components/Mapa/MapStreetViewComponent.vue";
export default {
  name: "DescubriViews",
  components: {
    CardDescubriComponent,
    GridInteresesComponent,
    // MapStreetViewComponent,
  },
  created() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
.descubri-container {
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
@media (max-width: 500px) {
  .descubri-container {
    padding-top: 5%;
  }
  .linea {
    /* text-align: center;
     margin-top: 3%; 
    /* margin-bottom: 3%; */
    /* display: none; */
    margin-top: 0;
  }
  .volver {
    width: 100%;
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
    width: 30%;
  }
  .derecho {
    width: 30%;
  }
}
</style>
