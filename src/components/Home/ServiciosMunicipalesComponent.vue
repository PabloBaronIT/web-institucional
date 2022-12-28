<template>
  <article>
    <section>
      <div
        @click="Colapse()"
        v-for="servicio in this.servicios"
        :key="servicio.id"
        :id="servicio.id"
        class="lista-servicios"
      >
        <div class="descripcion">
          <img class="svg" src="@/assets/arbol.svg" alt="" />
          <p>{{ servicio.name }}</p>
          <img class="svg" src="@/assets/flecha.svg" alt="" />
        </div>
        <div v-if="colapse" class="lista-expandida">
          <ul>
            <li>
              {{ servicio.lista[0] }}
            </li>
            <li>
              {{ servicio.lista[1] }}
            </li>
            <li>
              {{ servicio.lista[2] }}
            </li>
          </ul>
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
      colapseId: 0,
      servicios: [
        {
          id: 1,
          name: "Alumbrado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 2,
          name: "Alumbrado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 3,
          name: "Alumbrado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 4,
          name: "Alumbrado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 4,
          name: "Alumbrado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
      ],
    };
  },
  methods: {
    Colapse(id) {
      this.colapse = !this.colapse;
    },
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

.descripcion {
  display: flex;
}

.lista-servicios {
  padding: 5px;
  max-width: 35%;
  height: auto;
  margin: 3px;
  background: var(--blue);
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

.lista-servicios p {
  margin: 0 10px;
}
</style>
