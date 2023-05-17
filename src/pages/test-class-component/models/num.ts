import { createModel, request } from 'ice';

export default createModel({
  // 定义  model 的初始 state
  state: 0,
  // 定义改变该 model 状态的纯函数
  reducers: {
    // reducers的函数不能异步
    setNum(state, payload) {
      return state + ((typeof payload === 'number') ? payload : 1);
    },
  },
  // 定义处理该 model 副作用的函数
  effects: (dispatch) => ({
    // effects的函数可以异步，获取数据的场景，需要调用effects方法获取数据后再调用reducers方法更新数据
    async initNum() {
      const res = await request('https://mocks.sto.cn/mock/test-mocks/base/getNum');
      this.setNum(res.data);
    },
  }),
});