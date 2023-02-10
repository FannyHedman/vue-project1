<template>
  <div class="intro-text">
    <p>Hej {{ greeting }}</p>
  </div>
</template>

<style>
.intro-text {
  position: absolute;
  width: 20vw;
  top: 60%;
  left: 44%;
  margin-left: 10vw;
  margin-top: 3vh;
  transform: translate(-50%, -50%);
  color: rgb(47, 56, 39);
}
</style>

<script>
export default {
  data() {
    return {
      greeting: this.introText,
    };
  },
  props: {
    introText: {
      type: String,
      required: true,
    },
  },
};
</script>
