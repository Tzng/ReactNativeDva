import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ConnectProps, ConnectState } from '@/models/connect';
import NavigationUtil from '@/navigator/NavigationUtil';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  // 参数
  Profile: { title: string };
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Profile'
>;

interface IProps extends ConnectState, ConnectProps {
  dataLoading?: boolean;
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
}

interface IState {}

/**
 * 说明：
 * @author ${USER}
 * @date ${DATE}${TIME}
 */
class NavigatorsTest extends Component<IProps, IState> {
  state: IState = {};

  componentDidMount() {}

  render() {
    const { route, navigation } = this.props;
    console.log(
      '当前的路由树：',
      NavigationUtil.navigation.current?.getRootState()
    );
    return (
      <View>
        <Text>
          你好，这里是详情页面，接受到首页传递的参数为：{route.params.title}
        </Text>
        <Button title="返回" onPress={NavigationUtil.goBack} />
        <Button title="获取路由树" onPress={NavigationUtil.goBack} />
        <Button title="重置到首页" onPress={NavigationUtil.resetToHome} />
        <Button
          title="重置到详情"
          onPress={() => NavigationUtil.resetToPage('Details', {title: '路由重定向跳转'})}
        />
        <Text>当前的路由树</Text>
      </View>
    );
  }
}

export default NavigatorsTest;
