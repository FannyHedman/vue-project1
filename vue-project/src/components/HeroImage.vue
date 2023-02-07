<script></script>
<template>
  <div id="hero-image">
    <img src="../assets/img/portfolio2-mindre.jpg" alt="Clouds" />
    <div id="hero-container">
      <div class="heading"><h2>HELLO, YOU.</h2></div>
      <div class="intro-text">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </p>
      </div>
    </div>
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

@media (min-width: 1200px) {
  #hero-image img {
    margin: 0 auto;
    height: 100vh;
    overflow-x: hidden;
  }
}

.heading {
  position: absolute;
  top: 50%;
  left: 45%;
  bottom: 50%;
  right: 50%;
  transform: translate(-50%, -45%);
  color: rgb(47, 56, 39);
}

.heading h2 {
  font-size: 2rem;
  font-weight: bold;
  text-align: left;
}

.intro-text {
  position: absolute;
  width: 20vw;
  top: 60%;
  left: 44%;
  /* bottom: 50%; */
  /* right: 50%; */
  margin-left: 10vw;
  margin-top: 3vh;
  transform: translate(-50%, -50%);
  color: rgb(47, 56, 39);
}
</style>
