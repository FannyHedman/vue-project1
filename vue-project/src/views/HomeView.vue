<script setup>
// Importera enskilda komponenter som ska finnas på hemsidan
import HeroImage from "../components/HeroImage.vue";
import IntroComp from "../components/IntroComp.vue";
import ContactPopup from "../components/ContactPopup.vue";
</script>

<template>
  <div>
    <HeroImage />
  </div>
  <main>
    <intro-comp intro-text="du där"></intro-comp>
    <contact-popup></contact-popup>


  </main>
  <!-- <div><IntroComp /></div> -->
</template>
