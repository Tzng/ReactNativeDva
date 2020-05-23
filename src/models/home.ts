import { Reducer } from 'redux';
import { Effect } from '@/models/connect';

export interface IHomeState {
  data: string[];
  v: string;
  // 验证码
  verCode: string;
  number: number;
  content: any[];
}

export interface IHomeModelType {
  namespace: 'home';
  state: IHomeState;
  effects: {
    zhihu: Effect;
  };
  reducers: {
    save: Reducer<IHomeState>;
  };
}

const fetchTest = async () => {
  const res = await fetch(
    'https://www.zhihu.com/api/v3/oauth/sms/supported_countries'
  );
  const data = await res.json();
  console.log(data);
  return data;
};

const home: IHomeModelType = {
  namespace: 'home',
  state: {
    data: [],
    v: '1.0',
    verCode: '',
    number: 1,
    content: [],
  },
  effects: {
    /**
     * 说明：获取百度网页
     * @author allahbin
     */
    *zhihu(_, { call, put }) {
      const res = yield call(fetchTest);
      yield put({
        type: 'save',
        payload: {
          content: res.data,
        },
      });
    },
  },

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default home;
