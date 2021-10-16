import React from 'react';
import styled from "styled-components"
import './App.css';
import Sidebar from './components/Sidebar'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Router>
      <>
      <Header/>
      <AppBody>
        <Sidebar/>
        <Switch>
          <Route path="/" exact>
           {/* Chat */}
          </Route>
        </Switch>
        </AppBody>
      </>
    </Router>

    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;