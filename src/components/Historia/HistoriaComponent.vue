<template>
  <div class="contenedor">
    <!-- <div v-for="(item, index) in this.historia" :key="index"> -->
    <!-- <img :src="item.imagen" alt="" class="imagen" />
      {{ item.descripcion }} -->
    <CardComponent
      :data="item"
      v-for="(item, index) in this.historia"
      :key="index"
    />
    <!-- </div> -->
  </div>
</template>
<script>
import CardComponent from "./CardComponent.vue";
export default {
  name: "HistoriaComponent",
  data() {
    return {
      historia: [
        {
          descripcion:
            "Lorem Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the  Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1705008145/qaofyyzpj5ksucb3vxgr.png",
          fecha: "1908",
        },
        {
          descripcion:
            "Lorem Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the  Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1705008145/qaofyyzpj5ksucb3vxgr.png",
          fecha: "1930",
        },
        {
          descripcion:
            "Lorem Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the  Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1705008145/qaofyyzpj5ksucb3vxgr.png",
          fecha: "1952",
        },
        {
          descripcion:
            "Lorem Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the  Ipsum is simply dummy    texto of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum",
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1705008145/qaofyyzpj5ksucb3vxgr.png",
          fecha: "1997",
        },
      ],
    };
  },
  components: {
    CardComponent,
  },
};
</script>
<style scoped>
.contenedor {
  width: 100%;
  height: auto;
  background: #eae9e9;
  border-radius: 0px 56px;
  margin-top: 3%;
  padding: 6% 3%;
}
@media (max-width: 500px) {
  .contenedor {
    border-radius: 0px;
  }
}
</style>
