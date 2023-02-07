<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container-fluid">
      <h2 id="myName">FANNY HEDMAN</h2>
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
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >HOME</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">ABOUT</RouterLink>
          </li>
          <li class="nav-item">
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
  background-color: #402727;
  height: 10vh;
}

#myName {
  color: rgb(255, 255, 255);
}

.navbar-toggler {
  background-color: rgb(134, 0, 0);
}

.nav-link {
  color: white;
}

.nav-link active {
  color: aqua;
}
</style>
