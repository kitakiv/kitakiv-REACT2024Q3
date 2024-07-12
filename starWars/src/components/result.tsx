import { SWCharacter } from '../interface/interface.ts';
interface Props {
  result: SWCharacter;
  keyProps: string;
}

function Result({ result, keyProps }: Props) {
  return (
    <div className="results-hero shadow" key={keyProps}>
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
    </div>
  );
}

export default Result;
