import React from 'react';
import HeroButton from './HeroButton';
import '../styles/HeroSet.css';
import { buttonClick, heroHover, hoverExit } from '../events';

const HeroSet = ({heroes_set, selected_heroes, category}) => {
  let hero_buttons = heroes_set.map((hero) => 
    <HeroButton key={hero.id} 
                hero={hero} 
                roster={selected_heroes}
                clickAction={buttonClick(hero)}
                hoverAction={heroHover(hero)}
                hoverExitAction={hoverExit(hero)} />);
  return (
    <div className={'hero-set'}>
      <h2>{category}</h2>
      {hero_buttons}
    </div>
  );
};

export default HeroSet;
