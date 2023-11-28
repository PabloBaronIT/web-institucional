<template>
  <div class="grid">
    <div
      v-for="(item, index) in this.programas"
      :key="item.id"
      :class="`item item${index}`"
    >
      <router-link to="/ciudad" class="item">
        <img :src="item.imagen" alt="imagen" />

        <div class="titulo">
          <h3>{{ item.titulo }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "GridProgramasComponent",
  components: {},
  data() {
    return {
      programas: [
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848226/Frame_urtubl.jpg",
          titulo: "PRODUCCIÓN",
          id: 1,
        },
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848299/icon-obras_zzr092.jpg",
          titulo: "OBRAS PÚBLICAS",
          id: 1,
        },
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848341/icon-ambiente_rcpa9w.jpg",
          titulo: "AMBIENTE",
          id: 1,
        },
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848396/icon-cultura_dfhpeu.jpg",
          titulo: "CULTURA",
          id: 1,
        },
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848435/icon-educacion_bftfwi.jpg",
          titulo: "EDUCACIÓN",
          id: 1,
        },
        {
          imagen:
            "https://res.cloudinary.com/ddko88otf/image/upload/v1700848471/icon-empleo_atceng.jpg",
          titulo: "EMPLEO",
          id: 1,
        },
      ],
    };
  },
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Crea 3 columnas de igual tamaño */
  grid-template-rows: repeat(2, 1fr); /* Crea 3 filas de altura fija de 100px */
  gap: 25px;
  margin: auto;
  margin-bottom: 8vh;
  width: 88%;
  /* background: rebeccapurple; */
  /* background: linear-gradient(
    90deg,
    #019939 -3.32%,
    #ffcc03 49.27%,
    #e52320 110.14%
  ); */
  /* grid-auto-rows: minmax(100px, auto); */
}
img {
  max-width: 50%;
  max-height: 50%;
}
h3 {
  font-weight: 900;
  /* font-size: 30px; */
  font-style: normal;
  letter-spacing: 1.5px;
}
.titulo {
  width: 50%;
}
.item {
  border-radius: 20px;
  margin: auto;
  width: 358px;
  height: 148px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: white;
  /* padding: 2rem; */
}
.item a {
  text-decoration: none;
}
.item0,
.item3 {
  background: linear-gradient(92deg, #019939 1.48%, #ffcc03 127.21%);
}
.item1,
.item4 {
  background: linear-gradient(93deg, #019939 -91.82%, #ffcc03 94.91%);
}
.item2,
.item5 {
  background: linear-gradient(92deg, #ffcc03 1.51%, #e52320 109.53%);
}
</style>
