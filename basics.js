var myName = "Kanoa";

var person = {
  name: "Kanoa",
  age: 18
};

var canDrive = true;
if(person.age >= 16) {
  canDrive = true;
}

var greet = function(name){
  console.log("Hello, my name is " + name);
};

var dataTypes = [
  1, "hello", true, undefined, null, ["yup", "this is an array"]
];

var dog = {
  name: "Spot",
  bark: function(){
    console.log("bark");
  }
};
