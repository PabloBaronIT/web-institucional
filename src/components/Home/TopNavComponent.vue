<template>
  <nav class="top-nav-container">
    <router-link to="/"
      ><img src="@/assets/campoBravo.png" alt="" class="logo-muni"
    /></router-link>

    <div class="top-nav-a-container">
      <div class="dropdown">
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
      </div>
    </div>
    <div class="redes-container">
      <a href="">
        <img class="redes" src="@/assets/instagram.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/facebook.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/wpp.svg" alt="" />
      </a>
    </div>
  </nav>
  <div class="colores">
    <div class="red"></div>
    <div class="green"></div>
    <div class="red"></div>
    <div class="green"></div>
    <div class="red"></div>
  </div>
</template>
<script>
export default {
  name: "topNavComponent",
};
</script>

<style>
.dropbtn {
  background: none;
  color: #fff;
  padding: 16px;
  font-size: 16px;
  border: none;
  font-weight: bold;
}

.logo-muni {
  width: 180px;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  z-index: 3;
  background: none;
  border-right: 1px solid var(--red);
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: var(--yellow);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  color: #444;
}
</style>
<style scoped>
.colores {
  height: 8px;
  width: 100%;
  display: flex;
}
.blue {
  height: 10px;
  width: 20%;
  background: var(--blue);
}
.red {
  height: 10px;
  width: 20%;
  background: var(--red);
}

.redes {
  max-width: 40px;
}

.green {
  height: 10px;
  width: 20%;
  background: var(--green);
}

.redes-container {
  display: flex;
}

.top-nav-container {
  width: 100%;
  height: 80px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  background-color: var(--blue);
}

.top-nav-a-container a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s ease-in-out, box-shadow 0.5s ease-in-out;
}

.top-nav-a-container a:hover {
  color: white;
}

.tab-content {
  display: flex;
  height: auto;
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
