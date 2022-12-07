<template>
  <div class="fila-footer">
    <div class="col-footer">
      <h5>Titulo lista</h5>
      <ul class="lista-footer">
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
      </ul>
    </div>
    <div class="col-footer">
      <h5>Titulo lista</h5>
      <ul class="lista-footer">
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
      </ul>
    </div>
    <div class="col-footer">
      <h5>Titulo lista</h5>
      <ul class="lista-footer">
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
        <li class="opcion-footer"><a href="">Opcion 1</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.fila-footer {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.col-footer {
  margin: 10px 40px;
}

h5 {
  color: var(--red);
}

.opcion-footer {
  list-style: none;
  text-align: left;
}

.opcion-footer a {
  text-decoration: none;
  list-style: none;
  color: var(--green);
}
</style>
