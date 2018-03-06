import React from 'react';
import { connect } from 'react-redux';

import './AddNewItem.scss';
import { addNewWord } from '../../main';

class AddNewItem extends React.Component{
  constructor (props) {
    super(props)

    this.clickOnConfirmButton = this.clickOnConfirmButton.bind(this);

    this.state = {
      newWordInputError : false,
      newWordTranslationInputError : false,
    };
  }

  clickOnConfirmButton(){
    const newWord = this.newWord.value,
      newWordTranslation = this.newWordTranslation.value;
    let addWord = true;

    if (newWord.length === 0){
      this.setState({newWordInputError: true});
      addWord = false;
    } else{
      this.setState({newWordInputError: false});
    }

    if (newWordTranslation.length === 0){
      this.setState({newWordTranslationInputError: true});
      addWord = false;
    } else{
      this.setState({newWordTranslationInputError: false});
    }

    if (addWord){
      this.addNewWord(newWord, newWordTranslation);
    }
  }

  addNewWord(newWord, newWordTranslation){
     this.props.dispatch(addNewWord({
      words: this.props.data.words.push(
        {
          word: newWord,
          transtation: newWordTranslation,
        }
      ),
    }));

    this.cleanInputs();
    this.closeErrors();
  }

  closeErrors(){
    this.setState({newWordInputError: false});
    this.setState({newWordTranslationInputError: false});
  }

  cleanInputs(){
    this.newWord.value = '';
    this.newWordTranslation.value = '';
  }

  render () {
    const { newWordTranslationInputError, newWordInputError } = this.state;

    return(
      <div className="add-new-item">
        <h3> Add new word </h3>
        <input className={newWordInputError && 'add-new-item__input-error'} ref={(elem) => this.newWord = elem} />
        <input className={newWordTranslationInputError && 'add-new-item__input-error'} ref={(elem) => this.newWordTranslation = elem} />
        <button onClick={this.clickOnConfirmButton}> Confirm </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(AddNewItem);
