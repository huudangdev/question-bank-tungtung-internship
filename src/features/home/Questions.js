import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';
import * as actions from './redux/actions';
import Nav from './Nav';
import Pagination from './Pagination';
export class Questions extends Component {
  static propTypes = {
    home: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };
  componentDidMount() {
    if (this.props.home.listQuestion.length === 0) {
      this.props.actions.loadQuestions(this.props.home.curPage, this.props.home.curItemPerPage);
    }
    //this.refs.loadlist.addEventListener('scroll', this.handle);
  }
  // componentWillUnmount() {
  //   this.refs.loadlist.removeEventListener('scroll', this.handle);
  // }
  // handle = () => {
  //   if (
  //     this.refs.loadlist.scrollTop + this.refs.loadlist.clientHeight ===
  //     this.refs.loadlist.scrollHeight
  //   ) {
  //     console.log('scroll...,loading');
  //   }
  // };

  render() {
    return (
      <React.Fragment>
        <Pagination />
        <Nav />
        <div className="list-questions" ref="loadlist">
          {this.props.home.loadQuestionsPending?<div className='loading'>Loading...</div>:this.props.home.listQuestion.map((val, ind) => (
            <Question key={val._id} question={val}/>
          ))}
        </div>
      </React.Fragment>
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
)(Questions);
