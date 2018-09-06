import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { text: "" };
    this.changeText = this.changeText.bind(this);
  }

  changeText(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column">
                <h2 className="title">{this.state.text.length}</h2>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <input
                      type="text"
                      className="input is-large"
                      value={this.state.text}
                      onChange={this.changeText}
                    />
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
