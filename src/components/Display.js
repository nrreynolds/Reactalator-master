import React, { Component } from 'react';
import History from './History'

class Display extends Component {
  // the h3 should show the numbers or symbols in the calculator display
  // where should this information be coming from?
  // does this need to be a class component?
  //yes.
  doubleClick(){
    console.log('inside doubleClick')
    return this.props.history.map((el, index) => {
      console.log(el)
      return <History key={index} eq={el} />
    });
  }
  render(){
    console.log(this.props.history)
    return (
      <div className="display" onDoubleClick={() => this.doubleClick()}>
        <h5 key="h1" className="display_text">
          {this.props.display}
        </h5>
      </div>
    );
  }
}

export default Display;
