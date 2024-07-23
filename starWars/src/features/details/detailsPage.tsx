import { Link, useParams } from 'react-router-dom';
import { SWFilm } from '../../interface/interface';
import Loader from '../../components/loader';
import { useState, useEffect } from 'react';
import { useGetDetailsQuery, useGetFilmsQuery } from '../api/apiSlice';

function DetailsPage() {
  const [films, setFilms] = useState<{ [key: string]: string }>({});
  const [state, setState] = useState('loading');
  const { search, page, id } = useParams();
  const {
    data: details,
    isSuccess,
    isFetching: isFetchingDetails,
  } = useGetDetailsQuery(id || '1');

  const {
    data: filmsResult,
    isSuccess: isSuccessFilms,
    isFetching: isFetchingFilms,
  } = useGetFilmsQuery();

  useEffect(() => {
    if (isFetchingDetails || isFetchingFilms) {
      setState('loading');
    } else {
      setState('idle');
    }
    if (isSuccessFilms) {
      filmsResult.results.forEach((film: SWFilm) => {
        setFilms((prev) => ({ ...prev, [film.url]: film.title }));
      });
    }
  }, [isFetchingDetails, isFetchingFilms, isSuccessFilms, filmsResult]);

  return (
    <>
      {state === 'loading' && <Loader />}
      {isSuccess && state === 'idle' && (
        <div className="details-page">
          <div>
            <h1>{details.name}</h1>
            <img
              src="https://media4.giphy.com/media/SmYqlOh9GtnuAe4SwB/giphy.gif?cid=6c09b952xlb8fg6fyamxsbe02ovtxdxelr36om2xti5w0auf&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s"
              alt="vader"
              className="vader"
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
              {details.films.map((film) => (
                <li key={film}>{films[film]}</li>
              ))}
            </ul>
          </div>
          <div></div>
          <Link
            to={`/search/${search}/page/${page}`}
            className="cross"
            defaultValue="back"
          ></Link>
        </div>
      )}
    </>
  );
}

export default DetailsPage;
