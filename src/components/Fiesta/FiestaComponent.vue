<template>
  <div class="contenedor-general">
    <h5>{{ Titulo }}</h5>
    <div class="contenedor-fiesta">
      <div :class="{ fecha: Posicion, fechaD: !Posicion }">
        <h1 class="texto">{{ Fecha }}</h1>
      </div>
      <div :class="{ imagen: Posicion, imagenD: !Posicion }">
        <img src="./../../../public/images/fiesta.jpg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FiestaComponent",
  props: {
    Titulo: String,
    Fecha: String,
    Posicion: Boolean,
  },
};
</script>
<style scoped>
.contenedor-general {
  width: 75%;
  margin: auto;
  text-align: center;
  min-height: 294px;
  min-width: 400px;
  margin-bottom: 8%;
}
h5 {
  color: #019939;
  font-size: 27.34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.contenedor-fiesta {
  margin-top: 2%;
  position: relative;
  width: 100%;
}
.texto {
  font-size: 48px;
  font-style: normal;
  font-weight: 900;
}
.fecha {
  text-align: center;
  align-self: center;
  max-width: 400px;
  min-height: 294px;
  border-radius: 0px 120px;
  background: linear-gradient(
    122deg,
    #00c3a8 2.26%,
    #ffb900 53.3%,
    #ff2745 100%
  );
  color: #fff;
  /* padding: 5% 0%; */
  padding: 8% 2%;

  position: absolute;
  left: 0;
  z-index: 2;
}
.fechaD {
  text-align: center;
  align-self: center;
  width: 400px;
  height: 294px;
  border-radius: 120px 0px;
  background: linear-gradient(
    122deg,
    #00c3a8 2.26%,
    #ffb900 53.3%,
    #ff2745 100%
  );
  color: #fff;
  padding: 10% 2%;
  position: absolute;
  right: 0;
  z-index: 2;
}
.imagen {
  position: absolute;
  right: 0;
}
.imagenD {
  position: absolute;
  left: 0;
}
</style>
