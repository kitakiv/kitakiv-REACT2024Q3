import Image from 'next/legacy/image';
import React from 'react';

function Loader() {
  console.log('loading');
  return (
    <div className="pop-up-load" data-testId="Loading">
      <div className="loader"></div>
      <Image
        src="/assets/svg/loading.gif"
        alt="loading"
        width={350}
        height={350}
      />
    </div>
  );
}

export default Loader;
