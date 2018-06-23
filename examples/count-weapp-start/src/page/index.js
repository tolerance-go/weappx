// import debounce from 'lodash/debounce';
import connector from 'weappx-weapp';
import store from '../store';

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
