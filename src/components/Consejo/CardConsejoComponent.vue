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
          progreso en nuestra <br />
          amada localidad.Unite a nosotros en este emocionante viaje hacia un
          futuro brillante y <br />
          lleno de oportunidades.
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
  height: 25vh;
  width: 88vw;
  margin: auto;
  border-radius: 0px 50px;
  /* margin-top: 2vh; */
  padding-top: 1.5rem;
  background-image: url("./../../assets/images/CirculoFondo.svg");
  /* opacity: 0.8; */
  background-repeat: space;
  background-position: center;
}
.medio {
  width: 84vw;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  margin: auto;
}
.logo {
  min-height: 130px;
  width: 20vw;
  margin-top: -1rem;
}
.text {
  text-align: left;
  width: 52vw;
}
.text p {
  font-size: 19px;
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
