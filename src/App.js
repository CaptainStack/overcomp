import React from 'react';
import './App.css';
import TeamRoster from './components/TeamRoster';
import TeamSelect from './components/TeamSelect';

const App = ({roster}) => {
  return (
    <div className="App">
      <img id='logo' src='logo.png' alt='logo'/>
      <TeamRoster selected_heroes={roster} />
      <TeamSelect selected_heroes={roster} />
      <footer>
        <div><a href='https://captainstack.github.io/public-stackhouse' target='_blank'><p>© 2017 by Andre Stackhouse</p></a></div>
        <div><a href='https://github.com/CaptainStack/overcomp' target='_blank'><p>View source on GitHub</p></a></div>
      </footer>
    </div>
  );
};

export default App;
