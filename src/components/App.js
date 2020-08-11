import React from 'react';
import '../assets/fomantic/dist/semantic.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <button className="ui primary red button">App</button>
        <p>Plain</p>
        <h1>Header</h1>
      </div>
    );
  }
}
