import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';


export default class Todoitem extends React.Component {

  static propTypes= {
    text: PropTypes.string,
    index: PropTypes.number,
    onItemClick: PropTypes.Function
  }

  handleClick = () => {
    // 從props.onItemClick傳入
    this.props.onItemClick(this.props.index);
  }

  // 編輯
  handleEdit = () => {
    console.log(this.props.text);
  }

  render() {
    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleClick}>Delete</button>
          <Edit Edit={this.handleEdit}/>
        </li>
      </div>
    );
  }
}
