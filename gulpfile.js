var gulp = require('gulp'),
	buffer = require('vinyl-buffer'),
	source = require('vinyl-source-stream'),
	webserver = require('gulp-webserver'),
	livereload = require('gulp-livereload'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	minifyCSS = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	browserify=require('browserify'),
	stringify = require('stringify'),
	notify = require('gulp-notify'),
	gutil = require('gulp-util'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	ngAnnotate = require('gulp-ng-annotate'),
	debowerify = require('debowerify'),
	clean = require('gulp-rimraf'),
	watchify = require('watchify'),
	assign = require('lodash.assign');

function beep(){
	var exec = require('child_process').exec;
	exec('canberra-gtk-play --file=/usr/share/sounds/ubuntu/notifications/Amsterdam.ogg');
}
var onError = function(err) {
	beep();
	console.log(err.toString());
}

var config = {
	paths:{
		devFiles: ['./src/app.js','./src/app.css'],
		src: './src',
		dist: './dist',
		portDefault: 3000,
		portTest: 8081
	},
	styles: {
		main: './src/app.styl',
		output: './dist',
		watch: './src/**/**/**/*.styl',
		fonts:{
			main: './src/fonts/*',
			output: './dist/fonts/'
		}
	},
	html: {
		main: './src/index.html',
		output: './dist'
	},
	scripts:{
		main: './src/index.js',
		output: './dist',
		watch: ['./src/**/**/**/*.js','./src/**/**/**/*.html']
	},
	images: {
		main: ['./src/img/**/*.jpg','./src/img/**/*.png'],
		output: './dist/img',
		watch: ['./src/img/**/*.jpg','./src/img/**/*.png']
	},
	jsonTest:{
		main: './src/json/*.json',
		output: './src/json/'
	}
}

var env = process.env.NODE_ENV || 'development';
livereload({ start: true });

gulp.task('server', function(){
	return gulp
		.src(env === 'production' ? config.paths.dist : config.paths.src)
		.pipe(webserver({
			host: '0.0.0.0',
			port: (env === 'production' ? config.paths.portTest : config.paths.portDefault)
		}))
})

gulp.task('clean', function(){
	return gulp
			.src(env === 'production' ? config.paths.dist : config.paths.devFiles, {read: false})
			.pipe(clean(-{force: true}))
})

gulp.task('css', function(){
	return gulp
		.src(config.styles.main)
		.pipe(stylus({
			use: nib(),
			'include css':true
		}))
		.on('error', function (err) {
			onError(err)
			this.emit("end");
		})
		.pipe(env === 'production' ? minifyCSS() : gutil.noop())
		.pipe(env === 'production' ? gulp.dest(config.styles.output) : gulp.dest(config.paths.src))
		//.pipe(notify({ message: 'CSS task complete' }))
		.pipe(livereload());
});




var js_opts = assign(
	{},
	watchify.args,
	{
		entries:config.scripts.main,
		transform: [stringify({
			extensions: ['.html'], minify: true
		}), debowerify],
		debug:true
	}
);
var js = watchify(browserify(js_opts));

gulp.task('js', bundle);
js.on('update', bundle);

function bundle() {
	return js.bundle()
	// log errors if they happen
	.on('error', function (err) {
		onError(err)
		this.emit("end");
	})
	.pipe(source('app.js'))
	// optional, remove if you don't need to buffer file contents
	.pipe(buffer())
	.pipe(env === 'production' ? ngAnnotate() : gutil.noop())
	.pipe(env === 'production' ? uglify() : gutil.noop())
	.pipe(env === 'production' ? gulp.dest(config.scripts.output) : gulp.dest(config.paths.src))
	.pipe(livereload())
	.pipe(gulp.dest(config.scripts.output))
}

gulp.task('html', function(){
	return gulp
		.src(config.html.main)
		.pipe(gulp.dest(config.html.output))
});

gulp.task('fonts', function(){
	return gulp
		.src(config.styles.fonts.main)
		.pipe(gulp.dest(config.styles.fonts.output))
});

gulp.task('img', function(){
	return gulp
		.src(config.images.main)
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest(config.images.output))
});
gulp.task('jsonTest', function(){
	return gulp
		.src(config.jsonTest.main)
		.pipe(gulp.dest(config.jsonTest.output))
});

gulp.task('watch', function(){
	livereload.listen();
	gulp.watch(config.styles.watch, ['css']);
	gulp.watch(config.images.watch, ['img']);
});

gulp.task('default',['clean','server','watch'], function(){
	gulp
		.start(env === 'production' ? ['html','fonts','img','css','js'] : ['css','js','jsonTest']);
});