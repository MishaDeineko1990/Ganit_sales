const gulp = require('gulp')
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
let cleanCSS = require('gulp-clean-css')
let uglify =require('gulp-uglify')

const css_files = [
	'./src/tamp_styles/1_head.css',
	'./src/tamp_styles/2_top_menu.css',
	'./src/tamp_styles/3_top_banner.css',
	'./src/tamp_styles/4_menu_navigation.css',
	'./src/tamp_styles/5_different_parts.css',
	'./src/tamp_styles/6_small_content_box.css',
	'./src/tamp_styles/7_content_box.css',
	'./src/tamp_styles/8_overlay.css',
	'./src/tamp_styles/999_adaptation.css'	
]

const jsFiles = [
	'./src/tamp_script/1_start.js',
	'./src/tamp_script/2_work_from_languige.js',
	'./src/tamp_script/3_use_google_table.js',
	'./src/tamp_script/4_menu_navigation.js',
	'./src/tamp_script/5_overlay.js',
	'./src/tamp_script/999_finish.js'	
]


//task for styles css 
 function styles() {
 	return gulp.src(css_files)

 	.pipe(concat('style.css'))

 	.pipe(autoprefixer({
		browsers: ['last 2 versions'],
		cascade: false
	}))

	.pipe(cleanCSS({compatibility: 'ie8'}))

//вигрузка файлу
	.pipe(gulp.dest('./src/styles')) 

 }

 


//task for styles scripts 
function scripts(){

	return gulp.src(jsFiles)

 	.pipe(concat('js.js'))

 	.pipe(uglify({
 		toplevel: true
 	}))

//вигрузка файлу
	.pipe(gulp.dest('./src/script')) 
}

//task for get function styles
gulp.task('styles', styles);

//task for get function scripts
gulp.task('scripts', scripts);
