# weappx

[![NPM version](https://img.shields.io/npm/v/weappx.svg?style=flat)](https://npmjs.org/package/)
[![Build Status](https://travis-ci.org/tolerance-go/weappx.svg?branch=master)](https://travis-ci.org/tolerance-go/weappx)
[![Coverage Status](https://coveralls.io/repos/github/tolerance-go/weappx/badge.svg?branch=master)](https://coveralls.io/github/tolerance-go/weappx?branch=master)
[![NPM downloads](http://img.shields.io/npm/dm/weappx.svg?style=flat)](https://npmjs.org/package/weappx)
[![Dependencies Status](https://david-dm.org/tolerance-go/weappx/status.svg)](https://david-dm.org/tolerance-go/weappx)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

# 升级方案

* [wepyx -> weappx@1.x](https://github.com/tolerance-go/wepyx/blob/master/docs/WEPYX.md)
* [weappx@1.x -> 2.x](https://github.com/tolerance-go/wepyx/blob/master/docs/WEAPPX2.md)

如果有好的建议欢迎 issue 讨论 👏👏👏

# Install

开发环境支持安装 npm 依赖的话，直接使用命令安装即可

```zsh
npm install weappx
```

原生小程序开发可以通过拷贝 git 项目中 `packages/xxx/dist` 中的 bundle 文件到实际项目中进行引用

# 框架接入DEMO

* [count(weapp原生小程序)](https://github.com/tolerance-go/wepyx/tree/master/examples/count-weapp)
* [count(wepy)](https://github.com/tolerance-go/wepyx/tree/master/examples/count)
* [todoMVC(wepy)](https://github.com/tolerance-go/wepyx/tree/master/examples/todo)
* count(weapp-start) todo
* count(taro) todo
* count(mpvue) todo

# Feature

* 上手简单，仅需要了解 4 个 api
* 更易用的 action [派发方式](https://github.com/tolerance-go/wepyx/blob/master/docs/DISPATCHER.md)
* 更简单的数据处理[copy-on-write](https://en.wikipedia.org/wiki/Copy-on-write)
* 强大的 hook 机制

# Links

* [Documentation](https://github.com/tolerance-go/wepyx/tree/master/docs/README.md)
* [Update Log](https://github.com/tolerance-go/weappx/blob/master/packages/weappx/CHANGELOG.md)
* [Contribution](https://github.com/tolerance-go/blog/issues/1#issue-313932480)

# License

[MIT](https://tldrlegal.com/license/mit-license)
