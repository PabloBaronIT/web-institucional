<template>
  <div class="card-container">
    <a href="">
      <img :src="imgCard()" :alt="imgCard()" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    bckg: String,
  },
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
  width: 35%;
  height: 180px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 200px;
  border-bottom-left-radius: 100px;
  border: 10px double var(--blue);
}
</style>
