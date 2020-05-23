import React, { Component } from 'react';
import NavigationUtil from '../navigator/NavigationUtil';

type Props = {
  navigation: any;
};

class WelcomePage extends Component<Props> {
  constructor(props: Readonly<Props>) {
    super(props);
    const { navigation } = this.props;
    NavigationUtil.navigation = navigation;
  }

  componentDidMount() {
    NavigationUtil.resetToHomPage();
  }

  render() {
    return <></>;
  }
}
export default WelcomePage;
