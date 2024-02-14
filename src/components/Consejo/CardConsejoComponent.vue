<template>
  <div class="eco-contenedor">
    <div class="medio">
      <div>
        <img src="@/assets/images/Logo-Consejo.svg" alt="" class="logo" />
      </div>
      <div class="text">
        <h3>¡VISITÁ NUESTRA PÁGINA WEB!</h3>
        <p>
          El Consejo Deliberante de Sacanta está en acción, impulsando el
          progreso en nuestra amada localidad. Unite a nosotros en este
          emocionante viaje hacia un futuro brillante y lleno de oportunidades.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardConsejoComponent",
};
</script>

<style scoped>
.eco-contenedor {
  background: #eae9e9;
  color: rgba(255, 255, 255, 0.432);
  /* height: 22%; */
  min-height: 169px;
  width: 90%;
  margin: auto;
  border-radius: 0px 50px;
  padding: 1.3rem 0 0 0;
  background-image: url("./../../assets/images/FrameConsejo.svg");
  background-repeat: repeat;
  background-position: center;
  /* overflow: hidden; */

  background-size: 15%;
}
.medio {
  width: 92%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin: auto;
  /* background: red; */
}
.logo {
  min-height: 90px;
  min-width: 326px;
  /* margin-left: 6%; */
  /* margin-top: -1rem; */
}
.text {
  text-align: left;
  width: 64%;
  padding-left: 1%;
}
.text p {
  font-size: 20px;
  color: #4b4a49;
  margin-top: -0.5rem;
  font-weight: 400;
}
.text h3 {
  font-weight: 700;
  letter-spacing: 1px;
  color: #f5900d;
}
</style>
