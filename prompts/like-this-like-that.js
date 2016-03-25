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

// What will each of the above log?
// Why?

// Modify each of the following invocations of findMentor to achieve the desired result
console.log(findMentor()); // 'Zach'
console.log(findMentor()); // 'Beth'
console.log(findMentor()); // 'Sunny'
