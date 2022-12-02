<template>
  <div class="video-container">
    <div class="video-text">
      <h1>Ciudad de Campo Bravo, tu ciudad</h1>
    </div>

    <video muted autoplay loop>
      <source src="@\assets\ciudad.mp4" type="video/mp4" />
    </video>
    <div class="capa"></div>
  </div>
</template>
<script>
export default {
  name: "VideoComponent",
};
</script>

<style scoped>
.video-container {
  min-height: 70vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 0.7;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
  color: #fff;
  padding: 50px;
}

h1 {
  text-align: left;
  height: 200px;
  width: 200px;
}
</style>
