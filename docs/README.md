wepyx

`wepyx.init(options)`

Arguments

* extraMiddlewares(Array): 额外的中间件

`wepyx.model(options)`

Arguments

* namespace(String): 命名空间
* state(Object): model 的数据结构
* mutations(Object): 数据的修改[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)
  * handleActionName(String)-reducer(Function)[state, action]
* actions(Object): 事件生成器
  * actionName(String)-actionCreator(Function)[() => object|function[{ take, dispatcher, state, getState }]]
* setups(Object|Function): 启动器，所有函数在 launch 之后会调用
  * key(String)-set(Function)[({ dispatcher, take }) => void]

`wepyx.start()`: 启动

eventBus

这是一个内部实现需要的 事件中心，take 就是基于它实现的。
所有的 redux action 都会自动派发响应事件名，store 变化之后，会派发 `${actionName}:after` 事件

`eventBus.listen(type, cb, [scope]) => unlisten(Function)`: 开启监听

`eventBus.emit(type, payload)`: 派发事件

`eventBus.take(type) => chained(Promise)`: 监听一次事件，事件发生之后监听会被自动移除