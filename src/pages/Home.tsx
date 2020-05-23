import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { ConnectProps, ConnectState } from '@/models/connect';

interface IProps extends ConnectState, ConnectProps {
  a: string;
}

interface IState {}

/**
 * 说明：
 * @author ${USER}
 * @date ${DATE}${TIME}
 */
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

  render() {
    return (
      <View>
        <Text>你好{this.props.home.number}</Text>
        <Button title="加" onPress={this.addNum} />
        <Button title="减" onPress={this.subNum} />
      </View>
    );
  }
}

export default connect(({ home }: IProps) => ({ home }))(Home);
