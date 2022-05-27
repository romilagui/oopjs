// Object Oriented Programming

// Person Constructor
function Person(name, dob) {
    this.name = name;
    //this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function(){
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
//const brad = new Person('Brad', 30);
//const john = new Person('John', 32);
const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());

// String
const name1 = 'Jeff';
const name2 = new String('Jeff');
//name2.foo = 'bar';
console.log(name2);

console.log(typeof name1);
console.log(typeof name2);

if(name1 === 'Jeff'){
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num2)

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function(x,y) {
return x + y;
}
const getSum2 = new Function('x','y', 'return x + y')
console.log(getSum2(1,4));

// Object
const john = 


