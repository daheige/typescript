//定义接口Person，不会在js代码中存在
interface Person{
    name:string,
    age:number,
    is_phper:boolean
}

//函数 info 参数是一个接口类型
function info(user:Person){
    console.log('name is'+user.name+'age '+user.age+'is_phper '+user.is_phper);
}

info({name:"daheige",age:23,is_phper:1});
info({name:"zhuwei",age:27,is_phper:0});