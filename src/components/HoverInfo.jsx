import React from 'react';
import '../styles/HoverInfo.css';

const HoverInfo = ({hero, left, top}) => {
  return (
    <div className='hover-info' style={{ left: `${left + 5}px`, top: `${top - 140}px`}}>
      <table>
        <tr><th colSpan='2'>{hero.name}</th></tr>
        <tr><td>Hitpoints:</td><td>{hero.hitpoints}</td></tr>
        <tr><td>Armor:</td><td>{hero.armor}</td></tr>
        <tr><td>Shields:</td><td>{hero.shields}</td></tr>
        <tr><td>Barriers:</td><td>{hero.barrier}</td></tr>
      </table>
    </div>
  );
};

export default HoverInfo;
