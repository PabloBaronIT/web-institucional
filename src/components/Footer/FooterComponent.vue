<template>
  <footer>
    <img
      src="@/assets/campoBravo.png"
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

footer img {
  object-fit: cover;
}
</style>
