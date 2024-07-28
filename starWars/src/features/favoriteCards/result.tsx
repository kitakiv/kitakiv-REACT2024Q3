import { SWCharacter } from '../../interface/interface.ts';
import { useParams, Link } from 'react-router-dom';
import Checkbox from './checkbox.tsx';
import { useEffect, useState } from 'react';
interface Props {
  result: SWCharacter;
  keyProps: string;
  films: { [key: string]: string };
}

function Result({ result, keyProps, films }: Props) {
  const [resultFilms, setResultFilms] = useState<string[]>([]);
  const { search, page } = useParams();

  useEffect(() => {
    const filmsObj = films;
    const resultFilms: string[] = [];
    result.films.forEach((film: string) => {
      if (filmsObj[film]) {
        resultFilms.push(filmsObj[film]);
      }
    });

    setResultFilms(resultFilms);
  }, [films, result.films]);

  return (
    <div className="results-hero shadow">
      <Checkbox data={result} films={resultFilms} />
      <Link
        className="results-link"
        key={keyProps}
        to={`/search/${search}/page/${page}/detail/${keyProps.split('/')[keyProps.split('/').length - 2]}`}
      >
        <h3>{result.name}</h3>
        <div className="fighter" />
        <ul>
          <li>Height: {result.height}</li>
          <li>Mass: {result.mass}</li>
          <li>Hair color: {result.hair_color}</li>
          <li>Skin color: {result.skin_color}</li>
          <li>Eye color: {result.eye_color}</li>
          <li>Birth year: {result.birth_year}</li>
          <li>Gender: {result.gender}</li>
        </ul>
      </Link>
    </div>
  );
}

export default Result;
