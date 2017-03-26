var typescript = require('gulp-tsc');
var gulp = require('gulp');
gulp.task('compile', function() {
    return gulp.src([
        __dirname + "/ts/*.ts"
    ]).pipe(typescript({
        "target": "es5", //编译之后生成的JavaScript文件需要遵循的标准。有三个候选项：es3、es5、es2015
        "module": "commonjs", //模块使用nodejs的标准,遵循的JavaScript模块规范。
    })).pipe(gulp.dest(__dirname + '/js/'));
});
gulp.task('default', ["compile"]); //定义默认任务 elseTask为其他任务