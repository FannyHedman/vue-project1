<script setup>
import SendButton from "../components/SendButton.vue";
</script>

<script>
export default {
  data() {
    return {
      isVisible: false,
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      greeting: null,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      this.greeting = "tack för visat intresse! Jag hör snart av mig.";
    },
    onSend() {
      console.log("Meddelandet sänt!");
    },
  },
  watch: {
    email(letterByLetter) {
      console.log(letterByLetter);
    },
  },
  computed: {
    n() {
      return this.firstName + " " + this.lastName + ",";
    },
  },
};
</script>

<template>
  <button @click="isVisible = !isVisible">Contact me!</button>
  <div v-if="isVisible">
    <form @submit="onSubmit">
      <label for="firstName">First name</label>
      <input type="text" v-model="firstName" />
      <label for="lastName">Last name</label>
      <input type="text" v-model="lastName" />
      <label for="email">Email</label>
      <input type="text" v-model="email" />
      <label for="message">Message</label>
      <input type="text" v-model="message" class="message" />
      <!-- <input :disabled="name.length === 0" type="submit" value="Send" /> -->
      <send-button @msg-sent="onSend"></send-button>
    </form>
    <p v-if="greeting !== null">{{ n }} {{ greeting }}</p>
    <!-- <p>du skrev in {{ n }}</p> -->
  </div>
</template>

<style>
.message {
  height: 200px;
  width: 300px;
  word-break: break-word;
}
</style>
