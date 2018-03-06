//TYPES
export const CHANGE_TRANSLATION = 'CHANGE_TRANSLATION';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  let newState = state;
  switch (action.type) {
    case CHANGE_TRANSLATION:
      newState.words[action.payload.index].translation = action.payload.translation;
    break;
    case ADD_NEW_WORD:
      newState = Object.assign({}, state, action.payload);
    break;
    default: return newState;
  }
  return newState;
}

//ACTIONS
export function changeTranslation(wordIndex, translation) {
  return {
    type: CHANGE_TRANSLATION,
    payload: {
      index: wordIndex,
      translation: translation,
    },
  };
}

export function addNewWord(word) {
  return {
    type: ADD_NEW_WORD,
    payload: {word: word},
  };
}

const defaultState = {
  words: [{
    word: 'Hello',
    translation: 'Привет',
  },{
    word: 'Mother',
    translation: 'Мама',
  },{
    word: 'Father',
    translation: 'Папа',
  },{
    word: 'Brother',
    translation: 'Брат',
  },{
    word: 'Sister',
    translation: 'Сестра',
  },{
    word: 'Dog',
    translation: 'Собака',
  },{
    word: 'Cat',
    translation: 'Кошка',
  },{
    word: 'Game',
    translation: 'Игра',
  },{
    word: 'Computer',
    translation: 'Компьютер',
  },{
    word: 'Mouse',
    translation: 'Мышь',
  },{
    word: 'Go',
    translation: 'Идти',
  },{
    word: 'Do',
    translation: 'Делать',
  },{
    word: 'Butter',
    translation: 'Масло',
  },{
    word: 'Spoon',
    translation: 'Ложка',
  },{
    word: 'Click',
    translation: 'Клик',
  },{
    word: 'Tea',
    translation: 'Чай',
  },{
    word: 'Coffee',
    translation: 'Кофе',
  },{
    word: 'Water',
    translation: 'Вода',
  },{
    word: 'Bottle',
    translation: 'Бутылка',
  },{
    word: 'Black',
    translation: 'Черный',
  }],
};