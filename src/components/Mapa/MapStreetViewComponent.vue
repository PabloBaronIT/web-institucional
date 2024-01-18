<template>
  <div class="contenedor-view">
    <div style="display: block; width: 52%">
      <h5>RECORRE SACANTA</h5>
      <div class="imagen">
        <iframe
          style="
            border: 0;
            width: 100%;
            height: 100%;
            border-radius: 0px 0px 0px 120px;
          "
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCsrNj3q6jmjiavruiFIQIIR-xhWrDb6sQ&location=-31.6652322,-63.0521106&pitch=10&fov=90&heading=210
    "
        >
        </iframe>
      </div>
    </div>
    <div style="display: block; width: 45%">
      <h5>SUGERENCIAS</h5>
      <div class="servicios">
        <ul>
          <li>POLICÍA</li>
          <li>DISPENSARIO</li>
          <li>CLUB DEPORTIVO</li>
          <li>ESTACIÓN DE SERVICIO</li>
          <li>GOMERÍA</li>
        </ul>
      </div>
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
  /* height: 50%; */
  margin: auto;
  border-radius: 0px 120px;
}
.servicios {
  background: white;
  height: 80%;
  width: 100%;
  border-radius: 0px 120px 0px 0px;
  padding: 4rem 4rem;
}
.imagen {
  background: white;
  height: 80%;

  width: 100%;
  border-radius: 0px 0px 0px 120px;
}
li {
  font-size: 32px;
  color: #4b4a49;
  font-weight: 400;
  line-height: normal;
}
h5 {
  /* margin-top: -8rem; */
}
</style>
