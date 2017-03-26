var typescript = require('gulp-tsc');
var gulp = require('gulp');
gulp.task('compile', function() {
    return gulp.src([
        __dirname + "/ts/*.ts"
    ]).pipe(typescript({
        "target": "es5", //编译之后生成的JavaScript文件需要遵循的标准。有三个候选项：es3、es5、es2015
        "module": "commonjs", //模块使用nodejs的标准,遵循的JavaScript模块规范。遵循的JavaScript模块规范。主要的候选项有：commonjs、AMD和es2015
        "noImplicitAny": false,//为false时，如果编译器无法根据变量的使用来判断类型时，将用any类型代替。
        // 为true时，将进行强类型检查，无法推断类型时，提示错误。
        "removeComments": true, //编译生成的JavaScript文件是否移除注释
        "sourceMap": false, //编译时是否生成对应的source map文件。这个文件主要用于前端调试。当前端js文件被压缩引用后，出错时可借助同名的source map文件查找源文件中错误位置
    })).pipe(gulp.dest(__dirname + '/js/'));
});
gulp.task('default', ["compile"]); //定义默认任务 elseTask为其他任务