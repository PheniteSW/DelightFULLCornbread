# DelightFULL Cornbread

A simple, static ad site for DelightFULL Cornbread, built to show a potential
client what a finished site could look like.

## What's here

- `index.html`, `style.css`, `script.js`, no build step, no framework.
- Content pulled from the flyer: flavors, pan sizes and prices, and contact info.
- An interactive oven: click the oven icon in the "The Oven" section to zoom in
  on an animated baking scene (steam, glow). Pure CSS and JS, no extra
  libraries.
- `images/` is empty on purpose. Drop in real photos named
  `sweet-potato.jpg`, `blueberry.jpg`, `strawberry.jpg`, `banana.jpg` and the
  site swaps them in automatically, over the placeholder art.

## Running it locally

No build tools needed. Just open `index.html` in a browser, or serve the
folder so relative paths behave the same as they will online:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Hosting it for free (GitHub Pages)

This is a fully static site, so GitHub Pages is enough, no server needed:

1. Push this repo to GitHub (already done if you're reading this from there).
2. In the repo, go to **Settings > Pages**.
3. Under "Build and deployment", set **Source** to "Deploy from a branch",
   pick the branch this is on, and folder `/ (root)`.
4. Save. GitHub gives you a URL like `https://<username>.github.io/<repo>/`
   within a minute or two.

That link is what you send to the client.

## About the "zoom into the oven" idea

The zoom-in oven you see when you click it is a CSS/JS animation: it doesn't
need a server, a database, or a paid host. It runs entirely in the browser,
so GitHub Pages (free) hosts it fine.

Render (or a similar host) only becomes necessary once the site needs
something that runs on a server, for example:

- A Telegram bot that answers calls or messages.
- Taking customer orders and notifying you (a backend to store orders and
  send a text or email).
- Any kind of login, database, or payment processing.

So: keep this ad site on GitHub Pages for free. If a client wants an actual
ordering system or a bot, that's a separate, small backend service, and that
is when Render (or similar) is worth it.

If you want to go further with the oven than CSS animation (e.g. a real
3D oven you can rotate and drag), that's still doable as a static site with
a library like Three.js, no backend required either. It's a bigger lift
than a CSS animation, so worth doing only if a client specifically asks for
that "wow" factor.
