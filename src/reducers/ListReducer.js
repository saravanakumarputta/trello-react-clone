export default function ListReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return (state = Object.assign({}, state, action.data.list));
    case 'REMOVE_LIST':
      delete state[action.data.listId];
      return (state = Object.assign({}, state));
    default:
      return state;
  }
}