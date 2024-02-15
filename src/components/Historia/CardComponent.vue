<template>
  <div class="contenedorcard">
    <img :src="` ${this.data.imagen}`" alt="" class="imagen" />
    <div class="contenedor-fecha">
      <h1 class="fecha">{{ this.data.fecha }}</h1>
      <div style="margin-top: -5%">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="206"
          height="45"
          viewBox="0 0 206 45"
          fill="none"
        >
          <path
            d="M204.717 24.8308C205.888 23.6592 205.888 21.7597 204.717 20.5882L185.625 1.49627C184.453 0.324696 182.554 0.324696 181.382 1.49627C180.211 2.66784 180.211 4.56734 181.382 5.73891L198.353 22.7095L181.382 39.68C180.211 40.8516 180.211 42.7511 181.382 43.9227C182.554 45.0942 184.453 45.0942 185.625 43.9227L204.717 24.8308ZM0.27832 25.7095H202.596V19.7095H0.27832V25.7095Z"
            fill="url(#paint0_linear_249_256)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_249_256"
              x1="0.27832"
              y1="23.533"
              x2="211.186"
              y2="5.61682"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#00C3A8" />
              <stop offset="0.522133" stop-color="#FFB900" />
              <stop offset="1" stop-color="#FF2745" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
    <div class="texto">
      <h5>{{ this.data.descripcion }}</h5>
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
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: solid 1px black; */
  border-radius: 16px;
  width: 90%;
  margin: auto;
  margin-bottom: 5%;
  height: 30%;
  /* color: black; */
  text-overflow: ellipsis;
}
.contenedor-fecha {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.imagen {
  height: 100%;
  width: 34%;
  border-radius: 20px;
}
.texto {
  background: #fff;
  width: 45%;
  height: 100%;
  border-radius: 20px;
  padding: 2% 2%;
}
h5 {
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
@media (max-width: 500px) {
  .contenedorcard {
    background: #fff;
    height: 220px;
    width: 95%;
    padding: 0 2% 5% 2%;
  }
  .contenedor-fecha {
    position: absolute;
    left: 20%;
    bottom: -2%;
  }
  .contenedor-fecha svg {
    display: none;
  }
  .imagen {
    height: 85%;
    width: 180px;
    border-radius: 8px;
  }
  .fecha {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    /* margin-top: 5%; */
  }
  .texto {
    width: 45%;
    height: 90%;
    /* text-align: left; */
    padding: 2% 3%;
    text-align: justify;
    /* overflow: hidden; */
  }
  .texto h5 {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .texto p {
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-top: -5%;
  }
}
</style>
