<template>
  <topNavComponent />
  <router-view />
</template>

<script>
import topNavComponent from "@/components/Home/TopNavComponent.vue";

export default {
  components: {
    topNavComponent,
  },
};
</script>

<style>
#app {
  --green: #00ffd1;
  --blue: #31c6d4;
  --yellow: #f9d923;
  --red: #eb5353;
  --neon-effect: 0 0 0 transparent, 0 0 20px rgb(255, 0, 0),
    0 0 50px rgba(255, 0, 0, 0.5), 0 0 200px rgba(255, 0, 0, 0.5),
    0 0 250px rgba(255, 0, 0, 1), 0 0 300px rgba(255, 0, 0, 1),
    -250px -100px 100px rgba(255, 0, 0, 1);

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
