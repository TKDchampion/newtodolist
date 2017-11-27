import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Edit extends Component {


    constructor(props) {
        super(props);

        this.state = ({
            isEditng: false
        });
    }

    static propTypes = {
        Edit: PropTypes.function,
        index: PropTypes.number,
        newState: PropTypes.state,
    }

    onEditClick = () => {
        this.props.Edit(this.props.index);
        this.props.newState = this.setState({ isEditng: true });
    }


    render() {
        return (
          <button onClick={this.onEditClick}>Edit</button>
        );
    }
}
