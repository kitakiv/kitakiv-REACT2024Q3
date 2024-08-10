import { Links, Meta, Outlet, Scripts } from '@remix-run/react';
import '../styles/index.scss';

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <div id="root">
          <Outlet />
        </div>

        <Scripts />
      </body>
    </html>
  );
}
