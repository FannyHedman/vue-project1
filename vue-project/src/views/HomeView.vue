<script setup>
// Importera enskilda komponenter som ska finnas på hemsidan
import HeroImage from "../components/HeroImage.vue";
</script>

<template>
  <div>
  <HeroImage /></div>
</template>




































  <!-- <div>
    <ul>
      <li v-for="art in arts" :key="art.id">{{ art }}</li>
    </ul>
    <div v-for="art in arts" :key="art.id">{{ art.image }}</div>
  </div>
  <img v-for="art in arts" :key="art.id" src="{{ art.image }}" />
</template>

<script>
export default {
  data() {
    return {
      arts: "",
    };
  },
  created() {
    fetch("products.json")
      .then((response) => response.json())
      .then((result) => {
        this.arts = result;
      });
  },
};

</script> -->
