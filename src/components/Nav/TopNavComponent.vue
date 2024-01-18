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
          <li>
            <router-link to="/pueblo/historia" class="link">
              <a class="dropdown-item hoverMenu" href="#">Nuestra historia</a>
            </router-link>
          </li>

          <li>
            <router-link to="/pueblo/sacanta-hoy" class="link">
              <a class="dropdown-item hoverMenu" href="#">Sacanta hoy</a>
            </router-link>
          </li>
          <li>
            <router-link to="/pueblo/descubri-sacanta" class="link">
              <a class="dropdown-item hoverMenu" href="#">Descubrí Sacanta</a>
            </router-link>
          </li>
          <li>
            <router-link to="/pueblo/fiesta-nacional" class="link">
              <a class="dropdown-item hoverMenu" href="#">Fiesta Nacional</a>
            </router-link>
          </li>
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
          <li><a class="dropdown-item hoverMenu" href="#">Action</a></li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <button
          class="btn btn dropdown-toggle asd"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          SERVICIO AL VECINO
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item hoverMenu" href="#">Action</a></li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Something else here</a>
          </li>
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
          <li><a class="dropdown-item hoverMenu" href="#">Action</a></li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Another action</a>
          </li>
          <li>
            <a class="dropdown-item hoverMenu" href="#">Something else here</a>
          </li>
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
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  background: var(--fondo);
  position: fixed;
  z-index: 15;
  width: 100%;
  padding: 0px 4rem;
}
.nav-botones {
  width: 50%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-left: 12rem;
}
.btn {
  color: white;
  font-size: 16px;
  font-weight: 700;
}
.btn:hover {
  color: #4b4a49;
}
.redes {
  max-width: 40px;
}

.redes-container {
  display: flex;
  width: 10%;
  justify-content: space-between;
  /* margin-right: 3rem; */
}
.hoverMenu:hover {
  color: #019939;
}
.link {
  text-decoration: none;
}
</style>
