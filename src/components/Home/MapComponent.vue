<template>
  <div class="titulo">
    <h2>Mapa de la ciudad</h2>
    <h4>Puntos interesantes para visitar</h4>
  </div>
  <div class="map-container">
    <input type="button" value="Ver mas" />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
h2 {
  color: var(--red);
}

.titulo {
  margin: 6vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.map-container {
  background-attachment: fixed;
  background-image: url(@/assets/Map.png);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: contain;
  min-height: 290px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-container input {
  background: var(--red);
  border: none;
  padding: 10px;
  width: 150px;
  border-radius: 30px;
  transition: all 0.3s ease;
}

.map-container input:hover {
  background: var(--blue);
}
</style>
