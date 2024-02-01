<template>
  <div class="contenedor-imagenes">
    <img
      src="./../../../public/images/Hombresito.png"
      alt="hombre"
      class="imagenderecha"
    />
    <img
      src="./../../../public/images/MuniTelefono.png"
      alt="hombre"
      class="imagenIzquierda"
    />
  </div>
</template>
<script>
export default {
  name: "PromocionesComponent",
};
</script>
<style scoped>
.contenedor-imagenes {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  height: auto;
  margin-top: 3%;
}
.imagenderecha {
  height: 100%;
  width: 37%;
  margin-right: 2%;
}
.imagenIzquierda {
  /* height: 100%; */
  width: 50%;
}
</style>
