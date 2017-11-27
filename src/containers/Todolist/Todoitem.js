import React from 'react';
import PropTypes from 'prop-types';
import Edit from './Edit';


export default class Todoitem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        isEditng: false
    };
  }
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
    if (this.state.isEditng === true) {
      return (
        <td>
          <form onSubmit>
            <input type="text" defaultValue={this.props.text} />
          </form>
        </td>
      );
    }
  }

  render() {
    return (
      <div>
        <li>
          {this.props.text}
          <button onClick={this.handleClick}>Delete</button>
          <Edit
            Edit={this.handleEdit}
            newState={this.state.isEditng}
          />
        </li>
      </div>
    );
  }
}
