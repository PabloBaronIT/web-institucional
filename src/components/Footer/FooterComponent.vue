<template>
  <footer>
    <img
      src="https://morteros.gob.ar/sites/default/files/logo_municipio_0.png"
      alt=""
      style="width: 20%; height: 50px"
    />
    <filaFooterComponent />
  </footer>
</template>

<script>
import FilaFooterComponent from "@/components/Footer/FilaFooterComponent.vue";

export default {
  name: "FooterComponent",
  components: {
    FilaFooterComponent,
  },
};
</script>

<style scoped>
footer {
  margin: 0;
  background: var(--blue);
  display: flex;
  height: auto;
  box-shadow: 0px 0px 15px #aaa;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
}
</style>
