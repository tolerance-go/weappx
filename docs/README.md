# API

import wepyx, { connect } from 'wepyx'

### `wepyx.init(options:Object)`

初始化配置，可省略

options Attributes

* extraMiddlewares(Array): 额外的中间件

### `wepyx.model(model:Object)`

注册 model

model Attributes

* `namespace:String` - 命名空间
* `state:Object` - model 的数据结构
* `mutations:Object` - 数据的修改[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)

  * `handleActionName:String-reducer:Function(state, payload)`

    reducer 内部使用 [immer](https://github.com/mweststrate/immer) 进行包装，可以[直接对 state 进行赋值](https://github.com/tolerance-go/wepyx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/__test__/index.test.js#L19)，支持深度拷贝，[如果直接返回新值会替换原来的 state](https://github.com/tolerance-go/wepyx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/__test__/index.test.js#L220)

    自动生成同名的 actionCreator，默认为 [payload => payload](https://github.com/tolerance-go/wepyx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/src/index.js#L72)

* `actions:Object` - 事件生成器

  * `actionName:String-actionCreator:Function() => Any|Function({ take:Function, dispatcher:Object, state:Object, getState:Function, eventBus:Object })`

    action 生成器，actionName 如果和 namespace 下的 mutation 属性同名，将会覆盖自动生成的 actionCreator

    返回函数的参数介绍

    * dispatcher - 参考 `wepyx.dispatcher`，当前 namespace 下的所有 actionCreator，直接挂载于 dispatcher 上，也就是说可以省略 namespace 直接调用: dispatcher[~~namespace~~][actioncreatorname]；如果当前 namespace 下的 actionCreatorName 和全局其他 namespace 名称冲突，保留全局，并发出警告
    * take - 返回一个 promise 对象，可以对 eventBus 上的任何事件进行监听；对当前 namespace 下的 action 进行监听时，可以省略 namespace 前缀，否则会有提示信息打印
    * state - 是当前 namespace 的 model 数据
    * getState - 可以动态获得 rootState

* `setups:Object|Function` - 启动器，所有函数在 launch 之后会调用

  * `key:String-set:Function({ dispatcher:Object, take:Function, eventBus:Object }) => void`

    注入的参数介绍

    * dispatcher - 参考 actionCreator 返回函数的参数
    * take - 参考 actionCreator 返回函数的参数
    * eventBus - 参考 `wepyx.eventBus`

### `wepyx.models(models:Array)`

支持注册数组形式的 model

### `wepyx.start()`

启动程序，最后调用

### `wepyx.dispatcher:Object`

dispatcher 是一个 actionCreator + dispatch 的函数集合对象，所有 namespace 下的 actionCreator 都挂载于上面，调用 `dispatcher[namespace][actionCreatorName](payload)` 将直接派发同名 action，结构如下:

```js
{
  type: 'namespace/actionName',
  payload,
  meta,
}
```

### `wepyx.eventBus:Object`

这是一个内部实现需要的 事件中心，take 就是基于它实现的。所有的 redux action 都会自动派发响应事件名，store 变化之后，会派发 `${actionName}:after` 事件

Attributes

* `listen(type:String, cb:Function, [scope:Object]) => unlisten:Function`

  监听事件，注册回调函数

  Arguments

  * type - 监听事件类型
  * cb - 监听事件发生时的回调函数
  * scope - cb 调用时的执行对象
  * 调用 `unlisten`，解除监听

* `emit(type:String, payload:Any)`

  派发事件，触发注册回调

  Arguments

  * type - 触发事件类型
  * payload - 触发回调的参数

* `take(type:String) => chained:Promise`

  监听一次事件，事件发生之后监听会被自动移除；返回一个 Promise 对象；resolve(action.payload)

  Arguments

  * type - 监听事件类型

### `connect`

基于 [`wepy-redux`](https://github.com/Tencent/wepy/tree/2.0.x/packages/wepy-redux#wepy-%E5%92%8C-redux-%E7%BB%93%E5%90%88%E7%9A%84%E8%BF%9E%E6%8E%A5%E5%99%A8)，另外融入了 dispatcher，可以在 connect 过后的组件内部，使用 [`this.dispatcher`](https://github.com/tolerance-go/wepyx/blob/fa32121d88142b80d003ca2875b53dabb8d26622/examples/src/components/counter.wpy#L80)，去除了第二个参数。

### 全局的 `loading model`

默认会注册一个 `namespace` 为 `loading` 的全局 model，当派发异步 action 的时候，对应的 `loading[namespace]` 和 `loading[${namespace}/${actionName}]` 将设置设置成 `true`，结束的时候会设置为 `false`；如果 `namespace` 下属只要有一个异步 action 还没有完成，它的状态就始终是 `loading` 状态

# Update log

### 1.1.0 (2018-04-13)

* [feat - 对 model.setups 和 返回函数的 actionCreator 的参数，增加了一项 eventBus](https://github.com/tolerance-go/wepyx/commit/0bad303f883ec5e2507ea36d914b6cdea035d7bf)

### 1.0.1 (2018-04-13)

* [docs - fix README.md](https://github.com/tolerance-go/wepyx/commit/fa32121d88142b80d003ca2875b53dabb8d26622)
