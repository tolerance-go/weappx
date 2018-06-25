# weappx-weapp

```js
import weappx from 'weappx';
import connector from 'weappx-weapp';

const app = weappx();

app.model(require('./app'));

const store = app.start();

connector.setStore(store);

export default app;
```

有2个connect方法：`connectPage`, `connectComponent` 分布对应 Component 和 Page

eg:
```js
Component(
  connectComponent({
    counter: 'counter',
    userInfo: state => state.app.userInfo
  })({
    data: {
      someData: {},
      // counter,
    },
  })
);

Page(
  connectPage({
    counter: 'counter',
    userInfo: state => state.app.userInfo
  })({
    data: {
      someData: {},
      // counter,
    },
  })
);
```