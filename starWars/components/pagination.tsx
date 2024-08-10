import { Link } from '@remix-run/react';
import { SWApiResponse } from '../interface/interface';

const Pagination = ({
  result,
  page,
  search,
  detail,
}: {
  result: SWApiResponse;
  page: string;
  search: string;
  detail?: string;
}) => {
  return (
    <div className="pagination" title="Pagination">
      {result.previous !== null && detail !== undefined && (
        <Link
          className="link-page"
          to={`/?search=${search}&page=${(result.previous as string).split('page=')[1]}&detail=${detail}`}
          key={(result.previous as string).split('page=')[1]}
        >
          {(result.previous as string).split('page=')[1]}
        </Link>
      )}
      {result.previous !== null && detail === undefined && (
        <Link
          className="link-page"
          to={`/?search=${search}&page=${(result.previous as string).split('page=')[1]}`}
          key={(result.previous as string).split('page=')[1]}
        >
          {(result.previous as string).split('page=')[1]}
        </Link>
      )}
      <div className="link-page link-page-active">{page}</div>
      {result.next !== null && detail !== undefined && (
        <Link
          className="link-page"
          to={`/?search=${search}&page=${(result.next as string).split('page=')[1]}&detail=${detail}`}
          key={(result.next as string).split('page=')[1]}
        >
          {(result.next as string).split('page=')[1]}
        </Link>
      )}
      {result.next !== null && detail === undefined && (
        <Link
          className="link-page"
          to={`/?search=${search}&page=${(result.next as string).split('page=')[1]}`}
          key={(result.next as string).split('page=')[1]}
        >
          {(result.next as string).split('page=')[1]}
        </Link>
      )}
    </div>
  );
};

export default Pagination;
