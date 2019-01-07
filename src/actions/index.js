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
