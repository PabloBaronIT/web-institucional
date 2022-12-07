<template>
  <div class="container">
    <div class="fade-in full-width">
      <h3>El corazon de argentina</h3>
      <h1>Tierra de origen jesuita y de raices profundas</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem
        quo optio harum distinctio, tenetur maxime aperiam consequatur eaque
        esse aut quidem non, a fuga fugiat cupiditate obcaecati soluta officia.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem
        quo optio harum distinctio, tenetur maxime aperiam consequatur eaque
        esse aut quidem non, a fuga fugiat cupiditate obcaecati soluta officia.
      </p>
    </div>
    <div class="fade-in full-width">
      <DatosComponent />
    </div>
    <div class="half-width fade-in"></div>
    <div class="half-width fade-in"></div>
  </div>
</template>

<script>
import { onMounted, onUnmounted } from "vue";
import DatosComponent from "@/components/Ciudad/DatosComponent.vue";

export default {
  name: "ArticleComponent",
  components: {
    DatosComponent,
  },
  setup() {
    var fadeInElements = [];

    onMounted(() => {
      fadeInElements = Array.from(document.getElementsByClassName("fade-in"));
      document.addEventListener("scroll", handleScroll);
      handleScroll();
    });

    onUnmounted(() => {
      document.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
      for (let i = 0; i < fadeInElements.length; i++) {
        const element = fadeInElements[i];
        if (isElemVisible(element)) {
          element.style.opacity = "1";
          element.style.transform = "scale(1)";
          fadeInElements.splice(i, 1);
        }
      }
    };

    const isElemVisible = (el) => {
      var rect = el.getBoundingClientRect();
      var elemTop = rect.top + 200; // 200 = buffer
      var elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    };
  },
};
</script>

<style scoped>
h3 {
  color: var(--red);
}

.container {
  width: 90%;
  min-width: 450px;
  margin: 20px auto;
}

.fade-in {
  height: auto;
  margin-bottom: 40px;
  opacity: 0;
  transition: 0.5s all ease-out;
  transform: scale(0.8);
  box-sizing: border-box;
  padding: 0px;
  display: inline-block;
}
.full-width {
  width: 100%;
}

.half-width {
  width: 47.5%;
}

.half-width:nth-of-type(2n + 1) {
  margin-right: 2.5%;
}

.half-width:nth-of-type(2n) {
  margin-left: 2.5%;
}
</style>
