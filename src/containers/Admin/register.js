import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, registerUser } from '../../actions';
import moment from 'moment';

class Register extends PureComponent {
  state = {
    name: '',
    lastName: '',
    avatarImg: '',
    email: '',
    password: '',
    error: ''
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({ error: '' });

    this.props.dispatch(
      registerUser(
        {
          name: this.state.name,
          lastName: this.state.lastName,
          avatarImg: this.state.avatarImg,
          email: this.state.email,
          password: this.state.password
        },
        this.props.users.users
      )
    );
  };

  componentWillMount() {
    this.props.dispatch(getUsers());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users.register === false) {
      this.setState({ error: 'Registration Unsuccessful' });
    } else {
      this.setState({
        name: '',
        lastName: '',
        avatarImg: '',
        email: '',
        password: '',
        error: ''
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  showUsers = user => {
    return user
      ? user.map(item => (
          <li key={item._id} className="collection-item avatar">
            <img src={item.avatarImg} alt="avatar" className="circle" />
            <p>
              First Name: <strong>{item.name}</strong>
            </p>
            <p>
              Last Name: <strong>{item.lastName}</strong>
            </p>
            <p>
              Email: <strong>{item.email}</strong>
            </p>
            <p>Created at: {moment(item.createdAt).format('DD/MM/YY, h:mm')}</p>

            <Link className="secondary-content" to="#!">
              <i className="material-icons">forward</i>
            </Link>
          </li>
        ))
      : null;
  };

  render() {
    let user = this.props.users.users;
    return (
      <div>
        <h2 style={{ textAlign: 'center' }} className="orange-text">
          Add Reviewers
        </h2>
        <div
          className="parallax"
          style={{
            backgroundImage:
              'url(https://www.vichealth.vic.gov.au/-/media/Images/VicHealth/youthstrategy1200x525.jpg?h=525&la=en&w=1200&hash=A64B03EB9F5FE8EEDF2092A5D00298B696EA2EDF)',
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
                <form className="col s12" onSubmit={this.onSubmit}>
                  <div className="row section " id="editForm">
                    <div className="input-field col s6 offset-s3">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.name}
                      />
                      <span htmlFor="name">First Name</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.lastName}
                      />
                      <span htmlFor="lastName">Last Name</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        name="avatarImg"
                        id="avatarImg"
                        type="text"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.avatarImg}
                      />
                      <span htmlFor="avatarImg">Link to Avatar</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.email}
                      />
                      <span htmlFor="email">Email</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        name="password"
                        id="password"
                        type="password"
                        className="validate"
                        onChange={this.onChange}
                        value={this.state.password}
                      />
                      <span htmlFor="password">Password</span>
                    </div>
                  </div>
                  <div className="error red-text center-align">
                    <h5>{this.state.error}</h5>
                  </div>

                  <button
                    type="submit"
                    className="waves-effect btn orange btn-large"
                    style={{ display: 'flex', margin: '0 auto' }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '100px' }}>
            <h2 style={{ textAlign: 'center' }} className="orange-text">
              Current Users
            </h2>
            <ul className="collection">{this.showUsers(user)}</ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Register);
