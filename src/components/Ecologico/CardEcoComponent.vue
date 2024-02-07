<template>
  <div class="eco-contenedor">
    <div class="medio">
      <div>
        <img src="@/assets/images/EcoLogoMobile.svg" alt="" class="logo" />
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
  background: #3bae49;
  color: white;
  /* height: 5%; */
  max-height: 169px;
  width: 90%;
  margin: auto;
  margin-top: 2%;
  padding: 1rem;
  border-radius: 0px 60px;
}
.medio {
  width: 77%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}
.logo {
  min-height: 130px;
  min-width: 130px;
  /* margin-left: 16%; */
}
.text {
  text-align: left;
  width: 80%;
  margin-top: 2%;
}
.text p {
  font-size: 19px;
  /* margin-top: -0.7rem; */
  font-weight: 400;
}
.text h3 {
  font-weight: 700;
  letter-spacing: 1px;
}
@media (max-width: 500px) {
  .eco-contenedor {
    height: 62px;
    padding: 0px;
    padding-left: 2%;
    padding-top: 1%;
  }
  .medio {
    width: 100%;
    height: 62px;
    justify-content: left;
  }
  .text {
    padding: 0% 3%;
    height: 62px;
    width: 95%;
  }
  br {
    display: none;
  }
  .text h3 {
    font-weight: 700;
    font-size: 10px;
    margin-bottom: -0.5%;
  }
  .text p {
    font-size: 8px;
    /* margin-top: -0.7rem; */
    font-weight: 400;
  }
  .logo {
    min-height: 45px;
    min-width: 45px;
    margin-bottom: 15%;
  }
  .eco-contenedor {
    width: 90%;
    margin: auto;
    margin-top: 3%;
    border-radius: 8px;
  }
}
</style>
