import React from 'react';

const TeamStats = ({team}) => {
  let hitpoints = team.reduce((acc, hero) => acc + hero.hitpoints, 0);
  let armor = team.reduce((acc, hero) => acc + hero.armor, 0);
  let shields = team.reduce((acc, hero) => acc + hero.shields, 0);
  let healing = team.reduce((acc, hero) => acc + hero.healing, 0);
  let tank = team.reduce((acc, hero) => acc + hero.tank, 0);
  let healing_message;
  let tank_message;
  let healing_color;
  let tank_color;
  if (healing === 0) { healing_message = 'No healer'; healing_color = 'lightpink' }
  else if (healing === 1) { healing_message = 'Need more healing'; healing_color = 'lightpink' }
  else if (healing < 3) { healing_message = 'Need more healing'; healing_color = 'palegoldenrod' }
  else { healing_color = 'lightgreen'}

  if (tank === 0) { tank_message = 'No tank'; tank_color = 'lightpink' }
  else if (tank === 1) { tank_message = 'Need more tank'; tank_color = 'lightpink' }
  else if (tank < 3) { tank_message = 'Need more tank'; tank_color = 'palegoldenrod' }
  else { tank_color = 'lightgreen'}

  return (
    <div>
      <table>
        <tr>
          <td style={{width: '100px'}}>HP/Armor/Shields:</td>
          <td style={{width: '600px'}}>
            <div style={{display: 'inline-block', backgroundColor: '#C8C7CF', width: hitpoints / 5 + 'px', height: '25px'}}></div>
            <div style={{display: 'inline-block', backgroundColor: '#C6A544', width: armor / 5 + 'px', height: '25px'}}></div>
            <div style={{display: 'inline-block', backgroundColor: '#2894B1', width: shields / 5 + 'px', height: '25px'}}></div>
          </td>
          <td>
          </td>
        </tr>
        <tr>
          <td>Healing:</td>
          <td><div style={{display: 'inline-block', backgroundColor: healing_color, width: (600 / 7) * healing + 'px', height: '25px'}}></div></td>
          <td style={{width: '150px'}}>{healing_message}</td>
        </tr>
        <tr>
          <td>Tank:</td>
          <td><div style={{display: 'inline-block', backgroundColor: tank_color, width: (600 / 7) * tank + 'px', height: '25px'}}></div></td>
          <td>{tank_message}</td></tr>
      </table>
    </div>
  );
};

export default TeamStats;
