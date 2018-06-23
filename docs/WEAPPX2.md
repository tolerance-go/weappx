# weappx1.0 -> 2.0升级原因

weappx 本身是[使用 dispatcher 来代替 dispatch 进行事件派发](https://github.com/tolerance-go/weappx/blob/master/docs/DISPATCHER.md)；一般的 connector 库都会将 dispatch 融入到组件内部。

而 weappx@1.0 是使用初始化传入 connector 的方式，动态包装使得这一特性保留，即可以在组件内部使用 `this.data.disptcher`，同时更进一步，在 start 里调用 store.setStore，但是这样的过度封装，导致在需要自行 setStore 的需求场景下就无所适从了，比如 taro

因此做了一个取舍，组件内部属性方式调用 dispatcher 舍去，转而获得了更灵活的初始化 store 能力。

相较于 weappx@1.0 具体变化如下：

- 删除 init api，这是设计上的问题，原先的参数可以在创建实例的时候传入
```js
const app = weappx()
app.init(options)

// =>

const app = weappx(options)
```

- 删除 connector 参数，需要主动调用 setStore 
```js
const app = weappx();
app.model({
    namespace: 'n',
});
const store = app.start();
connector.setStore(store)
```
- 组件内部的属性 dispatcher，改为引入方式调用
```js
this.data.dispatcher.app.update()

// =>

import store from '../store/index'
store.dispatcher.app.update()
```
