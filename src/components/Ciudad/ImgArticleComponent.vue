<template>
  <div class="container" style="height: 35vh">
    <div class="left">
      <img src="@/assets/logo.png" style="border-radius: 50%" />
    </div>
    <div class="right">
      <h1>El resultado de una fusión</h1>
      <p>
        Jesús María es el resultado de una fusión entre su pasado jesuita,
        africano y colonial; y su presente innovador y pujante, con una
        característica que la hace única: la calidez de su gente. Sus calles,
        sus plazas, sus barrios, sus paisajes, su infraestructura urbana y su
        gran impronta cultural e histórica, constituyen la esencia de esta
        ciudad, capital del Festival de Doma y Folklore más grande de
        Latinoamérica y del "Mejor Asado del Mundo".
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImgArticle",
};
</script>

<style scoped>
.container {
  display: flex;
  margin: 50px 0;
}

.left {
  width: 50%;
}

.right {
  width: 50%;
  text-align: left;
}
</style>
