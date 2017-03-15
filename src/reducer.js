import {add_hero_to_roster, remove_hero_from_roster, INITIAL_STATE} from './core';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_HERO_TO_ROSTER':
      return add_hero_to_roster(state, action.hero);
    case 'REMOVE_HERO_FROM_ROSTER':
      return remove_hero_from_roster(state, action.hero);
    default:
      return state;
  }
}
