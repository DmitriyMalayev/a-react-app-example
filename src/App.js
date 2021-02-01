import React, { Component } from 'react';
import moment from 'moment';
import ExampleComponent from './ExampleComponent'
import TestComponent from './TestComponent'

// Add your code own within the return statement

class App extends Component {
  //All of the visible content is contained within this App class 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Now</h1>
        </header>
        <p className="App-intro">
          In React apps, we write JSX - it looks like HTML, and uses a lot of
          HTML syntax. JSX lets us include JavaScript functions right along with
          the HTML, and also allows us to add in components, which are separate,
          self-contained chunks of JSX.
        </p>
        <ExampleComponent />
        <TestComponent />
      </div>
    );
  }
}

export default App;    

/*
exported here and imported into index.js


By including the export line we're allowing other files to import things from the App.js file. 
The export default App denotes that our App is the main thing we want to export from our App.js file. 
You can only have one default export per file. 


function App() {     is this the newer version?? 
  return (
    // JSX goes here!
  )
} 
*/





