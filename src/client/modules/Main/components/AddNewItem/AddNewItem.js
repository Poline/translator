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
      newWord: '',
      newWordTranslation: '',
    };
  }

  clickOnConfirmButton(){
    const {newWord, newWordTranslation} = this.state;
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
          translation: newWordTranslation,
        }
      ),
    }));

    this.cleanInputs();
    this.closeErrors();
  }

  closeErrors(){
    this.setState({
      newWordInputError: false,
      newWordTranslationInputError: false,
    });
  }

  cleanInputs(){
    this.setState({
      newWord: '',
      newWordTranslation: '',
    })
  }

  render () {
    const { newWordTranslationInputError, newWordInputError, newWord, newWordTranslation } = this.state;

    return(
      <div className="add-new-item">
        <h3> Add new word </h3>
        <input placeholder='Word'
          value={newWord}
          className={newWordInputError && 'add-new-item__input-error'}
          onChange={(event)=>{this.setState({newWord: event.currentTarget.value})}}
        />
        <input placeholder='Translation'
          value={newWordTranslation}
          className={newWordTranslationInputError && 'add-new-item__input-error'}
          onChange={(event)=>{this.setState({newWordTranslation: event.currentTarget.value})}}
        />
        <button onClick={this.clickOnConfirmButton}> Confirm </button>
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(AddNewItem);
