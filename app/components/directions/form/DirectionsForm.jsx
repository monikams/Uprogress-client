import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createDirection } from 'actions/directions';

import TextField from 'TextField/ElementTextField';
import TextArea from 'TextArea/ElementTextArea';

class DirectionsForm extends Component {

  static propTypes = {
    direction: PropTypes.object
  };

  static defaultProps = {
    direction: {}
  };

  state = {
    title: ''
  };

  handleChange(event) {
    let lastState = this.state;
    this.state[event.target.name] = event.target.value;
    this.setState(lastState);
  }

  submitForm() {
    this.props.dispatch(createDirection({title: this.state.title}))
    this.setState({});
  }

  render() {
    return (
      <div className="directions-form">
        <form>
          <TextField ref="title"
           name="title"
           onChange={(event) => this.handleChange(event)} />
         <TextArea
           name="description"
           onChange={(event) => this.handleChange(event)} />
          <input type="button" value="Save" onClick={() => this.submitForm()}/>
        </form>
      </div>
    );
  }
}

export default connect()(DirectionsForm);
