<template>
  <main class="container">
    <section class="dato">
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
    </section>
    <section class="dato">
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
    </section>
    <section class="dato">
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
      <img
        src="https://github.com/OficinaVirtualBaron/oficina-vue/blob/main/public/img/Registro%20Civil.png?raw=true"
        alt=""
      />
      <p>Datos</p>
    </section>
  </main>
</template>

<script>
export default {
  name: "DatosComponent",
};
</script>

<style scoped>
.container {
  width: 30px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.dato {
  padding: 10px;
  border: 1px solid red;
  width: 120px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 1s ease;
  user-select: none;
}

.dato:hover {
  background: var(--red);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.dato img {
  max-width: 50px;
}
</style>
