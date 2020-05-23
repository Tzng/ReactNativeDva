/**
 * @author allahbin
 * @date 2019-3-12 22:59:16
 * @descriptions: 路由跳转工具
 */
import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef: React.RefObject<NavigationContainerRef> = React.createRef();

export default class NavigationUtil {
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
    navigationRef.current?.goBack();
  }

  /**
   * 重定向到某个页面
   * @param page 页面名
   * @param params 参数
   */
  static redirectTo(page: string, params = {}){

  }

  static verNavigationRes() {
    if (!navigationRef.current) {
      console.error('引入navigationRef失败');
    }
  }
}
