import Image from 'next/legacy/image';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <Image
        src="https://media0.giphy.com/media/l0Iy0z5m3FN9T6HuM/source.gif"
        alt="404"
      />
    </div>
  );
}

export default NotFound;
