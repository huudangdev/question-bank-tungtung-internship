import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import Editor from 'tungtung-super-editor';

export class Answer extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    ABCD: PropTypes.string.isRequired,
    answercontent: PropTypes.any.isRequired,
  };

  render() {
    const { answercontent } = this.props;
    console.log(this.props)
    return (
      <div className={this.props.correct?"answer correct":"answer"}>
        <div className="answer-main">
          <div className="abcd">{this.props.ABCD}</div>
          <div className="answer-content">
            <span>
              <Editor value={answercontent} readOnly />
            </span>
          </div>
        </div>
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
)(Answer);
