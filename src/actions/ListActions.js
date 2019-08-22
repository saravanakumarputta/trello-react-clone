export function addList(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_LIST',
      data: data,
    });

    dispatch({
      type: 'ADD_LIST_TO_BOARD',
      data: {
        listId: data.listId,
        boardId: data.boardId,
      },
    });
  };
}

export function deleteList(data) {
  return (dispatch, getState) => {
    var cardIds = getState().lists[data.listId].cardIds;
    data.cardIds = cardIds

    dispatch({
      type: 'REMOVE_LIST',
      data: data,
    });

    dispatch({
      type: 'REMOVE_LIST_FROM_BOARD',
      data: data,
    });

    dispatch({
      type: 'REMOVE_CARDS',
      data: data
    })
  };
}