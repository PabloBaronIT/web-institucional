<template>
  <div class="contenedor-view">
    <div class="streetView">
      <h5>RECORRE SACANTA</h5>
      <div class="imagen">
        <iframe
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCsrNj3q6jmjiavruiFIQIIR-xhWrDb6sQ&location=-31.6652322,-63.0521106&pitch=10&fov=90&heading=210
    "
        >
        </iframe>
      </div>
    </div>
    <div class="sugerencias">
      <h5>SUGERENCIAS</h5>
      <div class="servicios">
        <!-- <ul> -->
        <li v-for="(item, index) in lugares" :key="index">
          {{ item.titulo }}
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MapStreetViewComponent",
  data() {
    return {
      lugares: [
        { titulo: "POLICÍA" },
        { titulo: "BOMBEROS" },
        { titulo: "DISPENSARIO" },
        { titulo: "GOMERIA" },
        { titulo: "CLUB DE DEPORTE" },
        { titulo: "ESTACIÓN DE SERVICIO" },
      ],
    };
  },
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
  margin-bottom: 2%;
}
h5 {
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-left: 3%;
}
.servicios {
  background: white;
  height: 80%;
  width: 100%;
  border-radius: 0px 120px 0px 0px;
  padding: 4rem 6rem;
  margin-top: 4%;
}
.sugerencias {
  display: block;
  width: 45%;
  /* height: 63px; */
}
.streetView {
  display: block;
  width: 52%;
}
iframe {
  border: 0;
  width: 100%;
  height: 100%;

  border-radius: 0px 0px 0px 120px;
}
.imagen {
  /* background: white; */
  margin-top: 4%;
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

@media (max-width: 500px) {
  .contenedor-view {
    width: 100%;
    min-height: 184px;
    display: flex;
    flex-direction: column;
    margin-bottom: 10%;
  }
  .sugerencias {
    width: 90%;
    margin: auto;
    margin-top: 6%;
  }
  .streetView {
    width: 100%;
    height: 184px;
  }
  .streetView h5 {
    display: none;
  }
  .imagen {
    /* background: white; */
    height: 100%;

    width: 100%;
  }
  iframe {
    border-radius: 0;
  }
  li {
    font-size: 9px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .servicios {
    display: grid;
    grid-template-columns: repeat(2, 100px);
    border-radius: 0px 33px 0px 0px;
    gap: 5%;
    padding: 5% 10%;
    min-height: 63px;
    margin-top: 2%;
    /* align-items: center; */
    /* justify-content: center; */
  }
  h5 {
    font-size: 7px;
  }
}
</style>
