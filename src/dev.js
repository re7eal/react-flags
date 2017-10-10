import React, { Component } from 'react';
import Flag from "./Flag.js";

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <Flag
          name="CA"
          format="png"
          pngSize={64}
          shiny={true}
          alt="Canada Flag"
        />
      </div>
    );
  }
}

React.render(<App />, document.body);
