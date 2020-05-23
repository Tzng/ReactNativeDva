import { connect as connectComponent } from 'react-redux';

// 参考 https://kirainmoe.com/blog/post/some-problems-of-typescript-with-react/
export const connect = (mapStateToProps: any, actions?: any) => {
  return (target: any) =>
    connectComponent(mapStateToProps, actions)(target) as any;
};
