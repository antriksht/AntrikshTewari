# AntrikshTewari

This project is built with Vite and Express. To deploy the static site on Netlify you should build the project and point the Netlify "publish directory" to `dist/public`.

```
netlify build command: npm run build
netlify publish directory: dist/public
```

The `_redirects` file in `client/public/` ensures single-page application routing works on Netlify.
