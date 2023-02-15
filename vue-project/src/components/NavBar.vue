<script setup>
import { RouterLink } from "vue-router";
import LogoComp from "../components/LogoComp.vue";
</script>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <nav id="navbar">
    <div id="flex-container-nav">
      <logo-comp logo-name="Fanny Hedman"></logo-comp>
      <div class="nav-links">
        <RouterLink class="nav-link" to="/">HOME</RouterLink>

        <RouterLink class="nav-link" to="/about">ABOUT</RouterLink>

        <RouterLink class="nav-link" to="/skills">SKILLS</RouterLink>

        <RouterLink class="nav-link" to="/contact">CONTACT</RouterLink>
      </div>
    </div>
  </nav>
  <RouterView />
</template>

<style scoped>
#navbar {
  background-color: rgb(255, 255, 255);
  height: 8vh;
  position: fixed;
  top: 0;
  width: 100%;
}

#flex-container-nav {
  display: flex;
  justify-content: space-between;
  margin-top: 3vh;
  margin-left: 2vw;
  margin-right: 2vw;
}

.nav-links {
  float: right;
}

.navbar-ul {
  margin-top: 5vh;
  margin-bottom: 2vh;
  margin-right: 2vw;
}
#my-name {
  color: #321319;
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-toggler {
  background-color: rgb(134, 0, 0);
}

.nav-link {
  color: #321319;
  font-weight: bold;
  display: inline;
  padding: 16px;
}
</style>
