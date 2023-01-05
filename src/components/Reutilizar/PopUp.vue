<template>
  <div>
    <button @click="showPopUp = true">Mostrar pop up</button>

    <!-- Utiliza la librería v-modal para mostrar y ocultar el pop up -->
    <modal v-model="showPopUp" @close="showPopUp = false">
      <template #header>
        <h1>Título del pop up</h1>
      </template>
      <template #default>
        <p>Contenido del pop up</p>
        <button @click="showPopUp = false">Cerrar</button>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showPopUp: false,
    };
  },
};
</script>

<style>
/* Define los estilos para el componente */
</style>
