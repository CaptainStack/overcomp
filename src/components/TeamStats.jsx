import React from 'react';

const TeamStats = ({team}) => {
  let hitpoints = team.reduce((acc, hero) => acc + hero.hitpoints, 0);
  let armor = team.reduce((acc, hero) => acc + hero.armor, 0);
  let shields = team.reduce((acc, hero) => acc + hero.shields, 0);
  let healing = team.reduce((acc, hero) => acc + hero.healing, 0);
  let tank = team.reduce((acc, hero) => acc + hero.tank, 0);
  let barrier = team.reduce((acc, hero) => acc + hero.barrier, 0);

  let healing_message;
  let tank_message;
  let healing_color;
  let tank_color;

  if (healing === 0) { healing_message = 'No healer'; healing_color = 'indianred' }
  else if (healing > 0 && healing < 4) { healing_message = 'Need more healing'; healing_color = 'indianred' }
  else if (healing > 3 && healing < 6) { healing_message = 'Low healing'; healing_color = 'palegoldenrod' }
  else { healing_color = 'darkseagreen'; healing_message = 'Good healing'}

  if (tank === 0) { tank_message = 'No tank'; tank_color = 'indianred' }
  else if (tank === 1) { tank_message = 'Need more tank'; tank_color = 'indianred' }
  else if (tank < 3) { tank_message = 'Low tank'; tank_color = 'palegoldenrod' }
  else { tank_color = 'darkseagreen'; tank_message = 'Good tank';}

  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>HP/Armor/Shields:</td>
            <td style={{width: '600px'}}>
              <div style={{display: 'inline-block', backgroundColor: '#C8C7CF', width: (600 / 2900) * hitpoints + 'px', height: '20px'}}></div>
              <div style={{display: 'inline-block', backgroundColor: '#C6A544', width: (600 / 2900) * armor + 'px', height: '20px'}}></div>
              <div style={{display: 'inline-block', backgroundColor: '#2894B1', width: (600 / 2900) * shields + 'px', height: '20px'}}></div>
            </td>
            <td style={{width: '150px', textAlign: 'left'}}>
              {hitpoints + '/' + armor + '/' + shields}
            </td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Barriers:</td>
            <td style={{width: '600px'}}>
              <div style={{display: 'inline-block', backgroundColor: '#C8C7CF', width: (600 / 6025) * barrier + 'px', height: '20px'}}></div>
            </td>
            <td style={{width: '150px', textAlign: 'left'}}>
              {barrier}
            </td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Healing:</td>
            <td><div style={{display: 'inline-block', backgroundColor: healing_color, width: (600 / 15) * healing + 'px', height: '20px'}}></div></td>
            <td style={{width: '150px', textAlign: 'left'}}>{healing_message}</td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Tank:</td>
            <td><div style={{display: 'inline-block', backgroundColor: tank_color, width: (600 / 7) * tank + 'px', height: '20px'}}></div></td>
            <td style={{width: '150px', textAlign: 'left'}}>{tank_message}</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
};

export default TeamStats;
