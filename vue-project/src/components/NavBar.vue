<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <h2 id="my-name">Fanny Hedman</h2>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" aria-current="page">
            <RouterLink class="nav-link" to="/">HOME</RouterLink>
          </li>
          <li class="nav-item" aria-current="page">
            <RouterLink class="nav-link" to="/about">ABOUT</RouterLink>
          </li>
          <li class="nav-item" aria-current="page">
            <RouterLink class="nav-link" to="/skills">SKILLS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">CONTACT</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <RouterView />
</template>

<style scoped>
#navbar {
  background-color: rgb(13, 27, 132);
  height: 10vh;
}

#my-name {
  color: rgb(255, 255, 255);
  font-family: monospace;
  font-size: 2rem;
}

.navbar-toggler {
  background-color: rgb(134, 0, 0);
}

.nav-link {
  color: white;
}
</style>
