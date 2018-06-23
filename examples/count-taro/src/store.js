import weappx from 'weappx';

const app = weappx();

app.model({
  namespace: 'count',

  state: {
    count: 0,
  },

  mutations: {
    plus(state, num) {
      state.count += num;
    },
    sub(state, num) {
      state.count -= num;
    },
  },
});

const store = app.start();

export default app;
export { store };
