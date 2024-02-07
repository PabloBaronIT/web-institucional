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
        <h1 class="tarjetas-h1">3134</h1>
      </div>
      <div class="tarjetas">
        <h3>SUPERFICIE URBANA</h3>
        <h1 class="huno">173,88 Has.</h1>
      </div>
      <div class="tarjetas">
        <h3>SUPERFICIE RURAL</h3>
        <h1 class="huno">41.826,12 Has.</h1>
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
        <router-link to="/pueblo/historia">
          <img src="@/assets/images/FlechaIzquierda.svg" alt="imagen" />
        </router-link>
        <h4>Volver atrás</h4>
      </div>
      <div style="display: flex; flex-direction: row">
        <h4>Siguiente</h4>
        <router-link to="/pueblo/descubri-sacanta">
          <img src="@/assets/images/FlechaDerecha.svg" alt="imagen" />
        </router-link>
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
    window.scrollTo(0, 0);
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
  margin-bottom: 3%;
}

.linea h5 {
  font-weight: 600;
  color: #4b4a49;
}

.izquierdo {
  width: 42%;
  height: 1px;
  background: #4b4a49;
  margin-bottom: 1%;
}

.derecho {
  height: 1px;
  width: 42%;
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
  margin-bottom: 5%;
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
.tarjetas-h1 {
  font-weight: 900;
  font-size: 80px;
  margin-top: -4%;
}
.huno {
  font-weight: 900;

  font-size: 48px;
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
@media (max-width: 500px) {
  .hoy-container {
    padding-top: 5%;
    /* min-height: 100vh; */
    padding-bottom: 13%;
  }
  .linea {
    /* text-align: center;
     margin-top: 3%;
    /* margin-bottom: 3%; */
    /* display: none; */
    margin-top: 0;
  }
  .contenedor-tar {
    margin-top: 6%;
    margin-bottom: 6%;
  }
  .volver {
    width: 100%;
    /* bottom: 0; */
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
  .tarjetas {
    width: auto;
    height: auto;
    border-radius: 8px;
    padding: 8.584px 10px;
  }
  .tarjetas h3 {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
  }
  .tarjetas-h1 {
    font-size: 19px;
  }
  .huno {
    font-size: 16px;
  }
  .comercio {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .comercio h1 {
    color: #4b4a49;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
  }
  .comercio h3 {
    font-size: 8px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
  }
  .institucional {
    /* margin-bottom: 20%; */
    height: 60px;
  }
}
</style>
