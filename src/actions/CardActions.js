export function addCard(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_CARD',
      data: data,
    });
    dispatch({
      type: 'ADD_CARD_TO_LIST',
      data: {
        listId: data.listId,
        cardId: data.cardId,
      },
    });
  };
}

export function deleteCard(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'REMOVE_CARD',
      data: data,
    });
    dispatch({
      type: 'REMOVE_CARD_FROM_LIST',
      data: data,
    });
  };
}

export function updateCard(data) {
  return {
    type: 'UPDATE_CARD',
    data: data,
  };
}