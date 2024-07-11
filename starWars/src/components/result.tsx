import React from 'react';
import { SWCharacter, SWFilm } from '../interface/interface.ts';
interface Props {
  result: SWCharacter;
  filmRes: SWFilm[] | null;
}

const Result: React.FC<Props> = ({ result, filmRes }) => {
  const getFilmTitle = (filmUrl: string) => {
    return filmRes?.find((film) => film.url === filmUrl)?.title || 'Unknown';
  };

  return (
    <div className="results-hero shadow">
      <h3>{result.name}</h3>
      <ul>
        <li>Height: {result.height}</li>
        <li>Mass: {result.mass}</li>
        <li>Hair color: {result.hair_color}</li>
        <li>Skin color: {result.skin_color}</li>
        <li>Eye color: {result.eye_color}</li>
        <li>Birth year: {result.birth_year}</li>
        <li>Gender: {result.gender}</li>
      </ul>
      <h4>Films</h4>
      <ul>
        {result.films.map((filmUrl) => (
          <li key={filmUrl}>{getFilmTitle(filmUrl)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Result;
