import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Editor from 'tungtung-super-editor';

export class Question extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const {
      _id,
      status_type,
      correct_answer,
      type,
      has_suggest_answer,
      hasSolution,
      createdAt,
      updatedAt,
      content,
    } = this.props.question;
    return (
      <div className="w-question">
        <Link to={`/${_id}`} className="question">
          <div className="w-content">
            <div className="content">
              <Editor value={content} readOnly />
            </div>
          </div>
          <div className="status displaycenter">
            <p>{status_type}</p>
          </div>
          <div className="correctAns displaycenter">{correct_answer}</div>
          <div className="type displaycenter">
            <p>{type.toLowerCase()}</p>
          </div>
          <div className="has-suggest-answer displaycenter">
            <p className={has_suggest_answer ? 'ptrue' : 'pfalse'}>
              {has_suggest_answer ? 'True' : 'False'}
            </p>
          </div>
          <div className="solution displaycenter">
            <p className={hasSolution ? 'ptrue' : 'pfalse'}>
              {hasSolution ? 'True' : 'False'}
            </p>
          </div>
          <div className="createdAt displaycenter">{moment(createdAt).fromNow()}</div>
          <div className="updatedAt displaycenter">{moment(updatedAt).fromNow()}</div>
        </Link>
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
)(Question);
