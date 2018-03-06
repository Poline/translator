import React from 'react';
import { connect } from 'react-redux';
import logo from './logo.png';
import './Main.scss';
import AddNewItem from './components/AddNewItem/AddNewItem';
import WordsList from './components/WordsList/WordsList';

class Main extends React.Component{
  constructor (props) {
    super(props)

    this.state = {
      mode : 'dictionary',
    };
  }

  render () {
    const { mode } = this.state;
    debugger
    return(
      <div className="Main">
        <div className="Main-header">
          <img src={logo} className="Main-logo" alt="logo" />
          <h2>Dictionary</h2>
        </div>
        
        {mode === 'dictionary' && <AddNewItem />}
        {mode === 'dictionary' && <WordsList />}

      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(Main);
