for (var i = 0; i < 5; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 100);
}

// What will the above loop log?
// Why does this occur?

// Change the setTimeout delay to 0. 
// Will this change the above behavior? Why/why not?

// Modify the above to log the expected result.