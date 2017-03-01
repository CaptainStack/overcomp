import React from 'react';

const TeamStats = ({team}) => {
  let hitpoints = team.reduce((acc, hero) => acc + hero.hitpoints, 0);
  let armor = team.reduce((acc, hero) => acc + hero.armor, 0);
  let shields = team.reduce((acc, hero) => acc + hero.shields, 0);
  let healing = team.reduce((acc, hero) => acc + hero.healing, 0);
  let tank = team.reduce((acc, hero) => acc + hero.tank, 0);
  let messages = [healing < 3 ? "Need more healing" : null,
                  tank < 3 ? "Need more tank" : null];
  messages = messages.map(message => message ? <li>{message}</li> : null);
  return (
    <div>
      <h1>Team Stats</h1>
      <ul>
        <li>Hitpoints: {hitpoints}</li>
        <li>Armor: {armor}</li>
        <li>Shields: {shields}</li>
        {messages}
      </ul>
    </div>
  );
};

export default TeamStats;
