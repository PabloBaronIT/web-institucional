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
  position: fixed;
  z-index: 15;
}
.nav-botones {
  width: 50%;
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
.redes {
  max-width: 40px;
}

.redes-container {
  display: flex;
  width: 12%;
  justify-content: space-between;
}
</style>
