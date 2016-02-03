# FireFront Boilerplate  
> Modern front-end boilerplate using many cool features and technologies to aid in the development.  

## Stack
- NodeJS
- GulpJS
- Stylus
- Kouto-Swiss
- Rupture
- Jeet
- Vendor prefixes
- Jade
- CSS, JS, HTML and Image minify
- CSS and JS concat
- Linter for JS
- Browser-Sync

## How to use
First, you'll need to install [NodeJS](http://nodejs.org) if you don't have it already,
then fork this repository, enter it and run:

```
npm install
```

Wait for the dependencies to install and enjoy a modern front-end workflow!!! xD

## Working with the boilerplate
You'll work only in the `src` directory. There you'll create all your `.jade`, `.styl`,
`.js` files and put your `images`. You can run `gulp` task to create your final app in
`app` directory and watch for changes when you're developing your app.  

When you finish your app, just use the files in `app` directory for production!!!

## Gulp Tasks
All the tasks are in the `tasks` directory, here's the list of all of them:

- **Lint:** Linter for JS files, you can run it by the command:
```
gulp lint
```

- **Browser-Sync:** Watch files and reload browser when you save changes in your editor,
you can run it by the command:
```
gulp browser-sync
```

- **Stylus:** Create a minified `.css` file from your `.styl` files, you can run it by the command:
```
gulp stylus
```

- **Jade:** Create minified `.html` files from your `.jade` files, you can run it by the command:
```
gulp jade
```

- **JS:** Create a concatenated and minified `.js` file from your `.js` files, you can run it
by the command:
```
gulp js
```

- **Imagemin:** Minify all `.jpg`, `.png` and `.gif` images, you can run it by the command:
```
gulp imagemin
```

- **Watch:** Watch changes in files, you can run it by the command:
```
gulp watch
```

- **Default:** This command triggers all the above `tasks` at once, you can run it by the command:
```
gulp
```

## Sample Page
In the `src` directory there's a sample page using `.jade` and `.styl`! You can use it for a starting
point or you can delete it and create your own files!!! **BE FREE!**  

**I wish that this boilerplate can help you in your daily tasks!!!**  

***If you want to help this project,*** **FORK** ***it and make a*** **PULL REQUEST!!!**
