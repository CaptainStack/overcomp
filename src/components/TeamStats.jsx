import React from 'react';
import '../styles/TeamStats.css';

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
    <div id={'team-stats'}>
      <h2>Team Stats</h2>
      <table>
        <tbody>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>HP/Armor/Shields:</td>
            <td style={{width: '50%'}}>
              <div style={{display: 'inline-block', 
                           backgroundColor: '#C8C7CF',
                           transition: '0.5s',
                           width: hitpoints / 3000 * 100  + '%', 
                           height: '20px'}}></div>
              <div style={{display: 'inline-block', 
                           backgroundColor: '#C6A544',
                           transition: '0.5s',
                           width: armor / 3000 * 100  + '%', 
                           height: '20px'}}></div>
              <div style={{display: 'inline-block', 
                           backgroundColor: '#2894B1',
                           transition: '0.5s',
                           width: shields / 3000 * 100  + '%', 
                           height: '20px'}}></div>
            </td>
            <td style={{width: '150px', textAlign: 'left'}}>
              {hitpoints + '/' + armor + '/' + shields}
            </td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Barriers:</td>
            <td style={{width: '50%'}}>
              <div style={{display: 'inline-block', 
                           backgroundColor: '#C8C7CF',
                           transition: '0.5s',
                           width: barrier / 6025 * 100 + '%', 
                           height: '20px'}}></div>
            </td>
            <td style={{width: '150px', textAlign: 'left'}}>
              {barrier}
            </td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Healing:</td>
            <td><div style={{display: 'inline-block', 
                             backgroundColor: healing_color, 
                             transition: '0.5s',
                             width: healing / 15 * 100  + '%', 
                             height: '20px'}}></div></td>
            <td style={{width: '150px', textAlign: 'left'}}>{healing_message}</td>
          </tr>
          <tr>
            <td style={{width: '100px', textAlign: 'right'}}>Tank:</td>
            <td><div style={{display: 'inline-block', 
                            backgroundColor: tank_color,
                            transition: '0.5s',
                            width: tank / 8 * 100  + '%', 
                            height: '20px'}}></div></td>
            <td style={{width: '150px', textAlign: 'left'}}>{tank_message}</td>
          </tr>
          </tbody>
      </table>
    </div>
  );
};

export default TeamStats;
