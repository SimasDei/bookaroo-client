import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addBook } from '../../actions';

class AddBook extends Component {
  state = {
    formData: {
      name: '',
      author: '',
      pages: '',
      price: '',
      imageUrl: '',
      review: ''
    }
  };

  submitForm = e => {
    e.preventDefault();
    this.props.dispatch(
      addBook({
        ...this.state.formData,
        ownerId: this.props.users.login.id
      })
    );
  };

  handleInput = (e, name) => {
    const newFormData = {
      ...this.state.formData
    };
    newFormData[name] = e.target.value;

    this.setState({
      formData: newFormData
    });
  };

  showNewBook = book =>
    book.post ? (
      <div>
        <Link
          style={{ display: 'flex', margin: '0 auto' }}
          className="waves-effect btn btn-large orange lighten-2"
          to={`/bookaroo/books/${book.bookId}`}
        >
          Go to Review
        </Link>
      </div>
    ) : null;

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }} className="orange-text">
          Review
        </h2>

        <div
          className="parallax"
          style={{
            backgroundImage:
              'url(https://www.nationalgeographic.com/content/dam/travel/2017-digital/epic-libraries/iwaki-museum-of-picture-books-for-children-iwaki-japan.ngsversion.1505494539522.adapt.1900.1.jpg)',
            height: '500px',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            marginTop: '200px'
          }}
        />
        <div className="container orange-text">
          <div className="card" style={{ marginTop: '200px' }}>
            <div className="card-content">
              <div className="row">
                <form className="col s12" onSubmit={this.submitForm}>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="name"
                        type="text"
                        className="validate"
                        value={this.state.formData.name}
                        onChange={e => this.handleInput(e, 'name')}
                      />
                      <label htmlFor="name">Book Title</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="author"
                        type="text"
                        className="validate"
                        value={this.state.formData.author}
                        onChange={e => this.handleInput(e, 'author')}
                      />
                      <label htmlFor="author">Book Author</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="pages"
                        type="number"
                        className="validate"
                        value={this.state.formData.pages}
                        onChange={e => this.handleInput(e, 'pages')}
                      />
                      <label htmlFor="pages">Number of Pages</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="price"
                        type="number"
                        className="validate"
                        value={this.state.formData.price}
                        onChange={e => this.handleInput(e, 'price')}
                      />
                      <label htmlFor="price">Price</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="imageUrl"
                        type="text"
                        className="validate"
                        value={this.state.formData.imageUrl}
                        onChange={e => this.handleInput(e, 'imageUrl')}
                      />
                      <label htmlFor="imageUrl">Link to Cover Image</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <p style={{ textAlign: 'center' }}>Rating</p>
                      <select
                        className="browser-default"
                        value={this.state.formData.rating}
                        onChange={e => this.handleInput(e, 'rating')}
                      >
                        <option value="none" disabled>
                          Rating
                        </option>
                        <option value="1">1 star </option>
                        <option value="2">2 stars </option>
                        <option value="3">3 stars </option>
                        <option value="4">4 stars </option>
                        <option value="5">5 stars </option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        value={this.state.formData.review}
                        onChange={e => this.handleInput(e, 'review')}
                        id="review"
                        className="materialize-textarea"
                      />
                      <label htmlFor="review">Review</label>
                    </div>
                  </div>
                  <div className="card-action">
                    <button
                      type="submit"
                      className="waves-effect btn orange btn-large"
                      style={{ display: 'flex', margin: '0 auto' }}
                    >
                      Submit
                    </button>
                    {this.props.books.newBook
                      ? this.showNewBook(this.props.books.newBook)
                      : null}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(AddBook);
