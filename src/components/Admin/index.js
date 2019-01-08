import React from 'react';

const User = props => {
  let user = props.users.login;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m8" style={{ width: '100%' }}>
          <h2 className="header center-align">User Details</h2>
          <div className="card horizontal left-align">
            <div className="card-image">
              <img
                className="responsive-img"
                src="https://rlv.zcache.com/tom_and_jerry_reading_book_autographed_classic_round_sticker-ref440d1872684804868ef6b205e75895_v9waf_8byvr_400.jpg"
                alt="user"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <div>
                  <span>Name: </span>
                  <strong>{user.name}</strong>
                </div>
                <div>
                  <span>Last Name: </span>
                  <strong>{user.lastName} </strong>
                </div>
                <div>
                  <span>Email: </span>
                  <strong>{user.email} </strong>
                </div>
              </div>
              <div className="card-action">
                <a href="#!">My Reviews</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
