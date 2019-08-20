export default function BoardReducer(state = {}, action) {
  switch (action.type) {
    case 'ADD_BOARD':
      return (state = Object.assign({}, state, action.data.board));
    case 'ADD_LIST_TO_BOARD':
      var boardInfo = state[action.data.boardId];
      return (state = Object.assign({}, state, {
        [action.data.boardId]: Object.assign({}, boardInfo, {
          listIds: [...boardInfo.listIds, action.data.listId],
        }),
      }));
    case 'REMOVE_LIST_FROM_BOARD':
      var boardInfo = state[action.data.boardId];
      let listIds = boardInfo.listIds;
      listIds.splice(listIds.indexOf(action.data.listId), 1);
      return (state = Object.assign({}, state, {
        [action.data.boardId]: Object.assign({}, boardInfo, {
          listIds: listIds,
        }),
      }));
    default:
      return state;
  }
}