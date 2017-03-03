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

  if (healing === 0) { healing_message = 'No healer'; healing_color = 'indianred'; }
  else if (healing > 0 && healing < 4) { healing_message = 'Need more healing'; healing_color = 'indianred'; }
  else if (healing > 3 && healing < 6) { healing_message = 'Low healing'; healing_color = 'palegoldenrod'; }
  else { healing_color = 'darkseagreen'; healing_message = 'Good healing'; }

  if (tank === 0) { tank_message = 'No tank'; tank_color = 'indianred'; }
  else if (tank === 1) { tank_message = 'Need more tank'; tank_color = 'indianred'; }
  else if (tank < 3) { tank_message = 'Low tank'; tank_color = 'palegoldenrod'; }
  else { tank_color = 'darkseagreen'; tank_message = 'Good tank'; }

  return (
    <div className={'TeamStats'}>
      <h2>Team Stats</h2>
      <table>
        <colgroup>
          <col className='left-column'></col>
          <col className='center-column'></col>
          <col className='right-column'></col>
        </colgroup>
        <tbody>
          <tr>
            <td>HP/Armor/Shields:</td>
            <td>
              <div className='stat-bar' style={{backgroundColor: '#C8C7CF', width: hitpoints / 3000 * 100  + '%'}}></div>
              <div className='stat-bar' style={{backgroundColor: '#C6A544', width: armor / 3000 * 100  + '%'}}></div>
              <div className='stat-bar' style={{backgroundColor: '#2894B1', width: shields / 3000 * 100  + '%'}}></div>
            </td>
            <td>{hitpoints + '/' + armor + '/' + shields}</td>
          </tr>
          <tr>
            <td>Barriers:</td>
            <td><div className='stat-bar' style={{backgroundColor: '#C8C7CF', width: barrier / 6025 * 100 + '%'}}></div></td>
            <td>{barrier}</td>
          </tr>
          <tr>
            <td>Healing:</td>
            <td><div className='stat-bar' style={{backgroundColor: healing_color, width: healing / 15 * 100  + '%'}}></div></td>
            <td>{healing_message}</td>
          </tr>
          <tr>
            <td>Tank:</td>
            <td><div className='stat-bar' style={{backgroundColor: tank_color, width: tank / 8 * 100  + '%'}}></div></td>
            <td>{tank_message}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TeamStats;
