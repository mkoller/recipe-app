# Recipe App 

- This Vue app shows a list view which includes all the recipess 
- Has a recipe detail view to display each recipe
- In the detail view, ingredients with a matching ingredientId listed in the specials response should also show the special title, type and text under the ingredient name
- Has a view to add new specials

Running the App

This App should be running parallel to the json server and uses the api `http://localhost:3001`

After cloning/downloading the app cd into and run the following

```sh
$ npm i
$ npm run serve 
$ npm run build
```

serve starts the development server
build compiles the app into the dist folder
You can use https://www.npmjs.com/package/http-server to run the production build after installing it globally

```sh
$ cd dist
$ http-server -o
```

### Tech
Vue, Vue-cli, Vue Router, Vuex, Axios




# recipe-app
