import { Link } from 'react-router-dom';
import { SWApiResponse } from '../interface/interface';

const Pagination = ({
  result,
  page,
  search,
  id,
}: {
  result: SWApiResponse;
  page: string;
  search: string;
  id?: string;
}) => {
  return (
    <div className="pagination" title="Pagination">
      {result.previous !== null && id !== undefined && (
        <Link
          className="link-page"
          to={`/search/${search}/page/${(result.previous as string).split('page=')[1]}/detail/${id}`}
        >
          {(result.previous as string).split('page=')[1]}
        </Link>
      )}
      {result.previous !== null && id === undefined && (
        <Link
          className="link-page"
          to={`/search/${search}/page/${(result.previous as string).split('page=')[1]}`}
        >
          {(result.previous as string).split('page=')[1]}
        </Link>
      )}
      <div className="link-page link-page-active">{page}</div>
      {result.next !== null && id !== undefined && (
        <Link
          className="link-page"
          to={`/search/${search}/page/${(result.next as string).split('page=')[1]}/detail/${id}`}
        >
          {(result.next as string).split('page=')[1]}
        </Link>
      )}
      {result.next !== null && id === undefined && (
        <Link
          className="link-page"
          to={`/search/${search}/page/${(result.next as string).split('page=')[1]}`}
        >
          {(result.next as string).split('page=')[1]}
        </Link>
      )}
    </div>
  );
};

export default Pagination;
