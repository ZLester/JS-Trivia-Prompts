var mentor = 'Zach';

var foo = {
  mentor: 'Beth',
  key: {
    mentor: 'Sunny',
    getMentor: function() {
      return this.mentor;
    }
  }
}

var findMentor = foo.key.getMentor;

console.log(foo.key.getMentor());
console.log(findMentor());
// What will each of the above log (and why)?

// Modify each of the following invocations of `findMentor` to achieve the desired result
console.log(findMentor()); // 'Zach'
console.log(findMentor()); // 'Beth'
console.log(findMentor()); // 'Sunny'

// Bonus: Will `findMentor` behave differently in the browser vs. in Node? Why/why not?
