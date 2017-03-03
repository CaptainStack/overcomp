import React from 'react';
import './App.css';
import TeamRoster from './components/TeamRoster';
import TeamSelect from './components/TeamSelect';

const App = ({state}) => {
  return (
    <div className="App">
      <img id='logo' src='logo.png' alt='logo'/>
      <TeamRoster selected_heroes={state.selected_heroes} clickAction={state.slotClick} />
      <TeamSelect all_heroes={state.heroes} selected_heroes={state.selected_heroes} buttonClick={state.buttonClick}/>
      {/*<div className='row' id='hero-select'>
        <HeroSet heroes={offense_heroes} selected_heroes={state.selected_heroes} category='Offense' clickAction={state.buttonClick}/>
        <HeroSet heroes={defense_heroes} selected_heroes={state.selected_heroes} category='Defense' clickAction={state.buttonClick}/>
        <HeroSet heroes={tank_heroes} selected_heroes={state.selected_heroes} category='Tank' clickAction={state.buttonClick}/>
        <HeroSet heroes={support_heroes} selected_heroes={state.selected_heroes} category='Support' clickAction={state.buttonClick}/>
      </div>*/}
      <footer>
        <div><a href='https://captainstack.github.io/public-stackhouse'><p>© 2017 by Andre Stackhouse</p></a></div>
        <div><a href='https://github.com/CaptainStack/public-stackhouse' target='_blank'><p>View source on GitHub</p></a></div>
      </footer>
    </div>
  );
};

export default App;
