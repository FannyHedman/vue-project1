<script setup>
// Importera sådant som ska vara på alla sidor (ex navbar, footer)
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
// import FooterComp from "./components/FooterComp.vue";
</script>

<template>
  <NavBar />
  <!-- <FooterComp /> -->
  <RouterView />
</template>

<style scoped></style>
