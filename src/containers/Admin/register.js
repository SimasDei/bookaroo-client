import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {getUsers, registerUsers} from '../../actions';

class Register extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    error: ''
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }} className="orange-text">
          Add Reviewer
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
                <form className="col s12">
                  <div className="row section " id="editForm">
                    <div className="input-field col s6 offset-s3">
                      <input id="name" type="text" className="validate" />
                      <span htmlFor="name">First Name</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="lastName" type="text" className="validate" />
                      <span htmlFor="lastName">Last Name</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="email" type="email" className="validate" />
                      <span htmlFor="email">Email</span>
                    </div>
                  </div>

                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input
                        id="password"
                        type="password"
                        className="validate"
                      />
                      <span htmlFor="password">Password</span>
                    </div>
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
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Register);
