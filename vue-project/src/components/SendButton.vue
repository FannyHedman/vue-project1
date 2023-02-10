<template>
  <input type="submit" value="Send" @click="send" />
</template>

<script>
export default {
  methods: {
    send() {
      this.$emit("msg-sent");
    },
  },
};
</script>
