<template>
  <div class="eco-contenedor">
    <div class="medio">
      <div>
        <img src="@/assets/images/EcoLogo.svg" alt="" class="logo" />
      </div>
      <div class="text">
        <h3>¡POR UNA PLANETA MAS VERDE!</h3>
        <p>
          La digitalización es la clave para proteger nuestro planeata. Al
          reducir el uso del papel y adoptar tecnologias ecoamigables podemos
          hacer del mundo un lugar mas verde y limpio.
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
  height: 24vh;
  width: 88vw;
  margin: auto;
  border-radius: 0px 50px;
  margin-top: 2vh;
  padding-top: 0.6rem;
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
  width: 130px;
}
.text {
  text-align: left;
  width: 52vw;
}
.text p {
  font-size: 18px;
}
.text h3 {
  font-weight: 700;
  letter-spacing: 1px;
}
</style>
