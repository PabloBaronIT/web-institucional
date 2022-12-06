<template>
  <div class="video-container">
    <div class="video-text">
      <h1 class="video-h1">Ciudad de Campo Bravo, tu ciudad</h1>
    </div>

    <video muted autoplay loop>
      <source src="@\assets\ciudad.mp4" type="video/mp4" />
    </video>
    <div class="capa"></div>
  </div>
</template>

<script>
export default {
  name: "ImgComponent",
};
</script>

<style scoped></style>
