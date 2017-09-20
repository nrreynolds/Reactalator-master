import React, { Component } from 'react';
import '../App.css';
import Display from './Display';
import NumberPad from './NumberPad';

class Calculator extends Component {
  // this component may need to have some state
  // think about what you need to keep track of
  // where would you need to pass information to?
  constructor(){
    super();
    this.state = {
      value: '',
      running: 0,
      history: []
    }
  }

  log(e){
    this.setState((prevState) =>{
      return {
        value: prevState.value + e
      }
    })
  }

  handleClick(el) {
    if (el === 'x'){
      return this.log('*')
    } else if (el === '='){
      let history = this.state.history
      history.push(this.state.value)
      console.log(this.state)
      this.setState((prevState) =>{
        //Anthony and Jamal really saved the day with this one
        //finding eval() is probably a godsend
        //but i know i'm definitely cheating with this
        //eval will run math on a string
        //that's all that needs to happen right now
        return {
          value: eval(this.state.value),
          running: prevState.running + eval(this.state.value),
          history: history
        }
      })
    } else if (el === 'C'){
      this.setState((prevState) =>{
        return {
          value: '',
          running: 0
        }
      })
    } else if (el === '%') {
      this.setState((prevState) =>{
        return {
          value: eval(prevState.value + '/100'),
        }
      })
    } else if (el === '+/-'){
      let equation = this.state.value.split('');
      if (equation[0] === '-'){
        let newState=this.state.value.split('-')
        this.setState((prevState) =>{
          return {
          value: newState[1]
          }
        })
      } else {
        this.setState((prevState) => {
          return{
          value: '-'+prevState.value
          }
        })
      }
    }
    else {
      this.log(el)
    }
  }

  render() {
    //if you're changing state, remember to .bind(this)
    return (
      <div className="calculator">
        <Display display={this.state.value} history={this.state.history} />
        <NumberPad handleClick={this.handleClick.bind(this)} log={this.log.bind(this)}/>
      </div>
    );
  }
}

export default Calculator;
