export default function BoardReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return (state = Object.assign({}, state, action.data.board));
    default:
      return state;
  }
}