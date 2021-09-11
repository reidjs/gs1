QR Code Reader
  - QR -> URL
QR Code Generator
  - URL -> QR
Sticker generator
  - Form -> JSON
Product display (index page)
  - JSON -> HTML
Product detail (show page)
  - JSON -> HTML


Don't really need vuex, all data should interface directly with firebase

## deploy
npm run build

git add dist && git commit -m "dist subtree commit"

git subtree push --prefix dist origin gh-pages

## Development
`npm i`

`npm run dev`

`localhost:8000`

rename `.env_SAMPLE` to `.env` and insert firebase config

