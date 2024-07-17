import {
  useLoaderData,
  Link,
  useParams,
  useNavigation,
} from 'react-router-dom';
import { SWCharacter } from '../interface/interface';
import Loader from './loader';

function DetailsPage() {
  const { state } = useNavigation();
  const [data, films, homeworld, vehicles, starships] = useLoaderData() as [
    SWCharacter,
    string[],
    string,
    string[],
    string[],
  ];
  const { search, page } = useParams();

  return (
    <>
      {state === 'loading' && <Loader />}
      <div className="details-page">
        <div>
          <h1>{data.name}</h1>
          <img src="/logo.svg" alt="vader" className="vader" />
        </div>
        <div>
          <h3>Details</h3>
          <ul>
            <li>Height: {data.height}</li>
            <li>Mass: {data.mass}</li>
            <li>Hair color: {data.hair_color}</li>
            <li>Skin color: {data.skin_color}</li>
            <li>Eye color: {data.eye_color}</li>
            <li>Birth year: {data.birth_year}</li>
            <li>Gender: {data.gender}</li>
          </ul>
        </div>
        <div className="films" id="films">
          <h3>Films</h3>
          <ul>
            {...films.map((film) => (
              <>
                <li>{film}</li>
              </>
            ))}
          </ul>
        </div>
        <div>
          <h3>Homeworld</h3>
          <p>{homeworld}</p>
        </div>
        {vehicles.length > 0 && (
          <div className="vehicles">
            <h3>Vehicles</h3>
            <ul>
              {...vehicles.map((vehicle) => (
                <>
                  <li>{vehicle}</li>
                </>
              ))}
            </ul>
          </div>
        )}
        {starships.length > 0 && (
          <div className="starships">
            <h3>Starships</h3>
            <ul>
              {...starships.map((starship) => (
                <>
                  <li>{starship}</li>
                </>
              ))}
            </ul>
          </div>
        )}
        <Link
          to={`/search/${search}/page/${page}`}
          className="cross"
          defaultValue="back"
        ></Link>
      </div>
    </>
  );
}

export default DetailsPage;
