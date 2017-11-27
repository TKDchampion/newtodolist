import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Edit extends Component {

    static propTypes = {
        Edit: PropTypes.function,
        text: PropTypes.string,
    }

    onEditClick = () => {
        this.props.Edit(this.props.text);
    }

    render() {
        return (
          <button onClick={this.onEditClick}>Edit</button>
        );
    }
}
