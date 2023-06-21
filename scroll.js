
function myFunction() {

let search = document.getElementById("search");

let image = document.querySelectorAll(".image");

for (let i = 0; i < image.length; i++) {
  image[i].style.display = "none";
}

for (let p = 0; p < image.length; p++) {
  let title = image[p].getAttribute("data-title");

  if (search.value == title) {
    image[p].style.display = "block";
  }
  if (search.value == "") {
    image[p].style.display = "block";
  }
}
}


// wood count

// function woodCalculator (chair, table, bed){
//   let chairWood = chair + 1; //5
//   let tableWood = table + 3; //9
//   let bedWood = bed + 5; //45

//   if (chair < 0) {
//     return `Quantity cannot be negative`
//   }

//   if (table < 0) {
//     return `Quantity can not be negative`
//   }
//   if (bed < 0) {
//     return `Quantity can not be negative`
//   }

//   let totalWood = chairWood + tableWood + bedWood;
//   return totalWood;
// }

// console.log(woodCalculator(1, 3, 9))


// convert feet to miles

// function feetToMiles(feet) {
//   if (feet < 0) {
//     console.log(`you may not entered valid feet . please check ...`)
//   }

//   let myFeet = parseFloat(feet);
//   let miles = 0.000189394 * myFeet;
//   console.log('value is the miles :' + miles .toFixed(6))
// }
// feetToMiles(6);




// ES6 Arrow function
// const doMath = (x, y) => {
//   let sum = x + y;
//   let diff = x - y;
//   let result = sum * diff;
//   return result;
// }

// console.log(doMath(7, 5))


// const business = 650;
// const minister = 700;
// const sochib = 250;

// const maximum = Math.max(business, minister, sochib);
// console.log(maximum)

// spread operator practicing
const money = [650, 430, 250]
const maximum = Math.max(...money);
console.log('Hightest Money :',maximum)

const business = 800;
const minister = 900;
const teacher = 100;

const maximumValue = Math.max(business, minister, teacher);
console.log('maximum value :', maximumValue)

// class constructor

class Student{
  constructor(name, Id, password) {
    this.name = name;
    this.Id = Id;
    this.password = password;
    this.collage= 'Government BL collage Khulna'
  }
}

const Student1 = new Student('ibrahim', 101, 1010101)

const Student2 = new Student('Rabeya ', 1, 97864532)

console.log(Student2)

// inheritance

class Parent{
  constructor() {
    this.fatherName = "Nazrul Islam";
  }
}

class Child extends Parent{
  constructor(name) {
    super();
    this.childName = name;
  }

  getFullName() {
    // return this.childName +  ' '+this.fatherName;
    return `childName : ${this.childName}
fatherName: ${this.fatherName}`
  }
}

const baby1 = new Child('ibrahim')
const baby2 = new Child('omar')

console.log(baby1.getFullName())
console.log(baby2.getFullName())


const product = {
  name: 'book',
  price: 100,
  id:1
}

const { name:title} = product;
console.log(title)