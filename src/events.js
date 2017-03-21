import { heroes } from './heroes'
import { store } from './index'

export const buttonClick = hero_id => e => {
  let roster = store.getState().get('team');
  let clicked_hero = heroes.find((hero) => hero.id === hero_id);
  if (roster.indexOf(clicked_hero) === -1) {
    store.dispatch({ type: 'ADD_HERO_TO_ROSTER', hero: clicked_hero });
  } else {
    store.dispatch({ type: 'REMOVE_HERO_FROM_ROSTER', hero: clicked_hero });
  }
}

export const slotClick = slot_id => e => {
  let roster = store.getState().get('team');
  let clicked_index = roster.findIndex((slot) => slot.id === slot_id);
  if (roster.get(clicked_index).name !== "Empty") {
    store.dispatch({ type: 'REMOVE_HERO_FROM_ROSTER', hero: roster.get(clicked_index) });
  }
}
