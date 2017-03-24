import React from 'react';
import '../styles/HeroButton.css';

const HeroButton = ({hero, roster, clickAction, hoverAction, hoverExitAction}) => {
  let selected_class = roster.findIndex((roster_hero) => hero.id === roster_hero.id) !== -1 ? 'selected' : 'unselected';
  return (
    <div className={'hero-button'} onClick={clickAction} onMouseOver={hoverAction} onMouseLeave={hoverExitAction} >
      <div className={'clipping-mask ' + selected_class}>
        <div className={'hero-image'} style={{backgroundImage: "url('assets/" + hero.portrait + "')"}}></div>
      </div>
      <span className={'hero-portrait-label'}>{hero.name}</span>
    </div>
  );
};

export default HeroButton;
