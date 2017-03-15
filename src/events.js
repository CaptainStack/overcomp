import { heroes } from './heroes'
import { store, roster } from './index'

export const buttonClick = hero_id => e => {
  let clicked_hero = heroes.find((hero) => hero.id === hero_id);
  if (roster.indexOf(clicked_hero) === -1) {
    store.dispatch({ type: 'ADD_HERO_TO_ROSTER', hero: clicked_hero });
  } else {
    store.dispatch({ type: 'REMOVE_HERO_FROM_ROSTER', hero: clicked_hero });
  }
}

export const slotClick = slot_id => e => {
  let clicked_index = roster.findIndex((slot) => slot.id === slot_id);
  if (roster[clicked_index].name !== "Empty") {
    store.dispatch({ type: 'REMOVE_HERO_FROM_ROSTER', hero: roster[clicked_index] });
  }
}
