import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getBooks } from '../actions';
import BookItem from '../widgetsUI/bookItem';

class HomeContainer extends Component {
  componentWillMount() {
    this.props.dispatch(getBooks(3, 0, 'desc'));
  }

  loadMore = () => {
    let count = this.props.books.list.length;
    this.props.dispatch(getBooks(3, count, 'desc', this.props.books.list));
  };

  renderItems = books =>
    books.list
      ? books.list.map(item => <BookItem {...item} key={item._id} />)
      : null;

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row">{this.renderItems(this.props.books)}</div>
        <div
          onClick={this.loadMore}
          className="loadMore btn-floating btn-large orange  pulse"
          style={{ display: 'flex', margin: '0 auto' }}
        >
          <i className="material-icons">menu</i>
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

export default connect(mapStateToProps)(HomeContainer);
