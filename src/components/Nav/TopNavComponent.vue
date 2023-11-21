<template>
  <nav class="top-nav-container">
    <router-link to="/"
      ><img
        src="@/assets/images/LogoBlancoSacanta.svg"
        alt=""
        class="logo-muni"
    /></router-link>

    <div class="nav-botones">
      <div class="dropdown">
        <button
          class="btn btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          EL PUEBLO
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          NUESTRO GOBIERNO
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          SERVICIO AL VECINO
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          NOVEDADES
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div>
      <!-- <div class="dropdown">
        <button
          class="btn btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          EL PUEBLO
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </div> -->
      <!-- <div class="dropdown">
        <button class="dropbtn">La ciudad</button>
        <div class="dropdown-content">
          <router-link :to="`/ciudad`"> Sobre la ciudad </router-link>
          <router-link :to="`/historia`">Historia </router-link>
          <router-link :to="`/ciudad`"> Georeferecial </router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Nuestro gobierno</button>
        <div class="dropdown-content">
          <router-link :to="`/gobierno`"> Quienes somos </router-link>
          <router-link :to="`/gobierno`"> Organigrama </router-link>
          <router-link :to="`/gobierno`"> La gestión </router-link>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Noticias y eventos</button>
        <div class="dropdown-content">
          <a href="#">Eventos</a>
          <a href="#">Obras</a>
          <a href="#">Telefonos utiles</a>
        </div>
      </div> -->
    </div>
    <div class="redes-container">
      <a href="">
        <img class="redes" src="@/assets/images/Email.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/images/Instagram.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/images/Facebook.svg" alt="" />
      </a>
    </div>
  </nav>
  <!-- <div class="colores">
    <div class="red"></div>
    <div class="green"></div>
    <div class="red"></div>
    <div class="green"></div>
    <div class="red"></div>
  </div> -->
</template>
<script>
export default {
  name: "topNavComponent",
};
</script>

<style>
.logo-muni {
  width: 180px;
}
</style>
<style scoped>
.top-nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  background: var(--fondo);
}
.nav-botones {
  width: 55%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.btn {
  color: white;
  font-size: 16px;
  font-weight: 700;
}
/* .redes {
  max-width: 40px;
} */

.redes-container {
  display: flex;
  width: 10%;
  justify-content: space-around;
}

.tab-content ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
}

ul li {
  margin: 10px;
}

.btn-mel {
  margin: 0 10px;
  padding: 10px;
  background-color: var(--red);
  border-radius: 10px;
  cursor: pointer;
}
</style>
