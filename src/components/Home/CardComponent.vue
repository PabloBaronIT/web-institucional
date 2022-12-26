<template>
  <div class="card-container">
    <img src="@/assets/logo-eco.svg" alt="" />
    <h1>Oficina Virtual</h1>
    <p>Compromiso ecologico a traves de la digitalizacion</p>
  </div>
</template>

<script>
export default {
  methods: {
    imgCard() {
      if (this.bckg != "") {
        return this.bckg;
      } else {
        return "Programa";
      }
    },
  },
};
</script>

<style scoped>
.card-container {
  width: 30%;
  height: 30%;
  margin: 10px;
}

img {
  fill: red;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
