import React from 'react';
import HeroSlot from './HeroSlot';
import TeamStats from './TeamStats';
import '../styles/TeamRoster.css';
import { slotClick } from '../events';

const TeamRoster = ({selected_heroes, clickAction}) => {
  let hero_slots = selected_heroes.map((selected_hero) => 
    <HeroSlot key={selected_hero.id} hero={selected_hero} clickAction={slotClick(selected_hero.id)} />);
  return (
    <div id={'team-roster'} className='row'>
      <div id='hero-slots'>{hero_slots}</div>
      <TeamStats team={selected_heroes} />
    </div>
  );
};

export default TeamRoster;
