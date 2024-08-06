import Image from 'next/legacy/image';
import React from 'react';

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page Not Found</h1>
      <Image src="/assets/svg/404.webp" alt="404" width={500} height={300} />
    </div>
  );
}

export default NotFound;
