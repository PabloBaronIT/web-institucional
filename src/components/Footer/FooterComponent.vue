<template>
  <footer>
    <h3 style="font-weight: 800">TELEFONOS UTILES-ATENCION 24 HS</h3>
    <div class="telefonos-container">
      <h4>Telefonos utiles:</h4>
      <div class="telefono">
        <p>03525 - 443770</p>
        <p>SALUD</p>
      </div>
      <div class="telefono">
        <p>03525 - 443770</p>
        <p>OBRADOR</p>
      </div>
      <div class="telefono">
        <p>03525 - 443770</p>
        <p>VIOLENCIA DE GENERO</p>
      </div>
    </div>

    <div class="info-container">
      <img
        src="@/assets/campoBravo.png"
        alt=""
        style="width: 20%; height: 50px"
      />
      <filaFooterComponent />
    </div>
  </footer>
</template>

<script>
import FilaFooterComponent from "@/components/Footer/FilaFooterComponent.vue";

export default {
  name: "FooterComponent",
  components: {
    FilaFooterComponent,
  },
};
</script>

<style scoped>
footer {
  margin: 0;
  background: linear-gradient(
    90deg,
    #019939 -3.32%,
    #ffcc03 49.27%,
    #e52320 110.14%
  );
  /* background: var(--blue); */
  display: flex;
  flex-flow: column wrap;
  height: auto;
  /* box-shadow: 0px 0px 15px #aaa; */
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  color: #019939;
}
h3 {
  font-size: 800;
}
.telefonos-container {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}

.telefono p {
  margin: 0px;
}

.info-container {
  width: 100%;
  flex-flow: row nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

footer img {
  object-fit: cover;
  width: 100%;
}
</style>
