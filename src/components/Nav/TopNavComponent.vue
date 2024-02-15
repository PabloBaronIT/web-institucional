<template>
  <nav class="top-nav-container">
    <i class="bi bi-list burguer" @click="this.setMenu"> </i>

    <router-link to="/"
      ><img
        src="@/assets/images/LogoBlancoSacanta.svg"
        alt=""
        class="logo-muni"
    /></router-link>
    <!-- MENU-BURGUER -->

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
    <div class="redes-container-mobile">
      <a href="">
        <img class="redes" src="@/assets/images/Instagram.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/images/Facebook.svg" alt="" />
      </a>
      <a href="">
        <img class="redes" src="@/assets/images/Lupa.svg" alt="" />
      </a>
    </div>
  </nav>
  <div class="menu" v-if="this.menu">
    <div
      class="item-menu"
      @click="this.setSubMenu(index)"
      v-for="(item, index) in this.ListMenu"
      :key="index"
    >
      <h6>
        {{ item.titulo }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
        >
          <path
            d="M2.1875 3.59375L5 6.40625L7.8125 3.59375"
            stroke="#3E3E3E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </h6>
      <div
        class="item-subMenu"
        v-if="this.open === true && this.itemSelect === index"
      >
        <router-link
          :to="item.link"
          class="link"
          @click="this.setMenu"
          v-for="(item, index) in item.subtitulos"
          :key="index"
        >
          <h6>
            {{ item.titulo }}
          </h6>
        </router-link>
      </div>
      <div class="linea-menu"></div>
    </div>
    <div class="masGestiones">
      <p>TRÁMITES</p>
    </div>
  </div>
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
  data() {
    return {
      menu: false,
      open: false,
      itemSelect: null,
      ListMenu: [
        {
          titulo: "EL PUEBLO",
          subtitulos: [
            { titulo: "Nuestra Historia", link: "/pueblo/historia" },
            { titulo: "Sacanta Hoy", link: "/pueblo/sacanta-hoy" },

            { titulo: "Descubrí Sacanta", link: "/pueblo/descubri-sacanta" },

            { titulo: "Fiesta Nacional", link: "/pueblo/fiesta-nacional" },
          ],
        },
        {
          titulo: "NUESTRO GOBIERNO",
          subtitulos: [
            { titulo: "Nuestra Historia", link: "/pueblo/historia" },
            { titulo: "Sacanta Hoy", link: "/pueblo/sacanta-hoy" },

            { titulo: "Descubrí Sacanta", link: "/pueblo/descubri-sacanta" },

            { titulo: "Fiesta Nacional", link: "/pueblo/fiesta-nacional" },
          ],
        },
        {
          titulo: "SERVICIO AL VECINO",
          subtitulos: [
            { titulo: "Nuestra Historia", link: "/pueblo/historia" },
            { titulo: "Sacanta Hoy", link: "/pueblo/sacanta-hoy" },

            { titulo: "Descubrí Sacanta", link: "/pueblo/descubri-sacanta" },

            { titulo: "Fiesta Nacional", link: "/pueblo/fiesta-nacional" },
          ],
        },
        {
          titulo: "NOVEDADES",
          subtitulos: [
            { titulo: "Nuestra Historia", link: "/pueblo/historia" },
            { titulo: "Sacanta Hoy", link: "/pueblo/sacanta-hoy" },

            { titulo: "Descubrí Sacanta", link: "/pueblo/descubri-sacanta" },

            { titulo: "Fiesta Nacional", link: "/pueblo/fiesta-nacional" },
          ],
        },
      ],
    };
  },
  methods: {
    setMenu() {
      this.menu = !this.menu;
    },
    setSubMenu(index) {
      console.log("soy el indice");
      this.open = !this.open;
      this.itemSelect = index;
    },
  },
};
</script>

<style>
.logo-muni {
  width: 180px;
}
</style>
<style scoped>
.top-nav-container {
  max-height: 56px;
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
.redes-container-mobile {
  display: none;
}
.hoverMenu:hover {
  color: #019939;
}
.link {
  text-decoration: none;
}
.burguer {
  display: none;
}
@media (max-width: 500px) {
  .burguer {
    /* visibility: visible; */
    display: block;
    color: white;
    font-size: 30px;
    padding: 0px 0%;
    /* margin-left: 5%; */
  }
  .top-nav-container {
    height: 56px;
    width: 100%;
    position: relative;
    padding: 0% 2%;
    z-index: 5;
  }
  .logo-muni {
    width: 112px;
    margin-left: -50%;
  }
  .nav-botones {
    display: none;
  }
  .redes-container-mobile {
    visibility: visible;
    width: 25%;
    display: flex;
    justify-content: space-around;
    /* background-color: #00c3a8; */
  }
  .redes-container {
    display: none;
  }
  .redes {
    width: 23px;
    height: 23px;
  }
  .menu {
    display: block;
    position: absolute;
    top: 56px;
    width: 100%;
    height: auto;
    background: #fff;
    z-index: 15;
    padding-bottom: 50%;
  }
  .menu h6 {
    color: #3e3e3e;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  .item-menu {
    /* border-bottom: 1px solid #00c3a8; */
    /* border-bottom-color: linear-gradient(
      90deg,
      #00c3a8 0.01%,
      #ffb900 54.81%,
      #ff2745 104.96%
    ); */
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: auto;
    padding: 4% 2% 2%;
  }
  .linea-menu {
    height: 1px;
    background: linear-gradient(
      90deg,
      #00c3a8 0.01%,
      #ffb900 54.81%,
      #ff2745 104.96%
    );
    width: 95%;
    position: absolute;
    bottom: 0;
    left: 2%;
  }
  .item-subMenu {
    /* display: block; */
    position: relative;
    /* top: 6%; */
    padding: 0% 5%;
    width: 100%;
    height: auto;
    background: #fff;
  }
  .item-subMenu h6 {
    margin-bottom: 2%;
  }
  .masGestiones {
    border-radius: 40px;
    background: linear-gradient(
      90deg,
      #019939 0.18%,
      #ffcc03 52.79%,
      #e52320 107.64%
    );
    max-height: 30px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-self: center;
    padding-top: 1.5%;
    margin-top: 7%;
    margin-bottom: 5%;
  }
  .masGestiones p {
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    color: white;
  }
}
</style>
