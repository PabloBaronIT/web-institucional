<template>
  <div class="contenedorcard">
    <img :src="` ${this.data.imagen}`" alt="" class="imagen" />
    <h1>{{ this.data.fecha }}</h1>
    <div class="texto">
      <h4>{{ this.data.descripcion }}</h4>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardComponent",
  props: {
    data: Object,
  },
  data() {
    return {
      historia: "",
    };
  },
};
</script>
<style scoped>
.contenedorcard {
  /* height: 250px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: solid 1px black;
  width: 90%;
  margin: auto;
  margin-bottom: 3%;
  height: 30%;
  /* color: black; */
}
.imagen {
  /* height: auto; */
  width: 35%;
  border-radius: 20px;
}
.texto {
  background: #f5f5f5;
  width: 50%;
  border-radius: 20px;
  padding: 2% 2%;
}
</style>
