import React from 'react';
import './App.css';
import TeamRoster from './components/TeamRoster';
import TeamSelect from './components/TeamSelect';
import HoverInfo from './components/HoverInfo';

const App = ({state}) => {

  let hover_info;
  if (state.get('hover_hero')) { 
    hover_info = <HoverInfo hero={state.get('hover_hero')} left={state.get('mouse').get('x')} top={state.get('mouse').get('y')} />
  }

  return (
    <div className="App">
      <img id='logo' src='logo.png' alt='logo'/>
      <TeamRoster selected_heroes={state.get('team')} />
      <TeamSelect selected_heroes={state.get('team')} />
      {hover_info}
      <footer>
        <div><a href='https://captainstack.github.io/public-stackhouse' target='_blank'><p>© 2017 by Andre Stackhouse</p></a></div>
        <div><a href='https://github.com/CaptainStack/overcomp' target='_blank'><p>View source on GitHub</p></a></div>
      </footer>
    </div>
  );
};

export default App;
