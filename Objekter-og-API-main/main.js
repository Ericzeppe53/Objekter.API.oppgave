//1. create an array of 5 person objects, the objects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
let people = [
    { firstName: "Bosse", lastName: "Gustavsson", age: 45, job: true },
    { firstName: "Lars", lastName: "Andersson", age: 37, job: false },
    { firstName: "Robert", lastName: "Johnsson", age: 25, job: true },
    { firstName: "Gunnar", lastName: "Svensson", age: 55, job: true },
    { firstName: "Gunilla", lastName: "Rehnqvist", age: 29, job: false }
  ];
//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------
.firstName + "Bosse" + people[0]["Gustavsson"]);

//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------

firstName: "Lars", 
lastName: "Andersson", 
age: 37, 
job: false, 
fullName: function() {
  return this.firstName + " " + this.lastName;

for (let person of people) {
    person.fullName = function() {
      return this.firstName + " " + this.lastName;
    };


//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.

firstName: "Robert",
  lastName: "Johnsson",
  age: 25,
  job: true

//------------------------------------------------------------------------------------------------------------------------------------------------

//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.

function fotballPubben(Robert Johnsson)

if (person.age > 18) {
  console.log(`${person.Robert} ${person.Johnsson}: Party time!`);
                     }
  else {
    console.log(`${person.Robert} ${person.Johnsson}: Too young.`);
       }
//------------------------------------------------------------------------------------------------------------------------------------------------

//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------

function university(person, degreeType) {
  if (degreeType === "bachelors") {
    person.age += 3;
    person.degree = "bachelors";
    person.studentLoan = 20000; 
  } else if (degreeType === "masters") {
    person.age += 2; 
    person.degree = "masters";
    person.studentLoan = 60000; 
  } else {
    console.log("Invalid degree type! Choose 'bachelors' or 'masters'.");
    return;
  }

  console.log(person);
}

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.

fetchDogs("retriever", "golden")
fetchDogs("hound", "afghan")
fetchDogs("spaniel", "cocker")
fetchDogs("terrier", "american")
//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------
