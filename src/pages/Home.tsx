import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { ConnectProps, ConnectState } from '@/models/connect';
import { connect } from '@/utils/connect';
import NavigationUtil from '@/navigator/NavigationUtil';

interface IProps extends ConnectState, ConnectProps {
  dataLoading?: boolean;
}

interface IState {}

/**
 * 说明：
 * @author ${USER}
 * @date ${DATE}${TIME}
 */
@connect(({ home, loading }: IProps) => ({
  home,
  dataLoading: loading.effects['home/zhihu'],
}))
class Home extends Component<IProps, IState> {
  state: IState = {};

  componentDidMount() {}

  addNum = () => {
    let {
      home: { number },
    } = this.props;
    number++;
    this.props.dispatch({
      type: 'home/save',
      payload: {
        number,
      },
    });
  };

  subNum = () => {
    let {
      home: { number },
    } = this.props;
    number--;
    this.props.dispatch({
      type: 'home/save',
      payload: {
        number,
      },
    });
  };

  fetchText = () => {
    this.props.dispatch({
      type: 'home/zhihu',
    });
  };

  clearContent = () => {
    this.props.dispatch({
      type: 'home/save',
      payload: {
        content: [],
      },
    });
  };

  toDetails = () => {
    NavigationUtil.toPage('Details', {
      title: '你好',
    });
  };

  toNavigatorsTest = () => {
    NavigationUtil.toPage('NavigatorsTest', {
      title: 'NavigatorsTest',
    });
  };

  render() {
    const {
      home: { number, content },
      dataLoading,
    } = this.props;
    return (
      <View>
        <Text>你好：{number}</Text>
        <Button title="去详情" onPress={this.toDetails} />
        <Button title="导航测试" onPress={this.toNavigatorsTest} />
        <Button title="加" onPress={this.addNum} />
        <Button title="减" onPress={this.subNum} />
        <Button title="获取数据" onPress={this.fetchText} />
        <View>
          <Text>111</Text>
        </View>
        <Button title="清除数据" onPress={this.clearContent} />
        <Text>
          结果：
          {dataLoading
            ? '正在获取数据...'
            : content.map(item => <Text key={item.name}>{item.name}；</Text>)}
        </Text>
      </View>
    );
  }
}

export default Home;
