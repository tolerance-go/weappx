# API

import weappx from 'weappx'

### `store = weappx.init(options:Object)`

初始化配置

options Attributes

* connector(Object: { setStore, connectify }): 连接器，必传参数
* extraMiddlewares(Array): 额外的中间件
* onError(Function): 异步 action 内抛出的错误可以在这里统一处理

### `store.model(model:Object)`

注册 model

model Attributes

* `namespace:String` - 命名空间
* `state:Object` - model 的数据结构
* `mutations:Object` - 数据的修改[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)

  * `handleActionName:String-reducer:Function(state, payload)`

    reducer 内部使用 [immer](https://github.com/mweststrate/immer) 进行包装，可以[直接对 state 进行赋值](https://github.com/tolerance-go/weappx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/__test__/index.test.js#L19)，支持深度拷贝，[如果直接返回新值会替换原来的 state](https://github.com/tolerance-go/weappx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/__test__/index.test.js#L220)

    自动生成同名的 actionCreator，默认为 [payload => payload](https://github.com/tolerance-go/weappx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/src/index.js#L72)

* `actions:Object` - 事件生成器

  * `actionName:String-actionCreator:Function() => Any|Function({ take:Function, dispatcher:Object, state:Object, loading:Object, getState:Function, eventBus:Object })`

    action 生成器，actionName 如果和 namespace 下的 mutation 属性同名，将会覆盖自动生成的 actionCreator

    返回函数的参数介绍

    * dispatcher - 参考 `store.dispatcher`，当前 namespace 下的所有 actionCreator，直接挂载于 dispatcher 上，也就是说可以省略 namespace 直接调用: dispatcher[~~namespace~~][actioncreatorname]；如果当前 namespace 下的 actionCreatorName 和全局其他 namespace 名称冲突，保留全局，并发出警告
    * take - 返回一个 promise 对象，可以对 eventBus 上的任何事件进行监听；对当前 namespace 下的 action 进行监听时，可以省略 namespace 前缀，否则会有提示信息打印
    * state - 是当前 namespace 的 model 数据
    * getState - 可以动态获得 rootState
    * loading - 是全局的 loading model
    * eventBus - 参考 `store.eventBus`

* `setups:Object|Function` - 启动器，所有函数在 launch 之后会调用

  * `key:String-set:Function({ dispatcher:Object, take:Function, eventBus:Object }) => void`

    注入的参数介绍

    * dispatcher - 参考 actionCreator 返回函数的参数
    * take - 参考 actionCreator 返回函数的参数
    * eventBus - 参考 `store.eventBus`

### `store.models(models:Array)`

支持注册数组形式的 model

### `store.start()`

启动程序，最后调用

### `store.dispatcher:Object`

dispatcher 是一个 actionCreator + dispatch 的函数集合对象，所有 namespace 下的 actionCreator 都挂载于上面，调用 `dispatcher[namespace][actionCreatorName](payload)` 将直接派发同名 action，结构如下:

```js
{
  type: 'namespace/actionName',
  payload,
  meta,
}
```

### `store.eventBus:Object`

这是一个内部实现需要的 事件中心，take 就是基于它实现的。所有的 redux action 都会自动派发响应事件名，store 变化之后，会派发 `${actionName}:after` 事件

Attributes

* `listen(type:String, cb:Function, [scope:Object]) => unlisten:Function`

  监听事件，注册回调函数

  Arguments

  * type - 监听事件类型，[支持正则字符串](https://github.com/tolerance-go/weappx/blob/a6b08584c1d2d369f6f7364730d5daa9f00465af/__test__/eventbus.test.js#L39)
  * cb - 监听事件发生时的回调函数
  * scope - cb 调用时的执行对象
  * 调用 `unlisten`，解除监听

* `emit(type:String, payload:Any)`

  派发事件，触发注册回调

  Arguments

  * type - 触发事件类型
  * payload - 触发回调的参数

* `once(type:String, cb:Function, scope:Object) => void`

  监听一次事件，事件发生之后监听会被自动移除

  Arguments

  * type - 监听事件类型
  * cb - 监听事件发生时的回调函数
  * scope - cb 调用时的执行对象

* `take(type:String) => chained:Promise`

  同 once，但是返回一个 Promise 对象；resolve(action.payload)

  Arguments

  * type - 监听事件类型

* `takeLast(type:String) => chained:Promise`

  同 take，但是 takeLast 如果发现监听的事件，已经发生过，就会立即 `resolved`

  Arguments

  * type - 监听事件类型

* `isHappened(type:String) => Boolean`

  判断事件是否发生过

  Arguments

  * type - 事件类型

# Connector

连接器是负责将 数据管理 和 组件框架进行数据绑定的重要部分。目前根据 原生小程序 和 wepy 2个组件框架，分别对应了 weappx-weapp 和 weappx-wepy 2个连接器；使用方法通过 store.init 传入。

### weappx-wepy

基于 [`wepy-redux`](https://github.com/Tencent/wepy/tree/2.0.x/packages/wepy-redux#wepy-%E5%92%8C-redux-%E7%BB%93%E5%90%88%E7%9A%84%E8%BF%9E%E6%8E%A5%E5%99%A8)，mapstate 中另外融入了 dispatcher，可以在 connect 过后的组件内部，使用 [`this.dispatcher`](https://github.com/tolerance-go/weappx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/examples/src/components/counter.wpy#L80)；并且去除了第二个参数。

### weappx-weapp

有2个connect方法：`connectPage`, `connectComponent`；可以在 connect 过后的组件内部 data 中使用 dispatcher

eg:
```js
Component(
  connectComponent({
    counter: 'counter',
  })({
    data: {
      someData: {},
      // counter,
      // dispatcher
    },
  })
);

Page(
  connectPage({
    counter: 'counter',
  })({
    data: {
      someData: {},
      // counter,
      // dispatcher
    },
  })
);
```

# loading model

全局默认会注册一个 `namespace` 为 `loading` 的 model，结构如下：

```js
{
  namespace: 'loading',

  state: {
    '@namespaceLoadingCounts': {},
  },

  mutations: {
    save(...) { ... }
  }
}
```

当派发异步 action 的时候，对应的 `loading[namespace]` 和 `loading[${namespace}/${actionName}]` 以及 `loading.global` 将设置设置成 `true`

```js
dispatcher.modelA.fetchData()

// =>

expect(loading.modelA && loading['modelA/fetchData'] && loading.global).toBeTruthy()
```

当异步 action 结束的时候，之前的状态又会重新设置为 `false`

状态变化规则：

- 如果一个异步 action 没有结束，则它始终是 `loading` 状态
- 如果 `model` 下属只要有一个异步 action 还没有结束，则它始终是 `loading` 状态
- 如果有一个 `model` 没有结束，那么 `global` 就始终是 `loading` 状态
