<template>
  <article>
    <h2>NOTICIAS E INTERESES</h2>
    <div class="noticia-container">
      <div class="noticia uno">
        <img src="@/assets/logo.png" alt="" />
        <h4>
          Villa Páez: La Municipalidad refuerza la red cloacal con dos nuevos
          aliviadores
        </h4>
        <p>
          Desde hace más de un año la Municipalidad de Córdoba se mantiene
          presente en Villa Páez, un sector de la ciudad con graves problemas en
          materia de infraestructura cloacal.
        </p>
        <div class="noticia-info">
          <p class="fecha">02/01/2022</p>
          <input type="button" value="Leer mas" />
        </div>
      </div>
      <div class="noticia">
        <img src="@/assets/logo.png" alt="" />
        <h4>
          Villa Páez: La Municipalidad refuerza la red cloacal con dos nuevos
          aliviadores
        </h4>
        <p>
          Desde hace más de un año la Municipalidad de Córdoba se mantiene
          presente en Villa Páez, un sector de la ciudad con graves problemas en
          materia de infraestructura cloacal.
        </p>
        <div class="noticia-info">
          <p class="fecha">02/01/2022</p>
          <input type="button" value="Leer mas" />
        </div>
      </div>
      <div class="noticia tres">
        <img src="@/assets/logo.png" alt="" />
        <h4>
          Villa Páez: La Municipalidad refuerza la red cloacal con dos nuevos
          aliviadores
        </h4>
        <p>
          Desde hace más de un año la Municipalidad de Córdoba se mantiene
          presente en Villa Páez, un sector de la ciudad con graves problemas en
          materia de infraestructura cloacal.
        </p>
        <div class="noticia-info">
          <p class="fecha">02/01/2022</p>
          <input type="button" value="Leer mas" />
        </div>
      </div>
    </div>
    <input class="mas-btn" type="button" value="Ver mas noticias" />
  </article>
</template>

<script>
export default {};
</script>

<style scoped>
article {
  width: 100%;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
}

.mas-btn {
  padding: 10px 30px;
  border-radius: 10px;
  border: 2px solid var(--blue);
  background: none;
  margin: 10px;
  margin-bottom: 30px;
}

.noticia-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.noticia {
  border: 1px solid grey;
  border-radius: 20px;
  padding: 20px;
  margin: 10px;
  margin-bottom: 30px;
  width: 20%;
  box-shadow: 0px 5px 15px rgb(49, 49, 49);
  background: var(--blue);
  color: #fff;
}

.noticia-info {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
}

.noticia-info input {
  background: var(--red);
  border: none;
  border-radius: 5px;
  padding: 5px;
}

.uno,
.tres {
  box-shadow: none;
  padding: 0 20px;
}

.noticia-img {
}
</style>
