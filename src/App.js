import React, { Component } from "react";
import classNames from "classnames";

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
    const { text } = this.state;
    const formClass = classNames(
      "input",
      "is-large",
      { "is-success": text.length === 40 },
      { "is-danger": text.length > 40 }
    );
    const countClass = classNames(
      "title",
      { "has-text-success": text.length === 40 },
      { "has-text-danger": text.length > 40 }
    );
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="columns">
              <div className="column">
                <h1 className={countClass}>{text.length}</h1>
              </div>
            </div>
            <div className="columns">
              <div className="column">
                <div className="field">
                  <div className="control">
                    <input
                      type="text"
                      className={formClass}
                      value={text}
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
