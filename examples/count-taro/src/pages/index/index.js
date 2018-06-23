import Taro, { Component } from '@tarojs/taro';
import { View, Button, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import store from '../../store';
import './index.styl';

@connect(state => ({
  count: state.count.count,
}))
export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页',
  };

  inputChange({ detail: { value } }) {
    this.setState({
      inputValue: Number(value) || 0,
    });
  }

  plus() {
    const { inputValue } = this.state;
    store.dispatcher.count.plus(inputValue);
  }

  sub() {
    const { inputValue } = this.state;
    store.dispatcher.count.sub(inputValue);
  }

  render() {
    const { count } = this.props;
    const { inputValue } = this.state;
    return (
      <View className="index">
        <View className="container">
          <View className="stage">计数器数值：{count}</View>
          <View>
            步数值：
            <Input
              placeholder="请输入步数"
              auto-focus
              value={inputValue}
              onInput={this.inputChange}
            />
          </View>
          <View>
            <Button onClick={this.plus}>+</Button>
            <Button onClick={this.sub}>-</Button>
          </View>
        </View>
      </View>
    );
  }
}
