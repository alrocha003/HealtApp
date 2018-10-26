import React, { Component } from 'react';
import './App.css';
import MenuComponent from './components/menu-component';
import AgendaComponent from './components/agenda/agenda-component';
import DisplayInfoAgendaComponent from './components/display-info-agenda/display-info-agenda-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuComponent />
        <DisplayInfoAgendaComponent/>
        <AgendaComponent className="agenda-position"/>
      </div>
    );
  }
}

export default App;
