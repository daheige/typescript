class Person{
    say(){
        console.log('person');
    };
    constructor(name:string,age:number,height:number){
        this.name = name;
        this.age = age;
        this.height = height;
    };
}

var user = new Person('daheige',23,172);
user.say();