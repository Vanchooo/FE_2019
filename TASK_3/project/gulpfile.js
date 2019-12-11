var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps");

var browserSync = require("browser-sync").create();


// Put this after including our dependencies
var paths = {
    styles: {
        // By using styles/**/*.sass we're telling gulp to check all folders for any sass file
        src: "styles/*.scss",
        // Compiled files will end up in whichever folder it's found in (partials are not compiled)
        dest: "build/styles"
    }
};

function scss() {
    // Where should gulp look for the sass files?
    // My .sass files are stored in the styles folder
    // (If you want to use scss files, simply look for *.scss files instead)
    return (
        gulp
            .src(paths.styles.src)

            // Initialize sourcemaps before compilation starts
            .pipe(sourcemaps.init())
            // Use sass with the files found, and log any errors
            .pipe(sass())
            .on("error", sass.logError)
            // Use postcss with autoprefixer and compress the compiled file using cssnano
            .pipe(postcss([autoprefixer(), cssnano()]))
            // Now add/write the sourcemaps
            .pipe(sourcemaps.write())
            .pipe(gulp.dest("build/styles"))
            // Add browsersync stream pipe after compilation
            
            
            
            // What is the destination for the compiled file?
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(browserSync.stream())
    );
}
	
function reload() {
    browserSync.reload();
}
function watch() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    // gulp.watch takes in the location of the files to watch for changes
    // and the name of the function we want to run on change
    gulp.watch(paths.styles.src, scss)
    gulp.watch("./build/index.html", reload);
}

// Don't forget to expose the task!
exports.watch = watch;
exports.scss = scss;

exports.default = watch;