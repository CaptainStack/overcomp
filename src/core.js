export const INITIAL_STATE = [
    {id: 25, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 26, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 27, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 28, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 29, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0},
    {id: 30, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0}];

export const add_hero_to_roster = (state, hero) => {
  let empty_index = state.findIndex((roster_hero) => roster_hero.name === "Empty");
  if (empty_index !== -1) {
    state[empty_index] = hero;
    return state;
  } else {
    return state;
  }
}

export const remove_hero_from_roster = (state, hero) => {
  let hero_index = state.findIndex((roster_hero) => roster_hero === hero);
  if (hero_index !== -1) {
    state[hero_index] = {id: hero_index + 25, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0};
    return state;
  } else {
    return state;
  }
}
