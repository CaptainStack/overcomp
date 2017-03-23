import { List, Map } from 'immutable';

let empty_hero = id => { return {id: id, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0} }
export const INITIAL_STATE = Map({
  team: List([empty_hero(25), empty_hero(26), empty_hero(27), empty_hero(28), empty_hero(29), empty_hero(30)]),
  hover_hero: null,
  mouse: Map({x: null, y: null})
});

export const add_hero_to_roster = (state, hero) => {
  let empty_index = state.get('team').findIndex((roster_hero) => roster_hero.name === "Empty");
  if (empty_index !== -1) {
    return state.set('team', state.get('team').set(empty_index, hero));
  } else {
    return state;
  }
}

export const remove_hero_from_roster = (state, hero) => {
  let hero_index = state.get('team').findIndex((roster_hero) => roster_hero === hero);
  if (hero_index !== -1) {
    return state.set('team', state.get('team').set(hero_index, empty_hero(hero_index + 25)));
  } else {
    return state;
  }
}

export const add_hover_hero = (state, hero) => {
  return state.set('hover_hero', hero);
}

export const remove_hover_hero = (state) => {
  return state.set('hover_hero', null);
}

export const update_mouse_position = (state, event) => {
  let mouse = state.get('mouse');
  let updateX = mouse.set('x', event.pageX);
  let updateY = updateX.set('y', event.pageY);
  return state.set('mouse', updateY);
}
