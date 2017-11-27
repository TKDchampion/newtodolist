import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Edit extends Component {

static propTypes = {
    Edit: PropTypes.function,
    index: PropTypes.number,
}

onEditClick = () => {
    this.props.Edit(this.props.index);
}
    render() {
        return (
          <button onClick={this.onEditClick}>Edit</button>
        );
    }
}
