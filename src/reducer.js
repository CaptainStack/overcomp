import {add_hero_to_roster, remove_hero_from_roster, 
        add_hover_hero, remove_hover_hero, update_mouse_position, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_HERO_TO_ROSTER':
      return add_hero_to_roster(state, action.hero);
    case 'REMOVE_HERO_FROM_ROSTER':
      return remove_hero_from_roster(state, action.hero);
    case 'ADD_HOVER_HERO':
      return add_hover_hero(state, action.hero);
    case 'REMOVE_HOVER_HERO':
      return remove_hover_hero(state);
    case 'UPDATE_MOUSE_POSITION':
      return update_mouse_position(state, action.event);
    default:
      return state;
  }
}
