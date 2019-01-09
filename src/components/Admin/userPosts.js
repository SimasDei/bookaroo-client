import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUserPosts } from '../../actions';
import moment from 'moment';

class UserPosts extends Component {
  componentWillMount() {
    this.props.dispatch(getUserPosts(this.props.users.login.id));
  }

  showUserPosts = user =>
    user.userPosts
      ? user.userPosts.map(item => (
          <li key={item._id} className="collection-item avatar">
            <img src={item.imageUrl} alt="avatar" className="circle" />
            <span className="title">{item.name}</span>
            <p>
              Author: <strong>{item.author}</strong>
            </p>
            <p>{moment(item.createdAt).format('DD/MM/YY, h:mm')}</p>
            <Link
              className="secondary-content"
              to={`/bookaroo/user/edit-post/${item._id}`}
            >
              <i className="material-icons">forward</i>
            </Link>
          </li>
        ))
      : null;

  render() {
    let user = this.props.users;
    return (
      <div className="container">
        <h2 className="orange-text center-align">Written Reviews</h2>
        <ul className="collection">{this.showUserPosts(user)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(UserPosts);
