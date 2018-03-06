import React from 'react';
import { connect } from 'react-redux';

import './Test.scss';

class Test extends React.Component{
  constructor (props) {
    super(props)

    this.getQuestionAnswers = this.getQuestionAnswers.bind(this);
    this.changeAnswer = this.changeAnswer.bind(this);

    this.state = {
      questions: [],
      currentQuestionId: 0,
      answer: null,
      totalRightAnswers: 0,
    }
  }

  componentDidMount(){
    const questions = this.getTestQuestions();
    
    this.setState({questions: questions});
  }

  getRandomArrayElements(array, count, value) {
    let i = array.length,
      temp,
      index;
    const shuffledArray = array.slice(0),
      min = i - count;

    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffledArray[index];

        if (value){
          if (value !== temp){
            shuffledArray[index] = shuffledArray[i];
            shuffledArray[i] = temp;
          }
        } else{
          shuffledArray[index] = shuffledArray[i];
          shuffledArray[i] = temp;
        }
    }

    return shuffledArray.slice(min);
  }

  compareRandom(a, b) {
    return Math.random() - 0.5;
  }

  getAllQuestionsAnswers(){
    const { words } = this.props.data;
    let answers = [];

    words.map((word)=>{
      answers.push(word.translation)
    });

    return answers;
  }

  getQuestionAnswers(question){
    const allAnswers = this.getAllQuestionsAnswers();
    let answers;

    answers = this.getRandomArrayElements(allAnswers, 5, question.translation);
    answers.push(question.translation);
    answers = answers.sort(this.compareRandom);

    return answers;
  }

  getTestQuestions(){
    const { words } = this.props.data,
      questions = this.getRandomArrayElements(words, 20);
    
    questions.map((question) => {
      question.answers = this.getQuestionAnswers(question);
    });
    
    return questions;
  }

  nextQuestion(){
    const { questions, currentQuestionId, answer, totalRightAnswers } = this.state,
      currentQuestion = questions[currentQuestionId];

    if (answer !== null){
      if (currentQuestion.translation === answer){
        this.setState({totalRightAnswers: totalRightAnswers + 1});
      }

      this.setState({currentQuestionId: currentQuestionId + 1});
      this.setState({answer: null});
    }
  }

  changeAnswer(changeEvent){
    this.setState({answer: changeEvent.target.value});
  }

  render () {
    const { questions, currentQuestionId, totalRightAnswers } = this.state,
      currentQuestion = questions[currentQuestionId];
    
    if (currentQuestionId === 20){
      return (
        <div className="test">
          <div className="test__results">
            Вы ответили правильно на {totalRightAnswers} вопросов
          </div>
        </div>
      )
    } else {
      return(
        <div className="test">
          <div className="test__navigation"> {currentQuestionId + 1} вопрос из 20 </div>
          <div className="test__question">
              <div className='test__question-word'> {currentQuestion && currentQuestion.word} </div>
              {currentQuestion && currentQuestion.answers.map((answer, index) => {
                return (
                  <div className='test__question-answer' key={`answer${index}${answer}`}>
                    <input type="radio"
                      name="test-answer"
                      value={answer}
                      onChange={this.changeAnswer}
                    />
                    <span> {answer} </span>
                  </div>
                )
              })}
          </div>
          <button onClick={() => {this.nextQuestion()}}> Next </button>
        </div>
      )
    }
  }
};

const mapStateToProps = (state) => ({
  data: state.main,
});

export default connect(mapStateToProps)(Test);
