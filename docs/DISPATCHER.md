# dispatcher 简单介绍

action 的结构遵循[一定规范](https://github.com/redux-utilities/flux-standard-action)，以这个为前提，派发方式就可以更简洁

```js
dispatch({
    type: 'app/fetch',
    payload: {
        id: 1
    }
}).then(...)

// =>

dispatcher.app.fetch({ id: 1 }).then(...)
```