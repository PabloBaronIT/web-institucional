<template>
  <div class="video-container">
    <div class="tiempo">
      <img :src="this.icono" alt="imagen" class="icono" />
      <h4>{{ this.nombreDia }}</h4>
      <h4 style="margin-top: -1rem; margin-bottom: -0.5rem">
        {{ this.mes }} {{ this.dia }}
      </h4>

      <p style="font-size: 15px">
        Máx:{{ this.tiempo.temperature_max }}°C/Min:
        {{ this.tiempo.temperature_min }}°C
      </p>
      <div class="lin"></div>
      <p style="font-weight: 300; line-height: 1.2rem">
        <!-- {{ new Date().toLocaleTimeString().slice(0, -6) }} hs <br /> -->
        {{ this.horas }}:{{ this.minutos }}hs<br />
        {{ this.text }} <br />HUMEDAD {{ this.tiempo.humidity }} %
      </p>
    </div>
    <div class="texto">
      <!-- <h1 class="trabajando">trabajando</h1> -->
      <h1 class="vos">Forjando el</h1>
      <img
        src="./../../../public/images/fotomanana.png"
        alt=""
        class="trabajando"
      />
    </div>
    <img
      src="@/assets/images/CirculoFondoVideo.svg"
      alt="imagen"
      class="circulo"
    />

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
      nombreDia: "",
      dia: "",
      mes: "",
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
          let dia = new Date();
          this.dia = dia.getDate();
          this.getDia(dia.getDay());
          this.getMes(dia.getMonth());
          // this.text = asd.split(" ");
          // this.text = this.text[0].toUpperCase();
          this.text = asd.toUpperCase();

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
    getDia(dia) {
      switch (dia) {
        case 1:
          this.nombreDia = "LUNES";
          break;
        case 2:
          this.nombreDia = "MARTES";
          break;
        case 3:
          this.nombreDia = "MIÉRCOLES";
          break;
        case 4:
          this.nombreDia = "JUEVES";
          break;
        case 5:
          this.nombreDia = "VIERNES";
          break;
        case 6:
          this.nombreDia = "SÁBADO";
          break;
        case 7:
          this.nombreDia = "DOMINGO";
          break;

        default:
          break;
      }
    },
    getMes(mes) {
      switch (mes) {
        case 0:
          this.mes = "ENE";
          break;
        case 1:
          this.mes = "FEB";
          break;
        case 2:
          this.mes = "MAR";
          break;
        case 3:
          this.mes = "ABR";
          break;
        case 4:
          this.mes = "MAY";
          break;
        case 5:
          this.mes = "JUN";
          break;
        case 6:
          this.mes = "JUL";
          break;
        case 7:
          this.mes = "AGO";
          break;
        case 8:
          this.mes = "SEP";
          break;
        case 9:
          this.mes = "OCT";
          break;
        case 10:
          this.mes = "NOV";
          break;
        case 11:
          this.mes = "DIC";
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
.circulo {
  position: absolute;
  right: -10rem;
  bottom: 0;
  height: 86%;
  width: 50%;
  /* z-index: 2; */
}
.video-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* box-shadow: 0px 5px 5px rgba(94, 94, 94, 0.568); */
  width: 100%;
  border-bottom-right-radius: 80px;
  overflow: hidden;
}

.gif {
  width: 100%;
  overflow: hidden;
  height: 86vh;
  border-bottom-right-radius: 60px;
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
  /* position: absolute;
  bottom: 0; */
}
.tiempo {
  position: absolute;
  top: 25%;
  left: 7%;
  width: 12%;
  height: 65%;
  z-index: 1;
  display: flex;
  flex-direction: column;
  color: #fff;
  background: rgba(245, 245, 245, 0.1);
  backdrop-filter: blur(7.5px);
  border-bottom-right-radius: 20px;
  padding: 1%;
  text-align: left;
  /* border: 0.5px solid white; */
}

.tiempo h4 {
  font-weight: 400;
  font-size: 28px;
  flex-shrink: 0;
}
.tiempo p {
  font-weight: 100;
}
.tiempo h5 {
  font-weight: 400;
}
.lin {
  background: #fff;
  height: 2px;
  width: 92%;
  /* margin: auto; */
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
}
.icono {
  height: 77px;
  width: 125px;
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
  font-weight: bold;
  background-clip: text;
  /* -webkit-text-stroke-width: 0.2px; */
  /* -webkit-text-stroke-color: white; */
  -webkit-text-fill-color: transparent;
  /* -webkit-background-clip: text; */
  /* -webkit-text-stroke: 0.01px white; */
  margin-bottom: 10%;
}
.vos {
  color: white;
  font-weight: 400;
  font-size: 70px;
  font-style: italic;
  margin-bottom: -3%;
  margin-right: 7%;
}
.trabajando {
  width: 28vw;
  height: 12vh;
}
</style>
