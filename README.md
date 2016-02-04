# FireFront Boilerplate  
> Modern front-end boilerplate using many cool features and technologies to aid in the development.  

## Stack
- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)
- [Stylus](http://stylus-lang.com/)
- [Kouto-Swiss](http://kouto-swiss.io/)
- [Rupture](http://jenius.github.io/rupture/)
- [Jeet](http://jeet.gs/)
- [Vendor prefixes](https://developer.mozilla.org/pt-BR/docs/Glossary/Vendor_Prefix)
- [Jade](http://jade-lang.com/)
- [Browser-Sync](https://www.browsersync.io/)
- CSS, JS, HTML and Image minify
- CSS and JS concat
- Linter for JS

## How to use
First, you'll need to install [NodeJS](http://nodejs.org) if you don't have it already,
then fork this repository, enter it and run:

```
npm install
```

Wait for the dependencies to install and enjoy a modern front-end workflow!!! xD

## Working with the boilerplate
You'll work only in the `src` directory. There you'll create all your `.jade`, `.styl`,
`.js` files and put your `images`.  

While you're developing just run:
```
gulp serve
```
This will create `.html`, `.css`, `.js` files and copy `images` to the `app` directory and watch for
changes when you're developing your app.  

When you finish your app, just run:
```
gulp build
```
or
```
gulp
```
This will create your final app with minified `.html` and `image` files, a minified `main.css`
file and a minified `main.js` file in `dist` directory.

## Changelog
Check the [CHANGELOG](https://github.com/CodeShareEducation/firefront-boilerplate/blob/master/CHANGELOG.md) file!

## Sample Page
In the `src` directory there's a sample page using `.jade` and `.styl`! You can use it for a starting
point or you can delete it and create your own files!!! **BE FREE!**  

**I wish that this boilerplate can help you in your daily tasks!!!**  

***If you want to help this project,*** **FORK** ***it and make a*** **PULL REQUEST!!!**
