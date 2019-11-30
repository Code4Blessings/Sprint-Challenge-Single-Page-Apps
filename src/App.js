import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


function App() {
   
  return (
    <div className="App">
      <div>
        <Header />
        <Route exact path="/" component={WelcomePage}/>
        <Route path="/character-list" component={CharacterList} />
    </div>
    </div>
  );
}

export default App;
