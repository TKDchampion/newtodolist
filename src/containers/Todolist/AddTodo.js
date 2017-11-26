import React, { Component } from 'react';
import PropType from 'prop-types';
import { stat } from 'fs';

export default class AddTodo extends Component{

    state = {
        inputValue: '',
    }

    static propType = {
        initText: PropType.string,
        addTodo: PropType.function,
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

    render() {
        return(
            <div>
                <input
                    type="text"
                    value={this.state.inputValue}
                    placeholder={this.props.initText}
                    onKeyPress={this.props.handleKeyPress}
                    onChange={this.handleChange}
                />
                <button onClick={() => this.props.onAddClick(this.state.inputValue)}>OK</button>
            </div>
        );
    }
}