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