TODO:
1. Auth
  - Login with email/password?
  - Logout
2. Attach products to users
3. Public/Private products
4. Only edit when auth'd 
5. index page should split between your products and other products (yours at top)
6. products should show who created them 
7. after creating a product, should have link to view product or view 
8. bookmark products
9. leave comments on products

user {
  displayName
  email
}

product {
  id: string
  created_by: user_id
  created_at: datetime
  details {
    thc_percentage: number
    strain: string
  }
}

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


Might need to do this
https://gist.github.com/tduarte/eac064b4778711b116bb827f8c9bef7b
git checkout master # you can avoid this line if you are in master...
git subtree split --prefix dist -b gh-pages # create a local gh-pages branch containing the splitted output folder
git push -f origin gh-pages:gh-pages # force the push of the gh-pages branch to the remote gh-pages branch at origin
git branch -D gh-pages # delete the local gh-pages because you will need it: ref

## Development
0. rename `.env_SAMPLE` to `.env` and insert firebase config vars
1. npm i
2. npm run dev
3. open http://localhost:8000


