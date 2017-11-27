
import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './Todoitem';
import AddTodo from './AddTodo';
import Edit from './Edit';

export default class Todolist extends React.Component {


    state = {
        items: [],
    }

    // 按下Enter時
    handleKeyPress = (e) => {
        if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
           // debugger;
            // 值由前面開始排列
            // https://github.com/eyesofkids/ironman2017/tree/master/day12_side_effect_pure_func
            const newItems = [e.target.value, ...this.state.items];

            // 按下enter後，加到列表項目中並清空輸入框
            this.setState({
                items: newItems,
            });
        }
    }

    addTodo = (text) => {

       // debugger;
        const newItems = [text, ...this.state.items];
        this.setState({
            items: newItems,
            inputValue: '',
        });
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
    // 編輯
    handleEdit = () => {
        console.log(this.state.items);
    }


    // 回傳React Element(元素)
    render() {
        return (
          <div>
            <AddTodo
              addClick={this.addTodo}
              handleKeyPress={this.handleKeyPress}
            />
            <ul>
              {
                 this.state.items.map((value, index) => (
                   <TodoItem
                     key={index}
                     text={value}
                     index={index}
                     onItemClick={this.handleRemoveItem}
                     />
                 ))
              }
              {
                 this.state.items.map(index => (
                   <Edit
                     key={index}
                     index={index}
                     Edit={this.handleEdit}
                     />
                 ))
              }
            </ul>
          </div>
        );
    }
}

