import React from 'react';

const HeroButton = ({hero, roster, clickAction}) => {
  let selected_class = roster.findIndex((roster_hero) => hero.id === roster_hero.id) !== -1 ? 'selected' : 'unselected';
  return (
    /*<div className={'hero-button ' + selected_class} onClick={clickAction}>
      <img src={'assets/' + hero.portrait} alt='portrait'/>
      <h3>{hero.name}</h3>
    </div>*/
    <div className={'hero-button'} onClick={clickAction}>
      <div className={'clipping-mask ' + selected_class}>
        <div className={'hero-image'} style={{backgroundImage: "url('assets/" + hero.portrait + "')"}}></div>
      </div>
      <span className={'hero-portrait-label'}>{hero.name}</span>
    </div>
  );
};

export default HeroButton;
