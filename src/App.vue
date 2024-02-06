<template>
  <topNavComponent />
  <router-view />
  <footerComponent />
</template>

<script>
import topNavComponent from "@/components/Nav/TopNavComponent.vue";

import footerComponent from "@/components/Footer/FooterComponent.vue";

export default {
  components: {
    topNavComponent,
    footerComponent,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  --green: #d1e9ea;
  --blue: #415f77;
  --yellow: #fff7e9;
  --red: #e14d2a;
  font-family: "Source Sans 3", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  --fondo: linear-gradient(
    90deg,
    #019939 -2.19%,
    #ffcc03 53.06%,
    #e52320 106.23%
  );
  background: #f5f5f5;
  /* width: 100%; */
}
@media (max-width: 500px) {
  #app {
    width: 100%;
    height: auto;
    font-family: "Source Sans 3", sans-serif;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f5f5f5;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}
/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
} */
</style>
