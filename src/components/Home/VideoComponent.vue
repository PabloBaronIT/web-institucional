<template>
  <div class="video-container">
    <div class="tiempo">
      <img :src="this.icono" alt="imagen" />
      <h3>LUNES <br />OCT 09</h3>
      <h6>
        Máx:{{ this.tiempo.temperature_max }}°C/Min:
        {{ this.tiempo.temperature_min }}°C
      </h6>
      <div class="lin"></div>
      <h5>
        <!-- {{ new Date().toLocaleTimeString().slice(0, -6) }} hs <br /> -->
        {{ this.horas }} : {{ this.minutos }} hs<br />
        {{ this.text[0] }} <br />HUMEDAD {{ this.tiempo.humidity }} %
      </h5>
    </div>
    <div class="texto">
      <h1 class="trabajando">Trabajando</h1>
      <h1 class="vos">para vos</h1>
    </div>

    <img src="@/assets/videos/ciudad.gif" alt="Funny image" class="gif" />
    <div class="linea"></div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "VideoComponent",
  data() {
    return {
      tiempo: "",
      text: "",
      icono: "",
      horas: "",
      minutos: "",
    };
  },
  created() {
    this.getTiempo();
    setInterval(() => this.setTiempo(), 1000);
  },
  methods: {
    getTiempo() {
      axios
        .get(
          "https://api.tutiempo.net/json/?lan=es&apid=a5GX44aXXaahzCV&ll=-31.67,-63.07"
        )
        .then((response) => {
          console.log(response);
          this.tiempo = response.data.day1;
          let asd = response.data.day1.text;
          let icon = response.data.day1.icon;
          this.text = asd.split(" ");

          this.icono = `https://v5i.tutiempo.net/wi/02/30/${icon}.png`;
        });
    },
    setTiempo() {
      const date = new Date();
      let horas = date.getHours();
      let minutos = date.getMinutes();
      horas = horas <= 9 ? `${horas}`.padStart(2, 0) : horas;
      minutos = minutos <= 9 ? `${minutos}`.padStart(2, 0) : minutos;
      this.horas = horas;
      this.minutos = minutos;
    },
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 5px rgba(94, 94, 94, 0.568);
}

.gif {
  width: 100vw;
  height: 82vh;
}
.linea {
  width: 100%;
  height: 6px;
  background: linear-gradient(
    270deg,
    #e52320 9.64%,
    #ffcc03 55.98%,
    #019939 87.68%
  );
}
.tiempo {
  position: absolute;
  top: 16vh;
  left: 7vw;
  width: 12vw;
  height: 50vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: rgba(245, 245, 245, 0.1);
  backdrop-filter: blur(7.5px);
  border-bottom-right-radius: 20px;
  padding: 1%;
  text-align: left;
}

.tiempo h3 {
  font-weight: 400;
}
.tiempo h6 {
  font-weight: 100;
}
.tiempo h5 {
  font-weight: 400;
}
.lin {
  background: white;
  height: 2px;
  width: 95%;
}
img {
  width: 5vw;
  height: 8vh;
  margin: auto;
}
.texto {
  position: absolute;
  bottom: 7vh;
  right: 7vw;
  text-align: right;
}
.trabajando {
  background: linear-gradient(154deg, #019939 14.5%, #ffcc03 90.2%);
  font-size: 90px;
  font-weight: 900;
  background-clip: text;
  /* -webkit-text-stroke-width: 0.2px; */
  /* -webkit-text-stroke-color: white; */
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.3px white;
}
.vos {
  color: white;
  font-weight: 600;
  font-size: 60px;
  margin-top: -7%;
  margin-right: -1vw;
}
</style>
