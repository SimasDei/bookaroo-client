export default (state = {}, action) => {
  switch (action.type) {
    case 'GET_BOOKS':
      return {
        ...state,
        list: action.payload
      };
    case 'GET_BOOK':
      return {
        ...state,
        book: action.payload
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
    case 'ADD_BOOK':
      return {
        ...state,
        newBook: action.payload
      };
    case 'EDIT_BOOK':
      return {
        ...state,
        updateBook: action.payload.success,
        book: action.payload.doc
      };
    case 'CLEAR_BOOK':
      return {
        ...state,
        newBook: action.payload
      };

    case 'DELETE_BOOK':
      return {
        ...state,
        bookDeleted: action.payload
      };
    case 'CLEAR_EDIT_BOOK':
      return {
        ...state,
        book: action.payload.book,
        updateBook: action.payload.updateBook,
        bookDeleted: action.payload.bookDeleted
      };
    default:
      return state;
  }
};
