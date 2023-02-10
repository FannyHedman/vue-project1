<script>
export default {
  data() {
    return {
      nameLogo: this.logoName,
    };
  },
  props: {
    logoName: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <h2 class="name-logo">{{ nameLogo }}</h2>
</template>

<style>
.name-logo {
  color: #321319;
  font-size: 1.5rem;
  font-weight: bold;
}
</style>
