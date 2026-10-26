# x.abhijeetkakade.in

A tiny, static link page. No install or build step.

## Edit

- Update destinations and descriptions in `links.js`. Set a missing URL to `null`; the page will show it as “soon” instead of sending visitors to a fake profile.
- Edit the introduction and footer in `index.html`.
- Edit the visual style in `style.css`.

## Preview

From this directory, run `python -m http.server 8000`, then open `http://localhost:8000`.

## Cloudflare Pages

In Cloudflare, create a Pages project connected to the GitHub repository `abhijeetkakade1234/x`. Choose **None** as the framework preset, leave the build command empty, and set the output directory to `/` (repository root). Add the custom domain `x.abhijeetkakade.in` in the Pages project's Custom domains settings. Subsequent pushes to `main` will deploy automatically once Git integration is connected.
