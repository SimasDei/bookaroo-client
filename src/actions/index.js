import axios from 'axios';

// << Book Requests >>

export function getBooks(limit = 10, start = 0, order = 'asc', list = '') {
  const request = axios
    .get(`/books?limit=${limit}&skip=${start}&order=${order}`)
    .then(response => {
      if (list) {
        return [...list, ...response.data];
      } else {
        return response.data;
      }
    });

  return {
    type: 'GET_BOOKS',
    payload: request
  };
}

export function getBookWithReviewer(id) {
  const request = axios.get(`/getBook?id=${id}`);

  return dispatch => {
    request.then(({ data }) => {
      let book = data;

      axios.get(`/getReviewer?id=${book.ownerId}`).then(({ data }) => {
        let response = {
          book,
          reviewer: data
        };

        dispatch({
          type: 'GET_BOOK_REVIEWER',
          payload: response
        });
      });
    });
  };
}

export function clearBookReviewer() {
  return {
    type: 'CLEAR_BOOK_REVIEWER',
    payload: {
      book: {},
      reviewer: {}
    }
  };
}

export function addBook(book) {
  const request = axios.post('/book', book).then(response => response.data);

  return {
    type: 'ADD_BOOK',
    payload: request
  };
}

export function updateBook(book) {
  const request = axios
    .post('/book_update', book)
    .then(response => response.data);

  return {
    type: 'EDIT_BOOK',
    payload: request
  };
}

export function clearNewBook() {
  return {
    type: 'CLEAR_BOOK',
    payload: {}
  };
}

export function clearBook() {
  return {
    type: 'CLEAR_EDIT_BOOK',
    payload: {
      book: null,
      updateBook: false,
      postDeleted: false
    }
  };
}

export function deleteBook(bookId) {
  const request = axios
    .delete(`/delete_book?id=${bookId}`)
    .then(response => response.data);

  return {
    type: 'DELETE_BOOK',
    payload: request
  };
}

export function getUserPosts(userId) {
  const request = axios
    .get(`/user_posts?user=${userId}`)
    .then(response => response.data);
  return {
    type: 'GET_USER_POSTS',
    payload: request
  };
}

export function getBook(bookId) {
  const request = axios
    .get(`/getBook?id=${bookId}`)
    .then(response => response.data);

  return {
    type: 'GET_BOOK',
    payload: request
  };
}

// << User Requests >>

export function loginUser({ email, password }) {
  const request = axios
    .post('/login', { email, password })
    .then(response => response.data);

  return {
    type: 'USER_LOGIN',
    payload: request
  };
}

export function auth() {
  const request = axios.get('/auth').then(response => response.data);

  return {
    type: 'USER_AUTH',
    payload: request
  };
}

export function getUsers() {
  const request = axios.get('/users').then(response => response.data);

  return {
    type: 'GET_USERS',
    payload: request
  };
}
