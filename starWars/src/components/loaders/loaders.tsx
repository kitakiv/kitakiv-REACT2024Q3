import { Params, redirect } from 'react-router-dom';
import { SWCharacter, SWFilm } from '../../interface/interface';

export async function loaderResult({ params }: { params: Params }) {
  const searchName = params.search === 'default' ? '' : params.search;
  try {
    const res = await fetch(
      `https://swapi.dev/api/people/?search=${searchName}&page=${params.page}`
    );
    const data = await res.json();
    return [data];
  } catch (error) {
    return redirect('/no-results');
  }
}

export async function loaderDetails({ params }: { params: Params }) {
  try {
    const res = await fetch(`https://swapi.dev/api/people/${params.id}`);
    const data = (await res.json()) as SWCharacter;
    const films = data.films;
    const filmsRes = await Promise.all(
      films.map(async (film: string) => {
        const res = await fetch(film);
        const data = (await res.json()) as SWFilm;
        return data.title;
      })
    );
    const vehicles = data.vehicles;
    const vehiclesRes = await Promise.all(
      vehicles.map(async (vehicle: string) => {
        const res = await fetch(vehicle);
        const data = (await res.json()) as { name: string };
        return data.name;
      })
    );
    const starships = data.starships;
    const starshipsRes = await Promise.all(
      starships.map(async (starship: string) => {
        const res = await fetch(starship);
        const data = (await res.json()) as { name: string };
        return data.name;
      })
    );
    const homeworld = await fetch(data.homeworld);
    const homeworldData = (await homeworld.json()) as { name: string };
    console.log(filmsRes);
    return [data, filmsRes, homeworldData.name, vehiclesRes, starshipsRes];
  } catch (error) {
    throw new Error('Something went wrong. Please try again later.');
  }
}
