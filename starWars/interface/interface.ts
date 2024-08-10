export interface SWApiResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: SWCharacter[];
}

export interface SWCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface SWCharacterWithFilms {
  count: number;
  next: null | string;
  previous: null | string;
  results: SWFilm[];
}

export interface SWFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface DataInitial {
  ids: string[];
  entities: { [key: string]: DetailsCharacter };
}

export interface DetailsCharacter {
  id: string;
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  films: string[];
  url: string;
  created: string;
  edited: string;
}
