import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getBook, updateBook, clearBook, deleteBook } from '../../actions';

class EditBook extends PureComponent {
  state = {
    formData: {
      _id: this.props.match.params.id,
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

  componentWillMount() {
    this.props.dispatch(getBook(this.props.match.params.id));
  }

  componentWillReceiveProps(nextProps) {
    let book = nextProps.books.book;
    this.setState({
      formData: {
        name: book.name,
        author: book.author,
        pages: book.pages,
        price: book.price,
        imageUrl: book.imageUrl,
        review: book.review,
        rating: book.rating
      }
    });
  }

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }} className="orange-text">
          Edit Review
        </h2>

        <div
          className="parallax"
          style={{
            backgroundImage:
              'url(https://static1.squarespace.com/static/534ad50ae4b04a5110f5ae72/583c8e0f8419c2644793c023/5a70ea9c24a6940dd0ca6713/1536700737452/_DSC4109-Modifier-2.jpg)',
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
                      <span htmlFor="name">Book Title</span>
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
                      <span htmlFor="author">Book Author</span>
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
                      <span htmlFor="pages">Number of Pages</span>
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
                      <span htmlFor="price">Price</span>
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
                      <span htmlFor="imageUrl">Link to Cover Image</span>
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
                        style={{ minHeight: '8rem' }}
                      />
                      <span htmlFor="review">Review</span>
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
                    <div
                      style={{
                        paddingTop: '16px',
                        display: 'flex'
                      }}
                    >
                      <div
                        style={{
                          margin: '0 auto',
                          width: '111px'
                        }}
                        className="btn btn-large red col s4 "
                      >
                        Delete Review
                      </div>
                    </div>
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
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(EditBook);
