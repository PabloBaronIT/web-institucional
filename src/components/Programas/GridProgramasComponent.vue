<template>
  <div class="grid">
    <div v-for="item in this.programas" :key="item.id" class="card">
      <h5>hola</h5>
      <h1>gasdasd</h1>
      <h1>asasdasd</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridProgramasComponent",
  data() {
    return {
      programas: [
        { imagen: "", titulo: "PRODUCCION", id: 1 },
        { imagen: "", titulo: "OBRAS PUBLICAS", id: 1 },
        { imagen: "", titulo: "HAMBIENTE", id: 1 },
        { imagen: "", titulo: "CULTURA", id: 1 },
        { imagen: "", titulo: "EDUCACION", id: 1 },
        { imagen: "", titulo: "EMPLEO", id: 1 },
      ],
    };
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 25px;
  margin: auto;
  grid-auto-rows: minmax(100px, auto);
}
.card {
  width: 14vw;
  height: 30vh;
  background-color: aliceblue;
}
</style>
