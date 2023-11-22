<template>
  <div class="contenedor-imagen">
    <div class="capa"></div>
    <div class="text-izquierdo">
      <h3 style="color: white">
        Presentá todos tus trámites y <br />
        gestiones de manera rápida <br />y simple, sin horarios y <br />
        desde el lugar que <br />
        vos elijas.
      </h3>
    </div>
    <div class="text-derecho">
      <h1 class="text" style="margin-left: 2vw">Tus</h1>
      <h1 class="grande">gestiones</h1>
      <h1 class="text" style="margin-top: -5vh; margin-left: 4vw">
        donde estés
      </h1>
    </div>
    <div class="muni-linea">
      <img src="@/assets/images/Muni-linea.svg" alt="" />
    </div>
    <div class="linea-b"></div>
  </div>
</template>
<script>
export default {
  name: "ImagenComponent",
};
</script>
<style scoped>
.contenedor-imagen {
  position: relative;
  width: 88vw;
  height: 80vh;
  background-repeat: no-repeat;
  margin: auto;
  border-radius: 60px 0px 60px 0px;
  margin-top: 5vh;
  background: linear-gradient(
    272deg,
    #000 -23.75%,
    rgba(0, 0, 0, 0) 55.14%,
    #000 114.38%
  );

  background-image: url("@/../public/images/imagenHombre.png");
  /* filter: brightness(0.7); */
  z-index: 1;
  overflow: hidden;
}
.capa {
  position: absolute;
  border-radius: 60px 0px 60px 0px;

  width: 88vw;
  height: 80vh;
  background: linear-gradient(
    272deg,
    #000 -23.75%,
    rgba(0, 0, 0, 0) 55.14%,
    #000 114.38%
  );
}
.text-izquierdo {
  position: absolute;
  margin-left: 3vw;
  margin-top: 5vh;
  width: 30vw;
  z-index: 2;
}
.text-derecho {
  position: absolute;
  right: 4vw;
  top: 22vh;
  z-index: 2;
}
.text {
  color: white;
  font-weight: 900;
  font-size: 60px;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  /* line-height: normal; */
}
.grande {
  font-size: 100px;
  font-weight: 400;
  color: white;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  /* line-height: normal; */
  margin-top: -8vh;
}
.muni-linea {
  position: absolute;
  right: 11vw;
  bottom: 17vh;
  width: 14vw;
  height: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(123deg, #019939 9.94%, #ffcc03 98.77%);
  box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
  border-radius: 0px 20px;
}
.muni-linea img {
  height: 7vh;
  /* width: 30vw; */
}
.linea-b {
  position: absolute;
  height: 6px;
  width: 100%;
  background: linear-gradient(
    270deg,
    #e52320 9.64%,
    #ffcc03 55.98%,
    #019939 87.68%
  );
  bottom: 0;
}
</style>
