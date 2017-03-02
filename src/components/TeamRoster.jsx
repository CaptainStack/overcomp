import React from 'react';
import HeroSlot from './HeroSlot';
import TeamStats from './TeamStats';

const TeamRoster = ({selected_heroes, clickAction}) => {
  let hero_slots = selected_heroes.map((selected_hero) => 
    <HeroSlot key={selected_hero.id} hero={selected_hero} clickAction={clickAction(selected_hero.id)} />);
  return (
    <div id={'team-roster'}>
      <div id='hero-slots'>{hero_slots}</div>
      <TeamStats team={selected_heroes} />
    </div>
  );
};

export default TeamRoster;
