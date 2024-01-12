<template>
  <div class="contenedorcard">
    <img :src="` ${this.data.imagen}`" alt="" class="imagen" />
    <div style="display: flex; flex-direction: column; align-items: center">
      <h1 class="fecha">{{ this.data.fecha }}</h1>
      <div style="margin-top: -5%">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="16"
          viewBox="0 0 204 16"
          fill="none"
        >
          <path
            d="M203.303 8.41661C203.693 8.02609 203.693 7.39292 203.303 7.0024L196.939 0.638435C196.548 0.247911 195.915 0.247911 195.525 0.638435C195.134 1.02896 195.134 1.66212 195.525 2.05265L201.182 7.7095L195.525 13.3664C195.134 13.7569 195.134 14.39 195.525 14.7806C195.915 15.1711 196.548 15.1711 196.939 14.7806L203.303 8.41661ZM0.278564 8.7095H202.596V6.7095H0.278564V8.7095Z"
            fill="#019939"
          />
        </svg>
      </div>
    </div>
    <div class="texto">
      <h4>{{ this.data.descripcion }}</h4>
      <p style="color: #019939">Leer más</p>
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
  align-items: center;
  /* border: solid 1px black; */
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
  height: 30%;
  /* color: black; */
}
.imagen {
  /* height: auto; */
  width: 33%;
  border-radius: 20px;
}
.texto {
  background: #f5f5f5;
  width: 45%;
  border-radius: 20px;
  padding: 2% 2%;
}
h4 {
  font-weight: 400;
  font-size: 22px;
}
.fecha {
  background: linear-gradient(
    97deg,
    #019939 16.75%,
    #ffcc03 49.45%,
    #e52320 84.99%
  );
  font-size: 80px;
  font-weight: 900;
  background-clip: text;
  /* -webkit-text-stroke-width: 0.2px; */
  /* -webkit-text-stroke-color: white; */
  -webkit-text-fill-color: transparent;
  /* -webkit-background-clip: text; */
  /* -webkit-text-stroke: 0.01px white; */
  font-style: normal;
}
</style>
