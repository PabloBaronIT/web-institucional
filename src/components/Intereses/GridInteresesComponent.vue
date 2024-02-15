<template>
  <div class="contenedor-intereses">
    <div
      class="item item1"
      @mouseover="this.setClass(1)"
      @mouseout="this.setClassOut(1)"
    >
      <h1 class="texto">PLAZAS</h1>
      <img
        :class="{ im: hoverclase1 }"
        class="imagenHover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>
    <div
      class="item item2"
      @mouseover="this.setClass(2)"
      @mouseout="this.setClassOut(2)"
    >
      <h1 class="texto">ESPACIOS VERDES</h1>
      <img
        :class="{ im: hoverclase2 }"
        class="imagenHover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>

    <div
      class="item item3"
      @mouseover="this.setClass(3)"
      @mouseout="this.setClassOut(3)"
    >
      <h1 class="texto">CLUBES DEPORTIVOS</h1>
      <img
        :class="{ im: hoverclase3 }"
        class="imagenHover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>

    <div
      class="item item4"
      @mouseover="this.setClass(4)"
      @mouseout="this.setClassOut(4)"
    >
      <h1 class="texto">IGLESIA</h1>
      <img
        :class="{ im: hoverclase4 }"
        class="imagenHover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "GridInteresesComponent",
  data() {
    return {
      hoverclase1: false,
      hoverclase2: false,
      hoverclase3: false,
      hoverclase4: false,
    };
  },
  methods: {
    setClass(num) {
      if (num === 1) {
        this.hoverclase1 = true;
      }
      if (num === 2) {
        this.hoverclase2 = true;
      }
      if (num === 3) {
        this.hoverclase3 = true;
      }
      if (num === 4) {
        this.hoverclase4 = true;
      }
    },
    setClassOut(num) {
      if (num === 1) {
        this.hoverclase1 = false;
      }
      if (num === 2) {
        this.hoverclase2 = false;
      }
      if (num === 3) {
        this.hoverclase3 = false;
      }
      if (num === 4) {
        this.hoverclase4 = false;
      }
    },
  },
};
</script>
<style scoped>
.contenedor-intereses {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Crea 3 columnas de igual tamaño */
  grid-template-rows: repeat(2, 1fr); /* Crea 3 filas de altura fija de 100px */
  width: 70%;
  margin: auto;
  gap: 45px;
  margin-bottom: 5%;
  margin-top: 3%;
  justify-content: center;
}
.item {
  position: relative;
  border-radius: 20px;
  margin: auto;
  min-height: 252px;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* background: red; */
  color: white;
  text-align: center;
  padding: 2rem;
  cursor: pointer;
}
.texto {
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
}
.item1,
.item3 {
  background: linear-gradient(92deg, #019939 1.48%, #ffcc03 127.21%);
}
.item2,
.item4 {
  background: linear-gradient(92deg, #ffcc03 1.51%, #e52320 109.53%);
}
.imagenHover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  opacity: 0; /* La imagen es inicialmente invisible */
  transition: opacity 0.8s ease-in-out; /* Transición suave de opacidad */
}
.im {
  opacity: 1; /* Hacer visible la imagen al hacer hover sobre el contenedor */
}

/* .texto:hover { */
/* background: white; */
/* font-size: 90px; */
/* font-weight: bold; */
/* background-clip: text; */
/* -webkit-text-stroke-width: 0.2px; */
/* -webkit-text-stroke-color: white; */
/* -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 1px black; */
/* margin-bottom: 10%; */
/* } */
@media (max-width: 500px) {
  .contenedor-intereses {
    width: 90%;
    gap: 15px;
    padding: 0 2%;
    margin-bottom: 6%;
  }
  .item {
    min-width: 100%;
    min-height: 80px;
    padding: 0;
    border-radius: 12px;
  }
  .texto {
    font-size: 15px;
    margin-top: 2%;
  }
  .imagenHover {
    border-radius: 12px;
  }
}
</style>
