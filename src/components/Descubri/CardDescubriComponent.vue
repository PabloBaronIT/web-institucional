<template>
  <div class="contenedor-descubri">
    <h4>
      Descubrí Sacanta, donde la vitalidad y hospitalidad de nuestra gente hacen
      de este pueblo un lugar único. En cada rostro, encontrarás amabilidad y en
      cada gesto, un sentido de comunidad sólida. Somos un pueblo en constante
      movimiento, guiado por una gestión municipal enfocada en el progreso y la
      mejora continua. Aquí, la colaboración y el trabajo conjunto son la clave
      de nuestro crecimiento. Bienvenido a Sacanta, donde la tradición se
      encuentra con el futuro y cada paso es un avance hacia un mañana más
      brillante.
    </h4>
    <h4 class="mobile">
      Sacanta es un pueblo único, con vitalidad y hospitalidad. La colaboración
      y el progreso son clave en nuestra comunidad. Tradición y futuro se
      encuentran aquí para avanzar hacia un mañana más brillante. ¡Bienvenido a
      Sacanta!
    </h4>
  </div>
</template>
<script>
export default {
  name: "CardDescubriComponent",
};
</script>
<style scoped>
.contenedor-descubri {
  border-radius: 0px 120px;
  background: #fff;
  width: 88%;
  margin: auto;
  height: 30%;
  padding: 3rem 2.5rem;
  text-align: center;
  margin-top: 5%;
  margin-bottom: 5%;
}
h4 {
  color: #4b4a49;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
}
.mobile {
  display: none;
}
@media (max-width: 500px) {
  .contenedor-descubri {
    width: 100%;
    height: 116px;
    border-radius: 0px 32px 0px 0px;
    padding: 13px 16px 16px 16px;
  }
  h4 {
    display: none;
  }
  .mobile {
    display: block;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: #4b4a49;
  }
}
</style>
