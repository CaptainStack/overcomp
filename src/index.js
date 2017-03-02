import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

let state = {
  heroes: [{
    id: 1,
    name: "Genji",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "genji-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 2,
    name: "McCree",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "mccree-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 3,
    name: "Pharah",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "pharah-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 4,
    name: "Reaper",
    hitpoints: 250,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "reaper-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 5,
    name: "Soldier: 76",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "soldier-76-portrait.png",
    category: "offense",
    healing: 2,
    tank: 0
  },
  {
    id: 6,
    name: "Sombra",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "sombra-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 7,
    name: "Tracer",
    hitpoints: 150,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "tracer-portrait.png",
    category: "offense",
    healing: 0,
    tank: 0
  },
  {
    id: 8,
    name: "Bastion",
    hitpoints: 200,
    armor: 100,
    shields: 0,
    barrier: 0,
    portrait: "bastion-portrait.png",
    category: "defense",
    healing: 1,
    tank: 0
  },
  {
    id: 9,
    name: "Hanzo",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "hanzo-portrait.png",
    category: "defense",
    healing: 0,
    tank: 0
  },
  {
    id: 10,
    name: "Junkrat",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "junkrat-portrait.png",
    category: "defense",
    healing: 0,
    tank: 0
  },
  {
    id: 11,
    name: "Mei",
    hitpoints: 250,
    armor: 0,
    shields: 0,
    barrier: 500,
    portrait: "mei-portrait.png",
    category: "defense",
    healing: 1,
    tank: 0
  },
  {
    id: 12,
    name: "Torbjörn",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "torbjorn-portrait.png",
    category: "defense",
    healing: 0,
    tank: 0
  },
  {
    id: 13,
    name: "Widowmaker",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "widowmaker-portrait.png",
    category: "defense",
    healing: 0,
    tank: 0
  },
  {
    id: 14,
    name: "D.Va",
    hitpoints: 400,
    armor: 200,
    shields: 0,
    barrier: 1500,
    portrait: "d-va-portrait.png",
    category: "tank",
    healing: 0,
    tank: 2
  },
  {
    id: 15,
    name: "Orisa",
    hitpoints: 200,
    armor: 200,
    shields: 0,
    barrier: 900,
    portrait: "orisa-portrait.png",
    category: "tank",
    healing: 0,
    tank: 1
  },
  {
    id: 16,
    name: "Reinhardt",
    hitpoints: 300,
    armor: 200,
    shields: 0,
    barrier: 2000,
    portrait: "reinhardt-portrait.png",
    category: "tank",
    healing: 0,
    tank: 2
  },
  {
    id: 17,
    name: "Roadhog",
    hitpoints: 600,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "roadhog-portrait.png",
    category: "tank",
    healing: 1,
    tank: 1
  },
  {
    id: 18,
    name: "Winston",
    hitpoints: 400,
    armor: 100,
    shields: 0,
    barrier: 600,
    portrait: "winston-portrait.png",
    category: "tank",
    healing: 0,
    tank: 1
  },
  {
    id: 19,
    name: "Zarya",
    hitpoints: 200,
    armor: 0,
    shields: 200,
    barrier: 400,
    portrait: "zarya-portrait.png",
    category: "tank",
    healing: 0,
    tank: 1
  },
  {
    id: 20,
    name: "Ana",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "ana-portrait.png",
    category: "support",
    healing: 2,
    tank: 0
  },
  {
    id: 21,
    name: "Lúcio",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "lucio-portrait.png",
    category: "support",
    healing: 4,
    tank: 0
  },
  {
    id: 22,
    name: "Mercy",
    hitpoints: 200,
    armor: 0,
    shields: 0,
    barrier: 0,
    portrait: "mercy-portrait.png",
    category: "support",
    healing: 4,
    tank: 0
  },
  {
    id: 23,
    name: "Symmetra",
    hitpoints: 100,
    armor: 0,
    shields: 100,
    barrier: 1025,
    portrait: "symmetra-portrait.png",
    category: "support",
    healing: 0,
    tank: 0
  },
  {
    id: 24,
    name: "Zenyatta",
    hitpoints: 50,
    armor: 0,
    shields: 150,
    barrier: 0,
    portrait: "zenyatta-portrait.png",
    category: "support",
    healing: 2,
    tank: 0
  }],
  selected_heroes: [
    {id: 25, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 26, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 27, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 28, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 29, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 30, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0}
  ],
  buttonClick: hero_id => e => {
    let clicked_hero = state.heroes.find((hero) => hero.id === hero_id);
    let selected_index = state.selected_heroes.findIndex((hero) => hero.name === clicked_hero.name);
    if (selected_index < 0) {
      let empty_index = state.selected_heroes.findIndex((hero) => hero.name === "Empty");
      state.selected_heroes[empty_index] = clicked_hero;
    } else {
      state.selected_heroes[selected_index] = {id: selected_index + 25, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0};
    }
    ReactDOM.render(<App state={state}/>, document.getElementById('root'));
  },
  slotClick: slot_id => e => {
    let clicked_index = state.selected_heroes.findIndex((slot) => slot.id === slot_id);
    if (state.selected_heroes[clicked_index].name !== "Empty") {
      state.selected_heroes[clicked_index] = {id: clicked_index + 25, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0};
      ReactDOM.render(<App state={state}/>, document.getElementById('root'));
    }
  }
};

ReactDOM.render(<App state={state}/>, document.getElementById('root'));
