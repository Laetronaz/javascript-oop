// console.log(navigator.appVersion);

// Object Literal
const book1 = {
  title: "book1",
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: "book2",
  author: "Jane Doe",
  year: "2016",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(Object.values(book2));
// console.log(Object.keys(book2));
