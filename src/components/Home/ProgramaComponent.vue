<template>
  <div class="card" style="width: 30%">
    <img src="@/assets/campoBravo.png" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgramaComponent",
};
</script>

<style scoped>
.card img {
  object-fit: scale-down;
}

.btn {
  border: none;
  background: var(--red);
}

.btn:hover {
  background: var(--blue);
}
</style>
