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

## Deploy
`npm run deploy`

does:

1. npm run build
2. git add dist -f
3. git commit -m "Update build"
4. git subtree push --prefix dist origin gh-pages

## Development
0. rename `.env_SAMPLE` to `.env` and insert firebase config vars
1. npm i
2. npm run dev
3. open http://localhost:8000


