<template>
  <article>
    <section>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
      <div class="lista-servicios">
        <img class="svg" src="@/assets/arbol.svg" alt="" />
        <p>Denuncia de suciedad</p>
        <img class="svg" src="@/assets/flecha.svg" alt="" />
        <div v-if="colapse" class="lista-expandida">
          <p>hola hola</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      colapse: false,
      //   servicios:[
      //     {name:"Poda de"}
      //   ]
    };
  },
};
</script>

<style>
.svg {
  max-width: 1.2em;
}
</style>

<style scoped>
article {
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
section {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
}

.lista-servicios {
  padding: 5px;
  max-width: 35%;
  height: 50px;
  margin: 3px;
  background: var(--blue);
  color: #fff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lista-servicios p {
  margin: 0 10px;
}
</style>
