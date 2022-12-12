<template>
  <div class="video-container">
    <div class="video-text">
      <h1 class="video-h1">{{ this.text }}</h1>
    </div>

    <img class="flyer-img" :src="this.src" alt="" />
    <div class="capa"></div>
  </div>
</template>
<script>
export default {
  name: "FlyerComponent",
  props: {
    src: String,
    text: String,
  },
};
</script>

<style>
.video-container {
  min-height: auto;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-shadow: 0px 10px 10px rgba(133, 133, 133, 0.493);
  object-fit: cover;
}

.flyer-img {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-text {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  opacity: 1;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column wrap;
  color: #fff;
  padding: 50px;
}

.video-h1 {
  text-align: left;
  height: 200px;
  width: 200px;
}

span {
  color: var(--blue);
}
</style>
