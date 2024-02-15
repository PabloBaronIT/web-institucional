<template>
  <a href="https://munienlinea-sacanta.com.ar/#/login" target="blank">
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
        <h1 class="text tus">Tus</h1>
        <h1 class="grande">gestiones</h1>
        <h1 class="text donde">donde estés</h1>
      </div>
      <div class="muni-linea">
        <img src="@/assets/images/Muni-linea.svg" alt="" />
      </div>
      <div class="linea-b"></div>
    </div>
  </a>
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
  height: 86vh;
  background-repeat: no-repeat;
  margin: auto;
  border-radius: 60px 0px 60px 0px;
  margin-top: 7vh;
  background: linear-gradient(
    272deg,
    #000 -23.75%,
    rgba(0, 0, 0, 0) 55.14%,
    #000 114.38%
  );

  background-image: url("@/../public/images/imagenHombre.png");
  background-size: cover;
  background-repeat: no-repeat;
  /* filter: brightness(0.7); */
  z-index: 1;
  overflow: hidden;
}
.capa {
  position: absolute;
  border-radius: 60px 0px 60px 0px;
  background-size: contain;

  width: 88vw;
  height: 86vh;
  background: linear-gradient(
    272deg,
    #000 -23.75%,
    rgba(0, 0, 0, 0) 55.14%,
    #000 114.38%
  );
}
.text-izquierdo {
  position: absolute;
  margin-left: 4%;
  margin-top: 3%;
  width: 30%;
  z-index: 2;
}
.text-derecho {
  position: absolute;
  right: 5%;
  top: 24%;
  z-index: 2;
}
.text {
  color: white;
  font-weight: 900;
  font-size: 60px;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  /* line-height: normal; */
}
.tus {
  margin-left: 6%;
}
.donde {
  margin-top: -7%;
  margin-left: 15%;
}
.grande {
  font-size: 100px;
  font-weight: 400;
  color: white;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  /* line-height: normal; */
  margin-top: -12%;
}
.muni-linea {
  position: absolute;
  right: 11%;
  bottom: 24%;
  width: 16.5%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(106deg, #019939 0%, #ffcc03 101.17%);
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
@media (max-width: 500px) {
  .contenedor-imagen {
    margin-top: 5%;
    width: 100%;
    height: 171px;
    background-size: cover;
    border-radius: 16px 0px 16px 0px;
  }
  .capa {
    height: 171px;
    width: 100%;

    border-radius: 0px 0px 16px 0px;
  }

  .text-izquierdo h3 {
    font-size: 8px;
  }
  .text-derecho {
    top: 14%;
  }
  .grande {
    font-size: 32px;
    margin-top: -15%;
  }
  .text {
    font-size: 16px;
  }
  .donde {
    margin-top: -12%;
  }

  .muni-linea {
    border-radius: 16px;

    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.5);
    width: 60px;
    height: 23px;
    right: 15%;
    bottom: 36%;
  }
  .muni-linea img {
    width: 50%;
  }
  .linea-b {
    visibility: hidden;
  }
}
</style>
