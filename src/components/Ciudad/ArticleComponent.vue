<template>
  <div class="article-container">
    <transition name="fade">
      <div class="">
        <h4 style="color: var(--red)">EL CORAZÓN DE ARGENTINA</h4>
        <h2>Tierra de origen jesuita y de raíces profundas</h2>
      </div>
    </transition>
    <transition name="fade">
      <div class="">
        <h4 style="color: var(--red)">EL CORAZÓN DE ARGENTINA</h4>
        <h2>Tierra de origen jesuita y de raíces profundas</h2>
      </div>
    </transition>
    <transition name="fade">
      <div class="">
        <h4 style="color: var(--red)">EL CORAZÓN DE ARGENTINA</h4>
        <h2>Tierra de origen jesuita y de raíces profundas</h2>
      </div>
    </transition>
    <transition name="fade">
      <div class="">
        <h4 style="color: var(--red)">EL CORAZÓN DE ARGENTINA</h4>
        <h2>Tierra de origen jesuita y de raíces profundas</h2>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ArticleComponent",
};
</script>

<style scoped>
.article-container {
  padding: 20px;
}

.fade-leave-top {
  opacity: 0;
}

.fade-enter-to,
.fade-enter-active,
.fade-enter-from {
  transition: opacity 1s ease;
}
</style>
