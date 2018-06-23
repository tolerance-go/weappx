import weappx from 'weappx';
import connector from 'weappx-weapp';

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

connector.setStore(store);

export default app;
