import React from 'react';
import HeroSet from './HeroSet';
import '../styles/TeamSelect.css';

const TeamSelect = ({all_heroes, selected_heroes, buttonClick}) => {
  let offense_heroes = all_heroes.filter((hero) => hero.category === 'offense');
  let defense_heroes = all_heroes.filter((hero) => hero.category === 'defense');
  let tank_heroes = all_heroes.filter((hero) => hero.category === 'tank');
  let support_heroes = all_heroes.filter((hero) => hero.category === 'support');
  return (
    <div className={'TeamSelect row'}>
      <HeroSet heroes={offense_heroes} selected_heroes={selected_heroes} category='Offense' clickAction={buttonClick}/>
      <HeroSet heroes={defense_heroes} selected_heroes={selected_heroes} category='Defense' clickAction={buttonClick}/>
      <HeroSet heroes={tank_heroes} selected_heroes={selected_heroes} category='Tank' clickAction={buttonClick}/>
      <HeroSet heroes={support_heroes} selected_heroes={selected_heroes} category='Support' clickAction={buttonClick}/>
    </div>
  );
};

export default TeamSelect;
