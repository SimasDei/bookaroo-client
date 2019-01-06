export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        list: action.payload
      };

    case 'GET_BOOK_REVIEWER':
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case 'CLEAR_BOOK_REVIEWER':
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    default:
      return state;
  }
};
