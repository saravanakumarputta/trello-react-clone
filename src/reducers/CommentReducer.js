export default function CommentReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return (state = Object.assign({}, state, action.data.comment));
    default:
      return state;
  }
}