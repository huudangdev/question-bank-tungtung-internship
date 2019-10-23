import React, { Component } from 'react';

export default class Nav extends Component {
  static propTypes = {};

  render() {
    return (
      <div className="home-nav">
        <div className="Navquestion displaycenter">Question</div>
        <div className="Navstatus displaycenter">Status</div>
        <div className="NavcorrectAns displaycenter">correct Answer</div>
        <div className="Navtype displaycenter">Type</div>
        <div className='Navhas-suggest-answer'>has suggest answer</div>
        <div className="Navsolution displaycenter">has Solution</div>
        <div className="NavcreatedAt displaycenter">created At</div>
        <div className="NavupdatedAt displaycenter">updated At </div>
      </div>
    );
  }
}
