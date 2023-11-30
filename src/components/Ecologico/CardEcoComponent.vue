<template>
  <div class="eco-contenedor">
    <div class="medio">
      <div>
        <img src="@/assets/images/EcoLogo.svg" alt="" class="logo" />
      </div>
      <div class="text">
        <h3>¡POR UN PLANETA MÁS VERDE!</h3>
        <p>
          La digitalización es la clave para proteger nuestro planeta. Al
          reducir el uso de papel y <br />
          adoptar tecnologías ecoamigables podemos hacer del mundo un lugar más
          verde y limpio.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardEcoComponent",
};
</script>
<style scoped>
.eco-contenedor {
  background: #019939;
  color: white;
  height: 25vh;
  width: 88vw;
  margin: auto;
  border-radius: 0px 50px;
  margin-top: 3vh;
  padding: 1.5rem;
}
.medio {
  width: 70vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto;
}
.logo {
  min-height: 130px;
  min-width: 130px;
  margin-top: -7%;
}
.text {
  text-align: left;
  width: 52vw;
}
.text p {
  font-size: 19px;
  margin-top: -0.5rem;
  font-weight: 200;
}
.text h3 {
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
