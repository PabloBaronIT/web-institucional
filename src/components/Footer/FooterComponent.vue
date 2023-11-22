<template>
  <footer>
    <div class="telefonos-container">
      <h5 style="font-weight: 900; font-size: 24px">
        TELÉFONOS ÚTILES-ATENCIÓN 24 HS
      </h5>
      <div class="telefonos">
        <div style="text-align: center">
          <h4>HOSPITAL</h4>
          <h1 class="numeros">111</h1>
        </div>
        <div style="text-align: center">
          <h4>ATENCIÓN AL VECINO</h4>
          <h1 class="numeros">147</h1>
        </div>
        <div style="text-align: center">
          <h4>POLICIA</h4>
          <h1 class="numeros">102</h1>
        </div>
      </div>
    </div>
    <h5 class="direccion">
      <strong>Municipalida de Sacanta | </strong>
      25 de Mayo 292, Sacanta, Cordoba | CP X5945 | TEL.: 03533 15 417923
    </h5>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  margin: 0;
  background: linear-gradient(
    90deg,
    #019939 -3.32%,
    #ffcc03 49.27%,
    #e52320 110.14%
  );
  /* background: var(--blue); */
  display: flex;
  flex-flow: column wrap;
  height: 45vh;
  /* box-shadow: 0px 0px 15px #aaa; */
  align-items: center;
  justify-content: space-evenly;
  /* padding: 20px; */
  color: #019939;
  width: 100vw;
}
h3 {
  font-size: 800;
}
.telefonos-container {
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(245, 245, 245, 0.15);
  backdrop-filter: blur(7.5px);
  border-radius: 50px 0px;
  padding-top: 1rem;
  border: 0.5px solid white;
}
.telefonos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%;
  color: white;
  margin-top: 2vh;
}
.numeros {
  color: #019939;
  font-size: 80px;
  font-weight: 900;
  line-height: normal;
  font-style: normal;
  margin-top: -3vh;
}
.direccion {
  color: white;
  font-weight: 400;
}
</style>
