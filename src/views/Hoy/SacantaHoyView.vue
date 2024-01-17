<template>
  <div class="hoy-container">
    <div class="linea">
      <div class="izquierdo"></div>
      <h5>SACANTA HOY</h5>
      <div class="derecho"></div>
    </div>
    <MapaComponent />
    <CardBanderaComponent />
    <div class="contenedor-tar">
      <div class="tarjetas">
        <h3>HABITANTES</h3>
        <h1>3134</h1>
      </div>
      <div class="tarjetas">
        <h3>SUPERFICIE URBANA</h3>
        <h1 style="font-size: 48px">173,88 Has.</h1>
      </div>
      <div class="tarjetas">
        <h3>SUPERFICIE RURAL</h3>
        <h1 style="font-size: 48px">41.826,12 Has.</h1>
      </div>
    </div>
    <div class="institucional">
      <div class="comercio">
        <h1>{{ comercios }}</h1>
        <h3>Comercios y Servicios</h3>
      </div>
      <div class="comercio">
        <h1>{{ clubes }}</h1>
        <h3>Clubes Deportivos</h3>
      </div>
      <div class="comercio">
        <h1>{{ Educacion }}</h1>
        <h3>Instituciones Educativas</h3>
      </div>
    </div>
    <div class="volver">
      <div style="display: flex; flex-direction: row">
        <img src="@/assets/images/FlechaIzquierda.svg" alt="imagen" />
        <h4>Volver atrás</h4>
      </div>
      <div style="display: flex; flex-direction: row">
        <h4>Siguiente</h4>
        <img src="@/assets/images/FlechaDerecha.svg" alt="imagen" />
      </div>
    </div>
  </div>
</template>

<script>
// import HistoriaComponentVue from "@/components/Historia/HistoriaComponent.vue";
import CardBanderaComponent from "@/components/Hoy/CardBanderaComponent.vue";
import MapaComponent from "@/components/Mapa/MapaComponent.vue";
export default {
  name: "HistoriaView",
  data() {
    return {
      comercios: 0,
      clubes: 0,
      Educacion: 0,
      intervalComercio: "",
      intervalClubes: "",
      intervalEducacion: "",
    };
  },
  components: {
    // HistoriaComponentVue,
    CardBanderaComponent,
    MapaComponent,
  },
  created() {
    // setInterval(this.setComercios, 20);
    this.asd();
  },
  methods: {
    setComercios() {
      this.comercios++;
      if (this.comercios === 345) {
        clearInterval(this.intervalComercio);
      }
    },
    setClubes() {
      this.clubes++;
      if (this.clubes === 3) {
        clearInterval(this.intervalClubes);
      }
    },
    setEducacion() {
      this.Educacion++;
      if (this.Educacion === 2) {
        clearInterval(this.intervalEducacion);
      }
    },
    asd() {
      this.intervalComercio = setInterval(this.setComercios, 20);
      this.intervalClubes = setInterval(this.setClubes, 200);
      this.intervalEducacion = setInterval(this.setEducacion, 200);
    },
  },
};
</script>

<style scoped>
.hoy-container {
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
/* .textoUltimo {
  text-align: center;
  width: 80%;
  margin: auto;
  margin-top: 8%;
  margin-bottom: 13%;
} */
/* .textoUltimo h4 {
  font-weight: 400;
  font-size: 24px;
} */
.contenedor-tar {
  width: 90%;
  height: auto;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* background: red; */
}
.tarjetas {
  width: 30%;
  height: 150px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  background: linear-gradient(90deg, #ffcc03 -19.15%, #eb491a 99.74%);
  text-align: center;
  /* justify-content: center; */
  /* align-content: center; */
  color: white;
  padding-top: 1.5rem;
}
.tarjetas h1 {
  font-weight: 900;
  font-size: 80px;
  margin-top: -4%;
}
.institucional {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 100%;
  background: #eae9e9;
  margin-bottom: 5%;
}
.comercio {
  width: 15%;
  display: flex;
  flex-direction: column;
  text-align: center;
  /* align-items: center; */
}
.comercio h1 {
  color: #4b4a49;
  font-size: 90px;
  font-weight: 700;
}
.comercio h3 {
  font-weight: 100;
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
