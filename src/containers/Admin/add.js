import React, { Component } from 'react';

class AddBook extends Component {
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
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="title" type="text" className="validate" />
                      <label htmlFor="title">Book Title</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="author" type="text" className="validate" />
                      <label htmlFor="author">Book Author</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="pages" type="text" className="validate" />
                      <label htmlFor="pages">Number of Pages</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <input id="coverUrl" type="text" className="validate" />
                      <label htmlFor="coverUrl">Link to Cover Image</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6 offset-s3">
                      <p style={{ textAlign: 'center' }}>Rating</p>
                      <select className="browser-default">
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
              <button
                className="waves-effect btn orange btn-large"
                style={{ display: 'flex', margin: '0 auto' }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddBook;
