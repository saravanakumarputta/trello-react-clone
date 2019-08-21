export function addComment(data) {
  return (dispatch, getState) => {
    dispatch({
      type: 'ADD_COMMENT',
      data: data,
    });
    dispatch({
      type: 'ADD_COMMENT_TO_CARD',
      data: {
        cardId: data.cardId,
        commentId: data.commentId,
      },
    });
  };
}