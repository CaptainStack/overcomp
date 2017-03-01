import React from 'react';
import './App.css';
import HeroButton from './components/HeroButton';
import HeroSlot from './components/HeroSlot';
import TeamStats from './components/TeamStats';

const App = ({state}) => {
  let hero_buttons = state.heroes.map((hero) => 
    <HeroButton key={hero.id} 
                hero={hero} 
                roster={state.selected_heroes}
                clickAction={state.buttonClick(hero.id)} />);
  let hero_slots = state.selected_heroes.map((selected_hero) => 
    <HeroSlot key={selected_hero.id} 
              hero={selected_hero} 
              clickAction={state.slotClick(selected_hero.id)} />);
  return (
    <div className="App">
      <h1>Overcomp</h1>
      <div className='row'>{hero_slots} <TeamStats team={state.selected_heroes} /></div>
      <h2>Select Your Heroes</h2>
      <div className='row'>{hero_buttons}</div>
    </div>
  );
};

export default App;
