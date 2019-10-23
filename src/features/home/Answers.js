import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Answer from './Answer';
export class Answers extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { answers } = this.props;
    return (
      <div className="list-answer">
        {answers.map((ans, ind) => (
          console.log(this.props.correct,ind),
          <Answer ABCD={String.fromCharCode(ind+65)} answercontent={ans.content} key={ind} correct={this.props.correct==ind}/>
        ))}
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    home: state.home,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Answers);
