import React from 'react';
import HeroButton from './HeroButton';
import '../styles/HeroSet.css';

const HeroSet = ({heroes, selected_heroes, category, clickAction}) => {
  let hero_buttons = heroes.map((hero) => 
    <HeroButton key={hero.id} 
                hero={hero} 
                roster={selected_heroes}
                clickAction={clickAction(hero.id)} />);
  return (
    <div className={'hero-set'}>
      <h2>{category}</h2>
      {hero_buttons}
    </div>
  );
};

export default HeroSet;
