import React from 'react';

const User = props => {
  console.log(props);
  return (
    <div className="container">
      <div className="row center-align">
        <div className="col s12 m8" style={{ width: '100%' }}>
          <h2 className="header">User Details</h2>
          <div className="card horizontal">
            <div className="card-image">
              <img
                className="responsive-img"
                src="https://lorempixel.com/100/190/nature/6"
                alt="user"
              />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consectetur corporis tempore excepturi, porro quos dolorum
                  ipsa natus distinctio commodi laborum, suscipit esse quia
                  repellat assumenda doloribus! Provident omnis perspiciatis
                  facilis itaque obcaecati nemo, ea repellat repellendus cumque
                </p>
              </div>
              <div className="card-action">
                <a href="#!">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
