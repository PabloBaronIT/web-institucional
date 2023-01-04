<template>
  <div class="view"></div>
</template>
<script>
export default {
  name: "NewsView",
  components: {},
  data() {
    return {
      isVisible: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.checkVisibility);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.checkVisibility);
  },
  methods: {
    checkVisibility() {
      const scrollTop =
        window.pageYOffset ||
        (document.documentElement || document.body.parentNode || document.body)
          .scrollTop;
      const windowHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const scrollPercent = (scrollTop / (docHeight - windowHeight)) * 100;
      if (scrollPercent > 50) {
        this.isVisible = true;
      }
    },
  },
};
</script>

<style scoped>
.view {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.view.is-visible {
  opacity: 1;
}
</style>
