export default function ListReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_LIST':
      return (state = Object.assign({}, state, action.data.list));
    case 'ADD_CARD_TO_LIST':
      var listInfo = state[action.data.listId];
      return (state = Object.assign({}, state, {
        [action.data.listId]: Object.assign({}, listInfo, {
          cardIds: [...listInfo.cardIds, action.data.cardId],
        }),
      }));
    case 'REMOVE_CARD_FROM_LIST':
      var listInfo = state[action.data.listId];
      var cardIds = listInfo.cardIds;
      cardIds.splice(cardIds.indexOf(action.data.cardId), 1);
      return (state = Object.assign({}, state, {
        [action.data.listId]: Object.assign({}, listInfo, {
          cardIds: cardIds,
        })
      }));
    case 'REMOVE_LIST':
      delete state[action.data.listId];
      return (state = Object.assign({}, state));
    case 'MOVE_CARD':
      var cardListInfo = state[action.data.listId];
      let deleteCardListInfo = state[action.data.deleteCardListId];
      let filteredCardIds = deleteCardListInfo.cardIds.filter((cardId) => {
        return cardId !== action.data.cardId;
      })
      return Object.assign({}, state, {
        [action.data.listId]: Object.assign({}, cardListInfo, {
          cardIds: [...cardListInfo.cardIds, action.data.cardId]
        }),
        [action.data.deleteCardListId]: Object.assign({}, deleteCardListInfo, {
          cardIds: filteredCardIds
        })
      })
    default:
      return state;
  }
}