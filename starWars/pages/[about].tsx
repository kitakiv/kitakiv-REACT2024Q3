import { SWCharacter } from '../interface/interface';
import { useLocalStorage } from 'usehooks-ts';

export default function SearchPage({ data }: { data: SWCharacter }) {
  const [favorites, setFavorites] = useLocalStorage('search', '');
  console.log(data);
  console.log(favorites);
  return <h1>{data.name}</h1>;
}

export async function getStaticProps({
  params,
}: {
  params: { about: string };
}) {
  const res = await fetch(`https://swapi.dev/api/people/${params.about}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://swapi.dev/api/people/`);
  const data = await res.json();

  return {
    paths: Array.from({ length: data.count }, (v, k) => data.count - k).map(
      (res) => {
        return { params: { about: res.toString() } };
      }
    ),
    fallback: false,
  };
}
