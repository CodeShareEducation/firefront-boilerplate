'use strict';

/***************
 ** Dev tasks **
 ***************/
require('./tasks/dev/clean.js');
require('./tasks/dev/stylus.js');
require('./tasks/dev/js.js');
require('./tasks/dev/jade.js');
require('./tasks/dev/jade-watch.js');
require('./tasks/dev/imagecopy.js');
require('./tasks/dev/serve.js');

/****************
 ** Prod tasks **
 ****************/
require('./tasks/prod/cleandist.js');
require('./tasks/prod/stylusdist.js');
require('./tasks/prod/jsdist.js');
require('./tasks/prod/jadedist.js');
require('./tasks/prod/imagemin.js');
require('./tasks/prod/build.js');

/******************
 ** Common tasks **
 ******************/
require('./tasks/lint.js');
require('./tasks/default.js');
