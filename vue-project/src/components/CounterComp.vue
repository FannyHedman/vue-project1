<template>
  <div>
    <p>Betygsätt min CSS: {{ number }}</p>
    <input type="button" @click="$store.commit('increment')" value="+" />
  </div>
</template>

<script>
export default {
  computed: {
    number() {
      return this.$store.state.counter;
    },
  },
};
</script>
