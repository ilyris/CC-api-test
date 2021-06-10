import React from 'react';
import S from 'styled-components';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './components/pages/HomePage.js';
import DesktopMenu from './components/menus/Desktopmenu.js';
import Recipe from './components/pages/Recipe.js';
import AddRecipe from './components/pages/AddRecipe';
import './index.css';
function App() {
  
  return (
    <Router>
       <DesktopMenu  />
        <ComponentWrapper>
          {/* <MobileMenu /> */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/recipe/:id" component={Recipe} />
            <Route exact path="/add" component={AddRecipe} />
          </Switch>
        </ComponentWrapper>
    </Router>
  );
}

export default App;
const ComponentWrapper = S.main`
  position: relative;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;