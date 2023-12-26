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
          amada localidad. Unite a nosotros en este emocionante viaje hacia un
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
  /* height: 22%; */
  width: 89%;
  margin: auto;
  border-radius: 0px 50px;
  /* margin-top: 2vh; */
  padding: 1rem 0;
  background-image: url("./../../assets/images/CirculoFondo.svg");
  /* opacity: 0.8; */
  background-repeat: repeat;
  background-position: center;
  background-size: 15%;

  /* overflow: var(); */
}
.medio {
  width: 92%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  /* background: red; */
}
.logo {
  min-height: 126px;
  width: 75%;
  margin-left: 6%;
  /* margin-top: -1rem; */
}
.text {
  text-align: left;
  width: 88%;
}
.text p {
  font-size: 21px;
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
