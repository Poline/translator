import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.png';
import './Main.scss';
import AddNewItem from './components/AddNewItem/AddNewItem';
import WordsList from './components/WordsList/WordsList';
import Test from './components/Test/Test';

class Main extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      mode : 'dictionary',
    };
  }

  changeModeType(newModeType){
    this.setState({mode : newModeType});
  }

  render () {
    const { mode } = this.state;
    
    return(
      <div className="main">
        <div className="main__header">
          <img src={logo} className="main__header-logo" alt="logo" />
          <div className="main__header-title">
            <h2 className={mode !== 'dictionary' && 'main__mode-disable'}
              onClick={()=>{this.changeModeType('dictionary')}}
            >
              Dictionary
            </h2>
            <h2 className={mode === 'dictionary' && 'main__mode-disable'}
              onClick={()=>{this.changeModeType('test')}}
            >
              Test
            </h2>
          </div>
        </div>
        
        {mode === 'dictionary' && <AddNewItem />}
        {mode === 'dictionary' && <WordsList />}
        {mode === 'test' && <Test />}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(Main);
