import React from 'react';

// Components
import Nav from './components/nav.js';
import Story from './templates/home/story.js';
import Tools from './templates/home/tools.js';
import History from './templates/home/history.js';
import Goal from './templates/home/goal.js';

const App = React.createClass({
  render() {
    return (
      <div id="container">
        <Nav />
        <main>
          <Story />
          <Tools />
          <History />
          <Goal />
          {this.props.children}
        </main>
      </div>
    );
  }
});

export default App;
