import React, { Component } from 'react';

class AddBook extends Component {
  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Review</h2>

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
        <div className="container">
          <div className="card" style={{ marginTop: '200px' }}>
            <div className="card-content">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="first_name" type="text" className="validate" />
                      <label htmlFor="first_name">Title</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="last_name" type="text" className="validate" />
                      <label htmlFor="last_name">Rating</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                      />
                      <label htmlFor="textarea1">Review</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="card-action">
              <button className="btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
