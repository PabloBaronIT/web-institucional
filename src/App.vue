<template>
  <topNavComponent />
  <router-view />
  <footerComponent />
</template>

<script>
import topNavComponent from "@/components/Home/TopNavComponent.vue";
import footerComponent from "@/components/Footer/FooterComponent.vue";

export default {
  components: {
    topNavComponent,
    footerComponent,
  },
};
</script>

<style>
#app {
  --green: #d1e9ea;
  --blue: #415f77;
  --yellow: #fff7e9;
  --red: #e14d2a;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>
