import React, { Component } from 'react';
import { getBookWithReviewer, clearBookReviewer } from '../../actions';
import { connect } from 'react-redux';

class BookView extends Component {
  componentWillMount() {
    this.props.dispatch(getBookWithReviewer(this.props.match.params.id));
  }

  componentWillUnmount() {
    this.props.dispatch(clearBookReviewer());
  }

  renderBook = books =>
    books.book ? (
      <div className="col s8 offset-s2">
        <div className="card large">
          <div className="card-image">
            <img
              className="responsive-img"
              src={books.book.imageUrl}
              alt="book cover"
            />
            <span className="card-title">{books.book.name}</span>
          </div>
          <div className="card-content">
            <h4>{books.book.name}</h4>
            <h6>
              By: <strong>{books.book.author}</strong>
            </h6>
            <div className="reviewer">
              <span>
                Review by:{' '}
                <strong>
                  {books.reviewer.name} {books.reviewer.lastName}
                </strong>
              </span>
              <button className="waves-effect waves-light btn-small activator purple right">
                Read the Review
              </button>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              <i className="material-icons right">close</i>
            </span>
            <p>{books.book.review}</p>
            <div>
              <p>
                Pages: <strong>{books.book.pages}</strong>
              </p>
              <p>
                Price: <strong>${books.book.price}</strong>
              </p>
            </div>
            <div>
              <span>Rating</span>
              <h5>{books.book.rating}/5</h5>
            </div>
          </div>
        </div>
      </div>
    ) : null;

  render() {
    let books = this.props.books;
    return (
      <div className="container">
        <div className="row">{this.renderBook(books)}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookView);
