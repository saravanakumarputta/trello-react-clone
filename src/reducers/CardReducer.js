export default function CardReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_CARD':
      return (state = Object.assign({}, state, action.data.card));
    case 'REMOVE_CARD':
      delete state[action.data.cardId];
      return (state = Object.assign({}, state));
    case 'UPDATE_CARD':
      return (state = Object.assign({}, state, { [action.data.card.id]: action.data.card }));
    case 'REMOVE_CARDS':
      action.data.cardIds.forEach(cardId => {
        delete state[cardId];
      });
      return (state = Object.assign({}, state));
    case 'ADD_COMMENT_TO_CARD':
      var cardInfo = state[action.data.cardId];
      return (state = Object.assign({}, state, {
        [action.data.cardId]: Object.assign({}, cardInfo, {
          cardIds: [...cardInfo.commentIds, action.data.commentId],
        }),
      }));
    default:
      return state;
  }
}