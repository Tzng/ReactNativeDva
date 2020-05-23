// @ts-ignore
import { create } from 'dva-core';
// @ts-ignore
import createLoading from 'dva-loading';
// @ts-ignore
import immer from 'dva-immer';
import { createLogger } from 'redux-logger';

let app: {
  use: (arg0: { onError(err: any): void }) => void;
  model: (arg0: any) => any;
  start: () => void;
  _store: { dispatch: any };
  getStore: () => { dispatch: any };
  dispatch: any;
};

let store: { dispatch: any };

let dispatch;

let registered: boolean;

function createApp(opt: any) {
  // redux 的日志
  opt.onAction = [createLogger()];
  app = create(opt);
  app.use(immer());
  app.use(createLoading());
  app.use({
    onError(err: any) {
      console.log('dvaError', err);
    },
  });
  if (!registered) {
    opt.models.forEach((model: any) => app.model(model));
  }
  registered = true;
  app.start();
  store = app._store;
  app.getStore = () => store;
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  if (global) {
    global.dva_app = app;
  }
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
