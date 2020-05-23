/**
 * @author tangbin
 * @date 2019-3-12 22:59:16
 * @descriptions: 路由跳转工具
 */
import { StackActions } from '@react-navigation/native';

export default class NavigationUtil {
  static navigation;

  /**
   * 跳转到指定页面
   * @param page 要跳转的页面名
   * @param params 要传递的参数
   * */
  static goPage(page: string, params = {}) {
    this.navigation.navigate(page, {
      ...params,
    });
  }

  /**
   * 返回上一页
   */
  static goBack() {
    const { dispatch } = this.navigation;
    dispatch(NavigationActions.back());
  }

  /**
   * 重置到首页
   */
  static resetToHomPage() {
    // 定位到第一个页面
    this.navigation.navigate('Home');
  }

  /**
   * 重置到首页
   */
  static resetToLoginPage() {
    // 定位到第一个页面
    this.navigation.navigate('Init');
  }
}
