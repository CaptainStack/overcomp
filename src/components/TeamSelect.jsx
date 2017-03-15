import React from 'react';
import HeroSet from './HeroSet';
import '../styles/TeamSelect.css';
import { heroes } from '../heroes';

const TeamSelect = ({selected_heroes, buttonClick}) => {
  let offense_heroes = heroes.filter((hero) => hero.category === 'offense');
  let defense_heroes = heroes.filter((hero) => hero.category === 'defense');
  let tank_heroes = heroes.filter((hero) => hero.category === 'tank');
  let support_heroes = heroes.filter((hero) => hero.category === 'support');
  return (
    <div className={'TeamSelect row'}>
      <HeroSet heroes_set={offense_heroes} selected_heroes={selected_heroes} category='Offense' />
      <HeroSet heroes_set={defense_heroes} selected_heroes={selected_heroes} category='Defense' />
      <HeroSet heroes_set={tank_heroes} selected_heroes={selected_heroes} category='Tank' />
      <HeroSet heroes_set={support_heroes} selected_heroes={selected_heroes} category='Support' />
    </div>
  );
};

export default TeamSelect;
