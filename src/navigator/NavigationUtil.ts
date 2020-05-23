/**
 * @author allahbin
 * @date 2019-3-12 22:59:16
 * @descriptions: 路由跳转工具
 */
import * as React from 'react';
import {
  NavigationContainerRef,
  CommonActions,
} from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export default class NavigationUtil {
  static navigation = navigationRef;

  /**
   * 跳转到指定页面
   * @param page 要跳转的页面名
   * @param params 要传递的参数
   * */
  static toPage(page: string, params = {}) {
    NavigationUtil.verNavigationRes();
    navigationRef.current?.navigate(page, params);
  }

  /**
   * 返回上一页
   */
  static goBack() {
    NavigationUtil.verNavigationRes();
    // 看看还能返回不
    const routers = navigationRef.current?.getRootState();
    if (routers?.routeNames.length === 1) {
      // TODO 这里要提示下说已经没有了~
      console.log('这里要提示下说已经没有了~');
    }
    navigationRef.current?.goBack();
  }

  /**
   * 重置路由到指定页面
   * @param routeName 路由
   * @param params 参数
   */
  static resetToPage(routeName: string = 'Init', params = {}) {
    // 先拿到当前的路由树
    const routers = navigationRef.current?.getRootState();
    const index = routers ? routers.routeNames.indexOf(routeName) : -1;
    if (index > -1) {
      navigationRef.current?.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: routeName, params }],
        })
      );
    }
  }

  /**
   * 重置路由到指定主页
   */
  static resetToHome() {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      })
    );
  }

  static verNavigationRes() {
    if (!navigationRef.current) {
      console.error('引入navigationRef失败');
    }
  }
}
