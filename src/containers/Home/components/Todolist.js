
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Todoitem';

export default class Todolist extends React.Component {

    static propTypes = {
        initText: PropTypes.string,
    }

    state = {
        items: [],
        inputValue: '',
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

    // 按下Enter時
    handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {

            // 值由前面開始排列
            // https://github.com/eyesofkids/ironman2017/tree/master/day12_side_effect_pure_func
            const newItems = [e.target.value, ...this.state.items];

            // 按下enter後，加到列表項目中並清空輸入框
            this.setState({
                items: newItems,
                inputValue: '',
            });
        }
    }

    // 移除一個item
    handleRemoveItem = (index) => {
        const oldItems = this.state.items;

        // 從陣列中移除一個index的成員
        // https://github.com/eyesofkids/ironman2017/tree/master/day12_side_effect_pure_func
        const newItems = oldItems.slice(0, index).concat(oldItems.slice(index + 1));

        // 更新
        this.setState({
            items: newItems,
        });
    }

    // 回傳React Element(元素)
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
            <ul>
              {
                 this.state.items.map((value, index) => (
                   <TodoItem
                     key={index}
                     text={value}
                     index={index}
                     onItemClick={this.handleRemoveItem} />
                 ))
              }
            </ul>
          </div>
        );
    }
}

