Seed project with Gulp, Sass, Compass, Browserify and Component Structure
============

Inspired by this [Viget blog post](http://viget.com/extend/gulp-browserify-starter-faq).

Includes the follwing tools, tasks, and workflows:

- Browserify (with browserify-shim)
- Compass
- LiveReload
- Static Server
- Image optimization
- Error Notifications in Notification Center

If you've never used Node or npm before, you'll need to install Node.
If you use homebrew, do:
```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install Gulp Globally
Gulp must be installed globally in order to use the command line tools. *You may need to use `sudo`*
```
npm install -g gulp
```

### Install Compass (if you haven't already)
The gulp-compass module relies on Compass already being installed on your system.
```
gem update --system
gem install compass
```
### Install npm dependencies
```
npm install
```
This runs through all dependencies listed in `package.json` and downloads them
to a `node_modules` folder in your project directory.

### Run gulp.
```
gulp
```

This will create and run the task defined in `gulpfile.js`.