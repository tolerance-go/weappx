# weappx是什么？

基于 redux，负责管理应用共享状态，异步状态采用 [thunk](https://github.com/reduxjs/redux-thunk) 的思路进行管理。

# 快速开始

基于不同的组件框架进行开发的话，需要结合不同的连接器来，比如 wepy 需要 使用 wepy-redux，下面的例子使用的是原生小程序开发方式，使用的连接器为 weappx-weapp

初始化项目我们要做的步骤如下
```js
import connector from '../vendor/weappx-weapp/weappx-weapp.js';
import weappx from '../vendor/weappx/weappx.js';

const app = weappx();

const countModel = {
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
}

app.model(countModel);

const store = app.start();

connector.setStore(store);
```

首先是引入依赖，原生小程序开发当中并不支持直接引入 npm 依赖，所以手动拷贝了 bundle 代码进行相对路径的引用

```js
import connector from '../vendor/weappx-weapp/weappx-weapp.js';
import weappx from '../vendor/weappx/weappx.js';
```

创建实例之后，立刻定义了一个数据模型，并且加载到了应用之上

```js
const app = weappx();

app.model(countModel);
```

最后我们调用 start 方法初始化应用


```js
const store = app.start();
```

最后的最后，调用连接器的 setStore 并传入 start 返回的 store，来对数据和连接器建立联系

```js
connector.setStore(store);
```

## Model 的结构

model 作为数据的抽象单位，在一个应用中存在一个或者多个

- namespace
    
    model 的命名，应用中要保证唯一，否则会报错
- state
    
    model 的内部状态表示，建议层级不要太深，[会影响连接器 diff 判断的效率(weappx-weapp)](https://github.com/tolerance-go/weappx/commit/4599c6e96965e652bbccf3613a82b9a2dab4d614)，同时也会在使用数据的时候增加复杂度
- mutations
    
    model 提供了修改状态的同步接口，主要是对 mode 状态进行修改，可以直接操作 state 本身，也允许返回一个数据结构来替换掉 model 内部的 state
- actions
    
    model 提供了修改状态的异步接口，如果和 mutations 同名，后者会覆盖掉前者；通常返回一个 async 函数，在内部进行请求数据，并继续调用 model 的其他接口（派发action）；actions 的另外一层含义是 actionCreator，视图层的某些重复逻辑，如原先派发 action 之前要对数据进行一个前置判断，而且多个地方都要这样做，可以将这部分逻辑移动到 actionCreator 里面，哪怕它只是创建一个同步 action，即 actionCreator 返回的是一个静态数据，而非 async 函数
- setups
    
    model 自身定义的钩子函数，可以是对象形式。在调用 app.start 进行初始化的时候，所有的 mode 注册的钩子会进行调用，常用目的如监听路由或者主动的首次拉取接口数据等操作都可以放在这里来做

# 如何和视图结合？

之前已经调用过 setStore，连接器和应用之间的联系已经建立起来了；下面是建立 model.count 到小程序 Page 双向绑定关系的例子

```js
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
      const { inputValue } = this.data;
      app.dispatcher.count.plus(inputValue);
    },
    sub() {
      const { inputValue } = this.data;
      app.dispatcher.count.sub(inputValue);
    },
  })
);
```

connectPage 其实就是对 Page 函数的第一个参数进行了一次包装；它接受一个对象参数，所有的 key 值都将会出现在被连接的组件内部，而状态值就是 key 对应值函数的返回结果，第一个参数 state 可以获取到已经注册过的所有 model（namespace）

plus 和 sub 响应用户的事件，进而需要修改 model 的数据，只能通过派发 action 来调用 model 提供的同名接口，使用链式的形式进行调用，只接受第一个参数，建议是对象类型，方便扩展；数据流进入 model 提供的状态修改接口之后，根据需求对 model 内部的 state 进行相应的判断处理，这时连接器包装后的 Page 监听到 model 的变化，会及时响应，在判断数据真实变化之后，会调用 setData 开始组件的渲染流程。

如果是将数据连接到组件，需要替换 connectPage 为 connectComponent 方法，参数和调用形式一致。
