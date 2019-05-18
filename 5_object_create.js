// Object Of Protos
const bookProto = {
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function() {
    return `${this.title} is ${years} years old`;
  }
};

//Create Object
const book1 = Object.create(bookProto);
book1.title = "Book1";
book1.author = "John Doe";
book1.year = 2013;

const book2 = Object.create(bookProto, {
  title: { value: "Book2" },
  author: { value: "Jane Doe" },
  year: { value: 2016 }
});

console.log(book1);
console.log(book2);
