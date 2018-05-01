export default {
  namespace: 'counter',

  state: {
    num: 0,
    asyncNum: 0,
  },

  mutations: {
    INCREMENT(state) {
      state.num++;
    },

    DECREMENT(state) {
      state.num--;
    },

    ASYNC_INCREMENT_DONE(state, payload) {
      state.asyncNum += payload;
    },
  },

  actions: {
    ASYNC_INCREMENT() {
      return async ({ dispatcher }) => {
        const data = await new Promise(resolve => {
          setTimeout(() => {
            resolve(1);
          }, 1000);
        });
        // 大写的 actionName 会转换成小写驼峰
        dispatcher.asyncIncrementDone(data);
      };
    },
  },
};
