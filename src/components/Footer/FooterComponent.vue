<template>
  <footer>
    <div class="telefonos-container">
      <h5>TELÉFONOS ÚTILES - ATENCIÓN 24 HS</h5>
      <div class="telefonos">
        <div style="text-align: center" class="hospital">
          <h4>HOSPITAL</h4>
          <h1 class="numeros">
            <img src="./../../assets/images/TelefonoFooter.svg" alt="" />111
          </h1>
        </div>
        <div style="text-align: center">
          <h4>BOMBEROS</h4>
          <h1 class="numeros">
            <img src="./../../assets/images/TelefonoFooter.svg" alt="" />100
          </h1>
        </div>
        <div style="text-align: center" class="centroSalud">
          <h4>CENTRO DE SALUD</h4>
          <h1 class="numeros">
            <img src="./../../assets/images/TelefonoFooter.svg" alt="" />100
          </h1>
        </div>
        <div style="text-align: center">
          <h4>POLICíA</h4>
          <h1 class="numeros">
            <img src="./../../assets/images/TelefonoFooter.svg" alt="" />101
          </h1>
        </div>
        <div class="mas">
          <h4>Ver más</h4>
        </div>
      </div>
    </div>
    <div class="logo">
      <img
        src="@/assets/images/LogoBlancoSacanta.svg"
        alt=""
        class="logo-muni"
      />
    </div>
    <div class="direccion">
      <h5>
        <strong>Municipalidad de Sacanta <span>|</span> </strong>
        <br class="br" />
        25 de Mayo 292, Sacanta, Cordoba <br class="br" /><span>|</span> CP
        X5945 | TEL.: 03533 15 417923
      </h5>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
};
</script>

<style scoped>
footer {
  margin: 0;
  background: linear-gradient(
    90deg,
    #019939 -3.32%,
    #ffcc03 49.27%,
    #e52320 110.14%
  );
  /* background: var(--blue); */
  display: flex;
  flex-flow: column wrap;
  height: 43vh;
  /* box-shadow: 0px 0px 15px #aaa; */
  align-items: center;
  justify-content: space-evenly;
  /* padding: 20px; */
  color: #019939;
  width: 100%;
}
h4 {
  font-weight: 400;
  line-height: normal;
}
.telefonos-container {
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(245, 245, 245, 0.15);
  backdrop-filter: blur(7.5px);
  border-radius: 50px 0px;
  padding-top: 1rem;
}
h5 {
  font-weight: 700;
  font-size: 24px;
}
.telefonos {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  color: white;
  margin-top: 1vh;
  margin-bottom: -1rem;
}
.numeros {
  color: #019939;
  font-size: 80px;
  font-weight: 900;
  line-height: normal;
  font-style: normal;
  margin-top: -5vh;
  margin-left: -15px;
}

.direccion h5 {
  color: white;
  font-weight: 300;
  line-height: normal;
  letter-spacing: 1px;
}
.logo {
  display: none;
}
.br {
  display: none;
}
.numeros img {
  visibility: hidden;
}
.mas {
  text-align: center;
  color: #019939;
  height: 50px;
  margin-top: 4%;
  text-decoration: underline;
}
.centroSalud {
  display: none;
}
/* MOBILE */
@media (max-width: 500px) {
  footer {
    height: 134px;
    width: 100%;
    position: relative;
  }
  h5 {
    font-size: 8px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 1%;
  }
  .telefonos-container {
    height: 50px;
    border-radius: 12.5px 0px;
    width: 90%;
    margin: auto;
    margin-top: 5%;
    padding-top: 8%;
    padding-bottom: 5%;
  }
  h4 {
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .numeros {
    font-size: 19px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-top: -0.8rem;
    margin-left: 0;
  }
  .numeros img {
    visibility: visible;
  }

  .telefonos {
    margin: 0;
  }
  .logo {
    display: block;
    width: 112px;
    height: 32px;
    position: absolute;
    left: 4%;
    bottom: 14%;
  }
  .direccion {
    width: 50%;
    /* margin-right: -10%; */
    text-align: right;
    position: absolute;
    right: 5%;
    bottom: 2%;
  }
  .logo-muni {
    width: 112px;
  }
  .br {
    display: block;
  }
  .mas {
    display: none;
  }
  .hospital {
    display: none;
  }
  .centroSalud {
    display: block;
  }
  span {
    display: none;
  }
}
</style>
