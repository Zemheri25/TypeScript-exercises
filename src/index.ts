// let myname : string | number = "ömer";

// function change() {
//     myname = "bahar",
//     myname = 25
// };

// function check() {
//     if(typeof myname === "string") {
//        myname.replace("ömer", "bahar")
//     }

// }

// let myObject: {
//   name: string;
//   surname: string;
//   age: 28;
// } = {
//   name: "ömer",
//   surname: "zemheri",
//   age: 28,
// };

// myObject.name = "Bahar";


// const myArray : (string |boolean | number)[] = [true, 2, 3, "ömer"];


// console.log(myArray);
// console.log("bahar")

// const myArray : [string, string, number] = ["Ömer", "Zemheri", 25];

// myArray[2].toFixed();
// myArray[0] = "Bahar";

// console.log(myArray);


// function F(): number {
//     return 25
// };

// const c = F();
// console.log(c)


// function LogPerson (name : string, surname : string, age : number) {
//     return  {name, surname, age}
    
// };


// console.log(LogPerson("Ömer", "Zemheri", 28));



// const myFunction = (name: string, number : number) => {
//     for(let i = 0; i < number; i++) {
//         console.log(name)
//     }
// };


// myFunction("Ömer", 10);

// type Person = {
//     name? : string,
//     surname? : string,
//     age? : number
// };


// type Dog = {
//     age? : number,
//     cins? : string,
//     tur? : string
// };


// type DogPerson = Dog & Person;


// const personDog : DogPerson =  {
//     name : "John",
//     surname : "Smith",
//     age : 12,
//     cins : "male",
//     tur : "alabai"


// };


// console.log(personDog);



import Person, {Student} from "./person";
import Job from "./Job"


console.log(Person.isim);
console.log({
    isim : "Ömer",
    sinif : 123
} as Student);

console.log(Job.age);
console.log(Job.jobTitle);
console.log(Job.sleepTime);


