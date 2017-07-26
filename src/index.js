import dva from 'dva';
import createLoading from 'dva-loading';

import './index.html';
import './index.less';

// 1. Initialize
const app = dva();

// 2. 插件 Plugins
app.use(createLoading({
  effects: true,
}));

// 3. redux Model
app.model(require('./models/customer'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
