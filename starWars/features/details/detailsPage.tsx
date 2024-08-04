import { SWCharacter } from '../../interface/interface';
import Link from 'next/link';
import React from 'react';

function DetailsPage({
  details,
  filmsResult,
  page,
  search,
}: {
  details: SWCharacter;
  filmsResult: { [key: string]: string };
  page: string;
  search: string;
}) {
  return (
    <>
      <div className="details-page">
        <div>
          <h1>{details.name}</h1>
          <div className="vader"></div>
        </div>
        <div>
          <h3>Details</h3>
          <ul>
            <li>Height: {details.height}</li>
            <li>Mass: {details.mass}</li>
            <li>Hair color: {details.hair_color}</li>
            <li>Skin color: {details.skin_color}</li>
            <li>Eye color: {details.eye_color}</li>
            <li>Birth year: {details.birth_year}</li>
            <li>Gender: {details.gender}</li>
          </ul>
        </div>
        <div className="films" id="films">
          <h3>Films</h3>
          <ul>
            {details.films.map((filmLink) => (
              <li key={filmLink}>{filmsResult[filmLink]}</li>
            ))}
          </ul>
        </div>
        <div></div>
        <Link
          href={`/?search=${search}&page=${page}`}
          className="cross"
          defaultValue="back"
        ></Link>
      </div>
    </>
  );
}

export default DetailsPage;
