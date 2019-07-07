//Подключаем модули галпа
const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();

//Порядок подключения css файлов
const cssFiles = [
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
//Порядок подключения js файлов
const jsFiles = [
	'./src/tamp_script/1_start.js',
	'./src/tamp_script/2_work_from_languige.js',
	'./src/tamp_script/3_use_google_table.js',
	'./src/tamp_script/4_menu_navigation.js',
	'./src/tamp_script/5_overlay.js',
	'./src/tamp_script/999_finish.js'	
]

//Таск на стили CSS
function styles() {
   //Шаблон для поиска файлов CSS
   //Всей файлы по шаблону './src/css/**/*.css'
   return gulp.src(cssFiles)
   //Объединение файлов в один
   .pipe(concat('style.css'))
   //Добавить префиксы
   .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
   }))
   //Минификация CSS
   .pipe(cleanCSS({
      level: 2
   }))
   //Выходная папка для стилей
   .pipe(gulp.dest('./src/styles'))
   .pipe(browserSync.stream());
}

//Таск на скрипты JS
function scripts() {
   //Шаблон для поиска файлов JS
   //Всей файлы по шаблону './src/js/**/*.js'
   return gulp.src(jsFiles)
   //Объединение файлов в один
   .pipe(concat('script.js'))
   //Минификация JS
   .pipe(uglify({
      toplevel: true
   }))
   //Выходная папка для скриптов
   .pipe(gulp.dest('./src/script'))
   .pipe(browserSync.stream());
}

//Удалить всё в указанной папке
function clean() {
   return del(['busket/*'])
}

//Просматривать файлы
function watch() {
   browserSync.init({
      server: {
          baseDir: "./"
      }
  });

  //Следить за CSS файлами
  gulp.watch('./src/tamp_styles/*.css', styles)
  //Следить за JS файлами
  gulp.watch('./src/tamp_script/*.js', scripts)
  //При изменении HTML запустить синхронизацию
  gulp.watch("./*.html").on('change', browserSync.reload);


}

//Таск вызывающий функцию styles
gulp.task('styles', styles);
//Таск вызывающий функцию scripts
gulp.task('scripts', scripts);
//Таск для очистки папки build
gulp.task('del', clean);
//Таск для отслеживания изменений
gulp.task('watch', watch);
//Таск для удаления файлов в папке build и запуск styles и scripts
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
//Таск запускает таск build и watch последовательно
gulp.task('dev', gulp.series('build','watch'));