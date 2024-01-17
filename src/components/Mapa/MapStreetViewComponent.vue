<template>
  <div class="contenedor-view">
    <div class="imagen"></div>
    <div class="servicios">
      <ul>
        <li>POLICIA</li>
        <li>DISPENSARIO</li>
        <li>CLUB DEPORTIVO</li>
        <li>ESTACIÓN DE SERVICO</li>
        <li>GOMERIA</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "MapStreetViewComponent",
};
</script>
<style scoped>
.contenedor-view {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 88%;
  margin: auto;
  /* height: 30%; */
  border-radius: 0px 120px;
}
.servicios {
  background: white;
  height: 367px;
  width: 45%;
  border-radius: 0px 120px 0px 0px;
}
.imagen {
  background: white;
  height: 367px;

  width: 52%;
  border-radius: 0px 0px 0px 120px;
}
</style>
