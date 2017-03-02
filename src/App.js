import React from 'react';
import './App.css';
import HeroSet from './components/HeroSet';
import TeamRoster from './components/TeamRoster';
// import HeroSlot from './components/HeroSlot';
// import TeamStats from './components/TeamStats';

const App = ({state}) => {
  let offense_heroes = state.heroes.filter((hero) => hero.category === 'offense');
  let defense_heroes = state.heroes.filter((hero) => hero.category === 'defense');
  let tank_heroes = state.heroes.filter((hero) => hero.category === 'tank');
  let support_heroes = state.heroes.filter((hero) => hero.category === 'support');

  return (
    <div className="App">
      <img id='logo' src='logo.png' alt='logo'/>
      {/*<div className='row'><div className='hero-slots'>{hero_slots}</div> <TeamStats team={state.selected_heroes} /></div>*/}
      <div className='row' id='team-row'>
        <TeamRoster selected_heroes={state.selected_heroes} clickAction={state.slotClick} />
      </div>
      <div className='row' id='hero-select'>
        <HeroSet heroes={offense_heroes} selected_heroes={state.selected_heroes} category='Offense' clickAction={state.buttonClick}/>
        <HeroSet heroes={defense_heroes} selected_heroes={state.selected_heroes} category='Defense' clickAction={state.buttonClick}/>
        <HeroSet heroes={tank_heroes} selected_heroes={state.selected_heroes} category='Tank' clickAction={state.buttonClick}/>
        <HeroSet heroes={support_heroes} selected_heroes={state.selected_heroes} category='Support' clickAction={state.buttonClick}/>
      </div>
    </div>
  );
};

export default App;
