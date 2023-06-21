class Student {
    constructor(name, school) {
        this.name = name;
        this.school = school;
    }
}

const newStudent1 = new Student('Akash', ' Goaldanga Madreash')

console.log(newStudent1)


class Parent{
    constructor() {
        this.fatherName = 'Modu'
    }
}
class Children extends Parent {
  constructor(name) {
    super();
    this.name = name;
  }
  getFullName() {
    return `${this.name} ${this.fatherName}`;
  }
}



const baby = new Children('omar')
const baby2= new Children('Amir Khan')
console.log("get full name :-", baby.getFullName());
console.log('get full name :-', baby2.getFullName())

// array destructuring

const colors = ['red', 'green', 'blue', 'purle', 'yellowGreen', 'tomato'];

const [firstColor , ...otherColors] = colors;
console.log(otherColors);
console.log(firstColor);

// object desturctirung

const product = {
    name: 'Pen',
    price: 5,
    address: {
        // location: 'Goaldanga Bazar',

    }
}

const {address:{location:place='khulna'} } = product;

console.log(place);

const numbers = [100, 55, 75, 99]
const highestNumber = Math.min(...numbers)
console.log('lowestAmount',highestNumber)

const business = 650;
const minister = 520;
const teacher = 100;

const maximum = Math.max(business, minister, teacher)
console.log('MaximumNumber :', maximum)


const friendsAge = [25, 26, 23]
console.log(friendsAge.length)
friendsAge.push(35)
console.log(friendsAge)


// function destructuring
const info = {
    name: 'ibrahim',
    age: 26,
    location: {
        villageName: 'satkhira',
        post:'Gamalnagor'
    }
}

function getInfo({ name, location: { post } }) {
    console.log(` myName is: ${name} and my postOffice is ${post}`);
}
getInfo(info)

// if else condition checking

const age = 26;
if (age) {
    console.log(`you are adult`)
}
else {
    console.log(`your are child`)
}