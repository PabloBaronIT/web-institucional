<template>
  <article>
    <div class="title">
      <h2>Servicios municipales</h2>
      <h4>Puedes solicitar aqui el servicio que necesites</h4>
    </div>
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
          <img class="icono" src="@/assets/arbol.svg" alt="" />
          <p>{{ servicio.name }}</p>
          <img class="svg flecha" src="@/assets/flecha.svg" alt="" />
        </div>
        <div
          v-if="showlist === true && colapseId === servicio.id"
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
        {
          id: 11,
          name: "Puviales",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
        {
          id: 12,
          name: "Sugerencias",
          lista: [
            "Reparacion de luminaria",
            "Limpieza de equipos",
            "Mayor iluminacion",
          ],
        },
      ],
    };
  },
  computed: {},
};
</script>

<style>
.svg {
  width: 1.2em;
}
</style>

<style scoped>
.title {
  display: flex;
  align-items: baseline;
  width: 80%;
  color: var(--red);
  justify-content: space-between;
}

article {
  margin-top: 20px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
section {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
}

.icono {
  max-width: 40px;
}

.descripcion {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
}

.lista-servicios {
  padding: 5px;
  width: 370px;
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

.lista-expandida {
  height: 120px; /* Tamaño fijo de la lista desplegable */
  overflow: hidden; /* Esconde el contenido que sobresale del tamaño fijo */
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
