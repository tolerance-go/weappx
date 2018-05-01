# Usage
拿 `wepy-cli` 自动生成的模板举例，将 `redux` 换成 `wepyx`

1. 命令行输入 `wepy init standard examples`, 记得 `? Use Redux in your project? Yes` 这一步的时候要选择 yes

2. 进入刚刚生成的 `examples`，在依赖中做一些修改，然后执行 `npm install` 安装依赖
```js
"dependencies": {
- "redux": "^3.7.2",
- "redux-actions": "^2.2.1",
- "redux-promise": "^0.5.3",
- "wepy-redux": "^1.5.3",
+ "wepyx": "^1.0.0"
}
```

3. 在 `app.wpy` 中引入 `wepyx`, 稍后我们来改造 `store` 变成我们自己的 `model`
```js
- import { setStore } from 'wepy-redux'
- import configStore from './store'

- const store = configStore()
- setStore(store)
+ import wepyx from 'wepyx';
+ import model from './models/counter';

+ wepyx.model(model);
+ wepyx.start();
```

4. 将 `store` 进行改造，新建一个 `models` 文件夹，里面创建 `counter.js`（老的 `store` 文件夹记得删除，防止因为依赖安装的问题报错，建议可以移动到 src 外面，方便对比）
```js
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
```

5. 在视图层用到原先 store 的地方，也要相应修改，打开 `components/counter.wpy`
```js
- import { connect } from 'wepy-redux'
- import { INCREMENT, DECREMENT } from '../store/types/counter';
- import { asyncInc } from '../store/actions';
+ import { connect } from 'wepyx';

@connect(
  {
    stateNum(state) {
      return state.counter.num;
    },
    asyncNum(state) {
      return state.counter.asyncNum;
    },
  }
  - {
  -   incNum: INCREMENT,
  -   decNum: DECREMENT,
  -   asyncInc,
  - }
)

...

methods = {
+ incNum() {
+   this.dispatcher.counter.increment();
+ },
+ decNum() {
+   this.dispatcher.counter.decrement();
+ },
+ asyncInc() {
+   this.dispatcher.counter.asyncIncrement();
+ },
  plus() {
    this.num = this.num + 1;
    console.log(this.$name + ' plus tap');
  },
  minus() {
    this.num = this.num - 1;
    console.log(this.$name + ' minus tap');
  },
};
```

6. `npm run dev` 打开微信开发者工具，选择 `examples`，进行调试吧
