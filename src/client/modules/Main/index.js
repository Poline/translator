import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './Main.scss';
import { getMessage } from './main';

class Main extends React.Component{
  constructor (props) {
    super(props)

    this.getMessage = this.getMessage.bind(this)
  }

  getMessage(){
    this.props.dispatch(getMessage(this.name.value));
  }

  render () {
    const { message } = this.props.data;
    return(
      <div className="Main">
        <div className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="Main-intro">What is your name?</p>

        <input ref={(inputEl) => this.name = inputEl} type='text' placeholder='Place your name' />

        <button onClick={this.getMessage}>Hello!</button>

        <p>{message}</p>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(Main);
