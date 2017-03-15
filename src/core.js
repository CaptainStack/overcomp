let empty_hero = id => { return {id: id, name: "Empty", hitpoints: 0, armor: 0, shields: 0, barrier: 0, healing: 0, tank: 0} }
export const INITIAL_STATE = [empty_hero(25), empty_hero(26), empty_hero(27), empty_hero(28), empty_hero(29), empty_hero(30)];

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
    state[hero_index] = empty_hero(hero_index + 25);
    return state;
  } else {
    return state;
  }
}
