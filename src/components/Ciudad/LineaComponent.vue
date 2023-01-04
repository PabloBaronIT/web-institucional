<template>
  <div class="container">
    <div class="left">
      <div class="box" v-for="(item, index) in items" :key="index">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
      </div>
    </div>
    <div class="right">
      <div class="box" v-for="(item, index) in items" :key="index">
        <img src="@/assets/logo.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Titulo de algo",
          description: "Algo de la descripcion para aclarar",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

.line {
  height: 1px;
  width: 50%;
  background-color: #000;
  position: absolute;
  top: 50%;
  left: 25%;
}

.left {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.right {
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: 30%;
  background-color: #eee;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h2 {
  color: #555;
}

p {
  color: #999;
}
</style>
