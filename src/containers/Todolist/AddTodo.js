import React, { Component } from 'react';
import PropType from 'prop-types';

export default class AddTodo extends Component {

    state = {
        inputValue: '',
    }

    static propType = {
        initText: PropType.string,
        addClick: PropType.function,
        handleKeyPress: PropType.function,
    }

    // 處理的方法，用e.target可以獲取到輸入框的值
    // 輸入文字時
    handleChange = (e) => {
        if (e.target instanceof HTMLInputElement) {
            this.setState({
                inputValue: e.target.value,
            });
        }
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
            this.setState({
                inputValue: '',
            });
            this.props.handleKeyPress(e);
        }
    }

    onAddClick = () => {
        this.setState({
            inputValue: '',
        });
        this.props.addClick(this.state.inputValue);
    }

    render() {
        return (
          <div>
            <input
              type="text"
              value={this.state.inputValue}
              placeholder={this.props.initText}
              onKeyPress={this.handleKeyPress}
              onChange={this.handleChange}
                />
            <button onClick={this.onAddClick}>OK</button>
          </div>
        );
    }
}
