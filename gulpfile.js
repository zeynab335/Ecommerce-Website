
var gulp   = require('gulp'),             // import gulp
    concat = require('gulp-concat'),    // import gulp concat
    autoprefixer = require('gulp-autoprefixer'),  // prefix of css3
    sass   = require('gulp-sass'),
    pug   = require('gulp-pug'),
    watch = require('gulp-watch'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    minify = require('gulp-minify'),
    notify = require("gulp-notify"),
    zip = require('gulp-zip'),
    newer = require('gulp-newer');
// All tasks


// task of convert pug file to html 
gulp.task('convert_pug', function(){
    // get all files of pugs to html page
    return gulp.src('stages/html/*.pug')
        .pipe(pug(
            {pretty:true}
        ))
         // reload changes 
        .pipe(newer('stages/html/**/*.pug'))
        // concat files
        .pipe(concat('index.html'))
        .pipe(gulp.dest('dist/html'))
    
        // live loader to watch any change 
        .pipe(livereload());
});

// task of convert Categories pug file to html 
gulp.task('sales_polices_pages', function(){
    // get all files of pugs to html page
    return gulp.src('stages/html/pug/Sales_policy/*.pug')
        .pipe(pug(
            {pretty:true}
        ))
         // reload changes 
        .pipe(newer('stages/html/pug/Sales_policy/*.pug'))
        // concat files
        //.pipe(concat('Categories.html'))
        .pipe(gulp.dest('dist/html/Sales_policy')) 
        // notification of task

        .pipe(livereload());
});


// task of convert Categories pug file to html 
gulp.task('Categories_pages', function(){
    // get all files of pugs to html page
    return gulp.src('stages/html/pug/home-page/Header_Categories/*.pug')
        .pipe(pug(
            {pretty:true}
        ))
         // reload changes 
        .pipe(newer('stages/html/pug/home-page/Header_Categories/*.pug'))
        // concat files
        //.pipe(concat('Categories.html'))
        .pipe(gulp.dest('dist/html/All_Categories')) 
        // notification of task

        .pipe(livereload());
});


// task of admin pages convert pug file to html 
gulp.task('convert_Admin_pug', function(){
    // get all files of pugs to html page
    return gulp.src('stages/html/pug/Admin_Pages/**/*.pug')
        .pipe(pug(
            {pretty:true}
        ))
         // reload changes 
        .pipe(newer('stages/html/pug/Admin_Pages/**/*.pug'))
        // distination
        .pipe(gulp.dest('dist/html/Admin_Pages'))

        .pipe(livereload());
});


////////////////////////////////////////////////////////////////////
// scss files


// task one (css)
gulp.task('task_of_css', function(){
    return gulp.src(["stages/css/**/*.css" ,"stages/css/**/*.scss" ])
        // reload changes 
        .pipe(newer("stages/css/**/*.scss"))                                                                                          
        //start source map
        .pipe(sourcemaps.init())                      
            .pipe(sass({outputStyle: 'compressed'}))      
            // add autoprefixer  
            .pipe(autoprefixer())
            // concat files
            .pipe(concat('main.css'))
        //write source map in a file and put it in dist folder
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css'))
        // notification of task
        .pipe(notify('the end of CSS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
            
});  

// task one (css)
gulp.task('Minfiy_Categories_css', function(){
    return gulp.src("stages/css/sass/home-page/header_categories/*.scss")
        // reload changes 
        .pipe(newer("stages/css/sass/home-page/header_categories/*.scss"))                                                                                          
        //start source map
        .pipe(sourcemaps.init())                      
            .pipe(sass({outputStyle: 'compressed'}))      
            // add autoprefixer  
            .pipe(autoprefixer())
        //write source map in a file and put it in dist folder
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/categories'))
        // notification of task
        .pipe(notify('the end of CSS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
            
});  


// task of sass of Admin pages
gulp.task('convert_Admin_scss', function(){
    return gulp.src("stages/css/sass/Admin_Pages/*.scss")
        // reload changes 
        .pipe(newer("stages/css/sass/Admin_Pages/*.scss"))                                                                                          
        //start source map
        .pipe(sourcemaps.init())                      
            .pipe(sass({outputStyle: 'compressed'}))      
            // add autoprefixer  
            .pipe(autoprefixer())
        //write source map in a file and put it in dist folder
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/Admin_Pages'))
        // notification of task
        .pipe(notify('the end of CSS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
});

// task of sass of Admin pages
gulp.task('Sales_policy_scss', function(){
    return gulp.src("stages/css/sass/Sales_policy/*.scss")
        // reload changes 
        .pipe(newer("stages/css/sass/Sales_policy/*.scss"))                                                                                          
        //start source map
        .pipe(sourcemaps.init())                      
            .pipe(sass({outputStyle: 'compressed'}))      
            // add autoprefixer  
            .pipe(autoprefixer())
        //write source map in a file and put it in dist folder
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/css/Sales_policy'))
        // notification of task
        .pipe(notify('the end of CSS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
});

///////////////////////////////////////////////////////////////
// js files

// task of minify javascript files

gulp.task('Minfiy_js',function(){
    return gulp.src('stages/js/**/*.js')
        // reload changes 
        .pipe(newer('stages/js/**/*.js'))

        .pipe(gulp.dest('dist/js'))
        .pipe(minify())
        // notification of task
        .pipe(notify('the end of JS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
})


// task of minify jquery files

gulp.task('Minfiy_jq',function(){
    return gulp.src('stages/jq/*.js')
        // reload changes 
        .pipe(newer('stages/jq/*.js'))
        // concat files of js 
        .pipe(concat('All_jq.js'))

        .pipe(gulp.dest('dist/jq'))
        .pipe(minify())
        // notification of task
        .pipe(notify('the end of JS Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
})




///////////////////////////////////////////////////////////////////
//  images files

// task of minify images

gulp.task('Minfiy_images',function(){
    var img_src = ['stages/images/*.jpg' , 'stages/images/*.jpeg' , 'stages/images/*.png'];
    return gulp.src(img_src)
        // reload changes 
        .pipe(gulp.dest('dist/images'))
        .pipe(minify())
        // notification of task
        .pipe(notify('the end of images Task !--'))
        // live loader to watch any change 
        .pipe(livereload())
})


///////////////////////////////////////////////////////////////////
//compressed_files

// task of compressed all files in distripution(dist)
gulp.task('compressed_files',function(){
    return gulp.src('dist/**/*.*')
        .pipe(zip('website.zip'))
        .pipe(gulp.dest('Final_Application'))
        .pipe(notify('files are compressd'))
}) 




////////////////////////////////////////////////////////////////////
// task of watch:

gulp.task('watch', function() {
    require('./server.js')

    // start scss filess
    
    // watch scss files
    gulp.watch('stages/css/**/*.scss', gulp.series('task_of_css'));

    // Minfiy_Categories_css
    gulp.watch('stages/css/sass/home-page/header_categories/*.scss', gulp.series('Minfiy_Categories_css'));


    // watch scss of admin pages 
    gulp.watch('stages/css/sass/Admin_Pages/*.scss', gulp.series('convert_Admin_scss'));

     // watch scss of Sales_policy
    gulp.watch('stages/css/sass/Sales_policy/*.scss', gulp.series('Sales_policy_scss'));

    // end scss files
    ////////////////////////////////////////////////////////////



    // strat pug files
    
    // watch html files
    gulp.watch('stages/html/**/*.pug' , gulp.series('convert_pug'));
    
    //watch Categories_pages
    gulp.watch('stages/html/pug/home-page/Header_Categories/*.pug' , gulp.series('Categories_pages'));

    // watch admin pages
    gulp.watch('stages/html/pug/Admin_Pages/**/*.pug' , gulp.series('convert_Admin_pug'));

    // watch sales_polices_pages 
    gulp.watch('stages/html/pug/Sales_policy/*.pug' , gulp.series('sales_polices_pages'));

    
     // end pug files
    ////////////////////////////////////////////////////////////

    // strat javascript files

    // watch js files
    gulp.watch('stages/js/**/*.js' , gulp.series('Minfiy_js'));

    // watch jq files
    gulp.watch('stages/jq/*.js' , gulp.series('Minfiy_jq'));



    // end javascript files
    ////////////////////////////////////////////////////////////



    // watch images
    gulp.watch(['stages/images/*.jpg' , 'stages/images/*.jpeg' , 'stages/images/*.png'] , gulp.series('Minfiy_images'));



     // watch compressed files
    gulp.watch('dist/**/*.*', gulp.series('compressed_files'));


});

