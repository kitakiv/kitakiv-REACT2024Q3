import { SWCharacter } from '../../interface/interface';
import NoResults from '../../components/noResults';
import { Link } from '@remix-run/react';

function DetailsPage({
  details,
  filmsResult,
  page,
  search,
  detail,
}: {
  details: SWCharacter | null;
  filmsResult: { [key: string]: string };
  page: string;
  search: string;
  detail: string;
}) {
  return (
    <>
      {details ? (
        <div className="details-page">
          <div className="details-header">
            <h1>{details.name}</h1>
            <img
              className="details-img"
              src={`https://starwars-visualguide.com/assets/img/characters/${detail}.jpg`}
              alt={details.name}
            />
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
            to={`/?search=${search}&page=${page}`}
            className="cross"
            defaultValue="back"
          ></Link>
        </div>
      ) : (
        <NoResults />
      )}
    </>
  );
}

export default DetailsPage;
