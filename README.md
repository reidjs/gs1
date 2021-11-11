# About
Entry for GS1 Trace & Trust in CBD Hackathon https://gs1us-hemphack.bemyapp.com/

## Deploy
`npm run deploy`

does:

1. npm run build
2. git add dist -f
3. git commit -m "Update build"
4. git subtree push --prefix dist origin gh-pages


Might need to do this
```
https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b
git checkout master # you can avoid this line if you are in master...
git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref
```
Also, added
base: "/gs1/"
to vite.config.js 

## Development
0. rename `.env_SAMPLE` to `.env` and insert firebase config vars
1. npm i
2. npm run dev
3. open http://localhost:8000


