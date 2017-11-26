import React from 'react';
import PropTypes from 'prop-types';


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

  render() {
    return (
      <li onClick={this.handleClick}>{this.props.text}</li>
    );
  }
}
