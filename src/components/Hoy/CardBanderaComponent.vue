<template>
  <div class="contenedor">
    <div class="img">
      <img src="@/../public/images/bandera.png" alt="" />
    </div>
    <div class="text">
      <h4>
        Sacanta está ubicada sobre la Ruta Provincial N° 13 en el Departamento
        San Justo, Provincia de Córdoba, en la intersección del paralelo de 31°
        40' de latitud Sur y el meridiano de 63° 03' de longitud oeste. Está
        asentada sobre la llanura de la Pampa Cordobesa, a una altura de 166
        metros sobre el nivel del mar. <br />
        El suelo es un recurso de primer orden, apto para la producción
        agropecuaria.
      </h4>
    </div>
  </div>
</template>
<style scoped>
.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 75%;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  height: 325px;
  border-radius: 0px 0px 0px 120px;
}
.img {
  height: auto;
  width: 42%;
  border-radius: 0px 0px 0px 120px;
}
img {
  height: 323px;
  width: 100%;
}
.text {
  height: auto;
  width: 55%;
  background: #fff;
  border-radius: 0px 120px 0px 0px;
  padding: 2rem 2rem;
  text-align: left;
}
.text h4 {
  font-size: 22px;
  font-weight: 400;
  color: #4b4a49;
  line-height: normal;
}
</style>
