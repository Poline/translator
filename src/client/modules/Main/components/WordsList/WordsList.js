import React from 'react';
import { connect } from 'react-redux';

import './WordsList.scss';
import { changeTranslation } from '../../main';

class WordsList extends React.Component{
  constructor (props) {
    super(props)

    this.openEditElement = this.openEditElement.bind(this);
    this.changeTranslation = this.changeTranslation.bind(this);
    this.clickOnConfirmButton = this.clickOnConfirmButton.bind(this);
    this.changeWord = this.changeWord.bind(this);

    this.state = {
      editElement : true,
      showErrorClass : false,
      newWordTranslation: '',
    };
  }

  changeWord(event){
    this.setState({newWordTranslation: event.currentTarget.value});
  }

  openEditElement(index){
    if (this.state.editElement !== index){
      this.setState({editElement: index});
    } else{
      this.closeEditElement();
    }
  }

  closeEditElement(index){
    this.setState({editElement: null});
  }

  clickOnConfirmButton(index){
    const translation = this.state.newWordTranslation;

    if (translation.length > 0){
      this.closeErrorTranslationClass();
      this.changeTranslation(index, translation);
      this.setState({newWordTranslation: ''})
    } else{
      this.openErrorTranslationClass();
    }
  }

  changeTranslation(index, translation){
    this.props.dispatch(changeTranslation(index, translation));
    this.closeEditElement();
    this.closeErrorTranslationClass();
  }

  openErrorTranslationClass(){
    this.setState({showErrorClass: true});
  }

  closeErrorTranslationClass(){
    this.setState({closeErrorClass: true});
  }

  render () {
    const { words } = this.props.data,
      { editElement, showErrorClass } = this.state;
    
    return(
      <div className="words-list">
        <h3> Your list </h3>
        {words.map((word, wordIndex) => {
          return(
            <div key={`word-${wordIndex}`} className='word-element'>
              <span className='word-element__word'> {word.word} </span>
              <span className='word-element__transtate'> {word.translation} </span>
              <span className="word-element__edit" onClick={()=> this.openEditElement(wordIndex)}>Edit</span>
              {editElement === wordIndex &&
                <div className='word-element__edit-block'>
                  <input className={showErrorClass && 'word-element__edit-block-input-error'} onChange={this.changeWord}/>
                  <button onClick={() => this.clickOnConfirmButton(wordIndex)}> Confirm </button>
                </div>
              }
            </div>
          )
        })}
      </div>
    )
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(WordsList);
