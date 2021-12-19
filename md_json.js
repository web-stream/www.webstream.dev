// npm i md-to-json gulp-util
// https://github.com/PatternAtlas/md-to-json
let md2json = require('./md_to_json2');

var mdContent = `# Name
My name

# Attributes
- Color Vision
- Hair on Head

# MDCode
      My name __is__ md:
      - A
      - B
      - C

# End Tag
Text

# Empty
`

let json = md2json(mdContent);

console.log(json);

/*
  This is an EXAMPLE gulpfile.js
  You'll want to change it to match your project.
  Find plugins at https://npmjs.org/browse/keyword/gulpplugin
*/
/*
var gulp = require('gulp');
//var uglify = require('gulp-uglify');
// https://gist.github.com/Raynos/8313682

gulp.task('md2json_task', function() {
  return gulp.src('./static/md/docs.md')
    .pipe(md2json())
    .pipe(gulp.dest('.'));
})
*/
