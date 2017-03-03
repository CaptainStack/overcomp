import React from 'react';
import '../styles/HeroSlot.css';

const HeroSlot = ({hero, clickAction}) => {
  let filled_class = hero.name !== "Empty" ? 'selected' : 'unselected';
  let portrait = hero.portrait ? <img src={'assets/' + hero.portrait} alt='portrait'/> : null;
  return (
    <div className={'hero-slot'} onClick={clickAction}>
      <div className={'slot-portrait ' + filled_class}>
        {portrait}
      </div>
      <h3>{hero.name}</h3>
    </div>
  );
};

export default HeroSlot;
