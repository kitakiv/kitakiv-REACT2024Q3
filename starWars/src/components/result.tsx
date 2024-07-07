import React from 'react';
import { SWCharacter, SWFilm } from '../interface/interface.ts';
interface Props {
  result: SWCharacter;
  filmRes: SWFilm[] | null;
}

class Result extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      'https://swapi.dev/api/films/1/': this.props.filmRes
        ? this.props.filmRes[0].title
        : '1',
      'https://swapi.dev/api/films/2/': this.props.filmRes
        ? this.props.filmRes[1].title
        : '2',
      'https://swapi.dev/api/films/3/': this.props.filmRes
        ? this.props.filmRes[2].title
        : '3',
      'https://swapi.dev/api/films/4/': this.props.filmRes
        ? this.props.filmRes[3].title
        : '4',
      'https://swapi.dev/api/films/5/': this.props.filmRes
        ? this.props.filmRes[4].title
        : '5',
      'https://swapi.dev/api/films/6/': this.props.filmRes
        ? this.props.filmRes[5].title
        : '6',
    };
  }
  render() {
    return (
      <div className="results-hero shadow">
        <h3>{this.props.result.name}</h3>
        <ul>
          <li>Height: {this.props.result.height}</li>
          <li>Mass: {this.props.result.mass}</li>
          <li>Hair color: {this.props.result.hair_color}</li>
          <li>Skin color: {this.props.result.skin_color}</li>
          <li>Eye color: {this.props.result.eye_color}</li>
          <li>Birth year: {this.props.result.birth_year}</li>
          <li>Gender: {this.props.result.gender}</li>
        </ul>
        <h4>Films</h4>
        <ul>
          {...this.props.result.films.map((elem) => {
            const key = elem;
            return <li>{this.state[key as keyof typeof this.state]}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Result;
