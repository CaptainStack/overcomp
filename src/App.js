import React from 'react';
import './App.css';
import TeamRoster from './components/TeamRoster';
import TeamSelect from './components/TeamSelect';

const App = ({roster, heroes, actions}) => {
  return (
    <div className="App">
      <img id='logo' src='logo.png' alt='logo'/>
      <TeamRoster selected_heroes={roster} clickAction={actions.slotClick} />
      <TeamSelect all_heroes={heroes} selected_heroes={roster} buttonClick={actions.buttonClick}/>
      <footer>
        <div><a href='https://captainstack.github.io/public-stackhouse' target='_blank'><p>© 2017 by Andre Stackhouse</p></a></div>
        <div><a href='https://github.com/CaptainStack/overcomp' target='_blank'><p>View source on GitHub</p></a></div>
      </footer>
    </div>
  );
};

export default App;
