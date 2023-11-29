<template>
  <div class="contenedor">
    <div class="top"></div>
    <div class="buscador">
      <label for="">Buscar</label>
      <input type="text" name="" id="" />
      <div>
        <i class="bi bi-search" style="color: white; font-size: 20px"></i>
      </div>
    </div>
    <h2>¿Qué necesitás hacer?</h2>
    <CaroulselTarjetasComponent />
  </div>
</template>
<script>
import CaroulselTarjetasComponent from "@/components/Carousel/CarouselTarjetasComponent.vue";
export default {
  name: "TarjetasComponent",
  components: {
    CaroulselTarjetasComponent,
  },
};
</script>
<style scoped>
.contenedor {
  position: relative;
  background: #eae9e9;
  color: rgba(255, 255, 255, 0.432);
  height: 41vh;
  width: 88vw;
  margin: auto;
  border-radius: 50px 0px;
  margin-top: 7vh;
  padding-top: 2rem;
  background-image: url("./../../assets/images/CirculoFondoGrandes.svg");
  /* opacity: 0.8; */
  background-repeat: repeat;
  background-position: center;
  text-align: center;
  overflow: hidden;
}
h2 {
  color: #019939;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 50px;
}
.top {
  position: absolute;
  top: 0;
  width: 100%;
  height: 15%;
  background: linear-gradient(
    90deg,
    #019939 0.18%,
    #ffcc03 52.79%,
    #e52320 107.64%
  );
}
.buscador {
  position: absolute;
  width: 30%;
  height: 15%;
  background: #019939;
  top: 0;
  right: 0;
  border-bottom-left-radius: 50px;
  text-align: left;
  padding-left: 4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
label {
  color: white;
}
input {
  background: none;
  border-style: none;
  margin-left: 0.5rem;
  margin-right: 1rem;
  width: 60%;
}
</style>
