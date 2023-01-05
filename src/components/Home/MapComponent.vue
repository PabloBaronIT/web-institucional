<template>
  <div class="titulo">
    <h2>Mapa de la ciudad</h2>
    <h4>Puntos interesantes para visitar</h4>
  </div>
  <div class="map-container">
    <a
      class="ver-mas"
      target="_blank"
      href="https://www.google.com.ar/maps/place/Sacanta,+C%C3%B3rdoba/@-31.6667095,-63.0419205,15z/data=!4m5!3m4!1s0x95ccb073fc8d85a3:0x5c117ea2f28a7d71!8m2!3d-31.6639934!4d-63.0472807"
      >Ver ubicación</a
    >
    <div class="dropdown clima ver-mas">
      <a class="ver-mas" href="http://localhost:8080/#/">{{ this.clima }}</a>
      <img :src="'https:' + this.img" alt="" />
    </div>
  </div>
</template>

<script>
import climaService from "@/service/climaService";

export default {
  data() {
    return {
      clima: "",
      tab: false,
      img: "",
    };
  },
  created() {
    climaService.getWeatherData().then(async (response) => {
      this.clima = response.data.current.feelslike_c;
      this.img = response.data.current.condition.icon;
      console.log(response.data);
    });
  },
};
</script>

<style>
.clima {
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  margin: 0 10px;
  height: auto;
  border-radius: 10px;
}

.clima a {
  background: var(--red);
  box-shadow: 0 8px 32px 0 rgba(128, 135, 31, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.titulo {
  margin: 6vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}
</style>

<style scoped>
h2 {
  color: var(--red);
}

.map-container {
  background-attachment: fixed;
  background-image: url(@/assets/Map.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ver-mas {
  color: var(--text-color);
  text-decoration: none;
  background: var(--red);
  border: none;
  padding: 10px;
  width: 150px;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.map-container input:hover {
  background: var(--blue);
}
</style>
