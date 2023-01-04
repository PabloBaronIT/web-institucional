<template>
  <main class="container">
    <section class="dato">
      <h1>4</h1>
      Instituciones Educativas
    </section>
    <section class="dato">
      <h1>2</h1>
      Museos Historcos
    </section>
    <section class="dato">
      <h1>34</h1>
      Industrias Creciendo
    </section>
    <section class="dato">
      <h1>55</h1>
      Comercios y Servicios
    </section>
  </main>
</template>

<script>
export default {
  name: "DatosComponent",
};
</script>

<style scoped>
.container {
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dato {
  padding: 10px;

  width: 110px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 1s ease;
  user-select: none;
}

.dato:hover {
  background: var(--red);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.dato img {
  max-width: 50px;
}
</style>
