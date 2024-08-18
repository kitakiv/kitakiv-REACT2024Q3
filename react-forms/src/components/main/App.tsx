import { useAppSelector } from '../../app/hooks';
import BlockResult from './components/blockResult';

function App() {
  const { entities, ids } = useAppSelector((state) => state.formResults);

  return (
    <div>
      <ul className="list">
        {ids
          .map((id) => (
            <li key={id}>
              <BlockResult id={id} data={entities[id]} />
            </li>
          ))
          .reverse()}
      </ul>
    </div>
  );
}

export default App;
