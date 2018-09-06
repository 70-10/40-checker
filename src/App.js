import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column">
                <h2 className="title">0</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <input type="text" className="input is-large" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default App;
