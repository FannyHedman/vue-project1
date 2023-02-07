<script></script>
<template>
  <div id="hero-image">
    <img src="../assets/img/portfolio2-mindre.jpg" alt="Clouds" />
  </div>
</template>

<style scoped>
#hero-image img {
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

@media (min-width: 320px) and (max-width: 450px) {
  #hero-image img {
    margin: 0 auto;
    height: 50vh;
    overflow-x: hidden;
  }
}

@media (min-width: 450px) and (max-width: 900px) {
  #hero-image img {
    margin: 0 auto;
    height: 60vh;
    overflow-x: hidden;
  }
}
@media (min-width: 900px) and (max-width: 1200px) {
  #hero-image img {
    margin: 0 auto;
    height: 80vh;
    overflow-x: hidden;
  }
}
</style>
