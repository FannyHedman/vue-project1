<script>
// import { RouterView } from "vue-router";
</script>
<template>
  <div id="hero-image">
    <img src="../assets/img/portfolio2-mindre.jpg" alt="Clouds" />

    <div class="heading"><h2>HEJSAN, HOPPSAN.</h2></div>
    <!-- <div class="intro-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div> -->
  </div>
  <!-- <RouterView/> -->
</template>

<style scoped>
#hero-image img {
  margin: 0 auto;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
}

@media (min-width: 320px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}

@media (min-width: 600px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}

@media (min-width: 900px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}
@media (min-width: 1200px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}

@media (min-width: 1600px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}

@media (min-width: 2500px) {
  #hero-image img {
    margin: 0 auto;
    height: auto;
    overflow-x: hidden;
  }
}

#hero-image {
  /* position: absolute; */
}
.heading {
  position: absolute;
  top: 50%;
  left: 50%;
  /* bottom: 50%; */
  right: 40%;
  transform: translate(-50%, -50%);
  color: rgb(47, 56, 39);
}

.heading h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
}

/* .intro-text {
  position: absolute;
  width: 20vw;
  top: 60%;
  left: 44%;
  margin-left: 10vw;
  margin-top: 3vh;
  transform: translate(-50%, -50%);
  color: rgb(47, 56, 39);
} */
</style>
