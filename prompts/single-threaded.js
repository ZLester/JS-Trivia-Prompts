var Project = function (title, link, stack) {
  this.title = title;
  this.link = link;
  this.stack = stack;
};

Project.prototype.describeStack = function() {
  this.stack.forEach(function(framework) {
    console.log(this.title + ' was built with ' + framework);
  });
};

var myTitle = 'Sewing with JavaScript';
var myLink = 'http://www.knithub.com/sewingWithJS';
var myStack = ['React', 'Node', 'MongoDB'];
var sewingWithJS = new Project(myTitle, myLink, myStack);

// What will the following log? Why?
sewingWithJS.describeStack();

// How does `sewingWithJS` access the `describeStack` method?
// How would you modify the `describeStack` method to achieve the expected functionality?
