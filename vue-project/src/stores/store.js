import { createStore } from "vuex";

export default createStore({
  state: { counter: 0 },
  mutations: {
    increment() {
      this.state.counter++;
    },
  },
  strict: true,
});

// const mutations = {
//     increment(state) {
//       state.counter += 1;
//     },
//   },
//   state = {
//     couner: 0,
//   };

// export default createStore({ mutations, state, strict: true });
