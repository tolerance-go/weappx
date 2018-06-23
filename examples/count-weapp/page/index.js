import connector from '../vendor/weappx-weapp/weappx-weapp.js';
import weappx from '../vendor/weappx/weappx.js';

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

Page(
  connector.connectPage({
    count: state => state.count.count,
  })({
    store,
    data: {
      inputValue: 1,
    },
    inputChange({ detail: { value } }) {
      console.log(value);
      this.setData({
        inputValue: Number(value) || 0,
      });
    },
    plus() {
      const { inputValue } = this.data;
      store.dispatcher.count.plus(inputValue);
    },
    sub() {
      const { inputValue } = this.data;
      store.dispatcher.count.sub(inputValue);
    },
  })
);
