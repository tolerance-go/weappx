# Maanshan
[![NPM version](https://img.shields.io/npm/v/maanshan.svg?style=flat)](https://npmjs.org/package/maanshan)
[![Build Status](https://travis-ci.org/tolerance-go/maanshan.svg?branch=master)](https://travis-ci.org/tolerance-go/maanshan)
[![Coverage Status](https://coveralls.io/repos/github/tolerance-go/maanshan/badge.svg?branch=master)](https://coveralls.io/github/tolerance-go/maanshan?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/maanshan.svg?style=flat)](https://npmjs.org/package/maanshan)
[![Dependencies Status](https://david-dm.org/tolerance-go/maanshan/status.svg)](https://david-dm.org/tolerance-go/maanshan)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

现在 原生小程序，wepy 都可以使用 maanshan 来管理应用状态了。

mpvue 会在以后提供对应的 connector。

*如果之前在使用 `wepyx` 的同学请移步[这里](https://github.com/tolerance-go/wepyx/blob/master/docs/WEPYX.md)查看变化原因和升级方式。*

如果有好的建议欢迎 issue 讨论 👏👏👏

# Install
```zsh
npm install maanshan
```

# Usage
```js
import maanshan from 'maanshan'
// wepy 框架的连接器
import wepyConnector from 'wepy-maanshan'
// 原生小程序 框架的连接器
import weappConnector from 'weapp-maanshan'

const store = maanshan()

store.init({
    // 根据你的开发框架来选择连接器
    connector: wepyConnector || weappConnector
})

store.model(...)

store.start()
```

# Feature

- 上手简单，仅需要了解 4 个 api
- 更易用的 action 派发方式
- 更简单的数据处理[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)
- 强大的 hook 机制

# Example(以下的例子都是基于 wepy)

- [count - wepy](https://github.com/tolerance-go/wepyx/tree/master/examples/count)
- [todo - wepy](https://github.com/tolerance-go/wepyx/tree/master/examples/todo)

# Links

- [Documentation](https://github.com/tolerance-go/wepyx/tree/master/docs/README.md)
- [Update Log](https://github.com/tolerance-go/wepyx/tree/master/docs/UPDATELOG.md)
- [Contribution](https://github.com/tolerance-go/blog/issues/1#issue-313932480)

# Community(中文)

<img src='./assets/WechatIMG1585.jpeg' width='200'>

# FAQ

### 为什么叫 maanshan ？
这是一个地名：马鞍山


# License
[MIT](https://tldrlegal.com/license/mit-license)
