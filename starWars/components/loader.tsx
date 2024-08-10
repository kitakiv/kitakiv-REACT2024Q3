import Image from 'next/image';

function Loader() {
  return (
    <div className="pop-up-load" data-testId="Loading">
      <div className="loader"></div>
      <Image
        src="https://i.pinimg.com/originals/7c/8f/3f/7c8f3fe85bbc5c849106e95b46cff3ac.gif"
        alt="loading"
        width={350}
        height={350}
      />
    </div>
  );
}

export default Loader;
