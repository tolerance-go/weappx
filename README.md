# weappx
[![NPM version](https://img.shields.io/npm/v/weappx.svg?style=flat)](https://npmjs.org/package/weappx)
[![Build Status](https://travis-ci.org/tolerance-go/weappx.svg?branch=master)](https://travis-ci.org/tolerance-go/weappx)
[![Coverage Status](https://coveralls.io/repos/github/tolerance-go/wepyx/badge.svg?branch=master)](https://coveralls.io/github/tolerance-go/wepyx?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/weappx.svg?style=flat)](https://npmjs.org/package/weappx)
[![Dependencies Status](https://david-dm.org/tolerance-go/weappx/status.svg)](https://david-dm.org/tolerance-go/weappx)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

现在 原生小程序，wepy 都可以使用 weappx 来管理应用状态了。

mpvue 会在以后提供对应的 connector。

*如果之前在使用 `wepyx` 的同学请移步[这里](https://github.com/tolerance-go/wepyx/blob/master/docs/WEPYX.md)查看变化原因和升级方式。*

如果有好的建议欢迎 issue 讨论 👏👏👏

# Install

原生小程序开发如果使用第三方脚手架支持引入 npm 依赖的话，直接通过 npm install 安装即可

否则通过拷贝 git 项目中 `packages/xxx/dist` 中的 bundle 文件到实际项目中进行引用

```zsh
npm install weappx
```

# Usage

```js
import weappx from 'weappx'
// wepy 框架的连接器
import wepyConnector from 'weappx-wepy'
// 原生小程序 框架的连接器
import weappConnector from 'weappx-weapp'

const store = weappx()

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

# Example

- [count - weapp](https://github.com/tolerance-go/wepyx/tree/master/examples/count-weapp)
- [count - wepy](https://github.com/tolerance-go/wepyx/tree/master/examples/count)
- [todo - wepy](https://github.com/tolerance-go/wepyx/tree/master/examples/todo)

# Links

- [Documentation](https://github.com/tolerance-go/wepyx/tree/master/docs/README.md)
- [Update Log](https://github.com/tolerance-go/weappx/blob/master/packages/weappx/CHANGELOG.md)
- [Contribution](https://github.com/tolerance-go/blog/issues/1#issue-313932480)

# Community(中文)

<img src='./assets/WechatIMG107.jpeg' width='200'>


# License
[MIT](https://tldrlegal.com/license/mit-license)
