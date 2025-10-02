function person(name, age) {
    this.name = name;
    this.age = age;
    console.log(name, age);
}

const person1 = new person("Sultan Ashraf", 26);

function a() {
    console.log("a called");
}

const fun = function(p1, p2){
    console.log("b called");
}

a();
fun();
