import { SWCharacter } from '../interface/interface.ts';
import { useParams, Link } from 'react-router-dom';
import { useLocalStorage } from 'usehooks-ts';
interface Props {
  result: SWCharacter;
  keyProps: string;
}

function Result({ result, keyProps }: Props) {
  const [template] = useLocalStorage('background', 'dark');
  const { search, page } = useParams();

  return (
    <Link
      className="results-hero shadow"
      key={keyProps}
      to={`/search/${search}/page/${page}/detail/${keyProps.split('/')[keyProps.split('/').length - 2]}`}
    >
      <h3>{result.name}</h3>
      {template === 'light' ? (
        <img
          src="https://media.tenor.com/AWll36wY22YAAAAj/flying-bo-katan-kryze.gif"
          alt="vader"
          className="fighter"
        />
      ) : (
        <img
          src="https://www.allsmileys.com/files/sweetim-fantasy/6455.gif"
          alt="vader"
          className="fighter"
        />
      )}
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
  );
}

export default Result;
