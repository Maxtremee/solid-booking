import { createHandler, StartServer } from "@solidjs/start/server";
import { MetaProvider } from "@solidjs/meta";

export default createHandler(() => (
  <StartServer
    document={({ children, scripts, assets }) => (
      <MetaProvider>
        <html lang="en">
          <head>
            <meta charset="utf-8" />
            <meta
              content="width=device-width, initial-scale=1"
              name="viewport"
            />
            <link href="/favicon.ico" rel="icon" />
            {assets}
          </head>
          <body>
            <div id="app">{children}</div>
            {scripts}
          </body>
        </html>
      </MetaProvider>
    )}
  />
));
