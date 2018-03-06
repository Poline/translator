//TYPES
export const CHANGE_TRANSLATION = 'CHANGE_TRANSLATION';
export const ADD_NEW_WORD = 'ADD_NEW_WORD';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  let newState = state;
  switch (action.type) {
    case CHANGE_TRANSLATION:
      newState.words[action.payload.index].transtation = action.payload.transtation;
    break;
    case ADD_NEW_WORD:
      newState = Object.assign({}, state, action.payload);
    break;
    default: return newState;
  }
  return newState;
}

//ACTIONS
export function changeTranslation(wordIndex, transtation) {
  return {
    type: CHANGE_TRANSLATION,
    payload: {
      index: wordIndex,
      transtation: transtation,
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
    transtation: 'Привет',
  },{
    word: 'Mother',
    transtation: 'Мама',
  },{
    word: 'Father',
    transtation: 'Папа',
  },{
    word: 'Brother',
    transtation: 'Брат',
  },{
    word: 'Sister',
    transtation: 'Сестра',
  },{
    word: 'Dog',
    transtation: 'Собака',
  },{
    word: 'Cat',
    transtation: 'Кошка',
  },{
    word: 'Game',
    transtation: 'Игра',
  },{
    word: 'Computer',
    transtation: 'Компьютер',
  },{
    word: 'Mouse',
    transtation: 'Мышь',
  },{
    word: 'Go',
    transtation: 'Идти',
  },{
    word: 'Do',
    transtation: 'Делать',
  },{
    word: 'Butter',
    transtation: 'Масло',
  },{
    word: 'Spoon',
    transtation: 'Ложка',
  },{
    word: 'Click',
    transtation: 'Клик',
  },{
    word: 'Tea',
    transtation: 'Чай',
  },{
    word: 'Coffee',
    transtation: 'Кофе',
  },{
    word: 'Water',
    transtation: 'Вода',
  },{
    word: 'Bottle',
    transtation: 'Бутылка',
  },{
    word: 'Black',
    transtation: 'Черный',
  }],
};