<template>
  <div class="contenedor-intereses">
    <div class="item item1">
      <h1 class="texto">PLAZAS</h1>
      <img
        class="imagen-hover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>
    <div class="item item2">
      <h1 class="texto">ESPACIOS VERDES</h1>
      <img
        class="imagen-hover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>

    <div class="item item3">
      <h1 class="texto">CLUBES DEPORTIVOS</h1>
      <img
        class="imagen-hover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>

    <div class="item item4">
      <h1 class="texto">IGLESIA</h1>
      <img
        class="imagen-hover"
        src="@/../public/images/plazas.jpg"
        alt="Imagen"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "GridInteresesComponent",
};
</script>
<style scoped>
.contenedor-intereses {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* Crea 3 columnas de igual tamaño */
  grid-template-rows: repeat(2, 1fr); /* Crea 3 filas de altura fija de 100px */
  gap: 45px;
  margin: auto;
  margin-bottom: 10vh;
  width: 70%;
  margin-top: 5%;
  /* background: green; */
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
  opacity: 1;
  z-index: 1;
}
.item1,
.item3 {
  background: linear-gradient(92deg, #019939 1.48%, #ffcc03 127.21%);
}
.item2,
.item4 {
  background: linear-gradient(92deg, #ffcc03 1.51%, #e52320 109.53%);
}
.imagen-hover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;

  opacity: 0; /* La imagen es inicialmente invisible */
  transition: opacity 0.8s ease-in-out; /* Transición suave de opacidad */
}
.imagen-hover:hover {
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
    width: 100%;
    gap: 15px;
    padding: 0 2%;
  }
  .item {
    min-width: 100%;
    min-height: 80px;
    padding: 0;
  }
  .texto {
    font-size: 15px;
  }
}
</style>
