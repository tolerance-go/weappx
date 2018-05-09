import weappx from '../vendor/weappx/weappx.js';
import connector from '../vendor/weappx-weapp/weappx-weapp.js';

const store = weappx();

store.init({ connector });

store.model({
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

store.start();

Page(
  connector.connectPage({
    count: state => state.count.count,
  })({
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
      const { dispatcher, inputValue } = this.data;
      dispatcher.count.plus(inputValue);
    },
    sub() {
      const { dispatcher, inputValue } = this.data;
      dispatcher.count.sub(inputValue);
    },
  })
);
