<template>
  <article>
    <section>
      <div
        v-for="servicio in this.servicios"
        :key="servicio.id"
        :id="servicio.id"
        class="lista-servicios"
        @click="Colapse(servicio.id)"
        @mouseover="this.colapseId = servicio.id"
      >
        <div class="descripcion">
          <img class="svg" src="@/assets/arbol.svg" alt="" />
          <p>{{ servicio.name }}</p>
          <img class="svg" src="@/assets/flecha.svg" alt="" />
        </div>
        <div
          v-if="colapse == true && colapseId === servicio.id"
          class="lista-expandida"
        >
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
          name: "Arbolado",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 3,
          name: "Calles y Veredas",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 4,
          name: "Educación",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 5,
          name: "Fiscalización Actividades Comerciales",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 6,
          name: "Limpieza y Recolección",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 7,
          name: "Parques y plazas",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 8,
          name: "Fiscalización Actividades Comerciales",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 9,
          name: "Transito y transporte",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 10,
          name: "Reciclado",
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
      this.colapseId = id;
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
  width: 350px;
  min-height: 45px;
  height: auto;
  margin: 2px;
  background: var(--blue);
  color: #fff;
  border-radius: 5px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  user-select: none;
  transition: all 0.3s ease;
}

.lista-servicios:focus {
  background: var(--red);
}

.lista-servicios:hover {
  background: var(--red);
}

.lista-servicios p {
  margin: 0 10px;
}
</style>
