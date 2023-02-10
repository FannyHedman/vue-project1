<script>
export default {
  data() {
    return {
      isVisible: false,
      name: "",
      email: "",
      message: "",
      greeting: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.greeting =
        "Tack " + this.name + " för visat intresse! Jag hör snart av mig.";
    },
  },
};
</script>

<template>
  <button @click="isVisible = !isVisible">Contact me!</button>
  <div v-if="isVisible">
    <form @submit="onSubmit">
      <label for="name">Name</label>
      <input type="text" v-model="name" />
      <label for="email">Email</label>
      <input type="text" v-model="email" />
      <label for="message">Message</label>
      <input type="text" v-model="message" class="message" />
      <input :disabled="name.length === 0" type="submit" value="Send" />
    </form>
    <p v-if="greeting !== null">{{ greeting }}</p>
  </div>
</template>

<style>
.message {
  height: 200px;
  width: 500px;
  word-break: break-word;
}
</style>
