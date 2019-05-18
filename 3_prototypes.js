//Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//get Summary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

//get Age
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

//revise /Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instantiate an Object
const book1 = new Book("book1", "John Doe", 2013);
const book2 = new Book("book2", "Jane Doe", 2016);

console.log(book2);
console.log(book2.getSummary());
console.log(book2.getAge());
book2.revise("2018");
console.log(book2);