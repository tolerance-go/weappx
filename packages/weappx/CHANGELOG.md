# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

<a name="2.0.0"></a>
# [2.0.0](https://github.com/tolerance-go/wepyx/compare/weappx@1.0.1...weappx@2.0.0) (2018-06-23)


### Code Refactoring

* store initialization moves outside ([78d571b](https://github.com/tolerance-go/wepyx/commit/78d571b))


### BREAKING CHANGES

* remove init api; remove connector params
* dispatcher is no longer merge within the component




<a name="1.0.1"></a>
## [1.0.1](https://github.com/tolerance-go/wepyx/compare/weappx@1.0.0...weappx@1.0.1) (2018-06-17)


### Bug Fixes

* pass connect rest of params ([47a1866](https://github.com/tolerance-go/wepyx/commit/47a1866))




<a name="1.0.0"></a>
# [1.0.0](https://github.com/tolerance-go/wepyx/compare/weappx@0.2.0...weappx@1.0.0) (2018-05-27)


### Features

* **weappx:** independent loading by plugin; add opts ([5737c3a](https://github.com/tolerance-go/wepyx/commit/5737c3a))


### BREAKING CHANGES

* **weappx:** remove loading param
* **weappx:** remove noLoadingModel opts
* **weappx:** remove extraMiddlewares opts




<a name="0.2.0"></a>
# [0.2.0](https://github.com/tolerance-go/wepyx/compare/weappx@0.1.0...weappx@0.2.0) (2018-05-21)


### Features

* add init opts: noLoadingModel ([c261e31](https://github.com/tolerance-go/wepyx/commit/c261e31))
* eventBus add takeLast once isHappend ([6781530](https://github.com/tolerance-go/wepyx/commit/6781530))




<a name="0.1.0"></a>
# 0.1.0 (2018-05-02)


### Features

* 相较 [wepyx](https://github.com/tolerance-go/weappx/tree/wepyx) 将数据管理部分和组件框架分离，独立连接器部分；新的包名称 weappx ([9434616f](https://github.com/tolerance-go/wepyx/commit/9434616f))
