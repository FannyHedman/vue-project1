<script>
export default {
  data() {
    return {
      // id: this.$route.params.id,
      firstName: "",
      lastName: "",
      email: "",
    };
  },
};
</script>

<template>
  <!-- <h1>{{ $route.params.id }}</h1> -->
  <div id="contact-form-bootstrap">
    <form>
      <div class="form-row">
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="First name"
            v-model="firstName"
          />
        </div>
        <div class="col">
          <input type="text" class="form-control" placeholder="Last name" />
        </div>
      </div>
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          v-model="lastName"
        />
      </div>
      <div class="form-group">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Message"
          v-model="email"
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-primary"
        :disabled="firstName.length === 0"
        value="test"
      >
        Send
      </button>
    </form>
  </div>
</template>

<style>
#contact-form-bootstrap {
  margin-top: 10vh;
  width: 30vw;
}

#test {
  position: absolute;
}
</style>
