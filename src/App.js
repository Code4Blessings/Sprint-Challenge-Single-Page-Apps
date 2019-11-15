import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";


function App() {
  return (
    <main>
      <Header />
       <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/character-list" render={(props) => 
          <CharacterList 
          {...props}
          />} />
    </main>
  );
}

export default App;
