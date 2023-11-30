<template>
  <div class="grid">
    <div>
      <router-link to="/ciudad" class="item item0">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Produccion.svg" alt="" />

        <div class="titulo">
          <h3>PRODUCCIÓN</h3>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/ciudad" class="item item1">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Obras-Publicas.svg" alt="" />

        <div class="titulo">
          <h3>OBRAS PÚBLICAS</h3>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/ciudad" class="item item2">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Ambiente.svg" alt="" />

        <div class="titulo">
          <h3>AMBIENTE</h3>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/ciudad" class="item item3">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Cultura.svg" alt="" />

        <div class="titulo">
          <h3>CULTURA</h3>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/ciudad" class="item item4">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Educacion.svg" alt="" />

        <div class="titulo">
          <h3>EDUCACIÓN</h3>
        </div>
      </router-link>
    </div>
    <div>
      <router-link to="/ciudad" class="item item5">
        <!-- <img :src="item.imagen" alt="imagen" /> -->
        <img src="@/assets/images/Empleo.svg" alt="" />

        <div class="titulo">
          <h3>EMPLEO</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridProgramasComponent",
  components: {},
  data() {
    return {};
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de igual tamaño */
  grid-template-rows: repeat(2, 1fr); /* Crea 3 filas de altura fija de 100px */
  gap: 25px;
  margin: auto;
  margin-bottom: 10vh;
  width: 88%;
  /* background: rebeccapurple; */
  /* background: linear-gradient(
    90deg,
    #019939 -3.32%,
    #ffcc03 49.27%,
    #e52320 110.14%
  ); */
  /* grid-auto-rows: minmax(100px, auto); */
}
img {
  max-width: 50%;
  max-height: 70%;
}
h3 {
  font-weight: 900;
  /* font-size: 30px; */
  font-style: normal;
  letter-spacing: 1.5px;
}
.titulo {
  width: 50%;
}
.item {
  border-radius: 20px;
  margin: auto;
  width: 358px;
  height: 148px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  /* padding-left: 2rem; */
}
a {
  text-decoration: none;
}
.item0,
.item3 {
  background: linear-gradient(92deg, #019939 1.48%, #ffcc03 127.21%);
}
.item1,
.item4 {
  background: linear-gradient(93deg, #019939 -91.82%, #ffcc03 94.91%);
}
.item2,
.item5 {
  background: linear-gradient(92deg, #ffcc03 1.51%, #e52320 109.53%);
}
</style>
