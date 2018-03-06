//TYPES
export const GET_MESSAGE = 'CHANGE_MESSAGE';

//REDUCER
export default function reducer(state = defaultState, action = {}) {
  switch (action.type) {
    case GET_MESSAGE: return Object.assign({}, state, action.payload);
    default: return state;
  }
}

//ACTIONS
export function getMessage(newVal) {
  return {
    type: GET_MESSAGE,
    payload: {message: `Hi ${newVal}`},
  };
}

const defaultState = {
  message: '',
};